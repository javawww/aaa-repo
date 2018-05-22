/**
 * Created by jinbo on 2017/3/23.
 */
//通过全局配置皮肤定义：

layui.use('layer', function () {
    var layer = layui.layer;
    layer.config({
        extend: 'dui-farm/style.css'/*tpa=http://game.ziyuan800.com/002/dui-farm/style.css*/, //加载您的扩展样式
        skin: 'layer-dui'
    });
});
//定义全局变量   区分苹果手机和安卓普通浏览器读取一个   安卓微信内置浏览器读取另一个
//判断是不是微信内置浏览器
var areaWidth = "18rem";
var areaHeight = "16rem";
function is_weixn(){ 
	var ua = navigator.userAgent.toLowerCase(); 
	if(ua.match(/MicroMessenger/i)=="micromessenger") { 
		return true; 
	} else { 
		return false; 
	} 
}
var device = layui.device();
if(device.android && is_weixn()){
	areaWidth = "25rem";
	areaHeight = "25rem";
}else{
	areaWidth = "18rem";
	areaHeight = "16rem";
}
//************************************************end
/*所有iframe页面设置 area: ['56%', '92%'],*/
// 个人中心  主页
$('.user').on('click', function () {
    parent.pUser()
    //parent.layer.close(index); //关闭所有的弹窗
});
function pUser() {
    layer.open({
        type: 2,
        title: '个人中心',
        shadeClose: true,
        shade: 0.1,
        area: [areaWidth, areaHeight],
        content: 'front/member/UserCenter', 
        scrollbar: false

    });
}
// 个人中心  - 个人资料
$('.userData').on('click', function () {
    parent.userData()
    //parent.layer.close(index); //关闭所有的弹窗
});
function userData() {
    layer.open({
        type: 2,
        title: '个人资料',
        shadeClose: true,
        shade: 0.1,
        area: [areaWidth, areaHeight],
        content: 'front/member/UserData', //iframe的url
        scrollbar: false
    });
}
// 个人中心  - 修改登录密码
$('.EditLoginPwd').on('click', function () {
    parent.EditLoginPwd()
    //parent.layer.close(index); //关闭所有的弹窗
});
function EditLoginPwd() {
    layer.open({
        type: 2,
        title: '修改登录密码',
        shadeClose: true,
        shade: 0.1,
        area: [areaWidth, areaHeight],
        content: 'front/member/EditLoginPwd', //iframe的url
        scrollbar: false
    });
}
// 个人中心  - 修改交易密码
$('.EditTradePwd').on('click', function () {
    parent.EditTradePwd()
    //parent.layer.close(index); //关闭所有的弹窗
});
function EditTradePwd() {
    layer.open({
        type: 2,
        title: '修改交易密码',
        shadeClose: true,
        shade: 0.1,
        area: [areaWidth, areaHeight],
        content: 'front/member/EditTradePwd', //iframe的url
        scrollbar: false
    });
}
// 个人中心  - 密码问题保护
$('.UserProtection').on('click', function () {
    parent.UserProtection()
    //parent.layer.close(index); //关闭所有的弹窗
});
function UserProtection() {
    layer.open({
        type: 2,
        title: '密码问题保护',
        shadeClose: true,
        shade: 0.1,
        area: [areaWidth, areaHeight],
        content: 'front/member/UserProtection', //iframe的url
        scrollbar: false
    });
}

