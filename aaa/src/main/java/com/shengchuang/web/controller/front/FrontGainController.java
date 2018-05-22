package com.shengchuang.web.controller.front;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List; 
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.swing.event.TreeExpansionEvent;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.shengchuang.core.AjaxJson;
import com.shengchuang.entity.BonusInfEntity;
import com.shengchuang.entity.BonusRepoEntity;
import com.shengchuang.entity.CurrencyInfoEntity;
import com.shengchuang.entity.GainLogEntity;
import com.shengchuang.entity.MemberEntity;
import com.shengchuang.entity.ParamConfEntity;
import com.shengchuang.entity.TreePlantStatEntity;
import com.shengchuang.service.BonusService;
import com.shengchuang.service.CurrencyInfoService;
import com.shengchuang.service.GainService;
import com.shengchuang.service.InOutRepoService;
import com.shengchuang.service.MemberService;
import com.shengchuang.service.SystemParamService;
import com.shengchuang.service.TreeService;
import com.shengchuang.web.util.WebFrontSession;   
 
/**
 *  用户收获树的果实的类
 * 主要有两大方法，一个是查看是否有收益，一个是点击收获动作后，实际处理金钱变化的方法。
 */
@Controller
@RequestMapping(value = "front/gain")
public class FrontGainController{
	
	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	
	/*@Resource(name="gainService")
	private GainService commonService;*/
	@Autowired
	private MemberService memberService;
	@Autowired
	private TreeService treeService;
	@Autowired
	private SystemParamService systemParamService;
	@Autowired
	private CurrencyInfoService currencyInfoService;
	@Autowired
	private InOutRepoService inOutRepoService;
	@Autowired
	private GainService  gainService;
	@Autowired
	private BonusService  bonusService;
	
