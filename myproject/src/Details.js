import React  from 'react';
// import $ from 'jquery'

import Icon from 'antd/lib/icon';
import {Link} from 'react-router-dom';

class Details extends React.Component {
	constructor(props){
		super(props)
		this.state={
			type:'down'
		}
		 this.onMouseEnter = this.onMouseEnter.bind(this);
		 this.onMouseLeave = this.onMouseLeave.bind(this);
	}
	onMouseEnter() {
		this.setState({
			type: 'up'
		})
	}
	onMouseLeave() {
		this.setState({
			type: 'down'
		})
	}
	componentDidMount(){
		
	}
	render(){
		return(
			<div className = "Details_warp"> 
				<div className="Details_search_place" >
					<div className="Details_search_city">
						< input type="text"
							value="上海"
							id="cityvalue"
							className="Details_input_city"
							autocomplete="off" />
					</div>
					<div className="Details_input_landmark_warp" >
						< input type="text"
							placeholder="请输入地名、房间名、房东姓名查询"
							className="Details_input_landmark" />
					</div>
					<div className="Details_time_warp" >
						<div className="Details_time_checkin" >
							<input type="text"
								placeholder="请选择入住时间"
								className="Details_time_input" />
						</div>
						<span className="Details_time_span">
							至
						</span>
						<div className="Details_time_checkout" >
							<input type="text"
								className="Details_time_input"
								placeholder="请选择退房时间" />
						</div>
					</div>
					< div className = "Deatails_search_number">
						<div className="Deatails_search_select">
							<span className="Deatails_search_num">1人</span>
						</div>
						<ul className="list">
							<li>1人</li>
							<li>2人</li>
							<li>3人</li>
							<li>4人</li>
							<li>5人</li>
							<li>6人</li>
							<li>7人</li>
						</ul>
					</div>
					<div className="Deatails_search_room">
						<input type="button" value="搜&nbsp;索&nbsp;房&nbsp;间"/>
					</div>
				</div>
				<div className="Deatails_search_list">
					<ul >
						<li  className="Deatails_search_list1">
							<div className="Deatails_search_tit">房间位置:</div>
							<div className="Deatails_search_list_bx">不限</div>
							<ul className="Deatails_search_fwwz">
								<li onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}><span className="span1">行政区域 <Icon type={this.state.type}/></span></li>
								<li onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}><span>热门地标 <Icon type={this.state.type} /></span></li>
								<li><span>商场周边 <Icon type="down"  /></span></li>
								<li><span>机场车站 <Icon type="down"  /></span></li>
								<li><span>学校周边 <Icon type="down"  /></span></li>
								<li><span>商务办公 <Icon type="down"  /></span></li>
								<li><span>景点周边 <Icon type="down"  /></span></li>
								<li><span>医院周边 <Icon type="down"  /></span></li>
								<li><span>宾馆周边 <Icon type="down"  /></span></li>
							</ul>
						</li>
						<li className="Deatails_search_list1">
							<div className="Deatails_search_tit">房屋类型:</div>
							<div className="Deatails_search_list_bx">不限</div>
							<ul className="Deatails_search_fwwz">
								<li><span className="span1">居民</span></li>
								<li><span>客栈</span></li>
								<li><span>宾馆/旅馆</span></li>
								<li><span>公寓</span></li>
								<li><span>独栋别墅</span></li>
								<li><span>复式阁楼</span></li>
								<li><span>四合院</span></li>
								<li><span>农家院</span></li>
								<li><span>其它</span></li>
							</ul>
						</li>
						<li className="Deatails_search_list1">
							<div className="Deatails_search_tit">房屋价格:</div>
							<div className="Deatails_search_list_bx">不限</div>
							<ul className="Deatails_search_fwwz">
								<li><span className="span1">0-100元</span></li>
								<li><span>101-200元</span></li>
								<li><span>201-300元</span></li>
								<li><span>301-400元</span></li>
								<li><span>401-500元</span></li>
								<li><span>501-800元</span></li>
								<li><span>800元-1000元</span></li>
								<li><span>1000元以上</span></li>
							</ul>
						</li>
						<li className="Deatails_search_list1">
							<div className="Deatails_search_tit">出租类型:</div>
							<div className="Deatails_search_list_bx">不限</div>
							<ul className="Deatails_search_fwwz">
								<li><span className="span1">整租</span></li>
								<li><span>单间出租</span></li>
							</ul>
						</li>
						<li className="Deatails_search_list1">
							<div className="Deatails_search_tit">房间户型:</div>
							<div className="Deatails_search_list_bx">不限</div>
							<ul className="Deatails_search_fwwz">
								<li><span className="span1">一室</span></li>
								<li><span>二室</span></li>
								<li><span>三室</span></li>
								<li><span>四室</span></li>
								<li><span>四室以上</span></li>
								
