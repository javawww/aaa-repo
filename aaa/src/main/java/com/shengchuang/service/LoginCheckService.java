package com.shengchuang.service;

import java.util.List;
import java.util.Map;


public interface LoginCheckService {

	public List<Map> findCommon(Integer page, String jhState);	//查
	
	public List<Map> findCommon2(Integer page, String jhState, int curId);	//设计到当前用户id的查
	
	//public List<CommonEntity> findCommonEntity(Integer page, String jhState); //需要返回对应实体的查 
	
	public Map findCommonById(int id);	//根据id查找某一个具体的对象
	
	public int addCommon(Object o);		//增
	
	public int deleteCommon(String ids);	//删
	
	public int updateCommon(Object m);		//改

	public List<Map> findAll();		//查询全部，一般findCommon即可，但是findCommon一次最多20条，findAll则是全表

	public int findCommonCount(String jhState);	//查询总记录数，分页时用的
	
}
