package com.shengchuang.service;

import java.util.Date;
import java.util.List;
import java.util.Map;

import com.shengchuang.entity.BonusInfEntity;
import com.shengchuang.entity.BonusRepoEntity;
import com.shengchuang.entity.MysqlBackupEntity;


public interface BackupService {

	List<MysqlBackupEntity> findFB(Integer page);

	int findAllCount();

	int restore(Integer id);

	int delete(String ids);

	int clear();

	int add(String name, String message, Date now, String path);

	MysqlBackupEntity findBackupById(Integer id);

}
