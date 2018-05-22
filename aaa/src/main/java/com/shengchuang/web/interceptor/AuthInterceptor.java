package com.shengchuang.web.interceptor;
import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;
import org.apache.log4j.Logger;
import com.shengchuang.web.util.ResourceUtil;
public class AuthInterceptor implements HandlerInterceptor{

	private static final Logger logger = Logger.getLogger(AuthInterceptor.class);
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
		logger.info(requestPath+"==============");
		
		String UserNum = (String) request.getSession().getAttribute("UserNum");
		logger.info("preHandle");
		
		if(excludeUrls.contains(requestPath)||requestPath.contains("resources/admin")||requestPath.contains("admin/")){
			logger.info("拦截失败");
			flag =  true;
		}else if(UserNum==null){
			logger.info("拦截成功");
			
			response.sendRedirect("Login2"); 
//			request.getRequestDispatcher("Login").forward(request, response);
			flag =  false;
		}else{
			
			flag =  true;
		}
		
		return flag;
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
