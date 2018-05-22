package com.shengchuang.web.controller.message;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.shengchuang.core.GridData;
import com.shengchuang.core.ResultCode;
import com.shengchuang.entity.EmailMsgEntity;
import com.shengchuang.entity.MemberEntity;
import com.shengchuang.model.EmailModel;
import com.shengchuang.service.EmailService;
import com.shengchuang.service.MemberService;
import com.shengchuang.web.controller.BaseController;
import com.shengchuang.web.util.WebAdminSession;
import com.shengchuang.web.util.WebFrontSession;
/**
 * 邮件管理
 * @author Administrator
 *
 */
@Controller
@RequestMapping(value = "front/message")
public class FrontMessageController extends BaseController{
	
	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	@Resource(name="emailService")
	private EmailService commonService;
	@Autowired
	private MemberService memberService;
	
	/**
	 * 会员查看收件箱
	 * @return
	 */
	@ResponseBody
	@RequestMapping("/findEmail")
	public List<EmailModel> findCommon(HttpServletRequest httpServletRequest, Model model) {
		
		int curId = WebFrontSession.getFrontMember(httpServletRequest).getId();
		String curMemNum = WebFrontSession.getFrontMember(httpServletRequest).getMemNum();
		String adminMemNum = memberService.findCommonById(1).getMemNum();
		
		//首先拿出所有的邮件
		List<EmailMsgEntity> listEty = commonService.findAllEmailEntity();
		//用于返回给前台看的集合
		List<EmailModel> listEM = new ArrayList<>();
		
		//然后遍历每一条邮件，取出其收件人id字符串，转化成String数组
		for(EmailMsgEntity ee : listEty){
			String[] ids = ee.getReceids().split(",");
			
			//拿id数组的每一个元素和当前用户的id对比，如果吻合，说明当前的用户是收件人之一，那么就收下这条记录
			for(int i=0; i<ids.length; i++){
				if(Integer.parseInt(ids[i])==curId){
					EmailModel em = new EmailModel();
					em.setId(ee.getId());
					em.setSenderMemNum(adminMemNum);
					em.setReceiver(curMemNum);
					em.setTitle(ee.getMsgSubject());
					em.setSendTime(sdf.format(ee.getSendTime()));
					em.setMsgType(ee.getMsgType());
					em.setMsgStatus(ee.getMsgStatus());
					listEM.add(em);
					break;
				}
			}
			continue;
		}
		return listEM;
	}
	
	/**
	 * 会员收件箱页面点击查看详情
	 * 必填参数：邮件的id
	 * 返回类型：EmailMsgEntity对象
	 */
	@ResponseBody
	@RequestMapping("/findEmailXq")
	public EmailMsgEntity findCommonXq(HttpServletRequest httpServletRequest, Model model, Integer id) {
		
		EmailMsgEntity eme = commonService.findEmailMsgEntityById(id);
		EmailMsgEntity e = new EmailMsgEntity();
		e.setId(id);
		e.setMsgStatus(1);
		commonService.updateCommon(e);	//邮件社会已读
		return eme;
	}
	
	/**
	 * 会员查看发件箱列表页面
	 */
	@ResponseBody
	@RequestMapping("/findOutEmail")
	public List<EmailModel> findCommon2(HttpServletRequest httpServletRequest, Model model) {
		
		int curId = WebFrontSession.getFrontMember(httpServletRequest).getId();
		String curMemNum = WebFrontSession.getFrontMember(httpServletRequest).getMemNum();
		String adminMemNum = memberService.findCommonById(1).getMemNum();
		
		/*int curId=2;
		String curMemNum = "A00008";*/
		
		List<EmailMsgEntity> list = commonService.findOutMailsById(curId);
		List<EmailModel> listEM = new ArrayList<>();
		
		
		for(EmailMsgEntity e : list){
			EmailModel em = new EmailModel();
			em.setId(e.getId());
			em.setMsgType(e.getMsgType());
			em.setMsgStatus(e.getMsgStatus());
			em.setSenderMemNum(curMemNum);
			em.setReceiver(adminMemNum);
			em.setTitle(e.getMsgSubject());;
			em.setSendTime(sdf.format(e.getSendTime()));
			listEM.add(em);
		}
		return listEM;
	}

	/**
	 * 会员发件箱页面点击查看详情
	 * 必填参数：邮件的id
	 * 返回类型：EmailMsgEntity对象
	 */
	@ResponseBody
	@RequestMapping("/findOutEmailXq")
	public EmailMsgEntity findOutEmailXq(HttpServletRequest httpServletRequest, Model model, Integer id) {
		
		EmailMsgEntity eme = commonService.findEmailMsgEntityById(id);
		EmailMsgEntity e = new EmailMsgEntity();
		e.setId(id);
		e.setMsgStatus(1);
		commonService.updateCommon(e);	//邮件社会已读
		return eme;
	}
	
	/**
	 * 会员发邮件
	 * 必填参数：EmailMsgEntity对象（必须包含邮件的标题、内容、类型）
	 * 返回类型：int，对应处理结果：
	 * 1	发送成功
	 * 0	发送失败
	 */
	@ResponseBody
	@RequestMapping("/addEmail")
	public int addCommon(HttpServletRequest httpServletRequest, EmailMsgEntity m) {
		Date d = new Date();
		int curId = WebFrontSession.getFrontMember(httpServletRequest).getId();
		String curMemNum = WebFrontSession.getFrontMember(httpServletRequest).getMemNum();
		
		m.setSendTime(d);		//发送时间
		m.setMsgStatus(0);		//邮件状态未读
		m.setSendid(curId);		//发件人id
		m.setReceids("1");		//收件人一律是管理员
		m.setMemNum(curMemNum);	//发件人编号
		//邮件的标题、内容、邮件类型一律前台给到对象里了
		
		return commonService.addCommon(m);
	} 
	  
	/**
	 * 管理员改 
	 * 
	 * 因为对象m有Date类型的属性，所以js那头要用filter搞一搞，而本类又必须继承BaseController，这都是为了
	 * 让Date类型的属性直接赋值给自定义对象m
	 */
	/*@ResponseBody
	@RequestMapping("/updateEmail")
	public int updatePro(HttpServletRequest httpServletRequest, EmailMsgEntity m) {
		return commonService.updateCommon(m);
	} */
	
	/**
	 * 管理员删
	 */
	/*@ResponseBody
	@RequestMapping("/deleteEmail")
	public int deleteCommon(String id) {
		
		return commonService.deleteCommon(id);
	}*/
	
}
