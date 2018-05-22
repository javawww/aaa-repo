package com.shengchuang.web.controller;

import java.util.Date;
import java.util.List; 
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.shengchuang.core.GridData;
import com.shengchuang.core.ResultCode;
import com.shengchuang.entity.BonusInfEntity;
import com.shengchuang.entity.BonusRepoEntity;
import com.shengchuang.entity.InformationEntity;
import com.shengchuang.entity.MemberEntity;
import com.shengchuang.service.BonusService;
import com.shengchuang.service.InfoService;
import com.shengchuang.web.controller.BaseController;
import com.shengchuang.web.util.WebAdminSession;
import com.shengchuang.web.util.WebFrontSession;
import com.alibaba.fastjson.JSON; 
/**
 *  借用时，自动装配service bean要修改两处，举例为DdService,
	@Resource(name="ddService")
	private DdService bonusService;
 * 
 * 
 *
 */
@Controller
@RequestMapping(value = "admin/bonus")
public class BonusController extends BaseController{
	
	@Autowired
	private BonusService bonusService;
	
	
	/**
	 * 查
	 * @param page 分页
	 * @param jhState 是否激活，分类查看用的;类型务必为String，否则一切看起来正常，唯独值为0时有暗病
	 * @return
	 */
	@ResponseBody
	@RequestMapping("/findAllBonusRepo")
	public ResultCode findAllBonusRepo(HttpServletRequest httpServletRequest, Model model, Integer page, Date startDate, Date endDate, String memNum,String bonusType) {
		
		List<BonusInfEntity> list = bonusService.findAllBonusRepoInf_page(page, startDate, endDate, memNum,bonusType);
		int counts = bonusService.findCountsAllBonusRepoInf_page(startDate, endDate, memNum,bonusType);
		GridData griddata = new GridData();
		griddata.setData(list);
		griddata.setRecordsTotal(counts);
		griddata.setPage(page);  
		
		return ResultCode.newRightCode(griddata);
	}
	
	
	@ResponseBody
	@RequestMapping("/findAllBonusInfByRepoId")
	public ResultCode findAllBonusInfByRepoId(HttpServletRequest httpServletRequest, Model model, Integer page, Integer id) {
		
		List<BonusInfEntity> list = bonusService.findAllBonusInfByRepoId(page, id);
		int count = bonusService.findAllBonusInfCountByRepoId(id);
		GridData griddata = new GridData();
		griddata.setData(list);
		
		return ResultCode.newRightCode(griddata);
	}
	
	/**
	 * 管理员增
	 */
	@ResponseBody
	@RequestMapping("/addInfo")
	public ResultCode addCommon(HttpServletRequest httpServletRequest, InformationEntity m ) {
		
		/*int curId = WebAdminSession.getAdminMember(httpServletRequest).getId();
		Date d = new Date();
		m.setCreateTime(d);
		m.setMemid(curId);
		int result = bonusService.addCommon(m);
		return ResultCode.newRightCode(result);*/
		return ResultCode.newRightCode(null);
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
		return ResultCode.newRightCode(null);
	} 
	
	/**
	 * 管理员删
	 */
	@ResponseBody
	@RequestMapping("/deleteBonusRepo")
	public ResultCode deleteBonusRepo(String ids) {
		int result = bonusService.deleteCommon(ids);
		return ResultCode.newRightCode(result);
	}
	
}
