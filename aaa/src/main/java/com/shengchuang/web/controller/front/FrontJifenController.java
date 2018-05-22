package com.shengchuang.web.controller.front;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
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
import com.shengchuang.entity.BonusRepoEntity;
import com.shengchuang.entity.CurrencyInfoEntity;
import com.shengchuang.entity.InoutRepoEntity;
import com.shengchuang.entity.JFExchangeLogEntity;
import com.shengchuang.entity.MemberEntity;
import com.shengchuang.entity.ParamConfEntity;
import com.shengchuang.service.CurrencyInfoService;
import com.shengchuang.service.InOutRepoService;
import com.shengchuang.service.JifenService;
import com.shengchuang.service.MemberService;
import com.shengchuang.service.SystemParamService;
import com.shengchuang.web.util.WebFrontSession;   
 
/**
 * 前台对于积分的各种操作
 */
@Controller
@RequestMapping(value = "front/jifen")
public class FrontJifenController{
	
	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	@Resource(name="jifenService")
	private JifenService commonService;
	@Autowired
	private CurrencyInfoService currencyInfoService;
	@Autowired
	private MemberService memberService;
	@Autowired
	private InOutRepoService inOutRepoService;
	@Autowired
	private SystemParamService systemParamService;
	
	/**
	 * 会员查看互转记录，既有可能是自己转给别人的记录，也有可能是别人转给自己的记录
	 * 参数：无
	 * 返回类型：List<JFExchangeLogEntity> 
	 */
	@ResponseBody
	@RequestMapping("/findHzjl")
	public List<JFExchangeLogEntity> findHzjl(HttpServletRequest httpServletRequest,Model model) {
		
		int curId = WebFrontSession.getFrontMember(httpServletRequest).getId();
		String curMemNum = WebFrontSession.getFrontMember(httpServletRequest).getMemNum();
		Date d = new Date();
		
		List<JFExchangeLogEntity> list = commonService.findJFHZById_MemNum(curId, curMemNum);
		for(JFExchangeLogEntity j : list){
			if(j.getCreateTime()!=null){				
				d = j.getCreateTime();
				j.setShowCreateTime(sdf.format(d));
			}
		}
		return list;
	}
	
	/**
	 * 会员查看转换记录，即自己的币种之间的转换
	 * 参数：无
	 * 返回类型：List<JFExchangeLogEntity> 
	 */
	@ResponseBody
	@RequestMapping("/findZhjl")
	public List<JFExchangeLogEntity> findZhjl(HttpServletRequest httpServletRequest,Model model) {
		
		int curId = WebFrontSession.getFrontMember(httpServletRequest).getId();
		Date d = new Date();
		
		List<JFExchangeLogEntity> list = commonService.findZHJLById(curId);
		for(JFExchangeLogEntity j : list){
			if(j.getCreateTime() !=null){				
				d = j.getCreateTime();
				j.setShowCreateTime(sdf.format(d));
			}
		}
		return list;
	}
	
