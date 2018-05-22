package com.shengchuang.web.controller.member;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List; 
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.shengchuang.core.AjaxJson;
import com.shengchuang.entity.CurrencyInfoEntity;
import com.shengchuang.entity.GJSTStatusEntity;
import com.shengchuang.entity.InoutRepoEntity;
import com.shengchuang.entity.MemberEntity;
import com.shengchuang.entity.ParamConfEntity;
import com.shengchuang.service.CurrencyInfoService;
import com.shengchuang.service.GjstService;
import com.shengchuang.service.InOutRepoService;
import com.shengchuang.service.MemberService;
import com.shengchuang.service.SystemParamService;
import com.shengchuang.web.controller.BaseController;
import com.shengchuang.web.util.QRUtil;
import com.shengchuang.web.util.WebAdminSession;
import com.shengchuang.web.util.WebFrontSession; 

import java.io.File;
import java.math.BigDecimal;
import java.util.Hashtable;

import com.alibaba.fastjson.JSONObject;
import com.google.zxing.BarcodeFormat; 
import com.google.zxing.EncodeHintType; 
import com.google.zxing.MultiFormatWriter; 
import com.google.zxing.common.BitMatrix; 

/**
 *
 */
@Controller
@RequestMapping(value = "front/member")
public class FrontMemberController extends BaseController{
	
	@Resource(name="memberService")
	private MemberService commonService;
	@Autowired
	private GjstService gjstService;
	@Autowired
	private SystemParamService systemParamService;
	@Autowired
	private CurrencyInfoService currencyInfoService;
	@Autowired
	private InOutRepoService inOutRepoService;
	
	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");    
	SimpleDateFormat sdf2 = new SimpleDateFormat("yyyyMMdd");    
	
	
	/**
	 * 查看已激活、未激活会员，当types对应表里的jhState激活状态，  0未激活  1已激活
	 */
	@ResponseBody
	@RequestMapping("/findMember")
	public List<Map> findCommon1(HttpServletRequest httpServletRequest,Model model,Integer page, Integer types) {
		page=1;
		String curMemNum = WebFrontSession.getFrontMember(httpServletRequest).getMemNum();
		List<Map> list = commonService.findCommonActived(page, types, curMemNum);
		Date d = new Date();
		for(Map m: list){
			d = (Date)m.get("jhTime");
			m.put("jhTime", sdf.format(d));
		}
		return list;
	}
	
	/**
	 * 会员查看已激活会员
	 */
	@ResponseBody
	@RequestMapping("/findJhMember")
	public List<MemberEntity> findJhMember(HttpServletRequest httpServletRequest,Model model) {
		
		String curMemNum = WebFrontSession.getFrontMember(httpServletRequest).getMemNum();
		Date d = new Date();
		
		List<MemberEntity> list = commonService.findJhMember(curMemNum);
		for(MemberEntity m: list){
			d = m.getRegistTime();
			m.setShowRegistTime(sdf.format(d));
		}
		return list;
	}
	
	/**
	 * 会员查看未激活会员
	 */
	@ResponseBody
	@RequestMapping("/findWjhMember")
	public List<MemberEntity> findWjhMember(HttpServletRequest httpServletRequest,Model model) {
		
		String curMemNum = WebFrontSession.getFrontMember(httpServletRequest).getMemNum();
		Date d = new Date();
		List<MemberEntity> list = commonService.findWjhMember(curMemNum);
		for(MemberEntity m: list){
			d = m.getRegistTime();
			m.setShowRegistTime(sdf.format(d));
		}
		return list;
	}
	
