package com.shengchuang.model;
/**
 * 为ztree准备的menu菜单对象
 * @author Administrator
 *
 */
public class ZtreeMenuModel {

	private java.lang.Integer  						id;//父ID
	private java.lang.Integer 						pId;//子ID
	private java.lang.Boolean 						open;//是否展开
	private java.lang.String 						name;//节点名称
	private java.lang.Boolean 						checked;//是否选中
	public java.lang.Integer getId() {
		return id;
	}
	public void setId(java.lang.Integer id) {
		this.id = id;
	}
	public java.lang.Integer getpId() {
		return pId;
	}
	public void setpId(java.lang.Integer pId) {
		this.pId = pId;
	}
	public java.lang.Boolean getOpen() {
		return open;
	}
	public void setOpen(java.lang.Boolean open) {
		this.open = open;
	}
	public java.lang.String getName() {
		return name;
	}
	public void setName(java.lang.String name) {
		this.name = name;
	}
	public java.lang.Boolean getChecked() {
		return checked;
	}
	public void setChecked(java.lang.Boolean checked) {
		this.checked = checked;
	}
	
	
	
}