// 个人中心  - 我的团队
$('.UserJuniors').on('click', function () {
    parent.UserJuniors()
    //parent.layer.close(index); //关闭所有的弹窗
});
function UserJuniors() {
    layer.open({
        type: 2,
        title: '我的团队',
        shadeClose: true,
        shade: 0.1,
        area: [areaWidth, areaHeight],
        content: 'front/member/UserJuniors', //iframe的url
        scrollbar: false
    });
}
//我要推广 class = wytg
$('.wytg').on('click', function () {
    parent.wytg()
    //parent.layer.close(index); //关闭所有的弹窗
});
function wytg() {
    layer.open({
        type: 2,
        title: '我要推广',
        shadeClose: true,
        shade: 0.1,
        area: [areaWidth, areaHeight],
        content: 'front/wytg/wytgmain', //iframe的url
        scrollbar: false
    });
}
//我要推广-注册会员
$('.wytg_zchy').on('click', function () {
    parent.wytg_zchy()
    //parent.layer.close(index); //关闭所有的弹窗
});
function wytg_zchy() {
    layer.open({
        type: 2,
        title: '注册会员',
        shadeClose: true,
        shade: 0.1,
        area: [areaWidth, areaHeight],
        content: 'front/wytg/wytg_zchy', //iframe的url
        scrollbar: false
    });
}
//我要推广-推广链接
$('.wytg_linktg').on('click', function () {
	parent.wytg_linktg()
});
function wytg_linktg() {
	layer.open({
		type: 2,
		title: '推广链接',
		shadeClose: true,
		shade: 0.1,
		area: [areaWidth, areaHeight],
		content: 'front/wytg/wytg_linktg', //iframe的url
		scrollbar: false
	});
}
//我要推广-已激活会员
$('.wytg_yjhhh').on('click', function () {
    parent.wytg_yjhhh()
    //parent.layer.close(index); //关闭所有的弹窗
});
function wytg_yjhhh() {
    layer.open({
        type: 2,
        title: '已激活会员',
        shadeClose: true,
        shade: 0.1,
        area: [areaWidth, areaHeight],
        content: 'front/wytg/wytg_yjhhh', //iframe的url
        scrollbar: false
    });
}
//我要推广-未激活会员
$('.wytg_wjhhh').on('click', function () {
	parent.wytg_wjhhh()
	//parent.layer.close(index); //关闭所有的弹窗
});
function wytg_wjhhh() {
	layer.open({
		type: 2,
		title: '未激活会员',
		shadeClose: true,
		shade: 0.1,
		area: [areaWidth, areaHeight],
		content: 'front/wytg/wytg_wjhhh', //iframe的url
		scrollbar: false
	});
}
//新闻公告 class = notice
$('.xinwgg').on('click', function () {
    parent.xinwgg()
    //parent.layer.close(index); //关闭所有的弹窗
});
function xinwgg() {
    layer.open({
        type: 2,
        title: '新闻公告',
        shadeClose: true,
        shade: 0.1,
        area: [areaWidth, areaHeight],
        content: 'front/xinwgg/xinwggmain', //iframe的url
        scrollbar: false
    });
}
//积分兑换 class = jfdh
$('.jfdh').on('click', function () {
    parent.jfdh()
    //parent.layer.close(index); //关闭所有的弹窗
});
function jfdh() {
    layer.open({
        type: 2,
        title: '积分兑换',
        shadeClose: true,
        shade: 0.1,
        area: [areaWidth, areaHeight],
        content: 'front/jifendh/jifendhmain', //iframe的url
        scrollbar: false
    });
}
//积分兑换   玩家互转
$('.jfdh_wjhz').on('click', function () {
	parent.jfdh_wjhz()
	//parent.layer.close(index); //关闭所有的弹窗
});
function jfdh_wjhz() {
	layer.open({
		type: 2,
		title: '玩家互转',
		shadeClose: true,
		shade: 0.1,
		area: [areaWidth, areaHeight],
		content: 'front/jifendh/jfdh_wjhz', //iframe的url
		scrollbar: false
	});
}
//积分兑换   积分互转
$('.jfdh_jfhz').on('click', function () {
	parent.jfdh_jfhz()
});
function jfdh_jfhz() {
	layer.open({
		type: 2,
		title: '积分转换',
		shadeClose: true,
		shade: 0.1,
		area: [areaWidth, areaHeight],
		content: 'front/jifendh/jfdh_jfhz', //iframe的url
		scrollbar: false
	});
}
//积分兑换   互转记录
$('.jfdh_hzjl').on('click', function () {
	parent.jfdh_hzjl()
});
function jfdh_hzjl() {
	layer.open({
		type: 2,
		title: '互转记录',
		shadeClose: true,
		shade: 0.1,
		area: [areaWidth, areaHeight],
		content: 'front/jifendh/jfdh_hzjl', //iframe的url
		scrollbar: false
	});
}
//积分兑换   转换记录
$('.jfdh_zhjl').on('click', function () {
	parent.jfdh_zhjl()
});
function jfdh_zhjl() {
	layer.open({
		type: 2,
		title: '转换记录',
		shadeClose: true,
		shade: 0.1,
		area: [areaWidth, areaHeight],
		content: 'front/jifendh/jfdh_zhjl', //iframe的url
		scrollbar: false
	});
}

