package com.shengchuang.service.impl;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shengchuang.dao.member.CurrencyInfoDao;
import com.shengchuang.entity.CurrencyInfoEntity;
import com.shengchuang.service.CurrencyInfoService;
 
/**
 * 
 * 借用时，@Service("commonService")改成@Service("目标Service")    
 * @author Administrator
 *
 */
@Service("currencyInfoService")  
public class CurrencyInfoServiceImpl implements CurrencyInfoService{

	@Autowired
	private CurrencyInfoDao commonDao; 
	
	//***************** 查    **************
	public List<Map> findCommon(int page,String djrxm,String types,String prostate,Integer uid){
		 
		Map map = new HashMap();
		map.put("start", 20*(page-1));
		map.put("limit", 20); 
		map.put("djrxm", djrxm);
		map.put("types", types);
		map.put("prostate", prostate);
		map.put("uid", uid);
		List<Map> list = commonDao.findCommon(map);
		
		return list;
	} 
	/**
	 * 返回当前登录用户的所有币种信息对象
	 * @param memNum
	 * @return
	 */
	public CurrencyInfoEntity findOneCurrenInfoBymemNum(String memNum){
		
		CurrencyInfoEntity curreninfo = commonDao.findOneCurrenInfoBymemNum(memNum);
		
		return curreninfo;
	} 

	//******************** 增  ***************
	public int addCommon(CurrencyInfoEntity currencyinfo){
		return commonDao.addCommon(currencyinfo);
	}
	
	//******************* 删除 **************
	public int deleteCommon(String ids){
		String idd[]=ids.split(",");
		for(int i=0;i<idd.length;i++){ 
		    commonDao.deleteCommon(Integer.parseInt(idd[i]));
		} 
		return 1;
	} 
	
	//******************* 改 ***************
	public int updateCommon(int type_id,String value1,String value2,String value3,String value4,String yg,
			String bz,int id){
		Map map = new HashMap();  
		if(null==value1){
			value1="";
		}
		if(null==value2){
			value2="";
		}
		if(null==value3){
			value3="";
		}
		if(null==value4){
			value4="";
		} 
		map.put("type_id", type_id);
		map.put("value1", value1);
		map.put("value2", value2);
		map.put("value3", value3);
		map.put("value4", value4); 
		map.put("yg", yg); 
		map.put("bz", bz);
		map.put("id", id); 
		map.put("state", 0);
		commonDao.updateCommonState(map);
		return commonDao.updateCommon(map);  
	}
	
	//********************   总条数，表里有多少行    **************
	public int findCommonCount(String djrxm,String types,String prostate,Integer uid){
		Map map=new HashMap();
		map.put("djrxm", djrxm);
		map.put("types", types);
		map.put("prostate", prostate);
		map.put("uid", uid);
		return commonDao.findCommonCount(map);
	}
	
	public List<Map> findCommonByUser(int page,int type_id,int djr){ 
		Map map = new HashMap();
		map.put("start", 20*(page-1));
		map.put("limit", 20);  
		map.put("type_id", type_id);
		map.put("djr", djr);
		List<Map> list = commonDao.findCommonByUser(map);
		
		for(int i=0;i<list.size();i++){
			Map map1 = (Map)list.get(i);
			int type=Integer.parseInt(map1.get("type_id").toString());
			if(type==1||type==2){ 
				map1.put("value1", "硫："+map1.get("value1").toString());
				map1.put("value2", "灰："+map1.get("value2").toString());
				map1.put("value3", "矾："+map1.get("value3").toString());
				map1.put("value4", "挥发："+map1.get("value4").toString());
			}else if(type==3){
				map1.put("value1", "软化点："+map1.get("value1").toString());
				map1.put("value2", "结焦值："+map1.get("value2").toString());
				map1.put("value3", "喹啉不溶物："+map1.get("value3").toString());
				map1.put("value4", "甲苯不溶物："+map1.get("value4").toString());
				
			}else if(type==4||type==5){
				map1.put("value1", "电阻率："+map1.get("value1").toString());
				map1.put("value2", "耐压强度："+map1.get("value2").toString());
				map1.put("value3", "体积密度："+map1.get("value3").toString());
				map1.put("value4", "二氧化碳反应性："+map1.get("value4").toString());	
			}
			int state=Integer.parseInt(map1.get("state").toString());
			if(state==0){
				map1.put("statename", "未审核");
			}else if(state==1){
				map1.put("statename", "审核通过");
			}else if(state==2){
				map1.put("statename", "审核不通过");
			}else if(state==3){
				map1.put("statename", "手动作废");
			}
		} 
		return list;
	} 
	public int findCommonByUserCount(int type_id,int djr){
		Map map=new HashMap();
		map.put("type_id", type_id);
		map.put("djr", djr); 
		return commonDao.findCommonByUserCount(map);
	}
	  
