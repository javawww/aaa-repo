package com.shengchuang.service;

import java.util.Date;
import java.util.List;
import java.util.Map;

import com.shengchuang.entity.BonusInfEntity;
import com.shengchuang.entity.BonusRepoEntity;


public interface BonusService {

	List<BonusRepoEntity> findBonusRepoByMemNum(String curMemNum,Integer optType);

	List<BonusInfEntity> findBonusInfById(Integer id);

	List<BonusRepoEntity> findAllBonusRepo(Integer page, Date startDate, Date endDate, String memNum);

	int findAllBonusRepoCount(Date startDate, Date endDate, String memNum);

	List<BonusInfEntity> findAllBonusInfByRepoId(Integer page, Integer repoId);

	int findAllBonusInfCountByRepoId(Integer repoId);

	int deleteCommon(String ids);

	public int add(BonusInfEntity bonus);

	List<BonusInfEntity> findBonusInfByMemId(int id,Integer bonusRepoId);

	List<BonusInfEntity> findAllBonusRepoInf_page(Integer page, Date startDate, Date endDate, String memNum, String bonusType);

	int findCountsAllBonusRepoInf_page(Date startDate, Date endDate, String memNum, String bonusType);

	
}
