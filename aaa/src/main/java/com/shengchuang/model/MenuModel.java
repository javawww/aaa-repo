package com.shengchuang.model;

import java.io.Serializable;
import java.util.List;

/**
 * 金银树  菜单表对象
 */
@SuppressWarnings("serial")
public class MenuModel implements Serializable{

	private java.lang.Boolean    			spread; //是否展开
	private java.lang.String     			title;	  //菜单标题
	private java.lang.String     			icon;	  //菜单图标
	private java.lang.String     			href;	  //菜单链接
	private java.lang.Integer    			pid; //关联父亲Id
	
	private List<MenuModel>  				children;//子菜单

	public java.lang.Boolean getSpread() {
		return spread;
	}

	public void setSpread(java.lang.Boolean spread) {
		this.spread = spread;
	}

	public java.lang.String getTitle() {
		return title;
	}

	public void setTitle(java.lang.String title) {
		this.title = title;
	}

	public java.lang.String getIcon() {
		return icon;
	}

	public void setIcon(java.lang.String icon) {
		this.icon = icon;
	}

	public java.lang.String getHref() {
		return href;
	}

	public void setHref(java.lang.String href) {
		this.href = href;
	}

	public java.lang.Integer getPid() {
		return pid;
	}

	public void setPid(java.lang.Integer pid) {
		this.pid = pid;
	}

	public List<MenuModel> getChildren() {
		return children;
	}

	public void setChildren(List<MenuModel> children) {
		this.children = children;
	}
	
	
}
