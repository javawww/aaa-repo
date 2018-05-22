package com.shengchuang.web.controller.front;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.math.BigDecimal;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.alibaba.fastjson.JSON;
import com.shengchuang.entity.GJSTStatusEntity;
import com.shengchuang.entity.MemberEntity;
import com.shengchuang.entity.ParamConfEntity;
import com.shengchuang.model.RecommTreeModel;
import com.shengchuang.model.State;
import com.shengchuang.service.GjstService;
import com.shengchuang.service.MemberService;
import com.shengchuang.service.SystemParamService;
import com.shengchuang.web.controller.BaseController;
import com.shengchuang.web.util.WebFrontSession;

/**
 * 所有的前端页面跳转控制器  全部整合在一起 便于维护
 * 前端业务控制器不在这里控制
 * @author Administrator
 *
 */
@Controller
@RequestMapping(value = "front")
public class FrontUrlsController extends BaseController{

	@Autowired
	GjstService gjstService;
	/**
	 * 财务明细  主页  【奖金统计明细】
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "caiwmx/caiwmxmain")
	public String caiwmxmain(HttpServletRequest request){
		
		return "front/caiwmx/caiwmxmain";
	}
	/**
	 * 财务明细  修改为 "奖金明细"  【奖金明细】
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "caiwmx/bonusdetail")
	public String bonusdetail(HttpServletRequest request,Model model){
		String id = request.getParameter("id");
		if(id !=null){
			model.addAttribute("id", id);
		}
		return "front/caiwmx/bonusdetail";
	}
	/**
	 * 财务明细  收入明细
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "caiwmx/caiwmx_srmx")
	public String caiwmx_srmx(HttpServletRequest request){
		
		return "front/caiwmx/caiwmx_srmx";
	}
	/**
	 * 财务明细  支出明细
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "caiwmx/caiwmx_zcmx")
	public String caiwmx_zcmx(HttpServletRequest request){
		
		return "front/caiwmx/caiwmx_zcmx";
	}
	
	/**
	 * 充值取现  主页
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "chongzqx/chongzqxmain")
	public String chongzqxmain(HttpServletRequest request){
		
		return "front/chongzqx/chongzqxmain";
	}
	
	
	@Resource(name="memberService")
	private MemberService 							memberService;
	@Resource(name = "systemParamService")
	private SystemParamService 						systemParamService;
	/**
	 * 充值取现   我要充值
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "chongzqx/chongzqx_cz")
	public String chongzqx_cz(HttpServletRequest request,Model model){
		Map map = memberService.findCommonbyid(1);//获取主账号信息
		if(map!=null){
			model.addAttribute("hostMemMap", map);
		}
		return "front/chongzqx/chongzqx_cz";
	}
	/**
	 * 充值取现  我要取现
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "chongzqx/chongzqx_qx")
	public String chongzqx_qx(HttpServletRequest request,Model model){
		MemberEntity member = WebFrontSession.getFrontMember(request);
		if(member==null){
			return "redirect:/";
		}else{
			Map map = memberService.findCommonbyid(member.getId());
			boolean boolweichat = (map.get("weichat")==null);//true 没有微信账号
			boolean boolalipay = (map.get("alipay")==null || map.get("alipayName")==null);//true 没有支付宝账号
			boolean boolweichatCode = (map.get("weichatCode")==null);//true 没有微信收款码
			boolean boolbankNum = (map.get("bankNum")==null && map.get("khhkName")==null && map.get("bankType")==null);//true 没有银行卡号
			
			if(boolweichat && boolalipay && boolweichatCode && boolbankNum){
				model.addAttribute("bool", "0");//提示用户 在个人中心 完善个人收款资料
			}else{
				model.addAttribute("bool", "1");
				model.addAttribute("memInfoMap", map);
			}
			//获取取现参数配置信息  示例：1,100,2000,100,0.02 动态钱包每天提现次数,提现最低,提现最高,提现倍数,手续费
			ParamConfEntity paramconf = systemParamService.findParamById(1);
			String dyWalDeposit = paramconf.getDyWalDeposit();
			String[] dyWalDeposits = dyWalDeposit.split(",");
			String jtWalDeposit = paramconf.getJtWalDeposit();
			String[] jtWalDeposits = jtWalDeposit.split(",");
			model.addAttribute("dyWalDeposits", dyWalDeposits);
			model.addAttribute("jtWalDeposits", jtWalDeposits);
			
			return "front/chongzqx/chongzqx_qx";
		}
	}
	/**
	 * 充值取现  充值记录
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "chongzqx/chongzqx_czjl")
	public String chongzqx_czjl(HttpServletRequest request){
		
		return "front/chongzqx/chongzqx_czjl";
	}
	/**
	 * 充值取现  取现记录
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "chongzqx/chongzqx_qxjl")
	public String chongzqx_qxjl(HttpServletRequest request){
		
		return "front/chongzqx/chongzqx_qxjl";
	}
	/**
	 * 交易中心 主页
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "jiaoyzx/jiaoyzxmain")
	public String jiaoyzxmain(HttpServletRequest request){
		
		return "front/jiaoyzx/jiaoyzxmain";
	}
	/**
	 * 交易中心 购买 弹出框
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "jiaoyzx/BuyWindow")
	public String BuyWindow(HttpServletRequest request,Model model){
		String id = request.getParameter("id");
		model.addAttribute("id", id);
		//读取全局配置参数 前台提示用户 示例 100,2000,100 最低买进额度,最高买进额度,买进倍数
		ParamConfEntity paramconf = systemParamService.findParamById(1);
		String epbuyTrade = paramconf.getEpBuyTrade();
		String[] epbuyTrades = epbuyTrade.split(",");
		model.addAttribute("epbuyTrades", epbuyTrades);
		return "front/jiaoyzx/BuyWindow";
	}
	/**
	 * 交易中心 我要卖出
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "jiaoyzx/jiaoyzx_wymc")
	public String jiaoyzx_wymc(HttpServletRequest request,Model model){
		//读取全局配置信息  渲染前台提示用户操作 示例 100,2000,100 最低挂卖额度,最高挂卖额度,挂卖倍数
		ParamConfEntity paramconf = systemParamService.findParamById(1);
		String epsellTrade = paramconf.getEpSellTrade();
		String[] epsellTrads = epsellTrade.split(",");
		model.addAttribute("epsellTrads", epsellTrads);
		return "front/jiaoyzx/jiaoyzx_wymc";
	}
	/**
	 * 交易中心 卖出记录
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "jiaoyzx/jiaoyzx_mcjl")
	public String jiaoyzx_mcjl(HttpServletRequest request){
		
		return "front/jiaoyzx/jiaoyzx_mcjl";
	}
	/**
	 * 交易中心 卖出记录2
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "jiaoyzx/jiaoyzx_mcjl2")
	public String jiaoyzx_mcjl2(HttpServletRequest request){
		
		return "front/jiaoyzx/jiaoyzx_mcjl2";
	}
	/**
	 * 交易中心 我要买进
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "jiaoyzx/jiaoyzx_wymj")
	public String jiaoyzx_wymj(HttpServletRequest request,Model model){
		
		return "front/jiaoyzx/jiaoyzx_wymj";
	}
	/**
	 * 交易中心 购买记录  点击会员编号  弹出此会员的收款信息
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "jiaoyzx/showMemInfo")
	public String showMemInfo(HttpServletRequest request,Model model){
		String memNum = request.getParameter("memNum");
		if(memNum!=null){
			Map map = memberService.findCommonByMemNum(memNum);
			model.addAttribute("memberMap",map);
		}
		return "front/jiaoyzx/showMemInfo";
	}
	/**
	 * 交易中心 买进记录
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "jiaoyzx/jiaoyzx_mjjl")
	public String jiaoyzx_mjjl(HttpServletRequest request){
		
		return "front/jiaoyzx/jiaoyzx_mjjl";
	}
	/**
	 * 交易中心 买进记录2
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "jiaoyzx/jiaoyzx_mjjl2")
	public String jiaoyzx_mjjl2(HttpServletRequest request){
		
		return "front/jiaoyzx/jiaoyzx_mjjl2";
	}
	/**
	 * 交易中心 确认订单列表  修改为  我的交易
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "jiaoyzx/jaoyzx_confirm")
	public String jaoyzx_confirm(HttpServletRequest request){
		
		return "front/jiaoyzx/jaoyzx_confirm";
	}
	/**
	 * 交易中心 我的交易 的  交易记录
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "jiaoyzx/jaoyzx_jylog")
	public String jaoyzx_jylog(HttpServletRequest request){
		
		return "front/jiaoyzx/jaoyzx_jylog";
	}
	/**
	 * 积分兑换主页
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "jifendh/jifendhmain")
	public String jifendhmain(HttpServletRequest request){
		
		return "front/jifendh/jifendhmain";
	}
	/**
	 * 积分兑换---玩家互转
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "jifendh/jfdh_wjhz")
	public String jfdh_wjhz(HttpServletRequest request,Model model){
		ParamConfEntity paramconf = systemParamService.findParamById(1);
		//会员间种子积分互转
		String zzjf2Zzjf = paramconf.getZzjf2Zzjf();
		String[] zzjf2Zzjfs = zzjf2Zzjf.split(",");
		model.addAttribute("zzjf2Zzjfs", zzjf2Zzjfs);
		//会员间激活积分互转
		String jhjf2Jhjf = paramconf.getJhjf2Jhjf();
		String[] jhjf2Jhjfs = jhjf2Jhjf.split(",");
		model.addAttribute("jhjf2Jhjfs", jhjf2Jhjfs);
		
		return "front/jifendh/jfdh_wjhz";
	}
	/**
	 * 积分兑换--积分转换
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "jifendh/jfdh_jfhz")
	public String jfdh_jfhz(HttpServletRequest request,Model model){
		ParamConfEntity paramconf = systemParamService.findParamById(1);
		//动态钱包转激活积分
		String dyWal2Jhjf = paramconf.getDyWal2Jhjf();
		String[] dyWal2Jhjfs = dyWal2Jhjf.split(",");
		model.addAttribute("dyWal2Jhjfs", dyWal2Jhjfs);
		//动态钱包转种子积分
		String dyWal2Zzjf = paramconf.getDyWal2Zzjf();
		String[] dyWal2Zzjfs = dyWal2Zzjf.split(",");
		model.addAttribute("dyWal2Zzjfs", dyWal2Zzjfs);
		//动态钱包转管家月俸
		String dyWal2GjMoney = paramconf.getDyWal2GjMoney();
		String[] dyWal2GjMoneys = dyWal2GjMoney.split(",");
		model.addAttribute("dyWal2GjMoneys", dyWal2GjMoneys);
		//动态钱包转神童日俸
		String dyWal2ShtMoney = paramconf.getDyWal2ShtMoney();
		String[] dyWal2ShtMoneys = dyWal2ShtMoney.split(",");
		model.addAttribute("dyWal2ShtMoneys", dyWal2ShtMoneys);
		//静态钱包(收益钱包)转激活积分
		String jtWal2Jhjf = paramconf.getJtWal2Jhjf();
		String[] jtWal2Jhjfs = jtWal2Jhjf.split(",");
		model.addAttribute("jtWal2Jhjfs", jtWal2Jhjfs);
		//静态钱包(收益钱包)转种子积分
		String jtWal2Zzjf = paramconf.getJtWal2Zzjf();
		String[] jtWal2Zzjfs = jtWal2Zzjf.split(",");
		model.addAttribute("jtWal2Zzjfs", jtWal2Zzjfs);
		//静态钱包(收益钱包)转管家月俸
		String jtWal2GjMoney = paramconf.getJtWal2GjMoney();
		String[] jtWal2GjMoneys = jtWal2GjMoney.split(",");
		model.addAttribute("jtWal2GjMoneys", jtWal2GjMoneys);
		//静态钱包(收益钱包)转神童日俸
		String jtWal2ShtMoney = paramconf.getJtWal2ShtMoney();
		String[] jtWal2ShtMoneys = jtWal2ShtMoney.split(",");
		model.addAttribute("jtWal2ShtMoneys", jtWal2ShtMoneys);
		//种子积分转激活积分
		String zzjf2Jhjf = paramconf.getZzjf2Jhjf();
		String[] zzjf2Jhjfs = zzjf2Jhjf.split(",");
		model.addAttribute("zzjf2Jhjfs", zzjf2Jhjfs);
		//种子积分转管家月俸
		String zzjf2GjMoney = paramconf.getZzjf2GjMoney();
		String[] zzjf2GjMoneys = zzjf2GjMoney.split(",");
		model.addAttribute("zzjf2GjMoneys", zzjf2GjMoneys);
		//种子积分转神童日俸
		String zzjf2ShtMoney = paramconf.getZzjf2ShtMoney();
		String[] zzjf2ShtMoneys = zzjf2ShtMoney.split(",");
		model.addAttribute("zzjf2ShtMoneys", zzjf2ShtMoneys);
		
		return "front/jifendh/jfdh_jfhz";
	}
	/**
	 * 积分兑换--互转记录
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "jifendh/jfdh_hzjl")
	public String jfdh_hzjl(HttpServletRequest request){
		
		return "front/jifendh/jfdh_hzjl";
	}
	/**
	 * 积分兑换--转换记录
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "jifendh/jfdh_zhjl")
	public String jfdh_zhjl(HttpServletRequest request){
		
		return "front/jifendh/jfdh_zhjl";
	}
	/**
	 * 收益记录  主页  收支明细
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "shouyjl/shouyjlmain")
	public String shouyjlmain(HttpServletRequest request){
		
		return "front/shouyjl/shouyjlmain";
	}
	/**
	 * 收支明细   每日明细
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "shouyjl/inout_detail")
	public String inout_detail(HttpServletRequest request,Model model){
		String id = request.getParameter("id");
		if(id != null){
			model.addAttribute("id", id);
		}
		return "front/shouyjl/inout_detail";
	}
	/**
	 * 收益记录  动态钱包
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "shouyjl/shouyjl_dtqb")
	public String shouyjl_dtqb(HttpServletRequest request){
		
		return "front/shouyjl/shouyjl_dtqb";
	}
	/**
	 * 收益记录  静态冻结钱包
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "shouyjl/shouyjl_jtdj")
	public String shouyjl_jtdj(HttpServletRequest request){
		
		return "front/shouyjl/shouyjl_jtdj";
	}
	/**
	 * 收益记录  静态解冻钱包
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "shouyjl/shouyjl_jtjd")
	public String shouyjl_jtjd(HttpServletRequest request){
		
		return "front/shouyjl/shouyjl_jtjd";
	}
	/**
	 * 我要推广主页
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "wytg/wytgmain")
	public String wytgmain(HttpServletRequest request){
		
		return "front/wytg/wytgmain";
	}
	/**
	 * 我要推广 ---注册会员
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "wytg/wytg_zchy")
	public String wytg_zchy(HttpServletRequest request){
		
		return "front/wytg/wytg_zchy";
	}
	/**
	 * 我要推广 ---链接推广
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "wytg/wytg_linktg")
	public String wytg_linktg(HttpServletRequest request){
		
		return "front/wytg/wytg_linktg";
	}
	/**
	 * 我要推广 ---已经激活会员
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "wytg/wytg_yjhhh")
	public String wytg_yjhhh(HttpServletRequest request){
		
		return "front/wytg/wytg_yjhhh";
	}
	/**
	 * 我要推广 ---未激活会员
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "wytg/wytg_wjhhh")
	public String wytg_wjhhh(HttpServletRequest request){
		
		return "front/wytg/wytg_wjhhh";
	}
	/**
	 * 我要推广 ---未激活会员 -- 激活窗口
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "wytg/wytg_jihuo")
	public String wytg_jihuo(HttpServletRequest request,Model model){
		String id  = request.getParameter("id");
		ParamConfEntity paramconf = systemParamService.findParamById(1);
		if(id!=null){
			model.addAttribute("id",id);
			model.addAttribute("jhIntegral",paramconf.getJhIntegral());
		}
		return "front/wytg/wytg_jihuo";
	}
	

	/**
	 * 我要偷取主页
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "wytq/wytqmain")
	public String wytqmain(HttpServletRequest request){
		
		return "front/wytq/wytqmain";
	}
	/**
	 * 我要偷取---我要偷
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "wytq/woyaotq_wyt")
	public String woyaotq_wyt(HttpServletRequest request){
		
		//新增管家神童初始化，拿到该会员在gjst表的值后，放入request
		int id = WebFrontSession.getFrontMember(request).getId();
		GJSTStatusEntity gjst = gjstService.findCommonByMemId(id);
		request.setAttribute("gjst", gjst);
		return "front/wytq/woyaotq_wyt";
	}
	/**
	 * 我要偷取---玩家庄园
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "wytq/woyaotq_wjzy")
	public String woyaotq_wjzy(HttpServletRequest request,Model model){
		String id = request.getParameter("id");
		if(id != null){
			model.addAttribute("id", id);
		}
		return "front/wytq/woyaotq_wjzy";
	}
	/**
	 * 我要偷取---偷取记录
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "wytq/woyaotq_jl")
	public String woyaotq_jl(HttpServletRequest request){
		
		return "front/wytq/woyaotq_jl";
	}
	/**
	 * 我要偷取---被偷记录
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "wytq/woyaotq_bt")
	public String woyaotq_bt(HttpServletRequest request){
		
		return "front/wytq/woyaotq_bt";
	}
	/**
	 * 新闻公告  主页
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "xinwgg/xinwggmain")
	public String xinwggmain(HttpServletRequest request){
		
		return "front/xinwgg/xinwggmain";
	}
	
	
	/**
	 * 新闻公告  详情页  infid
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "xinwgg/xinwgg_xq")
	public String xinwgg_xq(HttpServletRequest request,Model model){
		String infid = request.getParameter("infid");
		model.addAttribute("infid", infid);
		return "front/xinwgg/xinwgg_xq";
	}
	
	
	@Resource(name="memberService")
	private MemberService 					commonService;
	/**
	 * 个人中心  主页
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 * @throws IOException
	 */
	@RequestMapping(value = "member/UserCenter", method = { RequestMethod.GET })
	public String UserCenter(HttpServletRequest request, HttpServletResponse response, Model model)
			throws IOException {
		return "front/member/UserCenter";
	}
	
