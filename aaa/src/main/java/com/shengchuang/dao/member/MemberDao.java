package com.shengchuang.dao.member;

import java.util.List;
import java.util.Map;

import com.shengchuang.entity.MemberEntity;
  
public interface MemberDao {
 
	public List<Map> findCommon(Map map);
	
	public int addCommon(Object o);
	
	public int deleteCommon(int id); 
	
	public int updateCommon(Map map);
	
	public int updateCommon(Object m);
	
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

	//add by tongzm
	
	public int findmemberByNum(String memNum);//根据用户编号校验用户是否存在
	public MemberEntity findmemberByValid(MemberEntity member);//登录校验并返回用户对象

	public int updatememberByNum(MemberEntity memNum);//普通用户升级管理员

	public List<MemberEntity> findMembersByRolestate_page(Map map);

	public int findMembersCountByRolestate_page(Map map);

	public List<MemberEntity> findAll();

	public List<MemberEntity> findListByTjrNum(String tjrNum);

	public List<Map> findCommonActived(Map map);

	public Map findCommonByMemNum(Map map);

	public List<Map> findTreeTable();

	public MemberEntity findCommonById(Integer id);

	public MemberEntity findForLogin(Map map);

	public List<MemberEntity> findJhMember(String curMemNum);

	public List<MemberEntity> findWjhMember(String curMemNum);

	public List<Map> findMemberListFB(Map map);

	public int findCommonCountFB(Map map);

	public MemberEntity selectMemEntiBymemNum(String memNum);

	public List<MemberEntity> selectAllMemsByjhState(Integer jhState);

	public MemberEntity findForTrade(Map map);

	public int deleteById(int id);

	
	//end
}
