package com.shengchuang.service;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.Map;

import com.shengchuang.entity.EmailMsgEntity;
import com.shengchuang.entity.InformationEntity;
import com.shengchuang.entity.InoutRepoEntity;
import com.shengchuang.entity.InvestRepoEntity;
import com.shengchuang.entity.MemberEntity;

public interface InvestRepoService {

	List<InvestRepoEntity> findAllInvestRepo(Integer page, Date startDate, Date endDate, String treeType);

	int findAllInvestRepoCount(Date startDate, Date endDate, String treeType);

	int deleteInvestRepo(String ids);
	
	int add(Date plantTime, BigDecimal seedCount, Integer treeNum, String memNum);
	
}
