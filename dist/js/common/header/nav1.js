
function Nav(comment){
    this.el = comment
}
Nav.Template = `
<div class="wbox">
	<div class="mallCategory">
		<div class="mallSort">
            <a href="#" class="sortLink"><i></i>所有商品分类</a>
            <div class="nav1">
                    <ul>
                        <li>
                            <a href="index.html" class="">首页</a>
                        </li>
                        <li>
                            <a href="brand.html">品牌街</a>
                        </li>
                        <li><span class="icon-kjg"></span>
                            <a href="overseas.html" style="font-weight: 600;color: #f42e2d">跨境购</a><span class="new-icon"></span></li>
                        <li>
                            <a href="group_buy.html">企业集采</a>
                        </li>
                        <li>
                            <a href="#">移动端下载</a>
                        </li>
                    </ul>
            </div>
            <div class="sort-m" style="display: block; width: 200px;">
				<div class="sort" style="display:block;">
					<div class="itemBg"></div>
					<div class="itemPic pic1"></div>
					<div class="item">
						<h3>
                            <span class="tb-ico0" style="margin-left: 0px;"></span>
                            <a href="#">食品/酒水/生鲜</a>
                        </h3>
						<i></i>
						<div class="sortLayer" style="opacity: 0.8; left: -10px; display: none;">
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a href="#">进口食品</a></dt>
										<dd>
											<a href="#">巧克力</a>
											<a href="#">进口饮料</a>
											<a href="#">咖啡茶叶</a>
											<a href="#">饼干糕点</a>
											<a href="#">休闲零食</a>
											<a href="#">冲调谷物</a>
											<a href="#">粮油米面</a>
											<a href="#">厨房调料</a>
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a href="#">生鲜食品</a></dt>
										<dd>
											<a class="cur" href="#">生肉禽蛋</a>
											<a class="" href="#">速冻食品</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">休闲零食</a></dt>
										<dd>
											<a class="" href="#">果冻</a>
											<a class="" href="#">薯片</a>
											<a class="" href="#">坚果</a>
											<a class="" href="#">饼干</a>
											<a class="" href="#">果干</a>
											<a class="" href="#">糕点</a>
											<a class="" href="#">小食</a>
											<a class="" href="#">蜜饯</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a href="#">饮料酒水</a></dt>
										<dd>
											<a class="" href="#">白酒</a>
											<a class="" href="#">啤酒</a>
											<a class="" href="#">碳酸饮料</a>
											<a class="" href="#">果汁</a>
											<a class="" href="#">葡萄酒</a>
											<a class="" href="#">洋酒</a>
											<a class="" href="#">预调酒</a>
											<a class="" href="#">矿泉水</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl>
										<dt><a  href="#">粮油米面</a></dt>
										<dd>
											<a class="" href="#">食用油</a>
											<a class="cur" href="#">橄榄油</a>
											<a class="" href="#">大米</a>
											<a class="" href="#">杂粮</a>
											<a class="" href="#">挂面</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="/product_list.jsp?cid=c_80315">咖啡茶叶</a></dt>
										<dd>
											<a class="" href="#">速溶咖啡</a>
											<a class="" href="#">茶叶</a>
											<a class="" href="#">绿茶</a>
											<a class="cur" href="#">普洱茶</a>
											<a class="" href="#">红茶</a>
											<a class="" href="#">花草茶</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">厨房调料</a></dt>
										<dd>
											<a class="" href="#">酱料</a>
											<a class="" href="#">酱油</a>
											<a class="" href="#">小麻油</a>
											<a class="" href="#">醋</a>
											<a class="" href="#">鸡精</a>
											<a class="" href="#">白糖</a>
											<a class="" href="#">味精</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">湖北土特产</a></dt>
										<dd>
											<a class="" href="#">土蜂蜜</a>
											<a class="" href="#">木耳</a>
											<a class="" href="#">花菇</a>
											<a class="" href="#">麻糖</a>
											<a class="" href="#">葛根粉</a>
											<a class="" href="#">咸蛋</a>
											<a class="" href="#">恩施三宝</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
						</div>
					</div>
					<div class="item bg">
						<h3>
                            <span class="tb-ico1" style="margin-left: 0px;"></span>
                            <a href="#">女装/男装/内衣</a>
                        </h3>
						<i></i>
						<div class="sortLayer" style="opacity: 0.8; left: -10px; display: none;">
							<div class="itemBg"></div>
							<div class="itemPic pic1"></div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">热门品牌</a></dt>
										<dd>
											<a class="" href="#">拉夏贝尔</a>
											<a class="" href="#">金狐狸</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">时尚女装</a></dt>
										<dd>
											<a class="" href="#">衬衫</a>
											<a class="cur" href="#">牛仔裤</a>
											<a class="" href="#">T恤</a>
											<a class="" href="#">牛仔裙</a>
											<a class="" href="#">针织衫</a>
											<a class="" href="#">休闲裤</a>
											<a class="" href="#">毛衣</a>
											<a class="" href="#">风衣</a>
											<a class="" href="#">半裙</a>
											<a class="" href="#">连衣裙</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">精品男装</a></dt>
										<dd>
											<a class="cur" href="#">休闲衬衫</a>
											<a class="" href="#">POLO衫</a>
											<a class="" href="#">T恤</a>
											<a class="" href="#">牛仔裤</a>
											<a class="cur" href="#">休闲裤</a>
											<a class="" href="#">西服</a>
											<a class="" href="#">西裤</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">居家内衣</a></dt>
										<dd>
											<a class="cur" href="#">睡衣套装</a>
											<a class="" href="#">女士内裤</a>
											<a class="cur" href="#">男士内裤</a>
											<a class="" href="#">文胸</a>
											<a class="" href="#">男士背心</a>
											<a class="" href="#">内衣套装</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
						</div>
					</div>
					<div class="item">
						<h3>
                            <span class="tb-ico2" style="margin-left: 0px;"></span>
                            <a  href="#">护肤/彩妆/个护</a>
                        </h3>
						<i></i>
						<div class="sortLayer" style="opacity: 0.8; left: -10px; display: none;">
							<div class="itemBg"></div>
							<div class="itemPic pic2"></div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">国际大牌</a></dt>
										<dd>
											<a class="cur" href="#">兰蔻</a>
											<a class="" href="#">雅诗兰黛</a>
											<a class="" href="#">Lamer</a>
											<a class="" href="#">la prairie</a>
											<a class="" href="#">阿玛尼</a>
											<a class="" href="#">希思黎</a>
											<a class="" href="#">娇兰</a>
											<a class="" href="#">赫莲娜</a>
											<a class="cur" href="#">雪花秀</a>
											<a class="" href="#">娇韵诗</a>
											<a class="cur" href="#">资生堂</a>
											<a class="" href="#">纪梵希</a>
											<a class="cur" href="#">碧欧泉</a>
											<a class="" href="#">倩碧</a>
											<a class="" href="#">植村秀</a>
											<a class="" href="#">科颜氏</a>
											<a class="" href="#">芭比波朗</a>
											<a class="" href="#">玫珂菲</a>
											<a class="cur" href="#">茱莉蔻</a>
											<a class="" href="#">欧舒丹</a>
											<a class="" href="#">兰芝</a>
											<a class="cur" href="#">SK-II</a>
											<a class="" href="#">CPB</a>
											<a class="cur" href="#">whoo后</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">面部护肤</a></dt>
										<dd>
											<a class="cur" href="#">爽肤水</a>
											<a class="" href="#">卸妆</a>
											<a class="cur" href="#">晚霜</a>
											<a class="" href="#">日霜</a>
											<a class="" href="#">眼霜</a>
											<a class="cur" href="#">面部精华</a>
											<a class="cur" href="#">面膜</a>
											<a class="" href="#">洗面乳</a>
											<a class="" href="#">眼贴膜</a>
											<a class="" href="#">喷雾</a>
											<a class="cur" href="#">防晒霜</a>
											<a class="" href="#">眼部精华</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">彩妆香水</a></dt>
										<dd>
											<a class="cur" href="#">气垫BB霜</a>
											<a class="" href="#">隔离霜</a>
											<a class="" href="#">粉底液</a>
											<a class="cur" href="#">粉饼</a>
											<a class="" href="#">腮红</a>
											<a class="" href="#">睫毛膏</a>
											<a class="" href="##">眼线笔</a>
											<a class="" href="#">眼影</a>
											<a class="" href="#">定妆粉</a>
											<a class="cur" href="#">唇膏</a>
											<a class="" href="#">眉笔</a>
											<a class="" href="#">香水</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="http://www.wushang.com/product_list.jsp?cid=c_80035">男士护理</a></dt>
										<dd>
											<a class="cur" href="http://www.wushang.com/product_list.jsp?keyword=男士洁面乳&amp;cid=c_10000">洁面乳</a>
											<a class="cur" href="http://www.wushang.com/product_list.jsp?keyword=男士爽肤水&amp;cid=c_10000">爽肤水</a>
											<a class="" href="http://www.wushang.com/product_list.jsp?keyword=男士面霜&amp;cid=c_10000">面霜</a>
											<a class="" href="/product_list.jsp?cid=c_80041">剃须刀</a>
											<a class="cur" href="http://www.wushang.com/product_list.jsp?cid=c_80035&amp;keyword=%E7%B2%BE%E5%8D%8E">精华</a>
											<a class="" href="http://www.wushang.com/product_list.jsp?cid=c_80035&amp;keyword=%E4%B9%B3%E6%B6%B2">乳液</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">个人洗护</a></dt>
										<dd>
											<a class="" href="#">身体乳</a>
											<a class="" href="#">发膜</a>
											<a class="cur" href="#">沐浴露</a>
											<a class="cur" href="#">洗发露</a>
											<a class="" href="#">护发素</a>
											<a class="" href="#">牙膏</a>
											<a class="" href="#">牙刷</a>
											<a class="cur" href="#">卫生巾</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
						</div>
					</div>
					<div class="item bg">
						<h3>
                            <span class="tb-ico3" style="margin-left: 0px;"></span>
                            <a  href="#">黄金/珠宝/手表</a>
                        </h3>
						<i></i>
						<div class="sortLayer" style="opacity: 0.8; left: -10px; display: none;">
							<div class="itemBg"></div>
							<div class="itemPic pic3"></div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="http://www.wushang.com/huangjin.html">大牌黄金</a></dt>
										<dd>
											<a class="" href="/shop/index.jsp?m=m_1860000">周大福</a>
											<a class="cur" href="/shop/index.jsp?m=m_1660000">周生生</a>
											<a class="" href="#">潮宏基</a>
											<a class="cur" href="#">老凤祥</a>
											<a class="" href="#">兆亮</a>
											<a class="cur" href="/shop/index.jsp?m=m_510013">千叶</a>
											<a class="" href="#">明牌</a>
											<a class="" href="#">金至尊</a>
											<a class="" href="#">宝亨达</a>
											<a class="" href="#">百泰</a>
											<a class="cur" href="#">六福</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">计价黄金</a></dt>
										<dd>
											<a class="cur" href="#">吊坠</a>
											<a class="" href="#">戒指</a>
											<a class="cur" href="#">项链</a>
											<a class="" href="#">手链脚链</a>
											<a class="" href="#">工艺金条</a>
											<a class="" href="#">投资金条</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">定价黄金</a></dt>
										<dd>
											<a class="" href="#">戒指</a>
											<a class="" href="#">项链</a>
											<a class="cur" href="#">吊坠</a>
											<a class="" href="#">耳饰</a>
											<a class="" href="#">手镯</a>
											<a class="" href="#">摆件礼品</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">钻石</a></dt>
										<dd>
											<a class="cur" href="#">戒指</a>
											<a class="" href="#">项链</a>
											<a class="" href="#">吊坠</a>
											<a class="" href="#">耳饰</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">铂金</a></dt>
										<dd>
											<a class="" href="#">戒指</a>
											<a class="cur" href="#">项链</a>
											<a class="" href="#">吊坠</a>
											<a class="" href="#">耳饰</a>
											<a class="" href="#">手镯</a>
											<a class="" href="#">手链脚链</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">银饰</a></dt>
										<dd>
											<a class="" href="#">戒指</a>
											<a class="" href="#">项链</a>
											<a class="" href="#">吊坠</a>
											<a class="" href="#">手镯</a>
											<a class="" href="#">银条银章</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">珠宝</a></dt>
										<dd>
											<a class="" href="#">珍珠</a>
											<a class="" href="#">翡翠</a>
											<a class="cur" href="#">玉器</a>
											<a class="" href="#">宝石</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">时尚饰品</a></dt>
										<dd>
											<a class="" href="#">项链</a>
											<a class="" href="#">手链</a>
											<a class="" href="#">耳饰</a>
											<a class="" href="#">项坠</a>
											<a class="" href="##">打火机</a>
											<a class="" href="#">手镯</a>
											<a class="cur" href="#">眼镜</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">手表</a></dt>
										<dd>
											<a class="cur" href="#">国际名表</a>
											<a class="" href="#">石英表</a>
											<a class="" href="#">机械表</a>
											<a class="" href="#">光能表</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
						</div>
					</div>
					<div class="item">
						<h3>
                            <span class="tb-ico4" style="margin-left: 0px;"></span>
                            <a  href="#">手机/数码/家电</a>
                        </h3>
						<i></i>
						<div class="sortLayer" style="opacity: 0.8; left: -10px; display: none;">
							<div class="itemBg"></div>
							<div class="itemPic pic4"></div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="/smjd.html">品牌家电</a></dt>
										<dd>
											<a class="cur" href="#">飞利浦</a>
											<a class="cur" href="#">格力</a>
											<a class="cur" href="#">美的</a>
											<a class="" href="#">九阳</a>
											<a class="" href="#">飞科</a>
											<a class="" href="#">奥克斯</a>
											<a class="" href="#">艾美特</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">手机</a></dt>
										<dd>
											<a class="" href="#">三星</a>
											<a class="" href="#">苹果</a>
											<a class="" href="#">iphone X</a>
											<a class="" href="#">mate10</a>
											<a class="" href="#">三星S8</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">数码</a></dt>
										<dd>
											<a class="" href="#">耳机</a>
											<a class="cur" href="#">移动电源</a>
											<a class="" href="#">数码配件</a>
											<a class="" href="#">时尚影音</a>
											<a class="" href="#">学习机</a>
											<a class="" href="#">音箱</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">电脑</a></dt>
										<dd>
											<a class="" href="#">笔记本</a>
											<a class="cur" href="#">平板电脑</a>
											<a class="" href="#">网络设备</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">大家电</a></dt>
										<dd>
											<a class="" href="#">按摩椅</a>
											<a class="" href="#">美容仪</a>
											<a class="cur" href="#">彩电</a>
											<a class="" href="#">洗衣机</a>
											<a class="" href="#">空调</a>
											<a class="" href="#">冰箱</a>
											<a class="" href="#">冷柜</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">小家电</a></dt>
										<dd>
											<a class="" href="#">厨房小家电</a>
											<a class="" href="#">电压力锅</a>
											<a class="" href="#">电饭煲</a>
											<a class="cur" href="#">电烤箱</a>
											<a class="" href="#">生活小家电</a>
											<a class="" href="#">吸尘器</a>
											<a class="" href="#">挂烫机</a>
											<a class="cur" href="#">电炖锅</a>
											<a class="" href="#">电吹风</a>
											<a class="" href="#">剃须刀</a>
											<a class="" href="#">开水壶</a>
											<a class="cur" href="#">取暖器</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
						</div>
					</div>
					<div class="item bg">
						<h3>
                            <span class="tb-ico5" style="margin-left: 0px;"></span>
                            <a  href="#">家纺/纸品/厨具</a>
                        </h3>
						<i></i>
						<div class="sortLayer" style="display: none; opacity: 0.8; left: -10px;">
							<div class="itemBg"></div>
							<div class="itemPic pic5"></div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">热门品牌</a></dt>
										<dd>
											<a class="cur" href="#">利兹Leeds</a>
											<a class="" href="#">康宁</a>
											<a class="cur" href="#">膳魔师</a>
											<a class="" href="#">苏泊尔</a>
											<a class="" href="#">司顿</a>
											<a class="" href="#">伯尼尔斯</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">床上用品</a></dt>
										<dd>
											<a class="cur" href="#">四件套</a>
											<a class="" href="#">靠枕</a>
											<a class="" href="#">床垫</a>
											<a class="" href="#">枕芯被芯</a>
											<a class="" href="#">毛毯</a>
											<a class="" href="#">冬被</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">清洁用品</a></dt>
										<dd>
											<a class="cur" href="#">洗衣液</a>
											<a class="" href="#">洗衣粉</a>
											<a class="" href="#">洗衣皂</a>
											<a class="cur" href="#">消毒液</a>
											<a class="" href="#">洁厕液</a>
											<a class="" href="#">油污净</a>
											<a class="cur" href="#">驱虫用品</a>
											<a class="cur" href="#">除甲醛</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">生活日用</a></dt>
										<dd>
											<a class="" href="#">浴巾毛巾</a>
											<a class="" href="#">收纳收晒</a>
											<a class="cur" href="#">一次性用品</a>
											<a class="" href="#">衣架衣夹</a>
											<a class="" href="#">其他日用品</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">厨具锅具</a></dt>
										<dd>
											<a class="cur" href="#">炒锅</a>
											<a class="cur" href="#">汤锅</a>
											<a class="" href="#">煎锅</a>
											<a class="" href="#">压力锅</a>
											<a class="cur" href="#">蒸锅</a>
											<a class="" href="#">奶锅</a>
											<a class="cur" href="#">套装锅</a>
											<a class="" href="#">砂锅</a>
											<a class="" href="#">玻璃锅</a>
											<a class="" href="#">刀具</a>
											<a class="" href="#">砧板</a>
											<a class="" href="#">厨房工具</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">餐具水具</a></dt>
										<dd>
											<a class="" href="#">塑料杯</a>
											<a class="" href="#">玻璃杯</a>
											<a class="cur" href="#">保温杯</a>
											<a class="cur" href="#">焖烧罐</a>
											<a class="" href="#">保鲜盒 </a>
											<a class="" href="#">筷勺刀叉</a>
											<a class="" href="#">运动水杯</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">居家纸品</a></dt>
										<dd>
											<a class="cur" href="#">维达纸品</a>
											<a class="cur" href="#">清风纸品</a>
											<a class="" href="#">心相印纸品</a>
											<a class="" href="#">洁柔纸品</a>
											<a class="cur" href="#">无芯卷纸</a>
											<a class="" href="#">厨房用纸</a>
											<a class="cur" href="#">手帕纸</a>
											<a class="" href="#">湿纸巾</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
						</div>
					</div>
					<div class="item">
						<h3>
                            <span class="tb-ico6" style="margin-left: 0px;"></span>
                            <a  href="#">女鞋/男鞋/箱包</a>
                        </h3>
						<i></i>
						<div class="sortLayer" style="display: none; opacity: 0.8; left: -10px;">
							<div class="itemBg"></div>
							<div class="itemPic pic6"></div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">精品配饰</a></dt>
										<dd>
											<a class="" href="#">皮带</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">热门品牌</a></dt>
										<dd>
											<a class="cur" href="#">瑞士军刀</a>
											<a class="" href="#">红蜻蜓</a>
											<a class="" href="#">外交官</a>
											<a class="" href="#">金利来</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">时尚女鞋</a></dt>
										<dd>
											<a class="" href="#">平底鞋</a>
											<a class="" href="#">休闲鞋</a>
											<a class="" href="#">浅口鞋</a>
											<a class="" href="#">女靴</a>
											<a class="" href="#">蛋卷鞋</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">流行男鞋</a></dt>
										<dd>
											<a class="cur" href="#">商务皮鞋</a>
											<a class="cur" href="#">休闲皮鞋</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">潮流女包</a></dt>
										<dd>
											<a class="cur" href="#">单肩包</a>
											<a class="" href="#">手提包</a>
											<a class="" href="#">双肩包</a>
											<a class="" href="#">钱包手包</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">精品男包</a></dt>
										<dd>
											<a class="cur" href="#">双肩包</a>
											<a class="" href="#">单肩包</a>
											<a class="" href="#">斜挎包</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">旅行箱包</a></dt>
										<dd>
											<a class="" href="#">登机箱</a>
											<a class="cur" href="#">拉杆箱</a>
											<a class="" href="#">旅行配件</a>
											<a class="" href="#">旅行包</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
						</div>
					</div>
					<div class="item bg">
						<h3>
                            <span class="tb-ico7" style="margin-left: 0px;"></span>
                            <a href="#">运动/户外鞋服</a>
                        </h3>
						<i></i>
						<div class="sortLayer" style="display: none; opacity: 0.8; left: -10px;">
							<div class="itemBg"></div>
							<div class="itemPic pic7"></div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">热门品牌</a></dt>
										<dd>
											<a class="" href="#">斯凯奇</a>
											<a class="cur" href="#">爱玛莎</a>
											<a class="cur" href="#">维仕蓝</a>
											<a class="cur" href="#">攀能</a>
											<a class="" href="#">Converse</a>
											<a class="" href="#">美津浓</a>
											<a class="" href="#">耐克</a>
											<a class="" href="#">Adidas</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">运动装</a></dt>
										<dd>
											<a class="cur" href="#">男士运动装</a>
											<a class="" href="#">女士运动装</a>
											<a class="" href="#">休闲裤</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">运动鞋</a></dt>
										<dd>
											<a class="cur" href="#">男款运动鞋</a>
											<a class="" href="#">女款运动鞋</a>
											<a class="cur" href="#">跑步鞋</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="/product_list.jsp?cid=c_81332">户外用品</a></dt>
										<dd>
											<a class="" href="#">户外用品</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">运动用品</a></dt>
										<dd>
											<a class="cur" href="#">瑜伽垫</a>
											<a class="" href="#">骑马机</a>
											<a class="cur" href="#">健身器材</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
						</div>
					</div>
					<div class="item">
						<h3>
                            <span class="tb-ico8" style="margin-left: 0px;"></span>
                            <a href="#">母婴/童品/玩具</a>
                        </h3>
						<i></i>
						<div class="sortLayer" style="display: none; opacity: 0.8; left: -10px;">
							<div class="itemBg"></div>
							<div class="itemPic pic8"></div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">最热品牌</a></dt>
										<dd>
											<a class="" href="#">保宁</a>
											<a class="" href="#">美赞臣</a>
											<a class="" href="#">贝亲</a>
											<a class="" href="#">乐高</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">婴幼儿食品</a></dt>
										<dd>
											<a class="cur" href="#">奶粉</a>
											<a class="" href="#">辅食</a>
											<a class="" href="#">营养品</a>
											<a class="" href="#">长牙零食</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">防尿如厕</a></dt>
										<dd>
											<a class="" href="#">纸尿裤</a>
											<a class="" href="#">拉拉裤</a>
											<a class="" href="#">纱布尿布</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">沐浴护肤</a></dt>
										<dd>
											<a class="" href="#">润肤露</a>
											<a class="cur" href="#">爽身防痱</a>
											<a class="" href="#">二合一</a>
											<a class="" href="#">浴盆浴巾</a>
											<a class="" href="#">小屁屁护理</a>
											<a class="" href="#">抚触按摩</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">喂养餐具</a></dt>
										<dd>
											<a class="cur" href="#">奶瓶奶嘴</a>
											<a class="" href="#">宝宝餐具</a>
											<a class="" href="#">水杯水壶</a>
											<a class="" href="#">喂养清洁</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">安全健康</a></dt>
										<dd>
											<a class="" href="/product_list.jsp?cid=c_81050">口腔护理</a>
											<a class="" href="#">防蚊驱虫</a>
											<a class="" href="##">手口湿巾</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">外出装备</a></dt>
										<dd>
											<a class="" href="#">折叠推车</a>
											<a class="cur" href="#">安全座椅</a>
											<a class="" href="#">轻便伞车</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">儿童玩具</a></dt>
										<dd>
											<a class="" href="#">玩偶模型</a>
											<a class="" href="/product_list.jsp?cid=c_81140">遥控玩具</a>
											<a class="" href="#">益智早教</a>
											<a class="" href="#">运动器材</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">童装</a></dt>
										<dd>
											<a class="" href="#">婴儿服饰</a>
											<a class="" href="#">女童外套</a>
											<a class="" href="#">女童休闲裤</a>
											<a class="" href="#">男童外套</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">准妈必备</a></dt>
										<dd>
											<a class="" href="#">面部护肤</a>
											<a class="" href="#">身体护理</a>
											<a class="" href="#">哺乳用品</a>
											<a class="" href="#">产后护理</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
						</div>
					</div>
					<div class="item bg">
						<h3>
                            <span class="tb-ico9" style="margin-left: 0px;"></span>
                            <a href="#">滋补保健</a>
                        </h3>
						<i></i>
						<div class="sortLayer" style="display: none; opacity: 0.8; left: -10px;">
							<div class="itemBg"></div>
							<div class="itemPic pic9"></div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">传统滋补品</a></dt>
										<dd>
											<a class="" href="#">枸杞</a>
											<a class="" href="#">燕窝</a>
											<a class="" href="#">三七</a>
											<a class="" href="#">西洋参</a>
											<a class="" href="#">人参</a>
											<a class="cur" href="#">蜂蜜</a>
											<a class="" href="#">冬虫夏草</a>
											<a class="" href="#">海参</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">计生用品</a></dt>
										<dd>
											<a class="" href="#">杜蕾斯</a>
											<a class="" href="#">杰士邦</a>
											<a class="" href="#">冈本</a>
											<a class="" href="#">第六感</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
						</div>
					</div>
					<div class="item">
						<h3>
                            <span class="tb-ico10" style="margin-left: 0px;"></span>
                            <a href="#">餐饮/生活</a>
                        </h3>
						<i></i>
						<div class="sortLayer" style="display: none; opacity: 0.8; left: -10px;">
							<div class="itemBg"></div>
							<div class="itemPic pic10"></div>
							<div class="itemCon">
								<div class="subMain">
									<dl><dt><a  href="#">餐饮美食</a></dt>
										<dd>
											<a class="" href="#">茶餐厅</a>
											<a class="" href="#">滋补火锅</a>
											<a class="" href="#">日本料理</a>
											<a class="" href="#">韩式烤肉</a>
											<!--level3-->
										</dd>
									</dl>
								</div>
							</div>
						</div>
                    </div> 
                </div>
                
			</div>
    
</div>
`
$.extend(Nav.prototype,{
    init:function(){
        this.creat()
    },
    creat:function(){
        this.comment = $("<div></div>")
        this.comment.html(Nav.Template)
        this.el.append(this.comment)
    }
})