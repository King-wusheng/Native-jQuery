$(".sort-m").css("display","none")
    $(".nav1>ul>li>a").css("color","white")
   $(".mainnav").css("background","#e6243f")
   if(localStorage.getItem("info")){
        var num = JSON.parse(localStorage.getItem("info")).length
        $(".mini_num").text(num)
    }else{
        $(".mini_num").text(0)
    }
    var arr = []
    arr = JSON.parse(localStorage.getItem("info"))
    //console.log(arr.length)
    var num = arr.length

    $(".mini_num").text(num)
    
    $(".btn-submit").click(function(){
        var name = $("#phone").val()
        var pas = $("#password").val()
        $.ajax({
            type:"get",
            url:"/register",
            data:{
                use:name,
                pas:pas
            },
            success:function(){
                if(data.status==1){
                    alert("登录成功！");
                    location.href="/?"+data.id;
                }else{
                    alert("用户名密码错误!");
                }
            }
        })
    })