package com.shengchuang.dao;

import java.util.List;
import java.util.Map;

import com.shengchuang.entity.MysqlBackupEntity;

  
public interface BackupDao {

	List<MysqlBackupEntity> findFB(Map map);

	int findAllCount();

	void delete(int parseInt);

	int add(MysqlBackupEntity m);

	MysqlBackupEntity findBackupById(Integer id);

}
