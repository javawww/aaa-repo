package com.shengchuang.web.controller.index;

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
/**
 * 后台首页
 * @author Administrator
 *
 */
@Controller
@RequestMapping(value = "admin")
public class AdminIndexController extends BaseController {
	
	private String 					msg; //json提示信息
	
	@Resource(name="memberService")
	private MemberService 			commonService;//用户校验

	/**
	 * 主界面
	 * 备注：默认访问进入登录界面
	 * @param request
	 * @param response
	 * @param stack
	 * @param model
	 * @return
	 * @throws IOException
	 */
	@RequestMapping(value = "", method = { RequestMethod.GET })
	public String index(HttpServletRequest request, HttpServletResponse response, Map<String, Object> stack,Model model)
			throws IOException {
		MemberEntity member = WebAdminSession.getAdminMember(request);
		if(member!=null){//用户登录成功 跳转首页
			return  "admin/index/index";
		}else{ //用户登录失败  跳转登录页面
			return  "redirect:admin/login";
		}
	}
	/**
	 * 跳转登录页面
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "login")
	public String adminLogin(HttpServletRequest request,HttpServletResponse response,Model model){
		
		return "admin/login/login";
	}
	/**
	 * 主页
	 * @param request
	 * @param response
	 * @param stack
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "index/main", method = { RequestMethod.GET })
	public String mainHtml(HttpServletRequest request, HttpServletResponse response,Model model){
		return "admin/index/main";
	}
	
	/**
	 * 后台管理登录校验
	 * @param request
	 * @param response
	 * @param model
	 * @return 
	 */
	@ResponseBody
	@RequestMapping(value = "index/loginValid",method = RequestMethod.POST)
	public AjaxJson loginValid(HttpServletRequest request,Model model,MemberEntity member){
		AjaxJson j = new AjaxJson();
		String session_verify_number = WebAdminSession.getVerifyNumber(request);
		//String member_verify_number = request.getParameter("verify_member");
		Map<String, Object> flag = new HashMap<>();
		//if(member_verify_number.equals(session_verify_number)){
			member =  commonService.findmemberByValid(member);
			if(member!=null && !"".equals(member.getMemNum())){
				WebAdminSession.putAdminMember(request, member);
				msg = "校验通过,2秒后跳转首页.";
				j.setSuccess(true);
			}else{
				msg =  "用户名或者密码输入不正确";
				flag.put("flag", 2);
				j.setAttributes(flag);
				j.setSuccess(false);
			}
//		}else{
//			msg = "校验码输入不正确";
//			flag.put("flag", 1);
//			j.setAttributes(flag);
//			j.setSuccess(false);
//			
//		}
		j.setMsg(msg);
		return j;
	}
	/**
	 * 管理员注销操作
	 * @param request
	 * @return
	 */
	@RequestMapping(value="logout.html",method = RequestMethod.GET)
	public String adminLogout(HttpServletRequest request){
		WebAdminSession.removeMemberSession(request);
		return "redirect:/admin";
	}
}
