package com.shengchuang.entity;

import java.io.Serializable;
import java.util.ArrayList;

public class TreeViewObj implements Serializable{
	private static final long serialVersionUID = 1L;

	private String text;
	
	private int selfId;
	
	private Integer parentId;
	
	private ArrayList<TreeViewObj> nodes;

	public int getSelfId() {
		return selfId;
	}

	public void setSelfId(int selfId) {
		this.selfId = selfId;
	}

	public Integer getParentId() {
		return parentId;
	}

	public void setParentId(Integer parentId) {
		this.parentId = parentId;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public ArrayList<TreeViewObj> getNodes() {
		return nodes;
	}

	public void setNodes(ArrayList<TreeViewObj> nodes) {
		this.nodes = nodes;
	}
}