//充值取现 class = czqx
$('.chongzqx').on('click', function () {
    parent.chongzqx()
    //parent.layer.close(index); //关闭所有的弹窗
});
function chongzqx() {
    layer.open({
        type: 2,
        title: '充值取现',
        shadeClose: true,
        shade: 0.1,
        area: [areaWidth, areaHeight],
        content: 'front/chongzqx/chongzqxmain', //iframe的url
        scrollbar: false
    });
}
//我要充值功能
$('.chongzqx_cz').on('click', function () {
	parent.chongzqx_cz()
	//parent.layer.close(index); //关闭所有的弹窗
});
function chongzqx_cz() {
	layer.open({
		type: 2,
		title: '我要充值',
		shadeClose: true,
		shade: 0.1,
		area: [areaWidth, areaHeight],
		content: 'front/chongzqx/chongzqx_cz', //iframe的url
		scrollbar: false
	});
}
//我要取现功能
$('.chongzqx_qx').on('click', function () {
	parent.chongzqx_qx()
	//parent.layer.close(index); //关闭所有的弹窗
});
function chongzqx_qx() {
	layer.open({
		type: 2,
		title: '我要取现',
		shadeClose: true,
		shade: 0.1,
		area: [areaWidth, areaHeight],
		content: 'front/chongzqx/chongzqx_qx', //iframe的url
		scrollbar: false
	});
}
//充值记录
$('.chongzqx_czjl').on('click', function () {
	parent.chongzqx_czjl()
	//parent.layer.close(index); //关闭所有的弹窗
});
function chongzqx_czjl() {
	layer.open({
		type: 2,
		title: '充值记录',
		shadeClose: true,
		shade: 0.1,
		area: [areaWidth, areaHeight],
		content: 'front/chongzqx/chongzqx_czjl', //iframe的url
		scrollbar: false
	});
}
//取现记录
$('.chongzqx_qxjl').on('click', function () {
	parent.chongzqx_qxjl()
	//parent.layer.close(index); //关闭所有的弹窗
});
function chongzqx_qxjl() {
	layer.open({
		type: 2,
		title: '取现记录',
		shadeClose: true,
		shade: 0.1,
		area: [areaWidth, areaHeight],
		content: 'front/chongzqx/chongzqx_qxjl', //iframe的url
		scrollbar: false
	});
}
// 财务明细
$('.caiwmx').on('click', function () {
    parent.caiwmx()
    //parent.layer.close(index); //关闭所有的弹窗
});
function caiwmx() {
    layer.open({
        type: 2,
        title: '奖金明细',
        shadeClose: true,
        shade: 0.1,
        area: [areaWidth, areaHeight],
        content: 'front/caiwmx/caiwmxmain', //iframe的url
        scrollbar: false

    });
}
// 财务明细  收入明细
$('.caiwmx_srmx').on('click', function () {
	parent.caiwmx_srmx()
	//parent.layer.close(index); //关闭所有的弹窗
});
function caiwmx_srmx() {
	layer.open({
		type: 2,
		title: '收入明细',
		shadeClose: true,
		shade: 0.1,
		area: [areaWidth, areaHeight],
		content: 'front/caiwmx/caiwmx_srmx', //iframe的url
		scrollbar: false
		
	});
}
// 财务明细  支出明细
$('.caiwmx_zcmx').on('click', function () {
	parent.caiwmx_zcmx()
	//parent.layer.close(index); //关闭所有的弹窗
});
function caiwmx_zcmx() {
	layer.open({
		type: 2,
		title: '支出明细',
		shadeClose: true,
		shade: 0.1,
		area: [areaWidth, areaHeight],
		content: 'front/caiwmx/caiwmx_zcmx', //iframe的url
		scrollbar: false
		
	});
}
// 通知公告
$('.orchardNews').on('click', function () {
    parent.orchardNews()
    //parent.layer.close(index); //关闭所有的弹窗
});
function orchardNews() {
    layer.open({
        type: 2,
        title: '通知公告',
        shadeClose: true,
        shade: 0.1,
        area: [areaWidth, areaHeight],
        content: 'http://game.ziyuan800.com/002/News.html', //iframe的url
        scrollbar: false

    });
}
//我要偷取
$('.woyaotq').on('click',function(){
	parent.woyaotq()
	//parent.layer.close(index);//关闭所有的弹窗
});
function woyaotq(){
	layer.open({
		type:2,
		title:'我要偷取',
		shadeClose:true,
		shade:0.1,
		area: [areaWidth, areaHeight],
		content:'front/wytq/wytqmain',
		scrollbar:false		
	});		
}
//我要偷取  - 我要偷取
$('.woyaotq_wyt').on('click',function(){
	parent.woyaotq_wyt()
	//parent.layer.close(index);//关闭所有的弹窗
});
function woyaotq_wyt(){
	layer.open({
		type:2,
		title:'偷取列表',
		shadeClose:true,
		shade:0.1,
		area: [areaWidth, areaHeight],
		content:'front/wytq/woyaotq_wyt',
		scrollbar:false		
	});		
}
//我要偷取  - 偷取记录
$('.woyaotq_jl').on('click',function(){
	parent.woyaotq_jl()
	//parent.layer.close(index);//关闭所有的弹窗
});
function woyaotq_jl(){
	layer.open({
		type:2,
		title:'偷取记录',
		shadeClose:true,
		shade:0.1,
		area: [areaWidth, areaHeight],
		content:'front/wytq/woyaotq_jl',
		scrollbar:false		
	});		
}
//我要偷取  - 被偷记录
$('.woyaotq_bt').on('click',function(){
	parent.woyaotq_bt()
	//parent.layer.close(index);//关闭所有的弹窗
});
function woyaotq_bt(){
	layer.open({
		type:2,
		title:'被偷记录',
		shadeClose:true,
		shade:0.1,
		area: [areaWidth, areaHeight],
		content:'front/wytq/woyaotq_bt',
		scrollbar:false		
	});		
}
// 公告详情
$('.newsShow').on('click', function () {
    var $id = $(this).data('id');
    parent.newsShow($id)
    //parent.layer.close(index); //关闭所有的弹窗
});
function newsShow($id) {
    layer.open({
        type: 2,
        title: '通知公告',
        shadeClose: true,
        shade: 0.1,
        area: [areaWidth, areaHeight],
        content: 'http://game.ziyuan800.com/002/NewsDetail.html', //iframe的url
        scrollbar: false

    });
}
// 玩家果园列表
$('.orchardPlayer').on('click', function () {
    parent.orchardPlayer()
    //parent.layer.close(index); //关闭所有的弹窗
});
function orchardPlayer() {
    layer.open({
        type: 2,
        title: '玩家果园',
        shadeClose: true,
        shade: 0.1,
        area: [areaWidth, areaHeight],
        content: 'http://game.ziyuan800.com/002/Player.html', //iframe的url
        scrollbar: false

    });
}
// 开通新玩家
$('.orchardRegistered').on('click', function () {
    parent.orchardRegistered()
    //parent.layer.close(index); //关闭所有的弹窗
});
function orchardRegistered() {
    layer.open({
        type: 2,
        title: '开通新玩家',
        shadeClose: true,
        shade: 0.1,
        area: [areaWidth, areaHeight],
        content: 'http://game.ziyuan800.com/002/Register.html', //iframe的url
        scrollbar: false

    });
}
// 收益记录  主页   更改为  收支明细
$('.shouyjl').on('click', function () {
    parent.shouyjl()
    //parent.layer.close(index); //关闭所有的弹窗
});
function shouyjl() {
    layer.open({
        type: 2,
        title: '收支明细',
        shadeClose: true,
        shade: 0.1,
        area: [areaWidth, areaHeight],
        content: 'front/shouyjl/shouyjlmain', //iframe的url
        scrollbar: false

    });
}
// 收益记录  动态钱包
$('.shouyjl_dtqb').on('click', function () {
	parent.shouyjl_dtqb()
	//parent.layer.close(index); //关闭所有的弹窗
});
function shouyjl_dtqb() {
	layer.open({
		type: 2,
		title: ' 动态钱包',
		shadeClose: true,
		shade: 0.1,
		area: [areaWidth, areaHeight],
		content: 'front/shouyjl/shouyjl_dtqb', //iframe的url
		scrollbar: false
		
	});
}
// 收益记录  静态解冻钱包
$('.shouyjl_jtdj').on('click', function () {
	parent.shouyjl_jtdj()
	//parent.layer.close(index); //关闭所有的弹窗
});
function shouyjl_jtdj() {
	layer.open({
		type: 2,
		title: ' 静态冻结钱包',
		shadeClose: true,
		shade: 0.1,
		area: [areaWidth, areaHeight],
		content: 'front/shouyjl/shouyjl_jtdj', //iframe的url
		scrollbar: false
		
	});
}
// 收益记录  静态冻结钱包
$('.shouyjl_jtjd').on('click', function () {
	parent.shouyjl_jtjd()
	//parent.layer.close(index); //关闭所有的弹窗
});
function shouyjl_jtjd() {
	layer.open({
		type: 2,
		title: '静态解冻钱包',
		shadeClose: true,
		shade: 0.1,
		area: [areaWidth, areaHeight],
		content: 'front/shouyjl/shouyjl_jtjd', //iframe的url
		scrollbar: false
		
	});
}
// 交易中心
$('.jiaoyzx').on('click', function () {
    parent.jiaoyzx()
    //parent.layer.close(index); //关闭所有的弹窗
});
function jiaoyzx() {
    layer.open({
        type: 2,
        title: '交易中心',
        shadeClose: true,
        shade: 0.1,
        area: [areaWidth, areaHeight],
        content: 'front/jiaoyzx/jiaoyzxmain', //iframe的url
        scrollbar: false
    });
}
// 交易中心  我要卖出
$('.jiaoyzx_wymc').on('click', function () {
	parent.jiaoyzx_wymc()
	//parent.layer.close(index); //关闭所有的弹窗
});
function jiaoyzx_wymc() {
	layer.open({
		type: 2,
		title: '我要挂卖',
		shadeClose: true,
		shade: 0.1,
		area: [areaWidth, areaHeight],
		content: 'front/jiaoyzx/jiaoyzx_wymc', //iframe的url
		scrollbar: false
	});
}
// 交易中心  卖出记录
$('.jiaoyzx_mcjl').on('click', function () {
	parent.jiaoyzx_mcjl()
	//parent.layer.close(index); //关闭所有的弹窗
});
function jiaoyzx_mcjl() {
	layer.open({
		type: 2,
		title: '挂卖记录',
		shadeClose: true,
		shade: 0.1,
		area: [areaWidth, areaHeight],
		content: 'front/jiaoyzx/jiaoyzx_mcjl', //iframe的url
		scrollbar: false
	});
}
// 交易中心  卖出记录2
$('.jiaoyzx_mcjl2').on('click', function () {
	parent.jiaoyzx_mcjl2()
	//parent.layer.close(index); //关闭所有的弹窗
});
function jiaoyzx_mcjl2() {
	layer.open({
		type: 2,
		title: '卖出记录',
		shadeClose: true,
		shade: 0.1,
		area: [areaWidth, areaHeight],
		content: 'front/jiaoyzx/jiaoyzx_mcjl2', //iframe的url
		scrollbar: false
	});
}
// 交易中心  我要买进
$('.jiaoyzx_wymj').on('click', function () {
	parent.jiaoyzx_wymj()
	//parent.layer.close(index); //关闭所有的弹窗
});
function jiaoyzx_wymj() {
	layer.open({
		type: 2,
		title: '我要购买',
		shadeClose: true,
		shade: 0.1,
		area: [areaWidth, areaHeight],
		content: 'front/jiaoyzx/jiaoyzx_wymj', //iframe的url
		scrollbar: false
	});
}
// 交易中心  买进记录
$('.jiaoyzx_mjjl').on('click', function () {
	parent.jiaoyzx_mjjl()
	//parent.layer.close(index); //关闭所有的弹窗
});
function jiaoyzx_mjjl() {
	layer.open({
		type: 2,
		title: '购买记录',
		shadeClose: true,
		shade: 0.1,
		area: [areaWidth, areaHeight],
		content: 'front/jiaoyzx/jiaoyzx_mjjl', //iframe的url
		scrollbar: false
	});
}
// 交易中心  买进记录2
$('.jiaoyzx_mjjl2').on('click', function () {
	parent.jiaoyzx_mjjl2()
	//parent.layer.close(index); //关闭所有的弹窗
});
function jiaoyzx_mjjl2() {
	layer.open({
		type: 2,
		title: '交易记录',//购买记录 修改为  交易记录
		shadeClose: true,
		shade: 0.1,
		area: [areaWidth, areaHeight],
		content: 'front/jiaoyzx/jiaoyzx_mjjl2', //iframe的url
		scrollbar: false
	});
}
//交易确认  修改为 我的交易
$('.jaoyzx_confirm').on('click', function () {
	parent.jaoyzx_confirm()
	//parent.layer.close(index); //关闭所有的弹窗
});
function jaoyzx_confirm() {
	layer.open({
		type: 2,
		title: '我的交易',
		shadeClose: true,
		shade: 0.1,
		area: [areaWidth, areaHeight],
		content: 'front/jiaoyzx/jaoyzx_confirm', //iframe的url
		scrollbar: false
	});
}
//交易确认  修改为 我的交易
$('.jaoyzx_jylog').on('click', function () {
	parent.jaoyzx_jylog()
	//parent.layer.close(index); //关闭所有的弹窗
});
function jaoyzx_jylog() {
	layer.open({
		type: 2,
		title: '交易记录',
		shadeClose: true,
		shade: 0.1,
		area: [areaWidth, areaHeight],
		content: 'front/jiaoyzx/jaoyzx_jylog', //iframe的url
		scrollbar: false
	});
}
// 登录界面
$('.logout').on('click', function () {
    parent.logout();
});
function logout() {
    layer.open({
        type: 2,
        title: title,
        shadeClose: false,
        shade: 0.1,
        area: [areaWidth, areaHeight],
        content: 'front/logout.html', //iframe的url
        scrollbar: false,
        closeBtn: 0
    });
}
//邮件中心  主页
$('.msg').on('click', function () {
    parent.msg()
});
function msg() {
    layer.open({
        type: 2,
        title: '邮件中心',
        shadeClose: true,
        shade: 0.1,
        area: [areaWidth, areaHeight],
        content: 'front/message/MsgCenter', 
        scrollbar: false
    });
}
//邮件中心  收件箱
$('.msg_in').on('click', function () {
    parent.msgIn()
});
function msgIn() {
    layer.open({
        type: 2,
        title: '收件箱',
        shadeClose: true,
        shade: 0.1,
        area: [areaWidth, areaHeight],
        content: 'front/message/MsgList', //iframe的url
        scrollbar: false

    });
}
//邮件中心  发件箱
$('.msg_out').on('click', function () {
    parent.msgOut()
});
function msgOut() {
    layer.open({
        type: 2,
        title: '发件箱',
        shadeClose: true,
        shade: 0.1,
        area: [areaWidth, areaHeight],
        content: 'front/message/MsgList2', //iframe的url
        scrollbar: false
    });
}
//邮件中心  写邮件
$('.msg_send').on('click', function () {
    parent.msgSend();
});
function msgSend() {
    layer.open({
        type: 2,
        title: '写邮件',
        shadeClose: true,
        shade: 0.1,
        area: [areaWidth, areaHeight],
        content: "front/message/MsgSend", //iframe的url
        scrollbar: false
    });
}
//种植银树
$('.zhzys').on('click', function () {
	parent.zhzys();
});
 function zhzys(){
    	layer.open({
    		type: 2,
    		title: '种植银树',
    		shadeClose: true,
    		shade: 0.1,
    		area: [areaWidth, areaHeight],
    		content: "front/zhzys/zhzysCenter", //iframe的url
    		scrollbar: false
    	});
    }
