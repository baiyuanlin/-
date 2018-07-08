import React from 'react';
import './special.css';
import $ from 'jquery';
import Mock from 'mockjs';
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom';

class Special extends React.Component{
	constructor(props){
		
		super(props)
	}
	componentDidMount(){ 
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
				    });
				});	
				
				$("#left-down").click(function(){
					$("#side").fadeIn();
					$(this).fadeOut();
				});
				$("#close-right").click(function(){
					$("#side").fadeOut();
					$("#left-down").fadeIn();
				})
		}
	render(){
		
		return(
			<div>    
				     <div id="spban1">
				     <h2>主题特色房</h2>
				     <p>旅行为了体验美好的生活</p>
				     </div>
				     <div id="sphead1">
                          木鸟短租网  <span>></span>主题特色房
				     </div>
				     <div id="sphead2">
				        <h2><span>旅行,为了体验美好的生活</span></h2>
				     </div>
				     <div id="spjpg">
				        <div id="spjpg-mn1">
				        <span style={{fontSize:'24px',top:'135px'}}>别墅</span>
				        <span style={{fontSize:'16px',top:'170px'}}>公司年会,开party,租豪华大别墅</span>
				        <div id="end"><div>优选982套房间</div></div>
				        <Link to="/spbieshu">
				        <img src={require("./spimg/2016112850647477.jpg")} />
				        </Link>
				        </div>
				        <div id="spjpg-mn2">
				        <span style={{fontSize:'24px',top:'135px'}}>情侣房</span>
				        <span style={{fontSize:'16px',top:'170px'}}>蜜月情侣不一样的浪漫</span>
				        <div id="end"><div>优选28套房间</div></div>
				        <Link to="/spbieshu">
				        <img src={require("./spimg/2016112850790009.jpg")} />
				        </Link>
				        </div>
				        <div id="spjpg-mn2">
				        <span style={{fontSize:'24px',top:'135px'}}>主题特色房</span>
				        <span style={{fontSize:'16px',top:'170px'}}>爱TA将TA的梦变成现实</span>
				        <div id="end"><div>优选219套房间</div></div>
				        <Link to="/spbieshu">
				        <img src={require("./spimg/2016112850841837.jpg")} />
				        </Link>
				        </div>
				        <div id="spjpg-mn2">
				        <span style={{fontSize:'24px',top:'135px'}}>海景房</span>
				        <span style={{fontSize:'16px',top:'170px'}}>听海的声音,就在窗外</span>
				        <div id="end"><div>优选228套房间</div></div>
				        <Link to="/spbieshu">
				        <img src={require("./spimg/2016112850904385.jpg")} />
				        </Link>
				        </div>
				        <div id="spjpg-mn2">
				        <span style={{fontSize:'24px',top:'135px'}}>古镇客栈</span>
				        <span style={{fontSize:'16px',top:'170px'}}>住千年古镇,看岁月更迭,听年代流转</span>
				        <div id="end"><div>优选141套房间</div></div>
				        <Link to="/spbieshu">
				        <img src={require("./spimg/2016112850969601.jpg")} />
				        </Link>
				        </div>
				        <div id="spjpg-mn2">
				        <span style={{fontSize:'24px',top:'135px'}}>木屋</span>
				        <span style={{fontSize:'16px',top:'170px'}}>感受最真实的大自然,从住木屋开始</span>
				        <div id="end"><div>优选22套房间</div></div>
				        <Link to="/spbieshu">
				        <img src={require("./spimg/2016112851022489.jpg")} />
				        </Link>
				        </div>
				        <div id="spjpg-mn1">
				        <span style={{fontSize:'24px',top:'135px'}}>四合院</span>
				        <span style={{fontSize:'16px',top:'170px'}}>感受老北京的深闺大院,品街头巷尾的家长里短</span>
				        <div id="end"><div>优选5套房间</div></div>
				        <Link to="/spbieshu">
				        <img src={require("./spimg/2016112852039681.jpg")} />
				        </Link>
				        </div>
				        <div id="spjpg-mn2">
				        <span style={{fontSize:'24px',top:'135px'}}>复式LOFT</span>
				        <span style={{fontSize:'16px',top:'170px'}}>小资情调的感同身受</span>
				        <div id="end"><div>优选219套房间</div></div>
				        <Link to="/spbieshu">
				        <img src={require("./spimg/2016112852099413.jpg")} />
				        </Link>
				        </div>
				        <div id="spjpg-mn2">
				        <span style={{fontSize:'24px',top:'135px'}}>窑洞</span>
				        <span style={{fontSize:'16px',top:'170px'}}>西北黄土高原的别样风情</span>
				        <div id="end"><div>优选1套房间</div></div>
				        <Link to="/spbieshu">
				        <img src={require("./spimg/2016112852149213.jpg")} />
				        </Link>
				        </div>
				        <div id="spjpg-mn2">
				        <span style={{fontSize:'24px',top:'135px'}}>农家院</span>
				        <span style={{fontSize:'16px',top:'170px'}}>周末出游,同学聚会,感受最地道的风土人情</span>
				        <div id="end"><div>优选8套房间</div></div>
				        <Link to="/spbieshu">
				        <img src={require("./spimg/2016112852226537.jpg")} />
				        </Link>
				        </div>
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
				     <div id="side">
				         <div id="side-t">
				         <img src={require("./spimg/side2.png")} />
				         <div id="side-y">
				          <div id="side-y1">
				          <img src={require("./spimg/side.png")} />
				          </div>
				          <div id="side-y2">
				                <h4>扫描下载APP</h4>
				                <a>IOS下载</a><a>Android下载</a>
				          </div>
				         </div>
				         <span id="close-right"><img src={require("./spimg/close_down.png")} />
				         </span>
				         </div>
				     </div>
				     <div id="left-down">
				          <img src={require("./spimg/left_down.png")} /> 
				     </div>
			</div>
		)
	}
}
export default Special;