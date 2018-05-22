package com.shengchuang.web.util;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

public class RestoreDbFile {

	public static void clear() {

		try {

			int rscreatedb = -1;

			String cmdPath = "cmd,exe /c";
			String mysqlPath = "mysql";
			String dbName = "goldentree";
			String mysqlFilePath = "d:\\a.sql";

			String dbUserName = "root";
			String dbPassword = "root";
			String mysqlURL = "jdbc:mysql://localhost:3306/";
			Class.forName("com.mysql.jdbc.Driver");

			Connection mysqlconn = DriverManager.getConnection(mysqlURL, dbUserName, dbPassword);

			Statement stmtcreatedb = mysqlconn.createStatement();
			rscreatedb = stmtcreatedb.executeUpdate("CREATE DATABASE IF NOT EXISTS " + dbName);
			if (rscreatedb == 1) {
				System.out.println("Database created successfully");
			} else {
				System.out.println("Unable to create Database");
			}

			restoreDB(cmdPath, mysqlPath, dbUserName, dbPassword, dbName, mysqlFilePath);

		} catch (Exception ex) {
			ex.printStackTrace();
		}
	}

	public static boolean restoreDB(String cmdPath, String mysqlPath, String dbUserName, String dbPassword,
			String dbName, String mysqlFilePath) {

		boolean status = false;

		String executeCmd = cmdPath + " " + mysqlPath + " --user=" + dbUserName + " --password=" + dbPassword
				+ " --database=" + dbName + " &lt; " + mysqlFilePath;

		Process runtimeProcess;
		try {
			runtimeProcess = Runtime.getRuntime().exec(executeCmd);
			InputStream stderr = runtimeProcess.getInputStream();
			InputStreamReader isr = new InputStreamReader(stderr);
			BufferedReader br = new BufferedReader(isr);
			String msg = null;
			while ((msg = br.readLine()) != null)
				System.out.println(msg);
			int processComplete = runtimeProcess.waitFor();
			if (processComplete == 0) {
				status = true;
			} else {
				InputStream stdmsg = runtimeProcess.getErrorStream();
				InputStreamReader isrm = new InputStreamReader(stdmsg);
				BufferedReader brm = new BufferedReader(isrm);
				String msgex = null;
				System.out.println("----ERROR----");
				while ((msgex = brm.readLine()) != null)
					System.out.println(msgex);
				System.out.println("----ERROR----");
				status = false;
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			status = false;

		}

		return status;
	}
}