							</ul>
						</li>
					</ul>
				</div>

				<div className="Deatails_main">
					<div className="Deatails_main_article">
						<div className="Deatails_main_tit">
							
							<div className="Deatails_main_tit_left">
								<div className="Deatails_main_tit_sort">
									<span>默认<Icon type="arrow-down" /></span>|
									<span>销量<Icon type="arrow-down" /></span>|
									<span>价格<Icon type="arrow-down" /></span>|
									<span>人气<Icon type="arrow-down" /></span>|
									<span>最新<Icon type="arrow-down" /></span>|
									<span>评价<Icon type="arrow-down" /></span>
								</div>
							</div>
							<div className="Deatails_main_tit_right">
								<p>
									<span>木鸟短租网 ></span>
									<span>上海短租房</span>
									<span>- 为您找到上海短租房 31605套</span>
								</p>
							</div>
						
						</div>
						<div className="Deatails_main_house">
						
							<div className="Deatails_main_house_fwpic">
								<a href = "javascript:void(0);" target="_blank" title="南京路 东方明珠附近 逅客公寓 欧式江景房  整租">
								<Link to ="/room">
									<img src={require("./Deatails_imgs/house1.jpg")} />
								</Link>
								</a>
							</div>
						
							<div className="Deatails_main_house_detail">
								<div className="house_tit_warp">						
										<a href="javascript:void(0);" target="_blank" className="house_tit">南京路 东方明珠附近 逅客公寓 欧式江景房</a>
                            	</div>
								

								<div className="house_introduction">
									<p>
										<span> 1室 </span>| 
										<span> 整租 </span>| 
										<span> 宜住2人 </span>|
										<span> 28 条评论</span>  
									</p>	                           
										<div className="list_address">
											<span><Icon type="environment"/>  </span>
											地址：广东路339号
										</div>
									<div className="house_price">
										<span>￥498</span>/晚
									</div>
									<div className="near_reserve">
										近期预订<span>24 晚</span>
									</div>
									<div className="hr"></div>
                            	</div>
								<div className="house_introduction_xia">
									<p>
										<span className="shang">28</span>
										<span className="xia">
											<b className="pls"><Icon type="message" /></b>评论数
										</span>
									</p>
									<p>
										<span className="shang">28</span>
										<span className="xia">
											<b className="tjs"><Icon type="like" /></b>推荐数
										</span>
									</p>
									<p>
										<span className="shang">7</span>
										<span className="xia">
											<b className="fjtp"><Icon type="picture" /></b>房间图片
										</span>
									</p>
									<p>
										<span className="shang"><Icon type="environment" /></span>
										<span className="xia">地址位置</span>
									</p>
								
								
								</div>
							</div>
							<div className="Deatails_main_house_fzinfo">
								<div className="house_fzinfo_pic">
									<a href="javascript:void(0);">
										<img src={require("./Deatails_imgs/fzpic1.jpg")}/>
									</a>
								</div>
								<div className="house_fzinfo">
									<p><a href="javascript:void(0);">逅客南京路店</a></p>
									<p>地主</p>
								</div>
								
								<div className="house_fzinfo_phone">
									<p>
										<span>拨打电话</span>
										<div className="Deatails_main_ewm_warp">
											<div className="Deatails_main_ewm">
												<a href="javascript:void(0);">
													<img src={require("./Deatails_imgs/fkappewm.png")}/>
												</a>
												<p>手机端可电话联系房东还送88元优惠</p>
											</div>
										</div>
									</p>
								</div>
							

							</div>
						</div>



						 <div className="Deatails_main_house">
							<div className="Deatails_main_house_fwpic">
								<a href = "javascript:void(0);" target="_blank" title="南京路 东方明珠附近 逅客公寓 欧式江景房  整租">
									<img src={require("./Deatails_imgs/house1.jpg")} />
								</a>
							</div>
							<div className="Deatails_main_house_detail">
								<div className="house_tit_warp">						
										<a href="javascript:void(0);" target="_blank" className="house_tit">南京路 东方明珠附近 逅客公寓 欧式江景房</a>
                            	</div>
								

