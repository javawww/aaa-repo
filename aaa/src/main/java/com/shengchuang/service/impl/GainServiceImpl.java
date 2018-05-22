package com.shengchuang.service.impl;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.shengchuang.dao.BonusDao;
import com.shengchuang.dao.GainDao;
import com.shengchuang.entity.BonusInfEntity;
import com.shengchuang.entity.BonusRepoEntity;
import com.shengchuang.entity.GainLogEntity;
import com.shengchuang.service.BonusService;
import com.shengchuang.service.GainService;
 
/**
 * 
 */
@Service("gainService")  
public class GainServiceImpl implements GainService{

	@Autowired
	private GainDao gainDao;


	@Override
	public int add(Object o) {
		return gainDao.add(o);
	}

	@Override
	public int update(Object o) {
		return gainDao.update(o);
	}

	@Override
	public GainLogEntity find(String memNum, Integer treeNum) {
		Map map = new HashMap();
		map.put("memNum", memNum);
		map.put("treeNo", treeNum);
		return gainDao.find(map);
	}

	@Override
	public void deleteByMemNum_treeNo(String curMemNum, Integer newTreeNo) {
		gainDao.deleteByMemNum_treeNo(curMemNum,newTreeNo);
	}

	
	
	
}
