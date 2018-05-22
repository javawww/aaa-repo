package com.shengchuang.entity;

import java.io.Serializable;
/**
 * 前台  我要偷取 偷取记录 被偷记录
 * @author Administrator
 *
 */
@SuppressWarnings("serial")
public class StealLogEntity implements Serializable{

	private java.lang.Integer    			id; //主键
	private java.util.Date 					stealTime;//偷取时间
	private java.math.BigDecimal  			stealSalar;//偷取金额
	private java.lang.String 				stealFrom;//偷取人  即偷取了哪位玩家 关联玩家编号
	private java.lang.String     			stealBy;//被偷人  即小偷是谁 关联玩家编号
	private java.lang.Integer 				treeNum;//偷取树的编号  
	private java.lang.String				showTime;//给前台看的格式化的时间  
	
	public java.lang.String getShowTime() {
		return showTime;
	}
	public void setShowTime(java.lang.String showTime) {
		this.showTime = showTime;
	}
	public java.lang.Integer getId() {
		return id;
	}
	public void setId(java.lang.Integer id) {
		this.id = id;
	}
	public java.util.Date getStealTime() {
		return stealTime;
	}
	public void setStealTime(java.util.Date stealTime) {
		this.stealTime = stealTime;
	}
	public java.math.BigDecimal getStealSalar() {
		return stealSalar;
	}
	public void setStealSalar(java.math.BigDecimal stealSalar) {
		this.stealSalar = stealSalar;
	}
	public java.lang.String getStealFrom() {
		return stealFrom;
	}
	public void setStealFrom(java.lang.String stealFrom) {
		this.stealFrom = stealFrom;
	}
	public java.lang.String getStealBy() {
		return stealBy;
	}
	public void setStealBy(java.lang.String stealBy) {
		this.stealBy = stealBy;
	}
	public java.lang.Integer getTreeNum() {
		return treeNum;
	}
	public void setTreeNum(java.lang.Integer treeNum) {
		this.treeNum = treeNum;
	}
	
	
	
}
