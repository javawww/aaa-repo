$(function(){
//发送ajax异步请求  获取当前用户 银树金树种植状态信息
var globle_flag = false;
var globle_memberId = $("#memId").val();
$.ajax({   	 
	 type: "POST",
	 url: "front/tree/findTreesByMemId",
	 dataType:"json",
     data:{id : globle_memberId},
     success: function(data){
   	 //金树银树 默认0没有收益
   	 var jsGainis0 = "<img class='clickflag_1' src='resources/front/images/grape-2.gif'>";
   	 var ysGainis0 = "<img class='clickflag_1' src='resources/front/images/grape-3s.gif'>";
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
   		 }else if(data[k].isGain==0){//默认0没有收益
	    		 if(data[k].treeType==0){
	    			 $("#di"+data[k].treeNo).html(jsGainis0);//收取银树
	    		 }else if(data[k].treeType==1){
	    			 $('#di'+data[k].treeNo).html(ysGainis0);//收取金树
	    		 } 
   		 }else if(data[k].isGain==3){//日分红产能耗尽
   			 if(data[k].treeType==0){
	    			 $("#di"+data[k].treeNo).html(jsGainis3);//产能耗尽
	    		 }else if(data[k].treeType==1){
	    			 $('#di'+data[k].treeNo).html(ysGainis3);//产能耗尽
	    		 } 
   		 }
   	 }
   	//为产生收益图片绑定点击事件  1
   	 var lock = true;//锁住表单
   	 var index;
	 $(".clickflag_2").bind("click",function(){
			 if(!lock){//判断该锁是否打开，如果是关闭的，则直接返回
				 return false;
			 }
			 lock = false;//进来后，立马把锁锁住
			 index = layer.load(1, {
			     shade: [0.5,'#000'] //0.1透明度的白色背景
			   });
		     var treeNo = $(this.parentElement).attr("data-treeno");
			 var treeid = $(this.parentElement).attr("treeid");//获取点击树的ID值
			 console.dir("treeid:"+treeid);
			 console.dir("treeNo:"+treeNo);
			//ajax异步提交
			 $.ajax({
				 type:"POST",
				 dataType:"json",
				 data:{id:treeid},
				 url:"front/steal/steal", 
				 success:function(data){
					 console.dir(data);
					//返回类型 无论如何都会获取到值的
					 var result_type = data.attributes.result_type;
					 if(result_type == -1){
						 alertMsg("无法偷取");
						 lock = true;// 打开锁
					 	 layer.close(index);
					 }else if(result_type == -2){
						 alertMsg("您已经偷过,不能重复偷取");
						 lock = true;// 打开锁
					 	 layer.close(index);
					 }else if (result_type == 1){//偷取成功
						//偷取成功后 偷取的金额会动态的在 个人币种信息中发生变化 
					     var currencyInfo = data.attributes.currencyInfo;//币种类型
						 parent.parent.parent.$("#dynWallet").text(currencyInfo.dynWallet);
						 alertMsg("恭喜成功偷取");
						 lock = true;// 打开锁
					 	 layer.close(index);
					 }else if(result_type == -3){
						 alertMsg("该产能已被其他玩家偷取完毕，请君下次跑在别人前面");
						 lock = true;// 打开锁
					 	 layer.close(index);
					 }else if(result_type == -4){
						 alertMsg("神童饥肠辘辘,无法工作,请供奉神童");
						 lock = true;// 打开锁
					 	 layer.close(index);
					 }
				 }
			 });
		 });
		//为没有收益图片绑定事件0
		 $(".clickflag_1").bind("click",function(){
			 alertMsg("果实尚未成熟,偷取失败");
			 lock = true;// 打开锁
		 	 layer.close(index);
		 });
		//为产能耗尽图片绑定事件 3
		 $(".clickflag_3").bind("click",function(){
			 alertMsg("产能已经耗尽,偷取失败");
			 lock = true;// 打开锁
		 	 layer.close(index);
		 });
		//--------------------------------------------------------
    }
});
//设置的定时器 目的 : 种植的树的装填的动态变动  即无收益 有收益 枯萎
window.setInterval(function(){ 
		$.ajax({   	 
			 type: "POST",
			 url: "front/tree/findTreesByMemId",
			 dataType:"json",
		     data:{id : globle_memberId},
		     success: function(data){
		    	 //金树银树 默认0没有收益
		    	 var jsGainis0 = "<img class='clickflag_1' src='resources/front/images/grape-2.gif'>";
		    	 var ysGainis0 = "<img class='clickflag_1' src='resources/front/images/grape-3s.gif'>";
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
		    		 }else if(data[k].isGain==0){//默认0没有收益
			    		 if(data[k].treeType==0){
			    			 $("#di"+data[k].treeNo).html(jsGainis0);//收取银树
			    		 }else if(data[k].treeType==1){
			    			 $('#di'+data[k].treeNo).html(ysGainis0);//收取金树
			    		 } 
		    		 }else if(data[k].isGain==3){//日分红产能耗尽
		    			 if(data[k].treeType==0){
			    			 $("#di"+data[k].treeNo).html(jsGainis3);//产能耗尽
			    		 }else if(data[k].treeType==1){
			    			 $('#di'+data[k].treeNo).html(ysGainis3);//产能耗尽
			    		 } 
		    		 }
		    	 }
		    	 //为产生收益图片绑定点击事件  1
		    	 var lock = true;//锁住表单
		    	 var index;
	    		 $(".clickflag_2").bind("click",function(){
	   				 if(!lock){//判断该锁是否打开，如果是关闭的，则直接返回
	   					 return false;
	   				 }
	   				 lock = false;//进来后，立马把锁锁住
	   				 index = layer.load(1, {
	   				     shade: [0.5,'#000'] //0.1透明度的白色背景
	   				   });
	    			 var treeNo = $(this.parentElement).attr("data-treeno");
	   				 var treeid = $(this.parentElement).attr("treeid");//获取点击树的ID值
	   				 console.dir("treeid:"+treeid);
	   				 console.dir("treeNo:"+treeNo);
	   				//ajax异步提交
	   				 $.ajax({
	   					 type:"POST",
	   					 dataType:"json",
	   					 data:{id:treeid},
	   					 url:"front/steal/steal", 
	   					 success:function(data){
	   						 console.dir(data);
	   						//返回类型 无论如何都会获取到值的
	   						 var result_type = data.attributes.result_type;
	   						 if(result_type == -1){
	   							 alertMsg("无法偷取");
	   							 lock = true;// 打开锁
	   						 	 layer.close(index);
	   						 }else if(result_type == -2){
	   							 alertMsg("您已经偷过,不能重复偷取");
	   							 lock = true;// 打开锁
	   						 	 layer.close(index);
	   						 }else if (result_type == 1){//偷取成功
	   							//偷取成功后 偷取的金额会动态的在 个人币种信息中发生变化 
	   						     var currencyInfo = data.attributes.currencyInfo;//币种类型
	   							 parent.parent.parent.$("#dynWallet").text(currencyInfo.dynWallet);
	   							 alertMsg("恭喜成功偷取");
	   							 lock = true;// 打开锁
	   						 	 layer.close(index);
	   						 }else if(result_type == -3){
	   							 alertMsg("该产能已被其他玩家偷取完毕，请君下次跑在别人前面");
	   							 lock = true;// 打开锁
	   						 	 layer.close(index);
	   						 }else if(result_type == -4){
	   							 alertMsg("神童饥肠辘辘,无法工作,请供奉神童");
	   							 lock = true;// 打开锁
	   						 	 layer.close(index);
	   						 }
	   					 }
	   				 });
	    		 });
	    		//为没有收益图片绑定事件0
	    		 $(".clickflag_1").bind("click",function(){
	    			 alertMsg("果实尚未成熟,偷取失败");
	    			 lock = true;// 打开锁
					 layer.close(index);
	    		 });
	    		//为产能耗尽图片绑定事件 3
				 $(".clickflag_3").bind("click",function(){
					 alertMsg("产能已经耗尽,偷取失败");
					 lock = true;// 打开锁
					 layer.close(index);
				 });
				//--------------------------------------------------------
		     }
	});
}, 6000);
//--------------------------------------------------------
});