import React from 'react'
import $ from 'jquery'
import Icon from 'antd/lib/icon';
class Room extends React.Component{
    constructor(props){
        super(props)
	}
	componentDidMount(){
		var  count =0
		$('.room_nav_left').click(function(){
			console.log(count)
			count--
			if(count==-1){
				count=4
				$('.room_carousel').css({left:-5*610})
			}
			
			$('.room_warp').find('.room_carousel').stop().animate({'left':-count*610},250)
		})
		
		$('.room_nav_right').click(function(){
			console.log(count)
			count++
			if(count>=6){
				count=1
				$('.room_carousel').css({left:0})
			}
			
			$('.room_warp').find('.room_carousel').stop().animate({'left':-count*610},250)
		})
		var ptss = $('#ptss')
		$('.room_xq_ckqb').click(function () {
			$('#ptss').show()
			$('.room_xq_ckqb').hide()
			$('.room_xq_sq').show()
		})
		$('.room_xq_sq').click(function(){
			$('#ptss').hide()
			$('.room_xq_ckqb').show()
			$('.room_xq_sq').hide()
		})
		$('.room_main_ckqb').click(function(){
			$('#ptss1').show()
			$('.room_main_ckqb').hide()
			$('.room_main_sq').show()
		})
		$('.room_main_sq').click(function(){
			$('#ptss1').hide()
			$('.room_main_ckqb').show()
			$('.room_main_sq').hide()
		})
		$(window).scroll(function(){			
			if($(window).scrollTop()>=360){
				// console.log("aa")
				$('.room_main_right').css({position:'fixed',top:30})
			}else{
				$('.room_main_right').css({position:'relative',top:-12})	
			}
			
			// console.log($(window).scrollTop())
			if ($(window).scrollTop() > 570) {
				$('.room_main_nav_fixed').show().css({position:'fixed',top:0})
				
			}else{
				$('.room_main_nav_fixed').hide()
			}

			$(".list").each(function (index) {
				if ($(window).scrollTop() > $(this).offset().top - $(this).outerHeight() / 2) {
					$(".room_main_nav_fixed ul li").eq(index).addClass("hover").siblings().removeClass("hover")
					
				}
			
			})

			
			
		})
			$('.room_main_nav_list li').click(function(window){
					var scrollTop = $(this).scrollTop()
					var i = $(this).index()
					console.log(i)
					console.log($(".list").eq(i).offset().top)
					$("body,html").animate({"scrollTop":$(".list").eq(i).offset().top-44},function(){
						})
				})
				$('.main_nav_fixed_list li').click(function (window) {
					var scrollTop = $(this).scrollTop()
					var i = $(this).index()

					console.log(i)
					console.log($(".list").eq(i).offset().top)
					$("body,html").animate({"scrollTop":$(".list").eq(i).offset().top-44}
				,function(){
					$('.room_main_nav_fixed ul li').eq(i).stop().animate().addClass('hover').siblings().removeClass('hover')
						})
				})


		
	}
    render(){
        return(
            <div className="room_warp">

               	<div className = "room_carousel_warp" >
				   <div className="room_carousel">
						<ul className="room_carousel_item">
							
							<li><img src={require('../src/Room_imgs/room_banner1.jpg')} alt=""/></li>
							<li><img src={require('../src/Room_imgs/room_banner2.jpg')}alt=""/></li>
							<li><img src={require('../src/Room_imgs/room_banner3.jpg')}alt=""/></li>
							<li><img src={require('../src/Room_imgs/room_banner4.jpg')}alt=""/></li>
							<li><img src={require('../src/Room_imgs/room_banner5.jpg')}alt=""/></li>	
							<li><img src={require('../src/Room_imgs/room_banner1.jpg')} alt=""/></li>
							<li><img src={require('../src/Room_imgs/room_banner2.jpg')}alt=""/></li>
							<li><img src={require('../src/Room_imgs/room_banner3.jpg')}alt=""/></li>
						</ul>
					</div>
					<div className="room_nav">
						<div className="room_nav_left room_nav_btn">
							<Icon type="left" />
						</div>
						<div className="room_nav_right room_nav_btn">
							<Icon type="right" />
						</div>
					</div>
                </div>
				<div className="room_tit_warp">


					<div className="room_main_warp">
						<div className="room_main">
							<p>
								<a href="javascript:void(0);">木鸟短租　</a>
								<a href="javascript:void(0);"> <span><Icon type="right" /></span>上海短租房</a>
							</p>
							<div className="room_tit">
								<div className="room_tit_left">
									<h1>
										<a href="javascript:void(0);">南京路 东方明珠附近 逅客公寓 欧式江景房</a>
									<span><Icon type="camera-o"/>实拍</span>
									</h1>
								</div>
								<div className="room_tit_right">
								
									<span className="fenxiang"><Icon type="share-alt" /></span>
									<span className="xin"><Icon type="heart"/></span>							
								</div>
								
							</div>
							<div className="room_info">
								<p>
									<span className="room_fybh red">房源编号：</span>
									<span className="room_fybh1 hei"> 138486　</span>
									<span className="room_add red">地址：</span>
									<span className="room_add1 hei"> 上海-黄浦区-广东路339号</span>
								</p>

							</div>
							<div className="room_jzxx_warp">
								<div className="room_jzxx">
									<div className="room_jzxx_left">
										<p className="shang"><Icon type="mobile" /></p>
										<p className="xia">1室</p>
									</div>
									<div className="room_jzxx_left">
										<p className="shang"><Icon type="home" /></p>
										<p className="xia">整租</p>
									</div>	
									<div className="room_jzxx_left">
										<p className="shang"><Icon type="database" /></p>
										<p className="xia">1张</p>
									</div>
									<div className="room_jzxx_left">
										<p className="shang"><Icon type="usergroup-add" /></p>
										<p className="xia">宜住2人</p>
									</div>
								</div>
								<div className="room_jzxx_right">
									<p>
										<span className="shang">100%</span>
										<span className="xia">好评率</span>
									</p>
									<p>
										<span className="shang">24晚</span>
										<span className="xia">近期预定</span>
									</p>
								</div>	
								
							</div>

						</div>
						<div className="room_main_right_warp">
							<div className="room_main_right">
								<div className="room_main_right_price">
									<p>
										<span><b>￥</b>498</span>
										<span>每晚</span>
									</p>
								
								</div>

							</div>
						</div>
						
					</div>
				</div>



				

				<div className="room_main_nav_warp">
					<div className="room_main_nav">
						<ul className="room_main_nav_list">
							<li><a href = "javascript:void(0);">房间信息</a></li>
							<li><a href = "javascript:void(0);">配套设施</a> </li>
							<li><a href = "javascript:void(0);">周边设施</a></li>
							<li><a href = "javascript:void(0);">地理位置</a></li>
							<li><a href = "javascript:void(0);">交易规则</a></li>
							<li><a href = "javascript:void(0);">建筑地标</a></li>
							<li><a href = "javascript:void(0);">要求及收费</a></li>
							<li><a href = "javascript:void(0);">访客评价</a></li>
							<span>29</span>
						</ul>
					</div>
					<div className="room_main_nav_fixed">
						<div className="nav_fixed_warp">
							<ul className="main_nav_fixed_list">
								<li><a href = "javascript:void(0);">房间信息</a></li>
								<li><a href = "javascript:void(0);">配套设施</a> </li>
								<li><a href = "javascript:void(0);">周边设施</a></li>
								<li><a href = "javascript:void(0);">地理位置</a></li>
								<li><a href = "javascript:void(0);">交易规则</a></li>
								<li><a href = "javascript:void(0);">建筑地标</a></li>
								<li><a href = "javascript:void(0);">要求及收费</a></li>
								<li><a href = "javascript:void(0);">访客评价</a></li>
								<span>29</span>
							</ul>
						</div>
						
					</div>
				</div>
				<div className="room_main_warp list ">	
					<div className="room_main_fy ">
						<div className="room_main_fy_tit">关于此房源</div>
						<div className="room_main_fy_text ">
                公寓位于上海的绝对市中心，不论你想去热闹有名的旅游景点游玩还是安静怡人的街道小巷散步都可谓方便至极！
外滩：最迷人的上海夜景，步行500米（5分钟）即可抵达，在这里您可以享受醉人的夜景，也可享受多元化的世界美食
南京东路步行街：十里长街，上海著名的南京东路步行街，步行600米（6分钟）。老上海与摩登的完美结合，让您看到最特别的上海
豫园、人民广场：步行10-15分钟，您可以购置许多上海手办、上海特色零食零嘴，体验一下当地特色小吃
陆家嘴东方明珠塔：乘坐地铁1站即可，你可以看到上海的地标建筑：东方明珠塔，也可去塔享受一下旋转餐厅哦；陆家嘴是上海最繁华的金融区，在那里您也可以去上海最高楼-上海中心大厦感受一下金融区不一样的商务都市
城隍庙：步行20分钟或乘车8分钟。始建于明代永乐年间，体验古老的庙宇建筑，去享受最特色的上海小吃
迪士尼：转16号线再转11号线，地铁11站，也可乘车半小时。上海迪士尼乐园，让您度过放松愉快的一天
            			</div>
					</div>
					<div className="room_main_xq ">
						<div className="room_main_xq_list">
							<div className = "room_main_xq_listli" >
								<span className="zuo"><Icon type="car" /></span>
								<span className="zhong">房屋类型：</span>
								<span className="you">公寓</span>
							</div>
							<div className = "room_main_xq_listli" >
								<span className="zuo"><Icon type="car" /></span>
								<span className="zhong">户型：</span>
								<span className="you">一室一厅</span>
							</div>
							<div className = "room_main_xq_listli">
								<span className="zuo"><Icon type="car" /></span>
								<span className="zhong">出租类型：</span>
								<span className="you">整租</span>
							</div>
						</div>	

						<div className="room_main_xq_list">
							<div className = "room_main_xq_listli">
								<span className="zuo"><Icon type="car" /></span>
								<span className="zhong">床型：</span>
								<span className="you">双人床</span>
							</div>
							<div className = "room_main_xq_listli">
								<span className="zuo"><Icon type="car" /></span>
								<span className="zhong">总张数：</span>
								<span className="you">1张</span>
							</div>
							<div className = "room_main_xq_listli">
								<span className="zuo"><Icon type="car" /></span>
								<span className="zhong">可住人数：</span>
								<span className="you">2人</span>
							</div>
						</div>

						<div className="room_main_xq_list">
							<div className = "room_main_xq_listli">
								<span className="zuo"><Icon type="car" /></span>
								<span className="zhong">独立卫生间：</span>
								<span className="you">1</span>
							</div>
							<div className = "room_main_xq_listli">
								<span className="zuo"><Icon type="car" /></span>
								<span className="zhong">面积：</span>
								<span className="you">60平米</span>
								</div>
							<div className = "room_main_xq_listli">
								<span className="zuo"><Icon type="car" /></span>
								<span className="zhong">发票：</span>
								<span className="you">不提供</span>
							</div>
							
						</div>
						<div id="ptss">
							<div className="room_main_xq_list">
								<div className = "room_main_xq_listli">
									<span className="zuo"><Icon type="car" /></span>
									<span className="zhong">最少天数：</span>
									<span className="you">1天</span>
								</div>
							<div className = "room_main_xq_listli">
								<span className="zuo"><Icon type="car" /></span>
								<span className="zhong">最多天数：</span>
								<span className="you">不限</span>
								</div>
							<div className = "room_main_xq_listli">
								<span className="zuo"><Icon type="car" /></span>
								<span className="zhong">身份证：</span>
								<span className="you">需要</span>
							</div>
							
							</div>
							<div className="room_main_xq_list">
								<div className = "room_main_xq_listli">
									<span className="zuo"><Icon type="car" /></span>
									<span className="zhong">最早入住时间：</span>
									<span className="you">当天14点</span>
								</div>
								<div className = "room_main_xq_listli">
									<span className="zuo"><Icon type="car" /></span>
									<span className="zhong">最晚退房时间：</span>
									<span className="you">当天12点</span>
									</div>
									
							</div>
						</div>
						
						<div className="room_main_xq_cz">
							<p className="ckqb room_xq_ckqb">点击查看全部</p>
							<p className="sq room_xq_sq">点击收起</p>
						</div>
						
						
					</div>
					
					<div className="room_main_pt list">
						<div className="room_main_pt_tit">
							<p>配套设施</p>
						</div>
						<div className="room_main_pt_list">
							<div className="room_main_pt_listli">
								<span><Icon type="desktop" /></span>
								<span>电视</span>	
							</div>
							<div className="room_main_pt_listli">
								<span><Icon type="desktop" /></span>
								<span>空调</span>
								
							</div>
							<div className="room_main_pt_listli">
								<span><Icon type="desktop" /></span>
								<span>洗衣机</span>	
							</div>
							<div className="room_main_pt_listli">
								<span><Icon type="desktop" /></span>
								<span>电冰箱</span>	
							</div>
							<div className="room_main_pt_listli">
								<span><Icon type="desktop" /></span>
								<span>全天热水</span>	
							</div>
							
						</div>
						<div className="room_main_pt_list">
							<div className="room_main_pt_listli">
								<span><Icon type="desktop" /></span>
								<span>厨房</span>	
							</div>
							<div className="room_main_pt_listli">
								<span><Icon type="desktop" /></span>
								<span>毛巾</span>
								
							</div>
							<div className="room_main_pt_listli">
								<span><Icon type="desktop" /></span>
								<span>一次性用品</span>	
							</div>
							<div className="room_main_pt_listli">
								<span><Icon type="desktop" /></span>
								<span>热水壶</span>	
							</div>
							<div className="room_main_pt_listli">
								<span><Icon type="desktop" /></span>
								<span>电梯</span>	
							</div>
							
						</div>
						<div id="ptss1">
							<div className="room_main_pt_list">
							<div className="room_main_pt_listli">
								<span><Icon type="desktop" /></span>
								<span>保安</span>	
							</div>
							<div className="room_main_pt_listli">
								<span><Icon type="desktop" /></span>
								<span>餐具炊具</span>
								
							</div>
							<div className="room_main_pt_listli">
								<span><Icon type="desktop" /></span>
								<span>吹风机</span>	
							</div>
							<div className="room_main_pt_listli">
								<span><Icon type="desktop" /></span>
								<span>被子</span>	
							</div>
						
						</div>
						
							
							
						</div>
						<div className="room_main_xq_cz">
							<p className="ckqb room_main_ckqb">点击查看全部</p>
							<p className="sq room_main_sq">点击收起</p>
						</div>
					</div>
					<div className="room_main_zbss list">
						<div className="room_main_zbss_tit">
							<p>周边设施</p>
						</div>
						<div className="room_main_zbss_wz" >
                           公寓在山东中路和广东路交叉口周边有上海特色小吃、银行、便利店5分钟步行至南京东路和外滩10分钟步行至人民广场小区楼下有24小时便利店  仁济医院
            			</div>
					</div>
					<div className="room_main_cclx ">
						<div className="room_main_cclx_tit">
							<p>乘车路线</p>
						</div>
						<div className="room_main_cclx_wz" >
							外滩0距离， 体验上海风情， 步行至外滩、 南京东路、 豫园都可10分钟内抵达。 让您在上海的最中心感受最特别的上海
							外滩： 步行500米可到达
							南京东路步行街： 步行600米
							豫园、 人民广场： 步行10分钟可到达
							南京东路地铁站（ 2、 10 号线）： 500 米距离
							陆家嘴（ 东方明珠塔）： 乘坐1站地铁就可到达
							新天地： 2 站地铁至新天地
							田子坊： 4 站地铁至田子坊
							2 号线更可直达虹桥或者浦东机场， 让您的出行更加便利
            			</div>

					</div>
					<div className="room_main_fydz list">
						<div className="room_main_fydz_tit">
							<p>房源地址</p>
						</div>
						<div className="room_main_fydz_add">
							<span>上海-黄浦区-广东路339号</span>
							<span>房屋位置</span>
							<span>确认预订后提供详细位置</span>
						</div>
						<div className="room_main_fydz_map">

						</div>
					</div>
					<div className="room_main_jygz list">
						<div className="room_main_jygz_tit">
							<p>
								<span>交易规则</span>
								<span>退款协议：灵活</span>
							</p>
						</div>
						<div className="room_main_jygz_xq">
							<p>
								<br/>
								
								●
								入住当天12: 00 之前， 如申请退款， 订金全额退;
								<br/>
								<br/>
							</p>
							<p>
								●
								入住后如提前退房， 扣除已入住天数房款总额， 再扣除未入住天数房款总额的50 % ;
								
								<br/>
								<br/>
							</p>
							<p>
								●
								中午12: 00 之后默认当天已经入住， 申请退款和提前退房时间以木鸟短租系统记录的时间为准。
								<br/>
								<br/>
							</p>
						</div>

					</div>
					<div className="room_main_jzdb list">
						<div className="room_main_jzdb_tit">
							<p>建筑地标</p>
							<p>东方明珠，金贸</p>
						</div>

					</div>
					<div className="room_main_yq list">
						<div className="room_main_jzdb_tit">
							<p>要求及收费</p>
							<p>不收押金</p>
						</div>

					</div>
					<div className="room_main_fkpj list">
						<div className="room_main_fkpj_tit">
							<p>房客评价</p>
							<p>
								<span>房东其它房源评价（1055）</span>
								<span>30条评价</span>
							</p>
						</div>
						<div className="room_main_fkpj_tb">
							<div className="room_main_fkpj_hpl">
								<p>
									<span>100%</span>
									<span>好评率</span>
								</p>
							</div>
							<div className="room_main_fkpj_pf">
								<p>
									<span>卫生状况</span>
									<span><b></b></span>
									<span>5.0</span>
								</p>
								<p>
									<span>图片吻合</span>
									<span><b></b></span>
									<span>4.9</span>
								</p>
							</div>
							<div className="room_main_fkpj_pf">
								<p>
									<span>服务态度</span>
									<span><b></b></span>
									<span>5.0</span>
								</p>
								<p>
									<span>装潢设施</span>
									<span><b></b></span>
									<span>5.0</span>
								</p>
							</div>
							<div className="room_main_fkpj_zhpf">
								<p>
									<span>4.9</span>
									<span>综合评分</span>
								</p>	
							</div>
						
						
						</div>
						<div className="room_main_fkpj_list">
							<ul>
								<li>
									<div className="room_main_fkpj_usertx">
										<img src={require("../src/Room_imgs/room_pjtx.jpg")}/ >
									</div>
									<div className="room_main_fkpj_userinfo">
										<div className="room_main_fkpj_username">
											<p>龙**</p>
										</div>
										<div className="room_main_fkpj_usernr">
											<p> 好评房东人好房间卫生干净采光好</p>
										</div>
										<div className="room_main_fkpj_userpf">
											<p>
												<span className="shang">设施装潢：</span>
												<span className="xia">5</span>
												<span className="shang">服务态度:</span>
												<span className="xia">5</span>
												<span className="shang">图片吻合:</span>
												<span className="xia">5</span>
												<span className="shang">卫生状况:</span>
												<span className="xia">5</span>


											</p>
										</div>
									
									</div>
								</li>
							</ul>
						
						</div>

					</div>












				</div>


            </div>
        )
    }
}

export default Room