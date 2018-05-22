package com.shengchuang.entity;

import java.io.Serializable;

/**
 * 收益记录信息  默认  玩家点击金树银树  获取收益数据  
 * @author Administrator
 *
 */
@SuppressWarnings("serial")
public class GainLogEntity implements Serializable {

	
	private java.lang.Integer 				id;//主键
	private java.lang.Integer 				treeNo;//来源树编号 1-10 为银树  11-15为金树
	private java.lang.Integer  				treeType;//0银树  1金树
	private java.math.BigDecimal 			gainSalar;//收益余额   每次点击金树银树获取的收益 累加计算  再次种植是清零
	private java.util.Date 					gainTime;//收益时间 即 创建时间
	private java.lang.Integer 				memId;//外键 关联玩家ID 
	private java.lang.String 				memNum;//玩家编号
	
	
	public java.lang.Integer getId() {
		return id;
	}
	public void setId(java.lang.Integer id) {
		this.id = id;
	}
	public java.lang.Integer getTreeNo() {
		return treeNo;
	}
	public void setTreeNo(java.lang.Integer treeNo) {
		this.treeNo = treeNo;
	}
	public java.lang.Integer getTreeType() {
		return treeType;
	}
	public void setTreeType(java.lang.Integer treeType) {
		this.treeType = treeType;
	}
	public java.math.BigDecimal getGainSalar() {
		return gainSalar;
	}
	public void setGainSalar(java.math.BigDecimal gainSalar) {
		this.gainSalar = gainSalar;
	}
	public java.util.Date getGainTime() {
		return gainTime;
	}
	public void setGainTime(java.util.Date gainTime) {
		this.gainTime = gainTime;
	}
	public java.lang.Integer getMemId() {
		return memId;
	}
	public void setMemId(java.lang.Integer memId) {
		this.memId = memId;
	}
	public java.lang.String getMemNum() {
		return memNum;
	}
	public void setMemNum(java.lang.String memNum) {
		this.memNum = memNum;
	}
	
	
}
