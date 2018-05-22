$(function(){	
	$.ajax({  	 
		   type: "POST",
		   url: "front/inout/findInOutRepo",
		   dataType:"json",
		   success: function(data){
		  	  if(data.length==0){
		  	  		var html = "";
		  			html += "<tr><td colspan='6'>";
		  			html +=  "暂无记录";
		  			html += "</td></tr>";
		  	  		$('.tbody').append(html);
		  	  	 }else{
				   	 for(var k in data){
				   		 if(data[k].bonusType==0){
				   			data[k].bonusType="动态奖";
				   		 }else if(data[k].bonusType==1){
				   			data[k].bonusType="静态冻结奖";
				   		 }else if(data[k].bonusType==2){
				   			data[k].bonusType="静态解冻奖";
				   		 }else if(data[k].bonusType==3){
				   			data[k].bonusType="神童日俸";
				   		 }else if(data[k].bonusType==4){
				   			data[k].bonusType="管家月俸";
				   		 }else if(data[k].bonusType==5){
				   			data[k].bonusType="种子积分";
				   		 }else if(data[k].bonusType==6){
				   			data[k].bonusType="激活积分";
				   		 }
				   		 var html = "";
				   		 html += "<tr  class='massages' id=\""+k+"\">";
				   		 html += "<td>"+data[k].showCreateTime+"</td>";
				   		 html += "<td>"+data[k].origiSalar+"</td>";
				   		 html += "<td>"+data[k].changeSalar+"</td>";
				   		 html += "<td>"+data[k].currSalar+"</td>";
				   		 html += "<td>"+data[k].bonusType+"</td>";
				   		 html += "<td>"+data[k].inoutDesc+"</td>";
				   		 html += "</tr>";
				   		 $('.tbody').append(html);
				   	 }
				   //每页显示条数 6 条
				  	$(".massages:gt(5)").hide();
		  	  	 }
		  	 }
		});
	//上一页 lt小于  gt大于 eq等于
	$(".pagepre").click(function(){
		var firstdisp = $(".massages:eq(0)").attr("id");
		var bool = $("#"+firstdisp).is(":hidden");
		if(bool){
			//最后一个显示的元素
			var beginindex = $(".massages:visible").first().attr("id");
			var endindex = (parseInt(beginindex) - 7)==-1 ? 0 : parseInt(beginindex) - 7;
			var hiddenindex = parseInt(beginindex)- 1 ;
			$(".massages:lt("+beginindex+"):gt("+endindex+")").show();
			if((parseInt(beginindex) - 7)==-1){
				$(".massages:eq("+0+")").show();
			}
			$(".massages:gt("+hiddenindex+")").hide();
		}else{
			alertMsg("已经是第一页了");		
		}
	});
	//下一页   lt小于  gt大于 eq等于 :hidden隐藏元素   :visible显示元素
	$(".pagenext").click(function(){
		var index = $(".massages").length-1;
		var lastdisp = $(".massages:eq("+index+")").attr("id");
		var bool = $("#"+lastdisp).is(":hidden");
		if(bool){
			//最后一个显示的元素
			var beginindex = $(".massages:visible").last().attr("id");
			var endindex = parseInt(beginindex)+ 7 ;
			var hiddenindex = parseInt(beginindex)+ 1 ;
			$(".massages:lt("+endindex+"):gt("+beginindex+")").show();
			$(".massages:lt("+hiddenindex+")").hide();
		}else{
			alertMsg("已经是最后一页了");
		}
	});				
})