	public List<Map> findCommonxxByCommon(int commonId){
		return commonDao.findCommonxxByCommon(commonId);
	}
	public Map findCommonbyid(int id){
		
		return commonDao.findCommonbyid(id);
	} 
	
	public int updateCommonState(int id,int state){
		Map map=new HashMap();
		map.put("id", id);
		map.put("state", state);
		commonDao.updateCommonState(map);
	    return 1;
	}
	
	public int updateCommonStateByIds(String ids,int state){
		String idd[]=ids.split(",");
		for(int i=0;i<idd.length;i++){ 
			Map map=new HashMap();
			map.put("id", idd[i]);
			map.put("state", state);
			commonDao.updateCommonState(map);
		} 
	    return 1;
	}
	
	public List<Map> findCommonxxByUser(int userid){
		return commonDao.findCommonxxByUser(userid);
	}
	 
	public List<Map> findCommonxxByUserAndState(int userid){
		return commonDao.findCommonxxByUserAndState(userid);
	}
	
	public int updateCommonxxState(int id){
		return commonDao.updateCommonxxState(id);
	}
	
	public List<Map> findCommonxqxx(int page,int commonId){
		 
		Map map = new HashMap();
		map.put("start", 20*(page-1));
		map.put("limit", 20); 
		map.put("commonId", commonId); 
		List<Map> list = commonDao.findCommonxqxx(map);
		for(int i=0;i<list.size();i++){
			Map map1=(Map)list.get(i); 
			if(null==map1.get("user_realname")){
				map1.put("user_name", map1.get("user_realname1").toString());
			}else{
				map1.put("user_name", map1.get("user_realname").toString());
			}
		}
		return list;
	} 
	public int findCommonxqxxCount(int commonId){ 
		return commonDao.findCommonxqxxCount(commonId);
	}
	
	public Map findCommonxxbyid(int id){
		Map map = commonDao.findCommonxxbyid(id);
		if(null==map.get("user_realname")){
			map.put("user_name", map.get("user_realname1").toString());
		}else{
			map.put("user_name", map.get("user_realname").toString());
		}
		return map;
	}
	
	public List<Map> findCommonbyindex(){
		List<Map> list = commonDao.findCommonbyindex();
		for(int i=0;i<list.size();i++){
			Map map1=(Map)list.get(i); 
			if(null==map1.get("user_name")){
				map1.put("user_name", map1.get("user_name1").toString());
			}else{
				map1.put("user_name", map1.get("user_name").toString());
			}
			
			int type=Integer.parseInt(map1.get("type_id").toString());
			if(type==1){ 
				map1.put("prodesc","硫:"+map1.get("value1").toString()+",灰:"+map1.get("value2").toString()+",矾:"+map1.get("value3").toString()+",挥发:"+map1.get("value4").toString());
			}else if(type==2){
				map1.put("prodesc","硫:"+map1.get("value1").toString()+",灰:"+map1.get("value2").toString()+",矾:"+map1.get("value3").toString()+",挥发:"+map1.get("value4").toString());
			}else if(type==3){
				map1.put("prodesc","软化点:"+map1.get("value1").toString()+",结焦值:"+map1.get("value2").toString()+",喹啉不溶物:"+map1.get("value3").toString()+",甲苯不溶物:"+map1.get("value4").toString());
			}else if(type==4){
				map1.put("prodesc","电阻率:"+map1.get("value1").toString()+",耐压强度:"+map1.get("value2").toString()+",体积密度:"+map1.get("value3").toString()+",二氧化碳反应性:"+map1.get("value4").toString());
			}else if(type==5){
				map1.put("prodesc","电阻率:"+map1.get("value1").toString()+",耐压强度:"+map1.get("value2").toString()+",体积密度:"+map1.get("value3").toString()+",二氧化碳反应性:"+map1.get("value4").toString());
			}
		}
		return list;
	}
	
	public List<Map> findProByIndexAll(int type_id,int limit,int islogin){
		Map map=new HashMap();
		map.put("type_id", type_id); 
		map.put("start", 0);
		map.put("limit", limit);
		List list=commonDao.findProByIndexAll(map);
		if(islogin==0){
			for(int i=0;i<list.size();i++){
				Map map1=(Map)list.get(i);
				map1.put("jg", "***");
				map1.put("cc", "***");
				map1.put("jglx", 0);
			}
		}
		for(int i=0;i<list.size();i++){
			Map map1=(Map)list.get(i); 
			if(null==map1.get("user_name")){
				map1.put("user_name", map1.get("user_name1").toString());
			}else{
				map1.put("user_name", map1.get("user_name").toString());
			}
			
			int type=Integer.parseInt(map1.get("type_id").toString());
			if(type==1){ 
				map1.put("prodesc","硫:"+map1.get("value1").toString()+",灰:"+map1.get("value2").toString()+",矾:"+map1.get("value3").toString()+",挥发:"+map1.get("value4").toString());
			}else if(type==2){
				map1.put("prodesc","硫:"+map1.get("value1").toString()+",灰:"+map1.get("value2").toString()+",矾:"+map1.get("value3").toString()+",挥发:"+map1.get("value4").toString());
			}else if(type==3){
				map1.put("prodesc","软化点:"+map1.get("value1").toString()+",结焦值:"+map1.get("value2").toString()+",喹啉不溶物:"+map1.get("value3").toString()+",甲苯不溶物:"+map1.get("value4").toString());
			}else if(type==4){
				map1.put("prodesc","电阻率:"+map1.get("value1").toString()+",耐压强度:"+map1.get("value2").toString()+",体积密度:"+map1.get("value3").toString()+",二氧化碳反应性:"+map1.get("value4").toString());
			}else if(type==5){
				map1.put("prodesc","电阻率:"+map1.get("value1").toString()+",耐压强度:"+map1.get("value2").toString()+",体积密度:"+map1.get("value3").toString()+",二氧化碳反应性:"+map1.get("value4").toString());
			}
		}
		return list;
	}
	
