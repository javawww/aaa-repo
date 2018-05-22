package com.shengchuang.web.controller.front;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.shengchuang.core.AjaxJson;
import com.shengchuang.entity.BonusRepoEntity;
import com.shengchuang.entity.CurrencyInfoEntity;
import com.shengchuang.entity.EPOrderEntity;
import com.shengchuang.entity.EPSellEntity;
import com.shengchuang.entity.InoutRepoEntity;
import com.shengchuang.entity.MemberEntity;
import com.shengchuang.entity.ParamConfEntity;
import com.shengchuang.service.CurrencyInfoService;
import com.shengchuang.service.EpService;
import com.shengchuang.service.InOutRepoService;
import com.shengchuang.service.MemberService;
import com.shengchuang.service.SystemParamService;
import com.shengchuang.web.util.WebFrontSession;   
 
/**
 *  EP交易的类
 * 主要有两大方法，一个是我要发布，即商品，一个是我要购买，即订单。
 */
@Controller
@RequestMapping(value = "front/ep")
public class EPController{
	
	@Resource(name="epService")
	private EpService epService;
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
	 * 新增ep商品，我要挂卖
	 * 必填参数：EPSellEntity对象（包含出售数量）， 交易密码
	 * 
	 * 返回值对应关系
	 * 1	增加成功
	 * 0	验证全部通过，但是存库时出现了不可抗力因素，导致存库失败，比如服务器主机突然停电或者网络传输掉线
	 * -1	交易密码不对
	 * -2	售卖数量大于余额
	 * -3	小于起步价限制
	 * -4	大于最高价格限制
	 * -5	输入的不是设定的倍数
	 * -6	当前会员已经有正在挂卖中的记录，因为只能挂卖一个，所以不能再加
	 */
	@ResponseBody
	@RequestMapping("/addEpSell")
	public AjaxJson addEpSell(HttpServletRequest httpServletRequest,Model model, EPSellEntity ese, String tradePwd) {
		
		//****首先创建常量池
		//现在的时间
		Date now = new Date();
		//当前用户的基本信息
		int curId = WebFrontSession.getFrontMember(httpServletRequest).getId();
		String curMemNum = WebFrontSession.getFrontMember(httpServletRequest).getMemNum();
		String realTradePwd = WebFrontSession.getFrontMember(httpServletRequest).getTradePwd();
		
		AjaxJson aj = new AjaxJson();
		Map<String, Object> jmap = new HashMap<>();
		
		//有关ep商品的一些基本设置
		//起步价、上限、倍数
		ParamConfEntity paramConfEntity = systemParamService.findParamById(1);
		String[] epSellTrade = paramConfEntity.getEpSellTrade().split(",");	
		BigDecimal epSellTradeStart = new BigDecimal(epSellTrade[0].trim());
		BigDecimal epSellTradeEnd = new BigDecimal(epSellTrade[1].trim());
		BigDecimal epSellTradeUnit = new BigDecimal(epSellTrade[2].trim());
		//会员的种子积分余额
		BigDecimal moneyLeft = currencyInfoService.findByMemId(curId).getSeedsPenn();
		
	
		//接下来开始判断
		if(memberService.findForTrade(curId, tradePwd)!=null){
			if(ese.getEpsellSalar().compareTo(moneyLeft) < 1){
				if(ese.getEpsellSalar().compareTo(epSellTradeStart) > -1){
					if(ese.getEpsellSalar().compareTo(epSellTradeEnd) < 1){
						if(epService.onSellCount(curId) == 0){
							if(ese.getEpsellSalar().divideAndRemainder(epSellTradeUnit)[1].intValue() == 0){
								//到这一步，算是通过了重重考验，可以放心新增了
								ese.setMemId(curId);
								ese.setEsellStatus(0);
								ese.setEsellTime(now);
								ese.setMemNum(curMemNum);
								//收支明细新增
								BigDecimal changeSalar = ese.getEpsellSalar();
								BigDecimal origiSalar = moneyLeft;
								BigDecimal currSalar = moneyLeft.subtract(changeSalar);
								
								//***************************start*****************************
								BonusRepoEntity bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(curMemNum,1);
								if(bonusRepo==null){
									//新增一条新的记录进去
									inOutRepoService.insertBonusRepo(curMemNum,1);
									//再查询一遍  查询出来 
									bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(curMemNum,1);
								}
								//****************************end****************************
								
								inOutRepoService.add(curMemNum,5, changeSalar.negate(), origiSalar, currSalar, "挂卖扣除", new Date(),bonusRepo.getId());
								if(epService.addEpSell(ese) == 1){ //返回1，增加成功！
									//会员余额相应地减少挂卖的数量
									currencyInfoService.reduceYuE("seedsPenn", ese.getEpsellSalar(), curId);
									
									jmap = packMap(curId);
									aj.setAttributes(jmap);
									return aj;
								}else{
//									return 0;
									jmap.put("result_type", 0);
									aj.setAttributes(jmap);
									return aj;
								}
							}else{
//								return -5;		//输入的不是设定的倍数
								jmap.put("result_type", -5);
								aj.setAttributes(jmap);
								return aj;
							}
						}else{
//							return -6;		//当前会员已经有正在挂卖中的记录，因为只能挂卖一个，所以不能再加
							jmap.put("result_type", -6);
							aj.setAttributes(jmap);
							return aj;
						}
					}else{
//						return -4;	//大于最高价格限制
						jmap.put("result_type", -4);
						aj.setAttributes(jmap);
						return aj;
					}
				}else{
//					return -3; 	//小于起步价限制
					jmap.put("result_type", -3);
					aj.setAttributes(jmap);
					return aj;
				}
			}else{
//				return -2;		//售卖数量大于余额
				jmap.put("result_type", -2);
				aj.setAttributes(jmap);
				return aj;
			}
		}else{
//			return -1;			//交易密码不对
			jmap.put("result_type", -1);
			aj.setAttributes(jmap);
			return aj;
		}
	}
	
	
	/**
	 * 新增ep订单，我要买
	 * 必填参数：EPOrderEntity对象（对象中包含购买数量）， 交易密码, EPSell的id
	 * 
	 * 返回值对应关系
	 * 1	增加成功
	 * 0	验证全部通过，但是存库时出现了不可抗力因素导致存库失败
	 * -1	交易密码不对
	 * -2	购买数量大于售卖数量
	 * -3	小于起步价限制
	 * -4	大于最高价格限制
	 * -5	输入的不是设定的倍数
	 * -6  	当前存在未完成的购买订单
	 */
	@ResponseBody
	@RequestMapping("/addEpOrder")
	public int addEpOrder(HttpServletRequest httpServletRequest,Model model, EPOrderEntity eoe, Integer id, String tradePwd) {
		
		//****首先创建常量池
		//现在的时间
		Date now = new Date();
		//当前用户的基本信息
		int curId = WebFrontSession.getFrontMember(httpServletRequest).getId();
		String curMemNum = WebFrontSession.getFrontMember(httpServletRequest).getMemNum();
		String realTradePwd = WebFrontSession.getFrontMember(httpServletRequest).getTradePwd();
		
		//后台测试用数据
		/*int curId = 1;
		String curMemNum = "A00000";
		String realTradePwd = "123456";
		eoe = new EPOrderEntity();
		eoe.setEporderSalar(new BigDecimal(300));
		tradePwd = "123456";
		id=3;*/
		
		//有关ep商品的一些基本设置
		//起步价、上限、倍数
		ParamConfEntity paramConfEntity = systemParamService.findParamById(1);
		String[] epSellTrade = paramConfEntity.getEpBuyTrade().split(",");	
		BigDecimal epSellOrderStart = new BigDecimal(epSellTrade[0].trim());
		BigDecimal epSellOrderEnd = new BigDecimal(epSellTrade[1].trim());
		BigDecimal epSellOrderUnit = new BigDecimal(epSellTrade[2].trim());
		//销售的全部数量
		BigDecimal wholeSeedsOnSell = epService.findEPSellEntityById(id).getEpsellSalar();
		//如果当前购买玩家 存在未完成的购买记录 则提示玩家不可购买 
		int counts = epService.findCountsByBuyMemNum(curMemNum);
		//接下来开始判断
		if(memberService.findForTrade(curId, tradePwd)!=null){
			if(eoe.getEporderSalar().compareTo(wholeSeedsOnSell) < 1){
				if(counts==0){
					if(eoe.getEporderSalar().compareTo(epSellOrderStart) > -1){
						if(eoe.getEporderSalar().compareTo(epSellOrderEnd) < 1){
							if(eoe.getEporderSalar().divideAndRemainder(epSellOrderUnit)[1].intValue() == 0){
								//到这一步，算是通过了重重考验，可以放心新增了
								eoe.setEporderStatus(0);
								eoe.setEporderTime(now);
								eoe.setEpsellId(id);
								eoe.setMemNumBuy(curMemNum);
								eoe.setMemNumSeller(epService.findEPSellEntityById(id).getMemNum());
								if(epService.addEpOrder(eoe) == 1){ //返回1，增加成功！
									//销售的余额相应地减少购买的数量
									return epService.reduceEpSellSalar(eoe.getEporderSalar(), id);
									//但是购买人的种子积分暂时还没有添加增加动作，因为他们是线下交易，我也不知道什么时候付款成功，因此不能立即把
									//种子积分打给买家。
								}else{
									return 0;
								}
							}else{
								return -5;		//输入的不是设定的倍数
							}
						}else{
							return -4;	//大于最高价格限制
						}
					}else{
						return -3; //小于起步价限制
					}
				}else{
					return -6;//当前有未完成的购买订单
				}
			}else{
				return -2;		//购买数量大于售卖数量
			}
		}else{
			return -1;			//交易密码不对
		}
	}
	
	  
	/**
	 * 返回出当前用户外所有其他人发的商品信息。
	 */
	@ResponseBody
	@RequestMapping("/findOtherEpSell")
	public List<EPSellEntity> findOtherEpSell(HttpServletRequest httpServletRequest,Model model) {
		//当前用户的基本信息
		//int curId = 1;
		//普通的、不包含优先级的list
		//纯带优先级的list
		//List<EPSellEntity> listS = epService.findOtherPriorityEpSell(curId);
		//两个list合并，且带优先级的在前面，不带的在后面
		
		int curId = WebFrontSession.getFrontMember(httpServletRequest).getId();
		List<EPSellEntity> list = epService.findOtherEpSell(curId);
		if(list.size()>0){			
			for(EPSellEntity e : list){
				Date st = e.getEsellTime();
				e.setShowTime(sdf.format(st));
			}
			return list;
		}
		return list;
	}     
	
