package com.shengchuang.web.controller;

import java.io.BufferedReader;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List; 
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.shengchuang.core.GridData;
import com.shengchuang.core.ResultCode;
import com.shengchuang.entity.BonusInfEntity;
import com.shengchuang.entity.BonusRepoEntity;
import com.shengchuang.entity.InformationEntity;
import com.shengchuang.entity.MemberEntity;
import com.shengchuang.entity.MysqlBackupEntity;
import com.shengchuang.service.BackupService;
import com.shengchuang.service.BonusService;
import com.shengchuang.service.InfoService;
import com.shengchuang.web.controller.BaseController;
import com.shengchuang.web.util.MysqlBackupUtil;
import com.shengchuang.web.util.PropertiesUtil;
import com.shengchuang.web.util.ResourceUtil;
import com.shengchuang.web.util.RestoreDbFile;
import com.shengchuang.web.util.WebAdminSession;
import com.shengchuang.web.util.WebFrontSession;
import com.alibaba.fastjson.JSON; 
/**
 *  借用时，自动装配service bean要修改两处，举例为DdService,
	@Resource(name="ddService")
	private DdService backupService;
 * 
 * 
 *
 */
@Controller
@RequestMapping(value = "admin/mysql")
public class BackupController extends BaseController{
	
	@Autowired
	private BackupService backupService;
	
	
	/**
	 * 查
	 * @param page 分页
	 * @param jhState 是否激活，分类查看用的;类型务必为String，否则一切看起来正常，唯独值为0时有暗病
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "/findBackup")
	public ResultCode findAllBonusRepo(HttpServletRequest httpServletRequest, Model model, Integer page) {
		List<MysqlBackupEntity> list = backupService.findFB(page);
		int count = backupService.findAllCount();
		GridData griddata = new GridData();
		griddata.setData(list);
		griddata.setRecordsTotal(count);
		griddata.setPage(page);  
		return ResultCode.newRightCode(griddata);
	}
	
	
	/**
	 * 数据库备份操作  输出sql语句 20170710152214.sql
	 */
	@ResponseBody
	@RequestMapping(value = "/addBackup")
	public ResultCode addBackup(HttpServletRequest httpServletRequest, String message) {
		PropertiesUtil util = new PropertiesUtil("sysConfig.properties");
		String backupBinPath = util.readProperty("backupBinPath");
		String backupSqlPath = util.readProperty("backupSqlPath");
		Date now = new Date();
        try {
            Runtime rt = Runtime.getRuntime();
            // 调用 调用mysql的安装目录的命令
            Process child = rt.exec(backupBinPath);
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
            String goalName= new SimpleDateFormat("yyyyMMddHHmmss").format(now)+".sql";
            String goalPath = backupSqlPath+goalName;
            FileOutputStream fout = new FileOutputStream(goalPath);
            OutputStreamWriter writer = new OutputStreamWriter(fout, "utf-8");
            //生成yyyyMMddHHmmss.sh文件  一键还原调用
            String bashStr = "";
            bashStr += "for j in \' "+goalPath+" \'";
            bashStr += "\n do";
            bashStr += "\n mysql -uroot -psc19900514 goldentree_prd < " + goalPath;
            bashStr += "\n done"; 
            String restorePath_File = backupSqlPath+new SimpleDateFormat("yyyyMMddHHmmss").format(now)+".sh";
            OutputStreamWriter restorePath_File_writer = 
            		new OutputStreamWriter(new FileOutputStream(restorePath_File), "utf-8");
            writer.write(outStr);
            writer.flush();
            in.close();
            xx.close();
            br.close();
            writer.close();
            fout.close();
            //一键还原流 写入 和关闭
            restorePath_File_writer.write(bashStr);
            restorePath_File_writer.flush();
            restorePath_File_writer.close();
            
            int result = backupService.add(goalName, message, now, goalPath);			
			return ResultCode.newRightCode(result);
        } catch (Exception e) {
            e.printStackTrace();
        }
		return ResultCode.newRightCode(-1);
	} 
	  
	/**
	 * 一键还原 操作  通过执行.sh脚本 实现mysql数据库还原操作
	 * 
	 */
	@ResponseBody
	@RequestMapping(value = "/restore")
	public ResultCode restore(HttpServletRequest httpServletRequest, Integer id) {
		MysqlBackupEntity mysqlBackup = backupService.findBackupById(id);
		if(mysqlBackup!=null){
			String shPath = mysqlBackup.getLocation();
			shPath = shPath.replaceAll("sql", "sh");
			try {
				String cmdstring = "chmod a+x "+shPath;
				Process proc = Runtime.getRuntime().exec(cmdstring);
				proc.waitFor(); 
				cmdstring = "bash "+shPath; 
				proc = Runtime.getRuntime().exec(cmdstring);
				String ls_1;
				BufferedReader bufferedReader = new BufferedReader( new InputStreamReader(proc.getInputStream()));
				while ( (ls_1=bufferedReader.readLine()) != null);
				bufferedReader.close();
				Integer result = proc.waitFor();
				if(result == 0){
					return ResultCode.newRightCode(1);
				}else{
					return ResultCode.newRightCode(-1);
				}
			} catch (IOException | InterruptedException e) {
				e.printStackTrace();
			}
		}
		return ResultCode.newRightCode(-1);
	} 
	
	/**
	 * 管理员删
	 */
	@ResponseBody
	@RequestMapping(value = "/deleteBackup")
	public ResultCode deleteBackup(String ids) {
		int aa=1;
		int result = backupService.delete(ids);
		return ResultCode.newRightCode(result);
	}
	
	/**
	 * 管理员清空数据库，回到最初的纯净版
	 * 1清空数据库成功了
	 * -1清空数据库失败了
	 */
	@SuppressWarnings("rawtypes")
	@ResponseBody
	@RequestMapping(value =  "/clearDb")
	public ResultCode clearDb() {
		try {
			String cmdstring = "chmod a+x /root/t8080/webapps/ROOT/WEB-INF/classes/sql-sh/clean.sh";
			Process proc = Runtime.getRuntime().exec(cmdstring);
			proc.waitFor(); 
			cmdstring = "bash /root/t8080/webapps/ROOT/WEB-INF/classes/sql-sh/clean.sh"; 
			proc = Runtime.getRuntime().exec(cmdstring);
			String ls_1;
			BufferedReader bufferedReader = new BufferedReader( new InputStreamReader(proc.getInputStream()));
			while ( (ls_1=bufferedReader.readLine()) != null);
			bufferedReader.close();
			Integer result = proc.waitFor();
			if(result == 0){
				return ResultCode.newRightCode(1);
			}else{
				return ResultCode.newRightCode(-1);
			}
		} catch (IOException | InterruptedException e) {
			e.printStackTrace();
		}
		return ResultCode.newRightCode(-1);
	}
	
}
