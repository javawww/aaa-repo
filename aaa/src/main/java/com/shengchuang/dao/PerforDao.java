package com.shengchuang.dao;

import java.util.List;
import java.util.Map;

import com.shengchuang.entity.PerforRepoEntity;

  
public interface PerforDao {

	List<PerforRepoEntity> findPerforByMemNum(String memNum);

	List<PerforRepoEntity> findPerforByMemId(Integer memId);

	int addPerfor(Object o);

	int deleteCommon(int parseInt);

	List<PerforRepoEntity> findAll();

	int findAllCount(Map map);

	List<PerforRepoEntity> findFB(Map map);

}
