package com.shengchuang.dao;

import java.util.List;

import com.shengchuang.entity.GJSTStatusEntity;

  
public interface GjstDao {

	public int addCommon(GJSTStatusEntity ge);

	public int updateCommon(GJSTStatusEntity ge);

	public GJSTStatusEntity findCommonById(int id);

	public GJSTStatusEntity findCommonByMemId(int id);

	public int updateCommonByMemId(GJSTStatusEntity ge);

	public int deleteByMemId(int id);

	public List<GJSTStatusEntity> findAllGjst();
	
	public List<GJSTStatusEntity> findAllLiveGj();
	
	public List<GJSTStatusEntity> findAllLiveSt();

}
