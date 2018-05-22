package com.shengchuang.service;

import java.util.List;
import java.util.Map;

import com.shengchuang.entity.EmailMsgEntity;
import com.shengchuang.entity.InformationEntity;
import com.shengchuang.entity.MemberEntity;

public interface InfoService {

	public List<Map> findCommon(Integer page, String jhState);
/*	public List<InformationEntity> findCommon(Integer page, String jhState);
*/	
	public Map findCommonById(int id);

	public int addCommon(int type_id,String value1,String value2,String value3,String value4,String yg,String bz,int djr,String djrxm);
	
	public int addCommon(Object o);
	
	public int deleteCommon(String ids);
	
	public int updateCommon(int type_id,String value1,String value2,String value3,String value4,String yg,
			String bz,int id);
	
	public int findCommonCount(String jhState);
	
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

	
	//add by tongzm
	public int findmemberByNum(String memNum);//根据用户编号校验用户是否存在
	public MemberEntity findmemberByValid(MemberEntity member);//登录校验并返回用户对象

	public int updatememberByNum(MemberEntity member);//通过用户编号进行普通用户升级管理员
	
	public List<Map> findCommonByRolestate(int page,String djrxm,String types,String prostate,Integer uid);
	public int findCommonCountByRolestate(String djrxm,String types,String prostate,Integer uid);

	public int updateCommon(Object m);

	public List<MemberEntity> findAll();
	public List<InformationEntity> findAllInfo();
	public InformationEntity findInformationEntityById(int id);

	//end
	
}
