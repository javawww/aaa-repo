package com.shengchuang.web.controller.front;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List; 
import java.util.Map;
import java.util.Set;

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
import com.shengchuang.entity.Member;
import com.shengchuang.entity.MemberEntity;
import com.shengchuang.entity.StealLogEntity;
import com.shengchuang.entity.TreePlantStatEntity;
import com.shengchuang.service.BonusService;
import com.shengchuang.service.CurrencyInfoService;
import com.shengchuang.service.GjstService;
import com.shengchuang.service.InOutRepoService;
import com.shengchuang.service.MemberService;
import com.shengchuang.service.StealService;
import com.shengchuang.service.SystemParamService;
import com.shengchuang.service.TreeService;
import com.shengchuang.web.util.WebFrontSession;   
 
/**
 * 前台对于树的各种操作
 */
@Controller
@RequestMapping(value = "front/steal")
public class FrontStealController{
	
	@Resource(name="stealService")
	private StealService commonService;
	@Autowired
	private MemberService memberService;
	@Autowired
	private TreeService treeService;
	@Autowired
	private SystemParamService systemParamService;
	@Autowired
	private GjstService gjstService;
	@Autowired
	private CurrencyInfoService currencyInfoService;
	@Autowired
	private InOutRepoService inOutRepoService;
	@Autowired
	private StealService stealService;
	
	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	
	/**
	 * 查看可被偷取的会员，必填参数无，返回类型List
	 */
	@ResponseBody
	@RequestMapping("/findStealTargets")
	public List<MemberEntity> findCommon(HttpServletRequest httpServletRequest,Model model) {
		
		int curId = WebFrontSession.getFrontMember(httpServletRequest).getId();
		//int curId = 1;
		List<TreePlantStatEntity> treeList = treeService.findOtherTrees(curId);
		Set idsSet = new HashSet();
		List<MemberEntity> listM = new ArrayList<>();
		
		for(TreePlantStatEntity t : treeList){
			if(t.getIsGain()==1){
				idsSet.add(t.getMemid());
			}
		}
		if(idsSet.isEmpty()){
			return listM; 		//没有任何可被偷取的人，返回null listM
		}
		Iterator iterator = idsSet.iterator();
		while(iterator.hasNext()){
			int memid = (int) iterator.next();
			MemberEntity me = memberService.findCommonById(memid);
			listM.add(me);
		}
		return listM;
	}
	
	/**
	 * 查看我的偷取记录
	 */
	@ResponseBody
	@RequestMapping("/findMySteal")
	public List<StealLogEntity> findMySteal(HttpServletRequest httpServletRequest, Model model) {
		
		String curMemNum = WebFrontSession.getFrontMember(httpServletRequest).getMemNum();
		//String curMemNum = "A00000";
		List<StealLogEntity> list = commonService.findMySteal(curMemNum);
		if(!list.isEmpty()){
			for(StealLogEntity s : list){
				Date d = s.getStealTime();
				s.setShowTime(sdf.format(d));
			}
			return list;
		}else{
			return list; 	//没有记录，返回null list
		}
	}     
	
	/**
	 * 查看当前用户被偷取记录
	 */
	@ResponseBody
	@RequestMapping("/findWhoStealMe")
	public List<StealLogEntity> findWhoStealMe(HttpServletRequest httpServletRequest, Model model) {
		
		String curMemNum = WebFrontSession.getFrontMember(httpServletRequest).getMemNum();
		//String curMemNum = "A00000";
		
		List<StealLogEntity> list = commonService.findWhoStealMe(curMemNum);
		if(!list.isEmpty()){
			for(StealLogEntity s : list){
				Date d = s.getStealTime();
				s.setShowTime(sdf.format(d));
			}
			return list;
		}else{
			return list; 	//没有记录，返回null list
		}
	}     
	
