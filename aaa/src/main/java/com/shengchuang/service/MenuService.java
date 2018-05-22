package com.shengchuang.service;

import java.util.List;
import java.util.Map;

import com.shengchuang.entity.MemMenuEntity;
import com.shengchuang.entity.MenuEntity;

public interface MenuService {

	public List<Map> findCommon(int page,String djrxm,String types,String prostate,Integer uid);
	
	public int addCommon(int type_id,String value1,String value2,String value3,String value4,String yg,String bz,int djr,String djrxm);
	
	public int deleteCommon(String ids);
	
	public int updateCommon(int type_id,String value1,String value2,String value3,String value4,String yg,
			String bz,int id);
	
	public int findCommonCount(String djrxm,String types,String prostate,Integer uid);
	
	public List<Map> findCommonByUser(int page,int type_id,int djr);
	
	public int findCommonByUserCount(int type_id,int djr);
	
	public Map findCommonbyid(int id);
	
	public int updateCommonState(int id,int state);
	
	public List<Map> findCommonxxByCommon(int commonId);
	
	public List<Map> findCommonxxByUser(int userid);
	
	public List<Map> findCommonxxByUserAndState(int userid);
	
	public int updateCommonxxState(int id);
	public List<Map> findCommonxqxx(int page,int commonId);
	public int findCommonxqxxCount(int commonId);
	public Map findCommonxxbyid(int id);
	public int updateCommonStateByIds(String ids,int state);
	public List<Map> findCommonbyindex();
	public List<Map> findProByIndexAll(int type_id,int limit,int islogin);
	public int addCommonxx(int commonId,int user_id,String xm,String tel,String ms,String djrxm);
	
	public List<Map> findCommonByList(int type_id,int page,int islogin,String cc);
	public int findCommonByListCount(int type_id,String cc);
	
	//动态渲染左侧菜单
	public List<MenuEntity> findlist();
	//根据父亲id获取所有儿子
	public List<MenuEntity> findlistbypid_memId(Integer id,Integer memId);
	//通过管理员ID 删除所有关联的数据
	public void deleteByAdminId(Integer adminId);

	public int insert(MemMenuEntity memMenu);

	public MemMenuEntity selectByMenuId_MemId(Integer menuId,Integer memId);

	public List<MenuEntity> findListByMemId(Integer memId);
	
}
