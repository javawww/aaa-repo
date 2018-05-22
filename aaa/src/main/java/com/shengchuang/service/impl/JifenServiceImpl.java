package com.shengchuang.service.impl;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shengchuang.dao.JifenDao;
import com.shengchuang.entity.EmailMsgEntity;
import com.shengchuang.entity.JFExchangeLogEntity;
import com.shengchuang.service.JifenService;
 
/**
 * 
 * 借用时，@Service("commonService")改成@Service("目标Service")    
 * @author Administrator
 *
 */
@Service("jifenService")  
public class JifenServiceImpl implements JifenService{

	@Resource(name="jifenDao")
	private JifenDao commonDao; 
	
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
		/*Map map = new HashMap();
		map.put("start", 20*(page-1));
		map.put("limit", 20); 
		map.put("msgStatus", types);
		map.put("curId", curId);*/
		return commonDao.findCommon2(page,types,curId);
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
	public Map findCommonById(int id) {
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
	public List<JFExchangeLogEntity> findJFHZById_MemNum(int curId, String curMemNum) {
		Map map=new HashMap();
		map.put("curId", curId);
		map.put("curMemNum", curMemNum);
		return commonDao.findJFHZById_MemNum(map);
	}

	@Override
	public List<JFExchangeLogEntity> findZHJLById(int curId) {
		return commonDao.findZHJLById(curId);
	}

}