	/**
	 * 会员激活其推广的会员
	 * @param httpServletRequest
	 * @param model
	 * @param tradePwd	交易密码
	 * @param id		即将被激活会员的id
	 * @return	int		对应结果如下：
	 * 1	激活成功
	 * -1	交易密码错误
	 * -2	余额不足
	 */
	@ResponseBody
	@RequestMapping("/jhMember")
	public AjaxJson jhMember(HttpServletRequest httpServletRequest,Model model, String tradePwd, Integer id) {
		
		int curId = WebFrontSession.getFrontMember(httpServletRequest).getId();
		String curMemNum = WebFrontSession.getFrontMember(httpServletRequest).getMemNum();
		
		AjaxJson aj = new AjaxJson();
		Map<String, Object> jmap = new HashMap<>();
		
		ParamConfEntity pce = systemParamService.findParamById(1);
		CurrencyInfoEntity cie = currencyInfoService.findOneCurrenInfoBymemNum(curMemNum);
		MemberEntity m = commonService.findForTrade(curId, tradePwd);
		
		//首先判断交易密码对不对
		if(m != null){
			//其次判断余额是否大于激活会员的价格
			if(cie.getActivPenn().compareTo(pce.getJhIntegral())>=0){
				//验证通过，首先修改被激活会员的激活状态
				MemberEntity m2 = new MemberEntity();
				m2.setId(id);
				m2.setJhState(1);
				m2.setJhTime(new Date());
				commonService.updateCommon(m2);
				
				//然后激活人的激活钱包要减少相应的钱
				currencyInfoService.reduceYuE("activPenn", pce.getJhIntegral(), curId);
				updateOptFlag(curMemNum,0);
				
				//在收支明细表里留下该条记录
				InoutRepoEntity i = new InoutRepoEntity();
				i.setMemNum(curMemNum);
				i.setBonusType(6);
				i.setChangeSalar(pce.getJhIntegral().negate());
				i.setOrigiSalar(cie.getActivPenn());
				i.setCurrSalar(currencyInfoService.findOneCurrenInfoBymemNum(curMemNum).getActivPenn());
				String desc = "激活"+commonService.findCommonById(id).getMemNum()+"扣除";
				i.setInoutDesc(desc);
				i.setCreateTime(new Date());
				inOutRepoService.add(i);
				
				//return 1;	//激活成功
				jmap = packMap(curId);
				aj.setAttributes(jmap);
				return aj;
			}else{
				//return -2;	//余额不够
				jmap.put("result_type", -2);
				aj.setAttributes(jmap);
				return aj;
			}
		}else{
			//return -1; 		//交易密码错误
			jmap.put("result_type", -1);
			aj.setAttributes(jmap);
			return aj;
		}
	}
	/*
	 * 迭代循环 直到获取不到下一次更新的对象为止
	 */
	public void updateOptFlag(String tjrNum,int flag){
		MemberEntity updamem = new MemberEntity();
		//找父亲  存在 就更新父亲数据
		updamem = commonService.selectMemEntiBymemNum(tjrNum);
		if(updamem!=null){
			if(flag==0){
				updamem.setZtAmounts(updamem.getZtAmounts()+1);
				updamem.setTeamAmounts(updamem.getTeamAmounts()+1);
				flag++;
			}else{
				updamem.setTeamAmounts(updamem.getTeamAmounts()+1);
			}
			int result = commonService.updateCommon(updamem);
			updateOptFlag(updamem.getTjrNum(),flag);
		}
	}
	/**
	 * 增，由于暂时新增会员一律为推广会员，还没有自行注册，因此这个方法暂时无用
	 */
	@ResponseBody
	@RequestMapping("/addMember")
	public int addCommon(HttpServletRequest httpServletRequest, MemberEntity me) {
		
		String memNum = me.getMemNum();
		ParamConfEntity pce = systemParamService.findParamById(1);
		//默认偷取次数，初始化gjst表用的
		int stealCount = pce.getWgjCount().intValue();
		
		Map m = commonService.findCommonByMemNum(memNum);
		if(m==null || m.isEmpty()){
			if(commonService.addCommon(me) == 1){
				//会员增加成功后，立马配置该会员关联的管家神童配置表
				int memId = (int)commonService.findCommonByMemNum(memNum).get("id");
				GJSTStatusEntity ge = new GJSTStatusEntity();
				ge.setMemId(memId);
				ge.setMemNo(memNum);
				ge.setGjSalar(new BigDecimal(0));
				ge.setStSalar(new BigDecimal(0));
				ge.setGjStatus(0);
				ge.setStStatus(0);
				ge.setStealCount(stealCount);
				gjstService.addCommon(ge);
				//创建一条关联此账号的币种信息数据
				Map map = commonService.findCommonByMemNum(memNum);
				if(map!=null){
					CurrencyInfoEntity currencyInfo = new CurrencyInfoEntity(new BigDecimal(0), new BigDecimal(0), new BigDecimal(0), new BigDecimal(0), new BigDecimal(0), new BigDecimal(0), new BigDecimal(0), (String)map.get("memNum"), (int)map.get("id"));
					currencyInfoService.addCommon(currencyInfo);
				}
				
				return 1;
			}else{
				return 0;	
			}
		}else{
			return -1;		//会员名已经存在，新增失败
		}
	} 
	
