package com.shengchuang.service.impl;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.shengchuang.dao.BackupDao;
import com.shengchuang.dao.BonusDao;
import com.shengchuang.entity.BonusInfEntity;
import com.shengchuang.entity.BonusRepoEntity;
import com.shengchuang.entity.MysqlBackupEntity;
import com.shengchuang.service.BackupService;
import com.shengchuang.service.BonusService;
 
/**
 * 
 * 借用时，@Service("commonService")改成@Service("目标Service")    
 * @author Administrator
 *
 */
@Service("backupService")  
public class BackupServiceImpl implements BackupService{

	@Resource(name="backupDao")
	private BackupDao backupDao;
	
	@Override
	public List<MysqlBackupEntity> findFB(Integer page) {
		Map map = new HashMap();
		map.put("start", 20*(page-1));
		map.put("limit", 20); 
		return backupDao.findFB(map);
	}

	@Override
	public int findAllCount() {
		return backupDao.findAllCount();
	}

	@Override
	public int restore(Integer id) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int delete(String ids) {
		String idd[]=ids.split(",");
		for(int i=0;i<idd.length;i++){ 
			backupDao.delete(Integer.parseInt(idd[i]));
		} 
		return 1;
	}

	@Override
	public int clear() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int add(String name, String message, Date now, String path) {
		MysqlBackupEntity m = new MysqlBackupEntity();
		m.setName(name);
		m.setMessage(message);
		m.setDate(now);
		m.setLocation(path);
		return backupDao.add(m);
	}

	@Override
	public MysqlBackupEntity findBackupById(Integer id) {
		return backupDao.findBackupById(id);
	} 
	
	
}
