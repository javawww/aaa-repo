package com.shengchuang.entity;

import java.io.Serializable;
/**
 * 命名规范  ：驼峰命名法
 * @author Administrator
 *
 */
@SuppressWarnings("serial")
public class User implements Serializable{

	private java.lang.Integer    id; //主键
	
	private java.lang.String userName;//用户名
	
	private java.lang.String  password;//登录密码
	
	private java.lang.String tradePwd;//交易密码
	
	private java.lang.Integer  gender;//性别
	
	private java.lang.String teleNum;//手机号
	
	private java.lang.String realName;//真实姓名
	
	private java.lang.String wechatNum;//微信号
	
	private java.lang.Integer accountLevel;//账号级别

	public java.lang.Integer getId() {
		return id;
	}

	public void setId(java.lang.Integer id) {
		this.id = id;
	}

	public java.lang.String getUserName() {
		return userName;
	}

	public void setUserName(java.lang.String userName) {
		this.userName = userName;
	}

	public java.lang.String getPassword() {
		return password;
	}

	public void setPassword(java.lang.String password) {
		this.password = password;
	}

	public java.lang.String getTradePwd() {
		return tradePwd;
	}

	public void setTradePwd(java.lang.String tradePwd) {
		this.tradePwd = tradePwd;
	}

	public java.lang.Integer getGender() {
		return gender;
	}

	public void setGender(java.lang.Integer gender) {
		this.gender = gender;
	}

	public java.lang.String getRealName() {
		return realName;
	}

	public void setRealName(java.lang.String realName) {
		this.realName = realName;
	}

	public java.lang.String getWechatNum() {
		return wechatNum;
	}

	public void setWechatNum(java.lang.String wechatNum) {
		this.wechatNum = wechatNum;
	}

	public java.lang.Integer getAccountLevel() {
		return accountLevel;
	}

	public void setAccountLevel(java.lang.Integer accountLevel) {
		this.accountLevel = accountLevel;
	}

	public java.lang.String getTeleNum() {
		return teleNum;
	}

	public void setTeleNum(java.lang.String teleNum) {
		this.teleNum = teleNum;
	}

	public User(Integer id, String userName, String password, String tradePwd, Integer gender, String teleNum,
			String realName, String wechatNum, Integer accountLevel) {
		super();
		this.id = id;
		this.userName = userName;
		this.password = password;
		this.tradePwd = tradePwd;
		this.gender = gender;
		this.teleNum = teleNum;
		this.realName = realName;
		this.wechatNum = wechatNum;
		this.accountLevel = accountLevel;
	}

	public User() {
	}

	
}
