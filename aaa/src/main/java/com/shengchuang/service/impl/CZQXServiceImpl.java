package com.shengchuang.service.impl;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shengchuang.dao.CZQXDao;
import com.shengchuang.entity.CZQXLogEntity;
import com.shengchuang.service.CZQXService;
 
/**
 * 
 * 借用时，@Service("commonService")改成@Service("目标Service")    
 * @author Administrator
 *
 */
@Service("czqxService")  
public class CZQXServiceImpl implements CZQXService{

	@Autowired
	private CZQXDao 				commonDao; //注入DAO
	
	/**
	 * 管理员查，结果为Map类
	 */
	@Override
	public List<Map> findCommon(Integer page, String types) {
		Map map = new HashMap();
		map.put("start", 20*(page-1));
		map.put("limit", 20); 
		map.put("types", types);
		return commonDao.findCommon(map);
	}
	
	/**
	 * 发件箱页面， 管理员查，结果为Map类
	 */
	@Override
	public List<Map> findCommon2(Integer page, String types, int curId) {
		Map map = new HashMap();
		map.put("start", 20*(page-1));
		map.put("limit", 20); 
		map.put("msgStatus", types);
		map.put("curId", curId);
		return commonDao.findCommon(map);
	}

	/**
	 * 管理员查，结果为对应实体类
	 */
	/*@Override
	public List<CommonEntity> findCommonEntity(Integer page, String types) {
		Map map = new HashMap();
		map.put("start", 20*(page-1));
		map.put("limit", 20); 
		map.put("msgStatus", types);
		return commonDao.findCommonEntity(map);
	}*/
	
	/**
	 * 管理员查具体某一条，结果为对应实体类
	 */
	@Override
	public CZQXLogEntity findCommonById(int id) {
		return commonDao.findCommonById(id);
	}

	/**
	 * 管理员增
	 */
	@Override
	public int addCommon(Object o) {
		return commonDao.addCommon(o);
	}
	
	/**
	 * 管理员删
	 */
	public int deleteCommon(String ids){
		String idd[]=ids.split(",");
		for(int i=0;i<idd.length;i++){ 
		    commonDao.deleteCommon(Integer.parseInt(idd[i]));
		} 
		return 1;
	} 
	
	/**
	 * 管理员改
	 */
	@Override
	public int updateCommon(Object o) {
		return commonDao.updateCommon(o);
	}
	

	/**
	 * 返回整个表里的所有数据
	 */
	@Override
	public List<Map> findAll() {
		return commonDao.findAll();
	}

	/**
	 * 返回总条数，分页要用
	 */
	@Override
	public int findCommonCount(String types) {
		Map map=new HashMap();
		map.put("msgStatus", types);
		return commonDao.findCommonCount(map);
	}

	@Override
	public int addCZOrQX(CZQXLogEntity czqxLog) {
		return commonDao.addCZOrQX(czqxLog);
	}

	@Override
	public List<CZQXLogEntity> getCzOrQxList(Integer memId, Integer optType ) {
		return commonDao.getCzOrQxList(memId,optType);
	}

	@Override
	public int updateCzqxbyId(CZQXLogEntity czqxLog) {
		return commonDao.updateCzqxbyId(czqxLog);
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public List<CZQXLogEntity> selectCzqxByoptType_page(Integer page, Date startDate, Date endDate,Integer optType,Integer czqxType,String czqxtatus,String memNo) {
		Map map = new HashMap<>();
		map.put("start",  20*(page-1));
		map.put("limit", 20);
		map.put("startDate", startDate);
		map.put("endDate", endDate);
		map.put("optType", optType);
		map.put("czqxType", czqxType);
		map.put("czqxtatus", czqxtatus);
		map.put("memNo", memNo);
		
		return commonDao.selectCzqxByoptType_page(map);
	}

	@Override
	public int selectCountCzqxByoptType_page(Date startDate, Date endDate,Integer optType,Integer czqxType,String czqxtatus,String memNo) {
		Map map = new HashMap<>();
		map.put("startDate", startDate);
		map.put("endDate", endDate);
		map.put("optType", optType);
		map.put("czqxType", czqxType);
		map.put("czqxtatus", czqxtatus);
		map.put("memNo", memNo);
		
		return commonDao.selectCountCzqxByoptType_page(map);
	}

	@Override
	public int update(CZQXLogEntity czqxLog) {
		return commonDao.update(czqxLog);
	}

	@Override
	public int selectCountsByMemandDate(String memNum,Integer czqxType) {
		return commonDao.selectCountsByMemandDate(memNum,czqxType);
	}

}
