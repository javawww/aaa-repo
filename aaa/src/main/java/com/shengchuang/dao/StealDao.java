package com.shengchuang.dao;

import java.util.List;
import java.util.Map;

import com.shengchuang.entity.StealLogEntity;

  
public interface StealDao {
 
	public List<Map> findCommon(Map map);
	
	//public List<CommonEntity> findCommonEntity(Map map);
	
	public Map findCommonById(int id);
	
	public int addCommon(Object o);
	
	public int deleteCommon(int id); 
	
	public int updateCommon(Object o);
	
	public List<Map> findAll();

	public int findCommonCount(Map map);

	public List<StealLogEntity> findMySteal(String curMemNum);

	public List<StealLogEntity> findWhoStealMe(String curMemNum);
	
}
