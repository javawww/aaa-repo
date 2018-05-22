package com.shengchuang.service;

import java.util.Date;
import java.util.List;
import java.util.Map;

import com.shengchuang.entity.TreePlantStatEntity;


public interface TreeService {

	public List<Map> findCommon(Integer page, String jhState);	//查
	
	public List<Map> findCommon2(Integer page, String jhState, int curId);	//设计到当前用户id的查
	
	//public List<TreePlantStatEntity> findCommonEntity(Integer page, String jhState); //需要返回对应实体的查 
	
	public Map findCommonById(int id);	//根据id查找某一个具体的对象
	
	public List<Map> findCommonByCurId(int curId, int treeType);	//根据id查找某一个具体的对象
	
	public int addCommon(Object o);		//增
	
	public int deleteCommon(String ids);	//删
	
	public int updateCommon(Object m);		//改

	public List<Map> findAll();		//查询全部，一般findCommon即可，但是findCommon一次最多20条，findAll则是全表
	
	public List<TreePlantStatEntity> findAllByMemId(int curId, int treeType);		

	public int findCommonCount(String jhState);	//查询总记录数，分页时用的

	public int findMaxTreeNo(int curId, int treeType);

	public List<Map> findCommonByMemberId(Integer memid);
	
	public int updateTreeByTreeNum_MemId(Object o);

	public TreePlantStatEntity findTreeByTreeNum_MemId(Integer curId, Integer treeNum);

	public List<TreePlantStatEntity> findTreePlantsByMemid(Integer memId);

	public int updateTreePlants(TreePlantStatEntity treePlantStat);

	public TreePlantStatEntity findTreePlantByTnAnMeId(Integer memId, Integer treeNo);

	public List<TreePlantStatEntity> findOtherTrees(int curId);

	public List<TreePlantStatEntity> getAllTrees();
	
	public TreePlantStatEntity findById(Integer id);

	public boolean countMyStealTimes(Date gainTimeStart, Date gainTimeOver, Integer treeNo, String curMemNum,
			String btrMemNum);

	public int countTreeStealTimes(Date gainTimeStart, Date gainTimeOver, Integer treeNo, String btrMemNum);
}
