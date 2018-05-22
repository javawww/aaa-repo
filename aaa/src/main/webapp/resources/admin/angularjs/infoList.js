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
	 
	$scope.jhState="";		//这三个其实是用来按条件查询的
	
	//*******************  查询  *************************
	$scope.query = function(page) {   
		//取消全选
		$scope.chkall = false;
		$scope.chkAll($scope.chkall);   
		//查询
		$http({
			method : "POST",
			url : "admin/information/findInfo/",
			data : {
				page : page,
				jhState:$scope.jhState
			} 
		}).success(function(page, status) {   
			 $scope.rows = page.data.data; 		//这里通过"cg/findCg"URL拿到的、满载着数据的rows将会在jsp里ng-repeat遍历出来。
			 $scope.records = page.data.recordsTotal;
			 $scope.page = page.data.page; 
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
			url : "admin/information/findInfo/",
			data : {
				page : page,
				jhState:$scope.jhState,
			} 
		}).success(function(page, status) {   
			 $scope.rows = page.data.data; 
			 $scope.records = page.data.recordsTotal;
			 $scope.page = page.data.page; 
		}); 
	};  
	
	//*******************  增  *************************
	$scope.add = function() {   
		$scope.addtype=1;
		$scope.formdata={}; 
		setck("");					//让UEditor内容为空
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
			
			//控制器中使用
		    $scope.formdata.registTime = $filter("date")(rw.registTime, "yyyy-MM-dd HH:mm:ss");
		    $scope.formdata.jhTime = $filter("date")(rw.jhTime, "yyyy-MM-dd HH:mm:ss");
		    
			$scope.formdata.id = rw.id;
			$scope.formdata.memNum = rw.memNum;
			$scope.formdata.jhState = rw.jhState; 
			$scope.formdata.gjLevel = rw.gjLevel; 
			$scope.formdata.realName = rw.realName; 
			$scope.formdata.teleNum = rw.teleNum; 
			$scope.formdata.tjrNum = rw.tjrNum; 
			$scope.formdata.djState = rw.djState; 
			$scope.formdata.roleState = rw.roleState; 
			$scope.formdata.weichat = rw.weichat; 
			$scope.formdata.alipay = rw.alipay; 
			$scope.formdata.alipayName = rw.alipayName; 
			$scope.formdata.loginPwd = rw.loginPwd; 
			$scope.formdata.loginPwd2 = rw.loginPwd; 
			$scope.formdata.tradePwd = rw.tradePwd; 
			$scope.formdata.bankNum = rw.bankNum; 
			$scope.formdata.bankType = rw.bankType; 
			$scope.formdata.khhAddress = rw.khhAddress; 
			$scope.formdata.khhkName = rw.khhkName; 
			if(true){
				$('#adddialog').modal({}); 
			}  
		}else{
			layer.alert('请选择一条记录修改', {
				icon : 3
			});
		} 
	};  
	
	//这里是增、改 发送信号URL的地方
	$scope.save = function() {
		var context = getck();		//文章的主体内容通过getck()-->ue.getContent()获得
		/*if(context==''){
			layer.alert('内容不能为空', {
				icon : 3
			});  
			return false;
		}*/
		var fileurl = $('#fileurl1').val();
		$scope.formdata.fileurl=fileurl;    // /upload/20170414/1492133033198.jpg
		$scope.formdata.infContent=context;	// <p>ffffddddccccvvvv</p>	
		
		if($scope.addtype==1){  
			$http({
				method : "POST",
				url : "admin/information/addInfo/",
				data : $scope.formdata
			}).success(function(page1, status) {
				if (page1.data==1) {
					layer.alert('保存成功', {
						icon : 1
					});  
					$scope.queryall($scope.page);
				}
			}); 
			$('#adddialog').modal('hide');
		}else if($scope.addtype==2){ 
			console.dir($scope.formdata.registTime);
			$http({
				method : "POST",
				url : "admin/information/updateInfo/",
				data : $scope.formdata
			}).success(function(page, status) {
				layer.alert('保存成功', {
					icon : 1
				});  
				$scope.queryall($scope.page);
			});  
			$('#adddialog').modal('hide');  
		} 
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
					url : 'admin/information/deleteInfo/?id=' + s 
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
					url : 'admin/information/deleteInfo/?id=' + s 
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
	$scope.updateJhState = function(id){
		$scope.addtype=2;
		$scope.formdata.id = id;
		$scope.formdata.jhState = "1"; 
		$scope.save();
	}
	
	//修改冻结状态为解冻
	$scope.updateJd = function(id){
		$scope.addtype=2;
		$scope.formdata.id = id;
		$scope.formdata.djState = "1"; 
		$scope.save();
	}
	
	//修改冻结状态为冻结
	$scope.updateDj = function(id){
		$scope.addtype=2;
		$scope.formdata.id = id;
		$scope.formdata.djState = "0"; 
		$scope.save();
	}
	
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
	    $scope.formdata.createTime = $filter("date")(rw.registTime, "yyyy-MM-dd HH:mm:ss");
	    $scope.formdata.pubTime = $filter("date")(rw.jhTime, "yyyy-MM-dd HH:mm:ss");
		$scope.formdata.id = rw.id;
		$scope.formdata.infNum = rw.infNum;
		$scope.formdata.infType = rw.infType;
		$scope.formdata.infTitle = rw.infTitle;
		$scope.formdata.infContent = rw.infContent;
		$scope.formdata.memid = rw.memid;
		setck(rw.infContent); 
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
	$scope.getCleanCtn = function(dirtyctn) {   
		$scope.cleanCtn =  dirtyctn.replace(/<[^<>]+?>/g,'');
	};
	//动态显示内容  标签解析	
	$scope.showInfContent = function(param){
		var infHtml = $("#infContent_"+param).attr("value");
		$("#infContent_"+param).html(infHtml);
	}
	
}]); //******************************end of Controller************************************************

//是否激活过滤器
app.filter("infTypeFilter", function() {
	return function(input) {
		var out = "";
		if(input == 1){
			out = "普通公告";
			return out;
		}else if(input == 2){
			out = "活动公告";
			return out;
		}else{
			out = "其他公告";
			return out;
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