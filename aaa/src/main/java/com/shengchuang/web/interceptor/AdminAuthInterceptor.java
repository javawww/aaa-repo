package com.shengchuang.web.interceptor;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import com.shengchuang.entity.MemberEntity;
import com.shengchuang.web.util.ResourceUtil;
import com.shengchuang.web.util.WebAdminSession;
import com.shengchuang.web.util.WebFrontSession;

public class AdminAuthInterceptor implements HandlerInterceptor{

	private static final Logger logger = Logger.getLogger(AdminAuthInterceptor.class);
	private Boolean flag;
	private List<String> excludeUrls;
	public List<String> getExcludeUrls() {
		return excludeUrls;
	}
	public void setExcludeUrls(List<String> excludeUrls) {
		this.excludeUrls = excludeUrls;
	}

	@Override
	public void afterCompletion(HttpServletRequest arg0,
			HttpServletResponse arg1, Object arg2, Exception arg3)
			throws Exception {
		
	}

	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response,
			Object object, ModelAndView modelAndView) throws Exception {
		
	}

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response,
			Object arg2) throws Exception {
		String requestPath = ResourceUtil.getRequestPath(request);
		//获取ADMIIN后台会员SESSION
		MemberEntity memberAdmin = WebAdminSession.getAdminMember(request);
		if(excludeUrls.contains(requestPath)){
			return true;
		}else if(memberAdmin == null || "".equals(memberAdmin.toString())){
			response.sendRedirect(request.getContextPath()+"/admin/login");
			return false;
		}else{
			return true;
		}
	}

	
	/**
	 * 转发
	 * 
	 * @param user
	 * @param req
	 * @return
	 */
	@RequestMapping(value = "/forword")
	public ModelAndView forword(HttpServletRequest request) {
		return new ModelAndView(new RedirectView("Login"));
	}

	@SuppressWarnings("unused")
	private void forward(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.getRequestDispatcher("Login2").forward(request, response);
	}
}