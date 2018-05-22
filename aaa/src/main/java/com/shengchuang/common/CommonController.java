package com.shengchuang.common;

import java.util.List; 
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.shengchuang.core.GridData;
import com.shengchuang.core.ResultCode;   
 
/**
 *  借用时，自动装配service bean要修改两处，举例为DdService,
	@Resource(name="ddService")
	private DdService commonService;
 * 
 */
@Controller
@RequestMapping(value = "admin/common")
public class CommonController{
	
	//@Resource(name="commonService")
	private CommonService commonService;
	
	/**
	 * 当点击左侧菜单栏的common时触发这里，目的是返回到common.jsp和common.js，
	 * 并执行它们它们
	 */
	@RequestMapping("/commonActive")
	public String memberList(HttpServletRequest request, HttpServletResponse response, Model model){
		
		return "admin/common";
	}
	    
	/**
	 * 查
	 */
	@ResponseBody
	@RequestMapping("/findCommon")
	public ResultCode findCommon(HttpServletRequest httpServletRequest,Model model,Integer page, String types) {
		page=1;
		List<Map> list = commonService.findCommon(page, types);
		int count = commonService.findCommonCount(types);
		GridData griddata = new GridData();
		griddata.setData(list);
		griddata.setRecordsTotal(count);
		griddata.setPage(page);  
		return ResultCode.newRightCode(griddata);
	}
	
	/**
	 * 增
	 */
	@ResponseBody
	@RequestMapping("/addCommon")
	public ResultCode addCommon(HttpServletRequest httpServletRequest, Object c) {
		
		int result = commonService.addCommon(c);
		return ResultCode.newRightCode(result);
	} 
	  
	/**
	 * 删
	 */
	@ResponseBody
	@RequestMapping("/deleteCommon")
	public ResultCode deleteCommon(String id) {
		
		int result = commonService.deleteCommon(id);
		return ResultCode.newRightCode(result);
	}     
	 
	/**
	 * 改 
	 */
	@ResponseBody
	@RequestMapping("/updateCommon")
	public ResultCode updatePro(HttpServletRequest httpServletRequest,Object c) {
		 
		int result = commonService.updateCommon(c);
		return ResultCode.newRightCode(result);
	} 
    
}
