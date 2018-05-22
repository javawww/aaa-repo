package com.shengchuang.dao;

import java.util.List;
import java.util.Map;

import com.shengchuang.entity.InoutRepoEntity;
import com.shengchuang.entity.InvestRepoEntity;

  
public interface InvestRepoDao {

	List<InvestRepoEntity> findAllInvestRepo(Map map);

	int findAllInvestRepoCount(Map map);

	int deleteInvestRepo(int parseInt);

	int add(InvestRepoEntity i);
 
}
