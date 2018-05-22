package com.shengchuang.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.shengchuang.entity.TreePlantStatEntity;

  
public interface TreeDao {
 
	public List<Map> findCommon(Map map);
	
	//public List<CommonEntity> findCommonEntity(Map map);
	
	public Map findCommonById(int id);
	
	public List<Map> findCommonByCurId(@Param("curId")int curId,@Param("treeType") int treeType);
	
	public int addCommon(Object o);
	
	public int deleteCommon(int id); 
	
	public int updateCommon(Object o);
	
	public List<Map> findAll();

	public int findCommonCount(Map map);

	public int findMaxTreeNo(Map map);

	public List<Map> findCommonByMemberId(Integer memid);

	public List<TreePlantStatEntity> findAllByMemId(Map map);

	public int updateTreeByTreeNum_MemId(Object o);

	public TreePlantStatEntity findTreeByTreeNum_MemId(Map map);

	public List<TreePlantStatEntity> findTreePlantsByMemid(Integer memId);

	public int updateTreePlants(TreePlantStatEntity treePlantStat);

	public TreePlantStatEntity findTreePlantByTnAnMeId(@Param("memId")Integer memId, @Param("treeNo")Integer treeNo);

	public List<TreePlantStatEntity> findOtherTrees(int curId);

	public List<TreePlantStatEntity> getAllTrees();

	public TreePlantStatEntity findById(Integer id);

	public int countMyStealTimes(Map map);

	public int countTreeStealTimes(Map map);
	
}
