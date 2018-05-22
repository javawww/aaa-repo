package com.shengchuang.web.controller;

import java.util.Date;
import java.util.List; 
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.shengchuang.core.GridData;
import com.shengchuang.core.ResultCode;
import com.shengchuang.entity.InformationEntity;
import com.shengchuang.entity.MemberEntity;
import com.shengchuang.service.InfoService;
import com.shengchuang.web.controller.BaseController;
import com.shengchuang.web.util.WebAdminSession;
import com.shengchuang.web.util.WebFrontSession;
import com.alibaba.fastjson.JSON; 
/**
 *  借用时，自动装配service bean要修改两处，举例为DdService,
	@Resource(name="ddService")
	private DdService commonService;
 * 
 * 
 *
 */
@Controller
@RequestMapping(value = "admin/information")
public class InfoController extends BaseController{
	
	@Resource(name="infoService")
	private InfoService commonService;
	
	    
	/**
	 * 点击左侧菜单栏按钮，进入相应页面
	 * @return 需要的页面
	 */
	@RequestMapping("/newsNotice")
	public String memberList(HttpServletRequest request, HttpServletResponse response, Model model){
		
		return "admin/information/infoList";
	}
	
	/**
	 * 点击左侧菜单栏按钮，进入相应页面
	 * @return 需要的页面
	 */
	@RequestMapping("/addNews")
	public String memberAdd(HttpServletRequest request, HttpServletResponse response, Model model){
		return "admin/information/addInfo";
	}
	
	/**
	 * 查
	 * @param page 分页
	 * @param jhState 是否激活，分类查看用的;类型务必为String，否则一切看起来正常，唯独值为0时有暗病
	 * @return
	 */
	@ResponseBody
	@RequestMapping("/findInfo")
	public ResultCode findCommon(HttpServletRequest httpServletRequest, Model model, Integer page, String jhState) {
		
		List<Map> list = commonService.findCommon(page, jhState);
		int count = commonService.findCommonCount(jhState);
		GridData griddata = new GridData();
		griddata.setData(list);
		griddata.setRecordsTotal(count);
		griddata.setPage(page);  
		
		
		//后端前台的js代码里，angular发送了“common/findCommon”，因此这里的return也是给它，它会在success方法里
		//以$scope.rows = page.data.data 接收griddata的data（也就是list），然后后端前台的jsp代码
		//里用 ng-repeat="row in rows" 遍历出list里每个对象。
		return ResultCode.newRightCode(griddata);
	}
	
	/**
	 * 管理员增
	 */
	@ResponseBody
	@RequestMapping("/addInfo")
	public ResultCode addCommon(HttpServletRequest httpServletRequest, InformationEntity m ) {
		
		int curId = WebAdminSession.getAdminMember(httpServletRequest).getId();
		Date d = new Date();
		m.setCreateTime(d);
		m.setMemid(curId);
		int result = commonService.addCommon(m);
		return ResultCode.newRightCode(result);
	} 
	  
	/**
	 * 管理员改 
	 * 
	 * 因为对象m有Date类型的属性，所以js那头要用filter搞一搞，而本类又必须继承BaseController，这都是为了
	 * 让Date类型的属性直接赋值给自定义对象m
	 */
	@ResponseBody
	@RequestMapping("/updateInfo")
	public ResultCode updatePro(HttpServletRequest httpServletRequest, InformationEntity m) {
		m.setPubTime(new Date());
		int result = commonService.updateCommon(m);
		return ResultCode.newRightCode(2);
	} 
	
	/**
	 * 管理员删
	 */
	@ResponseBody
	@RequestMapping("/deleteInfo")
	public ResultCode deleteCommon(String id) {
		
		int result = commonService.deleteCommon(id);
		return ResultCode.newRightCode(result);
	}
	
}
