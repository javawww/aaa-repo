package com.shengchuang.service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

import com.shengchuang.entity.ParamConfEntity;
import com.shengchuang.entity.User;
/**
 * 业务层  系统参数配置 全局 
 * @author Administrator
 *
 */
public interface SystemParamService {

	public List<Map> findCommon(int page,String djrxm,String types,String prostate,Integer uid);
	
	/**
	 * 它和findCommon的区别是明确告诉调用者：不需要传参，且返回全部,且返回不是list<Map>集合
	 * ，而是Map对象，可直接使用
	 * @return
	 */
	public Map findAll();
	
	public ParamConfEntity findParamById(Integer id);
	
	public int addCommon(int type_id,String value1,String value2,String value3,String value4,String yg,String bz,int djr,String djrxm);
	
	public int deleteCommon(String ids);
	
	public int updateCommon(int id,BigDecimal jhIntegral,BigDecimal yszzIntegral,BigDecimal jszzIntegral);
	
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
	
	////通过对象进行数据更新
	Integer update(ParamConfEntity paramconf);
	
}
