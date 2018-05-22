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
import com.shengchuang.entity.InoutRepoEntity;
import com.shengchuang.entity.MemberEntity;
import com.shengchuang.service.BonusService;
import com.shengchuang.service.InOutRepoService;
import com.shengchuang.web.util.WebFrontSession;   
 
/**
 * 前台对于收支明细的各种操作
 */
@Controller
@RequestMapping(value = "front/inout")
public class FrontInOutRepoController{
	
	@Resource(name="inOutRepoService")
	private InOutRepoService inOutRepoService;
	
	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	
	/**
	 * 会员查看收支明细
	 * 必填参数：无
	 * 返回类型：List<InoutRepoEntity>
	 */
	@ResponseBody
	@RequestMapping("/findInOutRepo")
	public List<InoutRepoEntity> findCommon(HttpServletRequest httpServletRequest,Model model,@RequestParam("bonusRepoId")Integer bonusRepoId) {
		
		String curMemNum = WebFrontSession.getFrontMember(httpServletRequest).getMemNum();
		
		List<InoutRepoEntity> list = inOutRepoService.findInOutRepoByMemNum(curMemNum,bonusRepoId);
		if(list!=null){
			for(InoutRepoEntity b : list){
				Date d = b.getCreateTime();
				b.setShowCreateTime(sdf.format(d));;
			}
			return list;
		}else{
			return list;
		}
	}
	
	/**
	 * 查看 收支明细   t_bonus_report
	 */
	@ResponseBody
	@RequestMapping(value = "findBonusReports")
	public List<BonusRepoEntity> findBonusReports(HttpServletRequest request,Model model){
		//当前登录会员  获取该会员所有收支明细 一方数据  操作类型为1收支明细
		MemberEntity member = WebFrontSession.getFrontMember(request);
		List<BonusRepoEntity> bonusRepos = inOutRepoService.queryBonusRepoByMemNum(member.getMemNum(),1);
		if(bonusRepos.size()>0){
			for (BonusRepoEntity bonusRepo : bonusRepos) {
				bonusRepo.setShowCreateDate(new SimpleDateFormat("yyyy-MM-dd").format(bonusRepo.getCreateDate()));
			}
		}
		return bonusRepos;
	}
}
