layui.use('form', function(){
  var form = layui.form();
  form.verify({
	  username: function(value, item){ //value：表单的值、item：表单的DOM对象
		  if(!new RegExp("^[a-zA-Z0-9]{6,12}$").test(value)){
			  return '用户名由数字或者字母组成,6至12个字符长度';
		  }
	  },
	  pass: [
	         /^[\S]{6,12}$/
	         ,'密码必须6到12位，且不能出现空格'
	         ],
	 regPwd: function(value) {
		 //获取密码
		 var pwd = $("#paswd").val();
		 if(!new RegExp(pwd).test(value)) {
			 return '两次输入的密码不一致';
		 }
	 },
	 regPwds: function(value) {
		 //获取密码
		 var pwds = $("#tradePwd").val();
		 if(!new RegExp(pwds).test(value)) {
			 return '两次输入二级的密码不一致';
		 }
	 }
	 
	  
  });      
});

     