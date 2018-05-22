package com.shengchuang.entity;

import java.io.Serializable;
/**
 * TREE种植状态 信息记录
 * @author Administrator
 *
 */
@SuppressWarnings("serial")
public class TreePlantStatEntity implements Serializable {

	
	private java.lang.Integer 					id;//主键
	private java.lang.Integer 					treeNo;//树编号 银树1-10 金树11-15
	private java.lang.Integer 					treeType;//树类型  0银树 1金树
	private java.util.Date 						plantTime;//种植时间 即 创建时间
	private java.util.Date  		   			gainTime;//收获时间  即 出现小手的时间点 数据动态更新
	private java.util.Date  					overTime;//产能耗尽时间点  需要重新种植
	private java.lang.Integer  					isGain;//是否产生收益 默认0没有收益 1产生收益 3产能耗尽 4没有收益(玩家点击获取)  数据动态更新
	private java.math.BigDecimal  				shySalar;//收益金额   可被偷取 数据动态更新
	private java.lang.Integer 					memid;//种植玩家 关联玩家id
	private java.lang.Integer 					gainCounts;//收益次数  默认为0 产生一次日分红+1 值为30时产能耗尽
	private java.util.Date	  					isOverTime;//有效时间点  检测isGain数值 动态UPDATE
	//追加字段
	private java.lang.Integer 					capaCycle;//临时配置 日分红产能周期 分钟 示例5分钟
	private java.lang.Integer 					capaLimit;//临时配置 日分红产能上限  即分红次数 示例30次
	private java.math.BigDecimal 				tqIntegral;//临时配置 日分红每次偷取额度 示例 0.2元
	private java.math.BigDecimal 				zzIntegral;//临时配置 种植一颗消耗的种子积分 示例1000元
	private java.math.BigDecimal 				capacity;//临时配置 日分红收益产能 示例10元
	private java.lang.Integer 					wgjCount;//临时配置 金树 银树 无管家状态可被偷取次数 示例10次			
	private java.lang.Integer 					ptgjCount;//临时配置金树 银树 有管家状态可被偷取次数 示例8次
	
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
	public java.util.Date getPlantTime() {
		return plantTime;
	}
	public void setPlantTime(java.util.Date plantTime) {
		this.plantTime = plantTime;
	}
	public java.util.Date getGainTime() {
		return gainTime;
	}
	public void setGainTime(java.util.Date gainTime) {
		this.gainTime = gainTime;
	}
	public java.util.Date getOverTime() {
		return overTime;
	}
	public void setOverTime(java.util.Date overTime) {
		this.overTime = overTime;
	}
	public java.lang.Integer getIsGain() {
		return isGain;
	}
	public void setIsGain(java.lang.Integer isGain) {
		this.isGain = isGain;
	}
	public java.math.BigDecimal getShySalar() {
		return shySalar;
	}
	public void setShySalar(java.math.BigDecimal shySalar) {
		this.shySalar = shySalar;
	}
	public java.lang.Integer getMemid() {
		return memid;
	}
	public void setMemid(java.lang.Integer memid) {
		this.memid = memid;
	}
	public java.lang.Integer getGainCounts() {
		return gainCounts;
	}
	public void setGainCounts(java.lang.Integer gainCounts) {
		this.gainCounts = gainCounts;
	}
	public java.util.Date getIsOverTime() {
		return isOverTime;
	}
	public void setIsOverTime(java.util.Date isOverTime) {
		this.isOverTime = isOverTime;
	}
	public java.lang.Integer getCapaCycle() {
		return capaCycle;
	}
	public void setCapaCycle(java.lang.Integer capaCycle) {
		this.capaCycle = capaCycle;
	}
	public java.lang.Integer getCapaLimit() {
		return capaLimit;
	}
	public void setCapaLimit(java.lang.Integer capaLimit) {
		this.capaLimit = capaLimit;
	}
	public java.math.BigDecimal getTqIntegral() {
		return tqIntegral;
	}
	public void setTqIntegral(java.math.BigDecimal tqIntegral) {
		this.tqIntegral = tqIntegral;
	}
	public java.math.BigDecimal getZzIntegral() {
		return zzIntegral;
	}
	public void setZzIntegral(java.math.BigDecimal zzIntegral) {
		this.zzIntegral = zzIntegral;
	}
	public java.math.BigDecimal getCapacity() {
		return capacity;
	}
	public void setCapacity(java.math.BigDecimal capacity) {
		this.capacity = capacity;
	}
	public java.lang.Integer getWgjCount() {
		return wgjCount;
	}
	public void setWgjCount(java.lang.Integer wgjCount) {
		this.wgjCount = wgjCount;
	}
	public java.lang.Integer getPtgjCount() {
		return ptgjCount;
	}
	public void setPtgjCount(java.lang.Integer ptgjCount) {
		this.ptgjCount = ptgjCount;
	}
	
	
}
