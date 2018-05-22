package com.shengchuang.web.controller;


import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.shengchuang.service.InvestRepoService;
import com.shengchuang.service.MemberService;

/**
 * 纯粹用于开发测试的Controller
 * 
 */
@Controller
public class MyTestController {
	@Autowired
	private MemberService memberService;
	@Autowired
	InvestRepoService investRepoService;
	
	@ResponseBody
	@RequestMapping("/aaa")
	public int aaa(HttpServletRequest httpServletRequest) {
		
		return 1;
	} 

	@RequestMapping("/zctest1")
	public String showIndexTest(){
		return "zc_test/test1";
	}
	
	@RequestMapping("/zctest2")
	public String showIndexTest2(){
		return "zc_test/test2";
	}
	
}