	/**
	 * 返回所有当前用户发的商品信息。挂卖中的将无条件拍在第一条，其他按时间降序排列
	 */
	@ResponseBody
	@RequestMapping("/findMyEpSell")
	public List<EPSellEntity> findMyEpSell(HttpServletRequest httpServletRequest,Model model) {
		//当前用户的基本信息
		//List<EPSellEntity> listS = epService.findMyPriorityEpSell(curId);
		//两个list合并，且带优先级的在前面，不带的在后面
		
		int curId = WebFrontSession.getFrontMember(httpServletRequest).getId();
		List<EPSellEntity> list = epService.findMyEpSell(curId);
		if(list.size()>0){			
			for(EPSellEntity e : list){
				Date st = e.getEsellTime();
				e.setShowTime(sdf.format(st));
			}
			return list;
		}
		return list;
	}     
	/**
	 * 返回所有当前用户发的商品信息。挂卖中的将无条件拍在第一条，其他按时间降序排列
	 */
	@ResponseBody
	@RequestMapping("/findMyEpOrderBymemNumSeller")
	public List<EPOrderEntity> findMyEpOrderBymemNumSeller(HttpServletRequest httpServletRequest,Model model) {
		//当前用户的基本信息
		//List<EPSellEntity> listS = epService.findMyPriorityEpSell(curId);
		//两个list合并，且带优先级的在前面，不带的在后面
		
		MemberEntity member = WebFrontSession.getFrontMember(httpServletRequest);
		List<EPOrderEntity> epOrders = epService.findMyEpOrderBymemNumSeller(member.getMemNum());
		if(epOrders.size() > 0){
			for (EPOrderEntity epOrder : epOrders) {
				epOrder.setShowTime(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(epOrder.getEporderTime()));
			}
		}
		return epOrders;
	}   
	
