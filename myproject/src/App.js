import React, { Component } from 'react';


import './css/index.css'
import './css/reset.css'
import './css/double-date.css'

import Index from './components/index'

import './App.css';
import Special from './special';
import Spbieshu from './spbieshu';
import Spsearch from './spsearch';

import Find from './component/find';
import Hedetail from './component/hedetail';
import Sqyd from './component/sqyd';
import Room from './room';
import Details from './Details';

import Find from './component/find'
import Hedetail from './component/hedetail'
import Sqyd from './component/sqyd'
import Register from './register'
import $ from 'jquery'
import './mock/data'
import Login from './login'
import Store from './Store';
import {BrowserRouter as Router,Route,Redirect,Switch,Link,IndexRoute} from 'react-router-dom'


class App extends Component {
	constructor(props) {
    super(props);
    this.state={
      str:Store.getState()
        }
      this.onchanges=this.onchanges.bind(this)
		
  }
  onchanges(){
   
  
      this.setState({str:Store.getState()})
   
   
      console.log(this.state.str.user);
     
}
componentDidUpdate(){
  sessionStorage.setItem('user',this.state.str.user);
 
  if(this.state.str){
   
    $('.hearder-right1').css({display:'none'});
    $('.username').css({display:'block'})
  }else{
    $('.hearder-right1').css({display:'block'});
    $('.username').css({display:'none'})
  }
}
	componentDidMount(){
    
    Store.subscribe(this.onchanges);
    this.setState({str:{user:sessionStorage.getItem('user')}})
    

		$.ajax({
			type:"get",
			url:"http://www.baidu.com/api/a",
			async:false,
			dataType:"json",
			success:function(data){
			}

		})
	}
  render() {
    return (
<div>
<Router>
      <div>
			
       <div className="header1">
                    <div className="header-left1">
                    
                        <img src={require("./img/index45.png")}/>
                        <img src={require("./img/index55.png")}/>
                    </div>
                    <ul className="header-nav1">
                        <li><Link to="/index">首页</Link></li>
                        <li><Link to="/special">特色短租</Link></li>
                        <li><Link to="/find">发现</Link></li>
                        <li><Link to="/spsearch">手机木鸟</Link>
                            <img src={require("./img/index34.png")}/>
                        </li>
                    </ul>
                    <div className="hearder-right1">
                        <a href="" className="fangyuan">免费发布房源</a>
                        <div className="login">
                          <Link to="/login">登录</Link>
                           .
                            <Link to="/register">注册</Link>
                        </div>
                    </div>
                    <div className="username">
                      <h3> Hi 欢迎回来！ {this.state.str.user}</h3>
                      <button>我要成为房东</button>
                    </div>
               </div>
             
							 
	
						
					<div>
						
					    <Switch>
							<Route path="/index" component={Index}>
							
							</Route>

							
							<Route path="/special" component={Special}></Route>
							<Route path="/spsearch" component={Spsearch}></Route>
							<Route path="/spbieshu" component={Spbieshu}></Route>
							<Route path="/find" component={Find}></Route>
							<Route path="/hedetail/:id" component={Hedetail}></Route>

							<Route path="/sqyd" component={Sqyd}></Route>

                            <Route path="/Details" component={Details}></Route>
                            <Route path="/room/:id" component={Room}></Route>
              <Route path="/register" component={Register}></Route>
              <Route path="/login" component={Login}></Route>

					
							
						


						

						<Redirect to="/index"></Redirect>
						
				
				

         			
								{/* <IndexRoute component={Index}/> */}
									
         			 {/* <Route path="/" component={Index}></Route> */}
       		
						
					
						
						
					
						</Switch>
					
					</div>
			
				


               <div className="footer">
                  <div className="footer-top">
                    <div className="weibo"></div>
                    <div className="weixin"></div>
                  </div>
                
              <div className="footer-nav">
                    <ul >
                        <li>热门短租：</li>
                        <li>北京短租房</li>
                        <li>北京短租房</li>
                        <li>北京短租房</li>
                        <li>北京短租房</li>
                        <li>北京短租房</li>
                        <li>北京短租房</li>
                        <li>北京短租房</li>
                        <li>北京短租房</li>
                        <li>北京短租房</li>
                        <li>北京短租房</li>
                        <li>北京短租房</li>
                        <li>北京短租房</li>
                        <li>北京短租房</li>
                       
                    </ul>
                    <ul >
                        <li>短租公寓推荐：</li>
                        <li>珠海短租房公寓</li>
                        <li>珠海短租房公寓</li>
                        <li>珠海短租房公寓</li>
                        <li>珠海短租房公寓</li>
                        <li>珠海短租房公寓</li>
                        <li>珠海短租房公寓</li>
                        <li>珠海短租房公寓</li>
                        <li>珠海短租房公寓</li>
                        <li>珠海短租房公寓</li>
                        <li>珠海短租房公寓</li>
                    </ul>
                    <ul >
                        <li>友情链接：</li>
                        <li>火车票资讯</li>
                        <li>火车票资讯</li>
                        <li>火车票资讯</li>
                        <li>火车票资讯</li>
                        <li>火车票资讯</li>
                        <li>火车票资讯</li>
                        <li>火车票资讯</li>
                        <li>火车票资讯</li>
                        <li>火车票资讯</li>
                        <li>火车票资讯</li>
                        <li>火车票资讯</li>
                        <li>火车票资讯</li>
                        <li>火车票资讯</li>
                    </ul>
              </div>
              <div className="footer-bottom">
                <div className="bottom-nav">
                    <ul>
                        <li>免费声明</li>
                        <li>关于我们</li>
                        <li>联系我们</li>
                        <li>法律声明</li>
                        <li>新手指南</li>
                        <li>帮助声明</li>
                        <li>短租房</li>
                        <li>新闻资讯</li>
                        <li>媒体报告</li>
                    </ul>
                </div>
                <div className="lianxi">
                客服电话：400-056-0055 或 010-89180879
                <span className="m10">客户服务：service@muniao.com</span>
                <span className="m10">意见反馈：feedback@muniao.com</span>
                </div>
                <div className="lianxi">
                    
                    网站备案/许可证号：京ICP备12043553号-3 京公网安备11010802011855号&nbsp;
                    营业执照编号 104555056&nbsp;
                    北京爱游易科技有限公司 
                </div>
                <div className="footer-img">
                    <img src={require('./img/index51.jpg')}/>
                    <img src={require('./img/index52.jpg')}/>
                    <img src={require('./img/index53.jpg')}/>
                    <img src={require('./img/index54.jpg')}/>
                </div>
              </div>
            </div>
      </div>
			</Router>
</div>
		)
	
	}

}

export default App;
