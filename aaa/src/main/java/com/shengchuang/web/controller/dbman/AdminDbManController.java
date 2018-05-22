package com.shengchuang.web.controller.dbman;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.shengchuang.web.controller.BaseController;

/**
 * 数据库管理
 * @author Administrator
 *
 */
@Controller
@RequestMapping(value = "admin/dbman")
public class AdminDbManController extends BaseController{

	private String msg;
	
	/**
	 * 数据备份
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "dbBackup",method = RequestMethod.GET)
	public String dbBackup(HttpServletRequest request,HttpServletResponse response,Model model){
		log.info("后台：数据备份");
		
		return "admin/dbman/dbBackup";
	}
	
	/**
	 * 数据还原
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "dbRestore",method = RequestMethod.GET)
	public String dbRestore(HttpServletRequest request,HttpServletResponse response,Model model){
		log.info("后台：数据还原");
		
		return "admin/dbman/dbRestore";
	}
	
	/**
	 * 数据清空
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "dbEmpty",method = RequestMethod.GET)
	public String dbEmpty(HttpServletRequest request,HttpServletResponse response,Model model){
		log.info("后台：数据清空");
		
		return "admin/dbman/dbEmpty";
	}
}
