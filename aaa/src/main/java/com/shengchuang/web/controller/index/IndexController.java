package com.shengchuang.web.controller.index;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.shengchuang.entity.CurrencyInfoEntity;
import com.shengchuang.entity.GJSTStatusEntity;
import com.shengchuang.entity.MemberEntity;
import com.shengchuang.entity.ParamConfEntity;
import com.shengchuang.service.CurrencyInfoService;
import com.shengchuang.service.GjstService;
import com.shengchuang.service.SystemParamService;
import com.shengchuang.service.TreeService;
import com.shengchuang.web.controller.BaseController;
import com.shengchuang.web.util.WebFrontSession;
/**
 * 前台首页控制器  登录 主页
 * @author Administrator
 *
 */
@Controller
public class IndexController extends BaseController {

	private String 							msg;//异步交互 提示信息
	
	@Resource(name = "currencyInfoService")
	private CurrencyInfoService 			currencyInfoService;
	@Resource(name="systemParamService")
	private SystemParamService   			systemParamService;
	@Resource(name="treeService")
	private TreeService 					treeService;
	@Autowired
	private GjstService gjstService;
	
	/**
	 * 默认进入首页  存在SESSION则成功 否则 跳转登录
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/", method = { RequestMethod.GET })
	public String indexRedirect(HttpServletRequest request,Model model){
		MemberEntity member =  WebFrontSession.getFrontMember(request);
		if(member != null && !"".equals(member.getMemNum())){
			//校验通过  获取关联币种信息 
			CurrencyInfoEntity  currencyinfo = currencyInfoService.findOneCurrenInfoBymemNum(member.getMemNum());
			if(currencyinfo!=null){
				model.addAttribute("currencyinfo", currencyinfo);
			}
			//获取全网 初始参数 配置信息  放置SESSION中 全局获取
			int paramId = 1;
			ParamConfEntity paramConf = systemParamService.findParamById(paramId);
			if(paramConf!=null){
				model.addAttribute("paramrequest", paramConf);
				//全局参数 不可从 SESSION中获取  用的时候 一定去数据库获取最新数据
				//request.getSession().setAttribute("paramSession", paramConf);
			}
			//新增管家神童初始化，拿到该会员在gjst表的值后，放入request
			GJSTStatusEntity gjst = gjstService.findCommonByMemId(member.getId());
			request.setAttribute("gjst", gjst);
			return "front/index/index";
		}else{
			return "redirect:Login2";
		}
	}
	
	/**
	 * 返回当前登录用户 金树银树种植状态信息
	 * @param request
	 * @return
	 */
	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	@ResponseBody
	@RequestMapping(value = "front/tree/getTreeStateMaps")
	public List<Map> getTreeStateMaps(HttpServletRequest request){
		MemberEntity member = WebFrontSession.getFrontMember(request);
		//获取玩家种植金树/银树  种植状态  前端动态渲染种植效果
		if(member!=null){
			List<Map> maps = treeService.findCommonByMemberId(member.getId());
			if(maps.size()>0){
				//时间日期格式化
				for (Map map : maps) {
					map.put("plantTime", sdf.format((Date) map.get("plantTime")));//种植时间
					map.put("gainTime", sdf.format((Date) map.get("gainTime")));//收获时间
					map.put("overTime", sdf.format((Date) map.get("overTime")));//产能耗尽时间
				}
			}
			return maps;
		}
		return null;
	}
}
