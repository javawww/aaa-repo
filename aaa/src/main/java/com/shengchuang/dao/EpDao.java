package com.shengchuang.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.shengchuang.entity.EPOrderEntity;
import com.shengchuang.entity.EPSellEntity;

  
public interface EpDao {
 
	public List<Map> findCommon(Map map);
	
	//public List<CommonEntity> findCommonEntity(Map map);
	
	public Map findCommonById(int id);
	
	public int addCommon(Object o);
	
	public int deleteCommon(int id); 
	
	public int updateCommon(Object o);
	
	public List<Map> findAll();

	public int findCommonCount(Map map);

	public EPSellEntity findEPSellEntityById(Integer id);

	public int addEpOrder(EPOrderEntity eoe);

	public int addEpSell(EPSellEntity ese);

	public int reduceEpSellSalar(Map map);

	public List<EPSellEntity> findOtherEpSell(int curId);

	public List<EPSellEntity> findMyEpSell(int curId);

	public List<EPOrderEntity> findMyEpOrder(String curMemNum);

	public int onSellCount(Integer memId);

	public EPOrderEntity findEPOrderEntityById(Integer id);

	public int updateOrder(EPOrderEntity es);

	public List<EPSellEntity> selectAllSellInfo_page(Map map);

	public int countsByselectAllSellInfo_page(Map map);

	public List<EPOrderEntity> selectAllOrderByStatus_page(Map map);

	public int countsBySelectAllOrderByStatus_page(Map map);

	public int updateEPsellByid(EPSellEntity epSell);

	public int findMaxPrioAndStatus();

	public List<EPSellEntity> findOtherPriorityEpSell(int curId);

	public List<EPOrderEntity> findWhoBuyMySell(String memNum);

	public List<EPSellEntity> findMyPriorityEpSell(int curId);

	public List<EPOrderEntity> findWhoBuyMySellHistory(String memNum);

	public int findCountsByBuyMemNum(String curMemNum);

	public List<EPOrderEntity> findMyEpOrderBymemNumSeller(String memNum);
	
}
