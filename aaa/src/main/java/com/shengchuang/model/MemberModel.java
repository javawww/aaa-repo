package com.shengchuang.model;

import java.io.Serializable;
import java.util.List;

import com.shengchuang.entity.MemberEntity;

/**
 * 会员推荐图谱对象
 */
@SuppressWarnings("serial")
public class MemberModel implements Serializable{

	private String     			text;	  //节点名称  	text: 'Parent 1',
	private String[]     			tags;	  //每个节点有多少儿子  	tags: ['4'],
	private List<MemberModel>  			nodes;    //儿子实体 	 nodes: [{},{},{}]
	
	public java.lang.String getText() {
		return text;
	}
	public void setText(java.lang.String text) {
		this.text = text;
	}
	public List<MemberModel> getNodes() {
		return nodes;
	}
	public void setNodes(List<MemberModel> nodes) {
		this.nodes = nodes;
	}
	public String[] getTags() {
		return tags;
	}
	public void setTags(String[] tags) {
		this.tags = tags;
	}
	
	
}
