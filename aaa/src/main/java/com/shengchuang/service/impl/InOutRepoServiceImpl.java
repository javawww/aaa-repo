package com.shengchuang.service.impl;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shengchuang.dao.BonusDao;
import com.shengchuang.dao.InOutRepoDao;
import com.shengchuang.entity.BonusInfEntity;
import com.shengchuang.entity.BonusRepoEntity;
import com.shengchuang.entity.EmailMsgEntity;
import com.shengchuang.entity.InoutRepoEntity;
import com.shengchuang.service.BonusService;
import com.shengchuang.service.InOutRepoService;
 
/**
 * 
 * 借用时，@Service("commonService")改成@Service("目标Service")    
 * @author Administrator
 *
 */
@Service("inOutRepoService")  
public class InOutRepoServiceImpl implements InOutRepoService{

	@Autowired
	private InOutRepoDao inOutRepoDao;

	@Override
	public List<InoutRepoEntity> findInOutRepoByMemNum(String memNum,Integer bonusRepoId) {
		return inOutRepoDao.findInOutRepoByMemNum(memNum,bonusRepoId);
	}

	@Override
	public int add(InoutRepoEntity i) {
		return inOutRepoDao.add(i);
	}
	
	@Override
	public int add(String memNum, int bonusType, BigDecimal changeSalar, BigDecimal origiSalar, BigDecimal currSalar,
			String inoutDesc, Date createTime,Integer bonusRepoId) {
		
		InoutRepoEntity i = new InoutRepoEntity();
		i.setMemNum(memNum);
		i.setBonusType(bonusType);
		i.setChangeSalar(changeSalar);
		i.setOrigiSalar(origiSalar);
		i.setCurrSalar(currSalar);
		i.setInoutDesc(inoutDesc);
		i.setCreateTime(createTime);
		i.setBonusRepoId(bonusRepoId);
		return inOutRepoDao.add(i);
	}

	@Override
	public List<InoutRepoEntity> findAllInOutRepo(Integer page, Date startDate, Date endDate, String memNum,
			String bonusType) {
		Map map = new HashMap();
		map.put("start", 20*(page-1));
		map.put("limit", 20); 
		map.put("startDate", startDate);
		map.put("endDate", endDate);
		map.put("memNum", memNum);
		map.put("bonusType", bonusType);
		return inOutRepoDao.findAllInOutRepo(map);
	}

	@Override
	public int findAllInOutRepoCount(Date startDate, Date endDate, String memNum, String bonusType) {
		Map map = new HashMap();
		map.put("startDate", startDate);
		map.put("endDate", endDate);
		map.put("memNum", memNum);
		map.put("bonusType", bonusType);
		return inOutRepoDao.findAllInOutRepoCount(map);
	}

	@Override
	public int deleteInOutRepo(String ids) {
		String idd[]=ids.split(",");
		for(int i=0;i<idd.length;i++){ 
			inOutRepoDao.deleteInOutRepo(Integer.parseInt(idd[i]));
		} 
		return 1;
	}
	
	@Override
	public int deleteInOutRepoById(Integer id) {
		return inOutRepoDao.deleteInOutRepo(id);
	}

	@Override
	public List<InoutRepoEntity> findAllRechargesByMemNum(Integer page, String memNum, String desc) {
		Map map = new HashMap();
		map.put("start", 20*(page-1));
		map.put("limit", 20); 
		map.put("memNum", memNum);
		map.put("inoutDesc", desc);
		return inOutRepoDao.findAllRechargesByMemNum(map);
	}

	@Override
	public int findAllRechargesCountByMemNum(String memNum, String desc) {
		Map map = new HashMap();
		map.put("memNum", memNum);
		map.put("inoutDesc", desc);
		return inOutRepoDao.findAllRechargesCountByMemNum(map);
	}

	@Override
	public BonusRepoEntity queryBonusRepoByCreateDate(String memNum,Integer optType) {
		return inOutRepoDao.queryBonusRepoByCreateDate(memNum,optType);
	}

	@Override
	public int insertBonusRepo(String memNum,Integer optType) {
		return inOutRepoDao.insertBonusRepo(memNum,optType);
	}

	@Override
	public List<BonusRepoEntity> queryBonusRepoByMemNum(String memNum,Integer optType) {
		return inOutRepoDao.queryBonusRepoByMemNum(memNum,optType);
	}

}
