app.controller('testController', ['$scope', '$rootScope', '$http','$filter',
function($scope, $rootscope, $http,$filter) { 
	
	$scope.rows = null;  	
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
			url : "admin/perfor/findAll/",
			data : {
				page : page,
				startDate:$scope.startDate,
				endDate:$scope.endDate,
				treeType:$scope.treeType,
				memNum:$scope.memNum
			} 
		}).success(function(page, status) {   
			 $scope.rows = page.data.data; 		//这里通过"cg/findCg"URL拿到的、满载着数据的rows将会在jsp里ng-repeat遍历出来。
			 $scope.records = page.data.recordsTotal;
			 $scope.page = page.data.page; 
		}); 	//end of success()
	}; 
	
	$scope.query(1);		//定义完了立马实战，把右边内容主题显示出来，显示第一页。
	
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
					url : 'admin/perfor/delete/?ids=' + s 
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


app.filter("plantTypeFilter", function() {
	return function(input) {
		var out = "";
		if(input == 0){
			out = "银树";
			return out;
		}else if(input == 1){
			out = "金树";
			return out;
		}else{
			out = "暂不明确";
			return out;
		}
	};
}); 