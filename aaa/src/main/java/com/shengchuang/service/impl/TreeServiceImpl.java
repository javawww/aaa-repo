package com.shengchuang.service.impl;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shengchuang.dao.TreeDao;
import com.shengchuang.entity.EmailMsgEntity;
import com.shengchuang.entity.TreePlantStatEntity;
import com.shengchuang.service.TreeService;
 
/**
 * 
 * 借用时，@Service("commonService")改成@Service("目标Service")    
 * @author Administrator
 *
 */
@Service("treeService")  
public class TreeServiceImpl implements TreeService{

	@Resource(name="treeDao")
	private TreeDao commonDao; 
	
	/**
	 * 管理员查，结果为Map类
	 */
	@Override
	public List<Map> findCommon(Integer page, String types) {
		Map map = new HashMap();
		map.put("start", 20*(page-1));
		map.put("limit", 20); 
		map.put("types", types);
		return commonDao.findCommon(map);
	}
	
	/**
	 * 发件箱页面， 管理员查，结果为Map类
	 */
	@Override
	public List<Map> findCommon2(Integer page, String types, int curId) {
		Map map = new HashMap();
		map.put("start", 20*(page-1));
		map.put("limit", 20); 
		map.put("msgStatus", types);
		map.put("curId", curId);
		return commonDao.findCommon(map);
	}

	/**
	 * 管理员查，结果为对应实体类
	 */
	/*@Override
	public List<CommonEntity> findCommonEntity(Integer page, String types) {
		Map map = new HashMap();
		map.put("start", 20*(page-1));
		map.put("limit", 20); 
		map.put("msgStatus", types);
		return commonDao.findCommonEntity(map);
	}*/
	
	/**
	 * 管理员查具体某一条，结果为对应实体类
	 */
	@Override
	public Map findCommonById(int id) {
		return commonDao.findCommonById(id);
	}
	
	/**
	 * 管理员查具体某一条，结果为对应实体类
	 */
	@Override
	public List<Map> findCommonByCurId(int curId, int treeType) {
		//Map m = new HashMap();
		return commonDao.findCommonByCurId(curId,treeType);
	}

	/**
	 * 管理员增
	 */
	@Override
	public int addCommon(Object o) {
		return commonDao.addCommon(o);
	}
	
	/**
	 * 管理员删
	 */
	public int deleteCommon(String ids){
		String idd[]=ids.split(",");
		for(int i=0;i<idd.length;i++){ 
		    commonDao.deleteCommon(Integer.parseInt(idd[i]));
		} 
		return 1;
	} 
	
	/**
	 * 管理员改
	 */
	@Override
	public int updateCommon(Object o) {
		return commonDao.updateCommon(o);
	}
	

	/**
	 * 返回整个表里的所有数据
	 */
	@Override
	public List<Map> findAll() {
		return commonDao.findAll();
	}
	
	/**
	 * 返回整个表里的所有数据
	 */
	@Override
	public List<TreePlantStatEntity> findAllByMemId(int curId, int treeType) {
		Map map=new HashMap();
		map.put("curId", curId);
		map.put("treeType", treeType);
		return commonDao.findAllByMemId(map);
	}

	/**
	 * 返回总条数，分页要用
	 */
	@Override
	public int findCommonCount(String types) {
		Map map=new HashMap();
		map.put("msgStatus", types);
		return commonDao.findCommonCount(map);
	}

	@Override
	public int findMaxTreeNo(int curId, int treeType) {
		Map map=new HashMap();
		map.put("curId", curId);
		map.put("treeType", treeType);
		return commonDao.findMaxTreeNo(map);
	}

	@Override
	public List<Map> findCommonByMemberId(Integer memid) {
		return commonDao.findCommonByMemberId(memid);
	}

	@Override
	public int updateTreeByTreeNum_MemId(Object o) {
		return commonDao.updateTreeByTreeNum_MemId(o);
	}

	@Override
	public TreePlantStatEntity findTreeByTreeNum_MemId(Integer curId, Integer treeNum) {
		Map map=new HashMap();
		map.put("curId", curId);
		map.put("treeNum", treeNum);
		return commonDao.findTreeByTreeNum_MemId(map);
	}

	@Override
	public List<TreePlantStatEntity> findTreePlantsByMemid(Integer memId) {
		return commonDao.findTreePlantsByMemid(memId);
	}

	@Override
	public int updateTreePlants(TreePlantStatEntity treePlantStat) {
		return commonDao.updateTreePlants(treePlantStat);
	}

	@Override
	public TreePlantStatEntity findTreePlantByTnAnMeId(Integer memId, Integer treeNo) {
		return commonDao.findTreePlantByTnAnMeId(memId,treeNo);
	}

	@Override
	public List<TreePlantStatEntity> findOtherTrees(int curId) {
		return commonDao.findOtherTrees(curId);
	}

	@Override
	public List<TreePlantStatEntity> getAllTrees() {
		return commonDao.getAllTrees();
	}

	@Override
	public TreePlantStatEntity findById(Integer id) {
		return commonDao.findById(id);
	}

	@Override
	public boolean countMyStealTimes(Date gainTimeStart, Date gainTimeOver, Integer treeNo, String curMemNum,
			String btrMemNum) {

		Map map=new HashMap();
		map.put("gainTimeStart", gainTimeStart);
		map.put("gainTimeOver", gainTimeOver);
		map.put("treeNum", treeNo);
		map.put("curMemNum", curMemNum);
		map.put("btrMemNum", btrMemNum);
		if(commonDao.countMyStealTimes(map)==0){
			return true;
		}else{
			return false;
		}
	}

	@Override
	public int countTreeStealTimes(Date gainTimeStart, Date gainTimeOver, Integer treeNo, String btrMemNum) {
		Map map=new HashMap();
		map.put("gainTimeStart", gainTimeStart);
		map.put("gainTimeOver", gainTimeOver);
		map.put("treeNum", treeNo);
		map.put("btrMemNum", btrMemNum);
		return commonDao.countTreeStealTimes(map);
	}

}
