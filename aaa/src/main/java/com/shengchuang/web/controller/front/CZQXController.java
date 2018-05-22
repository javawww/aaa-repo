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

import org.apache.ibatis.binding.BindingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.shengchuang.core.AjaxJson;
import com.shengchuang.entity.BonusRepoEntity;
import com.shengchuang.entity.CZQXLogEntity;
import com.shengchuang.entity.CurrencyInfoEntity;
import com.shengchuang.entity.MemberEntity;
import com.shengchuang.entity.ParamConfEntity;
import com.shengchuang.service.CZQXService;
import com.shengchuang.service.CurrencyInfoService;
import com.shengchuang.service.InOutRepoService;
import com.shengchuang.service.MemberService;
import com.shengchuang.service.SystemParamService;
import com.shengchuang.web.controller.BaseController;
import com.shengchuang.web.util.WebFrontSession;
/**
 * 充值取现 控制器  我要充值 我要取现 充值记录 取现记录
 * @author Administrator
 *
 */
@Controller
@RequestMapping(value = "front/czqx")
public class CZQXController extends BaseController{
	
	@Resource(name = "czqxService")
	private CZQXService 						czqxService;//注入业务实现接口
	@Resource(name = "systemParamService")
	private SystemParamService 					systemParamService;//全局配置参数
	@Resource(name = "currencyInfoService")
	private CurrencyInfoService 				currencyInfoService;//个人所有币种信息额度
	@Autowired
	private MemberService 						memberService;
	@Autowired
	private InOutRepoService					inOutRepoService;
	
