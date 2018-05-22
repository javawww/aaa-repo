package com.shengchuang.web.controller.front;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.shengchuang.entity.MemberEntity;
import com.shengchuang.service.MemberService;
import com.shengchuang.service.SelfService;   
 
/**
 *  借用时，自动装配service bean要修改两处，举例为DdService,
	@Resource(name="ddService")
	private DdService commonService;
 * 
 */
@Controller
@RequestMapping(value = "front/self")
public class FrontSelfController{
	
	@Resource(name="memberService")
	private MemberService commonService;
	
	    
	/**
	 * 查
	 */
	/*@ResponseBody
	@RequestMapping("/findCommon")
	public int findCommon(HttpServletRequest httpServletRequest,Model model,int page, String types) {
		page=1;
		List<Map> list = commonService.findCommon(page, types);
		int count = commonService.findCommonCount(types);
		return 1;
	}*/
	
	/**
	 * 增
	 */
	/*@ResponseBody
	@RequestMapping("/addCommon")
	public int addCommon(HttpServletRequest httpServletRequest, Object c) {
		
		int result = commonService.addCommon(c);
		return 1;
	} */
	 
	/**
	 * 改基本信息
	 */
	@ResponseBody
	@RequestMapping("/updateCommon")
	public int updatePro(HttpServletRequest httpServletRequest,MemberEntity o) {
		 
		return commonService.updateCommon(o);
	} 
	
	/**
	 * 删
	 */
	/*@ResponseBody
	@RequestMapping("/deleteCommon")
	public int deleteCommon(String id) {
		
		int result = commonService.deleteCommon(id);
		return 1;
	}   */  
    
}
