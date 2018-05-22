package com.shengchuang.web.controller.login;

import java.io.IOException;
import java.util.HashMap;
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
import com.shengchuang.entity.MemberEntity;
import com.shengchuang.service.MemberService;
import com.shengchuang.web.controller.BaseController;
import com.shengchuang.web.util.WebAdminSession;
import com.shengchuang.web.util.WebFrontSession;
/**
 * 前台登录  一跳转登录 二登录校验 三找回密码 
 * @author Administrator
 *
 */
@Controller
public class LoginController extends BaseController{

	private String 					msg ; //异步交互 提示信息
	
	@Resource(name="memberService")
	private MemberService 			commonService;//用户校验
	
	@RequestMapping(value = "/Login", method = { RequestMethod.GET })
	public String Login(HttpServletRequest request, HttpServletResponse response, Map<String, Object> stack)
			throws IOException {
		log.info("前台登录  跳转Login页面");
		return "front/login/Login";
	}
	
	@RequestMapping(value = "/Login2", method = { RequestMethod.GET })
	public String Login2(HttpServletRequest request, HttpServletResponse response, Map<String, Object> stack)
			throws IOException {
		log.info("前台登录");
		return "front/login/Login2";
	}
	
	@RequestMapping(value = "/FindPwd", method = { RequestMethod.GET })
	public String FindPwd(HttpServletRequest request, HttpServletResponse response, Map<String, Object> stack)
			throws IOException {
		log.info("找回密码");
		return "front/login/FindPwd";
	}
	/**
	 * 前台用户登录校验动作
	 * @param request
	 * @param model
	 * @param member
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value="front/index/loginvalid",method = RequestMethod.POST)
	public AjaxJson frontLoginValid(HttpServletRequest request,Model model ,MemberEntity member){
		AjaxJson j = new AjaxJson();
		String session_verify_number = WebFrontSession.getVerifyNumber(request);
		String member_verify_number = request.getParameter("verify_number");
		Map<String, Object> flag = new HashMap<>();
		if(member_verify_number.equals(session_verify_number)){
			
			member =  commonService.findmemberByValid(member);
			if(member!=null && !"".equals(member.getMemNum())){
				WebFrontSession.putFrontMember(request, member);
				msg = "校验通过,2秒后跳转首页.";
				j.setSuccess(true);
				
			}else{
				msg =  "用户名或者密码输入不正确";
				flag.put("flag", 2);
				j.setAttributes(flag);
				j.setSuccess(false);
			}
			
			
		}else{
			msg = "校验码输入不正确";
			flag.put("flag", 1);
			j.setAttributes(flag);
			j.setSuccess(false);
			
		}
		
		j.setMsg(msg);
		
		return j;
	}
	
	
	/**
	 * 前台 用户 退出登录  注销操作
	 * @param request
	 * @return
	 */
	@RequestMapping(value="front/logout.html",method = RequestMethod.GET)
	public String adminLogout(HttpServletRequest request){
		
		WebFrontSession.removeMemberSession(request);
		//清空全局参数配置SESSION值
		request.getSession().removeAttribute("paramSession");
		
		return "redirect:/";
	}
}
