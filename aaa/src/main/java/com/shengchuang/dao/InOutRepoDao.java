package com.shengchuang.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.shengchuang.entity.BonusRepoEntity;
import com.shengchuang.entity.InoutRepoEntity;

  
public interface InOutRepoDao {

	List<InoutRepoEntity> findInOutRepoByMemNum(@Param("memNum")String memNum,@Param("bonusRepoId")Integer bonusRepoId);

	int add(InoutRepoEntity i);

	List<InoutRepoEntity> findAllInOutRepo(Map map);

	int findAllInOutRepoCount(Map map);

	int deleteInOutRepo(int id);

	List<InoutRepoEntity> findAllRechargesByMemNum(Map map);

	int findAllRechargesCountByMemNum(Map map);

	BonusRepoEntity queryBonusRepoByCreateDate(@Param("memNum")String memNum,@Param("optType")Integer optType);

	int insertBonusRepo(@Param("memNum")String memNum,@Param("optType")Integer optType);

	List<BonusRepoEntity> queryBonusRepoByMemNum(@Param("memNum")String memNum,@Param("optType")Integer optType);
 
}
