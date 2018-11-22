
function runAnync(){
    var def=$.Deferred();

    var newarr = []
    var num = []
    if(localStorage.getItem("info")){
        var str = ""
        var arr =JSON.parse(localStorage.getItem("info")) 
        //console.log(arr)
        for(var i=0;i<arr.length;i++){
            //console.log(arr[i].num)
            num[num.length] = Number(arr[i].num)
            //console.log(num)
            $.ajax({
                id:num[i],
                type:"post",
                url:"/wsProductDetail/serverHandler/getAllRelationList.jsx",
                data:{
                    productId: arr[i].id
                },
                dataType:"json",
                success:function(data){
                    console.log(this.id)
                    //console.log(data.oriProduct)
                var str = ""
                str=`
                        <li>
                        <div class="c_check">
                            <div class="checkbox active" style="float:left">
                                <input type="checkbox"  id="" class="check" />
                            </div>
                            <div class="img_view" style="float:left">
                                <img src="${data.oriProduct.logo}" style="width:80px;height:80px">
                            </div>
                        </div>
                        <div class="c_name">
                            <a>${data.oriProduct.name}</a>
                        </div>
                        <div class="c_price">
                            <span>¥${data.oriProduct.memberPrice}</span>
                        </div>
                        <div class="c_num">
                            <span class="numbox midde">
                                <input type="button" class="reduce" value="-" />
                                <input type="text" class="val" value="${this.id}" />
                                <input type="button" class="add"  value="+" />
                            </span>
                        </div>
                        <div class="c_total">
                            <p class="textPrimary">
                                ¥${data.oriProduct.memberPrice*this.id}
                            </p>
                        </div>
                        <div class=" c_operate">
                            <span class="midde">
                                <a class="remove">删除</a>
                            </span>
                        </div>
                        <div class="clear"></div>
                        <div class="giftWrap">
                            <div class="item1 normal">
                                <span>积分
                                    <i></i>
                                </span>
                                <a>此商品1元积1分</a>
                            </div>
                            <div class="item1 normal">
                                <span>全单活动<i></i></span>
                                <a >好评返现1元跨境券</a>
                            </div>
                            
                        </div>
                    </li>
                `
                    $(".cartTd").append(str)
                    //console.log(i)
                    if(i>=arr.length){
                        //console.log(1)
                        def.resolve()
                    }
                }
                
            })
            
        }
        
    } 
    return def.promise();
}
runAnync().then(function(){
    //console.log(1)
    //console.log($(".add"))
    $(".add").on("click",function(){
        //console.log(2)
        var num = $(this).prev().val()
        num++
        $(this).prev().val(num)
        //console.log()
        $(this).parent().parent().next().children().text("￥"+(num* $(this).parent().parent().prev().children().text().slice(1)))
    })

})





















    
function reduce(){
    return new Promise(function(resolve,reject){
        //-
        $(".reduce").click(function(){
            //console.log( $(this).next().val())
            var num = $(this).next().val()
            num--
            if(num<1){
                num = 1
            }
            $(this).next().val(num)
            resolve()
        })
    })
}   



    



