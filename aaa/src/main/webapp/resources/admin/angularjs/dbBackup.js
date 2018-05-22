app.controller('testController', ['$scope', '$rootScope', '$http','$filter',
function($scope, $rootscope, $http,$filter) { 
	
	//测试是否进入Controller专用，无实意
	$scope.test1 = function() {   
		layer.alert('lalalala', {
			icon :6			//1：对号；2：铅笔加尺子；3：禁止；4：疑问；5：减号；6：大拇指
		});
	};
	
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
			url : "admin/mysql/findBackup/",
			data : {
				page : page
			} 
		}).success(function(page, status) {   
			 $scope.rows = page.data.data; 		//这里通过"cg/findCg"URL拿到的、满载着数据的rows将会在jsp里ng-repeat遍历出来。
			 $scope.records = page.data.recordsTotal;
			 $scope.page = page.data.page; 
		}); 	
	}; 
	$scope.query(1);		
	
	//*******************  增  *************************
	$scope.save = function() {
		$http({
			method : "POST",
			url : "admin/mysql/addBackup/",
			data : $scope.formdata
		}).success(function(page1, status) {
			if (page1.data==1) {
				layer.msg('数据库备份成功', { icon : 1 });  
				$scope.query($scope.page);
			}else if (page1.data==-1){
				layer.msg('数据库备份失败,请联系技术人员', { icon : 5 });  
				$scope.query($scope.page);
			}
		}); 
		$scope.formdata={};
	};  
	
	//*******************  执行备还原   *************************
	$scope.restore = function(id){
		layer.confirm('确定要一键还原数据库吗？', {
			  btn: ['确定','关闭'] //按钮
			}, function(){//执行
				$http({
					method : "POST",
					url : "admin/mysql/restore",
					data : {id:id}
				}).success(function(page1, status) {
					if (page1.data==1) {
						layer.msg('数据库一键还原成功', { icon : 1 });  
					}else if(page1.data==-1){
						layer.msg('数据库一键还原失败,请联系管理员', { icon : 5 });  
					}
				}); 
			}, function(index){//关闭
				layer.close(index);
			});
	};  
	
	//*******************  清空数据版的还原   *************************
	$scope.clearDb = function(){
		layer.confirm('确定要数据库初始化吗-请谨慎操作？', {
			  btn: ['确定','关闭'] //按钮
			}, function(){//执行
				$http({
					method : "POST",
					url : "admin/mysql/clearDb/",
					data : $scope.formdata
				}).success(function(page1, status) {
					if (page1.data==1) {
						layer.msg('数据初始化成功,还原为初始数据', { icon : 1 });  
					}else if(page1.data==-1){
						layer.msg('数据初始化失败,请联系管理员', { icon : 5 });  
					}
				}); 
			}, function(index){//关闭
				layer.close(index);
			});
	};  
	
	/**
	 * 根据checkbox的选中删除，出现在左上角，可全选并一次性删除
	 */
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
					url : 'admin/mysql/deleteBackup/?ids=' + s 
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
	
}]); //***************************end of Controller******************************************************


//是否激活过滤器
app.filter("jhFilter", function() {
	return function(input) {
		var out = "";
		if (input == 0) {
			out = "未激活";
			return out;
		}else if(input == 1){
			out = "已激活";
			return out;
		}else {
			out = "暂未填写";
			return out;
		}
	};
});  

