$(".login_info>p>a").mouseover(function(){
    $(this).addClass("cur1")
})
$(".login_info>p>a").mouseout(function(){
    $(this).removeClass("cur1")
})

$(".sn_menu").on("mouseover",function(){
    $(this).css("background","white")
    $(this).css("border-bottom","2px solid #fff")
    $(this).children().eq(0).css("color","#00b5be")
   $(this).children().eq(1).css("display","block")
})
$(".sn_menu").on("mouseout",function(){
    $(this).css("background","#f2f2f2")
    $(this).children().eq(0).css("color","#666")
    $(this).css("border-bottom","none")
    $(this).children().eq(1).css("display","none")
 })
 $(".menu_bd>a").mouseover(function(){
    $(this).css("color","#00b5be")
})
$(".menu_bd>a").mouseout(function(){
    $(this).css("color","#666")
})

//header1
var oa = $(".wsectoptex>ul>li>a")
oa.mouseover(function(){
    $(this).addClass("cur1")
})
oa.mouseout(function(){
    $(this).removeClass("cur1")
})
$(".fixwrap").mouseout(function(){
    $("#list").css("display","none")
})
$(".fixwrap").mouseover(function(){
    $("#list").css("display","block")
})

//nav2
var span = $(".item>h3")
span.mouseover(function(){
    $(this).css("margin-left","10px")
    $(this).parent().css("background","#ff8800")
})
span.mouseout(function(){
    $(this).parent().css("background","#e6243f")
    $(this).css("margin-left","0")
})

//nav3
var div = $(".item")
div.each(function(i){
    div.eq(i).on("mouseover",function(){
        $(this).children().eq(2).css("display","block")
        $(this).css("background","rgb(255,136,0)")
    })
    div.eq(i).on("mouseout",function(){    
        $(this).children().eq(2).css("display","none")
        $(this).css("background","rgb(230, 36, 63)")
    })
})

var li = $(".right_bar>ul>li")
li.mouseover(function(){
    $(this).children().eq(1).css("display","block")
})
li.mouseout(function(){
    $(this).children().eq(1).css("display","none")
})
$(".right_service").mouseover(function(){
    $(this).children().css("display","block")
})
$(".right_service").mouseout(function(){
    $(this).children().css("display","none")
})
$(".right_400").mouseover(function(){
    $(this).children().css("display","block")
})
$(".right_400").mouseout(function(){
    $(this).children().css("display","none")
})
$(".right_ma").mouseover(function(){
    $(this).children().css("display","block")
})
$(".right_ma").mouseout(function(){
    $(this).children().css("display","none")
})
$(".right_gotop").mouseover(function(){
    $(this).children().css("display","block")
})
$(".right_gotop").mouseout(function(){
    $(this).children().css("display","none")
})
$(".right_gotop").click(function(){
    $(document).scrollTop(0)
})
$(document).scroll(function(){
    if($(document).scrollTop()>=500){
        $("#xd").css("display","block")
    }else{
        $("#xd").css("display","none")
    }
})



$(".topsearch").on("mouseover",function(){
    $("#list1").css("display","block")
})
$(".topsearch").mouseout(function(){
    $("#list1").css("display","none")
})
var arr1=[]
arr1=(JSON.parse(localStorage.getItem("info")))
//console.log(arr1.length)
$(".mini_num").text(arr1.length)



