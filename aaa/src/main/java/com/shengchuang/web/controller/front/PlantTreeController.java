package com.shengchuang.web.controller.front;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.HashMap;
import java.util.List; 
import java.util.Map;
import java.util.NavigableMap;
import java.util.TreeMap;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.shengchuang.core.AjaxJson;
import com.shengchuang.core.GridData;
import com.shengchuang.entity.BonusInfEntity;
import com.shengchuang.entity.BonusRepoEntity;
import com.shengchuang.entity.CurrencyInfoEntity;
import com.shengchuang.entity.GainLogEntity;
import com.shengchuang.entity.InoutRepoEntity;
import com.shengchuang.entity.MemberEntity;
import com.shengchuang.entity.ParamConfEntity;
import com.shengchuang.entity.PerforRepoEntity;
import com.shengchuang.entity.TreePlantStatEntity;
import com.shengchuang.service.BonusService;
import com.shengchuang.service.CurrencyInfoService;
import com.shengchuang.service.GainService;
import com.shengchuang.service.InOutRepoService;
import com.shengchuang.service.InvestRepoService;
import com.shengchuang.service.MemberService;
import com.shengchuang.service.PerforService;
import com.shengchuang.service.SystemParamService;
import com.shengchuang.service.TreeService;
import com.shengchuang.web.util.WebFrontSession;   
 
/**
 * 前台对于树的各种操作
 */
@Controller
@RequestMapping(value = "front/tree")
public class PlantTreeController{
	
	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	@Resource(name="treeService")
	private TreeService commonService;
	@Autowired
	private SystemParamService systemParamService;
	@Autowired
	private CurrencyInfoService currencyInfoService;
	@Autowired
	private InOutRepoService inOutRepoService;
	@Autowired
	private InvestRepoService investRepoService;
	@Autowired
	private MemberService memberService;
	@Autowired
	private BonusService bonusService;
	@Autowired
	private PerforService  perforService;
	@Autowired
	private GainService  gainService;
	
	private static Integer currentMemId;	//当前操作人的id
	
	
	/**
	 * 查
	 */
	@ResponseBody
	@RequestMapping("/findTree")
	public List<Map> findCommon(HttpServletRequest httpServletRequest,Model model,Integer page, String types) {
		page=1;
		int curId = WebFrontSession.getFrontMember(httpServletRequest).getId();
		List<Map> list = commonService.findCommon2(page, types, curId);
		List<Map> list2 = new ArrayList<>();
		for(Map m : list){
			Date d1 = (Date)m.get("plantTime");
			Date d2 = (Date)m.get("gainTime");
			Date d3 = (Date)m.get("overTime");
			m.put("plantTime", sdf.format(d1));
			m.put("gainTime", sdf.format(d2));
			m.put("overTime", sdf.format(d3));
			list2.add(m);
		}
		//int count = commonService.findCommonCount(types);
		return list;
	}
	
	/**
	 * 根据会员id查看其所有的树，这个可以应用在偷果实时，实时给出被偷玩家所有的树
	 * int id 被偷玩家的id
	 * 返回 List<TreePlantStatEntity>
	 */
	@ResponseBody
	@RequestMapping("/findTreesByMemId")
	public List<TreePlantStatEntity> findTreesByMemId(HttpServletRequest httpServletRequest,Model model,Integer id) {
		
		return commonService.findTreePlantsByMemid(id);
	}
	