	/**
	 * 返回所有其他用户购买当前用户正在挂卖中的记录，未处理的。
	 */
	@ResponseBody
	@RequestMapping("/findWhoBuyMySell")
	public List<EPOrderEntity> findWhoBuyMySell(HttpServletRequest httpServletRequest,Model model) {
		//当前用户的基本信息
		String memNum = WebFrontSession.getFrontMember(httpServletRequest).getMemNum();
		List<EPOrderEntity> list = epService.findWhoBuyMySell(memNum);
		for(EPOrderEntity e : list){
			Date st = e.getEporderTime();
			e.setShowTime(sdf.format(st));
		}
		return list;
	} 
	
	/**
	 * 返回所有其他用户购买当前用户挂卖的历史记录，状态已完成的。
	 */
	@ResponseBody
	@RequestMapping("/findWhoBuyMySellHistory")
	public List<EPOrderEntity> findWhoBuyMySellHistory(HttpServletRequest httpServletRequest,Model model) {
		//当前用户的基本信息
		String memNum = WebFrontSession.getFrontMember(httpServletRequest).getMemNum();
		List<EPOrderEntity> list = epService.findWhoBuyMySellHistory(memNum);
		for(EPOrderEntity e : list){
			Date st = e.getEporderTime();
			e.setShowTime(sdf.format(st));
		}
		return list;
	}     
	
