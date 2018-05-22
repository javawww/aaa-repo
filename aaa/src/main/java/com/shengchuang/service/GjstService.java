package com.shengchuang.service;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

import com.shengchuang.entity.GJSTStatusEntity;
import com.shengchuang.entity.InoutRepoEntity;


public interface GjstService {

	public int addCommon(GJSTStatusEntity ge);
	
	public int updateCommon(GJSTStatusEntity ge);
	
	public int updateCommonByMemId(GJSTStatusEntity g);
	
	public GJSTStatusEntity findCommonById(int id);
	
	public GJSTStatusEntity findCommonByMemId(int id);

	public int deleteByMemId(int id);
	
	public List<GJSTStatusEntity> findAllGjst();
	
	public List<GJSTStatusEntity> findAllLiveGj();
	
	public List<GJSTStatusEntity> findAllLiveSt();
	
}
