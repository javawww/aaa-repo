package com.shengchuang.service;

import java.util.Date;
import java.util.List;
import java.util.Map;

import com.shengchuang.entity.GainLogEntity;
import com.shengchuang.entity.PerforRepoEntity;


public interface GainService {

	public int add(Object o);
	
	public int update(Object o);
	
	public GainLogEntity find(String memNum, Integer treeNum);

	public void deleteByMemNum_treeNo(String curMemNum, Integer newTreeNo);
	
	
//	public List<PerforRepoEntity> findPerforByMemNum(String memNum);	//根据id查找某一个具体的对象
//	public List<PerforRepoEntity> findPerforByMemId(Integer memId);	//根据id查找某一个具体的对象
//	public int deletePerforByIds(String ids);	
//	public int deletePerforById(Integer id);	
//	public List<PerforRepoEntity> findAll();		//查询全部，一般findCommon即可，但是findCommon一次最多20条，findAll则是全表
//	public List<PerforRepoEntity> findFB(Integer page, Date startDate, Date endDate, 
//			String memNum, String treeType);
//	public int findAllCount(Date startDate, Date endDate, String memNum, String treeType);	//查询总记录数，分页时用的
	
}
