import React from 'react';
import './spsearch.css'
import $ from 'jquery';
import Mock from 'mockjs';
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom'

class Spsearch extends React.Component{
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
		}
	render(){
		
		return(
			<div>
		        <div id="spban-s">
		            <div id="spban-e">
		             <div id="pos">
		                <div id="posi">
                         <span>木鸟短租</span>
                         <p>出差旅行聚会住宿</p>
                         <p>随时随地轻松搞定</p>
                         <p>给您不一样的住宿体验</p>
                  <img src={require("./spimg/ios__download.png")} />
                  <img src={require("./spimg/android__download.png")} />
                         </div>
 		             </div>
 		             <div id="spphone">
 		          <img src={require("./spimg/erweima1.jpg")} />
 		             </div>
 		            </div>
		         </div>
		    <div id="main-ditu">
		        <div id="ditu">
		            <div id="ditu-ty">
			            <div id="ditu-mn1">
			            海量房源任你选
			            </div>
			            <div style={{width:'180px',margin:'0 60px',font:'12px'}}>
			            木鸟短租在中国200多个城市近20万套房源，任你选择。
			            </div>
		            </div>
		            <div id="ditu-ty">
			            <div id="ditu-mn2">
			            海量房源任你选
			            </div>
			            <div style={{width:'180px',margin:'0 60px',font:'12px'}}>
			            木鸟短租在中国200多个城市近20万套房源，任你选择。
			            </div>
		            </div>
		            <div id="ditu-ty">
			            <div id="ditu-mn3">
			            海量房源任你选
			            </div>
			            <div style={{width:'180px',margin:'0 60px',font:'12px'}}>
			            木鸟短租在中国200多个城市近20万套房源，任你选择。
			            </div>
		            </div>
		            <div id="ditu-ty">
			            <div id="ditu-mn4">
			              海量房源任你选
			            </div>
			            <div style={{width:'180px',margin:'0 60px',font:'12px'}}>
			            木鸟短租在中国200多个城市近20万套房源，任你选择。
			            </div>
		            </div>
		        </div>
		      </div>
		      <div id="spfoot">
		           <div id="spfoot-mn">
		                 <div>
		                      <span>不知道怎么下载?</span><br/>
		                      各大应用市场搜索“木鸟短租”即可找到哦！
		                 </div>
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
			</div>
		)
	}
}
export default Spsearch;