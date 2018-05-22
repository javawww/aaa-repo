package com.shengchuang.entity;

import java.io.Serializable;
/**
 * 投资统计  全网会员 种植明细
 * @author Administrator
 *
 */
@SuppressWarnings("serial")
public class InvestRepoEntity implements Serializable{

	private java.lang.Integer    			id; //主键
	private java.util.Date  				plantTime;  //种植时间
	private java.lang.Integer    			goldCount; //种植金树数量
	private java.lang.Integer    			silvCount; //种植银树数量
	private java.math.BigDecimal 			seedCount;   //耗费种子积分数量
	private java.lang.Integer    			treeNum; //种植编号 即 第几棵树
	private java.lang.String 				memNum;//关联所属用户编号 示例 A00005
	public java.lang.Integer getId() {
		return id;
	}
	public void setId(java.lang.Integer id) {
		this.id = id;
	}
	public java.util.Date getPlantTime() {
		return plantTime;
	}
	public void setPlantTime(java.util.Date plantTime) {
		this.plantTime = plantTime;
	}
	public java.lang.Integer getGoldCount() {
		return goldCount;
	}
	public void setGoldCount(java.lang.Integer goldCount) {
		this.goldCount = goldCount;
	}
	public java.lang.Integer getSilvCount() {
		return silvCount;
	}
	public void setSilvCount(java.lang.Integer silvCount) {
		this.silvCount = silvCount;
	}
	public java.math.BigDecimal getSeedCount() {
		return seedCount;
	}
	public void setSeedCount(java.math.BigDecimal seedCount) {
		this.seedCount = seedCount;
	}
	public java.lang.Integer getTreeNum() {
		return treeNum;
	}
	public void setTreeNum(java.lang.Integer treeNum) {
		this.treeNum = treeNum;
	}
	public java.lang.String getMemNum() {
		return memNum;
	}
	public void setMemNum(java.lang.String memNum) {
		this.memNum = memNum;
	}
	
	
	
	
	
	
}
