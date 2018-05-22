app.controller('testController', ['$scope', '$rootScope', '$http','$filter',
function($scope, $rootscope, $http,$filter) { 
	//0.邮箱校验
	$scope.spEmail = "^[a-z]([a-z0-9]*[-_]?[a-z0-9]+)*@([a-z0-9]*[-_]?[a-z0-9]+)+[\.][a-z]{2,3}([\.][a-z]{2})?$";
	//1.验证密码
	$scope.spPwd = "^[a-zA-Z0-9]{6,12}$";
	//2.验证手机号 sp-phone
	$scope.spPhone = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
	//3.验证座机号码 sp-tel
	$scope.spTel = /^(?:(?:0\d{2,3})-)?(?:\d{7,8})(-(?:\d{3,}))?$/;
	//4.验证联系电话 sp-telephone
	$scope.spTelephone = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
	//5.验证邮箱 sp-email
	$scope.spEmail = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
	//6.验证身份证号 sp-card
	$scope.spCard = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
	//7.验证邮编 sp-postcode
	$scope.spPostcode= /^[0-9][0-9]{5}$/;
	//8. 验证传真 sp-fax
	$scope.spFax = /^(?:(?:0\d{2,3})-)?(?:\d{7,8})(-(?:\d{3,}))?$/;
	//9.验证网址 sp-url
	$scope.spUrl= /((https|http|ftp|rtsp|mms):\/\/)?(([0-9a-z_!~*'().&=+$%-]+:)?[0-9a-z_!~*'().&=+$%-]+@)?(([0-9]{1,3}\.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+\.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\.[a-z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+\/?)/g;
	//10.验证IP地址 sp-ip
	$scope.spIp = /^\d+\.\d+\.\d+\.\d+$/;
	//11.验证用户名合法 sp-username
	$scope.spUsername= /^(?![^a-zA-Z]+$)(?!\D+$).{6,20}$/;
	//12.验证数字 sp-digit
	$scope.spDigit= /^[0-9]*$/;
	//13.验证小数 sp-decimal
	$scope.spDecimal= /^\d+(\.\d+)?$/;
	//14.验证中文 sp-chinese
	$scope.spChinese= /^[\u4E00-\u9FFF]+$/;
	
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
	//xxxxxxxxxxxxxxxxxx焦点失去立即校验用户编号数据库是否存在 
	$scope.validMemNum = function(){
		var memNum = $scope.formdata.memNum;
		if(typeof(memNum)!="undefined"){
			$http({
				method : "POST",
				url : 'admin/member/validMemNum',
				data:{
					memNum:memNum
				}
			}).success(function(page, status) {
				if(page.success){
					 return true; 
				}else{
					layer.msg(page.msg,{ icon : 5 });
					$scope.formdata.memNum = "";
				}
			}); 
		}
	}
	//推荐人可以修改  需要判断  输入的推荐人数据库是存在 ，不存在 不可以提交
	$scope.validtjrNum = function(){
		var tjrNum = $scope.formdata.tjrNum;
		if(typeof(tjrNum)!="undefined"){
			$http({
				method : "POST",
				url : 'admin/member/validMemNum',
				data:{
					memNum:tjrNum
				}
			}).success(function(page, status) {
				if(!page.success){
					return true; 
				}else{
					layer.msg("推荐人编号不存在,请重新输入",{icon : 5});
					$scope.formdata.tjrNum = "";
				}
			}); 
		}
	}
	//*******************  查询  *************************
	$scope.query = function(page) {   
		//取消全选
		$scope.chkall = false;
		$scope.chkAll($scope.chkall);   
		//查询
		$http({
			method : "POST",
			url : "admin/member/memberListdata/",
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
			url : "admin/member/memberListdata/",
			data : {
				page : page,
				jhState:$scope.jhState,
				djState:$scope.djState,
				memNum:$scope.memNum,
				tjrMemNum:$scope.tjrMemNum
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
			$scope.formdata.payPic = rw.payPic; 
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
		var fileurl = $('#payPic').val();
		/*if(fileurl==''){
			layer.alert('请上传图片', {
				icon : 3
			});  
			return false;
		} */
		$scope.formdata.payPic=fileurl;
		if($scope.addtype==1){  
			$http({
				method : "POST",
				url : "admin/member/addMember/",
				data : $scope.formdata
			}).success(function(page1, status) {
				/*-1 会员编号已经存在 新增失败
				 * -2 会员编号为空 提示 请勿重复提交
				 * -3 推荐人编号不存在 提示 请输入正确的推荐人编号
				 * 1新增成功*/
				if (page1.data==1) {
					layer.msg('新增会员成功', { icon : 1 });  
					$scope.queryall($scope.page);
				}else if(page1.data==-1){
					layer.msg('会员编号已经存在,请勿重复提交', { icon : 3 });  
					$scope.queryall($scope.page);
				}else if(page1.data==-2){
					layer.msg('会员编号为空,请勿重复提交', { icon : 3 });  
					$scope.queryall($scope.page);
				}else if(page1.data==-3){
					layer.msg('推荐人编号不存在,请重新填写', { icon : 3 });  
					$scope.queryall($scope.page);
				}
			}); 
			$('#adddialog').modal('hide');
		}else if($scope.addtype==2){ 
			$http({
				method : "POST",
				url : "admin/member/updateMember/",
				data : $scope.formdata
			}).success(function(page, status) {
				layer.msg('更新会员成功', { icon : 1 });  
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
					url : 'admin/member/deleteMember/?id=' + s 
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
					url : 'admin/member/deleteMember/?id=' + s 
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
	$scope.updateJhState = function(id,tjrNum){
		$scope.addtype=2;
		$scope.formdata.id = id;
		$scope.formdata.tjrNum = tjrNum;
		$scope.formdata.jhState = "1"; 
		var n = new Date();
		$scope.formdata.jhTime = $filter("date")(n, "yyyy-MM-dd HH:mm:ss");	//激活时间设为当前时间
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
	
	//登入
	$scope.login = function(memNum, loginPwd){
		$scope.formdata.memNum = memNum;
		$scope.formdata.loginPwd = loginPwd;
		$http({
			method : "POST",
			url : "front/lc/loginFromBackend/",
			data : $scope.formdata
		}).success(function(page, status) {
			layer.alert('登入成功', {
				icon : 1
			});  
			console.dir($("#contexpath").val());
			window.open($("#contexpath").val());
		}); 
		$scope.formdata = {}; 
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
		$scope.formdata.payPic = rw.payPic; 
		$('#adddialog').modal({}); 
	};  
	
	/**
	 * 新增会员页面使用到的"增”方法，专为新增会员定制
	 */
	$scope.saveAdd = function() {   
		$scope.addtype=1;
		$scope.save();
		$scope.formdata={};
		$("#img1").attr("src", "");
	};
	
	//上传缩略图的处理
	/*$scope.uploadfile = function() {
		$('#fileid1').click();
	}  */
	
}]); //end of Controller

//调用JQuery ajaxfileupload插件
/*function ajaxFileUpload() {
	$.ajaxFileUpload({
		url : 'admin/upload/',	//这里仅仅是URL请求，不是真的把图片放到admin/upload目录下
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
};*/

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

//是否冻结过滤器
app.filter("djFilter", function() {
	return function(input) {
		var out = "";
		if (input == 0) {
			out = "冻结";
			return out;
		}else if(input == 1){
			out = "解冻";
			return out;
		}else {
			out = "暂未填写";
			return out;
		}
	};
});  

//角色类型过滤器
app.filter("roleStateFilter", function() {
	return function(input) {
		var out = "";
		if (input == 0) {
			out = "普通会员";
			return out;
		}else if(input == 1){
			out = "超级管理员";
			return out;
		}else {
			out = "暂未填写";
			return out;
		}
	};
});  

//管家等级过滤器
app.filter("gjLevelFilter", function() {
	return function(input) {
		var out = "";
		if (input == 0) {
			out = "普通管家";
			return out;
		}else if(input == 1){
			out = "超级管家";
			return out;
		}else {
			out = "暂未填写";
			return out;
		}
	};
});  

app.filter("bankTypeFilter", function() {
	return function(input) {
		var out = "";
		if (input == 0) {
			out = "中国工商银行";
			return out;
		}else if(input == 1){
			out = "中国农业银行";
			return out;
		}else if(input == 2){
			out = "中国建设银行";
			return out;
		}else if(input == 3){
			out = "中国邮政储蓄银行";
			return out;
		}else if(input == 4){
			out = "中国银行";
			return out;
		}else if(input == 5){
			out = "招商银行";
			return out;
		}else if(input == 6){
			out = "交通银行";
			return out;
		}else if(input == 7){
			out = "中国光大银行";
			return out;
		}else if(input == 8){
			out = "中信银行";
			return out;
		}else if(input == 9){
			out = "兴业银行";
			return out;
		}else if(input == 10){
			out = "浦发银行";
			return out;
		}else if(input == 11){
			out = "华夏银行";
			return out;
		}else if(input == 12){
			out = "深圳发展银行";
			return out;
		}else if(input == 13){
			out = "广东发展银行 ";
			return out;
		}else if(input == 14){
			out = "中国民生银行";
			return out;
		}else {
			out = "暂未填写";
			return out;
		}
	};
});  
 
/**本指令是登记时把“密码”与“再次输入密码”对比校验的，如果单纯对比两个密码值是否相等，那么即便不相等，
 * 它也不算是angular的系统级的错误，即myForm是valid的，提交按钮照样可以提交，运用了本指令后，
 * angular将视其为系统级的错误了，无法提交。
 */
app.directive('equals',function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ngModelCtrl) {
            function validateEqual(myValue) {
                var valid = (myValue === scope.$eval(attrs.equals));
                ngModelCtrl.$setValidity('equal', valid);
                return valid ? myValue: undefined;
            }
            ngModelCtrl.$parsers.push(validateEqual);
            ngModelCtrl.$formatters.push(validateEqual);
            scope.$watch(attrs.equals,
            function() {
                ngModelCtrl.$setViewValue(ngModelCtrl.$viewValue);
            })
        }
    }
});
 