package com.shengchuang.web.controller.front;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List; 
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.shengchuang.entity.BonusInfEntity;
import com.shengchuang.entity.BonusRepoEntity;
import com.shengchuang.service.BonusService;
import com.shengchuang.web.util.WebFrontSession;   
 
/**
 * 前台对于奖金的各种操作
 */
@Controller
@RequestMapping(value = "front/bonus")
public class FrontBonusController{
	
	@Resource(name="bonusService")
	private BonusService bonusService;
	
	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	
	/**
	 * 会员查看奖金明细
	 * 必填参数：无
	 * 返回类型：List<BonusRepoEntity>
	 */
	@ResponseBody
	@RequestMapping("/findBonusRepo")
	public List<BonusRepoEntity> findCommon(HttpServletRequest httpServletRequest,Model model) {
		
		String curMemNum = WebFrontSession.getFrontMember(httpServletRequest).getMemNum();
		
		List<BonusRepoEntity> list = bonusService.findBonusRepoByMemNum(curMemNum,2);
		if(list.size() > 0){
			for (BonusRepoEntity bonusRepo : list) {
				bonusRepo.setShowCreateDate(new SimpleDateFormat("yyyy-MM-dd").format(bonusRepo.getCreateDate()));
			}
		}
		
		return list;
	}
	
	/**
	 * 会员点击奖金明细里的详情
	 * 必填参数：具体被点击那条BonusRepoEntity记录的id
	 * 返回类型：List<BonusInfEntity>
	 */
	@ResponseBody
	@RequestMapping("/findBonusInf")
	public List<BonusInfEntity> findBonusInf(HttpServletRequest httpServletRequest,Model model,@RequestParam("bonusRepoId")Integer bonusRepoId) {
		
		int id = WebFrontSession.getFrontMember(httpServletRequest).getId();
		
		List<BonusInfEntity> list = bonusService.findBonusInfByMemId(id,bonusRepoId);
		
		if(list!=null){
			for(BonusInfEntity b : list){
				Date d = b.getBonusTime();
				b.setShowBonusTime(sdf.format(d));
			}
			return list;
		}else{
			return list;
		}
	}
	
	
	/**
	 * 纯测试用，无实意
	 */
	@ResponseBody
	@RequestMapping("/aaa")
	public int test(HttpServletRequest httpServletRequest, Model model) {
		
		return 1;
	}  
}
