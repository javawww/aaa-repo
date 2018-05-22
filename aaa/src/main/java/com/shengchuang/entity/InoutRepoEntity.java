package com.shengchuang.entity;

import java.io.Serializable;
/**
 * 账号收支 全网会员 全部币种 余额变动   后面改动为"财务明细"
 * @author Administrator
 *
 */
@SuppressWarnings("serial")
public class InoutRepoEntity implements Serializable{
	
	private java.lang.Integer    			id; //主键
	private java.lang.String 				memNum;//关联所属用户编号 示例 A00005
	private java.lang.Integer    			bonusType; //币种类型 0动态奖 1静态冻结奖2静态解冻将 3神童日俸 4管家月俸5种子积分6激活积分
	private java.math.BigDecimal 			changeSalar;   //变动余额   也是 收支类型   示例  -100表示支出  150表示收入。数据库存入-100/150等值
	private java.math.BigDecimal 			origiSalar;   //原始余额
	private java.math.BigDecimal 			currSalar;   //当前余额 即 新余额
	private java.lang.String 				inoutDesc;//余额变动说明：会员A00005金树投资2000   新增变动"后台充值"
	private java.util.Date  				createTime;  // 创建时间 即 变动时间
	private String 							showCreateTime;
	private java.lang.Integer 				bonusRepoId;//外键  关联奖金报表 多对一
	
	
	
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
	public java.lang.String getMemNum() {
		return memNum;
	}
	public void setMemNum(java.lang.String memNum) {
		this.memNum = memNum;
	}
	public java.lang.Integer getBonusType() {
		return bonusType;
	}
	public void setBonusType(java.lang.Integer bonusType) {
		this.bonusType = bonusType;
	}
	public java.math.BigDecimal getChangeSalar() {
		return changeSalar;
	}
	public void setChangeSalar(java.math.BigDecimal changeSalar) {
		this.changeSalar = changeSalar;
	}
	public java.math.BigDecimal getOrigiSalar() {
		return origiSalar;
	}
	public void setOrigiSalar(java.math.BigDecimal origiSalar) {
		this.origiSalar = origiSalar;
	}
	public java.math.BigDecimal getCurrSalar() {
		return currSalar;
	}
	public void setCurrSalar(java.math.BigDecimal currSalar) {
		this.currSalar = currSalar;
	}
	public java.lang.String getInoutDesc() {
		return inoutDesc;
	}
	public void setInoutDesc(java.lang.String inoutDesc) {
		this.inoutDesc = inoutDesc;
	}
	public java.util.Date getCreateTime() {
		return createTime;
	}
	public void setCreateTime(java.util.Date createTime) {
		this.createTime = createTime;
	}
	public java.lang.Integer getBonusRepoId() {
		return bonusRepoId;
	}
	public void setBonusRepoId(java.lang.Integer bonusRepoId) {
		this.bonusRepoId = bonusRepoId;
	}
	
	
	
}
