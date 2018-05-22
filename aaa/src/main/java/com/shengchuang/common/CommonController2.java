package com.shengchuang.common;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List; 
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.shengchuang.web.util.WebFrontSession;   
 
/**
 * 前台对于树的各种操作
 */
//@Controller
//@RequestMapping(value = "front/tree")
public class CommonController2{
	
	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	//@Resource(name="treeService")
	private CommonService commonService;
	
	/**
	 * 查
	 */
	@ResponseBody
	@RequestMapping("/findCommon")
	public List<Map> findCommon(HttpServletRequest httpServletRequest,Model model,Integer page, String types) {
		page=1;
		List<Map> list = commonService.findCommon(page, types);
		List<Map> list2 = new ArrayList<>();
		for(Map m : list){
			Date d = (Date)m.get("XXtime");
			m.put("XXtime", sdf.format(d));
			list2.add(m);
		}
		//int count = commonService.findCommonCount(types);
		return list2;
	}
	
	/**
	 * 增
	 */
	@ResponseBody
	@RequestMapping("/addCommon")
	public int addCommon(HttpServletRequest httpServletRequest, Object c) {
		//Date d = new Date();
		//c.setSendTime(d);
		//int curId = WebFrontSession.getFrontMember(httpServletRequest).getId();
		//c.setSendid(curId);
		return commonService.addCommon(c);
	} 
	
	/**
	 * 改 
	 */
	@ResponseBody
	@RequestMapping("/updateCommon")
	public int updatePro(HttpServletRequest httpServletRequest,Object c) {
		
		return commonService.updateCommon(c);
	} 
	  
	/**
	 * 删
	 */
	@ResponseBody
	@RequestMapping("/deleteCommon")
	public int deleteCommon(String id) {
		
		return commonService.deleteCommon(id);
	}     

	/**
	 * 纯测试用，无实意
	 */
	@ResponseBody
	@RequestMapping("/aaa")
	public int test(HttpServletRequest httpServletRequest, Model model) {
		
		return 1;
	}  
}
