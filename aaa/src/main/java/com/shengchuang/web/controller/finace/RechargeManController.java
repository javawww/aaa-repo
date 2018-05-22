package com.shengchuang.web.controller.finace;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.shengchuang.core.GridData;
import com.shengchuang.core.ResultCode;
import com.shengchuang.entity.BonusRepoEntity;
import com.shengchuang.entity.CZQXLogEntity;
import com.shengchuang.entity.CurrencyInfoEntity;
import com.shengchuang.entity.InoutRepoEntity;
import com.shengchuang.service.CZQXService;
import com.shengchuang.service.CurrencyInfoService;
import com.shengchuang.service.InOutRepoService;
import com.shengchuang.service.MemberService;
import com.shengchuang.web.controller.BaseController;
/**
 * 财务明细 - 充值管理
 * 获取全网所有充值订信息  
 * 对充值订单进行不同维度的查询  不同维度的操作
 * @author Administrator
 * 注意 取现业务也在本充值控制器中进行控制 
 * 原因：针对同样的数据表操作
 */
@Controller
@RequestMapping(value = "admin/recharge")
public class RechargeManController extends BaseController{

	private String 							msg;//消息提示
	
	@Resource(name = "czqxService")
	private CZQXService 					czqxService;//注入充值取现业务接口
	@Resource(name = "currencyInfoService")
	private CurrencyInfoService 			currencyInfoService;//注入玩家币种信息
	@Resource(name = "memberService")
	private MemberService 					memberService;//注入玩家币种信息
	@Autowired
	private InOutRepoService				inOutRepoService;//注入玩家币种信息
	
