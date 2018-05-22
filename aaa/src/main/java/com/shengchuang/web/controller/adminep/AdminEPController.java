package com.shengchuang.web.controller.adminep;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.shengchuang.core.GridData;
import com.shengchuang.core.ResultCode;
import com.shengchuang.entity.BonusRepoEntity;
import com.shengchuang.entity.CurrencyInfoEntity;
import com.shengchuang.entity.EPOrderEntity;
import com.shengchuang.entity.EPSellEntity;
import com.shengchuang.service.CurrencyInfoService;
import com.shengchuang.service.EpService;
import com.shengchuang.service.InOutRepoService;
import com.shengchuang.service.MemberService;
import com.shengchuang.service.SystemParamService;
import com.shengchuang.web.controller.BaseController;
import com.shengchuang.web.util.WebFrontSession;

/**
 * ep交易   子菜单  页面跳转
 * 业务逻辑控制
 * @author Administrator
 *
 */
@Controller
@RequestMapping(value = "admin/ep")
public class AdminEPController extends BaseController{
	
	@Resource(name = "epService")
	private EpService 									epService;  //注入 ep交易 业务接口
	@Resource(name = "currencyInfoService")
	private CurrencyInfoService  						currencyInfoService;//注入玩家币种信息业务接口

	@Autowired
	private MemberService memberService;
	@Autowired
	private SystemParamService systemParamService;
	@Autowired
	private InOutRepoService inOutRepoService;
	/**
	 * 挂卖交易 页面跳转
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "epsellPage")
	public String epsellPage(HttpServletRequest request,Model model){
		
		return "admin/ep/epsellPage";
	}
	/**
	 * 交易订单  交易中的订单  页面跳转
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "eporder0Page")
	public String eporder0Page(HttpServletRequest request,Model model){
		
		return "admin/ep/eporder0Page";
	}
	/**
	 * 交易订单  交易完成的订单 页面跳转
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "eporder1Page")
	public String eporder1Page(HttpServletRequest request,Model model){
		
		return "admin/ep/eporder1Page";
	}
	
	/**
	 * 返回全网所有玩家 挂卖数据列表
	 * @param request
	 * @param model
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "epselllist")
	public ResultCode  epselllist(HttpServletRequest request,Model model,Integer page,Date startDate, Date endDate,String esellStatus,String memNum){
		
		List<EPSellEntity> epSellS = epService.selectAllSellInfo_page(page,startDate,endDate,esellStatus,memNum);
		int counts = epService.countsByselectAllSellInfo_page(startDate,endDate,esellStatus,memNum);
		GridData gridData = new GridData();
		gridData.setData(epSellS);
		gridData.setRecordsTotal(counts);
		gridData.setPage(page);
		
		return ResultCode.newRightCode(gridData);
	}
	/**
	 * 交易订单  订单状态为0  交易中
	 * @param request
	 * @param model
	 * @param page
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "eporder0list")
	public ResultCode  eporder0list(HttpServletRequest request,Model model,Integer page,Date startDate, Date endDate,String eporderStatus,String memNum){
		List<EPOrderEntity> eporders = epService.selectAllOrderByStatus_page(page,startDate,endDate,eporderStatus,memNum);
		int counts = epService.countsBySelectAllOrderByStatus_page(startDate,endDate,eporderStatus,memNum);
		GridData gridData = new  GridData();
		gridData.setData(eporders);
		gridData.setRecordsTotal(counts);
		gridData.setPage(page);
		return ResultCode.newRightCode(gridData);
	}
	/**
	 * 交易订单  订单状态为1  交易完成
	 * @param request
	 * @param model
	 * @param page
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "eporder1list")
	public ResultCode  eporder1list(HttpServletRequest request,Model model,Integer page,Date startDate, Date endDate,String eporderStatus,String memNum){
		List<EPOrderEntity> eporders = epService.selectAllOrderByStatus_page(page,startDate,endDate,eporderStatus,memNum);
		int counts = epService.countsBySelectAllOrderByStatus_page(startDate,endDate,eporderStatus,memNum);
		GridData gridData = new  GridData();
		gridData.setData(eporders);
		gridData.setRecordsTotal(counts);
		gridData.setPage(page);
		return ResultCode.newRightCode(gridData);
	}
	
	/**
	 * 更新挂卖对象数据  通过挂卖数据的ID
	 * @param request
	 * @param model
	 * @param epSell
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "updateEPsell")
	public ResultCode  updateEPsell(HttpServletRequest request,Model model,EPSellEntity epSell,String prioOpt){
		if(prioOpt==null){
			int result = epService.updateEPsellByid(epSell);
			epSell = epService.findEPSellEntityById(epSell.getId());
			if(result == 1){
				if(epSell.getEsellStatus() == 2){//撤销操作  应该把玩家挂卖的种子积分  返回到其币种信息中
					CurrencyInfoEntity currencyInfo = currencyInfoService.findOneCurrenInfoBymemNum(epSell.getMemNum());
					BigDecimal changeSalar = epSell.getEpsellSalar();
					BigDecimal origiSalar = currencyInfo.getSeedsPenn();
					BigDecimal currSalar = origiSalar.add(changeSalar);
					currencyInfo.setSeedsPenn(currSalar);
					
					//***************************start*****************************
					BonusRepoEntity bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(epSell.getMemNum(),1);
					if(bonusRepo==null){
						//新增一条新的记录进去
						inOutRepoService.insertBonusRepo(epSell.getMemNum(),1);
						//再查询一遍  查询出来 
						bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(epSell.getMemNum(),1);
					}
					//****************************end****************************
					
					inOutRepoService.add(epSell.getMemNum(), 5, changeSalar, origiSalar, currSalar, "后台撤销", new Date(),bonusRepo.getId());
					
					currencyInfoService.updateCurrenInfoByMemId(currencyInfo);
				}
			}
			return ResultCode.newRightCode(result);
		}else if(prioOpt != null && prioOpt.equals("prioOpt")){//置顶操作
			epSell = epService.findEPSellEntityById(epSell.getId());
			//查询数据库所有 交易中0 装填订单 的优先级 获取最大值  
			int max = epService.findMaxPrioAndStatus();
			epSell.setPrioLevel(++max);
			epService.updateEPsellByid(epSell);
			return ResultCode.newRightCode(1);
		}
		return null;
	}
	
	//*********************added by Zhang Cheng********************
	/**
	 * 当卖家点击确认时的处理（也就是在卖家的交易列表中，卖家点击“确认”后，说明 卖家确实收到
	 * 买家的钱了，所以，此时就要进行相关数据更新了。）
	 * @param int id 要确认的t_ep_order的id
	 * @return int， 对应结果如下：
	 * 1	确认成功
	 * 0 	失败
	 */
	@ResponseBody
	@RequestMapping("/confirmEpOrder")
	public int confirmEpOrder(HttpServletRequest httpServletRequest,Model model, EPOrderEntity eoe) {
		
		/*id = 8;
		int curId = 1;
		String curMemNum = "A00000";*/
		int id = eoe.getId();
		String curMemNum = eoe.getMemNumSeller();
		int curId = memberService.selectMemEntiBymemNum(curMemNum).getId();
		EPOrderEntity ePOrderEntity = eoe;
		String buyerMemNum = ePOrderEntity.getMemNumBuy();
		int buyerId = memberService.selectMemEntiBymemNum(buyerMemNum).getId();
		
		BigDecimal orderMoney = ePOrderEntity.getEporderSalar();
		BigDecimal sellMoney = epService.findEPSellEntityById(ePOrderEntity.getEpsellId()).getEpsellSalar();
		BigDecimal buyerMoneyLeft = currencyInfoService.findByMemId(buyerId).getSeedsPenn();
		
		//一：卖家挂卖表的挂卖数量减去买家的购买数量
		//已经减过了，不需要再减
		EPSellEntity se = new EPSellEntity();
		se.setId(ePOrderEntity.getEpsellId());
		//se.setEpsellSalar(sellMoney.subtract(orderMoney));
		//int r1 = epService.updateCommon(se);
		
		//二：t_ep_order的状态修改为 1，表示订单已完成
		EPOrderEntity oe = new EPOrderEntity();
		oe.setId(id);
		oe.setEporderStatus(1);
		//oe.setEporderSalar(new BigDecimal(0));
		int r2 = epService.updateOrder(oe);
		
		//三：买家的种子积分钱包增加购买的数量
		int r3 = currencyInfoService.addYuE("seedsPenn", orderMoney, buyerId);
		
		//四：买家在收支记录表增加记录， 卖家不必
		BigDecimal newBuyerMoneyLeft = currencyInfoService.findByMemId(buyerId).getSeedsPenn();
		
		//***************************start*****************************
		BonusRepoEntity bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(buyerMemNum,1);
		if(bonusRepo==null){
			//新增一条新的记录进去
			inOutRepoService.insertBonusRepo(buyerMemNum,1);
			//再查询一遍  查询出来 
			bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(buyerMemNum,1);
		}
		//****************************end****************************
		
		int r4 = inOutRepoService.add(buyerMemNum, 5, orderMoney, buyerMoneyLeft, newBuyerMoneyLeft, "种子买入", new Date(),bonusRepo.getId());
		
		if(r2==1 && r3==1 && r4==1){			
			return 1;
		}else{
			return 0;			
		}
	}
	