	/**
	 * 个人中心  个人资料
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 * @throws IOException
	 */
	@RequestMapping(value = "member/UserData", method = { RequestMethod.GET })
	public String UserData(HttpServletRequest request, HttpServletResponse response, Model model)
			throws IOException {
		MemberEntity member = WebFrontSession.getFrontMember(request);
		if(member!=null){
			Map map = commonService.findCommonbyid(member.getId());
			model.addAttribute("memberMap",map);
		}
		
		
		return "front/member/UserData";
	}
	/**
	 * 个人中心  修改登录密码
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 * @throws IOException
	 */
	@RequestMapping(value = "member/EditLoginPwd", method = { RequestMethod.GET })
	public String EditLoginPwd(HttpServletRequest request, HttpServletResponse response, Model model)
			throws IOException {
		return "front/member/EditLoginPwd";
	}
	
	/**
	 * 个人中心  修改交易密码
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 * @throws IOException
	 */
	@RequestMapping(value = "member/EditTradePwd", method = { RequestMethod.GET })
	public String EditTradePwd(HttpServletRequest request, HttpServletResponse response, Model model)
			throws IOException {
		return "front/member/EditTradePwd";
	}
	/**
	 * 个人中心  密保问题设置
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 * @throws IOException
	 */
	@RequestMapping(value = "member/UserProtection", method = { RequestMethod.GET })
	public String UserProtection(HttpServletRequest request, HttpServletResponse response, Model model)
			throws IOException {
		return "front/member/UserProtection";
	}
	
