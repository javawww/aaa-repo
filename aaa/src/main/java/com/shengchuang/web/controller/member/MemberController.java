package com.shengchuang.web.controller.member;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List; 
import java.util.Map;
import java.util.NavigableMap;
import java.util.TreeMap;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.shengchuang.core.AjaxJson;
import com.shengchuang.core.GridData;
import com.shengchuang.core.ResultCode;
import com.shengchuang.entity.CurrencyInfoEntity;
import com.shengchuang.entity.GJSTStatusEntity;
import com.shengchuang.entity.MemberEntity;
import com.shengchuang.entity.ParamConfEntity;
import com.shengchuang.model.MemberModel;
import com.shengchuang.model.RecommTreeModel;
import com.shengchuang.model.State;
import com.shengchuang.service.CurrencyInfoService;
import com.shengchuang.service.GjstService;
import com.shengchuang.service.MemberService;
import com.shengchuang.service.SystemParamService;
import com.shengchuang.web.controller.BaseController;
import com.shengchuang.web.util.WebAdminSession;

import com.alibaba.fastjson.JSON; 
/**
 *  借用时，自动装配service bean要修改两处，举例为DdService,
	@Resource(name="ddService")
	private DdService commonService;
 * 
 * 
 *
 */
@Controller
@RequestMapping(value = "admin/member")
public class MemberController extends BaseController{
	
	@Resource(name="memberService")
	private MemberService memberService;
	@Resource(name="currencyInfoService")
	private CurrencyInfoService currencyInfoService;
	@Autowired
	private GjstService gjstService;
	@Autowired
	private SystemParamService systemParamService;
	/**
	 * 点击左侧菜单栏按钮，进入相应页面
	 * @return 需要的页面
	 */
	@RequestMapping("/memberList")
	public String memberList(HttpServletRequest request, HttpServletResponse response, Model model){
		return "admin/member/memberList";
	}
	
	/**
	 * 点击左侧菜单栏按钮，进入相应页面
	 * @return 需要的页面
	 */
	@RequestMapping("/add")
	public String memberAdd(HttpServletRequest request, HttpServletResponse response, Model model){
		return "admin/member/memberAdd";
	}
	
	/**
	 * 点击左侧菜单栏按钮，进入相应页面
	 * @return 需要的页面
	 */
	/*@RequestMapping("/recommFigure")
	public String showTree(HttpServletRequest request, HttpServletResponse response, Model model){
		
		return "admin/member/recommFigure";
	}*/
	
	/**
	 * 查
	 * @param page 分页
	 * @param jhState 是否激活，分类查看用的;类型务必为String，否则一切看起来正常，唯独值为0时有暗病
	 * @return
	 */
	@ResponseBody
	@RequestMapping("/memberListdata")
	public ResultCode findCommon(HttpServletRequest httpServletRequest, Model model, 
			Integer page, String jhState, String djState, String memNum, String tjrMemNum) {
		
		/*
		 * 原查询方式，由于新增了查询条件，加上担心改动这些方法，影响到前台的调用，因此干脆不用
		 * List<Map> list = commonService.findCommon(page, jhState);
		 * int count = commonService.findCommonCount(jhState);*/
		
		List<Map> list = memberService.findMemberListFB(page, jhState, djState, memNum, tjrMemNum);
		int count = memberService.findCommonCountFB(jhState, djState, memNum, tjrMemNum);
		GridData griddata = new GridData();
		griddata.setData(list);
		griddata.setRecordsTotal(count);
		griddata.setPage(page);  
		
		
		//后端前台的js代码里，angular发送了“common/findCommon”，因此这里的return也是给它，它会在success方法里
		//以$scope.rows = page.data.data 接收griddata的data（也就是list），然后后端前台的jsp代码
		//里用 ng-repeat="row in rows" 遍历出list里每个对象。
		return ResultCode.newRightCode(griddata);
	}
	
