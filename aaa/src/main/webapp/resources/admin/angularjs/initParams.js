var app = angular.module('app', ['ngRoute']);  
app.controller('testController', ['$scope', '$rootScope', '$http','$filter',
function($scope, $rootscope, $http,$filter) { 

	$scope.rows = null;  
	$scope.pagesize= 20;	//在pager里已经定了了pagesize，这里的pageSize似乎可有可无。
	$scope.i = 0;
	$scope.formdata = {};    
	$scope.menudata = [];  
	 
	//*******************   显示左侧菜单   *************************
	$scope.findleftmenu = function() { 
		$http({
			method : "post",
			url : "admin/system/paramConfdatas"
		}).success(function(data, status) {
			$scope.menudata = data.data; 
		}).error(function() {
			layer.alert('fail', {
				icon : 6
			});
		});
	};  
	
	$scope.findleftmenu(); 		//定义完了立马实战，把左边的菜单栏拿出来显示
	
	// 是否全选
	$scope.chkall = false;
	$scope.chkAll = function(checked) {
		angular.forEach($scope.rows, function(_row, index, array) {
			_row.selected = checked;
		});
	};  
	 
	$scope.types="";	//五大货源b
	$scope.djrxm="";	//发布人姓名
	$scope.prostate="";	//四大属性		这三个其实是用来按条件查询的
	
	//*******************  查询  *************************
	$scope.query = function(page) {   
		//取消全选
		$scope.chkall = false;
		$scope.chkAll($scope.chkall);   
		//查询
		$http({
			method : "POST",
			url : "admin/system/paramConfdatas",
			data : {
				page : page,
			} 
		}).success(function(page, status) {   
			 $scope.rows = page.data.data; 		//这里通过"cg/findCg"URL拿到的、满载着数据的rows将会在jsp里ng-repeat遍历出来。
			 $scope.records = page.data.recordsTotal;
			 $scope.page = page.data.page; 
			 $scope.formdata.id = $scope.rows[0].id;//主键
			 $scope.formdata.jhIntegral = $scope.rows[0].jhIntegral;//激活积分
			 $scope.formdata.yszzIntegral = $scope.rows[0].yszzIntegral;//银树种植消耗
			 $scope.formdata.jszzIntegral = $scope.rows[0].jszzIntegral;//金树种植消耗
			 $scope.formdata.ystqIntegral = $scope.rows[0].ystqIntegral;//银树偷取额度
			 $scope.formdata.jstqIntegral = $scope.rows[0].jstqIntegral;//金树偷取额度
			 $scope.formdata.ystqCount = $scope.rows[0].ystqCount;//银树偷取次数
			 $scope.formdata.jstqCount = $scope.rows[0].jstqCount;//金树偷取次数
			 $scope.formdata.wgjCount = $scope.rows[0].wgjCount;//无管家偷取次数
			 $scope.formdata.ptgjCount = $scope.rows[0].ptgjCount;//普通管家偷取次数
			 $scope.formdata.cjgjCount = $scope.rows[0].cjgjCount;//超级管家偷取次数
			 $scope.formdata.shtMoney = $scope.rows[0].shtMoney;//神童日俸
			 $scope.formdata.ptgjMoney = $scope.rows[0].ptgjMoney;//普通管家月俸
			 $scope.formdata.cjgjMoney = $scope.rows[0].cjgjMoney;//超级管家月俸
			 $scope.formdata.ysCapacity = $scope.rows[0].ysCapacity;//银树产能
			 $scope.formdata.jsCapacity = $scope.rows[0].jsCapacity;//金树产能
			 $scope.formdata.ysCapaCycle = $scope.rows[0].ysCapaCycle;//银树产能周期 分钟
			 $scope.formdata.jsCapaCycle = $scope.rows[0].jsCapaCycle;//金树产能周期 分钟
			 $scope.formdata.ysCapaLimit = $scope.rows[0].ysCapaLimit;//银树产能上限  分红次数
			 $scope.formdata.jsCapaLimit = $scope.rows[0].jsCapaLimit;//金树产能上限  分红次数
			 ////代数奖比例 示例0.05,0.02,0.01,0.005,0.003,0.001 
			 $scope.formdata.dsjScale0 = $scope.rows[0].dsjScale.split(',')[0]; 
			 $scope.formdata.dsjScale1 = $scope.rows[0].dsjScale.split(',')[1]; 
			 $scope.formdata.dsjScale2 = $scope.rows[0].dsjScale.split(',')[2]; 
			 $scope.formdata.dsjScale3 = $scope.rows[0].dsjScale.split(',')[3]; 
			 $scope.formdata.dsjScale4 = $scope.rows[0].dsjScale.split(',')[4]; 
			 $scope.formdata.dsjScale5 = $scope.rows[0].dsjScale.split(',')[5]; 
			 //////直推参数 示例1_1,3_2,6_3,15_4,20_10,50_15
			 $scope.formdata.zhtParam0_1 = $scope.rows[0].zhtParam.split(',')[0].split('_')[0]; 
			 $scope.formdata.zhtParam0_2 = $scope.rows[0].zhtParam.split(',')[0].split('_')[1]; 
			 $scope.formdata.zhtParam1_1 = $scope.rows[0].zhtParam.split(',')[1].split('_')[0]; 
			 $scope.formdata.zhtParam1_2 = $scope.rows[0].zhtParam.split(',')[1].split('_')[1]; 
			 $scope.formdata.zhtParam2_1 = $scope.rows[0].zhtParam.split(',')[2].split('_')[0]; 
			 $scope.formdata.zhtParam2_2 = $scope.rows[0].zhtParam.split(',')[2].split('_')[1]; 
			 $scope.formdata.zhtParam3_1 = $scope.rows[0].zhtParam.split(',')[3].split('_')[0]; 
			 $scope.formdata.zhtParam3_2 = $scope.rows[0].zhtParam.split(',')[3].split('_')[1]; 
			 $scope.formdata.zhtParam4_1 = $scope.rows[0].zhtParam.split(',')[4].split('_')[0]; 
			 $scope.formdata.zhtParam4_2 = $scope.rows[0].zhtParam.split(',')[4].split('_')[1]; 
			 $scope.formdata.zhtParam5_1 = $scope.rows[0].zhtParam.split(',')[5].split('_')[0]; 
			 $scope.formdata.zhtParam5_2 = $scope.rows[0].zhtParam.split(',')[5].split('_')[1]; 
			 //动态钱包 示例：1,100,2000,100,0.02 动态钱包每天提现次数,提现最低,提现最高,提现倍数,手续费
			 $scope.formdata.dyWalDeposit0 = $scope.rows[0].dyWalDeposit.split(',')[0]; 
			 $scope.formdata.dyWalDeposit1 = $scope.rows[0].dyWalDeposit.split(',')[1]; 
			 $scope.formdata.dyWalDeposit2 = $scope.rows[0].dyWalDeposit.split(',')[2]; 
			 $scope.formdata.dyWalDeposit3 = $scope.rows[0].dyWalDeposit.split(',')[3]; 
			 $scope.formdata.dyWalDeposit4 = $scope.rows[0].dyWalDeposit.split(',')[4]; 
			 //静态钱包 示例：1,100,2000,100,0.02 静态钱包每天提现次数,提现最低,提现最高,提现倍数,手续费
			 $scope.formdata.jtWalDeposit0 = $scope.rows[0].jtWalDeposit.split(',')[0]; 
			 $scope.formdata.jtWalDeposit1 = $scope.rows[0].jtWalDeposit.split(',')[1]; 
			 $scope.formdata.jtWalDeposit2 = $scope.rows[0].jtWalDeposit.split(',')[2]; 
			 $scope.formdata.jtWalDeposit3 = $scope.rows[0].jtWalDeposit.split(',')[3]; 
			 $scope.formdata.jtWalDeposit4 = $scope.rows[0].jtWalDeposit.split(',')[4]; 
			 //提现周期 1_1,2_1,3_1,4_0,5_1,6_1,7_0 说明 1_1 礼拜一可以提现 4_0礼拜四不可提现...     
			 $scope.formdata.tixCycle0 = $scope.rows[0].tixCycle.split(',')[0];
			 $scope.formdata.tixCycle0_2 = $scope.rows[0].tixCycle.split(',')[0].split('_')[1];
			 $scope.formdata.tixCycle1_2 = $scope.rows[0].tixCycle.split(',')[1].split('_')[1];
			 $scope.formdata.tixCycle2_2 = $scope.rows[0].tixCycle.split(',')[2].split('_')[1];
			 $scope.formdata.tixCycle3_2 = $scope.rows[0].tixCycle.split(',')[3].split('_')[1];
			 $scope.formdata.tixCycle4_2 = $scope.rows[0].tixCycle.split(',')[4].split('_')[1];
			 $scope.formdata.tixCycle5_2 = $scope.rows[0].tixCycle.split(',')[5].split('_')[1];
			 $scope.formdata.tixCycle6_2 = $scope.rows[0].tixCycle.split(',')[6].split('_')[1];
			 
			 
			 //示例：100,2000,100 最低挂卖额度,最高挂卖额度,挂卖倍数
			 $scope.formdata.epSellTrade0 = $scope.rows[0].epSellTrade.split(',')[0]; 
			 $scope.formdata.epSellTrade1 = $scope.rows[0].epSellTrade.split(',')[1]; 
			 $scope.formdata.epSellTrade2 = $scope.rows[0].epSellTrade.split(',')[2]; 
			 //示例：100,2000,100 最低买进额度,最高买进额度,买进倍数
			 $scope.formdata.epBuyTrade0 = $scope.rows[0].epBuyTrade.split(',')[0]; 
			 $scope.formdata.epBuyTrade1 = $scope.rows[0].epBuyTrade.split(',')[1]; 
			 $scope.formdata.epBuyTrade2 = $scope.rows[0].epBuyTrade.split(',')[2]; 
			 
			 //动态钱包转激活积分 示例：100,2000,100 最低额度,最高额度,转换倍数
			 $scope.formdata.dyWal2Jhjf0 = $scope.rows[0].dyWal2Jhjf.split(',')[0]; 
			 $scope.formdata.dyWal2Jhjf1 = $scope.rows[0].dyWal2Jhjf.split(',')[1]; 
			 $scope.formdata.dyWal2Jhjf2 = $scope.rows[0].dyWal2Jhjf.split(',')[2]; 
			 //动态钱包转种子积分示例：100,2000,100 最低额度,最高额度,转换倍数
			 $scope.formdata.dyWal2Zzjf0 = $scope.rows[0].dyWal2Zzjf.split(',')[0]; 
			 $scope.formdata.dyWal2Zzjf1 = $scope.rows[0].dyWal2Zzjf.split(',')[1]; 
			 $scope.formdata.dyWal2Zzjf2 = $scope.rows[0].dyWal2Zzjf.split(',')[2]; 
			//动态钱包转管家月俸示例：100,2000,100 最低额度,最高额度,转换倍数
			 $scope.formdata.dyWal2GjMoney0 = $scope.rows[0].dyWal2GjMoney.split(',')[0]; 
			 $scope.formdata.dyWal2GjMoney1 = $scope.rows[0].dyWal2GjMoney.split(',')[1]; 
			 $scope.formdata.dyWal2GjMoney2 = $scope.rows[0].dyWal2GjMoney.split(',')[2]; 
			 //动态钱包转神童日俸示例：100,2000,100 最低额度,最高额度,转换倍数
			 $scope.formdata.dyWal2ShtMoney0 = $scope.rows[0].dyWal2ShtMoney.split(',')[0]; 
			 $scope.formdata.dyWal2ShtMoney1 = $scope.rows[0].dyWal2ShtMoney.split(',')[1]; 
			 $scope.formdata.dyWal2ShtMoney2 = $scope.rows[0].dyWal2ShtMoney.split(',')[2];
			 
			// 静态钱包(收益钱包)转激活积分示例：100,2000,100 最低额度,最高额度,转换倍数
			 $scope.formdata.jtWal2Jhjf0 = $scope.rows[0].jtWal2Jhjf.split(',')[0]; 
			 $scope.formdata.jtWal2Jhjf1 = $scope.rows[0].jtWal2Jhjf.split(',')[1]; 
			 $scope.formdata.jtWal2Jhjf2 = $scope.rows[0].jtWal2Jhjf.split(',')[2]; 
			 //静态钱包(收益钱包)转种子积分示例：100,2000,100 最低额度,最高额度,转换倍数
			 $scope.formdata.jtWal2Zzjf0 = $scope.rows[0].jtWal2Zzjf.split(',')[0]; 
			 $scope.formdata.jtWal2Zzjf1 = $scope.rows[0].jtWal2Zzjf.split(',')[1]; 
			 $scope.formdata.jtWal2Zzjf2 = $scope.rows[0].jtWal2Zzjf.split(',')[2]; 
			 //静态钱包(收益钱包)转管家月俸示例：100,2000,100 最低额度,最高额度,转换倍数
			 $scope.formdata.jtWal2GjMoney0 = $scope.rows[0].jtWal2GjMoney.split(',')[0]; 
			 $scope.formdata.jtWal2GjMoney1 = $scope.rows[0].jtWal2GjMoney.split(',')[1]; 
			 $scope.formdata.jtWal2GjMoney2 = $scope.rows[0].jtWal2GjMoney.split(',')[2]; 
			 //静态钱包(收益钱包)转神童日俸示例：100,2000,100 最低额度,最高额度,转换倍数
			 $scope.formdata.jtWal2ShtMoney0 = $scope.rows[0].jtWal2ShtMoney.split(',')[0]; 
			 $scope.formdata.jtWal2ShtMoney1 = $scope.rows[0].jtWal2ShtMoney.split(',')[1]; 
			 $scope.formdata.jtWal2ShtMoney2 = $scope.rows[0].jtWal2ShtMoney.split(',')[2]; 
			  
			 //种子积分转激活积分示例：100,2000,100 最低额度,最高额度,转换倍数
			 $scope.formdata.zzjf2Jhjf0 = $scope.rows[0].zzjf2Jhjf.split(',')[0]; 
			 $scope.formdata.zzjf2Jhjf1 = $scope.rows[0].zzjf2Jhjf.split(',')[1]; 
			 $scope.formdata.zzjf2Jhjf2 = $scope.rows[0].zzjf2Jhjf.split(',')[2]; 
			 //种子积分转管家月俸示例：100,2000,100 最低额度,最高额度,转换倍数
			 $scope.formdata.zzjf2GjMoney0 = $scope.rows[0].zzjf2GjMoney.split(',')[0]; 
			 $scope.formdata.zzjf2GjMoney1 = $scope.rows[0].zzjf2GjMoney.split(',')[1]; 
			 $scope.formdata.zzjf2GjMoney2 = $scope.rows[0].zzjf2GjMoney.split(',')[2]; 
			 //种子积分转管家月俸示例：100,2000,100 最低额度,最高额度,转换倍数
			 $scope.formdata.zzjf2ShtMoney0 = $scope.rows[0].zzjf2ShtMoney.split(',')[0]; 
			 $scope.formdata.zzjf2ShtMoney1 = $scope.rows[0].zzjf2ShtMoney.split(',')[1]; 
			 $scope.formdata.zzjf2ShtMoney2 = $scope.rows[0].zzjf2ShtMoney.split(',')[2]; 
			 
			 //会员间种子积分互转示例：100,2000,100 最低额度,最高额度,转换倍数
			 $scope.formdata.zzjf2Zzjf0 = $scope.rows[0].zzjf2Zzjf.split(',')[0]; 
			 $scope.formdata.zzjf2Zzjf1 = $scope.rows[0].zzjf2Zzjf.split(',')[1]; 
			 $scope.formdata.zzjf2Zzjf2 = $scope.rows[0].zzjf2Zzjf.split(',')[2]; 
			 //会员间激活积分互转示例：100,2000,100 最低额度,最高额度,转换倍数
			 $scope.formdata.jhjf2Jhjf0 = $scope.rows[0].jhjf2Jhjf.split(',')[0]; 
			 $scope.formdata.jhjf2Jhjf1 = $scope.rows[0].jhjf2Jhjf.split(',')[1]; 
			 $scope.formdata.jhjf2Jhjf2 = $scope.rows[0].jhjf2Jhjf.split(',')[2]; 
			 
		}); 	//end of success()
	}; 
	
	$scope.query(1);		//定义完了立马实战，把右边内容主题显示出来，显示第一页。
	
	//************  按条件查询，比如按五大货源类型、四大属性、发布人姓名  *****************
	$scope.queryall = function(page) {   
		//取消全选
		$scope.chkall = false;
		$scope.chkAll($scope.chkall);   
		//查询
		$http({
			method : "POST",
			url : "admin/system/paramConfdatas",
			data : {
				page : page,
				types:$scope.types,
				djrxm:$scope.djrxm,
				prostate:$scope.prostate
			} 
		}).success(function(page, status) {   
			 $scope.rows = page.data.data; 
			 $scope.records = page.data.recordsTotal;
			 $scope.page = page.data.page; 
		}); 
	};  
	
	$scope.promsdata = [];		//声明一个装四大属性的容器
	
	//*******************  增  *************************
	$scope.add = function() {   
		$scope.addtype=1;
		$scope.formdata={}; 
		$scope.formdata.type_id=1;
		
		$scope.changepro(1);
		
		$('#adddialog').modal({});
	};
	
	//*******************  改    *************************
	$scope.update = function(){
		$scope.addtype=2;
		var ids = [];
		angular.forEach($scope.rows, function(_row, index, array) {
			if (_row.selected) {
				ids.push(_row.id);
				$scope.i=index;
			}
		}); 
		if(ids.length==1){   
			
			var rw=$scope.rows[$scope.i]; 
			$scope.formdata.type_id = rw.type_id;
			$scope.formdata.value1 = rw.value1; 
			$scope.formdata.value2 = rw.value2; 
			$scope.formdata.value3 = rw.value3; 
			$scope.formdata.value4 = rw.value4;   
			$scope.formdata.yg = rw.yg;   
			$scope.formdata.bz = rw.bz; 
			$scope.formdata.djrxm = rw.djrxm; 
			$scope.formdata.djsj = rw.djsj; 
			$scope.formdata.state = rw.state; 
			$scope.formdata.id = rw.id;  
			$scope.formdata.xqcounts=rw.xqcounts; 
			$scope.formdata.userid=rw.djr;
			if(rw.state==1||rw.state==0||rw.state==2){
				$scope.changepro(rw.type_id);  
				$('#adddialog').modal({}); 
			}else{
				layer.alert('不能修改', {
					icon : 6
				});
			}  
		}else{
			layer.alert('请选择一条记录修改', {
				icon : 6
			});
		} 
	};  

	//这里是增、改 发送信号URL的地方
	$scope.save = function(param) {
		//代数奖比例 示例0.05,0.02,0.01,0.005,0.003,0.001
		$scope.formdata.dsjScale=$scope.formdata.dsjScale0+","+$scope.formdata.dsjScale1+","+$scope.formdata.dsjScale2+","+$scope.formdata.dsjScale3+","+$scope.formdata.dsjScale4+","+$scope.formdata.dsjScale5;
		//直推参数 示例1_1,3_2,6_3,15_4,20_10,50_15',
		$scope.formdata.zhtParam =	$scope.formdata.zhtParam0_1+"_"+$scope.formdata.zhtParam0_2+","+
									$scope.formdata.zhtParam1_1+"_"+$scope.formdata.zhtParam1_2+","+
									$scope.formdata.zhtParam2_1+"_"+$scope.formdata.zhtParam2_2+","+
									$scope.formdata.zhtParam3_1+"_"+$scope.formdata.zhtParam3_2+","+
									$scope.formdata.zhtParam4_1+"_"+$scope.formdata.zhtParam4_2+","+
									$scope.formdata.zhtParam5_1+"_"+$scope.formdata.zhtParam5_2;
		//提现周期 1_1,2_1,3_1,4_0,5_1,6_1,7_0
		$scope.formdata.tixCycle = "1"+"_"+$scope.formdata.tixCycle0_2+","+
								   "2"+"_"+$scope.formdata.tixCycle1_2+","+
								   "3"+"_"+$scope.formdata.tixCycle2_2+","+
								   "4"+"_"+$scope.formdata.tixCycle3_2+","+
								   "5"+"_"+$scope.formdata.tixCycle4_2+","+
								   "6"+"_"+$scope.formdata.tixCycle5_2+","+
								   "7"+"_"+$scope.formdata.tixCycle6_2;
		
		//示例：1,100,2000,100,0.02 动态钱包每天提现次数,提现最低,提现最高,提现倍数,手续费
		$scope.formdata.dyWalDeposit=$scope.formdata.dyWalDeposit0+","+$scope.formdata.dyWalDeposit1+","+$scope.formdata.dyWalDeposit2+","+$scope.formdata.dyWalDeposit3+","+$scope.formdata.dyWalDeposit4;
		//示例：1,100,2000,100,0.02 静态钱包每天提现次数,提现最低,提现最高,提现倍数,手续费 
		$scope.formdata.jtWalDeposit=$scope.formdata.jtWalDeposit0+","+$scope.formdata.jtWalDeposit1+","+$scope.formdata.jtWalDeposit2+","+$scope.formdata.jtWalDeposit3+","+$scope.formdata.jtWalDeposit4;
		//示例：100,2000,100 最低挂卖额度,最高挂卖额度,挂卖倍数
		$scope.formdata.epSellTrade=$scope.formdata.epSellTrade0+","+$scope.formdata.epSellTrade1+","+$scope.formdata.epSellTrade2;
		//示例：100,2000,100 最低买进额度,最高买进额度,买进倍数
		$scope.formdata.epBuyTrade=$scope.formdata.epBuyTrade0+","+$scope.formdata.epBuyTrade1+","+$scope.formdata.epBuyTrade2;
		
		//动态钱包转激活积分 示例：100,2000,100 最低额度,最高额度,转换倍数
		$scope.formdata.dyWal2Jhjf=$scope.formdata.dyWal2Jhjf0+","+$scope.formdata.dyWal2Jhjf1+","+$scope.formdata.dyWal2Jhjf2;
		//动态钱包转种子积分示例：100,2000,100 最低额度,最高额度,转换倍数
		$scope.formdata.dyWal2Zzjf=$scope.formdata.dyWal2Zzjf0+","+$scope.formdata.dyWal2Zzjf1+","+$scope.formdata.dyWal2Zzjf2;
		//动态钱包转管家月俸示例：100,2000,100 最低额度,最高额度,转换倍数
		$scope.formdata.dyWal2GjMoney=$scope.formdata.dyWal2GjMoney0+","+$scope.formdata.dyWal2GjMoney1+","+$scope.formdata.dyWal2GjMoney2;
		//动态钱包转神童日俸示例：100,2000,100 最低额度,最高额度,转换倍数
		$scope.formdata.dyWal2ShtMoney=$scope.formdata.dyWal2ShtMoney0+","+$scope.formdata.dyWal2ShtMoney1+","+$scope.formdata.dyWal2ShtMoney2;
		
		//静态钱包转激活积分示例：100,2000,100 最低额度,最高额度,转换倍数
		$scope.formdata.jtWal2Jhjf=$scope.formdata.jtWal2Jhjf0+","+$scope.formdata.jtWal2Jhjf1+","+$scope.formdata.jtWal2Jhjf2;
		//静态钱包转种子积分示例：100,2000,100 最低额度,最高额度,转换倍数
		$scope.formdata.jtWal2Zzjf=$scope.formdata.jtWal2Zzjf0+","+$scope.formdata.jtWal2Zzjf1+","+$scope.formdata.jtWal2Zzjf2;
		//静态钱包转管家月俸示例：100,2000,100 最低额度,最高额度,转换倍数
		$scope.formdata.jtWal2GjMoney=$scope.formdata.jtWal2GjMoney0+","+$scope.formdata.jtWal2GjMoney1+","+$scope.formdata.jtWal2GjMoney2;
		//静态钱包转神童日俸示例：100,2000,100 最低额度,最高额度,转换倍数
		$scope.formdata.jtWal2ShtMoney=$scope.formdata.jtWal2ShtMoney0+","+$scope.formdata.jtWal2ShtMoney1+","+$scope.formdata.jtWal2ShtMoney2;
		
		//种子积分转激活积分示例100,2000,100 最低额度,最高额度,转换倍数
		$scope.formdata.zzjf2Jhjf=$scope.formdata.zzjf2Jhjf0+","+$scope.formdata.zzjf2Jhjf1+","+$scope.formdata.zzjf2Jhjf2;
		//种子积分转管家月俸示例100,2000,100 最低额度,最高额度,转换倍数
		$scope.formdata.zzjf2GjMoney=$scope.formdata.zzjf2GjMoney0+","+$scope.formdata.zzjf2GjMoney1+","+$scope.formdata.zzjf2GjMoney2;
		//种子积分转神童日俸示例100,2000,100 最低额度,最高额度,转换倍数
		$scope.formdata.zzjf2ShtMoney=$scope.formdata.zzjf2ShtMoney0+","+$scope.formdata.zzjf2ShtMoney1+","+$scope.formdata.zzjf2ShtMoney2;
		
		//会员间种子积分互转示例：100,2000,100 最低额度,最高额度,转换倍数
		$scope.formdata.zzjf2Zzjf=$scope.formdata.zzjf2Zzjf0+","+$scope.formdata.zzjf2Zzjf1+","+$scope.formdata.zzjf2Zzjf2;
		//会员间激活积分互转示例：100,2000,100 最低额度,最高额度,转换倍数
		$scope.formdata.jhjf2Jhjf=$scope.formdata.jhjf2Jhjf0+","+$scope.formdata.jhjf2Jhjf1+","+$scope.formdata.jhjf2Jhjf2;
		$http({
			method : "POST",
			url : "admin/system/updateparams",
			data : $scope.formdata
		}).success(function(page1, status) {
			layer.msg('操作成功', {icon: 1},function(){
				
			}); 
		});
	};  
	
	//***************************************查看需求留言消息***************************************
	/**
	 * 由于分页使用了AngularJS自定义的插件，所以当点击 “某一页”按钮时，会触发findxx方法，但是
	 * 参数page是多少是不能手填的，只能由Angular和bootstrap-paginator他俩合作判断，因此这里的page
	 * 不用管，直接在URL里写page=page即可；至于第二个参数——采购id则直接采用$scope.proid即可，这两个参数
	 * 的值被开发人员弄混了，他们把findxx(page)参数当成proid， 结果传进来的都是proid。
	 * 
	 * 但是要特别注意的是：
	 * 0、findxx()方法的定义加上参数page，即function(page)；URL里"&page="+$scope.xxpage改成
	 * "&page="+page。
	 * 1、原来在cg.jsp页面里，无论是初始时的采购列表里点击查看会员留言消息，还是在会员留言消息列
	 * 表页面点击某一页，调用的都是同一个showxx()方法，这种做法是错误的，应该是前者用showxx, 后者用findxx才
	 * 对，这个也是由我发现的！开心！
	 * 2、原来的showxx()方法的内容定义里$scope.findxx();这句是没有参数的，必须手动加上参数1，即：$scope.findxx(1);
	 * 这也是应该的，因为从采购浏览页面进入消息留言页面肯定是先进第一页，因此参数应该为1。
	 */
	$scope.hprow=null;
	$scope.xxpage=1;
	$scope.proid=0;
	$scope.showxx=function(id){   
		$scope.proid=id; 
		$scope.findxx(1);
	}
	$scope.findxx=function(page){
		var id=$scope.proid;
		/*console.dir("id :"+id);
		console.dir("xxpage :"+$scope.xxpage );
		console.dir("page :"+ page );*/
		
		$http({
			method : "get",
			url : "cg/findCgxqxx/?cgid="+id+"&page="+page
		}).success(function(page, status) {  
			$scope.hprow = page.data.data;
			$scope.xxrecords = page.data.recordsTotal;
			$scope.xxpage = page.data.page; 
			$('#hpdialog').modal({});
		}); 
	}
	$scope.xqformdata={};
	$scope.findxxdesc=function(id){ 
		 
		$http({
			method : "POST",
			url : "cg/findcgxxbyid/?id="+id 
		}).success(function(page, status) {
			var rw=page.data;
			$scope.xqformdata.ms = rw.ms;
			$scope.xqformdata.tel = rw.tel; 
			$scope.xqformdata.user_name = rw.user_name; 
			$scope.xqformdata.xm = rw.xm;  
			$('#xqdialog').modal({});
			$scope.queryall($scope.page);
		}); 
	}
	
	$scope.shenhejg=0;   //jg代表结果，也就是下拉框最终选定哪一个的结果，其value值，1？2？
	$scope.shenheids="";
	$scope.shenhe =function(){
		var ids = [];
		var a=0;
		angular.forEach($scope.rows, function(_row, index, array) {
			if (_row.selected) {
				ids.push(_row.id);
				if(_row.state==0||_row.state==2){
					 
				}else{
					a++;
				}  
			}  
		}); 
		if (ids.length >= 1) { 
			if(a!=0){
				layer.alert('当前状态不能操作', {
					icon : 6
				});
				return false; 
			} 
			var s="";
			for(var i=0;i<ids.length;i++){
				s+=ids[i]+",";
			}
			$scope.shenheids=s;
			$scope.shenhejg=0;
			$('#shenhedialog').modal({});
		} else {
			layer.alert('请选择一条记录操作', {
				icon : 6
			});
		} 
	}
	
	//审核
	$scope.shenhepost = function() {
		$http({
			method : "DELETE",
			url : 'cg/updateCgStateByIds/?state='+$scope.shenhejg+'&id=' + $scope.shenheids 
		}).success(function(page, status) {
			if (page != 0) {
				layer.alert('操作成功', {
					icon : 6
				});
				$scope.queryall($scope.page);
				$scope.chkall = false;
				$('#shenhedialog').modal('hide');  
			} 
		}).error(function() {
			layer.alert('错误', {
				icon : 6
			});
			$scope.chkall = false;
			$scope.chkAll($scope.chkall);
		});
	}; 
	
	$scope.zuofei=function(){ 
		var ids = [];
		var a=0;
		angular.forEach($scope.rows, function(_row, index, array) {
			if (_row.selected) {
				ids.push(_row.id); 
				if(_row.state==0||_row.state==2||_row.state==1){
					 
				}else{
					a++;
				}   
			}
		}); 
		if (ids.length >= 1) {  
			if(a!=0){
				layer.alert('当前状态不能操作', {
					icon : 6
				});
				return false; 
			}
			layer.confirm('是否确认作废？', {
				icon : 3
			}, function(index) { 
				var s="";
				for(var i=0;i<ids.length;i++){
					s+=ids[i]+",";
				}
				$http({
					method : "DELETE",
					url : 'cg/updateCgStateByIds/?state=3&id=' + s 
				}).success(function(page, status) {
					if (page != 0) {
						layer.alert('操作成功', {
							icon : 6
						});
						$scope.queryall($scope.page);
						$scope.chkall = false;
					} 
				});
			});
		} else {
			layer.alert('请选择一条记录操作', {
				icon : 6
			});
		}
		
		
	}
	  
}]); //end of Controller