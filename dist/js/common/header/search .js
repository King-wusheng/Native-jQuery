$(".search_put").on("input propertychange",function(){
	var val = $(this).val()
	$.ajax({
		type:"post",
		url:"/SearchCompletion/handlers/productKeywordSuggest.jsx",
		data:{
			q:val
		},
		dataType:"json",
		success:function(data){
			//console.log(data)
			var data = data.suggest;
			$("#list").html("");
			for(var i=0;i<data.length;i++){
				var li = $("<li></li>");
				li.text(data[i].title) ;
				$("#list").append(li);
			}
		}
		
	})
})
$(".search_put1").on("input propertychange",function(){
	var val = $(this).val()
	$.ajax({
		type:"post",
		url:"/SearchCompletion/handlers/productKeywordSuggest.jsx",
		data:{
			q:val
		},
		dataType:"json",
		success:function(data){
			console.log(data)
			var data = data.suggest;
			$("#list1").html("");
			for(var i=0;i<data.length;i++){
				var li = $("<li></li>");
				li.text(data[i].title) ;
				$("#list1").append(li);
			}
		}
		
	})
})
$(".search_put2").on("input propertychange",function(){
	var val = $(this).val()
	$.ajax({
		type:"post",
		url:"/SearchCompletion/handlers/productKeywordSuggest.jsx",
		data:{
			q:val
		},
		dataType:"json",
		success:function(data){
			console.log(data)
			var data = data.suggest;
			$("#list2").html("");
			for(var i=0;i<data.length;i++){
				var li = $("<li></li>");
				li.text(data[i].title) ;
				$("#list2").append(li);
			}
		}
		
	})
})
//http://www.wushang.com

	







