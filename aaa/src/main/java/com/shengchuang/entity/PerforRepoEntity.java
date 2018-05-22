package com.shengchuang.entity;

import java.io.Serializable;

/**
 * 业绩统计 全网会员 种植情况
 * @author Administrator
 *
 */
@SuppressWarnings("serial")
public class PerforRepoEntity implements Serializable {
	
	private java.lang.Integer    			id; //主键
	private java.lang.String 				memNum;//会员编号
	private java.lang.Integer    			plantType; //种植类型 0银树  1金树
	private java.lang.Integer 				treeNum;//种树编号 
	private java.math.BigDecimal 			seedSalar;   //投资金额 即 种子积分
	private java.util.Date 					plantTime;//种植时间  创建时间  
	private java.lang.Integer 				memId;//会员ID
	
	
	public java.lang.Integer getId() {
		return id;
	}
	public void setId(java.lang.Integer id) {
		this.id = id;
	}
	public java.lang.String getMemNum() {
		return memNum;
	}
	public void setMemNum(java.lang.String memNum) {
		this.memNum = memNum;
	}
	public java.lang.Integer getPlantType() {
		return plantType;
	}
	public void setPlantType(java.lang.Integer plantType) {
		this.plantType = plantType;
	}
	public java.math.BigDecimal getSeedSalar() {
		return seedSalar;
	}
	public void setSeedSalar(java.math.BigDecimal seedSalar) {
		this.seedSalar = seedSalar;
	}
	public java.util.Date getPlantTime() {
		return plantTime;
	}
	public void setPlantTime(java.util.Date plantTime) {
		this.plantTime = plantTime;
	}
	public java.lang.Integer getTreeNum() {
		return treeNum;
	}
	public void setTreeNum(java.lang.Integer treeNum) {
		this.treeNum = treeNum;
	}
	public java.lang.Integer getMemId() {
		return memId;
	}
	public void setMemId(java.lang.Integer memId) {
		this.memId = memId;
	}
	
	

}
