package com.shengchuang.web.controller.information;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.shengchuang.core.GridData;
import com.shengchuang.core.ResultCode;
import com.shengchuang.entity.EmailMsgEntity;
import com.shengchuang.entity.InformationEntity;
import com.shengchuang.entity.MemberEntity;
import com.shengchuang.model.EmailModel;
import com.shengchuang.service.EmailService;
import com.shengchuang.service.InfoService;
import com.shengchuang.web.controller.BaseController;
import com.shengchuang.web.util.WebAdminSession;
import com.shengchuang.web.util.WebFrontSession;
/**
 * 邮件管理
 * @author Administrator
 *
 */
@Controller
@RequestMapping(value = "front/information")
public class FrontInformationController extends BaseController{
	
	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	@Resource(name="infoService")
	private InfoService commonService;
	
	/**
	 * 会员查看公告列表
	 */
	@ResponseBody
	@RequestMapping("/findInfo")
	public List<InformationEntity> findCommon(HttpServletRequest httpServletRequest, Model model) {
		
		List<InformationEntity> list = commonService.findAllInfo();
		List<InformationEntity> list2 = new ArrayList<>();
		Date now = new Date();
		Date ctime = new Date();
		for(InformationEntity m : list){
//			if(now.after(m.getPubTime())){
			if(now.getTime() - m.getPubTime().getTime() > 0 ){
				ctime = m.getPubTime();
				m.setShowPubTime(sdf.format(ctime));
				list2.add(m);
			}
		}
		return list2;
	}
	
	/**
	 * 新闻页面点击查看详情
	 */
	@ResponseBody
	@RequestMapping("/findInfoXq")
	public InformationEntity findCommonXq(HttpServletRequest httpServletRequest, Model model, int id) {
		/*Map map =commonService.findCommonById(id);
		Date ctime = (Date) map.get("createTime");
		String s =sdf.format(ctime);
		map.put("createTime", s);*/
		return commonService.findInformationEntityById(id);
	}
	
	/**
	 * 管理员增
	 */
	@ResponseBody
	@RequestMapping("/addInfo")
	public int addCommon(HttpServletRequest httpServletRequest, InformationEntity m, boolean sendAll) {
		Date d = new Date();
		m.setCreateTime(d);
		if(m.getPubTime()==null){
			m.setPubTime(d);
		}
		int curId = WebFrontSession.getFrontMember(httpServletRequest).getId();
		m.setMemid(curId);	
		return commonService.addCommon(m);
	} 
	  
	/**
	 * 管理员改 
	 * 
	 * 因为对象m有Date类型的属性，所以js那头要用filter搞一搞，而本类又必须继承BaseController，这都是为了
	 * 让Date类型的属性直接赋值给自定义对象m
	 */
	@ResponseBody
	@RequestMapping("/updateInfo")
	public ResultCode updatePro(HttpServletRequest httpServletRequest, EmailMsgEntity m) {
		int result = commonService.updateCommon(m);
		return ResultCode.newRightCode(2);
	} 
	
	/**
	 * 管理员删
	 */
	@ResponseBody
	@RequestMapping("/deleteInfo")
	public ResultCode deleteCommon(String id) {
		
		int result = commonService.deleteCommon(id);
		return ResultCode.newRightCode(result);
	}
	
}
