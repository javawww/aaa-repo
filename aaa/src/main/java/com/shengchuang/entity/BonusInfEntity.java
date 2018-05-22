package com.shengchuang.entity;

import java.io.Serializable;
/***
 * 奖金明细表 奖金类型 代数奖 日分红
 * 奖金明细为多方   奖金统计报表为一方
 * @author Administrator
 *
 */
@SuppressWarnings("serial")
public class BonusInfEntity  implements Serializable{
	
	//代数奖、日分红：共有属性
	private java.lang.Integer    			id; //主键
	private java.lang.String 				bonusDesc;//奖金描述  示例  来源A00005种植的第5棵金树
	private java.lang.Integer 				bonusStatus;//奖金状态 0未结算 1已结算
	private java.lang.Integer				bonusType;  //奖金类型  0代数奖(动态钱包)  1日分红（静态解冻）
	private java.math.BigDecimal 			bonusSalar;   //奖金金额  示例 500.64
	private java.util.Date  				bonusTime;  //生成时间
	private String 							showBonusTime;
	
	//代数奖属性
	private java.lang.Integer 				sendMemId;//外键 关联种树人，儿子
	private java.lang.String 				sendMemNum;//关联种树人，儿子
	private java.lang.Integer 				receMemId;//外键 关联拿代数奖提成的father
	private java.lang.String 				receMemNum;//关联拿代数奖提成的father
	
	//日分红属性
	private java.lang.Integer 				fhMemId;//外键 关联日分红的收益人，也是唯一的相关人
	private java.lang.String 				fhMemNum;//关联日分红的收益人，也是唯一的相关人
	
	//暂时遗弃的属性
	private java.lang.Integer 				bonusRepoId;//外键  关联奖金报表 多对一

	
	
	
	public java.math.BigDecimal getBonusSalar() {
		return bonusSalar;
	}

	public void setBonusSalar(java.math.BigDecimal bonusSalar) {
		this.bonusSalar = bonusSalar;
	}

	public java.lang.Integer getId() {
		return id;
	}

	public void setId(java.lang.Integer id) {
		this.id = id;
	}

	public java.lang.String getBonusDesc() {
		return bonusDesc;
	}

	public void setBonusDesc(java.lang.String bonusDesc) {
		this.bonusDesc = bonusDesc;
	}

	public java.lang.Integer getBonusStatus() {
		return bonusStatus;
	}

	public void setBonusStatus(java.lang.Integer bonusStatus) {
		this.bonusStatus = bonusStatus;
	}

	public java.lang.Integer getBonusType() {
		return bonusType;
	}

	public void setBonusType(java.lang.Integer bonusType) {
		this.bonusType = bonusType;
	}

	public java.util.Date getBonusTime() {
		return bonusTime;
	}

	public void setBonusTime(java.util.Date bonusTime) {
		this.bonusTime = bonusTime;
	}

	public String getShowBonusTime() {
		return showBonusTime;
	}

	public void setShowBonusTime(String showBonusTime) {
		this.showBonusTime = showBonusTime;
	}

	public java.lang.Integer getSendMemId() {
		return sendMemId;
	}

	public void setSendMemId(java.lang.Integer sendMemId) {
		this.sendMemId = sendMemId;
	}

	public java.lang.String getSendMemNum() {
		return sendMemNum;
	}

	public void setSendMemNum(java.lang.String sendMemNum) {
		this.sendMemNum = sendMemNum;
	}

	public java.lang.Integer getReceMemId() {
		return receMemId;
	}

	public void setReceMemId(java.lang.Integer receMemId) {
		this.receMemId = receMemId;
	}

	public java.lang.String getReceMemNum() {
		return receMemNum;
	}

	public void setReceMemNum(java.lang.String receMemNum) {
		this.receMemNum = receMemNum;
	}

	public java.lang.Integer getFhMemId() {
		return fhMemId;
	}

	public void setFhMemId(java.lang.Integer fhMemId) {
		this.fhMemId = fhMemId;
	}

	public java.lang.String getFhMemNum() {
		return fhMemNum;
	}

	public void setFhMemNum(java.lang.String fhMemNum) {
		this.fhMemNum = fhMemNum;
	}

	public java.lang.Integer getBonusRepoId() {
		return bonusRepoId;
	}

	public void setBonusRepoId(java.lang.Integer bonusRepoId) {
		this.bonusRepoId = bonusRepoId;
	}
			
	
	
	
}
