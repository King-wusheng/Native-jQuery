var arr = JSON.parse(localStorage.getItem("info"))
var str = ""
for(var i=0;i<arr.length;i++){
    str+=`
        <li data-id="${arr[i].id}">
            <div class="c_check">
                <div class="checkbox active" style="float:left">
                    <input type="checkbox"  id="" class="check" />
                </div>
                <div class="img_view" style="float:left">
                    <img src="${arr[i].img}" style="width:80px;height:80px">
                </div>
            </div>
            <div class="c_name">
                <a>${arr[i].title}</a>
            </div>
            <div class="c_price">
                <span>${arr[i].price}</span>
            </div>
            <div class="c_num">
                <span class="numbox midde">
                    <input type="button" class="reduce" value="-" />
                    <input type="text" class="val" value="${arr[i].num}" />
                    <input type="button" class="add"  value="+" />
                </span>
            </div>
            <div class="c_total">
                <p class="textPrimary">¥${arr[i].price.slice(1) * arr[i].num}</p>
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
}
$(".cartTd").append(str)


$(".add").click(function(){
    var num = $(this).prev().val()
    num++
    $(this).prev().val(num)
    $(this).parent().parent().next().children().text("¥"+(num* $(this).parent().parent().prev().children().text().slice(1)))
    if( $(this).parent().parent().parent().children().eq(0).children().eq(0).children().prop("checked")==true){
        allMoney()
        allNum()
    }

    var remId =$(this).parent().parent().parent().attr("data-id");
    var obj = JSON.parse(localStorage.getItem("info"));
    for(var i = 0; i < obj.length; i++) {
        if(obj[i].id == remId) {
            obj[i].num = Number(obj[i].num) + Number(1);
        }
    }
    localStorage.setItem("info", JSON.stringify(obj));
})

 //-
$(".reduce").click(function(){
    //console.log( $(this).next().val())
    var num = $(this).next().val()
    num--
    if(num <= 1){
        num=1
    }
    $(this).next().val(num)
    $(this).parent().parent().next().children().text("¥"+(num* $(this).parent().parent().prev().children().text().slice(1)))
    if( $(this).parent().parent().parent().children().eq(0).children().eq(0).children().prop("checked")==true){
        allMoney()
        allNum()
    }
    var remId =$(this).parent().parent().parent().attr("data-id");
    var obj = JSON.parse(localStorage.getItem("info"));
    for(var i = 0; i < obj.length; i++) {
        if(obj[i].id == remId) {
            obj[i].num =num;
        }
    }
    localStorage.setItem("info", JSON.stringify(obj));
    
})

$(".c_operate").click(function(){
    $(this).parent().remove()
    
    allMoney()
    allNum()
    var remId =$(this).parent().attr("data-id");
    var obj = JSON.parse(localStorage.getItem("info"));
    for(var i = 0; i < obj.length; i++) {
        if(obj[i].id == remId) {
            obj.splice(i, 1);
        }
    }
    localStorage.setItem("info", JSON.stringify(obj));
    
})

$(".all").click(function(){
    
    if($(this).prop("checked")==true){
        $(".check").prop("checked",true)
        $(".all1").prop("checked",true)
        allMoney()
        allNum()
    }else{
        $(".check").prop("checked",false)
        $(".all1").prop("checked",false)
        $(".amount_sum>b").text(0);
        $(".allprice").text( 0 + ".00");
    }
})

    
$(".check").click(function(){
    
    var bool = true
    for(var j=0;j<$(".check").length;j++){
        if($(".check").eq(j).prop("checked")==false){
            bool = false;
            
            //console.log(1)
        }
    }
    if(bool==true){
        //console.log(1)
        $(".all").prop("checked",true)
    }else{
        $(".all").prop("checked",false)    
    }
    
})

for(var i=0;i<$(".check").length;i++){
    $(".check").eq(i).click(function(){
        if($(this).prop("checked")==true){
            allMoney();
            allNum();
        }else{
            allMoney();
            allNum();
        }
    })
}

function allMoney() {
    var sum = 0;
    for(var j=0;j< $(".check").length;j++){
        if($(".check").eq(j).prop("checked")==true){
            console.log($(".textPrimary").eq(j).text().slice(1))
            sum += parseInt($(".textPrimary").eq(j).text().slice(1))
        }
    }
    
    $(".allprice").text( sum + ".00");

}

function allNum() {
    var sum = 0;
    for(var i = 0; i < $(".check").length; i++) {
        if($(".check").eq(i).prop("checked")==true){
            sum +=parseInt($(".val").eq(i).val());
        }
    }
    $(".amount_sum>b").text(sum);
}

allMoney();
allNum();

