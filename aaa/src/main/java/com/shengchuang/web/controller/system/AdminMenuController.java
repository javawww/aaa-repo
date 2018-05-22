package com.shengchuang.web.controller.system;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.shengchuang.core.AjaxJson;
import com.shengchuang.entity.MemMenuEntity;
import com.shengchuang.entity.MemberEntity;
import com.shengchuang.entity.MenuEntity;
import com.shengchuang.model.MenuModel;
import com.shengchuang.service.MenuService;
import com.shengchuang.service.SystemParamService;
import com.shengchuang.web.controller.BaseController;
import com.shengchuang.web.util.WebAdminSession;
/**
 * 系统后台左侧菜单动态渲染
 * @author Administrator
 *
 */
@Controller
@RequestMapping(value = "admin/sysmenu")
public class AdminMenuController extends BaseController{
	
	@Resource(name="menuService")
	private MenuService 						menuService;
	
	/**
	 * 获取json数据 根据登录用户ID 进行权限控制
	 * @param request
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "rendermenu")
	public List<MenuModel> rendermenu(HttpServletRequest request,Model model){
		//当前登录管理员ID
		MemberEntity member = WebAdminSession.getAdminMember(request);
//		List<MemMenuEntity> memMenus = menuService.selectByMenuId_MemId(null, member.getId());
		
		List<MenuModel> menumodels = null;
		List<MenuEntity> parentmenu = new ArrayList<MenuEntity>();
//		List<MenuEntity>  list = menuService.findlist();
		//直接使用sql语句子查询  获取权限控制的菜单数据列表
		//SELECT * FROM t_menu WHERE id in(SELECT t.menuId from t_mem_menu t where t.memId = '71');
		List<MenuEntity>  list = menuService.findListByMemId(member.getId());
		
		if(list.size()>0){
			for (MenuEntity menuEntity : list) {
				if(menuEntity.getPid()==null){//父亲菜单
					parentmenu.add(menuEntity);
				}
			}
		}
		//json格式动态封装  满足前台渲染显示
		if(parentmenu.size()>0){
			//目标菜单
			menumodels = new ArrayList<MenuModel>();
			for (MenuEntity menuEntity : parentmenu) {
				MenuModel parmenumodel = new MenuModel();
				if(menuEntity.getIsspread()!=null && menuEntity.getIsspread()==1){
					parmenumodel.setSpread(true);
				}else if(menuEntity.getIsspread()!=null && menuEntity.getIsspread()==0){
					parmenumodel.setSpread(false);
				}
				parmenumodel.setTitle(menuEntity.getMenuTitle());
				parmenumodel.setIcon(menuEntity.getMenuIcon());
				//根据父亲id获取所有儿子
				List<MenuEntity> sunmenu = menuService.findlistbypid_memId(menuEntity.getId(),member.getId());
				
				if(sunmenu.size()>0){
					List<MenuModel> sunmenumodels = new ArrayList<MenuModel>();
					for (MenuEntity submenuEntity : sunmenu) {
						MenuModel sunmenumodel = new MenuModel();
						if(submenuEntity.getIsspread()!=null && submenuEntity.getIsspread()==1){
							sunmenumodel.setSpread(true);
						}else if(submenuEntity.getIsspread()!=null && submenuEntity.getIsspread()==0){
							sunmenumodel.setSpread(false);
						}
						sunmenumodel.setTitle(submenuEntity.getMenuTitle());
						sunmenumodel.setIcon(submenuEntity.getMenuIcon());
						sunmenumodel.setHref(submenuEntity.getMenuHref());
						sunmenumodels.add(sunmenumodel);
					}
					parmenumodel.setChildren(sunmenumodels);
				}
				menumodels.add(parmenumodel);
			}
		}
		return menumodels;
		
	}
	
}