//种植金树
$('.zhzjs').on('click', function () {
	parent.zhzjs();
});
function zhzjs() {
	layer.open({
		type: 2,
		title: '种植金树',
		shadeClose: true,
		shade: 0.1,
		area: [areaWidth, areaHeight],
		content: "front/zhzjs/zhzjsCenter", //iframe的url
		scrollbar: false
		
	});
}
//找回密码
$('.findPwd').on('click', function () {
    parent.findPwd()
    //parent.layer.close(index); //关闭所有的弹窗
});
function findPwd($name) {
    layer.open({
        type: 2,
        title: '找回密码',
        shadeClose: true,
        shade: 0.1,
        area: [areaWidth, areaHeight],
        content: 'FindPwd', //iframe的url
        scrollbar: false	
    });
}
//登录页面   弹出的登录表单   body onload回调函数
function init(){					
	layer.open({
        type: 2,
        title: "梦幻金银树",
        closeBtn: 0, //不显示关闭按钮
        shadeClose: false,
        shade: 0.1,
        area: [areaWidth, areaHeight],
        content: 'Login/', //iframe的url
        scrollbar: false
    });
}
/*if(typeof index == 'undefined'){
    var device = layui.device();
    if (device.ios) {
        var iframe = $(parent.document).find('#'+window.name);
        var parenta = iframe.parent();
        var  height = parenta.height()*0.91;
        iframe.css('height',height);
        if ($('#wrapper').length == 0) {
            $('body').children().not('script').wrapAll('<div id="wrapper"></div>');
            $("body").css('overflow','hidden');
            $('html,body,#wrapper').css('height',height);
        }
    }
}*/