	/**
	 * 增。
	 * 
	 * 如果钱不够，增加失败返回-2；
	 * 支付密码不对返回-1；
	 * 特殊错误导致不能增加，返回-3；
	 * 银树激活不够10个、无资格种金树返回-4；
	 * 银树已经种满10颗了，还要种银树，则失败并返回-5；
	 * 金树已经种满5颗了，还要种金树，则失败并返回-6；
	 * 
	 * 成功增加返回1；
	 * 成功重复种植同一个棵树返回2 
	 */
	@ResponseBody
	@RequestMapping("/addTree")
	public AjaxJson addCommon(HttpServletRequest httpServletRequest, TreePlantStatEntity c, String tradePwd) {

		AjaxJson j = new AjaxJson();
		Map<String, Object> jmap = new HashMap<>();
		
		Date now = new Date();
		
		//当前用户实体，在种树成功，给Tree上面各个推荐人提成时用
		MemberEntity mber = WebFrontSession.getFrontMember(httpServletRequest);
		//当前用户id
		int curId = WebFrontSession.getFrontMember(httpServletRequest).getId();
		//给全局变量赋值，这一步在bonusRecorder（）方法里有用
		currentMemId = curId;
		//当前用户编号
		String curMemNum = WebFrontSession.getFrontMember(httpServletRequest).getMemNum();
		//当前系统时间，可用来创建种植时间、第一次收益时间、过期时间
		Date d = new Date();
		//当前用户所有关于钱的信息，比如余额
		CurrencyInfoEntity curreninfo = currencyInfoService.findOneCurrenInfoBymemNum(curMemNum);
		//当前用户余额
		BigDecimal moneyLeft = curreninfo.getSeedsPenn();
		//当前用户种的所有树的基本信息
		List<Map> allTrees = commonService.findCommonByCurId(curId, c.getTreeType());
		//配置参数的实体类，只有一条，储藏着金银树多久收货一次、种一颗金银树多少钱等全局基本配置
		ParamConfEntity pce = systemParamService.findParamById(1);
		
		//返回的是银树产能周期，如一天，单位为分钟
		int yszq = pce.getYsCapaCycle();	
		//返回的是金树产能周期，如一天，单位为分钟
		int jszq = pce.getJsCapaCycle();
		//种一颗银树的价格
		BigDecimal ysPrice = pce.getYszzIntegral();
		//种一颗金树的价格
		BigDecimal jsPrice = pce.getJszzIntegral();
		
		//当前会员已经种植银树的数量，根据这个可以判断是否有资格种金树
		int yinshuAmount = commonService.findAllByMemId(curId, 0).size();
		
		//首先，看看余额够不够，不够返回-2
		if(c.getTreeType() == 0){
			if(moneyLeft.compareTo(ysPrice)<0){				
				//return -2;
				jmap.put("result_type", -2);
				j.setAttributes(jmap);
				return j;
			}
			
		}else if(c.getTreeType() == 1){
			if(moneyLeft.compareTo(jsPrice)<0){
				//return -2;
				jmap.put("result_type", -2);
				j.setAttributes(jmap);
				return j;
			}
		}
		
		//然后，钱够的话，看看支付密码对不对，不对返回-1
		if(memberService.findForTrade(curId, tradePwd)==null){
			//return -1;
			jmap.put("result_type", -1);
			j.setAttributes(jmap);
			return j;
		}
		
		//到这一步，说明钱也够、交易密码也对，先做一些基本设置
		c.setMemid(curId);	//设置种植人的id
		c.setPlantTime(d);	//设置种植时间	
		c.setWgjCount(pce.getWgjCount().intValue());
		c.setPtgjCount(pce.getPtgjCount().intValue());
		//紧急新增的4个属性设定
		if(c.getTreeType() == 0){
			c.setCapaCycle(pce.getYsCapaCycle());
			c.setCapaLimit(pce.getYsCapaLimit());
			c.setTqIntegral(pce.getYstqIntegral());
			c.setZzIntegral(pce.getYszzIntegral());
			c.setCapacity(pce.getYsCapacity());
		}else if(c.getTreeType() == 1){
			c.setCapaCycle(pce.getJsCapaCycle());
			c.setCapaLimit(pce.getJsCapaLimit());
			c.setTqIntegral(pce.getJstqIntegral());
			c.setZzIntegral(pce.getJszzIntegral());
			c.setCapacity(pce.getJsCapacity());
		}
		
	    //然后判断到底要种的到底是金树还是银树，以及是第几个树, 增加记录，返回1
	    //当要种银树时
		if(c.getTreeType() == 0){
//			Date ysgaintime = new Date(d.getTime() + yszq*60*1000);
			//收益5次  为了点击5次需要+1 否则会存在少收益一次的现象
			int ysCapaLimit = pce.getYsCapaLimit() + 1; 
			Date overtimeDate = new Date(d.getTime() + (long)yszq*60*1000*ysCapaLimit);
//			c.setGainTime(ysgaintime);	
			c.setOverTime(overtimeDate);
			if(allTrees.size()==0){//用户从未种植过  执行新增操作
				c.setTreeNo(1);
				if(commonService.addCommon(c)==1)
					currencyInfoService.reduceMoneyByMemId(ysPrice, curId);
				
				//在收支明细表里留下该条记录
				String desc = 1+"号树种植";
				BigDecimal newMoneyLeft = currencyInfoService.findOneCurrenInfoBymemNum(curMemNum).getSeedsPenn();
//				addInOutRepo(curMemNum, 5, ysPrice.negate(), moneyLeft, newMoneyLeft, desc, new Date());
				
				//***************************start*****************************
				BonusRepoEntity bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(curMemNum,1);
				if(bonusRepo==null){
					//新增一条新的记录进去
					inOutRepoService.insertBonusRepo(curMemNum,1);
					//再查询一遍  查询出来 
					bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(curMemNum,1);
				}
				//****************************end****************************
				
				inOutRepoService.add(curMemNum, 5, ysPrice.negate(), moneyLeft, newMoneyLeft, desc, new Date(),bonusRepo.getId());
				
				//在投资记录表里增加记录
				investRepoService.add(d, ysPrice, 1, curMemNum);
				//**********************add by tongzm  start 记录种植信息  插入动作
				PerforRepoEntity perforRepo = new PerforRepoEntity();
				perforRepo.setMemId(currentMemId);
				perforRepo.setMemNum(curMemNum);
				perforRepo.setTreeNum(1);
				perforRepo.setPlantType(0);//0银树
				perforRepo.setSeedSalar(ysPrice);
				perforRepo.setPlantTime(new Date());
				perforService.addPerfor(perforRepo);
				//*********************add by tongzm end
				//给推荐人们提成
				findFather(mber, 0, ysPrice);
				
				//**************成功返回*******************
				//return 1;
				jmap = packMap(curId);
				j.setAttributes(jmap);
				return j;
			}else if (allTrees.size()>0){//用户已经种植过  执行更新操作
				if(allTrees.size()>=10){		//如果说会员的银树10颗已经全部激活，看看有没有死的，没有就不能再种银树了
					int deadCount = 0;
					for (Map map : allTrees) {
//						if(d.after((Date)map.get("overTime")))
						if((int)map.get("isGain")== 3)
							deadCount++;
					}
					if(deadCount == 0){		//10棵种满，又没有死银树，立即结束
						//return -5;
						jmap.put("result_type", -5);
						j.setAttributes(jmap);
						return j;
					}
					
				}
				
				for (Map map : allTrees) {
//					if(d.after((Date)map.get("overTime"))){//收益次数30 产能耗尽 可以重新种植
					if((int)map.get("isGain")== 3){
						int newTreeNo = (int)map.get("treeNo");
						int treeId = (int)map.get("id");
						c.setTreeNo(newTreeNo);
						c.setGainCounts(0);
						c.setId(treeId);
						c.setIsGain(0);
						//return commonService.updateCommon(c);//种植循环
						if(commonService.updateCommon(c)==1)
							currencyInfoService.reduceMoneyByMemId(ysPrice, curId);
						
						//在收支明细表里留下该条记录
						String desc = newTreeNo+"号树种植";
						BigDecimal newMoneyLeft = currencyInfoService.findOneCurrenInfoBymemNum(curMemNum).getSeedsPenn();
//						addInOutRepo(curMemNum, 5, ysPrice.negate(), moneyLeft, newMoneyLeft, desc, new Date());
						//***************************start*****************************
						BonusRepoEntity bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(curMemNum,1);
						if(bonusRepo==null){
							//新增一条新的记录进去
							inOutRepoService.insertBonusRepo(curMemNum,1);
							//再查询一遍  查询出来 
							bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(curMemNum,1);
						}
						//****************************end****************************
						inOutRepoService.add(curMemNum, 5, ysPrice.negate(), moneyLeft, newMoneyLeft, desc, new Date(),bonusRepo.getId());
						//在投资记录表里增加记录
						investRepoService.add(d, ysPrice, newTreeNo, curMemNum);
						//**********************add by tongzm  start 记录种植信息  插入动作
						PerforRepoEntity perforRepo = new PerforRepoEntity();
						perforRepo.setMemId(currentMemId);
						perforRepo.setMemNum(curMemNum);
						perforRepo.setTreeNum(newTreeNo);
						perforRepo.setPlantType(0);//0银树
						perforRepo.setSeedSalar(ysPrice);
						perforRepo.setPlantTime(new Date());
						perforService.addPerfor(perforRepo);
						//*********************add by tongzm end
						
						//给推荐人们提成
						findFather(mber, 0, ysPrice);
						
						//之前冻结的该树的收益全部划到收益钱包（静态解冻）,并且静态冻结减少相应额度，并且该树的收益清零,增加收支记录
						GainLogEntity gle = gainService.find(curMemNum, newTreeNo);
						if(gle !=null){
							BigDecimal money = gle.getGainSalar();
							//①增加收支记录
							BigDecimal jdMoneyLeft = currencyInfoService.findByMemId(curId).getStatJDWallet();
							BigDecimal djMoneyLeft = currencyInfoService.findByMemId(curId).getStatDJWallet();
							BigDecimal newJdMoneyLeft = jdMoneyLeft.add(money);
							BigDecimal newDjMoneyLeft =  djMoneyLeft.subtract(money);
							
							//***************************start*****************************
							bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(curMemNum,1);
							if(bonusRepo==null){
								//新增一条新的记录进去
								inOutRepoService.insertBonusRepo(curMemNum,1);
								//再查询一遍  查询出来 
								bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(curMemNum,1);
							}
							//****************************end****************************
							
							inOutRepoService.add(curMemNum, 2, money, jdMoneyLeft, newJdMoneyLeft, "产能划入", now,bonusRepo.getId());
							inOutRepoService.add(curMemNum, 1, money.negate(), djMoneyLeft, newDjMoneyLeft, "产能划出", now,bonusRepo.getId());
							//重新种植成功 删除t_gain_log  对应重新种植的树 ####################
							gainService.deleteByMemNum_treeNo(curMemNum,newTreeNo);
							
							//②收益钱包、冻结钱包做相应调整
							currencyInfoService.addYuE("statJDWallet", money, curId);
							currencyInfoService.reduceYuE("statDJWallet", money, curId);
							//③树在t_gain_log的收益积累清零
							gle.setGainSalar(new BigDecimal(0));
							gainService.update(gle);
						}
						
						//**************成功返回*******************
						//return 1;
						jmap = packMap2(curId);
						j.setAttributes(jmap);
						return j;
					}
				}
				int maxTreeNo = commonService.findMaxTreeNo(curId, 0);
				int finaltreeNo = ++maxTreeNo;
				c.setTreeNo(finaltreeNo);
				//return commonService.addCommon(c);
				if(commonService.addCommon(c)==1)
					currencyInfoService.reduceMoneyByMemId(ysPrice, curId);
				
				//在收支明细表里留下该条记录
				String desc = finaltreeNo+"号树种植";
				BigDecimal newMoneyLeft = currencyInfoService.findOneCurrenInfoBymemNum(curMemNum).getSeedsPenn();
//				addInOutRepo(curMemNum, 5, ysPrice.negate(), moneyLeft, newMoneyLeft, desc, new Date());
				//***************************start*****************************
				BonusRepoEntity bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(curMemNum,1);
				if(bonusRepo==null){
					//新增一条新的记录进去
					inOutRepoService.insertBonusRepo(curMemNum,1);
					//再查询一遍  查询出来 
					bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(curMemNum,1);
				}
				//****************************end****************************
				
				inOutRepoService.add(curMemNum, 5, ysPrice.negate(), moneyLeft, newMoneyLeft, desc, new Date(),bonusRepo.getId());

				//在投资记录表里增加记录
				investRepoService.add(d, ysPrice, (++maxTreeNo), curMemNum);
				//**********************add by tongzm  start 记录种植信息  插入动作
				PerforRepoEntity perforRepo = new PerforRepoEntity();
				perforRepo.setMemId(currentMemId);
				perforRepo.setMemNum(curMemNum);
				perforRepo.setTreeNum(finaltreeNo);
				perforRepo.setPlantType(0);//0银树
				perforRepo.setSeedSalar(ysPrice);
				perforRepo.setPlantTime(new Date());
				perforService.addPerfor(perforRepo);
				//*********************add by tongzm end

				//给推荐人们提成
				findFather(mber, 0, ysPrice);
				
				//**************成功返回*******************
				//return 1;
				jmap = packMap(curId);
				j.setAttributes(jmap);
				return j;
			}
		//当要种植金树时
		}else if(c.getTreeType() == 1){
			
			//先判断一下有没有种植金树的资格，即10颗银树有没有全部激活,无资格返回-4
			if(yinshuAmount<10){
				//return -4;
				jmap.put("result_type", -4);
				j.setAttributes(jmap);
				return j;
			}
			
//			Date jsgaintime = new Date(d.getTime() + jszq*60*1000);
			//收益5次  为了点击5次需要+1 否则会存在少收益一次的现象
			int jscapaLimit = pce.getJsCapaLimit() + 1;
			Date overtimeDate = new Date(d.getTime() + (long)jszq*60*1000*jscapaLimit);
//			c.setGainTime(jsgaintime);
			c.setOverTime(overtimeDate);
			if(allTrees.size()==0){//用户从未种植过  执行新增操作
				c.setTreeNo(11);
				//return commonService.addCommon(c);
				if(commonService.addCommon(c)==1)
					currencyInfoService.reduceMoneyByMemId(jsPrice, curId);
				
				//在收支明细表里留下该条记录
				String desc = 11+"号树种植";
				BigDecimal newMoneyLeft = currencyInfoService.findOneCurrenInfoBymemNum(curMemNum).getSeedsPenn();
//				addInOutRepo(curMemNum, 5, jsPrice.negate(), moneyLeft, newMoneyLeft, desc, new Date());
				//***************************start*****************************
				BonusRepoEntity bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(curMemNum,1);
				if(bonusRepo==null){
					//新增一条新的记录进去
					inOutRepoService.insertBonusRepo(curMemNum,1);
					//再查询一遍  查询出来 
					bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(curMemNum,1);
				}
				//****************************end****************************
				
				inOutRepoService.add(curMemNum, 5, jsPrice.negate(), moneyLeft, newMoneyLeft, desc, new Date(),bonusRepo.getId());

				//在投资记录表里增加记录
				investRepoService.add(d, jsPrice, 11, curMemNum);
				//**********************add by tongzm  start 记录种植信息  插入动作
				PerforRepoEntity perforRepo = new PerforRepoEntity();
				perforRepo.setMemId(currentMemId);
				perforRepo.setMemNum(curMemNum);
				perforRepo.setTreeNum(11);
				perforRepo.setPlantType(1);//0金树
				perforRepo.setSeedSalar(jsPrice);
				perforRepo.setPlantTime(new Date());
				perforService.addPerfor(perforRepo);
				//*********************add by tongzm end
				//给推荐人们提成
				findFather(mber, 0, jsPrice);
				
				//**************成功返回*******************
				//return 1;
				jmap = packMap(curId);
				j.setAttributes(jmap);
				return j;
			}else if (allTrees.size()>0){//用户已经种植过  执行更新操作
				if(allTrees.size()>=5){		//如果说会员的金树5颗已经全部激活，看看有没有死的，没有就不能再种金树了
					int deadCount = 0;
					for (Map map : allTrees) {
//						if(d.after((Date)map.get("overTime")))
						if((int)map.get("isGain")== 3)
							deadCount++;
					}
					if(deadCount == 0){		//没有死树，立即结束
						//return -6;
						jmap.put("result_type", -6);
						j.setAttributes(jmap);
						return j;
					}
				}
				
				for (Map map : allTrees) {
//					if(d.after((Date)map.get("overTime"))){//收益次数30 产能耗尽 可以重新种植
					if((int)map.get("isGain")== 3){
						int newTreeNo = (int)map.get("treeNo");
						int treeId = (int)map.get("id");
						c.setTreeNo(newTreeNo);
						c.setGainCounts(0);
						c.setId(treeId);
						c.setIsGain(0);
						//return commonService.updateCommon(c);//种植循环
						if(commonService.updateCommon(c)==1)
							currencyInfoService.reduceMoneyByMemId(jsPrice, curId);
						
						//在收支明细表里留下该条记录
						String desc = newTreeNo+"号树种植";
						BigDecimal newMoneyLeft = currencyInfoService.findOneCurrenInfoBymemNum(curMemNum).getSeedsPenn();
//						addInOutRepo(curMemNum, 5, jsPrice.negate(), moneyLeft, newMoneyLeft, desc, new Date());

						//***************************start*****************************
						BonusRepoEntity bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(curMemNum,1);
						if(bonusRepo==null){
							//新增一条新的记录进去
							inOutRepoService.insertBonusRepo(curMemNum,1);
							//再查询一遍  查询出来 
							bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(curMemNum,1);
						}
						//****************************end****************************
						
						inOutRepoService.add(curMemNum, 5, jsPrice.negate(), moneyLeft, newMoneyLeft, desc, new Date(),bonusRepo.getId());
						
						//在投资记录表里增加记录
						investRepoService.add(d, jsPrice, newTreeNo, curMemNum);
						//**********************add by tongzm  start 记录种植信息  插入动作
						PerforRepoEntity perforRepo = new PerforRepoEntity();
						perforRepo.setMemId(currentMemId);
						perforRepo.setMemNum(curMemNum);
						perforRepo.setTreeNum(newTreeNo);
						perforRepo.setPlantType(1);//1金树
						perforRepo.setSeedSalar(jsPrice);
						perforRepo.setPlantTime(new Date());
						perforService.addPerfor(perforRepo);
						//*********************add by tongzm end

						//给推荐人们提成
						findFather(mber, 0, jsPrice);
						
						//之前冻结的该树的收益全部划到收益钱包（静态解冻）,并且静态冻结减少相应额度，并且该树的收益清零,增加收支记录
						GainLogEntity gle = gainService.find(curMemNum, newTreeNo);
						BigDecimal money = BigDecimal.ZERO;
						if(gle !=null ){
							money = gle.getGainSalar();
						}
						//①增加收支记录
						BigDecimal jdMoneyLeft = currencyInfoService.findByMemId(curId).getStatJDWallet();
						BigDecimal djMoneyLeft = currencyInfoService.findByMemId(curId).getStatDJWallet();
						BigDecimal newJdMoneyLeft = jdMoneyLeft.add(money);
						BigDecimal newDjMoneyLeft =  djMoneyLeft.subtract(money);
						
						//***************************start*****************************
						bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(curMemNum,1);
						if(bonusRepo==null){
							//新增一条新的记录进去
							inOutRepoService.insertBonusRepo(curMemNum,1);
							//再查询一遍  查询出来 
							bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(curMemNum,1);
						}
						//****************************end****************************
						
						inOutRepoService.add(curMemNum, 2, money, jdMoneyLeft, newJdMoneyLeft, "产能划入", now,bonusRepo.getId());
						inOutRepoService.add(curMemNum, 1, money.negate(), djMoneyLeft, newDjMoneyLeft, "产能划出", now,bonusRepo.getId());
						//重新种植成功 删除t_gain_log  对应重新种植的树 ####################
						gainService.deleteByMemNum_treeNo(curMemNum,newTreeNo);
						//②收益钱包、冻结钱包做相应调整
						currencyInfoService.addYuE("statJDWallet", money, curId);
						currencyInfoService.reduceYuE("statDJWallet", money, curId);
						//③树在t_gain_log的收益积累清零
						gle.setGainSalar(new BigDecimal(0));
						gainService.update(gle);
						
						//**************成功返回*******************
						//return 1;
						jmap = packMap2(curId);
						j.setAttributes(jmap);
						return j;
					}
				}
				int maxTreeNo = commonService.findMaxTreeNo(curId, 1);
				int finaltreeNo = ++maxTreeNo;
				c.setTreeNo(finaltreeNo);
				//return commonService.addCommon(c);
				if(commonService.addCommon(c)==1)
					currencyInfoService.reduceMoneyByMemId(jsPrice, curId);
				
				//在收支明细表里留下该条记录
				String desc = finaltreeNo+"号树种植";
				BigDecimal newMoneyLeft = currencyInfoService.findOneCurrenInfoBymemNum(curMemNum).getSeedsPenn();
//				addInOutRepo(curMemNum, 5, jsPrice.negate(), moneyLeft, newMoneyLeft, desc, new Date());

				//***************************start*****************************
				BonusRepoEntity bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(curMemNum,1);
				if(bonusRepo==null){
					//新增一条新的记录进去
					inOutRepoService.insertBonusRepo(curMemNum,1);
					//再查询一遍  查询出来 
					bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(curMemNum,1);
				}
				//****************************end****************************
				
				inOutRepoService.add(curMemNum, 5, jsPrice.negate(), moneyLeft, newMoneyLeft, desc, new Date(),bonusRepo.getId());
				
				//在投资记录表里增加记录
				investRepoService.add(d, jsPrice, (++maxTreeNo), curMemNum);

				//**********************add by tongzm  start 记录种植信息  插入动作
				PerforRepoEntity perforRepo = new PerforRepoEntity();
				perforRepo.setMemId(currentMemId);
				perforRepo.setMemNum(curMemNum);
				perforRepo.setTreeNum(finaltreeNo);
				perforRepo.setPlantType(1);//0金树
				perforRepo.setSeedSalar(jsPrice);
				perforRepo.setPlantTime(new Date());
				perforService.addPerfor(perforRepo);
				//*********************add by tongzm end
				
				//给推荐人们提成
				findFather(mber, 0, jsPrice);
				
				//**************成功返回*******************
				//return 1;
				jmap = packMap(curId);
				j.setAttributes(jmap);
				return j;
			}
		}else{
			//如果走到了这一步说明要种的既不是银树也不是金树，即treeType既不是0也不是1
			//，属于特殊错误，返回-3
			jmap.put("result_type", -3);
			j.setAttributes(jmap);
			return j;
		}
		return j;
	} 
	  
