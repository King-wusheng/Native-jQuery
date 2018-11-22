var banner = {
    aLi:$(".banner>ul>li"),
    banner:$(".banner"),
    left:$(".left"),
    right:$(".right"),
    aBtn:$("#btn>a"),
    timer:null,
    iNow:0,
    Next:0,
    init:function() {
        this.out();
        this.over();
        this.btn()
        this.autoPlay();
        this.leftmove()
        this.rightmove()
    },
    autoPlay(){
        var _this = this
        clearInterval(this.timer)
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
        this.iNow = this.Next;
        this.aBtn.eq(this.iNow).addClass("active").siblings().removeClass("active");
    },
    over:function(){
        var _this = this;
        this.banner.mouseover(function(){
            clearInterval(_this.timer)
        })
    },
    out:function(){
        var _this = this;
        this.banner.mouseout(function(){
            _this.autoPlay()
        })
    },
    btn:function(){
        var _this = this;
        this.aBtn.each(function(i){
            
            _this.aBtn.eq(i).mouseover(function(){
                _this.aBtn.eq(i).addClass("active").siblings().removeClass("active");
                _this.aLi.eq(i).css("opacity","1").siblings().css("opacity","0")
                _this.Next = i;
                _this.toImg()
            })
        })
    },
    leftmove:function(){
        var _this = this;
        this.left.on("click",function(){
            if(_this.Next == 0){
                _this.Next = _this.aLi.length-1;
            }else{
                _this.Next--
            }
            _this.toImg()
        })
    },
    rightmove:function(){
        var _this = this;
        this.right.on("click",function(){
            if(_this.Next == _this.aLi.length-1){
                _this.Next = 0;
            }else{
                _this.Next++
            }
            _this.toImg()
        })
    }
    
}
banner.init()

$(".banner").mouseover(function(){
    $("#dir").css("display","block")
})
$(".banner").mouseout(function(){
    $("#dir").css("display","none")
})
