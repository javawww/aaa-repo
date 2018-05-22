package com.shengchuang.web.controller.finace;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.shengchuang.web.controller.BaseController;

/**
 * 财务管理
 * @author Administrator
 *
 */
@Controller
@RequestMapping(value = "admin/finace")
public class AdminFinaceController extends BaseController{

	private String msg;
	/**
	 * 奖金明细
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "bonusDetail",method = RequestMethod.GET)
	public String recommFigure(HttpServletRequest request,HttpServletResponse response,Model model){
		log.info("后台：奖金明细");
		
		return "admin/finace/bonusDetail";
	}
	
	/**
	 * 充值管理
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "rechargeMan",method = RequestMethod.GET)
	public String rechargeMan(HttpServletRequest request,HttpServletResponse response,Model model){
		log.info("后台：充值管理");
		
		return "admin/finace/rechargeMan";
	}
	
	/**
	 * 手动充值  针对全部币种都有增减的功能，输入正数为充值，输入负数为减少
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "rechargeByHand",method = RequestMethod.GET)
	public String rechargeByHand(HttpServletRequest request,HttpServletResponse response,Model model){
		
		return "admin/finace/rechargeByHand";
	}
	
	/**
	 * 奖金统计
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "bonusStatist",method = RequestMethod.GET)
	public String bonusStatist(HttpServletRequest request,HttpServletResponse response,Model model){
		log.info("后台：奖金统计");
		
		return "admin/finace/bonusStatist";
	}
	
	/**
	 * 投资统计
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "investStatist",method = RequestMethod.GET)
	public String investStatist(HttpServletRequest request,HttpServletResponse response,Model model){
		log.info("后台：投资统计");
		
		return "admin/finace/investStatist";
	}
	
	/**
	 * 账号收支
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "accountExpend",method = RequestMethod.GET)
	public String accountExpend(HttpServletRequest request,HttpServletResponse response,Model model){
		log.info("后台：账号收支");
		
		return "admin/finace/accountExpend";
	}
	
	/**
	 * 提现管理
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "incarnateMan",method = RequestMethod.GET)
	public String incarnateMan(HttpServletRequest request,HttpServletResponse response,Model model){
		log.info("后台：提现管理");
		
		return "admin/finace/incarnateMan";
	}
	
	/**
	 * 业绩统计
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "performance",method = RequestMethod.GET)
	public String performance(HttpServletRequest request,HttpServletResponse response,Model model){
		log.info("后台：业绩统计");
		
		return "admin/finace/performance";
	}
	
	
	
	
}
