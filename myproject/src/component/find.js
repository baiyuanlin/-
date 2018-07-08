import React from 'react';
import '../css/find.css'
import $ from 'jquery'
import Pagecomponent from '../components/Pagecomponent'
import find24 from '../img/find24.jpg';
import find25 from '../img/find25.jpg';
import find26 from '../img/find26.jpg';
import find27 from '../img/find27.jpg';
import find28 from '../img/find28.jpg';
import Hedetail from './hedetail';


import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom';
import { Carousel } from 'antd';
// const Active={width:'100'} activeStyle={Active}


class Find extends React.Component {
    constructor(props) {
        super(props);
        this.state={
        
            arr:[],
            pageConfig:{
                totalPage:""//总页码
            }
        }
        // this.getCurrentPage = this.getCurrentPage.bind(this)
    }
    
    // getCurrentPage(currentPage) {
       
    //     this.setState({
    //         arr:this.state.arr[currentPage-1]
    //     })
    //     console.log(this.state)
    // }
    componentDidMount(){
        $(".hemain .mainul").eq(0).show()
        $('.titul li').click(function(){
            $(this).addClass("titli").siblings().removeClass("titli")
            var idx=$(this).index()
            // console.log(idx)
            $(".hemain .mainul").eq(idx).show().siblings().hide();
        })

        var _this=this   
        var oPages=document.getElementsByClassName("hepage")[0]
     
        var heyeshu=document.getElementsByClassName("heyeshu")[0]
        $.ajax({
            type:"get",
            url:'http://www.baidu.com/api/a',
            async:true,
            dataType:"json",
            success:function(data){
                var data=data.user
                _this.setState({pageConfig:{
                    totalPage:data.length//总页码
                }})
                _this.setState({arr:data})
                console.log(_this.state)
                var pagenum=data.length;
                var page=12;
                var pages=Math.ceil(pagenum/page)
                var str="";
                for(var i=1;i<=pages;i++){
                    
                     str+="<a>"+i+"</a>"
                 
                }
               
               
                // console.log(str)
                // console.log(pages)
            
            //   console.log(data.user)


            }

        })
    }
    
