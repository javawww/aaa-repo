package com.shengchuang.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.shengchuang.entity.JFExchangeLogEntity;

  
public interface JifenDao {
 
	public List<Map> findCommon(Map map);
	
	public List<Map> findCommon2(@Param("page")Integer page, @Param("types")String types, @Param("curId")int curId);
	
	//public List<CommonEntity> findCommonEntity(Map map);
	
	public Map findCommonById(int id);
	
	public int addCommon(Object o);
	
	public int deleteCommon(int id); 
	
	public int updateCommon(Object o);
	
	public List<Map> findAll();

	public int findCommonCount(Map map);

	public List<JFExchangeLogEntity> findJFHZById_MemNum(Map map);

	public List<JFExchangeLogEntity> findZHJLById(int curId);
	
}
