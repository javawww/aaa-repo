package com.shengchuang.web.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List; 
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.shengchuang.core.GridData;
import com.shengchuang.core.ResultCode;
import com.shengchuang.entity.BonusInfEntity;
import com.shengchuang.entity.BonusRepoEntity;
import com.shengchuang.entity.InoutRepoEntity;
import com.shengchuang.service.BonusService;
import com.shengchuang.service.InOutRepoService;
import com.shengchuang.web.util.WebFrontSession;   
 
/**
 * 前台对于收支明细的各种操作
 */
@Controller
@RequestMapping(value = "admin/inout")
public class InOutRepoController extends BaseController{
	
	@Autowired
	private InOutRepoService inOutRepoService;
	
	
	/**
	 * 查看收支明细
	 */
	@ResponseBody
	@RequestMapping("/findAllInOutRepo")
	public ResultCode findAllInOutRepo(HttpServletRequest httpServletRequest,Model model, 
			Integer page, Date startDate, Date endDate, String memNum, String bonusType) {
		
		List<InoutRepoEntity> list = inOutRepoService.findAllInOutRepo(page, startDate, endDate, memNum, bonusType);
		int count = inOutRepoService.findAllInOutRepoCount(startDate, endDate, memNum, bonusType);
		GridData griddata = new GridData();
		griddata.setData(list);
		griddata.setRecordsTotal(count);
		griddata.setPage(page);  
		return ResultCode.newRightCode(griddata);
	}
	
	@ResponseBody
	@RequestMapping("/deleteInOutRepo")
	public ResultCode deleteInOutRepo(String ids) {
		int result = inOutRepoService.deleteInOutRepo(ids);
		return ResultCode.newRightCode(result);
	}
}
