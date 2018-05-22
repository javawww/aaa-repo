package com.shengchuang.dao;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.shengchuang.entity.CZQXLogEntity;

/**
 * 充值取现DAO 前台 我要充值 我要取现 数据存储
 * @author Administrator
 *
 */
public interface CZQXDao {
 
	public List<Map> findCommon(Map map);
	
	//public List<CommonEntity> findCommonEntity(Map map);
	
	public CZQXLogEntity findCommonById(int id);
	
	public int addCommon(Object o);
	
	public int deleteCommon(int id); 
	
	public int updateCommon(Object o);
	
	public List<Map> findAll();

	public int findCommonCount(Map map);

	public int addCZOrQX(CZQXLogEntity czqxLog);

	public List<CZQXLogEntity> getCzOrQxList(@Param("memId")Integer memId, @Param("optType")Integer optType);

	public int updateCzqxbyId(CZQXLogEntity czqxLog);


	public List<CZQXLogEntity> selectCzqxByoptType_page(Map map);

	public int selectCountCzqxByoptType_page(Map map);

	public int update(CZQXLogEntity czqxLog);

	public int selectCountsByMemandDate(@Param("memNum")String memNum,@Param("czqxType")Integer czqxType);
	
}
