$.when($.ready).then(function(){
	$('#email').blur(function(){
		//邮箱验证0
		var e = $(this).val();
		var ps1 = $('#pass1').val();
		if (e.length<6 || e.length>18) {
			$('#par_email').removeClass('has-success');
			$('#par_email').addClass('has-error');
			$('#showText_email').html('6~18个字符，可使用字母、数字、下划线，需以字母开头');
		} else{
			$('#par_email').removeClass('has-error');
			$('#par_email').addClass('has-success');
			$('#showText_email').html('success');
		}
		if (ps1 == e) {
			$('#par_pass').removeClass('has-success');
			$('#par_pass').addClass('has-error');
			$('#showText_pass').html('<span style = "color:red;">密码不能和邮箱完全相同</span>');
		}
	})
	
	//密码验证
	$('#pass1').blur(function(){
		//密码验证
		var ps1 = $(this).val();
		var e = $('#email').val()
		if (ps1 == e) {
			$('#par_pass').removeClass('has-success');
			$('#par_pass').addClass('has-error');
			$('#showText_pass').html('<span style = "color:red;">密码不能和邮箱完全相同</span>');
		} else{
			$('#par_pass').removeClass('has-error');
			$('#par_pass').addClass('has-success');
			$('#showText_pass').html('success');
			$('#showText_repass').html('请再次输入密码');
		}
		if (ps1 == '') {
			$('#par_pass').removeClass('has-success');
			$('#par_pass').addClass('has-error');
			$('#showText_pass').html('<span style = "color:red;">请输入密码</span>');
		}
	})
	$('#pass2').blur(function(){
		//密码验证
		var ps2 = $(this).val();
		var ps1 = $('#pass1').val()
		if (ps1 != ps2) {
			$('#par_pass2').removeClass('has-success');
			$('#par_pass2').addClass('has-error');
			$('#showText_repass').html('<span style = "color:red;">两次输入的密码不一致</span>');
		} else if(ps2 == ''){
			$('#showText_repass').html('请再次输入密码');
		} else if(ps1 == ps2){
			$('#par_pass2').removeClass('has-error');
			$('#par_pass2').addClass('has-success');
			$('#showText_repass').html('success');
		}
	})
	
	//手机号码验证
	$('#tel').blur(function() {
		var tel = $(this).val();
		var myReg = /^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}|17[0-9]{9}$/;
		$("#show_inputtel").html("手机号输入有误");
		if (myReg.test(tel)) {
			$('#par_tel').removeClass('has-error');
			$('#par_tel').addClass('has-success');
			$('#showText_tel').html('success');
		}else{
			$('#par_tel').removeClass('has-success');
			$('#par_tel').addClass('has-error');
			$('#showText_tel').html('<span style = "color:red;">请填写正确的手机号</span>');
		}
	})
	
	$("#login_btn").click(function(){
		var a = $('#showText_email').html();
		var b = $('#showText_pass').html();
		var c = $('#showText_repass').html();
		var d = $('#showText_tel').html();
		
		if (a == "success" &&
			b == "success" &&
			c == "success" &&
			d == "success") {
			alert("登录成功！");
		} else{
			alert("注册信息有误，请检查！");
		}
	})
})

function reset_html(){
	window.location.href = 'index.html';
}