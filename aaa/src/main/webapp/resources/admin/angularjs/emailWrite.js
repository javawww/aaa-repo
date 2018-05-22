app.controller('testController', ['$scope', '$rootScope', '$http','$filter',
function($scope, $rootscope, $http,$filter) { 
	
	//测试是否进入Controller专用，无实意
	$scope.test1 = function() {   
		layer.alert('lalalala', {
			icon :6			//1：对号；2：铅笔加尺子；3：禁止；4：疑问；5：减号；6：大拇指
		});
	};
	
	$scope.formdata = {};   //定义formdata 

	/**
	 * 写邮件，form表单提交时调用的方法
	 */
	$scope.saveAdd = function() {   
		$scope.addtype=1;
		$scope.save();
		$scope.formdata={};
		setck("");					//让UEditor内容为空
	};
	
	//检测会员编号是否输错
	$scope.checkMemNum = function() {   
		var memNums = $scope.formdata.receids;
		$http({
			method : "POST",
			url : "admin/email/checkMemNum/",
			data : {
				memNums:$scope.formdata.receids
			}
		}).success(function(page1, status) {
			if (page1.data==1) {
				$scope.checkResult=1;
			}else{
				$scope.checkResult=0;
			}
		}); 
	};
	
	//检查是否勾选了“发送给全部会员”的CheckBox，如果选了，则手工输入会员编号的input不需要校验
	$scope.doIfChecked = function() {
		if($scope.formdata.sendAll){
			$scope.formdata.receids = "所有会员";
		}else{
			$scope.formdata.receids = "";
		}
	};
	
	//这里是增、改 发送信号URL的地方
	$scope.save = function() {
		var context = getck();		//文章的主体内容通过getck()-->ue.getContent()获得
		var fileurl = $('#fileurl1').val();
		$scope.formdata.fileurl=fileurl;    // /upload/20170414/1492133033198.jpg
		$scope.formdata.msgContent=context;	// <p>ffffddddccccvvvv</p>	
		
		$scope.formdata.msgStatus=0;		// <p>ffffddddccccvvvv</p>
		/*if($scope.formdata.sendAll){		//检测是否点击了“发送给所有会员”的checkbox
			$scope.formdata.receids = "88888";
		}*/
		
		$http({
			method : "POST",
			url : "admin/email/addEmail/",
			data : $scope.formdata
		}).success(function(page1, status) {
			if (page1.data==1) {
				layer.alert('发布成功', {
					icon : 1
				});  
			}
		}); 
		$('#adddialog').modal('hide');
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