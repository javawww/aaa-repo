package com.shengchuang.web.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List; 
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.shengchuang.core.GridData;
import com.shengchuang.core.ResultCode;
import com.shengchuang.entity.EmailMsgEntity;
import com.shengchuang.entity.MemberEntity;
import com.shengchuang.service.EmailService;
import com.shengchuang.service.MemberService;
import com.shengchuang.web.controller.BaseController;
import com.shengchuang.web.util.WebAdminSession; 
/**
 *  借用时，自动装配service bean要修改两处，举例为DdService,
	@Resource(name="ddService")
	private DdService commonService;
 * 
 * 
 *
 */
@Controller
@RequestMapping(value = "admin/email")
public class EmailController extends BaseController{
	
	@Resource(name="emailService")
	private EmailService commonService;
	@Autowired
	private MemberService memberService;
	
	/**
	 * 管理员收件箱页面
	 * 
	 * 由于现阶段收件箱真的很简单，会员只能给管理员发邮件，会员与会员之间不能发邮件，因此我在查询管理的发件箱时，
	 * 只要发件人“不是管理员”，那么它就是会员发给管理员的，那么该邮件就属于管理员收件箱。现在不需要解析收件人字
	 * 符串里面有没有管理员的id那么复杂的方式
	 *
	 * @param page 分页
	 * @param jhState 是否激活，分类查看用的;类型务必为String，否则一切看起来正常，唯独值为0时有暗病
	 * @return
	 */
	@ResponseBody
	@RequestMapping("/findEmail")
	public ResultCode findCommon(HttpServletRequest httpServletRequest, Model model, Integer page, String msgStatus) {
		
		GridData griddata = new GridData();
		int curId = WebAdminSession.getAdminMember(httpServletRequest).getId();
		String curMemNum = WebAdminSession.getAdminMember(httpServletRequest).getMemNum();
		
		/*int curId = 1;
		msgStatus ="0";
		String curMemNum="";
		page=1;*/
		
		//所有的收件
		List<Map> list = commonService.findCommon3(msgStatus, page, curId);	//发件人不会管理员id的所有邮件	
		int count = commonService.findInMailCount(msgStatus, curId);			//发件人不会管理员id的所有邮件的数量
		//把所有发件箱里的id换成会员编号
		for(Map m : list){
			int sendid = (int)m.get("sendid");
			MemberEntity me = memberService.findCommonById(sendid);
			if(me!=null){
				String singleSenderMemNum = me.getMemNum();
				m.put("senderMemNum", singleSenderMemNum);	//增加发送人会员编号
			}else{				
				m.put("senderMemNum", "");	//如果该id根本没有对应会员，但由于特殊原因邮件却存在，则会员编号设为空串
			}
			m.put("memNum", curMemNum);		//收件人会员编号设为管理员的编号
		}
		
		
		/* 
		 * 解析收件人字符串的方式暂时注释
		 * for(EmailMsgEntity ee : listAll){
			String[] ids = ee.getReceids().split(",");
			for(int i=0; i<ids.length; i++){
				if(Integer.parseInt(ids[i])==curId){
					list.add(ee);
					count++;
				}
			}
		}*/
		griddata.setData(list);
		griddata.setRecordsTotal(count);
		griddata.setPage(page);  
		return ResultCode.newRightCode(griddata);
	}
	
	/**
	 * 发件箱页面的查
	 */
	@ResponseBody
	@RequestMapping("/findOutEmail")
	public ResultCode findCommon2(HttpServletRequest httpServletRequest, Model model, Integer page, String jhState) {
		
		GridData griddata = new GridData();
		int curId = WebAdminSession.getAdminMember(httpServletRequest).getId();
		String curMemNum = WebAdminSession.getAdminMember(httpServletRequest).getMemNum();
		//所有的发邮件
		List<Map> list = commonService.findCommon2(page, jhState, curId);	
		int count = commonService.findOutMailCount(jhState, curId);
		//把所有发件箱里的id换成会员编号
		for(Map m : list){
			String ids = (String)m.get("receids");
			String[] idsA = ids.split(",");
			List<String> memNumsList = new ArrayList<String>();
			for(int i=0; i<idsA.length; i++){
				int singleReciverId = Integer.parseInt(idsA[i]);
				MemberEntity me = memberService.findCommonById(singleReciverId);
				if(me!=null){
					String singleReciverMemNum = me.getMemNum();
					memNumsList.add(singleReciverMemNum);					
				}
			}
			m.put("memNumsList", memNumsList);	//增加发件人会员编号list
			m.put("senderMemNum", curMemNum);	//增加发送人会员编号
		}
		
		
		griddata.setData(list);
		griddata.setRecordsTotal(count);
		griddata.setPage(page);  
		return ResultCode.newRightCode(griddata);
	}
	
