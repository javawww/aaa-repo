package com.shengchuang.web.controller.admin;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
import com.shengchuang.core.AjaxJson;
import com.shengchuang.core.GridData;
import com.shengchuang.core.ResultCode;
import com.shengchuang.entity.MemMenuEntity;
import com.shengchuang.entity.MemberEntity;
import com.shengchuang.entity.MenuEntity;
import com.shengchuang.model.ZtreeMenuModel;
import com.shengchuang.service.MemberService;
import com.shengchuang.service.MenuService;
import com.shengchuang.web.controller.BaseController;
/**
 * 管理员菜单控制前   管理员列表  分页查询  授权  编辑等操作
 * @author Administrator
 *
 */
@Controller
@RequestMapping(value = "admin/admin")
public class AdminAdminController extends BaseController{

	
	@Resource(name = "memberService")
	private MemberService 						memberService;
	@Resource(name = "menuService")
	private MenuService							menuService;
	
	/**
	 * 管理员列表
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "adminList",method = RequestMethod.GET)
	public String adminList(HttpServletRequest request,HttpServletResponse response,Model model){
		return "admin/admin/adminList";
	}
	
	/**
	 * 添加管理员
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "addAdmin",method = RequestMethod.GET)
	public String addAdmin(HttpServletRequest request,HttpServletResponse response,Model model){
		return "admin/admin/addAdmin";
	}
	/**
	 * 普通会员摇生一变成为超级管理员
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "ptmem2admin",method = RequestMethod.POST)
	public AjaxJson ptmem2admin(HttpServletRequest request,HttpServletResponse response,Model model,MemberEntity member){
		AjaxJson j = new AjaxJson();
		j.setSuccess(true);
		//前台已经进行了用户编号校验动作  用户编号数据库一定存在
		member.setRoleState(1);
		memberService.updatememberByNum(member);
		return j;
	}
	/**
	 * 返回所有管理员列表数据
	 * @param httpServletRequest
	 * @param model
	 * @return
	 */
	@SuppressWarnings("rawtypes")
	@ResponseBody
	@RequestMapping(value = "alladmins",method = RequestMethod.POST)
	public ResultCode alladmins(HttpServletRequest httpServletRequest,Model model, Integer page, String jhState, String djState, String memNum) {
		
		List<MemberEntity> members = memberService.findMembersByRolestate_page(page, jhState,djState,memNum);
		int count = memberService.findMembersCountByRolestate_page(jhState,djState,memNum);
		
		GridData griddata = new GridData();
		griddata.setData(members);
		griddata.setRecordsTotal(count);
		griddata.setPage(1);  
		
		//后端前台的js代码里，angular发送了common/findCommon，因此这里的return也是给它，它会在success方法里
		//以$scope.rows = page.data.data 接收griddata的data（也就是list），然后后端前台的jsp代码
		//里用 ng-repeat="row in rows" 遍历出list里每个对象。
		return ResultCode.newRightCode(griddata);
	}
	/**
	 * 点击授权  通过id动态加载对应管理员的菜单权限列表
	 */
	@RequestMapping(value = "shouquanDialog")
	public String shouquanDialog(HttpServletRequest request,Model model ,@RequestParam("id") Integer id) {
		if(id != null){
			model.addAttribute("id", id);
		}
		return "admin/admin/shouquanDialog";
	}
	/**
	 * ztree异步加载 菜单json格式数据
	 */
	@ResponseBody
	@RequestMapping(value = "ztreeMenus")
	public List<ZtreeMenuModel> ztreeMenus(HttpServletRequest request,Model model,@RequestParam("id") Integer id){
		List<ZtreeMenuModel> ztreeMenus = new ArrayList<ZtreeMenuModel>();
		List<MenuEntity> menus = menuService.findlist();
		if(menus.size() > 0){
			for (MenuEntity menu : menus) {
				ZtreeMenuModel ztreeMenu = new ZtreeMenuModel();
				ztreeMenu.setId(menu.getId());
				ztreeMenu.setpId(menu.getPid());
				ztreeMenu.setName(menu.getMenuTitle());
				if(menu.getPid() == null){
					ztreeMenu.setOpen(true);
				}else{
					ztreeMenu.setOpen(false);
				}
				MemMenuEntity memMenu = menuService.selectByMenuId_MemId(menu.getId(),id);
				if(memMenu==null){
					ztreeMenu.setChecked(false);
				}else{
					ztreeMenu.setChecked(true);
				}
				ztreeMenus.add(ztreeMenu);
			}
		}
		return ztreeMenus;
	}
	/**
	 * 更新权限   updateshouquan  思路：先全部清空,再重新赋值新的权限	
	 */
	@ResponseBody
	@RequestMapping(value = "updateshouquan")
	public AjaxJson updateshouquan(@RequestParam("menuIdList[]") String[] menuIdList,@RequestParam("adminId")Integer adminId,HttpServletRequest request,Model model){
		AjaxJson j = new AjaxJson();
		//通过adminId 删除所有关于本会员的菜单关联数据
		menuService.deleteByAdminId(adminId);
		//循环插入新的关联菜单数据  关联adminId管理员
		for (int i=0;i<menuIdList.length;i++) {
			MemMenuEntity memMenu = new MemMenuEntity();
			memMenu.setMemId(adminId);
			memMenu.setMenuId(Integer.valueOf(menuIdList[i]));
			int result = menuService.insert(memMenu);
		}
		return j;
	}
}