	public int addCommonxx(int commonId,int user_id,String xm,String tel,String ms,String djrxm){
		Map map=new HashMap(); 
		Calendar calendar = Calendar.getInstance();
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");
		String time = df.format(calendar.getTime());  
		map.put("commonId", commonId);
		map.put("user_id", user_id);
		map.put("xm", xm);
		map.put("tel", tel);
		map.put("ms", ms);
		map.put("djrxm", djrxm);   
		map.put("djsj", time);   
		return commonDao.addCommonxx(map);
	}
	
	public List<Map> findCommonByList(int type_id,int page,int islogin,String cc){
		Map map=new HashMap();
		map.put("type_id", type_id); 
		map.put("start", 20*(page-1));
		map.put("limit", 20); 
		map.put("cc", cc);
		List list=commonDao.findCommonByList(map); 
		
		for(int i=0;i<list.size();i++){
			Map map1=(Map)list.get(i); 
			if(null==map1.get("user_name")){
				map1.put("user_name", map1.get("user_name1").toString());
			}else{
				map1.put("user_name", map1.get("user_name").toString());
			}
			
			int type=Integer.parseInt(map1.get("type_id").toString());
			if(type==1){ 
				map1.put("prodesc","硫:"+map1.get("value1").toString()+",灰:"+map1.get("value2").toString()+",矾:"+map1.get("value3").toString()+",挥发:"+map1.get("value4").toString());
			}else if(type==2){
				map1.put("prodesc","硫:"+map1.get("value1").toString()+",灰:"+map1.get("value2").toString()+",矾:"+map1.get("value3").toString()+",挥发:"+map1.get("value4").toString());
			}else if(type==3){
				map1.put("prodesc","软化点:"+map1.get("value1").toString()+",结焦值:"+map1.get("value2").toString()+",喹啉不溶物:"+map1.get("value3").toString()+",甲苯不溶物:"+map1.get("value4").toString());
			}else if(type==4){
				map1.put("prodesc","电阻率:"+map1.get("value1").toString()+",耐压强度:"+map1.get("value2").toString()+",体积密度:"+map1.get("value3").toString()+",二氧化碳反应性:"+map1.get("value4").toString());
			}else if(type==5){
				map1.put("prodesc","电阻率:"+map1.get("value1").toString()+",耐压强度:"+map1.get("value2").toString()+",体积密度:"+map1.get("value3").toString()+",二氧化碳反应性:"+map1.get("value4").toString());
			}
		}
		return list;
	}
	
	public int findCommonByListCount(int type_id,String cc){
		Map map=new HashMap();
		map.put("type_id", type_id); 
		map.put("cc", cc);
		return commonDao.findCommonByListCount(map);
	}
	@Override
	public int reduceMoneyByMemId(BigDecimal amount, int id) {
		return commonDao.reduceMoneyByMemId(amount, id);
	}
	@Override
	public int updateCommonByMemId(int memId) {
		// TODO Auto-generated method stub
		return 0;
	}
	@Override
	public int addYuE(String changeType, BigDecimal changeAmount, int id) {
		Map map=new HashMap();
		map.put("changeType", changeType); 
		map.put("changeAmount", changeAmount);
		map.put("id", id);
		return commonDao.addYuE(map);
	}
	@Override
	public int reduceYuE(String changeType, BigDecimal changeAmount, int id) {
		Map map=new HashMap();
		map.put("changeType", changeType); 
		map.put("changeAmount", changeAmount);
		map.put("id", id);
		return commonDao.reduceYuE(map);
	}
	@Override
	public int updateCurrenInfoByMemId(CurrencyInfoEntity currenInfo) {
		return commonDao.updateCurrenInfoByMemId(currenInfo);
	}
	@Override
	public int deleteByMemId(int id) {
		return commonDao.deleteByMemId(id);
	}
	@Override
	public CurrencyInfoEntity findByMemId(Integer memId) {
		return commonDao.findByMemId(memId);
	}
}
