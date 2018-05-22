package com.shengchuang.web.controller.message;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.shengchuang.web.controller.BaseController;
/**
 * 邮件管理
 * @author Administrator
 *
 */
@Controller
@RequestMapping(value = "admin/message")
public class AdminMessageController extends BaseController{

	/**
	 * 发邮件
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 * @throws IOException
	 */
	@RequestMapping(value = "writeMsg", method = { RequestMethod.GET })
	public String writeMsg(HttpServletRequest request, HttpServletResponse response, Model model)
			throws IOException {
		log.info("邮件管理-发邮件");
		return "admin/message/writeMsg";
	}
	
	/**
	 * 发件箱
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 * @throws IOException
	 */
	@RequestMapping(value = "outbox", method = { RequestMethod.GET })
	public String outbox(HttpServletRequest request, HttpServletResponse response, Model model)
			throws IOException {
		log.info("邮件管理-发件箱");
		return "admin/message/outbox";
	}
	
	/**
	 * 收件箱
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 * @throws IOException
	 */
	@RequestMapping(value = "inbox", method = { RequestMethod.GET })
	public String inbox(HttpServletRequest request, HttpServletResponse response, Model model)
			throws IOException {
		log.info("邮件管理-收件箱");
		return "admin/message/inbox";
	}
}
