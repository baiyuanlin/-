import React from 'react'
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom';
import '../css/find.css'
import find29 from '../img/find29.jpg';
import find30 from '../img/find30.jpg';
import find31 from '../img/find31.jpg';
 import { Icon } from 'antd';
import $ from 'jquery'

class Hedetail extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            arr:[],
            
        }
        

    }
    componentDidMount(){
        var _this=this
        console.log(this.props.match.params)
        $.ajax({
            type:"get",
            url:'http://www.baidu.com/api/a',
            async:true,
            dataType:"json",
            success:function(data){
                var data=data.user
               var id=_this.props.match.params.id
               
                console.log(data[0].id,id)
                for(var i=0;i<data.length;i++){
                    if(id==data[i].id){
                         _this.setState({arr:data[i]})  
                         console.log(_this.state) 
                    }else{
                        console.log("不一样")
                    }
                }
           

            }

        })
    }
   
    render(){
        return(
            <div>
               
                <div className="hecontentwarp">
                    <div className="hecontent">

                        <div className="hecontop">
                            <a>木鸟短租网 &gt; </a>
                            <a>发现 &gt; </a>
                            <a>超详细青岛旅行攻略</a>
                        </div>
                        <div className="heconcenter">
                        

                       
                            <div className="hecentleft">
                                <div>
                                    <div className="storytitle">
                                        超详细青岛旅行攻略
                                        {/* {this.state.arr.title} */}
                                        
                                    </div>
                                    <div className="heruedu">
                                        <span>评论（0）</span>
                                        <span>阅读（12501）</span>
                                    </div>
                                </div>
                              <hr/>
                            <div className="hezfxx">
                                <div>
                                说起海南，你可能只想到了三亚、海口，却没想到有一个堪比巴厘岛的低调小岛，正在慢慢火起来。也许是因为还没有被过度开发，这里有最质朴的村民和最纯净的风景。
                                </div>
                                <img src={find29} className="zfxxpic" alt="logo" />
                                <img src={find29} className="zfxxpic" alt="logo" />
                            <p>
                            所谓的家，就是我们这次万宁石梅湾之行在木鸟短租上订的一处民宿。这里远离喧嚣，沙滩柔软，绿树青青。房间也是宽敞明亮，发一组第二天早起拍的照片给大家过一下眼瘾吧。

这是一套3居的家庭房，因为我们一行5个人，这样住最合适了。这里有超大的露天阳台和全景落地窗，旁边有一个浴缸，在这里喝着红酒泡着香香的泡泡浴，看窗外星光闪烁，湖景壮阔那一定是超级惬意了
                            </p>
                            </div>
                            </div>
                            
                            <div className="hecentright">
                                <div className="s_mn_title">
                                    <div className="s_mn_t1">
                                        主人公介绍
                                    </div>
                                    <div className="hezhuren">
                                          <img src={find30} className="hezhurenpic" alt="logo" />
                                       
                                    </div>
                                    <div className="hegemz">
                                        <a className="hemz">李莉</a>
                                    </div>
                                    <div className="heicon">
                                    <span> <Icon type="user" style={{ fontSize: 22, color: 'red' }} /></span>
                                        <span> <Icon type="solution" style={{ fontSize: 22, color: 'red' }} /></span>
                                       
                                      

                                       <span> <Icon type="tablet" style={{ fontSize: 22, color: 'red' }} /></span>

                                    </div>
                                    <div className="hehpl">
                                        <div>
                                            <p>好评率</p>
                                            <p className="hehong">100%</p>
                                        </div>
                                        <div>
                                            <p>回复率</p>
                                            <p className="hehong">96%</p>   
                                        </div>
                                        <div>
                                            <p>接单率</p>
                                            <p className="hehong">96%</p>
                                        </div>
                                    </div>
                                    <div>
                                        性别 ：男
                                    </div>
                                    <div className="hefwtd">
                                        <a>访问Ta的主页</a>
                                    </div>
                                    <div>
                                        <div className="s_mn_title">
                                            <div className="s_mn_t1">
                                                Ta的家
                                            </div>
                                            <div className="s_mn_t2">
                                                <a>更多&gt;&gt;</a>
                                            </div>
                                        </div>
                                        <div>
                                             <a><img src={find31} className="hetapic" alt="logo" /></a>
                                            <p><a>Loft带一书房/半小时...</a></p>
                                            <div className="hejiaq">
                                                <p>成都-澶县</p>
                                                <p className="heys">
                                                    ￥<span>198.00</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            把这篇文章分享给小伙伴
                        </div>


                    </div>
                </div>
               
            </div>
        )

    }
        
}

export default Hedetail;