	/**
	 * 管理员增
	 * -1 会员编号已经存在 新增失败
	 * -2 会员编号为空 提示 请勿重复提交
	 * -3 推荐人编号不存在 提示 请输入正确的推荐人编号
	 * 1新增成功
	 */
	@ResponseBody
	@RequestMapping("/addMember")
	public ResultCode addCommon(HttpServletRequest httpServletRequest, MemberEntity m ) {
		int result = 0;
		int result2 = 0;
		result = memberService.findmemberByNum(m.getMemNum());
		result2 = memberService.findmemberByNum(m.getTjrNum());
		if(result2 != 1){//推荐人编号不存在
			result = -3;
			return ResultCode.newRightCode(result);
		}else if(m.getMemNum() == null){//重复提交 会员编号为Null
			result = -2;
			return ResultCode.newRightCode(result);
		}else if(result == 1){//会员编号已经存在
			result = -1;
			return ResultCode.newRightCode(result);
		}else{//以上全部校验通过 执行新增操作
			ParamConfEntity pce = systemParamService.findParamById(1);
			//默认偷取次数，初始化gjst表用的
			int stealCount = pce.getWgjCount().intValue();
			Date d = new Date();
			m.setRegistTime(d);//创建时间 即 注册时间
			m.setJhState(0);//激活状态 默认0 未激活
			m.setGjLevel(0);//管家级别 默认0 普通管家
			m.setDjState(1);//冻结状态 默认0 冻结
			m.setZtAmounts(0);//直推数量 默认0
			m.setTeamAmounts(0);//团队数量 默认0
//		m.setTjrNum(WebAdminSession.getAdminMember(httpServletRequest).getMemNum());
			result = memberService.addCommon(m);
			MemberEntity new_m = memberService.selectMemEntiBymemNum(m.getMemNum());
			//如果勾选了激活状态为激活，那么才会生成激活日期，否则不生成其日期
//		if(m.getJhState() != null && m.getJhState() == 1)
//			m.setJhTime(d);
			//会员增加成功后，立马配置该会员关联的管家神童配置表
//		int memId = (int)commonService.findCommonByMemNum(WebAdminSession.getAdminMember(httpServletRequest).getMemNum()).get("id");
			int memId = new_m.getId();
			GJSTStatusEntity ge = new GJSTStatusEntity();
			ge.setMemId(memId);
			ge.setMemNo(m.getMemNum());
			ge.setGjSalar(new BigDecimal(0));
			ge.setStSalar(new BigDecimal(0));
			ge.setGjStatus(0);
			ge.setStStatus(0);
			ge.setStealCount(stealCount);
			gjstService.addCommon(ge);
			
			//创建一条关联此账号的币种信息数据
			CurrencyInfoEntity currencyInfo = new CurrencyInfoEntity(new BigDecimal(0), new BigDecimal(0), new BigDecimal(0), new BigDecimal(0), new BigDecimal(0), new BigDecimal(0), new BigDecimal(0), m.getMemNum(), memId);
			currencyInfoService.addCommon(currencyInfo);
			return ResultCode.newRightCode(result);
		}
	} 
	
	/**
	 * 管理员改 
	 * 
	 * 因为对象m有Date类型的属性，所以js那头要用filter搞一搞，而本类又必须继承BaseController，这都是为了
	 * 让Date类型的属性直接赋值给自定义对象m
	 */
	@ResponseBody
	@RequestMapping("/updateMember")
	public ResultCode updatePro(HttpServletRequest httpServletRequest, MemberEntity m) {
		int result = memberService.updateCommon(m);
		
		//更新与其关联的父级账号  直推个数  团队个数
		if(m.getJhState()!=null && m.getJhState()==1){//激活操作 执行关联更新
			updateOptFlag(m.getTjrNum(),0);
		}
		return ResultCode.newRightCode(result);
	} 
	
	/*
	 * 迭代循环 直到获取不到下一次更新的对象为止
	 */
	public void updateOptFlag(String tjrNum,int flag){
		MemberEntity updamem = new MemberEntity();
		//找父亲  存在 就更新父亲数据
		updamem = memberService.selectMemEntiBymemNum(tjrNum);
		if(updamem!=null){
			if(flag==0){
				updamem.setZtAmounts(updamem.getZtAmounts()+1);
				updamem.setTeamAmounts(updamem.getTeamAmounts()+1);
				flag++;
			}else{
				updamem.setTeamAmounts(updamem.getTeamAmounts()+1);
			}
			int result = memberService.updateCommon(updamem);
			updateOptFlag(updamem.getTjrNum(),flag);
		}
	}
	/**
	 * 管理员删
	 */
	@ResponseBody
	@RequestMapping("/deleteMember")
	public ResultCode deleteCommon(String id) {
		
		int result = memberService.deleteCommon(id);
		return ResultCode.newRightCode(result);
	}
	
