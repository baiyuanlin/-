import React from 'react';
import './spbieshu.css';
import $ from 'jquery';
import Mock from 'mockjs';
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom';

class Spbieshu extends React.Component{
	constructor(props){
		super(props)
		this.state={
			arr:[]
		}
	}
	componentDidMount(){
           Mock.mock('http://www.baidu.com/api',{
				"user|8":[
				{
					"id|+1":1,
					"name":"@cname",
					"adress":"@city(true)",
					"basic":"@natural(368,1288)",
				}
				]
			})
            var  _this=this
			$.ajax({
				url:'http://www.baidu.com/api',
				dataType:'json',
				success:function(data){
//					data.user.map(function(item,i){
//						console.log(item.name)
//					})
				_this.setState({arr:data.user})
				
				}
			})
           $('#spnav li a').click(function(){
           	     $(this).css({"background": "orangered","color":"#fff"})
           });
           
           $(window).scroll(function(){
                    	var scrollTop = $(this).scrollTop();
						if(scrollTop > 400){
							$("#sptop").fadeIn();
						}else{
							$("#sptop").fadeOut();
						}
                   })
					$("#sptop").click(function(){
					$("body,html").animate({"scrollTop":0});
				});

               $(function(){
				    var hoverTimer, outTimer;
				    $("#pas1").hover(function(){
				        clearTimeout(outTimer);
				        hoverTimer = window.setTimeout(function(){
				            $("#list1").show();
				        },300);
				    },function(){
				        clearTimeout(hoverTimer);
				        outTimer = window.setTimeout(function(){
				            $("#list1").hide();
				        },300);
				    });
				});
				$(function(){
				    var hoverTimer, outTimer;
				    $("#pas2").hover(function(){
				        clearTimeout(outTimer);
				        hoverTimer = window.setTimeout(function(){
				            $("#list2").show();
				        },300);
				    },function(){
				        clearTimeout(hoverTimer);
				        outTimer = window.setTimeout(function(){
				            $("#list2").hide();
				        },300);
				    });
				});
				$(function(){
				    var hoverTimer, outTimer;
				    $("#pas3").hover(function(){
				        clearTimeout(outTimer);
				        hoverTimer = window.setTimeout(function(){
				            $("#list3").show();
				        },300);
				    },function(){
				        clearTimeout(hoverTimer);
				        outTimer = window.setTimeout(function(){
				            $("#list3").hide();
				        },300);
				    });
				});
				$(function(){
				    var hoverTimer, outTimer;
				    $("#pas4").hover(function(){
				        clearTimeout(outTimer);
				        hoverTimer = window.setTimeout(function(){
				            $("#list4").show();
				        },300);
				    },function(){
				        clearTimeout(hoverTimer);
				        outTimer = window.setTimeout(function(){
				            $("#list4").hide();
				        },300);
				    })
				})
		}
	render(){
		
		return(
			<div>
	            <div id="spban">
	                <div id="spban-mn">
	                    <div id="spjpg-mn">
				        <span style={{fontSize:'24px',top:'45px'}}>别墅</span>
				        <span style={{fontSize:'16px',top:'80px'}}>公司年会,开party,租豪华大别墅</span>
				        <div id="end"><div>优选672套房间</div></div>
				        </div>
	                </div>
	            </div>
	            <div id="spheader1">
                          木鸟短租网  <span>></span>主题特色房
                          <span>></span>聚会别墅
				</div>
				<div id="spheader2">
				        <h2><span>超值精选      特别推荐</span></h2>
				</div>
				<div id="spnav">
				      <ul>
				          <li><a>全部</a></li>
				          <li><a>北京</a></li>
				          <li><a>秦皇岛</a></li>
				          <li><a>石家庄</a></li>
				          <li><a>大连</a></li>
				          <li><a>营口</a></li>
				          <li><a>长春</a></li>
				          <li><a>吉林</a></li>
				          <li><a>哈尔滨</a></li>
				          <li><a>厦门</a></li>
				          <li><a>张家界</a></li>
				          <li><a>三亚</a></li>
				          <li><a>重庆</a></li>
				          <li><a>成都</a></li>
				          <li><a>北海</a></li>
				          <li><a>天津</a></li>
				          <li><a>珠海</a></li>
				          <li><a>中山</a></li>
				          <li><a>深圳</a></li>
				      </ul>
				</div>
				<div id="spjpg">
				    {
				    	this.state.arr.map(function(item,i){
				    return(		
				    	
				    <div id="spjpg-y" key={i}>
				        <div id="spjpg-x">
				        <img src={require("./spimg/bieshu3.jpg")} />
				        </div>
					        <div id="file1">
					        <a>{item.adress}康乃馨六房两厅别墅【闺蜜家】</a>
					        <div id="file2">
					             6室<span>|</span>
					             整租<span>|</span>
					             易住16人<span>|</span>
					             18张图<span>|</span>
					             近期预定0晚<span>|</span>
					        </div>
				            </div>
				             <div id="file3">
				            <a>
				    <img src={require("./spimg/p1.jpg")} />
				            {item.name}
				            </a>
				            </div>
				            <div id="file4">
				                <span>￥{item.basic}</span>
				            </div>
				    </div>
				    )
			    })
			    }									    
				</div>
				   <div id="spli">
				          <ul>
				              <li id="pas1"><img src={require("./spimg/spin.png")} />
				              <div id="list1"><span>在线客服</span></div></li>
				              <li id="pas2">
				                  <div id="list2">
                                  <h3>我的订单</h3>
                                  <p>查看您的近期订单</p>
                                  <Link to="/">点击查看</Link>
				                  </div>
				              </li>
				              <li id="pas3">
				                  <div id="list3">
				                  <h3>意见反馈群</h3>
                                  <p>官方问题反馈群,为您排忧解难,欢迎您的加入</p>
                                  <Link to="/">点击进入</Link>
				                  </div>
				              </li>
				              <li id="pas4">
				                  <div id="list4">
				                  <h3>问题反馈</h3>
                                  <p>请将您的问题告诉我们,我们将更好地为您服务</p>
                                  <Link to="/">点击反馈</Link>
				                  </div>
				              </li>
				              <li id="sptop"></li>
				          </ul>
				     </div>
			</div>
		)
	}
}
export default Spbieshu;