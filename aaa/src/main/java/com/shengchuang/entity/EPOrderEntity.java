package com.shengchuang.entity;

import java.io.Serializable;
/**
 * EP交易订单  只针对种子积分
 * 和EPSellEntity关系  一对多关系
 * @author Administrator
 *
 */
@SuppressWarnings("serial")
public class EPOrderEntity implements Serializable{

	private java.lang.Integer    			id; //主键
	private java.math.BigDecimal 			eporderSalar;//交易金额 
	private java.lang.String 				memNumBuy;//关联用户编号 即 购买人编号
	private java.util.Date 					eporderTime;//交易时间 
	private java.lang.String				showTime;//交易时间 
	private java.lang.Integer 				eporderStatus;//交易状态 0交易中 1交易完成2撤销交易 
	private java.lang.String 				memNumSeller;//关联用户编号 即 挂卖人编号
	private java.lang.Integer				epsellId;//外键 关联挂卖信息 多对一 关系
	
	
	
	public java.lang.String getShowTime() {
		return showTime;
	}
	public void setShowTime(java.lang.String showTime) {
		this.showTime = showTime;
	}
	public java.lang.Integer getEpsellId() {
		return epsellId;
	}
	public void setEpsellId(java.lang.Integer epsellId) {
		this.epsellId = epsellId;
	}
	public java.lang.String getMemNumBuy() {
		return memNumBuy;
	}
	public void setMemNumBuy(java.lang.String memNumBuy) {
		this.memNumBuy = memNumBuy;
	}
	public java.lang.String getMemNumSeller() {
		return memNumSeller;
	}
	public void setMemNumSeller(java.lang.String memNumSeller) {
		this.memNumSeller = memNumSeller;
	}
	public java.lang.Integer getId() {
		return id;
	}
	public void setId(java.lang.Integer id) {
		this.id = id;
	}
	public java.math.BigDecimal getEporderSalar() {
		return eporderSalar;
	}
	public void setEporderSalar(java.math.BigDecimal eporderSalar) {
		this.eporderSalar = eporderSalar;
	}
	public java.util.Date getEporderTime() {
		return eporderTime;
	}
	public void setEporderTime(java.util.Date eporderTime) {
		this.eporderTime = eporderTime;
	}
	public java.lang.Integer getEporderStatus() {
		return eporderStatus;
	}
	public void setEporderStatus(java.lang.Integer eporderStatus) {
		this.eporderStatus = eporderStatus;
	}
	
	
	
}