	/**
	 * 在收支明细表里留下该条记录
	 */
	/*public int addInOutRepo(String memNum, Integer bonusType, BigDecimal changeSalar,
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
	}    */ 
	
	/**
	 * 删
	 */
	@ResponseBody
	@RequestMapping("/deleteTree")
	public int deleteCommon(String id) {
		
		return commonService.deleteCommon(id);
	}     
	 
	/**
	 * 改 
	 */
	@ResponseBody
	@RequestMapping("/updateTree")
	public int updatePro(HttpServletRequest httpServletRequest,TreePlantStatEntity c) {
		 
		return commonService.updateCommon(c);
	} 
	
	/**
	 * 当客户点击刷新按钮时触发
	 */
	@ResponseBody
	@RequestMapping("/refreshTree")
	public int updateTree(HttpServletRequest httpServletRequest,TreePlantStatEntity c) {
		
		return commonService.updateCommon(c);
	} 
	
	/**
	 * 纯测试无实意
	 */
	/*@ResponseBody
	@RequestMapping("/a")
	public void triger(){
		MemberEntity m = memberService.selectMemEntiBymemNum("A00004");
		Integer counter = 0;
		findFather(m, counter, new BigDecimal(100));
	}*/

	/**
	 * 种植或者重新种植时，给父代提成钱
	 * @param m	当前会员的entity
	 * @param counter	计数器，可以记录当前处理的是第几代，请务必以0开始
	 * @param price	种树或者激活树花的钱
	 */
	public void findFather(MemberEntity m, Integer counter, BigDecimal price){
		
		if(m!=null){
			if(counter==0){
				//当前循环就是会员本身，无需拿提成，直接找父亲
				MemberEntity f = memberService.selectMemEntiBymemNum(m.getTjrNum());
				findFather(f, ++counter, price);
			}else if(counter<16 && counter>0){			
				if(m.getTjrNum()!=null){			
					//一：给父亲发钱，checkFather将检查父亲有没有资格获取提成，如果有会，自动打钱
					checkFather(counter, m, price);
					
					//接着找父亲的父亲，递归发钱
					MemberEntity f = memberService.selectMemEntiBymemNum(m.getTjrNum());
					findFather(f, ++counter, price);
				}else{
					//如果推荐人编号为0，说明到头了，到管理员那里了，不需要招管理的父亲了
					checkFather(counter, m, price);
				}
			}else{
				//超出15代了，递归终止
			}
		}else{
			//推荐人为空，递归终止！
		}
	}
	
