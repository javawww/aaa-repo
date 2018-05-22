package com.shengchuang.web.controller.front;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List; 
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.aspectj.lang.reflect.MemberSignature;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.shengchuang.entity.GJSTStatusEntity;
import com.shengchuang.entity.MemberEntity;
import com.shengchuang.service.GjstService;
import com.shengchuang.service.LoginCheckService;
import com.shengchuang.service.MemberService;
import com.shengchuang.web.controller.BaseController;
import com.shengchuang.web.util.WebFrontSession;   
 
/**
 * 前台对于登录的各种校验
 * front/lc, lc是login check的缩写
 */
@Controller
@RequestMapping(value = "front/lc")
public class FrontLoginCheckController extends BaseController{
	
	/*@Resource(name="treeService")
	private LoginCheckService commonService*/;
	@Autowired
	private MemberService memberService;
	@Autowired
	private GjstService gjstService;
	
	
	/**
	 * 用户登录校验，必填参数MemberEntity对象，对象要具有用户和密码两项值
	 * 返回结果分别对应结果如下：
	 * 1	登录成功
	 * -1	用户名或者密码错误
	 * -2	未激活
	 * -3	已冻结
	 * 0           验证码错误
	 */
	@ResponseBody
	@RequestMapping("/loginCheck")
	public int loginCheck(HttpServletRequest httpServletRequest,Model model,MemberEntity me) {
		
		String curMemNum = me.getMemNum();
		String curPassword = me.getLoginPwd();
		/*String curMemNum = "a00000";
		String curPassword = "123456";*/
		MemberEntity m = memberService.findForLogin(curMemNum, curPassword);
		//String verify_number = httpServletRequest.getParameter("verify_number");
		String verify_number_session = WebFrontSession.getVerifyNumber(httpServletRequest);
		
		//if(verify_number.equals(verify_number_session)){
			if(m != null){
				if(m.getJhState() == 1){
					if(m.getDjState() == 1){
					//登录成功
					WebFrontSession.putFrontMember(httpServletRequest, m);
					return 1;
					}else{
						return -3; 	//已冻结
					}
				}else{
					return -2;		//未激活
				}
			}else{
				return -1; 		//用户名或者密码错误
			}
		//}else{
			//return 0;
		//}
	}
	
	@ResponseBody
	@RequestMapping("/loginFromBackend")
	public int loginFromBackend(HttpServletRequest httpServletRequest,Model model,MemberEntity me) {
		
		String curMemNum = me.getMemNum();
		String curPassword = me.getLoginPwd();
		/*String curMemNum = "a00000";
		String curPassword = "123456";*/
		MemberEntity m = memberService.findForLogin(curMemNum, curPassword);
		
		if(m != null){
			if(m.getJhState() == 1){
				if(m.getDjState() == 1){
					//登录成功
					WebFrontSession.putFrontMember(httpServletRequest, m);
					return 1;
				}else{
					return -3; 	//已冻结
				}
			}else{
				return -2;		//未激活
			}
		}else{
			return -1; 		//用户名或者密码错误
		}
	}
	
	/**
	 * 找回密码，必填参数MemberEntity对象，对象要具有密保问题、密码答案、用户名、新密码
	 * 返回结果分别对应结果如下：
	 * 1	找回成功（修改密码成功，也就是可以用新密码登录了）。
	 * -1	用户名密或者密保答案错误
	 * -2	验证通过，不可抗力因素导致找回密码失败
	 * 
	 */
	@ResponseBody
	@RequestMapping("/getBackPwd")
	public int getBackPwd(HttpServletRequest httpServletRequest,Model model,MemberEntity me) {
		
		String curMemNum = me.getMemNum();
		int curProtectQuest = me.getProtectQuest();
		String curProtectAnswe = me.getProtectAnswe();
		
		MemberEntity m = memberService.getBackPwd(curMemNum, curProtectQuest, curProtectAnswe);
		if(m != null){
			me.setId(m.getId());
			if(memberService.updateCommon(me) == 1){
				return 1;	//修改密码成功
			}else{
				return -2;	//验证通过，不可抗力因素导致找回密码失败
			}
		}else{
			return -1; 		//用户名密或者密保答案错误
		}
	}
	
	  

	/**
	 * 纯测试用，无实意
	 */
	@ResponseBody
	@RequestMapping("/aaa")
	public GJSTStatusEntity test(HttpServletRequest httpServletRequest, Model model) {
		
		return gjstService.findCommonByMemId(1);
	}  
}
