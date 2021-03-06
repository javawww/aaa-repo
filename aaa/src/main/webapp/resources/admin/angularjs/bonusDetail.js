app.controller('testController', ['$scope', '$rootScope', '$http','$filter',
function($scope, $rootscope, $http,$filter) { 
	
	//测试是否进入Controller专用，无实意
	$scope.test1 = function() {   
		layer.alert('lalalala', {
			icon :6			//1：对号；2：铅笔加尺子；3：禁止；4：疑问；5：减号；6：大拇指
		});
	};
	
	$scope.rows = null;  	
	$scope.rows2 = null;  	
	$scope.pagesize= 20;	//在pager里已经定了了pagesize，这里的pageSize似乎可有可无。
	$scope.i = 0;			//checkbox用
	$scope.formdata = {};   //定义formdata 
	 
	
	// 是否全选
	$scope.chkall = false;
	$scope.chkAll = function(checked) {
		angular.forEach($scope.rows, function(_row, index, array) {
			_row.selected = checked;
		});
	};  
	 
	//*******************  查询  *************************
	$scope.query = function(page) {   
		//取消全选
		$scope.chkall = false;
		$scope.chkAll($scope.chkall);   
		//查询
		$http({
			method : "POST",
			url : "admin/bonus/findAllBonusRepo/",
			data : {
				page : page,
				startDate:$scope.startDate,
				endDate:$scope.endDate,
				memNum:$scope.memNum,
				bonusType:$scope.bonusType
			} 
		}).success(function(page, status) {   
			 $scope.rows = page.data.data; 		//这里通过"cg/findCg"URL拿到的、满载着数据的rows将会在jsp里ng-repeat遍历出来。
			 $scope.records = page.data.recordsTotal;
			 $scope.page = page.data.page; 
			 
			 
		}); 	//end of success()
	}; 
	
	$scope.query(1);		//定义完了立马实战，把右边内容主题显示出来，显示第一页。
	
	//*******************  增  *************************
	$scope.queryAllInf = function(id) {   
		//取消全选
		$scope.chkall = false;
		$scope.chkAll($scope.chkall);   
		//查询
		$http({
			method : "POST",
			url : "admin/bonus/findAllBonusInfByRepoId/",
			data : {
				id : id
			} 
		}).success(function(page, status) {   
			 $scope.rows2 = page.data.data; 
		}); 
		$('#adddialog').modal({});
	};
	
	$scope.del = function() {
		var ids = [];
		angular.forEach($scope.rows, function(_row, index, array) {
			if (_row.selected) {
				ids.push(_row.id);
			}
		}); 
		if (ids.length >= 1) { 
			layer.confirm('是否确认删除？', {
				icon : 4
			}, function(index) { 
				var s="";
				for(var i=0;i<ids.length;i++){
					s+=ids[i]+",";
				}
				$http({
					method : "DELETE",
					url : 'admin/bonus/deleteBonusRepo/?ids=' + s 
				}).success(function(page, status) {
					if (page != 0) {
						layer.alert('删除成功', {
							icon : 6
						});
						$scope.query($scope.page);
						$scope.chkall = false;
					} else {
						layer.alert('存在子目录，不可删除', {
							icon : 3
						});
					} 
				}).error(function() {
					layer.alert('错误', {
						icon : 3
					});
					$scope.chkall = false;
					$scope.chkAll($scope.chkall);
				});
			});
		} else {
			layer.alert('请选择一条记录删除', {
				icon : 3
			});
		}
	}; 
	

	
}]); //******************************end of Controller************************************************

//是否激活过滤器
app.filter("grantStatusFilter", function() {
	return function(input) {
		var out = "";
		if(input == 0){
			out = "未发放";
			return out;
		}else if(input == 1){
			out = "已发放";
			return out;
		}else{
			out = "暂不明确";
			return out;
		}
	};
});  

app.filter("bonusTypeFilter", function() {
	return function(input) {
		var out = "";
		if(input == 0){
			out = "直推奖";
			return out;
		}else if(input == 1){
			out = "日分红";
			return out;
		}else{
			out = "暂不明确";
			return out;
		}
	};
});  

app.filter("bonusStatusFilter", function() {
	return function(input) {
		var out = "";
		if(input == 0){
			out = "未结算";
			return out;
		}else if(input == 1){
			out = "已结算";
			return out;
		}else{
			out = "暂不明确";
			return out;
		}
	};
});  


