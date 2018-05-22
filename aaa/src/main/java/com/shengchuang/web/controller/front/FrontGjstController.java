package com.shengchuang.web.controller.front;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List; 
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.shengchuang.core.AjaxJson;
import com.shengchuang.entity.BonusInfEntity;
import com.shengchuang.entity.BonusRepoEntity;
import com.shengchuang.entity.CurrencyInfoEntity;
import com.shengchuang.entity.GJSTStatusEntity;
import com.shengchuang.entity.InoutRepoEntity;
import com.shengchuang.entity.MemberEntity;
import com.shengchuang.entity.ParamConfEntity;
import com.shengchuang.service.BonusService;
import com.shengchuang.service.CurrencyInfoService;
import com.shengchuang.service.GjstService;
import com.shengchuang.service.InOutRepoService;
import com.shengchuang.service.MemberService;
import com.shengchuang.service.SystemParamService;
import com.shengchuang.web.util.WebFrontSession;   
 
/**
 * 前台对于收支明细的各种操作
 */
@Controller
@RequestMapping(value = "front/gjst")
public class FrontGjstController{
	
	@Autowired
	private GjstService gjstService;
	@Autowired
	private MemberService memberService;
	@Autowired
	private SystemParamService systemParamService;
	@Autowired
	private CurrencyInfoService currencyInfoService;
	@Autowired
	private InOutRepoService inOutRepoService;
	
	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	
	/**
	 * 当会员点击购买管家后，修改t_gjst_status表管家状态
	 * 必填参数：String tradePwd，交易密码
	 * 返回类型：int
	 * 1	购买管家成功
	 * 0	一切验证通过，但不可抗力因素导致更新t_gjst_status表失败，因此购买失败
	 * -1	交易密码错误，购买失败
	 * -2	余额不够，购买失败
	 */
	@ResponseBody
	@RequestMapping("/buyGj")
	public AjaxJson buyGj(HttpServletRequest httpServletRequest,Model model, String tradePwd) {
		
		int curId = WebFrontSession.getFrontMember(httpServletRequest).getId();
		String memNum=WebFrontSession.getFrontMember(httpServletRequest).getMemNum();
		
		AjaxJson aj = new AjaxJson();
		Map<String, Object> jmap = new HashMap<>();
		
		ParamConfEntity pce = systemParamService.findParamById(1);
		CurrencyInfoEntity cie = currencyInfoService.findOneCurrenInfoBymemNum(memNum);
		MemberEntity m = memberService.findForTrade(curId, tradePwd);
		
		//首先判断交易密码对不对
		if(m != null){
			//其次判断余额是否大于购买管家的价格
			if(cie.getManaMoney().compareTo(pce.getPtgjMoney())>=0){
				//验证通过，首先修改管家神童表的配置信息
				GJSTStatusEntity g = new GJSTStatusEntity();
				Date now = new Date();
				Calendar ca = Calendar.getInstance();
		        ca.add(Calendar.DATE, 30);// num为增加的天数，可以改变的
		        Date overtime = ca.getTime();
				
		        g.setMemId(curId);
		        g.setGjSalar(pce.getPtgjMoney());
				g.setGjBeginTime(now);
				g.setGjOverTime(overtime);
				g.setGjStatus(1);
				g.setStealCount(pce.getPtgjCount().intValue());
				
				if(gjstService.updateCommonByMemId(g) == 1){				
					//如果修改管家神童表成功，立马拿新的值放入request
					GJSTStatusEntity gjst = gjstService.findCommonByMemId(curId);
					httpServletRequest.setAttribute("gjst", gjst);
					WebFrontSession.putFrontMember(httpServletRequest, m);
					
					//会员的钱包应该减少相应的开销
					currencyInfoService.reduceYuE("manaMoney", pce.getPtgjMoney(), curId);
					BigDecimal origiSalar = currencyInfoService.findByMemId(curId).getManaMoney();
					BigDecimal currSalar = origiSalar.subtract(pce.getPtgjMoney());
					
					//***************************start*****************************
					BonusRepoEntity bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(memNum,1);
					if(bonusRepo==null){
						//新增一条新的记录进去
						inOutRepoService.insertBonusRepo(memNum,1);
						//再查询一遍  查询出来 
						bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(memNum,1);
					}
					//****************************end****************************
					
					inOutRepoService.add(memNum, 4, pce.getPtgjMoney().negate(), origiSalar, currSalar, "供奉管家", new Date(), bonusRepo.getId());
//					return 1;
					jmap = packMap(curId);
					aj.setAttributes(jmap);
					return aj;
				}else{				
					//如果修改管家神童表失败，则还拿原来的值放入request
					GJSTStatusEntity gjst = gjstService.findCommonByMemId(curId);
					httpServletRequest.setAttribute("gjst", gjst);
					WebFrontSession.putFrontMember(httpServletRequest, m);
//					return 0; 		
					jmap.put("result_type", 0);
					aj.setAttributes(jmap);
					return aj;
				}
			}else{
//				return -2;	//余额不够
				jmap.put("result_type", -2);
				aj.setAttributes(jmap);
				return aj;
			}
		}else{
//			return -1; 		//交易密码错误
			jmap.put("result_type", -1);
			aj.setAttributes(jmap);
			return aj;
		}
		
	}
	
