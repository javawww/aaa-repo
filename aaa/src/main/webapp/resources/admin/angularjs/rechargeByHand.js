app.controller('testController', ['$scope', '$rootScope', '$http','$filter',
function($scope, $rootscope, $http,$filter) { 
	
	$scope.rows = null;  
	$scope.rows2 = null;
	$scope.pagesize= 20;
	$scope.formdata = {};   //定义formdata 

	/**
	 * 写邮件，form表单提交时调用的方法
	 */
	$scope.saveAdd = function() {   
		$scope.addtype=1;
		$scope.save();
		$scope.formdata={};
	};
	
	//检测会员编号是否输错
	$scope.checkMemNum = function() {   
		var memNums = $scope.formdata.memNum;
		$http({
			method : "POST",
			url : "admin/email/checkMemNum/",
			data : {
				memNums:$scope.formdata.memNum
			}
		}).success(function(page1, status) {
			if (page1.data==1) {
				$scope.checkResult=1;
				$scope.query(1);
			}else{
				$scope.checkResult=0;
			}
		}); 
	};
	
	//发送信号URL的地方
	$scope.save = function() {
		console.dir($scope.formdata);
		$http({
			method : "POST",
			url : "admin/recharge/czByHand/",
			data : $scope.formdata
		}).success(function(page1, status) {
			if (page1.data==1) {
				layer.msg('充值成功', {icon: 1},function(){
					$scope.query(1);
				}); 
			}
		}); 
		$('#adddialog').modal('hide');
	};  
	
	//*************	下面是新增的查询充值记录的功能实现	****************

	/**
	 * 根据会员编号查询为其充值的记录
	 */
	$scope.query = function(page) {   
		//查询
		$http({
			method : "POST",
			url : "admin/recharge/findAllRechargeByMemNum/",
			data : {
				page : page,
				memNum:$scope.memNum2
			} 
		}).success(function(page, status) {   
			 $scope.rows2 = page.data.data; 		//这里通过"cg/findCg"URL拿到的、满载着数据的rows将会在jsp里ng-repeat遍历出来。
			 $scope.records = page.data.recordsTotal;
			 $scope.page = page.data.page; 
		}); 	//end of success()
	}; 
	$scope.query(1);		//定义完了立马实战，把右边内容主题显示出来，显示第一页。
	/**
	 * 根据id进行删除，出现在每条信息的最后一个格
	 */
	$scope.delOne = function(id) {
		layer.confirm('是否确认删除？', {
			icon : 4
		}, function(index) { 			//这里的index是谁，什么意思，尚不明确，只知道没它不行，毕竟layer的东西
			$http({
				method : "DELETE",
				url : 'admin/recharge/deleteRechargeById/?id=' + id 
			}).success(function(page, status) {
				if (page != 0) {
					layer.alert('删除成功', {
						icon : 6
					});
					$scope.query($scope.page);
				} else {
					layer.alert('删除失败', {
						icon : 3
					});
				} 
			}).error(function() {
				layer.alert('错误', {
					icon : 3
				});
			});
		});
	}
	
}]); //******************************end of Controller************************************************

//币种过滤器
app.filter("bonusTypeFilter", function() {
	return function(input) {
		var out = "";
		if(input == 0){
			out = "动态钱包";
			return out;
		}else if(input == 1){
			out = "静态冻结钱包";
			return out;
		}else if(input == 2){
			out = "收益钱包";
			return out;
		}else if(input == 3){
			out = "神童日俸";
			return out;
		}else if(input == 4){
			out = "管家月俸";
			return out;
		}else if(input == 5){
			out = "种子积分";
			return out;
		}else if(input == 6){
			out = "激活积分";
			return out;
		}else{
			out = "其他";
			return out;
		}
	};
}); 