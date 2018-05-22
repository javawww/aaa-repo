   
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
			url : basepath+"user/findMenu"
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
	 
	$scope.types="";	//五大货源
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
			url : basepath+"cg/findCg/",
			data : {
				page : page,
				types:$scope.types,
				djrxm:$scope.djrxm,
				prostate:$scope.prostate,
				uid:uid,
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
			url : basepath+"cg/findCg/",
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
	
	//增、改共用的changepro函数
	$scope.changepro=function(types){ 
		$scope.promsdata = []; 
		var name="";
		var name1="";
		var name2="";
		var name3=""; 
		if(types==1){
			name="硫";
			name1="灰";
			name2="矾";
			name3="挥发";
		}else if(types==2){
			name="硫";
			name1="灰";
			name2="矾";
			name3="挥发";
		}else if(types==3){
			name="软化点";
			name1="结焦值";
			name2="喹啉不溶物";
			name3="甲苯不溶物";
		}else if(types==4){
			name="电阻率";
			name1="耐压强度";
			name2="体积密度";
			name3="二氧化碳反应性";
		}else if(types==5){
			name="电阻率";
			name1="耐压强度";
			name2="体积密度";
			name3="二氧化碳反应性";
		} 
		var protypes={};
		protypes.name=name;   //以types==5为例，相当于key是电阻率，{name:"电阻率"}
		protypes.id='value1'; //{name:"电阻率", id:"value1"}
		var protypes1={};
		protypes1.name=name1;
		protypes1.id='value2'; 
		var protypes2={};
		protypes2.name=name2;
		protypes2.id='value3'; 
		var protypes3={};
		protypes3.name=name3;
		protypes3.id='value4'; 
		$scope.promsdata.push(protypes);
		$scope.promsdata.push(protypes1);
		$scope.promsdata.push(protypes2);
		$scope.promsdata.push(protypes3); 	//promsdata[{name:"电阻率", id:"value1"},{name:"耐压强度", id:"value2"}, ...]
	}
	
	//这里是增、改 发送信号URL的地方
	$scope.save = function() { 
		if($scope.addtype==1){  
			$http({
				method : "POST",
				url : basepath+"cg/addcg/",
				data : $scope.formdata
			}).success(function(page1, status) {
				if (page1.data==1) {
					layer.alert('保存成功', {
						icon : 3
					});  
					$scope.queryall($scope.page);
				}
			}); 
			$('#adddialog').modal('hide'); 
		}else if($scope.addtype==2){ 
			$http({
				method : "POST",
				url : basepath+"cg/updateCg/",
				data : $scope.formdata
			}).success(function(page, status) {
				layer.alert('保存成功', {
					icon : 3
				});  
				$scope.queryall($scope.page);
			});  
			$('#adddialog').modal('hide');  
		} 
	};  
	
	//*******************   删除   *************************
	$scope.del = function() {
		var ids = [];
		angular.forEach($scope.rows, function(_row, index, array) {
			if (_row.selected) {
				ids.push(_row.id);
			}
		}); 
		if (ids.length >= 1) { 
			layer.confirm('是否确认删除？', {
				icon : 3
			}, function(index) { 
				var s="";
				for(var i=0;i<ids.length;i++){
					s+=ids[i]+",";
				}
				$http({
					method : "DELETE",
					url : basepath+'cg/deleteCg/?id=' + s 
				}).success(function(page, status) {
					if (page != 0) {
						layer.alert('删除成功', {
							icon : 6
						});
						$scope.queryall($scope.page);
						$scope.chkall = false;
					} else {
						layer.alert('存在子目录，不可删除', {
							icon : 6
						});
					} 
				}).error(function() {
					layer.alert('错误', {
						icon : 6
					});
					$scope.chkall = false;
					$scope.chkAll($scope.chkall);
				});
			});
		} else {
			layer.alert('请选择一条记录删除', {
				icon : 6
			});
		}
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
			url : basepath+"cg/findCgxqxx/?cgid="+id+"&page="+page
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
			url : basepath+"cg/findcgxxbyid/?id="+id 
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
			url : basepath+'cg/updateCgStateByIds/?state='+$scope.shenhejg+'&id=' + $scope.shenheids 
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
					url : basepath+'cg/updateCgStateByIds/?state=3&id=' + s 
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

app.filter("typecon", function() {
	return function(input) {
		var out = "";
		if (input == 1) {
			out = "石油焦";
			return out;
		}else if(input == 2){
			out = "煅后焦";
			return out;
		} else if(input == 3){
			out = "改制沥青";
			return out;
		} else if(input == 4){
			out = "预焙阳极(生块)";
			return out;
		} else if(input == 5){
			out = "预焙阳极(熟块)";
			return out;
		} 
	};
});  

app.filter("statecon", function() {
	return function(input) {
		var out = "";
		if (input == 0) {
			out = "未审核";
			return out;
		}else if(input == 1){
			out = "审核通过";
			return out;
		}else if(input == 2){
			out = "审核不通过";
			return out;
		}else if(input == 3){
			out = "手动作废";
			return out;
		} 
	};
});  
 
 