	/**
	 * 查询充值所有数据
	 * 有分页功能
	 * @param request
	 * @param model
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "rechargelist")
	public  ResultCode selectCzqxByTime(HttpServletRequest request,Model model,Integer page, Date startDate, Date endDate,Integer optType,Integer czqxType,String czqxtatus,String memNo){
		//根据 充值时间  czhTime 取现时间 qxTime 是否为null  来判断 该条数据是充值还是取现  返回list
		List<CZQXLogEntity> czqxLogs =  czqxService.selectCzqxByoptType_page(page, startDate, endDate, optType, czqxType, czqxtatus,memNo);
		int counts = czqxService.selectCountCzqxByoptType_page(startDate, endDate, optType, czqxType, czqxtatus,memNo);
		GridData gridData  = new GridData();
		gridData.setData(czqxLogs);
		gridData.setRecordsTotal(counts);
		gridData.setPage(page);
		
		return ResultCode.newRightCode(gridData);
	}
	/**
	 * 查询取现所有数据
	 * 有分页功能
	 * @param request
	 * @param model
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "incarnatelist")
	public  ResultCode selectCzqxByTimeForinc(HttpServletRequest request,Model model,Integer page, Date startDate, Date endDate,Integer optType,Integer czqxType,String czqxtatus,String memNo){
		//根据 充值时间  czhTime 取现时间 qxTime 是否为null  来判断 该条数据是充值还是取现  返回list
		List<CZQXLogEntity> czqxLogs =  czqxService.selectCzqxByoptType_page(page, startDate, endDate, optType, czqxType, czqxtatus,memNo);
		int counts = czqxService.selectCountCzqxByoptType_page(startDate, endDate, optType, czqxType, czqxtatus,memNo);
		GridData gridData  = new GridData();
		gridData.setData(czqxLogs);
		gridData.setRecordsTotal(counts);
		gridData.setPage(page);
		
		return ResultCode.newRightCode(gridData);
	}
	
	/**
	 * 更新操作  一个表对应一个实体对象 对应一个更新操作 ：一般关于本表的所有更新操作都可以调用这里来实现  前提 要传入更新数据的id值 
	 * @param request
	 * @param mdel
	 * @param czqxLog
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "update")
	public ResultCode  update(HttpServletRequest request,Model mdel,CZQXLogEntity czqxLog){
		//更新成功  一般返回值为 1
		int result = czqxService.update(czqxLog);
		if(result == 1){
			CurrencyInfoEntity currencyInfo = currencyInfoService.findOneCurrenInfoBymemNum(czqxLog.getMemNo());
			if(czqxLog.getOptType()== 1 && czqxLog.getCzqxtatus()==1){//充值  并且 充值成功
				if(czqxLog.getCzqxType()==6){
					// 增加相应充值币种  6激活积分
					//收支明细增加记录
					BigDecimal moneyLeft = currencyInfoService.findByMemId(czqxLog.getMemId()).getActivPenn();
					BigDecimal newMoneyLeft = currencyInfo.getActivPenn().add(czqxLog.getCzqxSalar());
					currencyInfo.setActivPenn(newMoneyLeft);
					String tMemNum = memberService.findCommonById(czqxLog.getMemId()).getMemNum();
					
					//***************************start*****************************
					BonusRepoEntity bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(tMemNum,1);
					if(bonusRepo==null){
						//新增一条新的记录进去
						inOutRepoService.insertBonusRepo(tMemNum,1);
						//再查询一遍  查询出来 
						bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(tMemNum,1);
					}
					//****************************end****************************
					
					inOutRepoService.add(tMemNum,czqxLog.getCzqxType() ,czqxLog.getCzqxSalar() , moneyLeft, newMoneyLeft, "充值转入", new Date(),bonusRepo.getId());
				}else if(czqxLog.getCzqxType()==5){
					//增加相应充值币种  5种子积分
					//收支明细增加记录
					BigDecimal moneyLeft = currencyInfoService.findByMemId(czqxLog.getMemId()).getSeedsPenn();
					BigDecimal newMoneyLeft = currencyInfo.getSeedsPenn().add(czqxLog.getCzqxSalar());
					currencyInfo.setSeedsPenn(newMoneyLeft);
					String tMemNum = memberService.findCommonById(czqxLog.getMemId()).getMemNum();
					
					//***************************start*****************************
					BonusRepoEntity bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(tMemNum,1);
					if(bonusRepo==null){
						//新增一条新的记录进去
						inOutRepoService.insertBonusRepo(tMemNum,1);
						//再查询一遍  查询出来 
						bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(tMemNum,1);
					}
					//****************************end****************************
					
					inOutRepoService.add(tMemNum,czqxLog.getCzqxType() ,czqxLog.getCzqxSalar() , moneyLeft, newMoneyLeft, "充值转入", new Date(),bonusRepo.getId());
				}
			}else if(czqxLog.getOptType()== 2 && czqxLog.getCzqxtatus()==2 ){//取现 并且取现失败
				if(czqxLog.getCzqxType()==0){
					//增加相应取现币种 0动态钱包
					//收支明细增加记录
					BigDecimal moneyLeft = currencyInfoService.findByMemId(czqxLog.getMemId()).getDynWallet();
					BigDecimal newMoneyLeft = currencyInfo.getDynWallet().add(czqxLog.getCzqxSalar());
					currencyInfo.setDynWallet(newMoneyLeft);
					String tMemNum = memberService.findCommonById(czqxLog.getMemId()).getMemNum();
					
					//***************************start*****************************
					BonusRepoEntity bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(tMemNum,1);
					if(bonusRepo==null){
						//新增一条新的记录进去
						inOutRepoService.insertBonusRepo(tMemNum,1);
						//再查询一遍  查询出来 
						bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(tMemNum,1);
					}
					//****************************end****************************
					
					inOutRepoService.add(tMemNum,czqxLog.getCzqxType() ,czqxLog.getCzqxSalar() , moneyLeft, newMoneyLeft, "取现撤销", new Date(),bonusRepo.getId());
				}else if(czqxLog.getCzqxType()==2){
					//增加相应取现币种 2收益钱包
					//收支明细增加记录
					BigDecimal moneyLeft = currencyInfoService.findByMemId(czqxLog.getMemId()).getStatJDWallet();
					BigDecimal newMoneyLeft = currencyInfo.getStatJDWallet().add(czqxLog.getCzqxSalar());
					currencyInfo.setStatJDWallet(newMoneyLeft);
					String tMemNum = memberService.findCommonById(czqxLog.getMemId()).getMemNum();
					
					//***************************start*****************************
					BonusRepoEntity bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(tMemNum,1);
					if(bonusRepo==null){
						//新增一条新的记录进去
						inOutRepoService.insertBonusRepo(tMemNum,1);
						//再查询一遍  查询出来 
						bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(tMemNum,1);
					}
					//****************************end****************************
					
					inOutRepoService.add(tMemNum,czqxLog.getCzqxType() ,czqxLog.getCzqxSalar() , moneyLeft, newMoneyLeft, "取现撤销", new Date(),bonusRepo.getId());
				}
			}
			currencyInfoService.updateCurrenInfoByMemId(currencyInfo);
		}
		return ResultCode.newRightCode(result);
	}
	
	/**
	 * 管理员手工充值的各项实现
	 * @param memNum	被充值的会员编号
	 * @param money_type	充值类型，如动态将、种子积分、管家月奉等等
	 * @param money		充值金额
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "/czByHand")
	public ResultCode  update(HttpServletRequest request,Model mdel, String memNum, String money_type,
			BigDecimal money){
		
		int memId = memberService.selectMemEntiBymemNum(memNum).getId();
		String changeType = getChangeType(money_type);
		int result=0;
		BigDecimal moneyLeft = getMoneyLeft(money_type, memId);
		if(money.compareTo(BigDecimal.ZERO) >= 0){
			result = currencyInfoService.addYuE(changeType, money, memId);
			
			//***************************start*****************************
			BonusRepoEntity bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(memNum,1);
			if(bonusRepo==null){
				//新增一条新的记录进去
				inOutRepoService.insertBonusRepo(memNum,1);
				//再查询一遍  查询出来 
				bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(memNum,1);
			}
			//****************************end****************************
			
			inOutRepoService.add(memNum, Integer.parseInt(money_type), money, moneyLeft, getMoneyLeft(money_type, memId), "后台充值", new Date(),bonusRepo.getId());
		}else{
			result = currencyInfoService.reduceYuE(changeType, money.abs(), memId);
			
			//***************************start*****************************
			BonusRepoEntity bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(memNum,1);
			if(bonusRepo==null){
				//新增一条新的记录进去
				inOutRepoService.insertBonusRepo(memNum,1);
				//再查询一遍  查询出来 
				bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(memNum,1);
			}
			//****************************end****************************
			
			inOutRepoService.add(memNum, Integer.parseInt(money_type), money, moneyLeft, getMoneyLeft(money_type, memId), "后台充值", new Date(),bonusRepo.getId());
		}
		return ResultCode.newRightCode(result);
	}
	
	public String getChangeType(String money_type){
		
		String changeType = "";
		switch (Integer.parseInt(money_type)) {
			case 0:
				changeType = "dynWallet";
				break;
			case 1:
				changeType = "statDJWallet";
			    break;
			case 2:
				changeType = "statJDWallet";
			    break;
			case 3:
				changeType = "kidMoney";
			    break;
			case 4:
				changeType = "manaMoney";
			    break;
			case 5:
				changeType = "seedsPenn";
			    break;
			case 6:
				changeType = "activPenn";
			    break;
			default:
				break;
		}
		return changeType;
	}
	
	public BigDecimal getMoneyLeft(String money_type, Integer memId){
		
		CurrencyInfoEntity cie = currencyInfoService.findByMemId(memId);
		BigDecimal moneyLeft = new BigDecimal(0);
		switch (Integer.parseInt(money_type)) {
		case 0:
			moneyLeft = cie.getDynWallet();
			break;
		case 1:
			moneyLeft = cie.getStatDJWallet();
			break;
		case 2:
			moneyLeft = cie.getStatJDWallet();
			break;
		case 3:
			moneyLeft = cie.getKidMoney();
			break;
		case 4:
			moneyLeft = cie.getManaMoney();
			break;
		case 5:
			moneyLeft = cie.getSeedsPenn();
			break;
		case 6:
			moneyLeft = cie.getActivPenn();
			break;
		default:
			break;
		}
		return moneyLeft;
	}
	
	@ResponseBody
	@RequestMapping(value = "/findAllRechargeByMemNum")
	public ResultCode  findAllRechargeByMemNum(HttpServletRequest request,Model mdel, 
			String memNum, Integer page){
		List<InoutRepoEntity> list = inOutRepoService.findAllRechargesByMemNum(page, memNum, "后台充值");
		int count = inOutRepoService.findAllRechargesCountByMemNum(memNum, "后台充值");
		GridData griddata = new GridData();
		griddata.setData(list);
		griddata.setRecordsTotal(count);
		griddata.setPage(page); 
		return ResultCode.newRightCode(griddata);
	}
	
	@ResponseBody
	@RequestMapping(value = "/deleteRechargeById")
	public ResultCode  deleteRechargeById(HttpServletRequest request,Model mdel,Integer id){
		
		int result = inOutRepoService.deleteInOutRepoById(id);
		return ResultCode.newRightCode(result);
	}
}
