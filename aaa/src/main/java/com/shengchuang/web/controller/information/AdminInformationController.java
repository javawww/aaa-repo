package com.shengchuang.web.controller.information;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.shengchuang.web.controller.BaseController;

@Controller
@RequestMapping(value = "admin/information")
public class AdminInformationController extends BaseController{

	/*@RequestMapping(value = "newsNotice", method = { RequestMethod.GET })
	public String newsNotice(HttpServletRequest request, HttpServletResponse response, Model model)
			throws IOException {
		log.info("信息管理-新闻公告");
		return "admin/information/newsNotice";
	}*/
	
	/*@RequestMapping(value = "addNews", method = { RequestMethod.GET })
	public String addNews(HttpServletRequest request, HttpServletResponse response, Model model)
			throws IOException {
		log.info("信息管理-新增公告");
		return "admin/information/addNews";
	}*/
	
	@RequestMapping(value = "newsDetail", method = { RequestMethod.GET })
	public String newsDetail(HttpServletRequest request, HttpServletResponse response, Model model)
			throws IOException {
		log.info("信息管理-公告详情");
		return "admin/information/newsDetail";
	}
	
}
