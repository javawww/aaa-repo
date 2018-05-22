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
import com.shengchuang.dao.GjstDao;
import com.shengchuang.dao.InOutRepoDao;
import com.shengchuang.entity.BonusInfEntity;
import com.shengchuang.entity.BonusRepoEntity;
import com.shengchuang.entity.EmailMsgEntity;
import com.shengchuang.entity.GJSTStatusEntity;
import com.shengchuang.entity.InoutRepoEntity;
import com.shengchuang.service.BonusService;
import com.shengchuang.service.GjstService;
import com.shengchuang.service.InOutRepoService;
 
/**
 * 
 * 借用时，@Service("commonService")改成@Service("目标Service")    
 * @author Administrator
 *
 */
@Service("gjstService")  
public class GjstServiceImpl implements GjstService{

	@Autowired
	private GjstDao gjstDao;

	@Override
	public int addCommon(GJSTStatusEntity ge) {
		return gjstDao.addCommon(ge);
	}

	@Override
	public int updateCommon(GJSTStatusEntity ge) {
		return gjstDao.updateCommon(ge);
	}
	
	@Override
	public int updateCommonByMemId(GJSTStatusEntity ge) {
		return gjstDao.updateCommonByMemId(ge);
	}

	@Override
	public GJSTStatusEntity findCommonById(int id) {
		return gjstDao.findCommonById(id);
	}
	
	@Override
	public GJSTStatusEntity findCommonByMemId(int id) {
		return gjstDao.findCommonByMemId(id);
	}

	@Override
	public int deleteByMemId(int id) {
		return gjstDao.deleteByMemId(id);
	}

	@Override
	public List<GJSTStatusEntity> findAllGjst() {
		return gjstDao.findAllGjst();
	}
	
	@Override
	public List<GJSTStatusEntity> findAllLiveGj() {
		return gjstDao.findAllLiveGj();
	}
	
	@Override
	public List<GJSTStatusEntity> findAllLiveSt() {
		return gjstDao.findAllLiveSt();
	}

}
