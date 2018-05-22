package com.shengchuang.web.controller;

import java.util.Date;
import java.util.List; 
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.shengchuang.core.GridData;
import com.shengchuang.core.ResultCode;
import com.shengchuang.entity.InvestRepoEntity;
import com.shengchuang.service.InvestRepoService;
 
/**
 * 前台对于收支明细的各种操作
 */
@Controller
@RequestMapping(value = "admin/invest")
public class InvestRepoController extends BaseController{
	
	@Autowired
	private InvestRepoService investRepoService;
	
	
	/**
	 * 查看收支明细
	 */
	@ResponseBody
	@RequestMapping("/findAllInvestRepo")
	public ResultCode findAllInvestRepo(HttpServletRequest httpServletRequest,Model model, 
			Integer page, Date startDate, Date endDate, String treeType) {
		
		List<InvestRepoEntity> list = investRepoService.findAllInvestRepo(page, startDate, endDate, treeType);
		int count = investRepoService.findAllInvestRepoCount(startDate, endDate, treeType);
		GridData griddata = new GridData();
		griddata.setData(list);
		griddata.setRecordsTotal(count);
		griddata.setPage(page);  
		return ResultCode.newRightCode(griddata);
	}
	
	@ResponseBody
	@RequestMapping("/deleteInvestRepo")
	public ResultCode deleteInvestRepo(String ids) {
		int result = investRepoService.deleteInvestRepo(ids);
		return ResultCode.newRightCode(result);
	}
}