	/**
	 * 当玩家要偷一个树时，首先检查是否可以偷。
	 * 只有当树产生了收益，且没有偷过，且该树还能偷（比如说在最大偷取次数10次以内）时才能偷
	 * 树的id
	 * @param id	树的id
	 * @return int，对应结果：
	 * 1	可偷
	 * 0	玩家已经收获了该树的所有果实，没有收益可偷了，不能偷
	 * -1	此树不在收益期，不能偷
	 * -2	已经偷过一次了，不能再偷
	 * -3	该树的被偷次数已达上限，虽然玩家有资格偷，但是没机会了，不能偷
	 * -4	神童过期
	 */
	@ResponseBody
	@RequestMapping("/canISteal")
	public int canISteal(HttpServletRequest httpServletRequest, Model model, Integer id) {
		
		/*String curMemNum = "A00001";
		id = 8;*/
		
		//偷与被偷玩家基本信息\
		MemberEntity mber = WebFrontSession.getFrontMember(httpServletRequest);
		String curMemNum = mber.getMemNum();
		TreePlantStatEntity  tree = treeService.findById(id);
		int btrId = memberService.findCommonById(tree.getMemid()).getId();	//btr：被偷人
		String btrMemNum = memberService.findCommonById(tree.getMemid()).getMemNum();
		
		Date now = new Date();
		//当前时间所在的树的收益起点和结束点
		Date gainTimeStart = tree.getGainTime();
		Date gainTimeOver = new Date(gainTimeStart.getTime() + tree.getCapaCycle()*60*1000);
		
		//根据玩家有无管家确定树的可被偷次数上限
		int stealTimesLimit = 0;	
		if(gjstService.findCommonByMemId(btrId).getGjStatus() == 1){
			stealTimesLimit = tree.getPtgjCount();
		}else{
			stealTimesLimit = tree.getWgjCount();
		}
		if(tree.getIsGain()==1){
//			if(now.after(tree.getGainTime())&&now.before(tree.getOverTime())){
			if(now.getTime() - tree.getGainTime().getTime() > 0 && now.getTime() - tree.getOverTime().getTime() < 0){
				//是否已经被偷取过
				boolean isStealed = treeService.countMyStealTimes(gainTimeStart, gainTimeOver, tree.getTreeNo(), curMemNum, btrMemNum);
				if(isStealed){
					if(treeService.countTreeStealTimes(gainTimeStart, gainTimeOver, tree.getTreeNo(), btrMemNum) < stealTimesLimit){
						if(gjstService.findCommonByMemId(mber.getId()).getStStatus() == 1){		
							return 1;	//可偷
						}else{
							return -4;	//神童过期
						}
					}else{
						return -3;	//该树的被偷次数已达上限，虽然玩家有资格偷，但是没机会了
					}
				}else{
					return -2;	//已经偷过一次了，不能再偷
				}
			}else{
				return -1;	//此树不在收益期
			}
		}else{
			return 0;	//玩家已经收获了该树的所有果实，没有收益可偷了
		}
	}
	
	/**
	 * 玩家偷取树的果实
	 * @param id	树的id
	 * @return int，对应结果：
	 * 1	偷取成功
	 * 0	偷取失败
	 */
	@ResponseBody
	@RequestMapping("/steal")
	public AjaxJson steal(HttpServletRequest rq, Model model, Integer id) {
		
		//偷与被偷玩家基本信息
		MemberEntity tmber  = WebFrontSession.getFrontMember(rq);
		String tMemNum = tmber.getMemNum();
		int tId = tmber.getId();
		TreePlantStatEntity tree = treeService.findById(id);
		MemberEntity bmber = memberService.findCommonById(tree.getMemid());
		String bMemNum = bmber.getMemNum();
		Date now = new Date();
		BigDecimal shySalar = tree.getShySalar();	//原树的收益
		Integer ptgjCount = tree.getPtgjCount();
		Integer wgjCount = tree.getWgjCount();
		BigDecimal tq = tree.getTqIntegral();	//偷取的额度
		AjaxJson aj = new AjaxJson();
		Map<String, Object> jmap = new HashMap<>();
		
		
		//检查一下树能不能被偷
		int result = canISteal(rq, model, id);
		if(result == 1){
			
			//一：该树的果实减少被偷的额度，该树可被偷次数减1
			tree.setShySalar(shySalar.subtract(tq));
			tree.setPtgjCount(--ptgjCount);
			tree.setWgjCount(--wgjCount);
			treeService.updateTreePlants(tree);
			
			//二：偷取人的动态钱包增加偷的额度
			currencyInfoService.addYuE("dynWallet", tq, tId);
			
			//三：收支记录表增加偷取人本次收入的记录
			BigDecimal moneyLeft = currencyInfoService.findByMemId(tId).getDynWallet();
			BigDecimal newMoneyLeft = moneyLeft.add(tq);
			
			//***************************start*****************************
			BonusRepoEntity bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(tMemNum,1);
			if(bonusRepo==null){
				//新增一条新的记录进去
				inOutRepoService.insertBonusRepo(tMemNum,1);
				//再查询一遍  查询出来 
				bonusRepo =  inOutRepoService.queryBonusRepoByCreateDate(tMemNum,1);
			}
			//****************************end****************************
			
			inOutRepoService.add(tMemNum, 0, tq, moneyLeft, newMoneyLeft, "偷取收入", now,bonusRepo.getId());
			
			//四：增加偷取记录，这条记录会被双方共同使用
			stealService.addCommon(now, tq, tMemNum, bMemNum, tree.getTreeNo());
			
			jmap = packMap(tId);
			aj.setAttributes(jmap);
			return aj;
		}else{
			jmap.put("result_type", result);
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
/*
if(gjstService.findCommonByMemId(mber.getId()).getStStatus() == 1){
return 1;	//可偷
}else{
return -5;	//管家过期
}*/