	/**
	 * 新人通过推荐链接注册
	 * @param me MemberEntity对象（对象要包含用户名等新增会员要求的各种信息，其中用户名会拿来与数据库现有的用户名校验）
	 * @return int，对应处理结果：
	 * 1	新增推广的会员成功
	 * 0	不可抗力因素导致新增失败
	 * -1	会员名已经存在，新增失败
	 */
	@ResponseBody
	@RequestMapping("/registerByTgLink")
	public int registerByTgLink(HttpServletRequest rq, MemberEntity me){
		
		return addTgMember(rq, me);
	}
	
	/**
	 * 《推广会员》的增,Tg,推广的缩写
	 * 参数：MemberEntity对象（对象要包含用户名等新增会员要求的各种信息，其中用户名会拿来与数据库现有的用户名校验）
	 * 返回类型：int，对应处理结果：
	 * 1	新增推广的会员成功
	 * 0	不可抗力因素导致新增失败
	 * -1	会员名已经存在，新增失败
	 */
	@ResponseBody
	@RequestMapping("/addTgMember")
	public int addTgMember(HttpServletRequest httpServletRequest, MemberEntity me) {
		
		String memNum = me.getMemNum();
		ParamConfEntity pce = systemParamService.findParamById(1);
		//默认偷取次数，初始化gjst表用的
		int stealCount = pce.getWgjCount().intValue();
		Date d = new Date();
		me.setRegistTime(d);//创建时间 即 注册时间
		me.setJhState(0);//激活状态 默认0 未激活
		me.setGjLevel(0);//管家级别 默认0 普通管家
		me.setDjState(1);//冻结状态 默认1  解冻  除非后台管理员设置冻结操作
		me.setZtAmounts(0);//直推数量 默认0
		me.setTeamAmounts(0);//团队数量 默认0
		
		Map m = commonService.findCommonByMemNum(memNum);
		if(m==null || m.isEmpty()){
			if(commonService.addCommon(me) == 1){
				//会员增加成功后，立马配置该会员关联的管家神童配置表
				int memId = (int)commonService.findCommonByMemNum(memNum).get("id");
				GJSTStatusEntity ge = new GJSTStatusEntity();
				ge.setMemId(memId);
				ge.setMemNo(memNum);
				ge.setGjSalar(new BigDecimal(0));
				ge.setStSalar(new BigDecimal(0));
				ge.setGjStatus(0);
				ge.setStStatus(0);
				ge.setStealCount(stealCount);
				gjstService.addCommon(ge);
				//创建一条关联此账号的币种信息数据
				CurrencyInfoEntity currencyInfo = new CurrencyInfoEntity(new BigDecimal(0), new BigDecimal(0), new BigDecimal(0), new BigDecimal(0), new BigDecimal(0), new BigDecimal(0), new BigDecimal(0),memNum, memId);
				currencyInfoService.addCommon(currencyInfo);
				
				return 1;
			}else{
				return 0;	
			}
		}else{
			return -1;		//会员名已经存在，新增失败
		}
	} 
	  
	/**
	 * 
	 * @param id 被删会员的id
	 * @return	int
	 * 1	删除成功
	 * 0	删除失败
	 */
	@ResponseBody
	@RequestMapping("/deleteMember")
	public int deleteCommon(Integer id) {
		
		//删之前，还要做两件事：删除其在管家神童表t_gjst_status的数据、在余额表t_currency_info的数据
		gjstService.deleteByMemId(id);
		currencyInfoService.deleteByMemId(id);
		return commonService.deleteById(id);
	}     
	 
	/**
	 * 改
	 */
	@ResponseBody
	@RequestMapping("/updateMember")
	public int updatePro(HttpServletRequest httpServletRequest,MemberEntity me) {
		 
		int curId = WebFrontSession.getFrontMember(httpServletRequest).getId();
		me.setId(curId);
		return commonService.updateCommon(me);
	} 
	
