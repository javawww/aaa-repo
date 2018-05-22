package com.shengchuang.service.impl;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import com.shengchuang.dao.BonusDao;
import com.shengchuang.dao.PerforDao;
import com.shengchuang.entity.BonusInfEntity;
import com.shengchuang.entity.BonusRepoEntity;
import com.shengchuang.entity.PerforRepoEntity;
import com.shengchuang.service.BonusService;
import com.shengchuang.service.PerforService;
 
/**
 * 
 * 借用时，@Service("commonService")改成@Service("目标Service")    
 * @author Administrator
 *
 */
@Service("perforService")  
public class PerforServiceImpl implements PerforService{

	@Resource(name="perforDao")
	private PerforDao commonDao;

	@Override
	public List<PerforRepoEntity> findPerforByMemNum(String memNum) {
		return commonDao.findPerforByMemNum(memNum);
	}

	@Override
	public List<PerforRepoEntity> findPerforByMemId(Integer memId) {
		return commonDao.findPerforByMemId(memId);
	}

	@Override
	public int addPerfor(Object o) {
		return commonDao.addPerfor(o);
	}

	@Override
	public int deletePerforByIds(String ids) {
		String idd[]=ids.split(",");
		for(int i=0;i<idd.length;i++){ 
		    commonDao.deleteCommon(Integer.parseInt(idd[i]));
		} 
		return 1;
	}
	
	@Override
	public int deletePerforById(Integer id) {
		return commonDao.deleteCommon(id);
	}

	@Override
	public List<PerforRepoEntity> findAll() {
		return commonDao.findAll();
	}

	@Override
	public List<PerforRepoEntity> findFB(Integer page, Date startDate, Date endDate, 
			String memNum, String treeType) {
		Map map = new HashMap();
		map.put("start", 20*(page-1));
		map.put("limit", 20); 
		map.put("startDate", startDate);
		map.put("endDate", endDate);
		map.put("memNum", memNum);
		map.put("treeType", treeType);
		return commonDao.findFB(map);
	}

	@Override
	public int findAllCount(Date startDate, Date endDate, String memNum, String treeType) {
		Map map = new HashMap();
		map.put("startDate", startDate);
		map.put("endDate", endDate);
		map.put("memNum", memNum);
		map.put("treeType", treeType);
		return commonDao.findAllCount(map);
	}

	
}
