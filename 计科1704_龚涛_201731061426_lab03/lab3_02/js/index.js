$(function() {
	$('#btn_gongsir').click(function() {
		var uname = $('#name').val();
		var uemail = $('#email').val();
		var usa = $('#salary').val();
		var str = "";
		var time = "id"+new Date().getTime();
		
		str = '<tr id=' + time + '><td>' + uname + '</td><td>' + uemail + '</td><td>' + usa +
			'</td><td><button type="button" class="btn btn-block btn-danger" onclick="mydelete(' + time +
			')">删除</button></td></tr>';
		$('#mytable').append(str);
	});

});

function mydelete(id) {
	$(id).remove();
};
