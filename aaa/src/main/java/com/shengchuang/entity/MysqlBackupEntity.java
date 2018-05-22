package com.shengchuang.entity;

import java.io.Serializable;
import java.util.Date;
/***
 * MySQL备份信息的entity
 * @author Administrator
 *
 */
@SuppressWarnings("serial")
public class MysqlBackupEntity  implements Serializable{
	
	private Integer id;		//主键
	private String name;	//备份名字
	private String message;	//备注信息
	private Date   date;	//备份日期
	private String location;//备份所在的位置
	
	
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
}