	/**
	 * 推荐图 层级结构动态渲染
	 * @param request
	 * @param model
	 * @return
	 */
@RequestMapping("/recommFigure")
public String rendermenu(HttpServletRequest request,Model model){
		MemberEntity membersession = WebAdminSession.getAdminMember(request);
		MemberEntity member = memberService.findCommonById(membersession.getId());
		RecommTreeModel recommTree = getTreeNodeDto(member);
		String treemodels = "[";
		treemodels += JSON.toJSONString(recommTree);
		treemodels += "]";
		model.addAttribute("treemodels", treemodels);
		return "admin/member/recommFigure";
}
/**
 * 多叉树递归构建树结构
 */
public RecommTreeModel  getTreeNodeDto(MemberEntity member){
	List<MemberEntity> depList=memberService.selectAllMemsByjhState(1);
	RecommTreeModel rootNode=new RecommTreeModel();
	rootNode.setText(member.getMemNum()+"(直推"+member.getZtAmounts()+"人,团队"+member.getTeamAmounts()+"人)");
	rootNode.setMemNum(member.getMemNum());
	rootNode.setState(new State(true,true));
	if(depList.size()>0){
		rootNode=constructTree(rootNode, depList, 0);
	}
	return rootNode;
}
public static RecommTreeModel constructTree(RecommTreeModel rootNode, List<MemberEntity> orgList, int rootLevel){
	List<RecommTreeModel> childNodeList = new ArrayList<RecommTreeModel>();
	for(int i=0; i<orgList.size(); i++){
		MemberEntity org = orgList.get(i);
		if(org.getTjrNum()!=null && org.getTjrNum().equalsIgnoreCase(rootNode.getMemNum())){
			RecommTreeModel childNode = new RecommTreeModel();
			childNode.setMemNum(org.getMemNum());
			childNode.setText(org.getMemNum()+"(直推"+org.getZtAmounts()+"人,团队"+org.getTeamAmounts()+"人)");
			childNode.setState(new State(true,false));
			childNode.setParent(rootNode);
			childNode.setLevel(rootLevel+1);
			childNodeList.add(childNode);
		}
	}
	rootNode.setNodes(childNodeList);
	for(int j=0; j<childNodeList.size();j++){
		constructTree(childNodeList.get(j), orgList, ++rootLevel);
		--rootLevel;
	}		
	return rootNode;
}	
	
	
	/**
	 * 循环遍历 直至通过用户编号 查询不到儿子数据为止  即 遍历结束
	 * @param member
	 * @return
	 */
	
	public List<MemberEntity> hasNextMember(MemberEntity member){
		List<MemberEntity> members = memberService.findListByTjrNum(member.getMemNum());
		if(members.size()>0){
			List<RecommTreeModel> treemodels1 = new ArrayList<RecommTreeModel>();
			RecommTreeModel treemodel1 = null;
			for (MemberEntity memberEntity : members) {
				treemodel1 = new RecommTreeModel();
				treemodel1.setText(memberEntity.getMemNum()+"(直推"+members.size()+"人,团队"+"6"+"人)");
				treemodel1.setMemNum(memberEntity.getMemNum());
				treemodels1.add(treemodel1);
				hasNextMember(memberEntity);
			}
			
		}
		return members;
	}
	/**
	 * 添加会员时  校验添加的会员编号是否已经存在  
	 * 传过来的A00000 要确保数据库不存在A00000和a00000这两种形式，否则提示编号已经存在
	 * @param request
	 * @param model
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "validMemNum")
	public AjaxJson validMemNum(HttpServletRequest request,Model model,@RequestParam("memNum") String memNum){
		AjaxJson j = new AjaxJson();
		int result = memberService.findmemberByNum(memNum);
		if(result == 1){
			j.setSuccess(false);
			j.setMsg("会员编号已经存在,请重新输入");
		}else{
			j.setSuccess(true);
			j.setMsg("校验通过,可以使用");
		}
		
		return j;
	}
/**
 * 通过会员编号查询会员对应的会员信息，会显示在弹出框中
 * @param request
 * @param model
 * @param memNo
 * @return
 */
	@RequestMapping(value = "showMemInfoByMemNum")
	public String showMemInfoByMemNum(HttpServletRequest request,Model model,@RequestParam("memNo")String memNo){
		if(memNo != null){
			MemberEntity member = memberService.selectMemEntiBymemNum(memNo);
			model.addAttribute("member", member);
		}
		return "admin/finace/showMemInfoByMemNum";
	}
}