	/**
	 * 种植或者重新种植时，给父代提成钱
	 * 
	 * dsmap:代数区间map，如：{0=0.05, 1=0.02, 2=0.01, 3=0.005, 4=0.003, 5=0.001}，
	 * =前面是集合的下表，它本身可能对应一个代，如2代，也可能对应一代数集合比如5~10代，千万小心！！！！
	 * =后面对应的提成比例，这个比较简单。
	 * 总共6个区间，等号前面的0对应1代，1对应2代，2对应3代，3对应4代，4对应5至10代，5对应11到15代。
	 * 等号后面的小数点是该给父会员拿的种树花的钱比例，种树人花了200种植了一颗银树，那么当前father是第4代
	 * father而且有资格拿提成，那么当前father获得的提成为0.005X200=1。
	 * 
	 * ztmap:直推map，如：{1=1, 3=2, 6=3, 15=4, 20=10, 50=15}，=号前面是直推人数，=后面是拿
	 * 的代数，以20=10为例，当直推人数大于等于20，小于50时，拿10代，也就是说你直推20个人、30个人、49个人都
	 * 是拿10代。
	 * 
	 * 结合举例，一个会员小明，他直推了23个人，那么首先可以确定他要拿10代，此时他的第10代儿子种树了，花了200元，
	 * 那么小明就可以拿提成，根据dsmap集合，key为4的对应5~10代，那么提成就应该为0.003X200=0.6元；然后小明
	 * 的第3代儿子也种树了，也是200元，那么小明作为一个第三代父亲，对应dsmap集合的key2，key2的value为0.01，
	 * 小明拿的提成为0.01X200=2;
	 * 
	 * 两个重要判断点举例：
	 * ①：if(小明的直推人数>20 && 小明的直推人数<50)
	 * ②：if(10>=小明当前相对于种树人的代数，肯定是父代)
	 * ③：else因为对比最后一个节点时，也就是直推人数50人以上那个节点，由于没有下一个节点了，所有直接判断直推人
	 *	     是否大于等于50.
	 */
	public void checkFather(int counter, MemberEntity m, BigDecimal price){
		Map<Integer, BigDecimal> dsmap = parseDsZt().get("dsmap");
		NavigableMap<Integer, Integer> ztmap = parseDsZt().get("ztmap");
		
		for (Map.Entry<Integer, Integer> e : ztmap.entrySet()) {
		    Map.Entry<Integer, Integer> next = ztmap.higherEntry(e.getKey()); // next
		    if(next != null){
		    	//首先根据会员的直推数量，锁定他最多能拿多少代
		    	if( m.getZtAmounts()>=e.getKey() && m.getZtAmounts()<next.getKey()){	//①
		    		//如果会员直推数量对应的最多能拿多少代大于等于他当前所处的代数，即验证通过，打款
		    		if(e.getValue()>=counter){											//②
		    			payFather(m.getId(), counter, price, dsmap);
		    		}
		    	}
		    }else{																		//③
		    	//当遍历到最后一个节点时，比如说要求直推人50个，已经没有了上限，只要大于50即可
		    	if( m.getZtAmounts()>=e.getKey()){     //直推人数>=50
		    		if(e.getValue()>=counter){
		    			payFather(m.getId(), counter, price, dsmap);
		    		}
		    	}
		    }
		}
	}

