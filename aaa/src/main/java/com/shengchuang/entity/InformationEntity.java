package com.shengchuang.entity;

import java.io.Serializable;
/**
 * 信息管理  新闻公告 
 * @author Administrator
 * 后天管理新闻公告内容 前台可以查看新闻公告内容
 */
@SuppressWarnings("serial")
public class InformationEntity implements Serializable{

	private java.lang.Integer    			id; //主键
	private java.lang.Integer    			infNum; //新闻编号
	private java.lang.Integer    			infType; //新闻类别  1普通公告 2活动公告 3其他公告
	private java.lang.String 				infTitle;//新闻标题
	private java.util.Date 					createTime;//创建时间
	private java.util.Date 					pubTime;//发布时间  
	private java.lang.String 				infContent;//新闻内容 html编辑器控制
	private java.lang.Integer    			memid; //外键 关联当前管理员
	private String 							showPubTime;
	
	
	public String getShowPubTime() {
		return showPubTime;
	}
	public void setShowPubTime(String showPubTime) {
		this.showPubTime = showPubTime;
	}
	public java.lang.Integer getId() {
		return id;
	}
	public void setId(java.lang.Integer id) {
		this.id = id;
	}
	public java.lang.Integer getInfNum() {
		return infNum;
	}
	public void setInfNum(java.lang.Integer infNum) {
		this.infNum = infNum;
	}
	public java.lang.Integer getInfType() {
		return infType;
	}
	public void setInfType(java.lang.Integer infType) {
		this.infType = infType;
	}
	public java.lang.String getInfTitle() {
		return infTitle;
	}
	public void setInfTitle(java.lang.String infTitle) {
		this.infTitle = infTitle;
	}
	public java.util.Date getCreateTime() {
		return createTime;
	}
	public void setCreateTime(java.util.Date createTime) {
		this.createTime = createTime;
	}
	public java.util.Date getPubTime() {
		return pubTime;
	}
	public void setPubTime(java.util.Date pubTime) {
		this.pubTime = pubTime;
	}
	public java.lang.String getInfContent() {
		return infContent;
	}
	public void setInfContent(java.lang.String infContent) {
		this.infContent = infContent;
	}
	public java.lang.Integer getMemid() {
		return memid;
	}
	public void setMemid(java.lang.Integer memid) {
		this.memid = memid;
	}
	
	
	
	
	
	
	
	
	
}
