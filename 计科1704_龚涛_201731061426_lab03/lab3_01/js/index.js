$(function() {
	//页面加载完毕后开始执行的事件
	// 获得城市对象的下拉框
	var $city = $("#city");
	
	// 利用二维数组来表示城市，注意对应关系
	var cities = [
            ["石家庄","邯郸","唐山","张家口","廊坊"],
            ["成都","巴中","绵阳"],
            ["深圳","东莞"],
            ];
	
	$('#provence').change(function(){
		$city.get(0).length = 1;
		
		var val = this.value;
		$.each(cities, function(i, n){
			if(val == i){
				$(n).each(function(i,m){
					$city.append("<option name='city'>"+m+"</option>");
				})
			}
		})
	});
});