	/**
	 * checkFather方法验证通过后， 真真切切地要给推荐人打钱了
	 * counter:会员处于多少代
	 * price:树的价格，可能是金树价格，也可能是银树价格
	 */
	public void payFather(Integer memId, Integer counter, BigDecimal price, Map<Integer, BigDecimal> dsmap){
		
		if(counter==1){
			BigDecimal money = price.multiply(dsmap.get(0));	//根据比例算出实际拿多少钱的提成
			bonusRecorder(memId, money);						//做好奖金明细和收支明细的记录
			currencyInfoService.addYuE("dynWallet", money, memId);	//打钱
		}else if(counter==2){
			BigDecimal money = price.multiply(dsmap.get(1));
			bonusRecorder(memId, money);
			currencyInfoService.addYuE("dynWallet", money, memId);
		}else if(counter==3){
			BigDecimal money = price.multiply(dsmap.get(2));
			bonusRecorder(memId, money);
			currencyInfoService.addYuE("dynWallet", money, memId);
		}else if(counter==4){
			BigDecimal money = price.multiply(dsmap.get(3));
			bonusRecorder(memId, money);
			currencyInfoService.addYuE("dynWallet", money, memId);
		}else if(5<=counter && counter<=10){
			BigDecimal money = price.multiply(dsmap.get(4));
			bonusRecorder(memId, money);
			currencyInfoService.addYuE("dynWallet", money, memId);
		}else if(10<counter && counter<=15){
			BigDecimal money = price.multiply(dsmap.get(5));
			bonusRecorder(memId, money);
			currencyInfoService.addYuE("dynWallet", money, memId);
		}
	}
	
