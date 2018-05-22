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
import com.shengchuang.dao.InvestRepoDao;
import com.shengchuang.entity.BonusInfEntity;
import com.shengchuang.entity.BonusRepoEntity;
import com.shengchuang.entity.EmailMsgEntity;
import com.shengchuang.entity.InoutRepoEntity;
import com.shengchuang.entity.InvestRepoEntity;
import com.shengchuang.service.BonusService;
import com.shengchuang.service.InOutRepoService;
import com.shengchuang.service.InvestRepoService;
 
/**
 * 
 *
 */
@Service("investRepoService")  
public class InvestRepoServiceImpl implements InvestRepoService{

	@Autowired
	private InvestRepoDao investRepoDao;

	@Override
	public List<InvestRepoEntity> findAllInvestRepo(Integer page, Date startDate, Date endDate, String treeType) {
		Map map = new HashMap();
		map.put("start", 20*(page-1));
		map.put("limit", 20); 
		map.put("startDate", startDate);
		map.put("endDate", endDate);
		map.put("treeType", treeType);
		return investRepoDao.findAllInvestRepo(map);
	}

	@Override
	public int findAllInvestRepoCount(Date startDate, Date endDate, String treeType) {
		Map map = new HashMap();
		map.put("startDate", startDate);
		map.put("endDate", endDate);
		map.put("treeType", treeType);
		return investRepoDao.findAllInvestRepoCount(map);
	}

	@Override
	public int deleteInvestRepo(String ids) {
		String idd[]=ids.split(",");
		for(int i=0;i<idd.length;i++){ 
			investRepoDao.deleteInvestRepo(Integer.parseInt(idd[i]));
		} 
		return 1;
	}

	@Override
	public int add(Date plantTime, BigDecimal seedCount, Integer treeNum, String memNum) {
		InvestRepoEntity i = new InvestRepoEntity();
		i.setPlantTime(plantTime);
		i.setSeedCount(seedCount);
		i.setTreeNum(treeNum);
		i.setMemNum(memNum);
		return investRepoDao.add(i);
	}
	
}