	/**
	 * 查看所有的树的收益状态、有的没的都要告诉前台
	 * 用户的基本信息我后台自然会从frontsession里获取
	 * 
	 * 每棵树的map里新增一个键值对，key是msg，value分别如下：
	 * 有收益，1；
	 * 没收益，-1；
	 * 树死了，-2；
	 * 当用户根本没种过一颗树时，List<Map>为空，不存在key、value；
	 * 
	 */
	@ResponseBody
	@RequestMapping("/findGain")
	public List<Map> findCommon(HttpServletRequest httpServletRequest,Model model) {
		
		//****首先创建常量池
		//现在的时间
		Date now = new Date();
		Long nowL = now.getTime();
		//当前用户的id与编号
		int curId = WebFrontSession.getFrontMember(httpServletRequest).getId();
		//int curId = 1;
		
		//他所有的树的集合
		List<Map> allTreeList = treeService.findCommonByMemberId(curId);
		//银树、金树产能周期
		ParamConfEntity paramConfEntity = systemParamService.findParamById(1);
		int ysCapaCycle = paramConfEntity.getYsCapaCycle();
		int jsCapaCycle = paramConfEntity.getJsCapaCycle();
		
		//当用户根本没种过一颗树时，立即结束
		if(allTreeList.isEmpty()){
			return allTreeList; 
		}
		for(Map m : allTreeList){
			//实时对比，常量池
			Date plantTime = (Date)m.get("plantTime");
			long plantTimeL = plantTime.getTime();
			Date overTime = (Date)m.get("overTime");
			Date gainTime = (Date)m.get("gainTime");
			//该树生长时长，单位分钟
			int growthTime = (int) (((nowL-plantTimeL)/1000)/60);
			int newysCapaCycle = growthTime/ysCapaCycle +1;
			//下面做判断
			//如果是银树
			if((int)m.get("treeType") == 0){
				//当当前的这颗树死了时，跳出本次循环，看下一棵
//				if(now.after(overTime)){
				if(now.getTime() -overTime.getTime() > 0){
					//*****设置isGain为0******
					TreePlantStatEntity treeEntity = new TreePlantStatEntity();
					treeEntity.setMemid(curId);
					treeEntity.setTreeNo((int)m.get("treeNo"));
					treeEntity.setIsGain(0);
					treeService.updateTreeByTreeNum_MemId(treeEntity);
					//*****设置isGain为0******
					
					m.put("msg", -2);
					continue;
				}
				//生长时间少于银树的生长周期，说明第一次的收获时间都没到，下一棵
				//if(growthTime<newysCapaCycle){
				for (int i = 1; i <= paramConfEntity.getYsCapaLimit(); i++) {
					//plantTimeL+((i-1)*ysCapaCycle) < nowL && nowL <plantTimeL+ysCapaCycle*1000*60*i
					if(nowL != plantTimeL*i){
						//*****设置isGain为0******
						TreePlantStatEntity treeEntity = new TreePlantStatEntity();
						treeEntity.setMemid(curId);
						treeEntity.setTreeNo((int)m.get("treeNo"));
						treeEntity.setIsGain(0);
						treeService.updateTreeByTreeNum_MemId(treeEntity);
						//*****设置isGain为0******
						
						m.put("msg", -1);
						break;
					}else{
						//如果收益已经自己摘过了，还是没收益
					/*	if(m.get("isOverTime")!=null && now.after((Date)m.get("isOverTime"))){
							
							//*****设置isGain为0******
							TreePlantStatEntity treeEntity = new TreePlantStatEntity();
							treeEntity.setMemid(curId);
							treeEntity.setTreeNo((int)m.get("treeNo"));
							treeEntity.setIsGain(0);
							treeService.updateTreeByTreeNum_MemId(treeEntity);
							//*****设置isGain为0******
							
							m.put("msg", 1);
							continue;
						}
						*/
						/*if((int)m.get("isGain") == 1){
						m.put("msg", -1);
						continue;
					}*/
						//到这里，说明生长时长在30次收益期之内，切大于一次收益期，自己没摘，那么一定有收益
//						m.put("msg", 1);	
//						//顺便set一下该条信息在数据库的gainCounts
//						int gainCounts = growthTime/ysCapaCycle;
//						m.put("gainCounts", gainCounts);
//						treeService.updateCommon(m);
					}
				}
				for (int i = 1; i <= paramConfEntity.getYsCapaLimit(); i++) {
					if(nowL == plantTimeL*i){
						m.put("msg", 1);	
						//顺便set一下该条信息在数据库的gainCounts
						int gainCounts = growthTime/ysCapaCycle;
						m.put("gainCounts", gainCounts);
						treeService.updateCommon(m);
						break;
					}
				}
				
			}else{
				//如果是金树
				//当当前的这颗树死了时，跳出本次循环，看下一棵
//				if(now.after(overTime)){
				if(now.getTime() - overTime.getTime() > 0 ){
					
					//*****设置isGain为0******
					TreePlantStatEntity treeEntity = new TreePlantStatEntity();
					treeEntity.setMemid(curId);
					treeEntity.setTreeNo((int)m.get("treeNo"));
					treeEntity.setIsGain(0);
					treeService.updateTreeByTreeNum_MemId(treeEntity);
					//*****设置isGain为0******
					
					m.put("msg", -2);
					continue;
				}
				//生长时间少于银树的生长周期，说明第一次的收获时间都没到，下一棵
				if(growthTime<jsCapaCycle){
					
					//*****设置isGain为0******
					TreePlantStatEntity treeEntity = new TreePlantStatEntity();
					treeEntity.setMemid(curId);
					treeEntity.setTreeNo((int)m.get("treeNo"));
					treeEntity.setIsGain(0);
					treeService.updateTreeByTreeNum_MemId(treeEntity);
					//*****设置isGain为0******
					
					m.put("msg", -1);
					continue;
				}else{
					//如果收益已经自己摘过了，还是没收益
//					if(m.get("isOverTime")!=null && now.after((Date)m.get("isOverTime"))){
					if(m.get("isOverTime") != null && now.getTime() - ((Date)m.get("isOverTime")).getTime() > 0){

						//*****设置isGain为0******
						TreePlantStatEntity treeEntity = new TreePlantStatEntity();
						treeEntity.setMemid(curId);
						treeEntity.setTreeNo((int)m.get("treeNo"));
						treeEntity.setIsGain(0);
						treeService.updateTreeByTreeNum_MemId(treeEntity);
						//*****设置isGain为0******
						
						m.put("msg", 1);
						continue;
					}
					/*if((int)m.get("isGain") == 1){
						m.put("msg", -1);
						continue;
					}*/
					//到这里，说明生长时长在30次收益期之内，切大于一次收益期，自己没摘，那么一定有收益
					//m.put("msg", 1);	
					//顺便set一下该条信息在数据库的gainCounts
					int gainCounts = growthTime/jsCapaCycle;
					m.put("gainCounts", gainCounts);
					
					//现在updateCommon的参数为map，不是TreePlantStatEntity，试试行不行
					treeService.updateCommon(m);
				}
			}	//end of big if-else
		}		//end of for( : )
		
		//返回给前台，前台根据msg的值确定每棵树到底处于有收益、无收益状态。
		return allTreeList;
	}
	
	
	/**
	 * 当用户点击采摘果实后，触发本方法，
	 */
	@ResponseBody
	@RequestMapping("/clickGain")
	public int updatePro(HttpServletRequest httpServletRequest, Integer treeNum) {
		//常量池
		//当前用户基本信息
		int curId = WebFrontSession.getFrontMember(httpServletRequest).getId();
		ParamConfEntity paramConfEntity = systemParamService.findParamById(1);
		/*int curId = 1;
		treeNum = 1;*/
		//当前时间
		Date now = new Date();
		Long nowL = now.getTime();
		int ysCapaCycle = paramConfEntity.getYsCapaCycle();
		int jsCapaCycle = paramConfEntity.getJsCapaCycle();
		Date plantTime = treeService.findTreeByTreeNum_MemId(curId, treeNum).getPlantTime();
		Long plantTimeL = plantTime.getTime();
		
		//金银树日分红每次偷取额度
		BigDecimal ystqIntegral = paramConfEntity.getYstqIntegral();
		BigDecimal jstqIntegral = paramConfEntity.getJstqIntegral();
		
		//首先修改t_plant_stat表的isGain为已手动收获
		TreePlantStatEntity treeEntity = new TreePlantStatEntity();
		treeEntity.setTreeNo(treeNum);
		treeEntity.setMemid(curId);
		treeEntity.setIsGain(1);
		
		//当为银树时
		if(treeNum<=10){
			Long isOverTimeL = ((int)((nowL-plantTimeL)/ysCapaCycle) + 1)*ysCapaCycle + plantTimeL;
			Date isOverTime = new Date(isOverTimeL);
			treeEntity.setIsOverTime(isOverTime);
			treeService.updateTreeByTreeNum_MemId(treeEntity);
			BigDecimal ysCapacity = paramConfEntity.getYsCapacity();
			currencyInfoService.addYuE("statDJWallet", ysCapacity, curId);
			return ysCapacity.intValue();
		//当为金树时
		}else{
			Long isOverTimeL = ((int)((nowL-plantTimeL)/jsCapaCycle) + 1)*jsCapaCycle + plantTimeL;
			Date isOverTime = new Date(isOverTimeL);
			treeEntity.setIsOverTime(isOverTime);
			treeService.updateTreeByTreeNum_MemId(treeEntity);
			BigDecimal jsCapacity = paramConfEntity.getJsCapacity();
			currencyInfoService.addYuE("statDJWallet", jsCapacity, curId);
			return jsCapacity.intValue();
		}
	} 
	  