	/**
	 * 当给father结算完代数后，立即调用本方法，给t_bonus_inf和t_inout_report添加相应记录
	 * 
	 * @param request
	 * @param fMemId	受益人、father的会员id
	 * @param money		具体代数奖（提成）拿了多少钱
	 */
	public void bonusRecorder(Integer fMemId, BigDecimal money){
		
		MemberEntity father = memberService.findCommonById(fMemId);
		String fMemNum = father.getMemNum();
		Date now = new Date();
		
		//增加收支记录
		BigDecimal moneyLeft = currencyInfoService.findByMemId(fMemId).getDynWallet();
		BigDecimal newMoneyLeft = moneyLeft.add(money);
		
		//***************************start*****************************
		BonusRepoEntity bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(fMemNum,1);
		if(bonusRepo==null){
			//新增一条新的记录进去
			inOutRepoService.insertBonusRepo(fMemNum,1);
			//再查询一遍  查询出来 
			bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(fMemNum,1);
		}
		//****************************end****************************
		
		inOutRepoService.add(fMemNum, 0, money, moneyLeft, newMoneyLeft, "种树提成", now,bonusRepo.getId());
		
		//增加奖金记录
		MemberEntity son = memberService.findCommonById(currentMemId);
		if(son!=null){
			//***************************start*****************************
			BonusRepoEntity bonusRepo2 =  inOutRepoService.queryBonusRepoByCreateDate(fMemNum,2);
			if(bonusRepo2==null){
				//新增一条新的记录进去
				inOutRepoService.insertBonusRepo(fMemNum,2);
				//再查询一遍  查询出来 
				bonusRepo2 =  inOutRepoService.queryBonusRepoByCreateDate(fMemNum,2);
			}
			//****************************end****************************
			
			Integer sMemId = son.getId();
			String sMemNum = son.getMemNum();
			BonusInfEntity bonus = new BonusInfEntity();
			bonus.setBonusDesc("种树提成");
			bonus.setBonusSalar(money);
			bonus.setBonusStatus(1);
			bonus.setBonusTime(now);
			bonus.setBonusType(0);
			bonus.setReceMemId(fMemId);
			bonus.setReceMemNum(fMemNum);
			bonus.setSendMemId(sMemId);
			bonus.setSendMemNum(sMemNum);
			bonus.setBonusRepoId(bonusRepo2.getId());
			bonusService.add(bonus);
		}
	}
	
