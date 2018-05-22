package com.shengchuang.dao.member;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.shengchuang.entity.CurrencyInfoEntity;
  
public interface CurrencyInfoDao {
 
	public List<Map> findCommon(Map map);
	
	public int addCommon(CurrencyInfoEntity currencyinfo);
	
	public int deleteCommon(int id); 
	
	public int updateCommon(Map map);
	
	public int findCommonCount(Map map);
	 
	public List<Map> findCommonByUser(Map map);
	
	public int findCommonByUserCount(Map map);
	
	public int updateCommonState(Map map);
	  
	public Map findCommonbyid(int id);
	
	public List<Map> findCommonxxByUser(int userid);
	
	public List<Map> findCommonxxByUserAndState(int userid);
	
	public int updateCommonxxState(int id);
	
	public List<Map> findCommonxqxx(Map map);
	
	public int findCommonxqxxCount(int commonId);
	
	public Map findCommonxxbyid(int id);
	
	public List<Map> findCommonbyindex();
	
	public int addCommonxx(Map map);
	
	public List<Map> findCommonByList(Map map);
	public int findCommonByListCount(Map map);
	
	public List<Map> findCommonxxByCommon(int commonId);
	
	public List<Map> findCommonbyuser(int id);
	public int deleteCommonxxByCommon(int commonId);	
	public int deleteCommonByUser(int id);

	public List<Map> findProByIndexAll(Map map);

	public CurrencyInfoEntity findOneCurrenInfoBymemNum(String memNum);

	public int reduceMoneyByMemId(@Param("amount")BigDecimal amount, @Param("id")int id);

	public int addYuE(Map map);

	public int reduceYuE(Map map);

	public int updateCurrenInfoByMemId(CurrencyInfoEntity currenInfo);

	public int deleteByMemId(int id);

	public CurrencyInfoEntity findByMemId(Integer memId);
}
