package com.shengchuang.model;

import java.io.Serializable;
import java.util.List;

import com.shengchuang.entity.EmailMsgEntity;
import com.shengchuang.entity.MemberEntity;

/**
 * 返回给前台的邮件对象，封装了收件人、发件人、字符串格式的时间等信息
 */
@SuppressWarnings("serial")
public class EmailModel implements Serializable{
	
	private int id;			//邮件id
	private int msgType;	//邮件类型
	private int msgStatus;	//邮件状态，如已读，未读
	private String senderMemNum;	//发送人会员编号
	private String receiver;		//接收人会员编号
	private String title;	//邮件标题
	private String sendTime;	//发送时间
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getMsgType() {
		return msgType;
	}
	public void setMsgType(int msgType) {
		this.msgType = msgType;
	}
	public int getMsgStatus() {
		return msgStatus;
	}
	public void setMsgStatus(int msgStatus) {
		this.msgStatus = msgStatus;
	}
	public String getSenderMemNum() {
		return senderMemNum;
	}
	public void setSenderMemNum(String senderMemNum) {
		this.senderMemNum = senderMemNum;
	}
	public String getReceiver() {
		return receiver;
	}
	public void setReceiver(String receiver) {
		this.receiver = receiver;
	}
	public String getSendTime() {
		return sendTime;
	}
	public void setSendTime(String sendTime) {
		this.sendTime = sendTime;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	} 
	
}
