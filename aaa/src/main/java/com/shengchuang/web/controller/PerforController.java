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
import com.shengchuang.entity.PerforRepoEntity;
import com.shengchuang.service.BonusService;
import com.shengchuang.service.InfoService;
import com.shengchuang.service.PerforService;
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
@RequestMapping(value = "admin/perfor")
public class PerforController extends BaseController{
	
	@Autowired
	private PerforService perforService;
	
	
	/**
	 * 查
	 * @param page 分页
	 * @param jhState 是否激活，分类查看用的;类型务必为String，否则一切看起来正常，唯独值为0时有暗病
	 * @return
	 */
	@ResponseBody
	@RequestMapping("/findAll")
	public ResultCode findAllBonusRepo(HttpServletRequest httpServletRequest, Model model, 
			Integer page, Date startDate, Date endDate, String memNum,String treeType) {
		
		List<PerforRepoEntity> list = perforService.findFB(page, startDate, endDate, memNum, treeType);
		int count = perforService.findAllCount(startDate, endDate, memNum, treeType);
		GridData griddata = new GridData();
		griddata.setData(list);
		griddata.setRecordsTotal(count);
		griddata.setPage(page);  
		
		return ResultCode.newRightCode(griddata);
	}
	
	/**
	 * 管理员删
	 */
	@ResponseBody
	@RequestMapping("/delete")
	public ResultCode deleteBonusRepo(String ids) {
		int result = perforService.deletePerforByIds(ids);
		return ResultCode.newRightCode(result);
	}
	
	
	/**
	 * 管理员增
	 */
	/*@ResponseBody
	@RequestMapping("/addInfo")*/
	public ResultCode addCommon(HttpServletRequest httpServletRequest, InformationEntity m ) {
		
		/*int curId = WebAdminSession.getAdminMember(httpServletRequest).getId();
		Date d = new Date();
		m.setCreateTime(d);
		m.setMemid(curId);
		int result = bonusService.addCommon(m);
		return ResultCode.newRightCode(result);*/
		return ResultCode.newRightCode(null);
	} 
	
}
