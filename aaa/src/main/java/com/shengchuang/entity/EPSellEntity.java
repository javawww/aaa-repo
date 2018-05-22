package com.shengchuang.entity;

import java.io.Serializable;

/**
 * EP挂卖操作  只针对种子积分
 * 前台种子积分进行 挂卖订单  每个玩家同时只能挂卖一条EP订单
 * @author Administrator
 *
 */
@SuppressWarnings("serial")
public class EPSellEntity  implements Serializable{

	private java.lang.Integer    			id; //主键
	private java.math.BigDecimal 			epsellSalar;// 挂卖金额
	private java.lang.String 				memNum;//关联所属用户编号 即 挂卖人
	private java.util.Date 					esellTime;//挂卖时间  即 创建时间 
	private java.lang.String 				showTime;//挂卖时间  即 创建时间 
	private java.lang.Integer 				esellStatus;//挂卖状态 0挂卖中 1交易完成  2撤销交易
	private java.lang.Integer 				memId;//关联所属用户ID 即 挂卖人
	private java.lang.Integer 				prioLevel;//优先级 默认为null 在后台可以设置 优先级比较 越大的优先级越高 例子 4 > 3
	
	
	
	
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
	public java.math.BigDecimal getEpsellSalar() {
		return epsellSalar;
	}
	public void setEpsellSalar(java.math.BigDecimal epsellSalar) {
		this.epsellSalar = epsellSalar;
	}
	public java.lang.String getMemNum() {
		return memNum;
	}
	public void setMemNum(java.lang.String memNum) {
		this.memNum = memNum;
	}
	public java.util.Date getEsellTime() {
		return esellTime;
	}
	public void setEsellTime(java.util.Date esellTime) {
		this.esellTime = esellTime;
	}
	public java.lang.Integer getEsellStatus() {
		return esellStatus;
	}
	public void setEsellStatus(java.lang.Integer esellStatus) {
		this.esellStatus = esellStatus;
	}
	public java.lang.Integer getMemId() {
		return memId;
	}
	public void setMemId(java.lang.Integer memId) {
		this.memId = memId;
	}
	public java.lang.Integer getPrioLevel() {
		return prioLevel;
	}
	public void setPrioLevel(java.lang.Integer prioLevel) {
		this.prioLevel = prioLevel;
	}

	
	
}