	/**
	 * 返回所有当前用户发的订单信息。
	 */
	@ResponseBody
	@RequestMapping("/findMyEpOrder")
	public List<EPOrderEntity> findMyEpOrder(HttpServletRequest httpServletRequest,Model model) {
		//当前用户的基本信息
		int curId = WebFrontSession.getFrontMember(httpServletRequest).getId();
		String curMemNum = WebFrontSession.getFrontMember(httpServletRequest).getMemNum();
		//String curMemNum = "A00000";
		List<EPOrderEntity> list = epService.findMyEpOrder(curMemNum);
		for(EPOrderEntity e : list){
			Date st = e.getEporderTime();
			e.setShowTime(sdf.format(st));
		}
		return list;
	}     
	
	/**
	 * 当卖家点击撤销挂卖时的处理
	 * @param int id 要撤销的t_ep_sell的id
	 * @return int， 对应结果如下：
	 * 1	撤销成功
	 * -1	修改t_ep_sell表失败，撤销失败
	 * -2	种子积分转回给卖家余额失败，撤销失败
	 * -3	添加收支记录失败，撤销失败
	 */
	@ResponseBody
	@RequestMapping("/cancelEpSell")
	public AjaxJson cancelEpSell(HttpServletRequest httpServletRequest,Model model, Integer id) {
		
		AjaxJson aj = new AjaxJson();
		Map<String, Object> jmap = new HashMap<>();
		
		int curId = WebFrontSession.getFrontMember(httpServletRequest).getId();
		String curMemNum = WebFrontSession.getFrontMember(httpServletRequest).getMemNum();
		BigDecimal money = epService.findEPSellEntityById(id).getEpsellSalar();
		BigDecimal moneyLeft = currencyInfoService.findByMemId(curId).getSeedsPenn();
		
		//一：t_ep_sell的状态修改为 3， 积分数量清零
		EPSellEntity es = new EPSellEntity();
		es.setId(id);
		es.setEsellStatus(2);
		es.setEpsellSalar(new BigDecimal(0));
		if(epService.updateCommon(es) == 1){			
			//二：积分转回卖家的积分钱包
			if(currencyInfoService.addYuE("seedsPenn", money, curId) == 1){				
				//三，收支记录表增加相应记录
				BigDecimal newMoneyLeft = currencyInfoService.findByMemId(curId).getSeedsPenn();
				
				//***************************start*****************************
				BonusRepoEntity bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(curMemNum,1);
				if(bonusRepo==null){
					//新增一条新的记录进去
					inOutRepoService.insertBonusRepo(curMemNum,1);
					//再查询一遍  查询出来 
					bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(curMemNum,1);
				}
				//****************************end****************************
				
				if(inOutRepoService.add(curMemNum, 5, money, moneyLeft, newMoneyLeft, "挂卖撤销", new Date(),bonusRepo.getId()) == 1){
//					return 1;
					
					jmap = packMap(curId);
					aj.setAttributes(jmap);
					return aj;
				}else{
//					return -3; //添加收支记录失败，撤销失败
					jmap.put("result_type", -3);
					aj.setAttributes(jmap);
					return aj;
				}
			}else{
//				return -2;	//种子积分转回给卖家余额失败，撤销失败
				jmap.put("result_type", -2);
				aj.setAttributes(jmap);
				return aj;
			}
			
		}else{
//			return -1;	//修改t_ep_sell表失败，撤销失败
			jmap.put("result_type", -1);
			aj.setAttributes(jmap);
			return aj;
		}
	}

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
	public int confirmEpOrder(HttpServletRequest httpServletRequest,Model model, Integer id) {
		
		/*id = 8;
		int curId = 1;
		String curMemNum = "A00000";*/
		
		int curId = WebFrontSession.getFrontMember(httpServletRequest).getId();
		String curMemNum = WebFrontSession.getFrontMember(httpServletRequest).getMemNum();
		EPOrderEntity ePOrderEntity = epService.findEPOrderEntityById(id);
		String buyerMemNum = ePOrderEntity.getMemNumBuy();
		int buyerId = memberService.selectMemEntiBymemNum(buyerMemNum).getId();
		
		BigDecimal orderMoney = ePOrderEntity.getEporderSalar();
		BigDecimal sellMoney = epService.findEPSellEntityById(ePOrderEntity.getEpsellId()).getEpsellSalar();
		BigDecimal buyerMoneyLeft = currencyInfoService.findByMemId(buyerId).getSeedsPenn();
		
		//一：卖家挂卖表的挂卖数量减去买家的购买数量
		//已经减过了，不需要再减
		
		
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
		BonusRepoEntity bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(curMemNum,1);
		if(bonusRepo==null){
			//新增一条新的记录进去
			inOutRepoService.insertBonusRepo(curMemNum,1);
			//再查询一遍  查询出来 
			bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(curMemNum,1);
		}
		//****************************end****************************
		
		int r4 = inOutRepoService.add(buyerMemNum, 5, orderMoney, buyerMoneyLeft, newBuyerMoneyLeft, "种子买入", new Date(),bonusRepo.getId());
		
		//五：新增判断一下剩余挂卖金额为多少，如果剩余为0，那么说明本挂卖已经完成，结束了
		EPSellEntity se = epService.findEPSellEntityById(ePOrderEntity.getEpsellId());
		if(se.getEpsellSalar().compareTo(new BigDecimal(0)) == 0){
			if(findWhoBuyMySell(httpServletRequest, model).size()==0){				
				se.setEsellStatus(1);
				epService.updateCommon(se);
			}
		}
		
		
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
	public int refuseEpOrder(HttpServletRequest httpServletRequest,Model model, Integer id) {
		
		/*id = 8;
		int curId = 1;
		String curMemNum = "A00000";*/
		
		int curId = WebFrontSession.getFrontMember(httpServletRequest).getId();
		String curMemNum = WebFrontSession.getFrontMember(httpServletRequest).getMemNum();
		EPOrderEntity ePOrderEntity = epService.findEPOrderEntityById(id);
		
		BigDecimal orderMoney = ePOrderEntity.getEporderSalar();
		BigDecimal sellMoney = epService.findEPSellEntityById(ePOrderEntity.getEpsellId()).getEpsellSalar();
		
		//一：卖家挂卖表t_ep_order的挂卖数量加回去，状态设为0挂卖中，当然它很有可能本来就是0
		EPSellEntity se = new EPSellEntity();
		se.setId(ePOrderEntity.getEpsellId());
		se.setEpsellSalar(sellMoney.add(orderMoney));
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
	
	/**
	 * 当买家点击撤销订单时的处理
	 * @param Integer id 要撤销的t_ep_order的id; Integer epsellId, 该条购买对应的挂卖记录的id
	 * @return int， 对应结果如下：
	 * 1	撤销成功
	 * -1	修改t_ep_order表，即把买家购买数量清零失败，撤销失败
	 * -2	种子积分转回给卖家挂卖记录失败，撤销失败
	 */
	@ResponseBody
	@RequestMapping("/cancelEpOrder")
	public int cancelEpOrder(HttpServletRequest httpServletRequest,Model model, Integer id, Integer epsellId) {
		
		/*id = 9;
		epsellId = 1;
		int curId = 49;
		String curMemNum = "a333333";*/
		
		int curId = WebFrontSession.getFrontMember(httpServletRequest).getId();
		String curMemNum = WebFrontSession.getFrontMember(httpServletRequest).getMemNum();
		BigDecimal money = epService.findEPOrderEntityById(id).getEporderSalar();
		
		//一：买家t_ep_order的状态修改为 2， 积分数量清零
		EPOrderEntity es = new EPOrderEntity();
		es.setId(id);
		es.setEporderStatus(2);;
		es.setEporderSalar(new BigDecimal(0));
		if(epService.updateOrder(es) == 1){	
			//二：积分转回卖家的挂卖数量
			BigDecimal moneyLeft = epService.findEPSellEntityById(epsellId).getEpsellSalar();
			EPSellEntity se = new EPSellEntity();
			se.setId(epsellId);
			se.setEpsellSalar(moneyLeft.add(money));
			se.setEsellStatus(0);
			if(epService.updateCommon(se) == 1){				
				return 1;	//成功
			}else{
				return -2;	//种子积分转回给卖家挂卖记录失败，撤销失败
			}
		}else{
			return -1;	//修改t_ep_order表，即把买家购买数量清零失败，撤销失败
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
