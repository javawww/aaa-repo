package com.shengchuang.service;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.Map;

import com.shengchuang.entity.BonusInfEntity;
import com.shengchuang.entity.BonusRepoEntity;
import com.shengchuang.entity.InoutRepoEntity;


public interface InOutRepoService {

	public List<InoutRepoEntity> findInOutRepoByMemNum(String curMemNum,Integer bonusRepoId);
	
	public int add(InoutRepoEntity i);
	
	public int add(String memNum, int bonusType, BigDecimal changeSalar, BigDecimal origiSalar, BigDecimal currSalar, String inoutDesc, Date createTime,Integer bonusRepoId);

	public List<InoutRepoEntity> findAllInOutRepo(Integer page, Date startDate, Date endDate, String memNum, String bonusType);

	public int findAllInOutRepoCount(Date startDate, Date endDate, String memNum, String bonusType);

	public int deleteInOutRepo(String ids);

	public List<InoutRepoEntity> findAllRechargesByMemNum(Integer page, String memNum, String desc);

	public int findAllRechargesCountByMemNum(String memNum, String desc);

	public int deleteInOutRepoById(Integer id);

	public BonusRepoEntity queryBonusRepoByCreateDate(String memNum,Integer optType);

	public int insertBonusRepo(String memNum,Integer optType);

	public List<BonusRepoEntity> queryBonusRepoByMemNum(String memNum,Integer optType);

}
