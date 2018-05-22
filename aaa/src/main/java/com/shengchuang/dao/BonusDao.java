package com.shengchuang.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.shengchuang.entity.BonusInfEntity;
import com.shengchuang.entity.BonusRepoEntity;

  
public interface BonusDao {

	List<BonusRepoEntity> findBonusRepoByMemNum(@Param("memNum")String memNum,@Param("optType")Integer optType);

	List<BonusInfEntity> findBonusInfById(Integer id);

	List<BonusRepoEntity> findAllBonusRepo(Map map);

	int findAllBonusRepoCount(Map map);

	List<BonusInfEntity> findAllBonusInfByRepoId(Map map);

	int findAllBonusInfCountByRepoId(Integer repoId);

	public int  deleteCommon(int parseInt);

	int add(BonusInfEntity bonus);

	List<BonusInfEntity> findBonusInfByMemId(@Param("id")int id,@Param("bonusRepoId")Integer bonusRepoId);

	List<BonusInfEntity> findAllBonusRepoInf_page(Map map);

	int findCountsAllBonusRepoInf_page(Map map);
 
}