	/**
	 * 当会员点击购买神童后，修改t_gjst_status表神童状态
	 * 必填参数：String tradePwd，交易密码
	 * 返回类型：int
	 * 1	购买管家成功
	 * 0	不可抗力因素导致更新t_gjst_status表失败，因此购买神童失败
	 * -1	交易密码错误  购买神童失败
	 * -2	余额不够  购买神童失败
	 */
	@ResponseBody
	@RequestMapping("/buySt")
	public AjaxJson buySt(HttpServletRequest httpServletRequest,Model model, String tradePwd) {
		
		int curId = WebFrontSession.getFrontMember(httpServletRequest).getId();
		String memNum=WebFrontSession.getFrontMember(httpServletRequest).getMemNum();
		
		AjaxJson aj = new AjaxJson();
		Map<String, Object> jmap = new HashMap<>();
		
		MemberEntity m = memberService.findForTrade(curId, tradePwd);
		CurrencyInfoEntity cie = currencyInfoService.findOneCurrenInfoBymemNum(memNum);
		ParamConfEntity pce = systemParamService.findParamById(1);
		
		if(m != null){
			//其次判断余额是否大于购买神童的价格
			if(cie.getKidMoney().compareTo(pce.getShtMoney())>=0){
				//验证通过，首先修改管家神童表的配置信息
				GJSTStatusEntity g = new GJSTStatusEntity();
				Date now = new Date();
				Calendar ca = Calendar.getInstance();
				ca.add(Calendar.DATE, 1);// num为增加的天数，可以改变的
				Date overtime = ca.getTime();
				
				g.setMemId(curId);
				g.setStSalar(pce.getShtMoney());
				g.setStBeginTime(now);
				g.setStOverTime(overtime);
				g.setStStatus(1);
				if(gjstService.updateCommonByMemId(g) == 1){				
					//如果修改管家神童表成功，立马拿新的值放入request
					GJSTStatusEntity gjst = gjstService.findCommonByMemId(curId);
					httpServletRequest.setAttribute("gjst", gjst);
					WebFrontSession.putFrontMember(httpServletRequest, m);
					
					//会员的钱包应该减少相应的开销
					currencyInfoService.reduceYuE("kidMoney", pce.getShtMoney(), curId);
					
					BigDecimal origiSalar = currencyInfoService.findByMemId(curId).getKidMoney();
					BigDecimal currSalar = origiSalar.subtract(pce.getShtMoney());
					
					//***************************start*****************************
					BonusRepoEntity bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(memNum,1);
					if(bonusRepo==null){
						//新增一条新的记录进去
						inOutRepoService.insertBonusRepo(memNum,1);
						//再查询一遍  查询出来 
						bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(memNum,1);
					}
					//****************************end****************************
					
					inOutRepoService.add(memNum, 3, pce.getShtMoney().negate(), origiSalar, currSalar, "供奉神童", new Date(), bonusRepo.getId());
					
//					return 1;
					jmap = packMap(curId);
					aj.setAttributes(jmap);
					return aj;
				}else{				
					//如果修改管家神童表失败，则还拿原来的值放入request
					GJSTStatusEntity gjst = gjstService.findCommonByMemId(curId);
					httpServletRequest.setAttribute("gjst", gjst);
					WebFrontSession.putFrontMember(httpServletRequest, m);
//					return 0; 
					jmap.put("result_type", 0);
					aj.setAttributes(jmap);
					return aj;
				}
			}else{
//				return -2;	//余额不够
				jmap.put("result_type", -2);
				aj.setAttributes(jmap);
				return aj;
			}
		}else{
//			return -1; 		//交易密码错误
			jmap.put("result_type", -1);
			aj.setAttributes(jmap);
			return aj;
		}
		
	}
	
	/**
	 * 封装map，map给AjaxJson，然后返回给前台，实时展示余额变化。
	 * @param MemId	要查看谁的余额，传谁的ID
	 */
	public Map<String, Object> packMap(Integer MemId){
		
		Map<String, Object> map = new HashMap<>();
		CurrencyInfoEntity currencyInfo = currencyInfoService.findByMemId(MemId);
		map.put("result_type", 1);
		map.put("currencyInfo", currencyInfo);
		return map;
	}
	
}