	/**
	 * 专门解析从基础配置表里拿出的代数奖和直推参数字符串的方法，只有借助这些标准，
	 * checkFather方法才能有验证依据
	 * Ds:代数；   Zt:直推
	 */
	public Map<String, TreeMap> parseDsZt(){
		
		String dsjScale = systemParamService.findParamById(1).getDsjScale();
		String zhtParam = systemParamService.findParamById(1).getZhtParam();
		TreeMap<Integer, BigDecimal> dsmap = new TreeMap<>();
		
		String[] ds = dsjScale.split(",");
		for(int i=0; i<ds.length; i++){
			dsmap.put(i, new BigDecimal(ds[i]));
		}
		
		TreeMap<Integer, Integer> ztmap = new TreeMap<>();
		String[] zs = zhtParam.split(",");
		for(int i=0; i<zs.length; i++){
			String[] zss  = zs[i].split("_");
			ztmap.put(Integer.parseInt(zss[0]), Integer.parseInt(zss[1]));
		}
		
		Map<String, TreeMap> map = new TreeMap<>();
		map.put("dsmap", dsmap);
		map.put("ztmap", ztmap);
		return map;
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
	public Map<String, Object> packMap2(Integer MemId){
		
		Map<String, Object> map = new HashMap<>();
		CurrencyInfoEntity currencyInfo = currencyInfoService.findByMemId(MemId);
		map.put("result_type", 2);
		map.put("currencyInfo", currencyInfo);
		return map;
	}
}
