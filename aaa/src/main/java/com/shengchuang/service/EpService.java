package com.shengchuang.service;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.Map;

import com.shengchuang.entity.EPOrderEntity;
import com.shengchuang.entity.EPSellEntity;


public interface EpService {

	public List<Map> findCommon(Integer page, String jhState);	//查
	
	public List<Map> findCommon2(Integer page, String jhState, int curId);	//设计到当前用户id的查
	
	//public List<CommonEntity> findCommonEntity(Integer page, String jhState); //需要返回对应实体的查 
	
	public Map findCommonById(int id);	//根据id查找某一个具体的对象
	
	public int addCommon(Object o);		//增
	
	public int deleteCommon(String ids);	//删
	
	public int updateCommon(Object m);		//改

	public List<Map> findAll();		//查询全部，一般findCommon即可，但是findCommon一次最多20条，findAll则是全表

	public int findCommonCount(String jhState);	//查询总记录数，分页时用的

	public EPSellEntity findEPSellEntityById(Integer id);
	
	public EPOrderEntity findEPOrderEntityById(Integer id);

	public int addEpOrder(EPOrderEntity eoe);

	public int addEpSell(EPSellEntity ese);
	
	public int reduceEpSellSalar(BigDecimal eporderSalar, Integer id);

	public List<EPSellEntity> findOtherEpSell(int curId);

	public List<EPSellEntity> findMyEpSell(int curId);

	public List<EPOrderEntity> findMyEpOrder(String curMemNum);

	public int onSellCount(Integer memId);

	public int updateOrder(EPOrderEntity es);

	public List<EPSellEntity> selectAllSellInfo_page(Integer page,Date startDate, Date endDate,String esellStatus,String memNum);

	public int countsByselectAllSellInfo_page(Date startDate, Date endDate,String esellStatus,String memNum);

	public List<EPOrderEntity> selectAllOrderByStatus_page(Integer page,Date startDate, Date endDate,String eporderStatus,String memNum);

	public int countsBySelectAllOrderByStatus_page(Date startDate, Date endDate,String eporderStatus,String memNum);

	public int updateEPsellByid(EPSellEntity epSell);

	public int findMaxPrioAndStatus();

	public List<EPSellEntity> findOtherPriorityEpSell(int curId);

	public List<EPOrderEntity> findWhoBuyMySell(String memNum);

	public List<EPSellEntity> findMyPriorityEpSell(int curId);

	public List<EPOrderEntity> findWhoBuyMySellHistory(String memNum);

	public int findCountsByBuyMemNum(String curMemNum);

	public List<EPOrderEntity> findMyEpOrderBymemNumSeller(String memNum);	
	
}
