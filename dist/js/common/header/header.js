function Header(comment){
    this.el = comment
}
Header.Template = `
    <div class="wbox clearfix">
        <div class="login_info fl">
            <p>您好，欢迎来到武商网！<a href="../html/register.html">请登录</a>&nbsp;&nbsp;<a href="logon.html">免费注册</a><br></p>
        </div>
        <div class="topmenu fr">
            <ul>
                <li class="sn_menu">
                    <a href="##" class="menu_hd">我的订单</a>
                </li>
                <li class="sn_menu miniCart">
                        <a class="menu_hd" href="shopcar.html">购物车<span class="mini_num" style="color:red; font-size:15px;">0</span>件</a>
                </li>
                <li class="sn_menu">
                    <a href="##" class="menu_hd color_red">移动端</a>
                </li>
                <li class="sn_menu">
                    <a href="##" class="menu_hd">会员中心<b></b></a>
                    <div class="menu_bd" style="display:none;">
                        <a href="##">我的优惠券</a>
                        <a href="##" t>我的收藏</a>
                        <a href="##">使用优惠券</a>
                        <a href="##">联系客服</a>
                    </div>
                </li>
                <li class="sn_menu">
                    <a href="##" class="menu_hd">帮助中心<b></b></a>
                    <div class="menu_bd" style="display:none;">
                        <a href="##">新会员注册</a>
                        <a href="##">购物流程</a>
                        <a href="##">一卡通支付</a>
                        <a href="##">常见问题</a>
                        <a href="##">移动端下载</a>
                    </div>
                </li>
                <li class="sn_menu">
                    <a href="##" class="menu_hd">商家入驻<b></b></a>
                    <div class="menu_bd" style="display:none;">
                        <a href="##">操作手册</a>
                        <a href="##">热招品类</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
	                  
`
$.extend(Header.prototype,{
    init:function(){
        this.creat()
    },
    creat:function(){
        this.comment = $("<div></div>")
        this.comment.html(Header.Template)
        this.el.append(this.comment)
    }
})
function Header1(content){
    this.el = content
}
Header1.Template=`
        <div class="logo fl">
			<a href="index.html"><img src="../image/sb.png"></a>
		</div>
		<div class="logoricon fl" >
			<a href="##"><img src="../image/kb.png"></a>
		</div>
		<div class="wsectopsearch fr">
			<div class="fixwrap"><i></i>
				<div class="topsearch">
						<input type="text"  class="search_put" placeholder="请输入要查找的内容">
						
                        <button class="search_btn" id="search_btn">搜 索</button>
                        <ul id="list"></ul>
				</div>
			</div>
			<div class="wsectoptextarea">
				<div class="wsectoptex" >
					<ul>
						<li>
							<a href="#" class="cur">500元好货推荐</a>
						</li>
						<li>
							<a href="#">英国摩飞电器</a>
						</li>
						<li>
							<a href="#">爱帝早秋换新季</a>
						</li>
						<li>
							<a href="#">月饼5折起</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
`
$.extend(Header1.prototype,{
    init:function(){
        this.creat()
    },
    creat:function(){
        this.comment = $("<div></div>")
        this.comment.html(Header1.Template)
        this.el.append(this.comment)
    }
})