	/**
	 * 纯粹为了测试，无实意
	 */
	/*@ResponseBody
	@RequestMapping("/aaa")
	public int deleteCommon(String id) {
		return 1;
	}  */   
    
	//XXXXXXXXXXXXXadd by tongzm 
	/**
	 * 前台首页AJAX 1S请求业务处理    
	 * 返回玩家种植金树银树所有种植状态   动态进行数据UPDATE
	 * 树状态：默认0没有收益 1可以收益 3产能耗尽 4没有收益(用户点击获取操作)
	 * PS 当前时间>收益时间    --> 树状态更新为1 可以收益   该时间段被用户点击收取,树状态更新为0没有收益
	 * 	     当前时间>产能耗尽时间  --> 树状态更新为3 产能耗尽
	 * @param request
	 * @param model
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value="updateTreePlants")
	public List<TreePlantStatEntity> updateTreePlants(HttpServletRequest request,Model model){
		List<TreePlantStatEntity>  treePlatns = new ArrayList<TreePlantStatEntity>();
		MemberEntity member = WebFrontSession.getFrontMember(request);
		treePlatns = treeService.findTreePlantsByMemid(member.getId());
		return treePlatns;
	}
	/**
	 * 玩家点击 产生日分红的金树银树   获取日分红收益 
	 * 更新字段 金树银树状态0 获取收益时间(next)  收益金额0
	 * @param request
	 * @param treeNum
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value="clickGainAndUpda")
	public AjaxJson clickGainAndUpda(HttpServletRequest request,Integer treeNo){
		AjaxJson j = new AjaxJson();
		Map<String, Object> maps = new HashMap<String, Object>();
		//定义最终更新的树对象
		TreePlantStatEntity up_treeplant = new TreePlantStatEntity();
		//定义玩家币种信息对象
		CurrencyInfoEntity  currenInfo = new CurrencyInfoEntity();
		//获取当前玩家对象
		MemberEntity member = WebFrontSession.getFrontMember(request);
		//用户ID和TREE编号  获取唯一植树对象   此处会返回多个对象导致异常 
		if(treeNo!=null){
			TreePlantStatEntity treeplant = treeService.findTreePlantByTnAnMeId(member.getId(),treeNo);
			//获取次数每次点击的收益金额
			BigDecimal shouYiJinE = treeplant.getShySalar();
			//将日分红收益金额 放置到 玩家静态冻结钱包中去
			currenInfo = currencyInfoService.findOneCurrenInfoBymemNum(member.getMemNum());
			BigDecimal origDJwallet = currenInfo.getStatDJWallet();
			BigDecimal finalDJwallet = origDJwallet.add(shouYiJinE);
			currenInfo.setStatDJWallet(finalDJwallet);
			//更新 金树银树信息
			up_treeplant.setId(treeplant.getId());
			//总分钟数
			long m = (treeplant.getGainTime().getTime() - treeplant.getPlantTime().getTime()) / (1000*60);
			//总分钟数 除以 产能周期  得到收益次数
			int gainCounts =(int)(m / treeplant.getCapaCycle());
			//金树 银树日分红产能周期 分钟 示例5分钟
			up_treeplant.setGainCounts(gainCounts);
			up_treeplant.setIsGain(0);
			up_treeplant.setShySalar(BigDecimal.ZERO);
			//和总收益次数相等时 说明为最后一次收益 
			if(gainCounts == treeplant.getCapaLimit()){
				up_treeplant.setIsGain(3);
				up_treeplant.setShySalar(BigDecimal.ZERO);
			}
			//更新树
			int result = treeService.updateTreePlants(up_treeplant);
			//记录种植树的收益信息****************************
			boolean isZero = shouYiJinE.compareTo(BigDecimal.ZERO) == 0 ;
			GainLogEntity gainLog = gainService.find(member.getMemNum(), treeNo);
			if(!isZero){
				//收益为0 不进行记录 避免前台多次点击造成重复数据
				if(gainLog == null){
					//add新增操作
					GainLogEntity add_gainLog = new GainLogEntity();
					add_gainLog.setGainSalar(shouYiJinE);
					add_gainLog.setGainTime(new Date());
					add_gainLog.setMemNum(member.getMemNum());
					add_gainLog.setTreeNo(treeNo);
					add_gainLog.setTreeType(treeplant.getTreeType());
					add_gainLog.setMemId(member.getId());
					gainService.add(add_gainLog);
				}else{
					//update更新操作
					BigDecimal finalGainSalar = gainLog.getGainSalar().add(shouYiJinE);
					gainLog.setGainSalar(finalGainSalar);
					gainService.update(gainLog);
				}
			}
			//*****************************************
			if(!isZero){
				//增加收支明细记录
				BigDecimal moneyLeft = currencyInfoService.findByMemId(member.getId()).getStatDJWallet();
				BigDecimal newMoneyLeft = moneyLeft.add(shouYiJinE);
				
				//***************************start*****************************
				BonusRepoEntity bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(member.getMemNum(),1);
				if(bonusRepo==null){
					//新增一条新的记录进去
					inOutRepoService.insertBonusRepo(member.getMemNum(),1);
					//再查询一遍  查询出来 
					bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(member.getMemNum(),1);
				}
				//****************************end****************************
				
				inOutRepoService.add(member.getMemNum(), 1, shouYiJinE, moneyLeft, newMoneyLeft, treeNo+"号树产能", new Date(),bonusRepo.getId());
				
				//***************************start*****************************
				BonusRepoEntity bonusRepo2 =  inOutRepoService.queryBonusRepoByCreateDate(member.getMemNum(),2);
				if(bonusRepo2==null){
					//新增一条新的记录进去
					inOutRepoService.insertBonusRepo(member.getMemNum(),2);
					//再查询一遍  查询出来 
					bonusRepo2 =  inOutRepoService.queryBonusRepoByCreateDate(member.getMemNum(),2);
				}
				//****************************end****************************
				//增加奖金明细记录
				BonusInfEntity bie = new BonusInfEntity();
				bie.setBonusDesc(treeNo+"号树产能");
				bie.setBonusSalar(shouYiJinE);
				bie.setBonusStatus(1);
				bie.setBonusTime(new Date());
				bie.setBonusType(1);
				bie.setFhMemId(member.getId());
				bie.setFhMemNum(member.getMemNum());
				bie.setBonusRepoId(bonusRepo2.getId());
				bonusService.add(bie);
				
				//更新余额
				currencyInfoService.updateCurrenInfoByMemId(currenInfo);
			}
			shouYiJinE = BigDecimal.ZERO;
			//收益成功返回玩家所有币种信息
			maps = packMap(member.getId());
			j.setAttributes(maps);
		}
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
}
