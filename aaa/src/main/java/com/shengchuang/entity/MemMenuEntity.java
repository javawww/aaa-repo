package com.shengchuang.entity;

import java.io.Serializable;
/**
 * 金银树  会员 菜单 关联表对象  进行菜单权限控制
 */
@SuppressWarnings("serial")
public class MemMenuEntity implements Serializable{
	
	private java.lang.Integer    			id; //主键
	private java.lang.Integer    			memId; //关联会员ID
	private java.lang.Integer    			menuId; //关联菜单ID
	public java.lang.Integer getId() {
		return id;
	}
	public void setId(java.lang.Integer id) {
		this.id = id;
	}
	public java.lang.Integer getMemId() {
		return memId;
	}
	public void setMemId(java.lang.Integer memId) {
		this.memId = memId;
	}
	public java.lang.Integer getMenuId() {
		return menuId;
	}
	public void setMenuId(java.lang.Integer menuId) {
		this.menuId = menuId;
	}
	
	
	
}
