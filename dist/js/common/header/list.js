var id = location.href.split("?")[1].split("=")[1]
$.ajax({
	type:"post",
	url:"/wsProductDetail/serverHandler/getAllRelationList.jsx",
	data:{
		productId: id
	},
	dataType:"json",
	success:function(data){
		console.log(data.oriProduct)
        var str=""
        str=`
            <div id="left_box">
                <div id="limg">
                    <div class="box">
                        <div class="filter"></div>
                        <img src="${data.oriProduct.logo}" class="middle" width="400" height="400">
                    </div>

                    <div id="minImg">
                            <img src="${data.oriProduct.logo}" class="middle" width="50" height="50">
                    </div>

                    <div class="max">
                        <img src="${data.oriProduct.logo}" class="bigImg" width="800" height="800">
                    </div>
                </div>

                <div class="sharelist fl">
                    <div class="bshare-custom">
                        <div class="bsPromo bsPromo2" style="float:left">分享好友：</div>
                        <a title="分享到QQ空间" class="bshare-qzone"></a>
                        <a title="分享到新浪微博" class="bshare-sinaminiblog"></a>
                        <a title="分享到人人网" class="bshare-renren"></a>
                        <a title="分享到腾讯微博" class="bshare-qqmb"></a>
                        <a title="分享到网易微博" class="bshare-neteasemb"></a>
                        <a title="更多平台" class="bshare-more bshare-more-icon more-style-addthis"></a>
                    </div>
                    <div class="collect fr"><a href="##" >收藏该商品</a></div>
                </div>
            </div>  
            <div id="right_box" class="topIntro">
                <h1>${data.oriProduct.name}</h1>
                <h2></h2>
                <div class="topright fl">
                    <div>
                        <ul>
                            <li>
                                <span>市&nbsp;&nbsp;场&nbsp;&nbsp;价：</span>
                                <del class="marketPriceValue">¥暂无价格</del></li>
                            <li>
                                <span class="huiyuanjia">会&nbsp;&nbsp;员&nbsp;&nbsp;价：</span>
                                <strong class="huiyuanjiaValue">¥${data.oriProduct.memberPrice}</strong>
                            </li>
                            <li class="pj">
                                <span>评&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价：</span>
                                <em><img src="../image/xing.png"></em>
                                <strong>0.0</strong>分
                                <a href="##">(已有0人评价)</a>
                            </li>
                            <li class="sale">
                                <span>优惠信息：</span><br>
                                <div>
                                    <h3>
                                        <p>
                                            <i>[9月大牌驾到，买就减50！]</i>
                                            9月大牌驾到，买就减50！
                                        </p>
                                    </h3>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="frame">
                    <ul>
                        <li class="num">
                            <span>数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;量</span>
                            <input type="button" class="reduce" value="-">
                            <input type="text" class="val" value="1">
                            <input type="button" class="add" value="+">
                        </li>
                        <li>
                            <b class="jia" style="cursor:pointer">加入购物车</b>
                            <a href="shopcar.html?id=${id}" class="jin"><i></i>进入购物车</a>
                        </li>
                    </ul> 
                    </div>
                </div>
            </div>  
        `
        $(".center").append(str)

        $(".box").mouseover(function(e){
            $(".filter").css("display","block")
            $(".max").css("display","block")
        
            var bl = $(this).offset().left
            var bt = $(this).offset().top
            $(this).mousemove(function(e){
                var el = e.pageX
                var et = e.pageY
                var l = el-bl-$(".filter").width()/2
                var t = et-bt-$(".filter").height()/2
                
                l = l>$(".box").width()-$(".filter").width()?$(".box").width()-$(".filter").width():(l<0?0:l)
                t = t>$(".box").height()-$(".filter").height()?$(".box").height()-$(".filter").height():(t<0?0:t)
                $(".filter").css("left",l)
                $(".filter").css("top",t)
                $(".bigImg").css("left",-2*l)
                $(".bigImg").css("top",-2*t)
            })
        })
        $(".box").mouseout(function(){
            $(".filter").css("display","none")
            $(".max").css("display","none")
        })
        
        $(".reduce").click(function(){
            if($(".val").val()==1){
                $(".val").val(1)
            }else{
                var num = $(".val").val()
                num--
                $(".val").val(num)
            }
        })
        $(".add").click(function(){
            var num = $(".val").val()
            num++
            $(".val").val(num)
            
        })
        //加入购物车
        var goods = {}
        $(".jia").click(function(){
            goodsId = location.href.split("?")[1].split("=")[1]
            if(localStorage.getItem("info")){
                arr = JSON.parse(localStorage.getItem("info"))
            }else{
                var arr = []
            }
            if(arr.length>0){
                var bool = false
                for(var i=0;i<arr.length;i++){
                    if(arr[i].id == goodsId){
                        arr[i].num =Number(arr[i].num)+ Number($(".val").val())
                        arr[i].title = $("#right_box>h1").text()
                        arr[i].price = $(".huiyuanjiaValue").text()
                        arr[i].img = data.oriProduct.logo
                        bool = true
                    }
                }
                if(!bool){
                    goods.id = goodsId
                    goods.title = $("#right_box>h1").text()
                    goods.price = $(".huiyuanjiaValue").text()
                    goods.img = data.oriProduct.logo
                    goods.num = $(".val").val()
                    arr.push(goods)
                }
            }else{
                goods.id = goodsId
                goods.title = $("#right_box>h1").text()
                goods.price = $(".huiyuanjiaValue").text()
                goods.img = data.oriProduct.logo
                goods.num = $(".val").val()
                arr.push(goods)
            }
            localStorage.setItem("info",JSON.stringify(arr))
        })
	}
})