	/**
	 * 管理员增
	 */
	@ResponseBody
	@RequestMapping("/addEmail")
	public ResultCode addCommon(HttpServletRequest httpServletRequest, EmailMsgEntity m, boolean sendAll) {
		Date d = new Date();
		List<MemberEntity> lme = memberService.findAll();
		StringBuilder sb = new StringBuilder();
		int curId = WebAdminSession.getAdminMember(httpServletRequest).getId();
		String curMemNum = WebAdminSession.getAdminMember(httpServletRequest).getMemNum();
		m.setSendTime(d);
		m.setSendid(curId);
		m.setMemNum(curMemNum);
		
		if(sendAll){
			for(MemberEntity mber : lme){
				sb = sb.append(mber.getId() + ",");  
			}
			m.setReceids(sb.toString());
		}else{
			String[] memNums = m.getReceids().split(",");
			if(memNums.length<=1){
				Map mber = memberService.findCommonByMemNum(m.getReceids());
				sb = sb.append(mber.get("id")); 
			}else{				
				for(int i=0;i<memNums.length;i++){
					Map mber = memberService.findCommonByMemNum(memNums[i]);
					sb = sb.append(mber.get("id") + ","); 
				}
			}
			m.setReceids(sb.toString());
		}
			
		int result = commonService.addCommon(m);
		return ResultCode.newRightCode(result);
	} 
	  
	/**
	 * 管理员发送邮件时校验输入的用户编号是否有误
	 */
	@ResponseBody
	@RequestMapping("/checkMemNum")
	public ResultCode checkMemNum(HttpServletRequest httpServletRequest, String memNums) {
		
		int result=0;
		if(memNums!=null && memNums!=""){			
			String[] a = memNums.split(",");
			if(a.length<=1){
				Map mber = memberService.findCommonByMemNum(memNums);
				if(mber!=null){
					result=1;
				}
			}else{				
				for(int i=0;i<a.length;i++){
					Map mber = memberService.findCommonByMemNum(a[i]);
					if(mber!=null){
						result=1;
					}else{
						result=0;
						break;
					}
				}
			}
		}
		
		return ResultCode.newRightCode(result);
	} 
	
	/**
	 * 管理员改 
	 * 
	 * 因为对象m有Date类型的属性，所以js那头要用filter搞一搞，而本类又必须继承BaseController，这都是为了
	 * 让Date类型的属性直接赋值给自定义对象m
	 */
	@ResponseBody
	@RequestMapping("/updateEmail")
	public ResultCode updatePro(HttpServletRequest httpServletRequest, EmailMsgEntity m) {
		int result = commonService.updateCommon(m);
		return ResultCode.newRightCode(2);
	} 
	
	/**
	 * 管理员删
	 */
	@ResponseBody
	@RequestMapping("/deleteEmail")
	public ResultCode deleteCommon(String id) {
		
		int result = commonService.deleteCommon(id);
		return ResultCode.newRightCode(result);
	}
	
	/**
	 * 当管理员点击查看邮件时，设定邮件为已读状态
	 */
	@ResponseBody
	@RequestMapping("/setRead")
	public int setRead(HttpServletRequest httpServletRequest, Model model, int id) {
		
		EmailMsgEntity em = new EmailMsgEntity();
		em.setId(id);
		em.setMsgStatus(1);
		return commonService.updateCommon(em);
	}
	
}
