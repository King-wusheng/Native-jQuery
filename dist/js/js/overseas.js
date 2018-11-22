$(".topsearch").on("mouseover",function(){
    $("#list2").css("display","block")
})
$(".topsearch").mouseout(function(){
    $("#list2").css("display","none")
})




var banner = {
    aLi:$(".slide_adv>li"),
    aBtn:$(".banner_btn>span"),
    iNow:0,
    Next:0,
    init:function() {
        this.autoPlay();
        this.over()
        this.out()
    },
    autoPlay(){
        var _this = this
        this.timer = setInterval(function(){
            if(_this.Next == _this.aLi.length-1){
                _this.Next = 0;
            }else{
                _this.Next++
            }

            _this.toImg()
        },3000)
        
    },
    toImg:function(){
        this.aLi.eq(this.iNow).stop().fadeTo(1000,0);
        this.aLi.eq(this.Next).stop().fadeTo(1000,1);
        this.aBtn.eq(this.iNow).addClass("sea_active").siblings().removeClass("sea_active")
        this.iNow = this.Next;
    },
    over:function(){
        var _this = this
        $(".slide_main").mouseover(function(){
            clearInterval(_this.timer)
        })
    },
    out:function(){
        var _this = this
        $(".slide_main").mouseout(function(){
            _this.autoPlay()
        })
    }

}
banner.init();

var banner1 = {
    oLi:$(".floor_logoes>li"),
    iNow:0,
    Next:0,
    init:function() {
        this.autoPlay();
        this.over()
        this.out()
    },
    autoPlay(){
        var _this = this
        this.timer = setInterval(function(){
            if(_this.Next == _this.oLi.length-1){
                _this.Next = 0;
            }else{
                _this.Next++
            }

            _this.toImg()
        },4000)
        
    },
    toImg:function(){
        this.oLi.eq(this.iNow).stop().fadeTo(1000,0);
        this.oLi.eq(this.Next).stop().fadeTo(1000,1);
        this.iNow = this.Next;
    },
    over:function(){
        var _this = this
        $(".floor_logoes").mouseover(function(){
            clearInterval(_this.timer)
        })
    },
    out:function(){
        var _this = this
        $(".floor_logoes").mouseout(function(){
            _this.autoPlay()
        })
    }
}
banner1.init();

    

var arr = []
arr = JSON.parse(localStorage.getItem("info"))
//console.log(arr.length)
var num = arr.length
$(".mini_num").text(num)