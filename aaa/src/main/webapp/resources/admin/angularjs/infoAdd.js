app.controller('testController', ['$scope', '$rootScope', '$http','$filter',
function($scope, $rootscope, $http,$filter) { 
	
	//测试是否进入Controller专用，无实意
	$scope.test1 = function() {   
		layer.alert('lalalala', {
			icon :6			//1：对号；2：铅笔加尺子；3：禁止；4：疑问；5：减号；6：大拇指
		});
	};
	
	$scope.formdata = {};   //定义formdata 
	var curDate =$filter('date')(new Date(),'yyyy-MM-dd');  //用Angular格式化当前时间
	$scope.formdata.pubTime = curDate;						//当前时间设为默认发布时间 

	/**
	 * 新增公告页面使用到的"增”方法，
	 */
	$scope.saveAdd = function() {   
		$scope.addtype=1;
		$scope.save();
		$scope.formdata={};										//所有form表单数据清空
		var curDate =$filter('date')(new Date(),'yyyy-MM-dd');  //用Angular格式化当前时间
		$scope.formdata.pubTime = curDate;						//当前时间设为默认发布时间
		setck("");					//让UEditor内容为空
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
				}
			}); 
			$('#adddialog').modal('hide');
		}
	};  
	
	//前台点击查看按钮时弹出新闻内容，本方法用来过滤掉新闻内容里的HTML标签
	$scope.getCleanCtn = function(dirtyctn) {   
		$scope.cleanCtn =  dirtyctn.replace(/<[^<>]+?>/g,'');
	};
	
	
}]); //******************************end of Controller************************************************

//UEditor里的内容获取，ue对象是在jsp里定义、初始化好的。
function getck(){
	var data_tc = ue.getContent(); 
	return data_tc;
}

//UEditor内容设定，用于修改时设定placeholder
function setck(value){
	ue.setContent(value);
} 