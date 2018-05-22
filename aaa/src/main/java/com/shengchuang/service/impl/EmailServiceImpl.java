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
import com.shengchuang.dao.EmailDao;
import com.shengchuang.dao.InfoDao;
import com.shengchuang.dao.member.MemberDao;
import com.shengchuang.dao.member.MemberWriteDao;
import com.shengchuang.entity.EmailMsgEntity;
import com.shengchuang.entity.MemberEntity;
import com.shengchuang.entity.User;
import com.shengchuang.model.EmailModel;
import com.shengchuang.service.EmailService;
import com.shengchuang.service.InfoService;
import com.shengchuang.service.MemberService;
/**
 * 会员实现类
 * @author Administrator
 * @param <T>
 *
 */
@Service("emailService")
public class EmailServiceImpl implements EmailService {

	@Resource(name="emailDao")
	private EmailDao commonDao; 
	
	/**
	 * 管理员查，结果为Map类
	 */
	@Override
	public List<Map> findCommon(Integer page, String infType) {
		Map map = new HashMap();
		map.put("start", 20*(page-1));
		map.put("limit", 20); 
		map.put("msgStatus", infType);
		return commonDao.findCommon(map);
	}
	
	/**
	 * 发件箱页面， 管理员查，结果为Map类
	 */
	@Override
	public List<Map> findCommon2(Integer page, String infType, int curId) {
		Map map = new HashMap();
		map.put("start", 20*(page-1));
		map.put("limit", 20); 
		map.put("msgStatus", infType);
		map.put("curId", curId);
		return commonDao.findCommon(map);
	}

	/**
	 * 管理员查，结果为对应实体类
	 */
	@Override
	public List<EmailMsgEntity> findCommonEntity(Integer page, String infType) {
		Map map = new HashMap();
		map.put("start", 20*(page-1));
		map.put("limit", 20); 
		map.put("msgStatus", infType);
		return commonDao.findCommonEntity(map);
	}
	
	/**
	 * 管理员查，结果为对应实体类
	 */
	@Override
	public List<EmailMsgEntity> findAllEmailEntity() {
		return commonDao.findAllEmailEntity();
	}
	
	/**
	 * 管理员查具体某一条，结果为对应实体类
	 */
	@Override
	public Map findCommonById(int id) {
		return commonDao.findCommonById(id);
	}

	/**
	 * 管理员增
	 */
	@Override
	public int addCommon(Object o) {
		return commonDao.addCommon(o);
	}
	
	/**
	 * 管理员删
	 */
	public int deleteCommon(String ids){
		String idd[]=ids.split(",");
		for(int i=0;i<idd.length;i++){ 
		    commonDao.deleteCommon(Integer.parseInt(idd[i]));
		} 
		return 1;
	} 
	
	/**
	 * 管理员改
	 */
	@Override
	public int updateCommon(Object m) {
		return commonDao.updateCommon(m);
	}
	

	/**
	 * 返回整个表里的所有数据
	 */
	@Override
	public List<Map> findAll() {
		return commonDao.findAll();
	}

	/**
	 * 返回总条数，分页要用
	 */
	@Override
	public int findCommonCount(String jhState) {
		Map map=new HashMap();
		map.put("msgStatus", jhState);
		return commonDao.findCommonCount(map);
	}

	/**
	 * 返回发件箱总条数，分页要用
	 */
	@Override
	public int findOutMailCount(String jhState, int curId) {
		Map map=new HashMap();
		map.put("msgStatus", jhState);
		map.put("curId", curId);
		return commonDao.findOutMailCount(map);
	}

	@Override
	public EmailMsgEntity findEmailMsgEntityById(Integer id) {
		return commonDao.findEmailMsgEntityById(id);
	}

	@Override
	public List<EmailMsgEntity> findOutMailsById(int curId) {
		return commonDao.findOutMailsById(curId);
	}

	@Override
	public List<Map> findCommon3(String msgStatus, Integer page, int curId) {
		Map map = new HashMap();
		map.put("start", 20*(page-1));
		map.put("limit", 20); 
		map.put("curId", curId);
		map.put("msgStatus", msgStatus);
		return commonDao.findCommon3(map);
	}

	@Override
	public int findInMailCount(String msgStatus, int curId) {
		Map map = new HashMap();
		map.put("curId", curId);
		map.put("msgStatus", msgStatus);
		return commonDao.findInMailCount(map);
	}

}