    render() {
        return (
            <div>
               
              
              
  
                {/* banner */}
                <div className="findbanner">
                    <ul className="findbannerul">
                        
                         {/* <a><img src={find24} className="App-logo" alt="logo" /></a> */}
                         <Carousel autoplay>
                            <li><a><img src={find24} className="App-logo" alt="logo" /></a></li>
                            <li><a><img src={find25} className="App-logo" alt="logo" /></a></li>
                            <li><a><img src={find26} className="App-logo" alt="logo" /></a></li>
                            <li><a><img src={find27} className="App-logo" alt="logo" /></a></li>
                            <li><a><img src={find28} className="App-logo" alt="logo" /></a></li>
                            
                        </Carousel>
                           
                         
                       
                    </ul>
                </div>
          
                {/* 中间 */}
                {/* <Router> */}
                <div className="findcenter">
                    <div className="hetit">
                        <div className="titleft">
                            <ul className="titul">
                                <li className="titli">
                                    全部
                                </li>
                                <li>
                                  
                                {/* <Link to='/hedetail'> 房东故事</Link> */}
                               房东故事
                                </li>
                                <li>
                                房客故事
                                </li>
                                <li>
                                发现旅行
                                </li>
                            </ul>

                        </div>
                        <div className="titright">
                            您的位置 ：<a>木鸟短租网</a> &gt; 发现
                        </div>
                    </div>
                        {/* 中间 */}
                    <div className="hemain">
                        <ul className="mainul">
                        {/* {
						this.state.arr.map(function(item,i){
							return(
								<div><Link to={{pathname:'/list',query:{id:item.goodsID}}}>{item.goodsName}</Link></div>
							)
						})
                    } */}
                    {/* 全部 */}
                    {
                        this.state.arr.map(function (item,i) {
                            
                       return(
                            <li className="mainli" key={i}>
                                <div className="hepic">
                                    <a><img src={require("../img/find10.jpg")}/></a>
                                    {/* <a><img src={item.smallimg}/></a> */}
                                </div>
                                <div className="mainxq">
                                    <div className="hebt">
                                        <p className="hebtdx">
                                           <Link to={'/hedetail/'+item.id}>{item.title}</Link>
                                        </p>
                                        <p className="heredu">
                                            <span><img className="huopic" src={require('../img/findhuo.jpg')}/></span>
                                            <span>热度</span>
                                            <span>({item.hotshu})</span>
                                        </p>
                                    </div>
                                    <div className="hefd">
                                        木鸟房东 : <a>{item.name}</a>
                                    </div>
                                    <div className="hefdms">
                                        <p>
                                        {item.duanluo}…
                                        </p>
                                    </div>
                                </div>
                            </li>
                       )
                             })
                            }
                        

                           
                        </ul>
                         {/* 房东故事 */}
                         <ul className="mainul fdgs">
                        {/* {
						this.state.arr.map(function(item,i){
							return(
								<div><Link to={{pathname:'/list',query:{id:item.goodsID}}}>{item.goodsName}</Link></div>
							)
						})
                    } */}
                    {/* 全部 */}
                    {
                        this.state.arr.map(function (item,i) {
                            
                       return(
                            <li className="mainli" key={i}>
                                <div className="hepic">
                                    <a><img src={require("../img/find11.jpg")}/></a>
                                    {/* <a><img src={item.smallimg}/></a> */}
                                </div>
                                <div className="mainxq">
                                    <div className="hebt">
                                        <p className="hebtdx">
                                           <a>{item.title}</a>
                                        </p>
                                        <p className="heredu">
                                            <span><img className="huopic" src={require('../img/findhuo.jpg')}/></span>
                                            <span>热度</span>
                                            <span>({item.hotshu})</span>
                                        </p>
                                    </div>
                                    <div className="hefd">
                                        木鸟房东 : <a>{item.name}</a>
                                    </div>
                                    <div className="hefdms">
                                        <p>
                                        {item.duanluo}…
                                        </p>
                                    </div>
                                </div>
                            </li>
                       )
                             })
                            }
                        

                           
                        </ul>
                        {/* 访客故事 */}
                        <ul className="mainul fdgs">
                        {/* {
						this.state.arr.map(function(item,i){
							return(
								<div><Link to={{pathname:'/list',query:{id:item.goodsID}}}>{item.goodsName}</Link></div>
							)
						})
                    } */}
                    {/* 全部 */}
                    {
                        this.state.arr.map(function (item,i) {
                            
                       return(
                            <li className="mainli" key={i}>
                                <div className="hepic">
                                    <a><img src={require("../img/find12.jpg")}/></a>
                                    {/* <a><img src={item.smallimg}/></a> */}
                                </div>
                                <div className="mainxq">
                                    <div className="hebt">
                                        <p className="hebtdx">
                                           <a>{item.title}</a>
                                        </p>
                                        <p className="heredu">
                                            <span><img className="huopic" src={require('../img/findhuo.jpg')}/></span>
                                            <span>热度</span>
                                            <span>({item.hotshu})</span>
                                        </p>
                                    </div>
                                    <div className="hefd">
                                        木鸟房东 : <a>{item.name}</a>
                                    </div>
                                    <div className="hefdms">
                                        <p>
                                        {item.duanluo}…
                                        </p>
                                    </div>
                                </div>
                            </li>
                       )
                             })
                            }
                        

                           
                        </ul>

                    </div>
                    
                    {/* 页脚 1-。。*/}
                    <div className="hepagewarp">
                        <ul className="hepage">
                            <li className="heprev">
                                <a>&lt;第一页</a>
                            </li>
                            <li className="heprev">
                                <a>&lt;上一页</a>
                            </li>
                            <li className="heyeshu">
                                
                            </li>
                            <li className="heprev">
                                 <a>下一页&gt;</a>
                            </li>
                            <li className="heprev">
                                <a>最后一页&gt;</a>
                            </li>
                        </ul>

 {/* <Pagecomponent pageConfig={this.state.pageConfig}
                               pageCallbackFn={this.getCurrentPage}/> */}

                    </div>
                </div>
                {/* </Router> */}
               
            </div>
        );
    }
}

export default Find;