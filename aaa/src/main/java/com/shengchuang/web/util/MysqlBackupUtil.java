package com.shengchuang.web.util;

import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.UnsupportedEncodingException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.ServletException;


public class MysqlBackupUtil {
	 
	final static String backupBinPath = "/usr/local/mysql/bin/mysqldump -h 123.207.28.216 -uroot -psc19900514 goldentree";
	final static String restoreBinPath = "D:\\Program Files\\MySQL\\mysql-5.6.35-winx64\\bin\\mysqldump -h localhost -uroot -proot --default-character-set=utf8 goldentree ";
	final static String clearPath = "D:\\goldentree20170623.sql";
	final static String testPath = "D:\\test.sql";
	static SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss");
	
	/**
	 * MySQL备份
	 * @param databaseName
	 */
	public static String[] backup(Date now) {
        try {
            Runtime rt = Runtime.getRuntime();
            // 调用 调用mysql的安装目录的命令
            Process child = rt
                    .exec(backupBinPath);
            // 设置导出编码为utf-8。这里必须是utf-8
            // 把进程执行中的控制台输出信息写入.sql文件，即生成了备份文件。注：如果不对控制台信息进行读出，则会导致进程堵塞无法运行
            InputStream in = child.getInputStream();// 控制台的输出信息作为输入流
 
            InputStreamReader xx = new InputStreamReader(in, "utf-8");
            // 设置输出流编码为utf-8。这里必须是utf-8，否则从流中读入的是乱码
 
            String inStr;
            StringBuffer sb = new StringBuffer("");
            String outStr;
            // 组合控制台输出信息字符串
            BufferedReader br = new BufferedReader(xx);
            while ((inStr = br.readLine()) != null) {
                sb.append(inStr + "\r\n");
            }
            outStr = sb.toString();
 
            // 要用来做导入用的sql目标文件：
            String goalName= sdf.format(now)+".sql";
            String goalPath = "/root/dbbak/"+goalName;
            FileOutputStream fout = new FileOutputStream(goalPath);
            OutputStreamWriter writer = new OutputStreamWriter(fout, "utf-8");
            writer.write(outStr);
            writer.flush();
            in.close();
            xx.close();
            br.close();
            writer.close();
            fout.close();
 
            System.out.println("MySQL备份完毕");
            return new String[]{goalName, goalPath};
 
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
	
	/**
	 * MySQL还原
	 * @param databaseName
	 */
	public static boolean restore() throws Exception{
		
		String dbUserName = "root";
		String dbPassword = "sc19900514";
		String source = "/root/sqlbackup/clean.sql";
		
		String cmdstring = "chmod a+x /root/sqlbackup/clean.sh";
		 Process proc = Runtime.getRuntime().exec(cmdstring);
		 proc.waitFor(); 
		 cmdstring = "bash /root/sqlbackup/clean.sh"; 
		 proc = Runtime.getRuntime().exec(cmdstring);
		 String ls_1;
		 BufferedReader bufferedReader = new BufferedReader( new InputStreamReader(proc.getInputStream()));
		 while ( (ls_1=bufferedReader.readLine()) != null);
		 bufferedReader.close();
		 Integer result = proc.waitFor();
		if(result == 0){
			return true;
		}else{
			return false;
		}
    }
	
	/**
	 * 数据库还原到最初纯净版，对应前台的“清空”按钮。
	 */
	public static boolean cleanAll() {
		
		try {
			String cmdstring = "chmod a+x /root/t8080/webapps/ROOT/WEB-INF/classes/sql-sh/clean.sh";
			Process proc;
				proc = Runtime.getRuntime().exec(cmdstring);
			proc.waitFor(); 
			cmdstring = "bash /root/t8080/webapps/ROOT/WEB-INF/classes/sql-sh/clean.sh"; 
			proc = Runtime.getRuntime().exec(cmdstring);
			String ls_1;
			BufferedReader bufferedReader = new BufferedReader( new InputStreamReader(proc.getInputStream()));
			while ( (ls_1=bufferedReader.readLine()) != null);
			bufferedReader.close();
			Integer result = proc.waitFor();
			if(result == 0){
				return true;
			}else{
				return false;
			}
		} catch (IOException | InterruptedException e) {
			e.printStackTrace();
		}
		return false;
	}
	
}
