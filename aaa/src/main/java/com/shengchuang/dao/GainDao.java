package com.shengchuang.dao;

import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.shengchuang.entity.GainLogEntity;

public interface GainDao {
	
	public GainLogEntity find(Map map);

	int add(Object o);

	int update(Object o);

	public void deleteByMemNum_treeNo(@Param("memNum")String curMemNum, @Param("treeNo")Integer newTreeNo);

}