	/**
	 * 我要充值 新增一条玩家充值记录
	 * @param request
	 * @param czqxLog
	 * @return
	 * //-10 提示用户今日取现次数已经超出,取现失败
	 * //-9提示用户 今日不可以取现   
	 * //-5提示用户 提现额度输入XXX的倍数
	 * //-6提示用户  提现额度不得小于最低提现额度
	 * //-7提示用户  提现额度不得大于最高提现额度
	 * 
	 */
	@ResponseBody
	@RequestMapping(value = "addCZOrQX")
	public AjaxJson addCZOrQX(HttpServletRequest request,CZQXLogEntity czqxLog,String tradePwd){
		
		AjaxJson aj = new AjaxJson();
		Map<String, Object> jmap = new HashMap<>();
		int flag = 0;
		try {
			//交易密码校验中
			MemberEntity member = WebFrontSession.getFrontMember(request);
			//交易密码通过 执行其他逻辑
			if(memberService.findForTrade(member.getId(), tradePwd)!=null){
				if(czqxLog.getOptType()==1){//我要充值
					czqxLog.setCzqxtatus(0);//充值状态 默认0 审核中
				}else if(czqxLog.getOptType()==2){//我要取现
					ParamConfEntity paramconf = systemParamService.findParamById(1);
					String tixCycle = paramconf.getTixCycle();
					//根据提现周期判定  如果今日是否可以取现???待完成
					//提现周期 1_1,2_1,3_1,4_0,5_1,6_1,7_0   m_1 礼拜m可以提现 m_0 礼拜m不可以提现
					Boolean isCanqx = false;
					Calendar cal = Calendar.getInstance();
					cal.setTime(new Date());
					int w = cal.get(Calendar.DAY_OF_WEEK) - 1;
					w = (w==0) ? 7 : w;
					w = w-1;
					String[] tixCycles= tixCycle.split(",");
					if(Integer.valueOf(tixCycles[w].split("_")[1]) == 1){
						isCanqx = true;
					}
					if(isCanqx){
						//取现类型  取现币种
						int qxType = czqxLog.getCzqxType();
						//动态钱包
						if(qxType==0){
							//动态钱包 提现参数配置 示例：1,100,2000,100,0.02 动态钱包每天提现次数,提现最低,提现最高,提现倍数,手续费
							String dyWalDeposit = paramconf.getDyWalDeposit();
							String[] dyWalDeposits = dyWalDeposit.split(",");
							//获得取现倍数
							BigDecimal tx_beishu = new BigDecimal(dyWalDeposits[3]);
							//获得取现最低额度
							BigDecimal tx_lowest = new BigDecimal(dyWalDeposits[1]);
							//获得取现最高额度
							BigDecimal tx_highest = new BigDecimal(dyWalDeposits[2]);
							//获得取现手续费
							BigDecimal tx_shouxf = new BigDecimal(dyWalDeposits[4]);
							//xxxxxxxxxxxxx业务逻辑判断中xxxxxxxxxxx
							//提现次数校验？？？待完成
							BigDecimal tx_counts = new BigDecimal(dyWalDeposits[0]);
							//获取今天用户取现次数 
							int counts = czqxService.selectCountsByMemandDate(member.getMemNum(),qxType);
							//取现余额是否满足 当前剩余余额
							CurrencyInfoEntity currency = currencyInfoService.findByMemId(member.getId());
							//-10 提示用户今日取现次数已经超出,取现失败
							if(counts >= tx_counts.intValue()){
								jmap.put("result_type", -10);
								aj.setAttributes(jmap);
								return aj;
							}else if(currency.getDynWallet().compareTo(czqxLog.getCzqxSalar()) == -1){
//							return -8;
								jmap.put("result_type", -8);
								aj.setAttributes(jmap);
								return aj;
							}else if(czqxLog.getCzqxSalar().divideAndRemainder(tx_beishu)[1].intValue() != 0){
								//判断是否是XXX的倍数
								//-5提示用户 提现额度输入XXX的倍数
//							return -5;
								jmap.put("result_type", -5);
								aj.setAttributes(jmap);
								return aj;
//						BigDecimal 比较大小  返回的结果是int类型，-1表示小于，0是等于，1是大于。
							}else if(czqxLog.getCzqxSalar().compareTo(tx_lowest)==-1){
								//-6提示用户  提现额度不得小于最低提现额度
//							return -6;
								jmap.put("result_type", -6);
								aj.setAttributes(jmap);
								return aj;
							}else if(czqxLog.getCzqxSalar().compareTo(tx_highest)==1){
								//-7提示用户  提现额度不得大于最高提现额度
//							return -7;
								jmap.put("result_type", -7);
								aj.setAttributes(jmap);
								return aj;
							}else{
								//校验通过  存库处理
								//计算取现手续费用  = 取现额度 乘以 取现手续费 例子  500  *  0.05
								BigDecimal qxPoundSalar = czqxLog.getCzqxSalar().multiply(tx_shouxf);
								czqxLog.setQxPoundSalar(qxPoundSalar);
								//计算实际到账费用 = 取现额度 - 取现手续费   例子  500 - 25
								BigDecimal qxRealSalar = czqxLog.getCzqxSalar().subtract(qxPoundSalar);
								czqxLog.setQxRealSalar(qxRealSalar);
								//提现状态 默认 0审核中 1交易完成 3交易失败
								czqxLog.setCzqxtatus(0);
								//提现动态钱包  所以该用户 动态钱包对应减少提现金额
								BigDecimal reduceSala = czqxLog.getCzqxSalar();
								BigDecimal moneyLeft = currencyInfoService.findByMemId(member.getId()).getDynWallet();
								currencyInfoService.reduceYuE("dynWallet", reduceSala, member.getId());
								BigDecimal newMoneyLeft = currencyInfoService.findByMemId(member.getId()).getDynWallet();
								
								//***************************start*****************************
								BonusRepoEntity bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(member.getMemNum(),1);
								if(bonusRepo==null){
									//新增一条新的记录进去
									inOutRepoService.insertBonusRepo(member.getMemNum(),1);
									//再查询一遍  查询出来 
									bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(member.getMemNum(),1);
								}
								//****************************end****************************
								
								//收支记录表增加一条记录
								inOutRepoService.add(member.getMemNum(), qxType, reduceSala.negate(), moneyLeft, newMoneyLeft, "取现扣除", new Date(),bonusRepo.getId());
							}
						}else if(qxType == 2){
							//静态解冻钱包   收益钱包 示例：1,100,2000,100,0.02 动态钱包每天提现次数,提现最低,提现最高,提现倍数,手续费
							String jtWalDeposit = paramconf.getJtWalDeposit();
							String[] jtWalDeposits = jtWalDeposit.split(",");
							//获得取现倍数
							BigDecimal tx_beishu = new BigDecimal(jtWalDeposits[3]);
							//获得取现最低额度
							BigDecimal tx_lowest = new BigDecimal(jtWalDeposits[1]);
							//获得取现最高额度
							BigDecimal tx_highest = new BigDecimal(jtWalDeposits[2]);
							//获得取现手续费
							BigDecimal tx_shouxf = new BigDecimal(jtWalDeposits[4]);
							//xxxxxxxxxxxxx业务逻辑判断中xxxxxxxxxxx
							//提现次数校验？？？待完成
							BigDecimal tx_counts = new BigDecimal(jtWalDeposits[0]);
							//获取今天用户取现次数 
							int counts = czqxService.selectCountsByMemandDate(member.getMemNum(),qxType);
							//取现余额是否满足 当前剩余余额
							CurrencyInfoEntity currency = currencyInfoService.findByMemId(member.getId());
							//-10 提示用户今日取现次数已经超出,取现失败
							if(counts >= tx_counts.intValue()){
								jmap.put("result_type", -10);
								aj.setAttributes(jmap);
								return aj;
							}else if(currency.getStatJDWallet().compareTo(czqxLog.getCzqxSalar()) == -1){
//							return -8;
								jmap.put("result_type", -8);
								aj.setAttributes(jmap);
								return aj;
							}else if(czqxLog.getCzqxSalar().divideAndRemainder(tx_beishu)[1].intValue() != 0){
								//判断是否是XXX的倍数
								//-5提示用户 提现额度输入XXX的倍数
								//return -5;
								jmap.put("result_type", -5);
								aj.setAttributes(jmap);
								return aj;
								
//						BigDecimal 比较大小  返回的结果是int类型，-1表示小于，0是等于，1是大于。
							}else if(czqxLog.getCzqxSalar().compareTo(tx_lowest)==-1){
								//-6提示用户  提现额度不得小于最低提现额度
								//return -6;
								jmap.put("result_type", -6);
								aj.setAttributes(jmap);
								return aj;
							}else if(czqxLog.getCzqxSalar().compareTo(tx_highest)==1){
								//-7提示用户  提现额度不得大于最高提现额度
								//return -7;
								jmap.put("result_type", -7);
								aj.setAttributes(jmap);
								return aj;
							}else{
								//校验通过  存库处理
								//计算取现手续费用  = 取现额度 乘以 取现手续费 例子  500  *  0.05
								BigDecimal qxPoundSalar = czqxLog.getCzqxSalar().multiply(tx_shouxf);
								czqxLog.setQxPoundSalar(qxPoundSalar);
								//计算实际到账费用 = 取现额度 - 取现手续费   例子  500 - 25
								BigDecimal qxRealSalar = czqxLog.getCzqxSalar().subtract(qxPoundSalar);
								czqxLog.setQxRealSalar(qxRealSalar);
								//提现状态 默认 0审核中 1交易完成 3交易失败
								czqxLog.setCzqxtatus(0);
								//提现解冻钱包  所以该用户 收益钱包对应减少提现金额
								//收支记录表增加一条记录
								BigDecimal reduceSala = czqxLog.getCzqxSalar();
								BigDecimal moneyLeft = currencyInfoService.findByMemId(member.getId()).getStatJDWallet();
								currencyInfoService.reduceYuE("statJDWallet", reduceSala, member.getId());
								BigDecimal newMoneyLeft = currencyInfoService.findByMemId(member.getId()).getStatJDWallet();
								
								//***************************start*****************************
								BonusRepoEntity bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(member.getMemNum(),1);
								if(bonusRepo==null){
									//新增一条新的记录进去
									inOutRepoService.insertBonusRepo(member.getMemNum(),1);
									//再查询一遍  查询出来 
									bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(member.getMemNum(),1);
								}
								//****************************end****************************
								
								//收支记录表增加一条记录
								inOutRepoService.add(member.getMemNum(), qxType, reduceSala.negate(), moneyLeft, newMoneyLeft, "取现扣除", new Date(),bonusRepo.getId());
							}
						}
					}else{
						//提示用户 今日不可以取现  
						jmap.put("result_type", -9);
						aj.setAttributes(jmap);
						return aj;
					}
				}
			}else {
				//-1 提示用户  交易密码输入错误
				//return -1;
				jmap.put("result_type", -1);
				aj.setAttributes(jmap);
				return aj;
			}
			//我要充值 我要取现   关联用户ID 字段一致
			czqxLog.setMemId(member.getId());
			czqxLog.setMemNo(member.getMemNum());
			flag =  czqxService.addCZOrQX(czqxLog);
			
			jmap = packMap(member.getId());
			aj.setAttributes(jmap);
			return aj;
		} catch (Exception e) {
			e.printStackTrace();
			flag = -4;
		}
		
		
		aj.setAttributes(jmap);
		return aj;
	}
	
	
	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	/**
	 * 充值记录  取现记录 列表LIST
	 * @param request
	 * @param model
	 * @param sourceType
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "getCzOrQxList")
	public  List<CZQXLogEntity> getCzOrQxList(HttpServletRequest request,Model model,int optType){
		
		MemberEntity member = WebFrontSession.getFrontMember(request);
		List<CZQXLogEntity> czqxList  = new ArrayList<CZQXLogEntity>();
		if(optType==1){//充值记录LIST
			czqxList = czqxService.getCzOrQxList(member.getId(), optType);
			if(czqxList.size()>0){
				for (CZQXLogEntity czqxLogEntity : czqxList) {
					String showTime = sdf.format(czqxLogEntity.getCzqxTime());
					czqxLogEntity.setShowTime(showTime);
//					if(czqxLogEntity.getCzqxType()==6){
//						czqxLogEntity.setShowType("激活积分");
//					}else if(czqxLogEntity.getCzqxType()==5){
//						czqxLogEntity.setShowType("种子积分");
//					}
//					if(czqxLogEntity.getCzqxtatus()==0){
//						czqxLogEntity.setShowState("审核中");;
//					}else if (czqxLogEntity.getCzqxtatus()==1){
//						czqxLogEntity.setShowState("交易完成");;
//					}
				}
			}
		}else if(optType==2){//取现记录LIST
			czqxList = czqxService.getCzOrQxList(member.getId(), optType);
			if(czqxList.size()>0){
				for (CZQXLogEntity czqxLogEntity : czqxList) {
					String showTime = sdf.format(czqxLogEntity.getCzqxTime());
					czqxLogEntity.setShowTime(showTime);
//					if(czqxLogEntity.getCzqxType()==0){
//						czqxLogEntity.setShowType("动态钱包");
//					}else if(czqxLogEntity.getCzqxType()==2){
//						czqxLogEntity.setShowType("收益钱包");
//					}
//					if(czqxLogEntity.getCzqxtatus()==0){
//						czqxLogEntity.setShowState("审核中");;
//					}else if (czqxLogEntity.getCzqxtatus()==1){
//						czqxLogEntity.setShowState("交易完成");;
//					}
				}
			}
		}
		
		return czqxList;
	}
	
	/**
	 * 更新充值取现数据
	 * 撤销充值 更新充值状态为2 交易失败
	 * @param request
	 * @param czqxLog
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "updateCzqxbyId")
	public AjaxJson updateCzqxbyId(HttpServletRequest request,CZQXLogEntity czqxLog){
		
		AjaxJson aj = new AjaxJson();
		Map<String, Object> jmap = new HashMap<>();
		
		int result = czqxService.update(czqxLog);
		//取现撤销   对应额度 返回用户当前币种信息
		MemberEntity member = WebFrontSession.getFrontMember(request);
		CZQXLogEntity czqx = czqxService.findCommonById(czqxLog.getId());
		BigDecimal czqxSalar = czqx.getCzqxSalar();
		CurrencyInfoEntity currency = currencyInfoService.findByMemId(member.getId());
		if(czqx.getCzqxType() == 0){//动态钱包
			//收支记录新增
			BigDecimal moneyLeft = currency.getDynWallet();
			BigDecimal newMoneyLeft = currency.getDynWallet().add(czqxSalar);
			currency.setDynWallet(newMoneyLeft);
			
			//***************************start*****************************
			BonusRepoEntity bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(member.getMemNum(),1);
			if(bonusRepo==null){
				//新增一条新的记录进去
				inOutRepoService.insertBonusRepo(member.getMemNum(),1);
				//再查询一遍  查询出来 
				bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(member.getMemNum(),1);
			}
			//****************************end****************************
			
			inOutRepoService.add(member.getMemNum(), czqx.getCzqxType() ,czqxSalar , moneyLeft, newMoneyLeft, "撤销取现", new Date(),bonusRepo.getId());
		}else if(czqx.getCzqxType() == 2){//收益钱包
			//收支记录新增
			BigDecimal moneyLeft = currency.getStatJDWallet();
			BigDecimal newMoneyLeft = currency.getStatJDWallet().add(czqxSalar);
			currency.setStatJDWallet(newMoneyLeft);
			
			//***************************start*****************************
			BonusRepoEntity bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(member.getMemNum(),1);
			if(bonusRepo==null){
				//新增一条新的记录进去
				inOutRepoService.insertBonusRepo(member.getMemNum(),1);
				//再查询一遍  查询出来 
				bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(member.getMemNum(),1);
			}
			//****************************end****************************
			
			inOutRepoService.add(member.getMemNum(), czqx.getCzqxType() ,czqxSalar , moneyLeft, newMoneyLeft, "撤销取现", new Date(),bonusRepo.getId());
		}
		result = currencyInfoService.updateCurrenInfoByMemId(currency);
		
		jmap = packMap(member.getId());
		aj.setAttributes(jmap);
		return aj;
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
