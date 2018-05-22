package com.shengchuang.service.impl;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shengchuang.dao.EpDao;
import com.shengchuang.entity.EPOrderEntity;
import com.shengchuang.entity.EPSellEntity;
import com.shengchuang.entity.EmailMsgEntity;
import com.shengchuang.service.EpService;
 
/**
 * 
 * 借用时，@Service("commonService")改成@Service("目标Service")    
 * @author Administrator
 *
 */
@Service("epService")  
public class EpServiceImpl implements EpService{

	@Resource(name="epDao")
	private EpDao commonDao; 
	
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
	public EPSellEntity findEPSellEntityById(Integer id) {
		return commonDao.findEPSellEntityById(id);
	}

	@Override
	public int addEpOrder(EPOrderEntity eoe) {
		return commonDao.addEpOrder(eoe);
	}

	@Override
	public int addEpSell(EPSellEntity ese) {
		return commonDao.addEpSell(ese);
	}

	@Override
	public int reduceEpSellSalar(BigDecimal eporderSalar, Integer id) {
		Map map=new HashMap();
		map.put("eporderSalar", eporderSalar);
		map.put("id", id);
		return commonDao.reduceEpSellSalar(map);
	}

	@Override
	public List<EPSellEntity> findOtherEpSell(int curId) {
		return commonDao.findOtherEpSell(curId);
	}

	@Override
	public List<EPSellEntity> findMyEpSell(int curId) {
		return commonDao.findMyEpSell(curId);
	}

	@Override
	public List<EPOrderEntity> findMyEpOrder(String curMemNum) {
		return commonDao.findMyEpOrder(curMemNum);
	}

	@Override
	public int onSellCount(Integer memId) {
		return commonDao.onSellCount(memId);
	}

	@Override
	public EPOrderEntity findEPOrderEntityById(Integer id) {
		return commonDao.findEPOrderEntityById(id);
	}

	@Override
	public int updateOrder(EPOrderEntity es) {
		return commonDao.updateOrder(es);
	}

	@Override
	public List<EPSellEntity> selectAllSellInfo_page(Integer page,Date startDate, Date endDate,String esellStatus,String memNum){
		Map map = new HashMap<>();
		map.put("start",  20*(page-1));
		map.put("limit", 20);
		map.put("startDate", startDate);
		map.put("endDate", endDate);
		map.put("esellStatus", esellStatus);
		map.put("memNum", memNum);
		
		return commonDao.selectAllSellInfo_page(map);
	}

	@Override
	public int countsByselectAllSellInfo_page(Date startDate, Date endDate,String esellStatus,String memNum) {
		Map map = new HashMap<>();
		map.put("startDate", startDate);
		map.put("endDate", endDate);
		map.put("esellStatus", esellStatus);
		map.put("memNum", memNum);
		return commonDao.countsByselectAllSellInfo_page(map);
	}

	@Override
	public List<EPOrderEntity> selectAllOrderByStatus_page(Integer page,Date startDate, Date endDate,String eporderStatus,String memNum) {
		Map map = new HashMap<>();
		map.put("start",  20*(page-1));
		map.put("limit", 20);
		map.put("startDate", startDate);
		map.put("endDate", endDate);
		map.put("eporderStatus", eporderStatus);
		map.put("memNum", memNum);
		
		return commonDao.selectAllOrderByStatus_page(map);
	}

	@Override
	public int countsBySelectAllOrderByStatus_page(Date startDate, Date endDate,String eporderStatus,String memNum) {
		Map map = new HashMap<>();
		map.put("startDate", startDate);
		map.put("endDate", endDate);
		map.put("eporderStatus", eporderStatus);
		map.put("memNum", memNum);
		
		return commonDao.countsBySelectAllOrderByStatus_page(map);
	}

	@Override
	public int updateEPsellByid(EPSellEntity epSell) {
		return commonDao.updateEPsellByid(epSell);
	}

	@Override
	public int findMaxPrioAndStatus() {
		return commonDao.findMaxPrioAndStatus();
	}

	@Override
	public List<EPSellEntity> findOtherPriorityEpSell(int curId) {
		return commonDao.findOtherPriorityEpSell(curId);
	}

	@Override
	public List<EPOrderEntity> findWhoBuyMySell(String memNum) {
		return commonDao.findWhoBuyMySell(memNum);
	}
	
	@Override
	public List<EPOrderEntity> findWhoBuyMySellHistory(String memNum) {
		return commonDao.findWhoBuyMySellHistory(memNum);
	}

	@Override
	public List<EPSellEntity> findMyPriorityEpSell(int curId) {
		return commonDao.findMyPriorityEpSell(curId);
	}

	@Override
	public int findCountsByBuyMemNum(String curMemNum) {
		return commonDao.findCountsByBuyMemNum(curMemNum);
	}

	@Override
	public List<EPOrderEntity> findMyEpOrderBymemNumSeller(String memNum) {
		return commonDao.findMyEpOrderBymemNumSeller(memNum);
	}

}
