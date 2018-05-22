package com.shengchuang.service.impl;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.stereotype.Service;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.support.DefaultTransactionDefinition;

import com.shengchuang.common.CommonDao;
import com.shengchuang.dao.InfoDao;
import com.shengchuang.dao.member.MemberDao;
import com.shengchuang.dao.member.MemberWriteDao;
import com.shengchuang.entity.MemberEntity;
import com.shengchuang.entity.User;
import com.shengchuang.service.MemberService;
/**
 * 会员实现类
 * @author Administrator
 * @param <T>
 *
 */
@Service(value = "memberService")
public class MemberServiceImpl implements MemberService {

	@Resource(name="memberDao")
	private MemberDao commonDao; 
	
	//***************** 查    **************
	@Override
	public List<Map> findCommon(Integer page, String jhState) {
		Map map = new HashMap();
		map.put("start", 20*(page-1));
		map.put("limit", 20); 
		map.put("jhState", jhState);
		return commonDao.findCommon(map);
	}
	
	@Override
	public List<Map> findCommonActived(int page, Integer jhState, String curMemNum) {
		Map map = new HashMap();
		map.put("start", 20*(page-1));
		map.put("limit", 20); 
		map.put("jhState", jhState);
		map.put("curMemNum", curMemNum);
		return commonDao.findCommonActived(map);
	}

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

	//******************** 增  ***************
	public int addCommon(int type_id,String value1,String value2,String value3,String value4,String yg,String bz,int djr,String djrxm){
		Map map = new HashMap(); 
		Calendar calendar = Calendar.getInstance();
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");
		String time = df.format(calendar.getTime()); 
		map.put("type_id", type_id);
		map.put("value1", value1);
		map.put("value2", value2);
		map.put("value3", value3);
		map.put("value4", value4);  
		map.put("yg", yg);
		map.put("bz", bz);
		map.put("djr", djr);
		map.put("djrxm", djrxm);
		map.put("djsj", time);  
		return commonDao.addCommon(map);
	}

	@Override
	public int addCommon(Object o) {
		// TODO Auto-generated method stub
		return commonDao.addCommon(o);
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
	
	@Override
	public int updateCommon(Object m) {
		// TODO Auto-generated method stub
		return commonDao.updateCommon(m);
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
	
	/**
	 * 返回总条数，分页要用
	 */
	@Override
	public int findCommonCount(String jhState) {
		Map map=new HashMap();
		map.put("jhState", jhState);
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

	
	//add by tongzm
	@Override
	public int findmemberByNum(String memNum) {
		return commonDao.findmemberByNum(memNum);
	}

	@Override
	public MemberEntity findmemberByValid(MemberEntity member) {
		return commonDao.findmemberByValid(member);
	}

	
	@Override
	public int updatememberByNum(MemberEntity member) {
		return commonDao.updatememberByNum(member);
	}

	@Override
	public List<MemberEntity> findMembersByRolestate_page(Integer page, String jhState, String djState, String memNum) {
		Map map = new HashMap();
		map.put("start", 20*(page-1));
		map.put("limit", 20); 
		map.put("jhState", jhState);
		map.put("djState", djState);
		map.put("memNum", memNum);
		
		return commonDao.findMembersByRolestate_page(map);
	}

	@Override
	public int findMembersCountByRolestate_page(String jhState, String djState, String memNum) {
		Map map=new HashMap();
		map.put("jhState", jhState);
		map.put("djState", djState);
		map.put("memNum", memNum);
		return commonDao.findMembersCountByRolestate_page(map);
	}

	@Override
	public List<MemberEntity> findAll() {
		return commonDao.findAll();
	}

	@Override
	public List<MemberEntity> findListByTjrNum(String tjrNum) {
		return commonDao.findListByTjrNum(tjrNum);
	}

	@Override
	public Map findCommonByMemNum(String memNum) {
		Map map=new HashMap();
		map.put("memNum", memNum);
		return commonDao.findCommonByMemNum(map);
	}

	@Override
	public List<MemberEntity> findSonsByCurId(int curId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Map> findTreeTable() {
		// TODO Auto-generated method stub
		return commonDao.findTreeTable();
	}

	@Override
	public MemberEntity findCommonById(Integer id) {
		// TODO Auto-generated method stub
		return commonDao.findCommonById(id);
	}

	@Override
	public MemberEntity findForLogin(String curMemNum, String curPassword) {
		Map map=new HashMap();
		map.put("curMemNum", curMemNum);
		map.put("curPassword", curPassword);
		return commonDao.findForLogin(map);
	}

	@Override
	public MemberEntity getBackPwd(String curMemNum, int curProtectQuest, String curProtectAnswe) {
		Map map=new HashMap();
		map.put("curMemNum", curMemNum);
		map.put("curProtectQuest", curProtectQuest);
		map.put("curProtectAnswe", curProtectAnswe);
		return commonDao.findForLogin(map);
	}

	@Override
	public List<MemberEntity> findJhMember(String curMemNum) {
		return commonDao.findJhMember(curMemNum);
	}
	
	@Override
	public List<MemberEntity> findWjhMember(String curMemNum) {
		return commonDao.findWjhMember(curMemNum);
	}

	@Override
	public List<Map> findMemberListFB(Integer page, String jhState, String djState, String memNum, String tjrMemNum) {
		Map map=new HashMap();
		map.put("start", 20*(page-1));
		map.put("limit", 20); 
		map.put("jhState", jhState);
		map.put("djState", djState);
		map.put("memNum", memNum);
		map.put("tjrNum", tjrMemNum);
		return commonDao.findMemberListFB(map);
	}

	@Override
	public int findCommonCountFB(String jhState, String djState, String memNum, String tjrMemNum) {
		Map map=new HashMap();
		map.put("jhState", jhState);
		map.put("djState", djState);
		map.put("memNum", memNum);
		map.put("tjrNum", tjrMemNum);
		return commonDao.findCommonCountFB(map);
	}

	@Override
	public MemberEntity selectMemEntiBymemNum(String memNum) {
		return commonDao.selectMemEntiBymemNum(memNum);
	}

	@Override
	public List<MemberEntity> selectAllMemsByjhState(Integer jhState) {
		return commonDao.selectAllMemsByjhState(jhState);
	}

	@Override
	public MemberEntity findForTrade(int curId, String tradePwd) {
		Map map=new HashMap();
		map.put("id", curId);
		map.put("tradePwd", tradePwd);
		return commonDao.findForTrade(map);
	}

	@Override
	public int deleteById(int id) {
		return commonDao.deleteById(id);
	}

	//end

		
}
