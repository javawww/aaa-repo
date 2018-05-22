package com.shengchuang.service;

import java.util.List;
import java.util.Map;

import com.shengchuang.entity.EmailMsgEntity;
import com.shengchuang.entity.MemberEntity;
import com.shengchuang.model.EmailModel;

public interface EmailService {

	public List<Map> findCommon(Integer page, String jhState);
	
	public List<Map> findCommon2(Integer page, String jhState, int curId);
	
	public List<EmailMsgEntity> findCommonEntity(Integer page, String jhState);
	
	public List<EmailMsgEntity> findAllEmailEntity();
	
	public Map findCommonById(int id);
	
	public int addCommon(Object o);
	
	public int deleteCommon(String ids);
	
	public int updateCommon(Object m);

	public List<Map> findAll();

	public int findCommonCount(String jhState);
	
	public int findOutMailCount(String jhState, int curId);

	public EmailMsgEntity findEmailMsgEntityById(Integer id);

	public List<EmailMsgEntity> findOutMailsById(int curId);

	public List<Map> findCommon3(String msgStatus, Integer page, int curId);

	public int findInMailCount(String msgStatus, int curId);

}