	/**
	 * 当卖家点击撤销订单时的处理（也就是在卖家的交易列表中，卖家点击“撤销”，不卖给某个买家了）
	 * @param int id 要确认的t_ep_order的id
	 * @return int， 对应结果如下：
	 * 1	撤销成功
	 * 0 	撤销失败
	 */
	@ResponseBody
	@RequestMapping("/refuseEpOrder")
	public int refuseEpOrder(HttpServletRequest httpServletRequest,Model model, EPOrderEntity eoe) {
		
		/*id = 8;
		int curId = 1;
		String curMemNum = "A00000";*/
		int id = eoe.getId();
		EPOrderEntity ePOrderEntity = eoe;
		//买家买的钱数
		BigDecimal orderMoney = ePOrderEntity.getEporderSalar();
		//卖家挂卖的原始总量
		BigDecimal sellMoney = epService.findEPSellEntityById(ePOrderEntity.getEpsellId()).getEpsellSalar();
		
		//一：卖家挂卖表t_ep_order的挂卖数量加回去，状态设为0挂卖中，当然它很有可能本来就是0
		EPSellEntity se = new EPSellEntity();
		se.setId(ePOrderEntity.getEpsellId());
		se.setEpsellSalar(sellMoney.add(orderMoney));	//原始+撤销回来的钱数
		se.setEsellStatus(0);
		int r1 = epService.updateCommon(se);
		
		//二：至于被拒绝的这个订单表，它的状态改为2，表示撤销；购买数量清零
		EPOrderEntity oe = new EPOrderEntity();
		oe.setId(id);
		oe.setEporderStatus(2);
		//oe.setEporderSalar(new BigDecimal(0));
		int r2 = epService.updateOrder(oe);
		
		if(r1==1 && r2==1){			
			return 1;
		}else{
			return 0;			
		}
	}
	
	
}
