package com.shengchuang.service;

import java.util.Date;
import java.util.List;
import java.util.Map;

import com.shengchuang.entity.PerforRepoEntity;


public interface PerforService {

	
	public List<PerforRepoEntity> findPerforByMemNum(String memNum);	//根据id查找某一个具体的对象
	
	public List<PerforRepoEntity> findPerforByMemId(Integer memId);	//根据id查找某一个具体的对象
	
	public int addPerfor(Object o);		
	
	/**
	 * 批量删除，一次性删除id字符串里的所有id条目
	 * @param ids 多个id的字符串，每个id以逗号分割，如："5,7,8,13,28,55,97,108"
	 */
	public int deletePerforByIds(String ids);	
	
	/**
	 * 单个删除
	 */
	public int deletePerforById(Integer id);	

	public List<PerforRepoEntity> findAll();		//查询全部，一般findCommon即可，但是findCommon一次最多20条，findAll则是全表
	
	/**
	 * 专门给后台管理使用的查询方法，有分页功能
	 * @param page 第几页
	 * @return
	 */
	public List<PerforRepoEntity> findFB(Integer page, Date startDate, Date endDate, 
			String memNum, String treeType);

	/**
	 * 返回总页数
	 */
	public int findAllCount(Date startDate, Date endDate, String memNum, String treeType);	//查询总记录数，分页时用的
	
}
