package com.shengchuang.core;

import java.util.List;

public class GridData {

	private List data;
	
	private int recordsTotal;
	
	private int page;
	
	private int xxUserId;

	//自己新增的两个属性，用来显示当前在线人数
	private int totalMem;
	private int totalOnlineMem;

	public List getData() {
		return data;
	}

	public void setData(List data) {
		this.data = data;
	}

	public int getRecordsTotal() {
		return recordsTotal;
	}

	public void setRecordsTotal(int recordsTotal) {
		this.recordsTotal = recordsTotal;
	}

	public int getPage() {
		return page;
	}

	public void setPage(int page) {
		this.page = page;
	}

	public int getTotalMem() {
		return totalMem;
	}

	public void setTotalMem(int totalMem) {
		this.totalMem = totalMem;
	}

	public int getTotalOnlineMem() {
		return totalOnlineMem;
	}

	public void setTotalOnlineMem(int totalOnlineMem) {
		this.totalOnlineMem = totalOnlineMem;
	}
	
	public int getXxUserId() {
		return xxUserId;
	}

	public void setXxUserId(int xxUserId) {
		this.xxUserId = xxUserId;
	}
}