								<div className="house_introduction">
									<p>
										<span> 1室 </span>| 
										<span> 整租 </span>| 
										<span> 宜住2人 </span>|
										<span> 28 条评论</span>  
									</p>	                           
										<div className="list_address">
											<span><Icon type="environment"/>  </span>
											地址：广东路339号
										</div>
									<div className="house_price">
										<span>￥498</span>/晚
									</div>
									<div className="near_reserve">
										近期预订<span>24 晚</span>
									</div>
									<div className="hr"></div>
                            	</div>
								<div className="house_introduction_xia">
									<p>
										<span className="shang">28</span>
										<span className="xia">
											<b className="pls"><Icon type="message" /></b>评论数
										</span>
									</p>
									<p>
										<span className="shang">28</span>
										<span className="xia">
											<b className="tjs"><Icon type="like" /></b>推荐数
										</span>
									</p>
									<p>
										<span className="shang">7</span>
										<span className="xia">
											<b className="fjtp"><Icon type="picture" /></b>房间图片
										</span>
									</p>
									<p>
										<span className="shang"><Icon type="environment" /></span>
										<span className="xia">地址位置</span>
									</p>
								
								
								</div>
							</div>
							<div className="Deatails_main_house_fzinfo">
								<div className="house_fzinfo_pic">
									<a href="javascript:void(0);">
										<img src={require("./Deatails_imgs/fzpic1.jpg")}/>
									</a>
								</div>
								<div className="house_fzinfo">
									<p><a href="javascript:void(0);">逅客南京路店</a></p>
									<p>地主</p>
								</div>
								
								<div className="house_fzinfo_phone">
									<p>
										<span>拨打电话</span>
										<div className="Deatails_main_ewm_warp">
											<div className="Deatails_main_ewm">
												<a href="javascript:void(0);">
													<img src={require("./Deatails_imgs/fkappewm.png")}/>
												</a>
												<p>手机端可电话联系房东还送88元优惠</p>
											</div>
										</div>
									</p>
								</div>
							</div>
						</div> 





						 <div className="Deatails_main_house">
							<div className="Deatails_main_house_fwpic">
								<a href = "javascript:void(0);" target="_blank" title="南京路 东方明珠附近 逅客公寓 欧式江景房  整租">
									<img src={require("./Deatails_imgs/house1.jpg")} />
								</a>
							</div>
							<div className="Deatails_main_house_detail">
								<div className="house_tit_warp">						
										<a href="javascript:void(0);" target="_blank" className="house_tit">南京路 东方明珠附近 逅客公寓 欧式江景房</a>
                            	</div>
								

								<div className="house_introduction">
									<p>
										<span> 1室 </span>| 
										<span> 整租 </span>| 
										<span> 宜住2人 </span>|
										<span> 28 条评论</span>  
									</p>	                           
										<div className="list_address">
											<span><Icon type="environment"/>  </span>
											地址：广东路339号
										</div>
									<div className="house_price">
										<span>￥498</span>/晚
									</div>
									<div className="near_reserve">
										近期预订<span>24 晚</span>
									</div>
									<div className="hr"></div>
                            	</div>
								<div className="house_introduction_xia">
									<p>
										<span className="shang">28</span>
										<span className="xia">
											<b className="pls"><Icon type="message" /></b>评论数
										</span>
									</p>
									<p>
										<span className="shang">28</span>
										<span className="xia">
											<b className="tjs"><Icon type="like" /></b>推荐数
										</span>
									</p>
									<p>
										<span className="shang">7</span>
										<span className="xia">
											<b className="fjtp"><Icon type="picture" /></b>房间图片
										</span>
									</p>
									<p>
										<span className="shang"><Icon type="environment" /></span>
										<span className="xia">地址位置</span>
									</p>
								
								
								</div>
							</div>
							<div className="Deatails_main_house_fzinfo">
								<div className="house_fzinfo_pic">
									<a href="javascript:void(0);">
										<img src={require("./Deatails_imgs/fzpic1.jpg")}/>
									</a>
								</div>
								<div className="house_fzinfo">
									<p><a href="javascript:void(0);">逅客南京路店</a></p>
									<p>地主</p>
								</div>
								
