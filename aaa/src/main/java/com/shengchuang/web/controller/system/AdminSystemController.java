package com.shengchuang.web.controller.system;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.shengchuang.core.AjaxJson;
import com.shengchuang.core.GridData;
import com.shengchuang.core.ResultCode;
import com.shengchuang.entity.ParamConfEntity;
import com.shengchuang.service.MemberService;
import com.shengchuang.service.SystemParamService;
import com.shengchuang.web.controller.BaseController;
/**
 * 系统设置
 * @author Administrator
 *
 */
@Controller
@RequestMapping(value = "admin/system")
public class AdminSystemController extends BaseController{

	@Resource(name="systemParamService")
	private SystemParamService commonService;
	
	/**
	 * 初始化参数设置
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "initParams",method = RequestMethod.GET)
	public String initParams(HttpServletRequest request,HttpServletResponse response,Model model){
		List<Map> list = commonService.findCommon(1, "", "", "",2);
		if(list.size()>0){
			//1_1,2_1,3_1,4_0,5_1,6_1,7_0
			String tixCycle = (String)list.get(0).get("tixCycle");
			String[] tixCycles = tixCycle.split(",");
			model.addAttribute("tixCycles", tixCycles);
		}
		return "admin/system/initParams";
	}
	/**
	 * paramConfdatas  angulars动态获取全局参数
	 * @param httpServletRequest
	 * @param model
	 * @return
	 */
	@SuppressWarnings("rawtypes")
	@ResponseBody
	@RequestMapping(value = "paramConfdatas")
	public ResultCode paramConfdatas(HttpServletRequest httpServletRequest,Model model) {
		List<Map> list = commonService.findCommon(1, "", "", "",2);
		int count = commonService.findCommonCount("", "", "",2);
		GridData griddata = new GridData();
		griddata.setData(list);
		griddata.setRecordsTotal(count);
		griddata.setPage(1);  
		return ResultCode.newRightCode(griddata);
	}
	/**
	 * 更新全局配置参数
	 * @param httpServletRequest
	 * @return
	 */
	/*@SuppressWarnings("rawtypes")
	@ResponseBody
	@RequestMapping(value = "updateparams" , method = RequestMethod.POST)
	public AjaxJson updateparams(HttpServletRequest httpServletRequest,ParamConfEntity paramconf) 
	{
		AjaxJson j = new AjaxJson();
		j.setSuccess(true);
		msg = "修改成功";
		j.setMsg(msg);
		 
		return j;
	} */
	
	@SuppressWarnings("rawtypes")
	@ResponseBody
	@RequestMapping(value = "updateparams" , method = RequestMethod.POST)
	public ResultCode updateparams(HttpServletRequest httpServletRequest,ParamConfEntity paramconf) {
		int result = commonService.update(paramconf);
		return ResultCode.newRightCode(result);
	} 
	
	
}
