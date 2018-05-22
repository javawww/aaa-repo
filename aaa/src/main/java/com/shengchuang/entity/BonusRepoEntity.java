package com.shengchuang.entity;

import java.io.Serializable;
/**
 * 奖金统计  全网会员 动态奖 日分红
 * 动态奖 秒结日发 | 日分红 秒结秒发
 * @author Administrator
 *
 */
@SuppressWarnings("serial")
public class BonusRepoEntity implements Serializable{
	
	private java.lang.Integer    			id; //主键
	private java.math.BigDecimal 			dynaBonus;   //代数奖 即 动态奖
	private java.math.BigDecimal 			shareBonus;   //日分红 即 静态奖
	private java.math.BigDecimal 			totalBonus;   //总金额  即 动态奖 + 静态奖
	private java.util.Date  				createTime;  // 结算时间 即 生成时间
	private java.util.Date 					createDate;//结算日期 即 生成日期 示例 2017-06-25
	private java.lang.Integer 				optType;//操作类型  收支明细1 财务明细2
	private java.lang.Integer    			grantStatus; //发放状态 0未发放 1已发放
	private java.lang.String 				memNum;//关联所属用户编号 示例 A00005
	private String 							showCreateTime;
	private java.lang.String 				showCreateDate;
	
	public String getShowCreateTime() {
		return showCreateTime;
	}
	public void setShowCreateTime(String showCreateTime) {
		this.showCreateTime = showCreateTime;
	}
	public java.lang.Integer getId() {
		return id;
	}
	public void setId(java.lang.Integer id) {
		this.id = id;
	}
	public java.math.BigDecimal getDynaBonus() {
		return dynaBonus;
	}
	public void setDynaBonus(java.math.BigDecimal dynaBonus) {
		this.dynaBonus = dynaBonus;
	}
	public java.math.BigDecimal getShareBonus() {
		return shareBonus;
	}
	public void setShareBonus(java.math.BigDecimal shareBonus) {
		this.shareBonus = shareBonus;
	}
	public java.math.BigDecimal getTotalBonus() {
		return totalBonus;
	}
	public void setTotalBonus(java.math.BigDecimal totalBonus) {
		this.totalBonus = totalBonus;
	}
	public java.util.Date getCreateTime() {
		return createTime;
	}
	public void setCreateTime(java.util.Date createTime) {
		this.createTime = createTime;
	}
	public java.lang.Integer getGrantStatus() {
		return grantStatus;
	}
	public void setGrantStatus(java.lang.Integer grantStatus) {
		this.grantStatus = grantStatus;
	}
	public java.lang.String getMemNum() {
		return memNum;
	}
	public void setMemNum(java.lang.String memNum) {
		this.memNum = memNum;
	}
	public java.util.Date getCreateDate() {
		return createDate;
	}
	public void setCreateDate(java.util.Date createDate) {
		this.createDate = createDate;
	}
	public java.lang.String getShowCreateDate() {
		return showCreateDate;
	}
	public void setShowCreateDate(java.lang.String showCreateDate) {
		this.showCreateDate = showCreateDate;
	}
	public java.lang.Integer getOptType() {
		return optType;
	}
	public void setOptType(java.lang.Integer optType) {
		this.optType = optType;
	}
	
	
	
	
}
