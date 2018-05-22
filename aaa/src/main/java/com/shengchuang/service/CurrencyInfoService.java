package com.shengchuang.service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

import com.shengchuang.entity.CurrencyInfoEntity;
import com.shengchuang.entity.EPSellEntity;

public interface CurrencyInfoService {

	public List<Map> findCommon(int page,String djrxm,String types,String prostate,Integer uid);
	public CurrencyInfoEntity findOneCurrenInfoBymemNum(String memNum);
	
	public int reduceMoneyByMemId(BigDecimal amount, int id);
	
	public int addCommon(CurrencyInfoEntity currencyinfo);
	
	public int deleteCommon(String ids);
	
	public int updateCommon(int type_id,String value1,String value2,String value3,String value4,String yg,
			String bz,int id);
	
	public int findCommonCount(String djrxm,String types,String prostate,Integer uid);
	
	public List<Map> findCommonByUser(int page,int type_id,int djr);
	
	public int findCommonByUserCount(int type_id,int djr);
	
	public Map findCommonbyid(int id);
	
	public int updateCommonState(int id,int state);
	
	public List<Map> findCommonxxByCommon(int commonId);
	
	public List<Map> findCommonxxByUser(int userid);
	
	public List<Map> findCommonxxByUserAndState(int userid);
	
	public int updateCommonxxState(int id);
	public List<Map> findCommonxqxx(int page,int commonId);
	public int findCommonxqxxCount(int commonId);
	public Map findCommonxxbyid(int id);
	public int updateCommonStateByIds(String ids,int state);
	public List<Map> findCommonbyindex();
	public List<Map> findProByIndexAll(int type_id,int limit,int islogin);
	public int addCommonxx(int commonId,int user_id,String xm,String tel,String ms,String djrxm);
	
	public List<Map> findCommonByList(int type_id,int page,int islogin,String cc);
	public int findCommonByListCount(int type_id,String cc);
	public int updateCommonByMemId(int memId);
	public int addYuE(String changeType, BigDecimal changeAmount, int memId);	//增加指定数量的余额
	public int reduceYuE(String changeType, BigDecimal changeAmount, int id);	//减少指定数量的余额
	public int updateCurrenInfoByMemId(CurrencyInfoEntity currenInfo);
	public int deleteByMemId(int id);
	public CurrencyInfoEntity findByMemId(Integer memId);
	
}
