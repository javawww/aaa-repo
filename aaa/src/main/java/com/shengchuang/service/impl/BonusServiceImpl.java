package com.shengchuang.service.impl;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import com.shengchuang.dao.BonusDao;
import com.shengchuang.entity.BonusInfEntity;
import com.shengchuang.entity.BonusRepoEntity;
import com.shengchuang.service.BonusService;
 
/**
 * 
 * 借用时，@Service("commonService")改成@Service("目标Service")    
 * @author Administrator
 *
 */
@Service("bonusService")  
public class BonusServiceImpl implements BonusService{

	@Resource(name="bonusDao")
	private BonusDao commonDao;

	@Override
	public List<BonusRepoEntity> findBonusRepoByMemNum(String curMemNum,Integer optType) {
		return commonDao.findBonusRepoByMemNum(curMemNum,optType);
	}

	@Override
	public List<BonusInfEntity> findBonusInfById(Integer id) {
		return commonDao.findBonusInfById(id);
	}

	@Override
	public List<BonusRepoEntity> findAllBonusRepo(Integer page, Date startDate, Date endDate, String memNum) {
		Map map = new HashMap();
		map.put("start", 20*(page-1));
		map.put("limit", 20); 
		map.put("startDate", startDate);
		map.put("endDate", endDate);
		map.put("memNum", memNum);
		return commonDao.findAllBonusRepo(map);
	}

	@Override
	public int findAllBonusRepoCount(Date startDate, Date endDate, String memNum) {
		Map map = new HashMap();
		map.put("startDate", startDate);
		map.put("endDate", endDate);
		map.put("memNum", memNum);
		return commonDao.findAllBonusRepoCount(map);
	}

	@Override
	public List<BonusInfEntity> findAllBonusInfByRepoId(Integer page, Integer repoId) {
		Map map = new HashMap();
		map.put("repoId", repoId);
		return commonDao.findAllBonusInfByRepoId(map);
	}

	@Override
	public int findAllBonusInfCountByRepoId(Integer repoId) {
		return commonDao.findAllBonusInfCountByRepoId(repoId);
	}

	@Override
	public int deleteCommon(String ids) {
		String idd[]=ids.split(",");
		for(int i=0;i<idd.length;i++){ 
		    commonDao.deleteCommon(Integer.parseInt(idd[i]));
		} 
		return 1;
	}

	@Override
	public int add(BonusInfEntity bonus) {
		return commonDao.add(bonus);
	}

	@Override
	public List<BonusInfEntity> findBonusInfByMemId(int id,Integer bonusRepoId) {
		return commonDao.findBonusInfByMemId(id,bonusRepoId);
	}

	@Override
	public List<BonusInfEntity> findAllBonusRepoInf_page(Integer page, Date startDate, Date endDate, String memNum,
			String bonusType) {
		Map map = new HashMap();
		map.put("start", 20*(page-1));
		map.put("limit", 20); 
		map.put("startDate", startDate);
		map.put("endDate", endDate);
		map.put("memNum", memNum);
		map.put("bonusType", bonusType);
		return commonDao.findAllBonusRepoInf_page(map);
	}

	@Override
	public int findCountsAllBonusRepoInf_page(Date startDate, Date endDate, String memNum, String bonusType) {
		Map map = new HashMap();
		map.put("startDate", startDate);
		map.put("endDate", endDate);
		map.put("memNum", memNum);
		map.put("bonusType", bonusType);
		return commonDao.findCountsAllBonusRepoInf_page(map);
	} 
	
	
}
