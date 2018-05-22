$(function(){	
//发送ajax异步请求  获取当前用户 银树金树种植状态信息
$.ajax({   	 
	 type: "GET",
	 url: "front/gain/updateTreePlants",
	 dataType:"json",
	 success: function(data){
		 //金树银树 默认0没有收益
		 var jsGainis0 = "<img class='clickflag_1' src='resources/front/images/grape-2.png'>";
		 var ysGainis0 = "<img class='clickflag_1' src='resources/front/images/grape-3.png'>";
		 //金树银树 产生收益1
		 var jsGainis1 = "<img class='clickflag_2' src='resources/front/images/chengshuoys.gif'>";
		 var ysGainis1 = "<img class='clickflag_2' src='resources/front/images/chengshuojs.gif'>";
		 //金树银树  产能耗尽3
		 var jsGainis3 = "<img class='clickflag_3' src='resources/front/images/kuweiyingshu.png'>";
		 var ysGainis3 = "<img class='clickflag_3' src='resources/front/images/kuweijingshu.png'>";
		 for(var k in data){
			 $("#di"+data[k].treeNo).attr("treeid",data[k].id);
			 if(data[k].isGain==1){//有日分红  1可以收益 
				//种树
	    		 if(data[k].treeType==0){//种植的为银树
	    			 $("#di"+data[k].treeNo).html(jsGainis1);//没有 
	    		 }else if(data[k].treeType==1){//种植的为金树
	    			 $("#di"+data[k].treeNo).html(ysGainis1);
	    		 }
	    		 //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
			 }else if(data[k].isGain==0){//默认0没有收益
	    		 if(data[k].treeType==0){
	    			 $("#di"+data[k].treeNo).html(jsGainis0);//收取银树
	    		 }else if(data[k].treeType==1){
	    			 $('#di'+data[k].treeNo).html(ysGainis0);//收取金树
	    		 } 
		    	 //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
			 }else if(data[k].isGain==3){//日分红产能耗尽
				 if(data[k].treeType==0){
	    			 $("#di"+data[k].treeNo).html(jsGainis3);//产能耗尽
	    		 }else if(data[k].treeType==1){
	    			 $('#di'+data[k].treeNo).html(ysGainis3);//产能耗尽
	    		 } 
				 //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
			 }
		 }
		 //为产生收益图片绑定点击事件  1
		 var lock = true;//锁住表单
		 var index;
    	 $(".clickflag_2").click(function(){
    		 var treeNo = $(this.parentElement).attr("data-treeno");
    		 if(treeNo!=null){
    			 //立即更换树的图片：  没有收益状态的图片
    			 if(parseInt(treeNo) >= 1 && parseInt(treeNo)<=10){
    				 $("#di"+treeNo).html(jsGainis0);
    			 }else{
    				 $('#di'+treeNo).html(ysGainis0);
    			 }
    			 if(!lock){//判断该锁是否打开，如果是关闭的，则直接返回
    				 return false;
    			 }
    			 lock = false;//进来后，立马把锁锁住
    			 index = layer.load(1, {
    				 shade: [0.5,'#000'] //0.1透明度的白色背景
    			 });
    			 $.ajax({
    				 type:"POST",
    				 dataType:"json",
    				 data:{treeNo:treeNo},
    				 url:"front/gain/clickGainAndUpda", 
    				 success:function(data){
    					 var result_type = data.attributes.result_type;
    					 if(result_type == 1){
    						 var currencyInfo = data.attributes.currencyInfo;//币种类型
    						 $("#statDJWallet").text(currencyInfo.statDJWallet);//静态冻结钱包动态额度
    						 alertMsg("恭喜成功获取日分红");
    						 lock = true;// 打开锁
    						 layer.close(index);
    						 //window.location.reload(true);
    					 }else{
    						 alertMsg("服务异常,请联系管理员");
    						 lock = true;// 打开锁
    						 layer.close(index);
    					 }
    				 }
    			 });
    		 }else{
    			 alertMsg("当前服务器访问量过大,请重新点击获取收益");
    		 }
    	 });
    	//为没有收益图片绑定事件0
    	 $(".clickflag_1").click(function(){
    	 	 alertMsg("当前没有产生日分红");
    	 	 lock = true;// 打开锁
			 layer.close(index);
    	 });
    	//为产能耗尽图片绑定事件 3
    	 $(".clickflag_3").click(function(){
    		alertMsg("产能耗尽请重新种植");
    		lock = true;// 打开锁
			 layer.close(index);
    	 });
    	 //-------------------------------------------------------------------
	  }
});	
//定时器   定是的请求后台  动态的更新种植树的状态 有收益 无收益 枯萎
window.setInterval(function(){
	$.ajax({   	 
		 type: "GET",
		 url: "front/gain/updateTreePlants",
		 dataType:"json",
		 success: function(data){
			 //金树银树 默认0没有收益
			 var jsGainis0 = "<img class='clickflag_1' src='resources/front/images/grape-2.gif'>";
			 var ysGainis0 = "<img class='clickflag_1' src='resources/front/images/grape-3.gif'>";
			 //金树银树 产生收益1
			 var jsGainis1 = "<img class='clickflag_2' src='resources/front/images/chengshuoys.gif'>";
			 var ysGainis1 = "<img class='clickflag_2' src='resources/front/images/chengshuojs.gif'>";
			 //金树银树  产能耗尽3
			 var jsGainis3 = "<img class='clickflag_3' src='resources/front/images/kuweiyingshu.png'>";
			 var ysGainis3 = "<img class='clickflag_3' src='resources/front/images/kuweijingshu.png'>";
			 for(var k in data){
				 $("#di"+data[k].treeNo).attr("treeid",data[k].id);
				 if(data[k].isGain==1){//有日分红  1可以收益 
					//种树
		    		 if(data[k].treeType==0){//种植的为银树
		    			 $("#di"+data[k].treeNo).html(  jsGainis1);//没有 
		    		 }else if(data[k].treeType==1){//种植的为金树
		    			 $("#di"+data[k].treeNo).html(ysGainis1);
		    		 }
		    		 //--------------------------------------------------------
				 }else if(data[k].isGain==0){//默认0没有收益
		    		 if(data[k].treeType==0){
		    			 $("#di"+data[k].treeNo).html(jsGainis0);//收取银树
		    		 }else if(data[k].treeType==1){
		    			 $('#di'+data[k].treeNo).html(ysGainis0);//收取金树
		    		 } 
		    		//--------------------------------------------------------
				 }else if(data[k].isGain==3){//日分红产能耗尽
					 if(data[k].treeType==0){
		    			 $("#di"+data[k].treeNo).html(jsGainis3);//产能耗尽
		    		 }else if(data[k].treeType==1){
		    			 $('#di'+data[k].treeNo).html(ysGainis3);//产能耗尽
		    		 } 
					//--------------------------------------------------------
				 }
			 }
			 //为产生收益图片绑定点击事件  1
			 var lock = true;//锁住表单
			 var index ;
	    	 $(".clickflag_2").click(function(){
	    		 var treeNo = $(this.parentElement).attr("data-treeno");
	    		 if(treeNo!=null){
	    			 //立即更换树的图片：  没有收益状态的图片
	    			 if(parseInt(treeNo) >= 1 && parseInt(treeNo)<=10){
	    				 $("#di"+treeNo).html(jsGainis0);
	    			 }else{
	    				 $('#di'+treeNo).html(ysGainis0);
	    			 }
	    			 if(!lock){//判断该锁是否打开，如果是关闭的，则直接返回
	    				 return false;
	    			 }
	    			 lock = false;//进来后，立马把锁锁住
	    			 index = layer.load(1, {
	    				 shade: [0.5,'#000'] //0.1透明度的白色背景
	    			 });
	    			 $.ajax({
	    				 type:"POST",
	    				 dataType:"json",
	    				 data:{treeNo:treeNo},
	    				 url:"front/gain/clickGainAndUpda", 
	    				 success:function(data){
	    					 var result_type = data.attributes.result_type;
	    					 if(result_type == 1){
	    						 var currencyInfo = data.attributes.currencyInfo;//币种类型
	    						 $("#statDJWallet").text(currencyInfo.statDJWallet);//静态冻结钱包动态额度
	    						 alertMsg("恭喜成功获取日分红");
	    						 lock = true;// 打开锁
	    						 layer.close(index);
	    						 //window.location.reload(true);
	    					 }else{
	    						 alertMsg("服务异常,请联系管理员");
	    						 lock = true;// 打开锁
	    						 layer.close(index);
	    					 }
	    				 }
	    			 });
	    		 }else{
	    			 alertMsg("当前服务器访问量过大,请重新点击获取收益");
	    		 }
	    	 });
	    	//为没有收益图片绑定事件0
	    	 $(".clickflag_1").click(function(){
	    	 	 alertMsg("当前没有产生日分红");
	    	 	 lock = true;// 打开锁
				 layer.close(index);
	    	 });
	    	//为产能耗尽图片绑定事件 3
	    	 $(".clickflag_3").click(function(){
	    		alertMsg("产能耗尽请重新种植");
	    		lock = true;// 打开锁
				layer.close(index);
	    	 });
	    	//--------------------------------------------------------
		  }
	});	
}, 3000);
//--------------------------------------------------------
});