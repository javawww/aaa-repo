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
			url : "admin/ep/epselllist",
			data : {
				page : page,
				startDate:$scope.startDate,
				endDate:$scope.endDate,
				esellStatus:$scope.esellStatus,
				memNum:$scope.memNum
			} 
		}).success(function(page, status) {   
			console.dir("success");
			console.dir( page.data.data);
			 $scope.rows = page.data.data; 		//这里通过"cg/findCg"URL拿到的、满载着数据的rows将会在jsp里ng-repeat遍历出来。
			 $scope.records = page.data.recordsTotal;
			 $scope.page = page.data.page; 
		}); 	//end of success()
	}; 
	
	$scope.query(1);		//定义完了立马实战，把右边内容主题显示出来，显示第一页。
	//管理员 撤销操作
	$scope.changeStatus = function(id,esellStatus){
		//准备数据中....
		$scope.formdata.id = id;
		$scope.formdata.esellStatus = esellStatus;
		console.dir($scope.formdata);
		//调用通用更新操作
		$scope.update();
	}
	//管理员  置顶操作
	$scope.changePrio = function(id){
		//准备数据中....
		$scope.formdata.id = id;
		$scope.formdata.prioOpt = "prioOpt";//置顶操作标识符
		$scope.update();
	}
	//这里是增、改 发送信号URL的地方
	$scope.insert = function() {
			$http({
				method : "POST",
				url : "admin/ep/insert",
				data : $scope.formdata
			}).success(function(page, status) {
				if (page.data==1) {
					layer.alert('保存成功', {
						icon : 1
					});  
					$scope.query($scope.page);
				}
			}); 
	}; 
	//更新内容
	$scope.update = function(){
		$http({
			method : "POST",
			url : "admin/ep/updateEPsell",
			data : $scope.formdata
		}).success(function(page, status) {
			layer.alert('更新成功', {
				icon : 1
			});  
			$scope.query($scope.page);
		}); 
	}
	
	
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
					url : 'admin/email/deleteEmail/?id=' + s 
				}).success(function(page, status) {
					if (page != 0) {
						layer.alert('删除成功', {
							icon : 6
						});
						$scope.queryall($scope.page);
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
	
	/**
	 * 根据id进行删除，出现在每条信息的最后一个格
	 */
	$scope.delOne = function(id) {
		var ids = [];
		angular.forEach($scope.rows, function(_row, index, array) {
			if (_row.id==id) {
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
					url : 'admin/email/deleteEmail/?id=' + s 
				}).success(function(page, status) {
					if (page != 0) {
						layer.alert('删除成功', {
							icon : 6
						});
						$scope.queryall($scope.page);
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

	//修改激活状态为激活
	//修改冻结状态为解冻
	//修改冻结状态为冻结
	
	/**
	 * update2出现在每行的最后的一个格子里,与update功能一模一样，只不过update方法的使用
	 * 前提是必须勾选一条checkbox，然后自动筛选id值，因此无需传参；这里是每行的自有id，自己
	 * 传自己的id参数，无需勾选checkbox。
	 */
	$scope.update2 = function(id){ 
		$scope.addtype=2;
		var ids = [];
		angular.forEach($scope.rows, function(_row, index, array) {
			if (_row.id==id) {
				ids.push(_row.id);
				$scope.i=index;
			}
		}); 
		var rw=$scope.rows[$scope.i]; 
	    $scope.formdata.sendTime = $filter("date")(rw.sendTime, "yyyy-MM-dd HH:mm:ss");
		$scope.formdata.id = rw.id;
		$scope.formdata.msgSubject = rw.msgSubject;
		$scope.formdata.sendid = rw.sendid;
		$scope.formdata.receids = rw.receids;
		$scope.formdata.msgStatus = rw.msgStatus;
		$scope.formdata.memNum = rw.memNum;
		setck(rw.msgContent); 
		$('#adddialog').modal({}); 
	};  
	
	/**
	 * 新增会员页面使用到的"增”方法，专为新增会员定制
	 */
	$scope.saveAdd = function() {   
		$scope.addtype=1;
		$scope.save();
		$scope.formdata={};
		setck("");					//让UEditor内容为空
	};

	//前台点击查看按钮时弹出新闻内容，本方法用来过滤掉新闻内容里的HTML标签
	$scope.getCleanCtn = function(model_id, dirtyctn, row_id) {   
		$scope.cleanCtn =  dirtyctn.replace(/<[^<>]+?>/g,'');	//拿出干干净净没有HTML标签的内容
		//把数据库里的阅读状态改为 1， 已读
		$http({									
			method : "POST",
			url : "admin/email/setRead/",
			data : {
				id : row_id
			} 
		}).success(function(page, status) {
			//$scope.queryall($scope.page);
		});
		$(model_id).modal({});
		//$scope.queryall($scope.page);
		/*$scope.addtype=2;
		$scope.formdata.id = row_id;
		$scope.formdata.msgStatus = "1"; 
		$scope.save();*/
	};
	//前台点击查看按钮时弹出新闻内容，本方法用来过滤掉新闻内容里的HTML标签
	$scope.refreshPage = function() {   
		$scope.queryall($scope.page);
	};
	
	
}]); //******************************end of Controller************************************************

//是否激活过滤器
app.filter("esellStatusFilter", function() {//交易状态
	return function(val) {
		if(val == 0){
			return "交易中";
		}else if(val == 1){
			return "交易完成";
		}else if(val == 2){
			return "交易失败";
		}
	};
});  


//上传缩略图的处理
function ajaxFileUpload(type) {
	
	if(type==1){
		$.ajaxFileUpload({
			url : '/admin/upload/',	//这里仅仅是URL请求，不是真的把图片放到admin/upload目录下
			secureuri : false,
			fileElementId : 'fileid1',
			dataType : 'text',
			success : function(data, status) {  
				var up=document.getElementById('uploadimg1');
				up.style.display="block"
				$("#uploadimg1").attr("src",basepath+data);	//basepath+data == http://192.168.3.28:8080/wl//upload/20170414/1492134984700.png
				$("#fileurl1").val(data);
			},
			error : function(data, status, e) {//服务器响应失败时的处理函数
				 
			}
		});
	} 
}

//UEditor里的内容获取，ue对象是在jsp里定义、初始化好的。
function getck(){
	var data_tc = ue.getContent(); 
	return data_tc;
}

//UEditor内容设定，用于修改时设定placeholder
function setck(value){
	ue.setContent(value);
} 