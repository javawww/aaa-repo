package com.shengchuang.web.util;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.shengchuang.core.Constants;
import com.shengchuang.entity.MemberEntity;

/**
 * 后台会员SESSION管理
 * @author Administrator
 *
 */
public class WebAdminSession {

	
	/**
	 * 放入管理端SESSION
	 * @param request
	 * @param member
	 */
	public static void putAdminMember(HttpServletRequest request,MemberEntity member){
		
		HttpSession session = request.getSession();
		
		session.setAttribute(Constants.SESSION_ADMIN_MEMBER, member);
		
	}
	/**
	 * 获取管理端SESSION
	 * @param request
	 * @return
	 */
	public static MemberEntity getAdminMember(HttpServletRequest request){
		
		HttpSession session = request.getSession();
		MemberEntity member = (MemberEntity)session.getAttribute(Constants.SESSION_ADMIN_MEMBER);
		
		return member;
	}
	/**
	 * 获取用户验证码
	 * @param request
	 * @return
	 * @throws Exception
	 */
	public static String getVerifyNumber(HttpServletRequest request){
		
		String verify_member = (String)request.getSession().getAttribute(Constants.VERIFY_NUMBER_NAME);
		
		return verify_member;
		
	}
	/**
	 * 注销操作  移除管理端SESSION
	 * @param request
	 */
	public static void removeMemberSession(HttpServletRequest request){
		HttpSession session = request.getSession(false);
		if(session != null){
			session.removeAttribute(Constants.SESSION_ADMIN_MEMBER);
		}
	}
	
}