	/**
	 * 玩家兑换时
	 * 交易密码错误，增加失败，返回-2；
	 * 余额不够，增加失败，返回-3；
	 * 兑换数量不符合基础配置表里的规定，如太低、太高、倍数不符-4；
	 * 额度低于最低配置：-6 额度高于最高配置-7 额度不是倍数-8
	 * 兑换成功，返回1
	 */
	@ResponseBody
	@RequestMapping("/dhJifen")
	public AjaxJson dhJifen(HttpServletRequest httpServletRequest, JFExchangeLogEntity jfe, String tradePwd) {
		
		AjaxJson j = new AjaxJson();
		Map<String, Object> map = new HashMap<>();
		
		MemberEntity mber = WebFrontSession.getFrontMember(httpServletRequest);
		int zhhMemId = mber.getId();
		String zhhMemNum = mber.getMemNum();
		jfe.setZhhMemId(zhhMemId);
		jfe.setCreateTime(new Date());
		
		if(memberService.findForTrade(zhhMemId, tradePwd)!=null){
			if(checkYuE(zhhMemNum, jfe.getZhhFromType(), jfe.getMoney())){
				boolean isCheckDHRules= checkDHRules(jfe.getZhhFromType(), jfe.getZhhToType(), jfe.getMoney());
				if(isCheckDHRules){
					//通过了所有校验，开始兑换：①兑换源类型余额减少,收支表增加记录   ②兑换目标类型余额增加,收支表增加记录
					reduceDhFromMoney(jfe);
					addDhToMoney(jfe);
					commonService.addCommon(jfe);
					map = packMap(zhhMemId);
				}else{
					//return -4;	//互转的数量不符合基础配置表里的规定，如太低、太高、倍数不符。
					map.put("result_type",errorCode);
				}
			}else{
				//return -3; 		//余额不够
				map.put("result_type", -3);
			}
		}else{
			//return -2;	//交易密码错误
			map.put("result_type", -2);
		}
		
		j.setAttributes(map);
		return j;
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
	
	/**
	 * 会员兑换时，目标类型余额加钱，并且在收支表增加记录
	 */
	public void addDhToMoney(JFExchangeLogEntity j){
		
		int zhhMemId = j.getZhhMemId();
		String zhhMemNum = memberService.findCommonById(zhhMemId).getMemNum();
		BigDecimal moneyLeft;
		BigDecimal newMoneyLeft;
		
		//***************************start*****************************
		BonusRepoEntity bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(zhhMemNum,1);
		if(bonusRepo==null){
			//新增一条新的记录进去
			inOutRepoService.insertBonusRepo(zhhMemNum,1);
			//再查询一遍  查询出来 
			bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(zhhMemNum,1);
		}
		//****************************end****************************
		
		//目标类型为激活积分情况
		if(j.getZhhToType()==6){	
			moneyLeft = currencyInfoService.findByMemId(zhhMemId).getActivPenn();
			currencyInfoService.addYuE("activPenn", j.getMoney(), zhhMemId);
			newMoneyLeft = currencyInfoService.findByMemId(zhhMemId).getActivPenn();
			inOutRepoService.add(zhhMemNum, j.getZhhToType(), j.getMoney(), moneyLeft, newMoneyLeft, "转换转入", new Date(),bonusRepo.getId());
			
		//目标类型为种子积分情况
		}else if(j.getZhhToType()==5){	
			moneyLeft = currencyInfoService.findByMemId(zhhMemId).getSeedsPenn();
			currencyInfoService.addYuE("seedsPenn", j.getMoney(), zhhMemId);
			newMoneyLeft = currencyInfoService.findByMemId(zhhMemId).getSeedsPenn();
			inOutRepoService.add(zhhMemNum, j.getZhhToType(), j.getMoney(), moneyLeft, newMoneyLeft, "转换转入", new Date(),bonusRepo.getId());
			
		//目标类型为管家月奉情况
		}else if(j.getZhhToType()==4){	
			moneyLeft = currencyInfoService.findByMemId(zhhMemId).getManaMoney();
			currencyInfoService.addYuE("manaMoney", j.getMoney(), zhhMemId);
			newMoneyLeft = currencyInfoService.findByMemId(zhhMemId).getManaMoney();
			inOutRepoService.add(zhhMemNum, j.getZhhToType(), j.getMoney(), moneyLeft, newMoneyLeft, "转换转入", new Date(),bonusRepo.getId());
			
		//目标类型为神童日奉情况
		}else if(j.getZhhToType()==3){	
			moneyLeft = currencyInfoService.findByMemId(zhhMemId).getKidMoney();
			currencyInfoService.addYuE("kidMoney", j.getMoney(), zhhMemId);
			newMoneyLeft = currencyInfoService.findByMemId(zhhMemId).getKidMoney();
			inOutRepoService.add(zhhMemNum, j.getZhhToType(), j.getMoney(), moneyLeft, newMoneyLeft, "转换转入", new Date(),bonusRepo.getId());
		}
	}
	
	/**
	 *  会员兑换时，源类型余额减钱，并且在收支表增加记录
	 */
	public void reduceDhFromMoney(JFExchangeLogEntity j){
		
		int zhhMemId = j.getZhhMemId();
		String zhhMemNum = memberService.findCommonById(zhhMemId).getMemNum();
		BigDecimal moneyLeft;
		BigDecimal newMoneyLeft;
		
		//***************************start*****************************
				BonusRepoEntity bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(zhhMemNum,1);
				if(bonusRepo==null){
					//新增一条新的记录进去
					inOutRepoService.insertBonusRepo(zhhMemNum,1);
					//再查询一遍  查询出来 
					bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(zhhMemNum,1);
				}
				//****************************end****************************
		
		//源类型种子积分情况
		if(j.getZhhFromType()==5){	
			//源类型余额减少  收支记录表增加记录
			moneyLeft = currencyInfoService.findByMemId(zhhMemId).getSeedsPenn();
			currencyInfoService.reduceYuE("seedsPenn", j.getMoney(), zhhMemId);
			newMoneyLeft = currencyInfoService.findByMemId(zhhMemId).getSeedsPenn();
			inOutRepoService.add(zhhMemNum, j.getZhhFromType(), j.getMoney().negate(), moneyLeft, newMoneyLeft, "转换转出", new Date(),bonusRepo.getId());
			
		//源类型动态钱包情况
		}else if(j.getZhhFromType()==0){	
			//源类型余额减少  收支记录表增加记录
			moneyLeft = currencyInfoService.findByMemId(zhhMemId).getDynWallet();
			currencyInfoService.reduceYuE("dynWallet", j.getMoney(), zhhMemId);
			newMoneyLeft = currencyInfoService.findByMemId(zhhMemId).getDynWallet();
			inOutRepoService.add(zhhMemNum, j.getZhhFromType(), j.getMoney().negate(), moneyLeft, newMoneyLeft, "转换转出", new Date(),bonusRepo.getId());
			
		//源类型静态解冻钱包(收益钱包)情况
		}else if(j.getZhhFromType()==2){
			//源类型余额减少  收支记录表增加记录
			moneyLeft = currencyInfoService.findByMemId(zhhMemId).getStatJDWallet();
			currencyInfoService.reduceYuE("statJDWallet", j.getMoney(), zhhMemId);
			newMoneyLeft = currencyInfoService.findByMemId(zhhMemId).getStatJDWallet();
			inOutRepoService.add(zhhMemNum, j.getZhhFromType(), j.getMoney().negate(), moneyLeft, newMoneyLeft, "转换转出", new Date(),bonusRepo.getId());
		}
	}
	
	/**
	 * 玩家互转
	 * 当互转且对方会员编号不存在时，增加失败并返回-1；
	 * 交易密码错误，增加失败，返回-2；
	 * 余额不够，增加失败，返回-3；
	 * 互转的数量不符合基础配置表里的规定，如太低、太高、倍数不符-4；
	 * 额度高于配置：-6 额度低于配置-7 额度不是倍数-8 
	 * 接收方是自己，自己不能转自己-5
	 * 增加成功，返回1
	 */
	@ResponseBody
	@RequestMapping("/hzJifen")
	public AjaxJson hzJifen(HttpServletRequest httpServletRequest, JFExchangeLogEntity jfe, String tradePwd) {
		
		AjaxJson j = new AjaxJson();
		Map<String, Object> map = new HashMap<>();
		
		MemberEntity mber = WebFrontSession.getFrontMember(httpServletRequest);
		int sendMemId = mber.getId();
		String sendMemNum = mber.getMemNum();
		jfe.setSendMemId(sendMemId);
		jfe.setSendMemNum(sendMemNum);
		jfe.setCreateTime(new Date());
		String receMemNum = jfe.getReceMemNum();
		MemberEntity receiver = memberService.selectMemEntiBymemNum(receMemNum);
		
		if(receiver!=null){	
			if(memberService.findForTrade(sendMemId, tradePwd)!=null){
				if(checkYuE(sendMemNum, jfe.getHzhType(), jfe.getMoney())){
					if(checkHZRules(jfe.getHzhType(), jfe.getMoney())){
						if(sendMemId != receiver.getId()){							
							//通过了所有校验，开始转钱：①发送方余额减少,收支表增加记录   ②接收方余额增加,收支表增加记录
							reduceSenderMoney(jfe);
							addReceiverMoney(jfe);
							commonService.addCommon(jfe);
							
							//封装map，返回给前台，实时展示余额
							map = packMap(sendMemId);
						}else{
//							return -5;	//接收方是自己，自己不能转自己
							map.put("result_type", -5);
						}
					}else{
//						return -4;	//互转的数量不符合基础配置表里的规定，如太低、太高、倍数不符。
						map.put("result_type", errorCode);
					}
				}else{
//					return -3; 		//余额不够
					map.put("result_type", -3);
				}
			}else{
//				return -2;	//交易密码错误
				map.put("result_type", -2);
			}
		}else{
			map.put("result_type", -1);
//			return -1;	//对方会员编号不存在
		}
		
		j.setAttributes(map);
		return j;
	}
	
	/**
	 * 会员互转时，接收方余额加钱，并且在收支表增加记录
	 */
	public void addReceiverMoney(JFExchangeLogEntity j){
		
		int receMemId = memberService.selectMemEntiBymemNum(j.getReceMemNum()).getId();
		BigDecimal moneyLeft;
		BigDecimal newMoneyLeft;
		
		//***************************start*****************************
		BonusRepoEntity bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(j.getReceMemNum(),1);
		if(bonusRepo==null){
			//新增一条新的记录进去
			inOutRepoService.insertBonusRepo(j.getReceMemNum(),1);
			//再查询一遍  查询出来 
			bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(j.getReceMemNum(),1);
		}
		//****************************end****************************
		
		//互转种子积分情况
		if(j.getHzhType()==5){	
			moneyLeft = currencyInfoService.findByMemId(receMemId).getSeedsPenn();
			//接收方余额减少
			currencyInfoService.addYuE("seedsPenn", j.getMoney(), receMemId);
			newMoneyLeft = currencyInfoService.findByMemId(receMemId).getSeedsPenn();
			//收支记录表增加记录
			inOutRepoService.add(j.getReceMemNum(), j.getHzhType(), j.getMoney(), moneyLeft, newMoneyLeft, j.getSendMemNum()+"转入", new Date(),bonusRepo.getId());
			
		//互转激活积分情况
		}else if(j.getHzhType()==6){	
			moneyLeft = currencyInfoService.findByMemId(receMemId).getActivPenn();
			//接收方余额减少
			currencyInfoService.addYuE("activPenn", j.getMoney(), receMemId);
			newMoneyLeft = currencyInfoService.findByMemId(receMemId).getActivPenn();
			//收支记录表增加记录
			inOutRepoService.add(j.getReceMemNum(), j.getHzhType(), j.getMoney(), moneyLeft, newMoneyLeft, j.getSendMemNum()+"转入", new Date(),bonusRepo.getId());
		}
	}
	
	/**
	 *  会员互转时，发送方余额减钱，并且在收支表增加记录
	 */
	public void reduceSenderMoney(JFExchangeLogEntity j){
		
		int sendMemId = j.getSendMemId();
		BigDecimal moneyLeft;
		BigDecimal newMoneyLeft = null;
		
		//***************************start*****************************
		BonusRepoEntity bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(j.getReceMemNum(),1);
		if(bonusRepo==null){
			//新增一条新的记录进去
			inOutRepoService.insertBonusRepo(j.getReceMemNum(),1);
			//再查询一遍  查询出来 
			bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(j.getReceMemNum(),1);
		}
		//****************************end****************************
		
		//互转种子积分情况
		if(j.getHzhType()==5){	
			moneyLeft = currencyInfoService.findByMemId(sendMemId).getSeedsPenn();
			//发送方余额减少
			currencyInfoService.reduceYuE("seedsPenn", j.getMoney(), sendMemId);
			newMoneyLeft = currencyInfoService.findByMemId(sendMemId).getSeedsPenn();
			//收支记录表增加记录
			inOutRepoService.add(j.getSendMemNum(), j.getHzhType(), j.getMoney().negate(), moneyLeft, newMoneyLeft, j.getReceMemNum()+"转出", new Date(),bonusRepo.getId());
			
		//互转激活积分情况
		}else if(j.getHzhType()==6){	
			moneyLeft = currencyInfoService.findByMemId(sendMemId).getActivPenn();
			//发送方余额减少
			currencyInfoService.reduceYuE("activPenn", j.getMoney(), sendMemId);
			newMoneyLeft = currencyInfoService.findByMemId(sendMemId).getActivPenn();
			//收支记录表增加记录
			inOutRepoService.add(j.getSendMemNum(), j.getHzhType(), j.getMoney().negate(), moneyLeft, newMoneyLeft, j.getReceMemNum()+"转出", new Date(),bonusRepo.getId());
		}
	}
	
	/**
	 * 会员互转时，检查转的金额是否符合基础配置表里的规定，最小、最大、倍数。
	 * 额度低于最低配置：-6 额度高于最高配置-7 额度不是倍数-8 
	 */
	public boolean checkHZRules(Integer moneyTypeInt, BigDecimal money){
		ParamConfEntity pce = systemParamService.findParamById(1);
		String[] rules;
		BigDecimal begin;
		BigDecimal top;
		BigDecimal beishu;
		if(moneyTypeInt==5){			//互转的为种子积分
			rules = pce.getZzjf2Zzjf().split(",");
			begin = new BigDecimal(rules[0]);
			top = new BigDecimal(rules[1]);
			beishu = new BigDecimal(rules[2]);
			if(money.compareTo(begin) < 0){
				errorCode = -6;
				return false;
			}else if(money.compareTo(top) > 0){
				errorCode = -7;
				return false;
			}else if(!(money.divideAndRemainder(beishu)[1].intValue() == 0)){	//取余倍数为0
				errorCode = -8;
				return false;
			}
			return true;
		}else if(moneyTypeInt==6){		//互转的激活积分
			rules = pce.getJhjf2Jhjf().split(",");
			begin = new BigDecimal(rules[0]);
			top = new BigDecimal(rules[1]);
			beishu = new BigDecimal(rules[2]);
			if(money.compareTo(begin) < 0){
				errorCode = -6;
				return false;
			}else if(money.compareTo(top) > 0){
				errorCode = -7;
				return false;
			}else if(!(money.divideAndRemainder(beishu)[1].intValue() == 0)){	//取余倍数为0
				errorCode = -8;
				return false;
			}
			return true;
		}
		return true;
	}
	
	/**
	 * 会员自己兑换时，检查兑换源金额是否符合基础配置表里的规定，最小、最大、倍数。
	 * 与互转相比多了一个目标类型，因此种类更多、更复杂
	 * 额度高于配置：-6 额度低于配置-7 额度不是倍数-8 
	 */
	public boolean checkDHRules(Integer zhhFromType, Integer zhhToType, BigDecimal money){
		
		ParamConfEntity pce = systemParamService.findParamById(1);
		if(zhhFromType==5){			//源类型为种子积分
			if(zhhToType==6){			//目标类型为激活积分				
				return checkDHRules2(pce.getZzjf2Jhjf(), money);
			}else if(zhhToType==4){		//目标类型为管家月奉			
				return checkDHRules2(pce.getZzjf2GjMoney(), money);
			}else if(zhhToType==3){		//目标类型为神童日俸				
				return checkDHRules2(pce.getZzjf2ShtMoney(), money);
			}
		}else if(zhhFromType==0){	//源类型为动态钱包
			if(zhhToType==6){			//目标类型为激活积分				
				return checkDHRules2(pce.getDyWal2Jhjf(), money);
			}else if(zhhToType==5){		//目标类型为种子积分		
				return checkDHRules2(pce.getDyWal2Zzjf(), money);
			}else if(zhhToType==4){		//目标类型为管家月奉			
				return checkDHRules2(pce.getDyWal2GjMoney(), money);
			}else if(zhhToType==3){		//目标类型为神童日俸				
				return checkDHRules2(pce.getDyWal2ShtMoney(), money);
			}
		}else if(zhhFromType==2){	//源类型为收益钱包
			if(zhhToType==6){			//目标类型为激活积分				
				return checkDHRules2(pce.getJtWal2Jhjf(), money);
			}else if(zhhToType==5){		//目标类型为种子积分			
				return checkDHRules2(pce.getJtWal2Zzjf(), money);
			}else if(zhhToType==4){		//目标类型为管家月奉			
				return checkDHRules2(pce.getJtWal2GjMoney(), money);
			}else if(zhhToType==3){		//目标类型为神童日俸				
				return checkDHRules2(pce.getJtWal2ShtMoney(), money);
			}
		}
		return true;
	}
	
	/**
	 * 协助checkDHRules()方法的,只能在它里面使用
	 * @param rule 为"200,2000,100"字符串
	 * 额度高于配置：-6 额度低于配置-7 额度不是倍数-8 
	 */
	private int 				errorCode;//错误码
	public boolean checkDHRules2(String rule, BigDecimal money){
		
		String[] rules;
		BigDecimal begin;
		BigDecimal top;
		BigDecimal beishu;
		rules = rule.split(",");
		begin = new BigDecimal(rules[0]);
		top = new BigDecimal(rules[1]);
		beishu = new BigDecimal(rules[2]);
		if(money.compareTo(begin)<0){//低于最低额度 转换失败
			errorCode = -6;
			return false;
		}else if(money.compareTo(top)>0){//高于最高额度 转换失败
			errorCode = -7;
			return false;
		}else if(!(money.divideAndRemainder(beishu)[1].intValue() == 0)){	//取余倍数为0
			errorCode = -8;
			return false;
		}
		return true;
	}
	
	/**
	 * 检查余额够不够,够返回true，不够返回false
	 */
	public boolean checkYuE(String memNum, Integer moneyTypeInt, BigDecimal money){
		
		//当前用户的各项余额
		CurrencyInfoEntity cie = currencyInfoService.findOneCurrenInfoBymemNum(memNum);
		BigDecimal moneyLeft;
		switch (moneyTypeInt) {
			case 5:		//种子积分
				moneyLeft = cie.getSeedsPenn();
				if(moneyLeft.compareTo(money)>=0){
					return true;
				}else{
					return false;
				}
			case 6:		//激活积分
				moneyLeft = cie.getActivPenn();
				if(moneyLeft.compareTo(money)>=0){
					return true;
				}else{
					return false;
				}
			case 0:		//动态钱包
				moneyLeft = cie.getActivPenn();
				if(moneyLeft.compareTo(money)>=0){
					return true;
				}else{
					return false;
				}
			case 2:		//收益（静态解冻）
				moneyLeft = cie.getStatJDWallet();
				if(moneyLeft.compareTo(money)>=0){
					return true;
				}else{
					return false;
				}
			default:
				return false;
		}
	}
	
	/**
	 * 玩家互转
	 * 当互转且对方会员编号不存在时，增加失败并返回-1；
	 * 交易密码错误，增加失败，返回-2；
	 * 余额不够，增加失败，返回-3；
	 * 特殊异常返回-4；
	 * 增加成功，返回1
	 */
	/*@ResponseBody
	@RequestMapping("/addJifen")
	public int addCommon(HttpServletRequest httpServletRequest, JFExchangeLogEntity c, String tradePwd) {
		
		//****为了简化逻辑复杂度，首先创建常量池****currencyInfoService memberService
		
		//当前用户id
		int curId = WebFrontSession.getFrontMember(httpServletRequest).getId();
		//当前用户的会员编号
		String curMemNum = WebFrontSession.getFrontMember(httpServletRequest).getMemNum();
		//int curId =1;
		//String curMemNum = "A00000";
		//当前用户的各项余额
		CurrencyInfoEntity cie = currencyInfoService.findOneCurrenInfoBymemNum(curMemNum);
		//当前用户的激活积分余额
		BigDecimal activPenn = cie.getActivPenn();
		//当前用户的动态钱包余额
		BigDecimal dynWallet = cie.getDynWallet();
		//当前用户的静态解冻 钱包余额
		BigDecimal statJDWallet = cie.getStatJDWallet();
		//当前用户的种子积分余额
		BigDecimal seedsPenn = cie.getSeedsPenn();
		//当前用户的真实交易密码
		String realTradePwd = WebFrontSession.getFrontMember(httpServletRequest).getTradePwd();
		//String realTradePwd = "123456";
		//转账类型,是否为互转
		Boolean isHZ;
		if(c.getMemNo()!=null){
			isHZ = true;
		}else{
			isHZ = false;
		}
		//会员互转情况下的目标会员id
		Integer targetMemId = null;
		String targetMemNum = null;
		BigDecimal targetSeedsPenn = null;
		BigDecimal targetActivPenn = null;
		//接下来判断会员互转时编号存不存在，不存在返回-1，之所以提前判断，是为了减少复杂度
		if(isHZ){
			Map map = memberService.findCommonByMemNum(c.getMemNo());
			if(map==null){
				return -1;
			}
//			if(map.size()==0)
//				return -1;
		}
		if(isHZ){
			targetMemId =  (Integer) memberService.findCommonByMemNum(c.getMemNo()).get("id");
			targetMemNum =  (String) memberService.findCommonByMemNum(c.getMemNo()).get("memNum");
			targetSeedsPenn = currencyInfoService.findOneCurrenInfoBymemNum(targetMemNum).getSeedsPenn();
			targetActivPenn = currencyInfoService.findOneCurrenInfoBymemNum(targetMemNum).getActivPenn();
		}
		
		//无论是会员互转，还是自己兑现的数量
		BigDecimal amount = new BigDecimal(0);
		if(isHZ){
			amount = c.getHzhCounts();
		}else{
			amount = c.getZhhCounts();
		}
		//现在的时间
		Date now = new Date();
		if(isHZ){
			c.setHzhTime(now);
		}else{
			c.setZhhTime(now);
		}
		//统一设置当前操作用户id
		c.setMemId(curId);

		//首先判断交易密码对不对，不对返回-2
		if(memberService.findForTrade(curId, tradePwd)==null)
			return -2;
		
		//接下来判断余额够不够转的，不够直接返回-3
		if(isHZ){						//***互转情况***
			if(c.getHzhType() == 0){	//互转类型为种子积分
				if(amount.compareTo(seedsPenn) == 1)
					return -3;	
			}else{						//互转类型为激活积分
				if(amount.compareTo(activPenn) == 1)
					return -3;
			}
		}else{							//***自己兑换情况***
			//因为钱是从源类型里拿出，因此检查源类型余额够不够，源类型有： 0种子积分 1动态钱包 2静态解冻钱包'
			if(c.getZhhFromType() == 0){		//兑换源类型为种子积分
				if(amount.compareTo(seedsPenn) == 1)
					return -3;	
			}else if(c.getZhhFromType() == 1){	//兑换源类型为动态钱包
				if(amount.compareTo(dynWallet) == 1)
					return -3;	
			}else if(c.getZhhFromType() == 2){	//兑换源类型为静态解冻钱包
				if(amount.compareTo(statJDWallet) == 1)
					return -3;	
			}
		}
		
		//能走到这一步说明交易密码正确、余额足够折腾、会员互转情况下对方账号也存在，那就开始真正的操作了
		//先减源余额，再加目标余额，最后增加记录
		CurrencyInfoEntity sourceCie = new CurrencyInfoEntity();
		CurrencyInfoEntity targetCie = new CurrencyInfoEntity();
		if(isHZ){						//***互转情况***
			if(c.getHzhType() == 0){	//互转类型为种子积分
				currencyInfoService.reduceYuE("seedsPenn", amount, curId);
				currencyInfoService.addYuE("seedsPenn", amount, targetMemId);
				//在收支表增加记录
				BigDecimal newSeedsPenn = currencyInfoService.findOneCurrenInfoBymemNum(curMemNum).getSeedsPenn();
				BigDecimal newTargetSeedsPenn = currencyInfoService.findOneCurrenInfoBymemNum(targetMemNum).getSeedsPenn();
				String desc = targetMemNum+"转出扣除";
				String desc2 = curMemNum+"转入获得";
				addInOutRepo(curMemNum,5,amount.negate(),seedsPenn,newSeedsPenn,desc,now);
				addInOutRepo(targetMemNum,5,amount,targetSeedsPenn,newTargetSeedsPenn,desc2,now);
				return commonService.addCommon(c);
			}else{						//互转类型为激活积分
				currencyInfoService.reduceYuE("activPenn", amount, curId);
				currencyInfoService.addYuE("activPenn", amount, targetMemId);
				//在收支表增加记录
				BigDecimal newActivPenn = currencyInfoService.findOneCurrenInfoBymemNum(curMemNum).getActivPenn();
				BigDecimal newTargetActivPenn = currencyInfoService.findOneCurrenInfoBymemNum(targetMemNum).getActivPenn();
				String desc = targetMemNum+"转出扣除";
				String desc2 = curMemNum+"转入获得";
				addInOutRepo(curMemNum,6,amount.negate(),activPenn,newActivPenn,desc,now);
				addInOutRepo(targetMemNum,6,amount,targetActivPenn,newTargetActivPenn,desc2,now);
				return commonService.addCommon(c);
			}
		}else{							//***自己兑换情况***
			//因为是兑换，前后的类型肯定不一致，因此减和加只能分别判断
			//减
			String desc = "转换扣除";
			String desc2 = "转换获得";
			if(c.getZhhFromType() == 0){		//兑换源类型为种子积分
				currencyInfoService.reduceYuE("seedsPenn", amount, curId);
				//在收支表增加记录
				BigDecimal newSeedsPenn = currencyInfoService.findOneCurrenInfoBymemNum(curMemNum).getSeedsPenn();
				addInOutRepo(curMemNum,5,amount.negate(),seedsPenn,newSeedsPenn,desc,now);
			}else if(c.getZhhFromType() == 1){	//兑换源类型为动态钱包
				currencyInfoService.reduceYuE("dynWallet", amount, curId);
				//在收支表增加记录
				BigDecimal newDynWallet = currencyInfoService.findOneCurrenInfoBymemNum(curMemNum).getDynWallet();
				addInOutRepo(curMemNum,0,amount.negate(),dynWallet,newDynWallet,desc,now);
			}else if(c.getZhhFromType() == 2){	//兑换源类型为静态解冻钱包
				currencyInfoService.reduceYuE("statJDWallet", amount, curId);	
				//在收支表增加记录
				BigDecimal newStatJDWallet = currencyInfoService.findOneCurrenInfoBymemNum(curMemNum).getStatDJWallet();
				addInOutRepo(curMemNum,2,amount.negate(),statJDWallet,newStatJDWallet,desc,now);
			}
			//加
			if(c.getZhhToType() == 0){		//兑换源类型为种子积分
				currencyInfoService.addYuE("seedsPenn", amount, curId);
				//在收支表增加记录
				BigDecimal newSeedsPenn = currencyInfoService.findOneCurrenInfoBymemNum(curMemNum).getSeedsPenn();
				addInOutRepo(curMemNum,5,amount,seedsPenn,newSeedsPenn,desc2,now);
				return commonService.addCommon(c);
			}else if(c.getZhhToType() == 1){	//兑换源类型为动态钱包
				currencyInfoService.addYuE("kidMoney", amount, curId);
				//在收支表增加记录
				BigDecimal newDynWallet = currencyInfoService.findOneCurrenInfoBymemNum(curMemNum).getSeedsPenn();
				addInOutRepo(curMemNum,0,amount,dynWallet,newDynWallet,desc2,now);
				return commonService.addCommon(c);
			}else if(c.getZhhToType() == 2){	//兑换源类型为静态解冻钱包
				currencyInfoService.addYuE("manaMoney", amount, curId);
				//在收支表增加记录
				BigDecimal newStatJDWallet = currencyInfoService.findOneCurrenInfoBymemNum(curMemNum).getSeedsPenn();
				addInOutRepo(curMemNum,1,amount,statJDWallet,newStatJDWallet,desc2,now);
				return commonService.addCommon(c);
			}
		}
		
		//能走到这一步的话，那就一定出现了特殊异常，非常奇怪，返回-4
		return -4;
	} 
	*/
	
	
	/**
	 * 在收支明细表里留下该条记录
	 */
	public int addInOutRepo(String memNum, Integer bonusType, BigDecimal changeSalar,
			BigDecimal origiSalar, BigDecimal currSalar, String desc, Date createTime) {
		
		InoutRepoEntity i = new InoutRepoEntity();
		i.setMemNum(memNum);
		i.setBonusType(bonusType);
		i.setChangeSalar(changeSalar);
		i.setOrigiSalar(origiSalar);
		i.setCurrSalar(currSalar);
		i.setInoutDesc(desc);
		i.setCreateTime(createTime);
		return inOutRepoService.add(i);
	}   
	
	/**
	 * 纯粹用于开发测试
	 */
	@ResponseBody
	@RequestMapping("/aaa")
	public int test1(HttpServletRequest httpServletRequest,JFExchangeLogEntity c) {
		
		return currencyInfoService.addYuE("dynWallet", new BigDecimal(20), 1);
	} 
	
	/**
	 * 改 
	 */
	@ResponseBody
	@RequestMapping("/updateJifen")
	public int updatePro(HttpServletRequest httpServletRequest,JFExchangeLogEntity c) {
		
		return commonService.updateCommon(c);
	} 
	  
	/**
	 * 删
	 */
	@ResponseBody
	@RequestMapping("/deleteJifen")
	public int deleteCommon(String id) {
		
		return commonService.deleteCommon(id);
	}     
    
}
