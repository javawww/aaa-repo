package com.shengchuang.model;

import java.util.List;

/**
 * 推荐图  TREE 数据图   无限遍历  递归调用
 * @author Administrator
 *
 */
public class RecommTreeModel {
	
	private  java.lang.String  				text;//文字描述
	private  java.lang.String 				memNum;// 用户编号
	private  java.lang.Integer      		id;//主键  唯一标识
	private  List<RecommTreeModel>			nodes;//儿子元素
	private  RecommTreeModel 				parent;//父节点
	private  State 							state;//关联状态  是否展开  是否选中
	private int 							level;//深度
	
	
	public java.lang.String getText() {
		return text;
	}
	public void setText(java.lang.String text) {
		this.text = text;
	}
	public java.lang.String getMemNum() {
		return memNum;
	}
	public void setMemNum(java.lang.String memNum) {
		this.memNum = memNum;
	}
	public java.lang.Integer getId() {
		return id;
	}

	public void setId(java.lang.Integer id) {
		this.id = id;
	}

	public List<RecommTreeModel> getNodes() {
		return nodes;
	}
	public void setNodes(List<RecommTreeModel> nodes) {
		this.nodes = nodes;
	}
	public State getState() {
		return state;
	}
	public void setState(State state) {
		this.state = state;
	}
	public RecommTreeModel getParent() {
		return parent;
	}
	public void setParent(RecommTreeModel parent) {
		this.parent = parent;
	}
	public int getLevel() {
		return level;
	}
	public void setLevel(int level) {
		this.level = level;
	}


}