								<div className="house_fzinfo_phone">
									<p>
										<span>拨打电话</span>
										<div className="Deatails_main_ewm_warp">
											<div className="Deatails_main_ewm">
												<a href="javascript:void(0);">
													<img src={require("./Deatails_imgs/fkappewm.png")}/>
												</a>
												<p>手机端可电话联系房东还送88元优惠</p>
											</div>
										</div>
									</p>
								</div>
							</div>
						</div> 




						
					</div>
					<div className="Deatails_main_sidebar">
						<div className="main_sidebar_bao">
							<a href="javascript:void(0);">
							<img src={require("./Deatails_imgs/bz_bigicon.jpg")}/>
							</a>

								
						</div>
						<div className="main_sidebar_hr"></div>
						<div className="main_sidebar_list_warp">
							<div className="main_sidebar_list">
								<p>
									<span><Icon type="check-circle" /></span>房源100%实地验
									<div className="main_sidebar_list_tip">
										1) 我们的每一个房东， 每一间房间都是有木鸟员工实地考察收集而来。<br/>
										2） 我们每一个房东都经过公安身份验证系统进行真实身份验证。<br/>
										3） 我们的每一间房间图片都是真实拍摄 不加任何修饰， 您看到的就是您将要入住的。
									</div>
								</p>
								<p>
									<span><Icon type="check-circle" /></span>付款到木鸟 资金有保障
									<div className="main_sidebar_list_tip">
										1） 在木鸟短租任何平台预定的房间， 房款都是有木鸟短租代为保管， 当您入住结束满意后房款才会转给房东。 < br / >
									
                   						 2）假如您在入住过程中遇到任何不满意，木鸟短租将全力帮您解决问题。
									</div>
								</p>
								<p>
									<span><Icon type="check-circle" /></span>保障入住人身安
									<div className="main_sidebar_list_tip">
										1） 木鸟短租上线以来已经接待了无数的房客， 从来没有遇到人身意外。 即使如此， 我们仍然理解您对住进一个陌生人家中的担忧， 并为此做了大量工作来保障您的整个交易和入住安全。 <br/>
										
                   						 2）您在木鸟短租pc端、app产生的订单我们将免费赠送您一份保险，保障您在入住过程中的人身安全。入住人数较多时，建议您自行为其购买住宿意外险。 <br/>
									</div>
								</p>
								<p>
									<span><Icon type="check-circle" /></span>地主之谊出行无
									<div className="main_sidebar_list_tip">
										我们的房东大都是不折不扣的当地人， 他们愿为远道而来的您尽一尽地主之谊。 < br / >
										1） 房东会告诉您当地哪里是最好玩的， 让您能够真正的体验到旅行社所不能给的当地旅游景点及自然景观。 < br / >
										2） 房东会告诉您去哪里吃能吃到当地的特色美食， 哪怕是胡同里的一个小摊位， 他还会告诉您哪里的美食价格合理不会被宰， 有他拒绝宰客。<br/>
										3） 房东会告诉您出行的最佳路线， 不走冤枉路， 不打黑车， 用最优线路游最美的风景。<br/>
									</div>
								</p>
							</div>
						</div>

						<div className="main_sidebar_list_add">
							<ul>
								<li>
									<img src={require("./Deatails_imgs/list_safeIcon.png")}/>
									<div className="wz">
										<p>　10万出行意外险<br/>
									　　　　身份证信息互联网核查</p>
									</div>
								</li>
								<li>
									<img src={require("./Deatails_imgs/list_serverIcon.png")}/>
										<div className="wz">
											<p>　2623位试睡体验师<br/>
									　　　　	50万房源实拍验真</p>
										</div>
								</li>
								<li>
									<img src={require("./Deatails_imgs/list_clearIcon.png")}/>
									<div className="wz">
									<p>　被单每客一换（高品质<br/>　　　　洗漱用品）/酒店及保洁</p>
									</div>
								</li>
							</ul>
						
						</div>
						<div className="tjfy_warp">
							<div className="main_sidebar_list_tjfy">
								<p><div></div>推荐房源</p>
								<img src={require("./Deatails_imgs/tjfy1.jpg")}/ >
								<div className="reco_house_price">
									<span>￥238/晚</span>
									<div className="score_bg"></div>
								</div>
								<div className="tjfy_tit">
									<p>泗泾站清风民宿-现代简约一室户</p>
									<p>
										<span>1人</span> | 
										<span> 整租</span> | 
										<span> 可住两人</span>
									</p>
								</div>
							</div>

						</div>
							








					</div>
				
				</div>

			</div>
		)
	}
}

export default Details
