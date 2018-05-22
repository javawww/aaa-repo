package com.shengchuang.entity;

import java.io.Serializable;
/**
 * 提现订单管理
 * 前台提交的提现订单信息
 * @author Administrator
 *
 */
@SuppressWarnings("serial")
public class DepositOrderEntity implements Serializable{
	
	private java.lang.Integer    			id; //主键
	private java.lang.String 				depOrdNum;//提现订单编号
	private java.lang.String 				memNum;//会员编号
	private java.util.Date   				depoTime;//提现时间
	private java.lang.Integer 				bonusType;//提现币种 0动态奖 1静态奖 2种子积分等等
	private java.math.BigDecimal 			depoSalar;//提现金额
	private java.math.BigDecimal 			depoPounSalar;///提现手续费
	private java.math.BigDecimal 			realSalar;//实到金额
	private java.lang.Integer 				delStatus;//删除状态  逻辑删除处理 0删除订单 1正常订单
	private java.lang.Integer 				checkStatus;//审核状态 0未审核 1已审核
	public java.lang.Integer getId() {
		return id;
	}
	public void setId(java.lang.Integer id) {
		this.id = id;
	}
	public java.lang.String getDepOrdNum() {
		return depOrdNum;
	}
	public void setDepOrdNum(java.lang.String depOrdNum) {
		this.depOrdNum = depOrdNum;
	}
	public java.lang.String getMemNum() {
		return memNum;
	}
	public void setMemNum(java.lang.String memNum) {
		this.memNum = memNum;
	}
	public java.util.Date getDepoTime() {
		return depoTime;
	}
	public void setDepoTime(java.util.Date depoTime) {
		this.depoTime = depoTime;
	}
	public java.lang.Integer getBonusType() {
		return bonusType;
	}
	public void setBonusType(java.lang.Integer bonusType) {
		this.bonusType = bonusType;
	}
	public java.math.BigDecimal getDepoSalar() {
		return depoSalar;
	}
	public void setDepoSalar(java.math.BigDecimal depoSalar) {
		this.depoSalar = depoSalar;
	}
	public java.math.BigDecimal getDepoPounSalar() {
		return depoPounSalar;
	}
	public void setDepoPounSalar(java.math.BigDecimal depoPounSalar) {
		this.depoPounSalar = depoPounSalar;
	}
	public java.math.BigDecimal getRealSalar() {
		return realSalar;
	}
	public void setRealSalar(java.math.BigDecimal realSalar) {
		this.realSalar = realSalar;
	}
	public java.lang.Integer getDelStatus() {
		return delStatus;
	}
	public void setDelStatus(java.lang.Integer delStatus) {
		this.delStatus = delStatus;
	}
	public java.lang.Integer getCheckStatus() {
		return checkStatus;
	}
	public void setCheckStatus(java.lang.Integer checkStatus) {
		this.checkStatus = checkStatus;
	}
	
	
	
	
	
	

}