	/**
	 * 个人中心  我的团队
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 * @throws IOException
	 */
	@RequestMapping(value = "member/UserJuniors", method = { RequestMethod.GET })
	public String UserJuniors(HttpServletRequest request, HttpServletResponse response, Model model)
			throws IOException {
		MemberEntity membersession = WebFrontSession.getFrontMember(request);
		MemberEntity member = memberService.findCommonById(membersession.getId());
		RecommTreeModel recommTree = getTreeNodeDto(member);
		String treemodels = "[";
		treemodels += JSON.toJSONString(recommTree);
		treemodels += "]";
		model.addAttribute("treemodels", treemodels);
		return "front/member/UserJuniors";
	}
	/**
	 * 多叉树递归构建树结构
	 */
	public RecommTreeModel  getTreeNodeDto(MemberEntity member){
		List<MemberEntity> depList=commonService.selectAllMemsByjhState(1);
		RecommTreeModel rootNode=new RecommTreeModel();
		rootNode.setText(member.getMemNum()+"(直推"+member.getZtAmounts()+"人,团队"+member.getTeamAmounts()+"人)");
		rootNode.setMemNum(member.getMemNum());
		rootNode.setState(new State(true,true));
		if(depList.size()>0){
			rootNode=constructTree(rootNode, depList, 0);
		}
		return rootNode;
	}
	public static RecommTreeModel constructTree(RecommTreeModel rootNode, List<MemberEntity> orgList, int rootLevel){
		List<RecommTreeModel> childNodeList = new ArrayList<RecommTreeModel>();
		for(int i=0; i<orgList.size(); i++){
			MemberEntity org = orgList.get(i);
			if(org.getTjrNum()!=null && org.getTjrNum().equalsIgnoreCase(rootNode.getMemNum())){
				RecommTreeModel childNode = new RecommTreeModel();
				childNode.setMemNum(org.getMemNum());
				childNode.setText(org.getMemNum()+"(直推"+org.getZtAmounts()+"人,团队"+org.getTeamAmounts()+"人)");
				childNode.setState(new State(true,false));
				childNode.setParent(rootNode);
				childNode.setLevel(rootLevel+1);
				childNodeList.add(childNode);
			}
		}
		rootNode.setNodes(childNodeList);
		for(int j=0; j<childNodeList.size();j++){
			constructTree(childNodeList.get(j), orgList, ++rootLevel);
			--rootLevel;
		}		
		return rootNode;
	}	
	/**
	 * 邮件中心 - 主页
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 * @throws IOException
	 */
	@RequestMapping(value = "message/MsgCenter", method = { RequestMethod.GET })
	public String MsgCenter(HttpServletRequest request, HttpServletResponse response, Model model)
			throws IOException {
		return "front/message/MsgCenter";
	}
	/**
	 * 邮件中心  收件箱列表
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 * @throws IOException
	 */
	@RequestMapping(value = "message/MsgList", method = { RequestMethod.GET })
	public String MsgList(HttpServletRequest request, HttpServletResponse response, Model model)
			throws IOException {
		return "front/message/MsgList";
	}
	/**
	 * 邮件中心  发件箱列表
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 * @throws IOException
	 */
	@RequestMapping(value = "message/MsgList2", method = { RequestMethod.GET })
	public String MsgList2(HttpServletRequest request, HttpServletResponse response, Model model)
			throws IOException {
		return "front/message/MsgList2";
	}
	/**
	 * 邮件中心  发送邮件
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 * @throws IOException
	 */
	@RequestMapping(value = "message/MsgSend", method = { RequestMethod.GET })
	public String MsgSend(HttpServletRequest request, HttpServletResponse response, Model model)
			throws IOException {
		return "front/message/MsgSend";
	}
	/**
	 * "邮件中心 - 收件箱 - 邮件详情"
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 * @throws IOException
	 */
	@RequestMapping(value = "message/MsgDetail", method = { RequestMethod.GET })
	public String MsgDetail(HttpServletRequest request, HttpServletResponse response, Model model)
			throws IOException {
		String id = request.getParameter("id");
		model.addAttribute("id",id);
		return "front/message/MsgDetail";
	}
	/**
	 * 邮件中心 - 发件箱- 邮件详情
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 * @throws IOException
	 */
	@RequestMapping(value = "message/MsgDetail2", method = { RequestMethod.GET })
	public String MsgDetail2(HttpServletRequest request, HttpServletResponse response, Model model)
			throws IOException {
		return "front/message/MsgDetail2";
	}
	/**
	 * 种植金树
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 * @throws IOException
	 */
	@RequestMapping(value = "zhzjs/zhzjsCenter", method = { RequestMethod.GET })
	public String zhzjsCenter(HttpServletRequest request, HttpServletResponse response, Model model)
			throws IOException {
		//种植金树消耗种子积分，从基础配置表里获取的
		BigDecimal jszzIntegral = systemParamService.findParamById(1).getJszzIntegral();
		request.setAttribute("jszzIntegral", jszzIntegral);
		
		return "front/zhzjs/zhzjsCenter";
	}
	/**
	 * 种植银树
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 * @throws IOException
	 */
	@RequestMapping(value = "zhzys/zhzysCenter", method = { RequestMethod.GET })
	public String zhzysCenter(HttpServletRequest request, HttpServletResponse response, Model model)
			throws IOException {
		//种植金树消耗种子积分，从基础配置表里获取的
		BigDecimal yszzIntegral = systemParamService.findParamById(1).getYszzIntegral();
		request.setAttribute("yszzIntegral", yszzIntegral);
		
		return "front/zhzys/zhzysCenter";
	}
	/**
	 * 喂养管家
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 * @throws IOException
	 */
	@RequestMapping(value = "guanj/weiguanj", method = { RequestMethod.GET })
	public String weiguanj(HttpServletRequest request, HttpServletResponse response, Model model)
			throws IOException {
		
		//新增喂养管家要消耗的价格，从基础配置表里获取的
		BigDecimal ptgjMoney = systemParamService.findParamById(1).getPtgjMoney();
		request.setAttribute("ptgjMoney", ptgjMoney);
		
		return "front/guanj/weiguanj";
	}
	/**
	 * 喂养神童
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 * @throws IOException
	 */
	@RequestMapping(value = "guanj/weishent", method = { RequestMethod.GET })
	public String weishent(HttpServletRequest request, HttpServletResponse response, Model model)
			throws IOException {
		
		//新增喂养神童要消耗的价格，从基础配置表里获取的
		BigDecimal shtMoney = systemParamService.findParamById(1).getShtMoney();
		request.setAttribute("shtMoney", shtMoney);
				
		return "front/guanj/weishent";
	}
	/**
	 * 玩家推广链接  可以单独打开注册
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "wytg/tgLink")
	public String tgLink(HttpServletRequest request,Model model){
		String memNo = request.getParameter("memNo");
		if(memNo != null ){
			model.addAttribute("memNo", memNo);
		}
		return "front/wytg/tgLink";
	}
}