	/**
	 * 改 
	 * 必填参数，MemberEntity对象(对象必须包含原始登录密码), String newLoginPwd(新密码，名字必须与本名字一致)
	 * 返回类型int，对应处理结果：
	 * 1	修改成功
	 * 0	不可抗力因素导致修改失败
	 * -1	密码错误，修改失败
	 */
	@ResponseBody
	@RequestMapping("/changePwd")
	public int changePwd(HttpServletRequest httpServletRequest,MemberEntity me, String newLoginPwd) {
		
		int curId = WebFrontSession.getFrontMember(httpServletRequest).getId();
		String realPwd = WebFrontSession.getFrontMember(httpServletRequest).getLoginPwd();
		
		if(me.getLoginPwd().equals(realPwd)){
			me.setLoginPwd(newLoginPwd);
			me.setId(curId);
			return commonService.updateCommon(me); 	//0, 1
		}else{
			return -1;		//密码错误
		}
	} 
	
	/**
	 * 改 
	 * 必填参数，MemberEntity对象(对象必须包含原始交易密码), String newTradePwd(新交易密码，名字必须与本名字一致)
	 * 返回类型int，对应处理结果：
	 * 1	修改成功
	 * 0	不可抗力因素导致修改失败
	 * -1	密码错误，修改失败
	 */
	@ResponseBody
	@RequestMapping("/changeTradePwd")
	public int changeTradePwd(HttpServletRequest httpServletRequest,MemberEntity me, String newTradePwd) {
		
		int curId = WebFrontSession.getFrontMember(httpServletRequest).getId();
		String realTradePwd = WebFrontSession.getFrontMember(httpServletRequest).getTradePwd();
		
		if(me.getTradePwd().equals(realTradePwd)){
			me.setTradePwd(newTradePwd);
			me.setId(curId);
			return commonService.updateCommon(me); 	//0, 1
		}else{
			return -1;		//密码错误
		}
	} 
	
	/**
	 * 生成会员推广页地址的二维码
	 * 必填参数，String类型，指向会员推广的填写页面，暂时还没有，我先拟定为百度首页
	 * 返回类型String，为二维码图片的存放位置，目前路径为项目根路径的为upload+年月日+会员名，如upload/20170610/A00000.gif
	 */
	@ResponseBody
	@RequestMapping("/createQRCode")
	public String myQRCode(HttpServletRequest request) throws Exception { 
		//图片名
		//String picName = "A00000"+".gif";
		//二维码目标地址
		//String text = "https://www.baidu.com/"; 
		
		//封装推广链接
		String path = request.getContextPath();
		String tglink = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort();
		String basepath = tglink + path + "/";
		String tgMemNo = WebFrontSession.getFrontMember(request).getMemNum();
		String suffix = "front/wytg/tgLink?memNo="+tgMemNo;
		String tgLink = basepath + suffix;
		String picName = tgMemNo +".gif";//每个玩家都有自己的推广图片
		//设定路径，目前路径为项目根路径的为upload+年月日+会员名，如upload/20170610/A00000.gif
		String uploadPath=request.getSession().getServletContext().getRealPath("/upload/");
		
		//如果图片存在，不存在就建
		File outputFile = new File(uploadPath, picName); 
	    if(!outputFile.exists()){
	    	//文件夹创建
	    	outputFile.mkdirs();
	    	//二维码宽高设置
	    	int width = 300; 
	    	int height = 300; 
	    	//二维码的图片格式
	    	String format = "gif"; 
	    	Hashtable hints = new Hashtable(); 
	    	//内容所使用编码 
	    	hints.put(EncodeHintType.CHARACTER_SET, "utf-8"); 
	    	BitMatrix bitMatrix = new MultiFormatWriter().encode(tgLink, //推广链接动态生成二维码
	    			BarcodeFormat.QR_CODE, width, height, hints); 
	    	//生成二维码 
	    	QRUtil.writeToFile(bitMatrix, format, outputFile); 
	    	
	    	//以json字符串格式返回
	    	JSONObject j = new JSONObject();
	    	j.put("tgLink", tgLink);
	    	j.put("memberQRCode", basepath + "/upload/"+picName);
	    	return j.toString();
	    	
    	//如果存在，直接返回
	    }else{
	    	JSONObject j = new JSONObject();
	    	j.put("tgLink", tgLink);
	    	j.put("memberQRCode", basepath + "/upload/"+picName);
	    	return j.toString();
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
