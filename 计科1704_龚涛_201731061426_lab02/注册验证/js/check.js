$.when($.ready).then(function() {
	//用户账号验证
	$('#inputUserID').blur(function() {
		var userid = $(this).val();
		$("#show_inputid").html("success");
		if (userid.length < 10) {
			$("#show_inputid").html("至少10个字符");
		}
		if (userid == "") {
			$("#show_inputid").html("不能为空");
		}
	})

	//密码验证
	$('#inputPassword').blur(function() {
		var password = $(this).val();
		$("#show_inputpass").html("success");
		if (password == "") {
			$("#show_inputpass").html("不能为空");
		}
	})

	$('#inputPassword1').blur(function() {
		var password = $('#inputPassword').val();
		var password1 = $(this).val();
		$("#show_inputpass1").html("success");
		if (password1 == "") {
			$("#show_inputpass1").html("不能为空");
		}
		if (password != password1) {
			$("#show_inputpass1").html("两次输入的密码不一致");
		}
	})

	//电子邮件验证
	$('#inputEmail').blur(function() {
		var email = $(this).val();
		var myReg=/^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;
		$("#show_inputemail").html("邮箱格式不正确");
		if (email == "") {
			$("#show_inputemail").html("不能为空");
		}
		if (myReg.test(email)) {
			$("#show_inputemail").html("success");
		}
	})

	//手机号码验证
	$('#inputTel').blur(function() {
		var tel = $(this).val();
		var myReg = /^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}|17[0-9]{9}$/;
		$("#show_inputtel").html("手机号输入有误");
		if(tel == "")
			$("#show_inputtel").html("不能为空");
		if (myReg.test(tel)) {
			$("#show_inputtel").html("success");
		}
	})
	
	//地址
	$('#inputAddress').blur(function() {
		var addr = $(this).val();
		$("#show_inputaddr").html("success");
		if (addr == "") {
			$("#show_inputaddr").html("不能为空");
		}
	})
	
	//注册验证
	$("#login_btn").click(function(){
		var a = $("#show_inputid").html();
		var b = $("#show_inputpass").html();
		var c = $("#show_inputpass1").html();
		var d = $("#show_inputemail").html();
		var e = $("#show_inputtel").html();
		var f = $("#show_inputaddr").html();
		
		if (a == "success" &&
			b == "success" &&
			c == "success" &&
			d == "success" &&
			e == "success" &&
			f == "success") {
			alert("注册成功！");
		} else{
			alert("注册信息有误，请检查！");
		}
	})
})
