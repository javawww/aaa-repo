package com.shengchuang.dao;

import java.util.List;
import java.util.Map;

import com.shengchuang.entity.EmailMsgEntity;
import com.shengchuang.entity.MemberEntity;
import com.shengchuang.model.EmailModel;

  
public interface EmailDao {
 
	public List<Map> findCommon(Map map);
	
	public List<EmailMsgEntity> findCommonEntity(Map map);
	
	public Map findCommonById(int id);
	
	public int addCommon(Object o);
	
	public int deleteCommon(int id); 
	
	public int updateCommon(Object m);
	
	public List<Map> findAll();

	public int findCommonCount(Map map);
	
	public int findOutMailCount(Map map);

	public List<EmailMsgEntity> findAllEmailEntity();

	public EmailMsgEntity findEmailMsgEntityById(Integer id);

	public List<EmailMsgEntity> findOutMailsById(int curId);

	public List<Map> findCommon3(Map map);

	public int findInMailCount(Map map);

}
