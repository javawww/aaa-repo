package com.shengchuang.entity;

import java.io.Serializable;
import java.util.List;

/**
 * 金银树  菜单表对象
 */
@SuppressWarnings("serial")
public class MenuEntity implements Serializable{

	private java.lang.Integer    			id; //主键
	private java.lang.Integer    			isspread; //是否展开  0展开true  1折叠false
	private java.lang.String     			menuTitle;	  //菜单标题
	private java.lang.String     			menuIcon;	  //菜单图标
	private java.lang.String     			menuHref;	  //菜单链接
	private java.lang.Integer    			pid; //关联父亲Id
	
	private List<MenuEntity>  				children;//子菜单
	
	public java.lang.Integer getId() {
		return id;
	}
	public void setId(java.lang.Integer id) {
		this.id = id;
	}
	public java.lang.Integer getIsspread() {
		return isspread;
	}
	public void setIsspread(java.lang.Integer isspread) {
		this.isspread = isspread;
	}
	public java.lang.String getMenuTitle() {
		return menuTitle;
	}
	public void setMenuTitle(java.lang.String menuTitle) {
		this.menuTitle = menuTitle;
	}
	public java.lang.String getMenuIcon() {
		return menuIcon;
	}
	public void setMenuIcon(java.lang.String menuIcon) {
		this.menuIcon = menuIcon;
	}
	public java.lang.String getMenuHref() {
		return menuHref;
	}
	public void setMenuHref(java.lang.String menuHref) {
		this.menuHref = menuHref;
	}
	public java.lang.Integer getPid() {
		return pid;
	}
	public void setPid(java.lang.Integer pid) {
		this.pid = pid;
	}
	public List<MenuEntity> getChildren() {
		return children;
	}
	public void setChildren(List<MenuEntity> children) {
		this.children = children;
	}
	
	
	
}
