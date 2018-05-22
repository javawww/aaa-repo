package com.shengchuang.entity;

import java.io.Serializable;
/**
 * 管家神童 状态信息  
 * 根据状态信息 进行玩家管家和神童的不同形象展示 进而具有不同的业务操作
 * @author Administrator
 *
 */
@SuppressWarnings("serial")
public class GJSTStatusEntity implements Serializable{

	private java.lang.Integer 				id;//主键
	private java.math.BigDecimal    		gjSalar;//管家金额  购买管家耗费的管家月俸 默认为0 无管家
	private java.math.BigDecimal 			stSalar;//神童金额 购买神童耗费的神童日俸 默认为0 神童不工作
	private java.util.Date 					gjBeginTime;//管家充值时间  
	private java.util.Date 					gjOverTime;//管家结束时间
	private java.util.Date 					stBeginTime;//神童充值时间
	private java.util.Date 					stOverTime;//神童结束时间
	private java.lang.Integer 				gjStatus;//管家状态 默认0 无法工作 1正常工作
	private java.lang.Integer 				stStatus;//神童状态 默认0 无法工作 1正常工作
	private java.lang.Integer 				stealCount;//偷取次数 默认无管家对应全局参数数值 wgjCount 
													//当管家充值成功 更新此数据  对应全局参数数值ptgjCount
	private java.lang.String 				memNo;//关联新会员对应的会员编号
	private java.lang.Integer 				memId;//外键  关联新会员对应的ID
	
	public java.lang.Integer getId() {
		return id;
	}
	public void setId(java.lang.Integer id) {
		this.id = id;
	}
	public java.math.BigDecimal getGjSalar() {
		return gjSalar;
	}
	public void setGjSalar(java.math.BigDecimal gjSalar) {
		this.gjSalar = gjSalar;
	}
	public java.math.BigDecimal getStSalar() {
		return stSalar;
	}
	public void setStSalar(java.math.BigDecimal stSalar) {
		this.stSalar = stSalar;
	}
	public java.util.Date getGjBeginTime() {
		return gjBeginTime;
	}
	public void setGjBeginTime(java.util.Date gjBeginTime) {
		this.gjBeginTime = gjBeginTime;
	}
	public java.util.Date getGjOverTime() {
		return gjOverTime;
	}
	public void setGjOverTime(java.util.Date gjOverTime) {
		this.gjOverTime = gjOverTime;
	}
	public java.util.Date getStBeginTime() {
		return stBeginTime;
	}
	public void setStBeginTime(java.util.Date stBeginTime) {
		this.stBeginTime = stBeginTime;
	}
	public java.util.Date getStOverTime() {
		return stOverTime;
	}
	public void setStOverTime(java.util.Date stOverTime) {
		this.stOverTime = stOverTime;
	}
	public java.lang.Integer getGjStatus() {
		return gjStatus;
	}
	public void setGjStatus(java.lang.Integer gjStatus) {
		this.gjStatus = gjStatus;
	}
	public java.lang.Integer getStStatus() {
		return stStatus;
	}
	public void setStStatus(java.lang.Integer stStatus) {
		this.stStatus = stStatus;
	}
	public java.lang.Integer getStealCount() {
		return stealCount;
	}
	public void setStealCount(java.lang.Integer stealCount) {
		this.stealCount = stealCount;
	}
	public java.lang.String getMemNo() {
		return memNo;
	}
	public void setMemNo(java.lang.String memNo) {
		this.memNo = memNo;
	}
	public java.lang.Integer getMemId() {
		return memId;
	}
	public void setMemId(java.lang.Integer memId) {
		this.memId = memId;
	}
	
	
}
