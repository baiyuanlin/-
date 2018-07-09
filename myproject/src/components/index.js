import React, { Component } from 'react';
import '../css/index.css'
import '../css/reset.css'
import '../css/double-date.css'
import $ from 'jquery';
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom';
import { Menu, Dropdown, Icon, Carousel} from 'antd';
const menu = (
    <Menu>
      <Menu.Item key="0">
        1个 人
      </Menu.Item>
      <Menu.Item key="1">
       2 个 人
      </Menu.Item>
      <Menu.Item key="2">
        3 个 人 
      </Menu.Item>
      <Menu.Item key="3">
        4 个 人 
      </Menu.Item>
      <Menu.Item key="4">
        5 个 人 
      </Menu.Item>
    </Menu>
  );

  
class Index extends Component {
    constructor(props){
        super(props)
    }
componentDidMount(){
    var oimg=document.getElementsByClassName('bt-img')[0];
    var img=oimg.children;
    var oul=document.getElementsByClassName('bt-anv')[0];
    var oli=oul.children;
    var aul=document.getElementsByClassName('right-nav')[0];
    var ali=aul.children;
    var fy=document.getElementsByClassName('fy')[0];
    for(let k=0;k<ali.length;k++){
        ali[k].onmousemove=function(){
           fy.style.left=k*-580+'px';
            
        }
    }
    for(let i=0;i<oli.length;i++){
        oli[i].onmousemove=function(){
           img[i].className="hover";    
        }
    }
    // 楼梯
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
    // 轮播图
    
    $.fn.slider = function(opts){
        var defaults = {
            width:1300,
            height:600,
            direction:"left",
            interval:5000,
            showNav:false,
            showBtns:false
        };
        var options = $.extend(true,{},defaults,opts);
        
        function Slider(options){
            this.ele = $("#sliderBox");
            this.lists = $("#sliderList");
            this.nav = $("#sliderNav");
            this.btns = $("#sliderBtns");
            this.lists.find("li").eq(0).clone(true).appendTo(this.lists);
            this.list = this.lists.find("li");
            this.ele.css({"width":options.width,"height":options.height});
            this.list.css({"width":options.width,"height":options.height});
            this.list.find("img").css({"width":options.width,"height":options.height});
            this.btns.find(".btn").css("top",((options.height/3)+20));
            
            switch(options.direction){
                case "top":
                    this.topBottom();
                    break;
                default:
                    this.leftRight();
            }
            if(options.showNav){
                this.nav.show();
            }
            if(options.showBtns){
                this.btns.show();
            }
        }
        Slider.prototype.leftRight = function(){
            this.lists.css({"width":options.width*this.list.length,"height":options.height});
            this.list.css("float","left");
            this.timer = setInterval(move,options.interval);
            var _this = this;
            var index = 0;


            function move(){
                index++;
                if(index == _this.list.length){
                    index = 1;
                    _this.lists.css("left",0);
                }
                if(index==_this.list.length-1){
                    _this.nav.find("li").eq(0).addClass("hover").siblings().removeClass("hover");
                
                }else{
                    _this.nav.find("li").eq(index).addClass("hover").siblings().removeClass("hover");	
                }
                _this.lists.stop().animate({"left":-index*options.width},1000,function(){

                });
                
            }
            
            this.nav.find("li").hover(function(){
                clearInterval(_this.timer);
                index = $(this).index()-1;
                move();
            },function(){
                _this.timer = setInterval(move,5000);
            });
            
            this.btns.find(".btn").eq(0).click(function(){
                clearInterval(_this.timer);
                move();
                _this.timer = setInterval(move,5000);
            })
            this.btns.find(".btn").eq(1).click(function(){
                clearInterval(_this.timer);
                console.log(index);
                if(index==0){
                    index = _this.list.length-3;
                    _this.lists.css("left",(-(_this.list.length-1))*options.width);
                }else{
                    index = index -2;
                }
                move();
                _this.timer = setInterval(move,3000);
            })   
            
        }

        Slider.prototype.topBottom = function(){
            
        }
        
        new Slider(options);
        return this;
    }

        $("#sliderBox").slider({
            width:1280,
            height:600,
            showNav:true,
            showBtns:true
        });
        //日历
        $(function(){
            var dateStr='<div class="date-list"><div class="header clearfix"><div class="header-left fl">&lt;</div><div class="fl"><select class="year"></select></div><div class="fl"><select class="month"><option value="1">1月</option><option value="2">2月</option><option value="3">3月</option><option value="4">4月</option><option value="5">5月</option><option value="6">6月</option><option value="7">7月</option><option value="8">8月</option><option value="9">9月</option><option value="10">10月</option><option value="11">11月</option><option value="12">12月</option></select></div><div class="header-right fl">&gt;</div><div class="fr today">今日</div></div><table><thead><tr><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th><th>日</th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table></div>'
            $(dateStr).appendTo($(".date"));
            var $y = $(".year"), $m = $(".month"),
                $year = $y.val(),
                $month = $m.val(),
                current = new Date(),
                current_year = current.getFullYear(),
                current_month = current.getMonth() + 1,
                current_date = current.getDate();
            $m.val(current_month);
            $y.val(current_year);
            for(var i=1917;i<2118;i++){
                var opt = '';
                opt += "<option>" + i + "</option>";
                $(opt).appendTo($y);
        
            }
            $y.val(current_year);
            show();
            function show() {
                $(".date").each(function () {
                    var $y = $(this).find(".year"), $m = $(this).find(".month");
                    var year = $(this).find(".year").val(), month = $(this).find(".month").val();
                    var dates = new Date(year, month, 0).getDate();
                    //根据年份和月份获取当月第一天的日期
                    date = new Date(new Date(year, month - 1, 1));
                    //根据年份和月份获取当月第一天是星期几:
                    var firstDay = date.getDay();
                    if (firstDay == 0) {
                        firstDay = 7;
                    }
                    var num = 1;
                    $(this).find("td").each(function () {
                        $(this).removeClass("current");
                        var $eq = $(this).index() + 1;
                        //给td赋值
                        if ($eq < firstDay && $(this).parent("tr").index() === 0) {
                            $(this).html("");
                        } else {
                            if (num <= dates) {
                                $(this).html(num);
                                num++
                            } else {
                                $(this).html("")
                            }
                        }
                        //去掉内容为空的tr
                        if ($(this).html() == "" && $(this).siblings().html() == "") {
                            $(this).parents("tr").css("display", "none");
                        } else {
                            $(this).parents("tr").css("display", "table-row")
                        }
                        if ($y.val() == current_year && $m.val() == current_month && $(this).html() == current_date) {
                            $(this).addClass("current");
                        } else {
                            $(this).removeClass("current")
                        }
                    });
                    num = 1;
                });
            }
        
            var date = new Date();
            //点击今日跳转到今日列表
            $(".today").on("click", function () {
                $y.val(current_year);
                $m.val(current_month);
                show();
                $(this).parents(".date-list").css("display", "none").siblings(".date-check").val(current_year + "-" + zero(current_month) + "-" + zero(current_date));
            });
            $(".header select").on("change", function () {
                show();
            });
            var flag = 0;
            $(".date-list").hover(function () {
                flag = 0;
            }, function () {
                flag = 1;
            });
            //input框获得焦点，让日历显示。失去焦点后，让日历隐藏
            $(".date-check").each(function () {
                $(this).on("focus", function () {
                    var $outer = $(this).siblings(".date-list"),
                        $this_input = $(this);
                    $outer.css("display", "block");
                    $outer.find("td").each(function () {
                        var $this_td = $(this);
                        $this_td.on("click", function () {
                            var $input_year = $(this).parents(".date-list").find(".year").val(),
                                $input_month = $(this).parents(".date-list").find(".month").val(),
                                $input_val = $(this).html(),
                                date_str = "";
                            if ($this_td.html() != "") {
                                date_str += $input_year + "-" + zero($input_month) + "-" + zero($input_val);
                                $this_input.val(date_str);
                                $outer.css("display", "none");
                            }
                        })
                    })
                });
                $(this).on("blur", function () {
                    if (flag == 1) {
                        $(this).siblings(".date-list").css("display", "none");
                        flag = 0;
                    }
                })
            });
            //月份和日期小于10的补0
            function zero(num) {
                return num >= 10 ? num : "0" + num;
            }
            $("#from td,#to td,#from .today,#to .today").on("click",function(){
                var d_year=$(this).parents(".date-list").find(".year").val(),
                    d_month=$(this).parents(".date-list").find(".month").val(),
                    $td_val;
                if($(this).prop("tagName").toLowerCase()=="td"){
                    $td_val =$(this).html();
                    if($td_val!=""){
                        var str=d_year+"-"+d_month+"-"+$td_val;
                        $(this).parents(".date-list").siblings(".date-check").val(str);
                    }
                }
                var $from=$("#from .date-check").val(),$to=$("#to .date-check").val();
                var from_seconds=new Date($from.replace("-", "/").replace("-", "/")).getTime(),to_seconds=new Date($to.replace("-", "/").replace("-", "/")).getTime();
                if($from!="" && $to !=""){
                    if(from_seconds>to_seconds){
                        alert("起始日期不能大于结束日期！");
                        $("#from,#to").addClass("date-error");
                    }else{
                        $("#from,#to").removeClass("date-error");
                    }
                }
            });
            $(".header-left").on("click",function(){
                var $year=parseInt($(this).parents(".header").find(".year").val());
                var $mon=parseInt($(this).parents(".header").find(".month").val());
                if($mon>=2){
                    $mon-=1;
                }else{
                    $year-=1;
                    $mon=12;
                    $(this).parents(".header").find(".month").val($mon);
                    $(this).parents(".header").find(".year").val($year)
                }
                $(this).parents(".header").find(".month").val($mon);
                show();
            });
            $(".header-right").on("click",function(){
                var $year=parseInt($(this).parents(".header").find(".year").val());
                var $mon=parseInt($(this).parents(".header").find(".month").val());
                if($mon<12){
                    $mon+=1;
                }else{
                    $year+=1;
                    $mon=1;
                    $(this).parents(".header").find(".month").val($mon);
                    $(this).parents(".header").find(".year").val($year)
                }
                $(this).parents(".header").find(".month").val($mon);
                show();
        
            });
            document.body.onselectstart=document.body.ondrag=function(){
                return false;
        
            }
            
        })
}
    render() {
        return (
            
    <div>
     
            <div>
               
               <div className="banner-center">
               
                <div id="sliderBox">
                        <ul id="sliderList">
                            <li><Link to="" title="世界杯"><img src={require("../img/index57.jpg")}/></Link></li>
                            <li><Link to="" title="发现"><img src={require("../img/index58.jpg")}/></Link></li>
                            <li><Link to="" title="世界杯"><img src={require("../img/index57.jpg")}/></Link></li>
                            <li><Link to="" title="发现"><img src={require("../img/index58.jpg")}/></Link></li>
                        </ul>
                        <div id="sliderBtns">
                            <div className="btn">&lt;</div>
                            <div className="btn">&gt;</div>
                        </div>
                    </div>
                    
                    <div className="banner-search">
                        <div className="search1">
                            <ul>
                                <li><Icon type="environment-o" /></li>
                                <li className="shuru"><input type="text" placeholder="请选择目的地"/></li>
                                <li><Icon type="schedule" /></li>
                                <li>
        
                    <div className="date date1 fl" id="from">
                        <input type="text" className="date-check" placeholder="入住时间"/>
                    </div>
                   
                
                </li>
                                <li>——</li>
                                <li> 
                        <div className="date fr" id="to">
                        <input type="text" className="date-check" placeholder="离开时间"/>
                    </div>
                    </li>
                                <li><Icon type="usergroup-add" /></li>
                                <li>
                                    <Dropdown overlay={menu} trigger={['click']}>
                                    <a className="ant-dropdown-link" href="#">
                                    入住人数 <Icon type="down" />
                                    </a>
                                    </Dropdown>
                                    </li>
                                <li ><button className="yuding">开始预定</button></li>
                            </ul>    
                        </div>
                    </div>
               </div>
               <div className="wenzi">
                    <ul className="new-nav">
                        <li><img src={require("../img/index49.png")}/><p>10万出行意外险/身份证信息互联网核查</p></li>
                        <li><img src={require("../img/index48.png")}/><p>2623位试睡体验师/50万房源实拍验真</p></li>
                        <li><img src={require("../img/index50.png")}/><p>被单每客一换（高品质洗漱用品）/酒店及保洁</p></li>
                    </ul>
               </div>
               <div className="city-box">
                    <div className="city-title">
                    
                        
                            <div className="title-top">
                            <h2>寻找你未曾相遇的风景</h2>
                            <span>热门城市</span>
                            </div>
                        
                       
                       
                        <div className="city-img">
                        <Link to=""> 
                            <div className="city-img2"><img src={require("../img/index11.jpg")}/>
                                <div className="img2-child">
                                <h3>北京</h3>
                                <p>京戏胡同豆汁酸</p>
                                </div>
                            </div>
                        </Link>
                        <Link to=""> 
                            <div className="city-img1"><img src={require("../img/index14.jpg")}/>
                                <div className="img2-child">
                                    <h3>上海</h3>
                                    <p>吴语 弄堂 城隍庙</p>
                                    </div>
                            </div>
                            </Link>
                            <Link to=""> 
                            <div className="city-img1"><img src={require("../img/index10.jpg")}/>
                                <div className="img2-child">
                                    <h3>青岛</h3>
                                    <p>啤酒享别样生活</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to=""> 
                            <div className="city-img3"><img src={require("../img/index12.jpg")}/>
                                <div className="img2-child">
                                    <h3>北戴河</h3>
                                    <p>新石器时代的繁衍</p>
                                    </div>
        
                            </div>
                            </Link>
                            <Link to=""> 
                            <div className="city-img1"><img src={require("../img/index13.jpg")}/>
                                <div className="img2-child">
                                    <h3>大连</h3>
                                    <p>酣梦醒游老虎滩</p>
                                    </div>
                            </div>
                            </Link>
                            <Link to=""> 
                            <div className="city-img1"><img src={require("../img/index9.jpg")}/>
                                <div className="img2-child">
                                    <h3>成都</h3>
                                    <p>宽窄巷子慢生活</p>
                                </div>
                            
                            </div>
                            </Link>
                            <Link to=""> 
                            <div className="city-img1"><img src={require("../img/index8.jpg")}/>
                                <div className="img2-child">
                                    <h3>杭州</h3>
                                    <p>断桥边的千年之恋</p>
                                </div>
                            
                            </div>
                            </Link>
                        </div>
                       
                    </div>
               </div>
            <div className="muniaobg">
                <h2>为什么选择木鸟订房？</h2>
                <ul className="question">
                    <li><img src={require("../img/index35.png")}/>
                        <h3>房源100%实地验证</h3>
                    </li>
                    <li><img src={require("../img/index36.png")}/>
                        <h3>付款到木鸟 资金有保障</h3>
                    
                    </li>
                    <li><img src={require("../img/index37.png")}/>
                        <h3>保障人身安全</h3>
                    </li>
                    <li><img src={require("../img/index38.png")}/>
                        <h3>地主之宜 出行无忧</h3>
                    </li>

                </ul>
                
            </div>
            <div className="city-box1">
                    <div className="city-title1">
                            <div className="title-top1">
                            <h2>一处居所 一处情怀</h2>
                            <span>木鸟特色</span>
                            <button>探索更多></button>
                    </div>
    
                       
                       
                        <div className="city-img1">
                        <Link to=""> 
                            <div className="city-img11"><img src={require("../img/index21.jpg")}/>
                                <div className="img2-child1">
                                <h3>复式</h3>
                                <p>小资情调的感同身受</p>
                                </div>
                            </div>
                        </Link>
                        <Link to=""> 
                            <div className="city-img11"><img src={require("../img/index15.jpg")}/>
                                <div className="img2-child1">
                                    <h3>别墅</h3>
                                    <p>公司开会,开party,租豪华大别墅</p>
                                    </div>
                            </div>
                            </Link>
                            <Link to=""> 
                            <div className="city-img11"><img src={require("../img/index16.jpg")}/>
                                <div className="img2-child1">
                                    <h3>主题特色</h3>
                                    <p>爱TA就让TA的梦成现实</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to=""> 
                            <div className="city-img11"><img src={require("../img/index17.jpg")}/>
                                <div className="img2-child1">
                                    <h3>海景房</h3>
                                    <p>听海的声音,就在窗外</p>
                                    </div>
        
                            </div>
                            </Link>
                            <Link to=""> 
                            <div className="city-img11"><img src={require("../img/index18.jpg")}/>
                                <div className="img2-child1">
                                    <h3>古镇客栈</h3>
                                    <p>千年古镇，看岁月更迭，听年代扭转</p>
                                    </div>
                            </div>
                            </Link>
                            <Link to=""> 
                            <div className="city-img11"><img src={require("../img/index19.jpg")}/>
                                <div className="img2-child1">
                                    <h3>木屋</h3>
                                    <p>感受最真实大自然，从木屋开始</p>
                                </div>
                            
                            </div>
                            </Link>
                            <Link to=""> 
                            <div className="city-img11"><img src={require("../img/index20.jpg")}/>
                                <div className="img2-child1">
                                    <h3>四合院</h3>
                                    <p>感受最老北京的深闺大院,品街头巷尾的家长家短</p>
                                </div>
                            </div>
                            </Link>
                            <Link to=""> 
                            <div className="city-img11"><img src={require("../img/index22.jpg")}/>
                                <div className="img2-child1">
                                    <h3>窑洞</h3>
                                    <p>西北黄土高原的别样风情</p>
                                </div>
                            </div>
                            </Link>
                            <Link to=""> 
                            <div className="city-img11"><img src={require("../img/index56.jpg")}/>
                                <div className="img2-child1">
                                    <h3>情侣房</h3>
                                    <p>蜜月,情侣不一样的浪漫</p>
                                </div>
                            </div>
                            </Link>
                        </div>
                        
                    </div>
               </div>
               <div className="muniaogs">
                    <div className="gstop">
                        <h2>出门在外的一千零一夜</h2>
                        <span>木鸟故事</span>
                        <button>探索更多></button>
                    </div>
                    <div className="gsdetail">
                    <Carousel effect='fade'>
                        <div><img src={require('../img/gs1.jpg')}/><div className="wenzhang"><h3>三亚遇到黑店怎么办</h3><p>遍布在三亚的东北人已经成了一种独特的现象。而且做为一个东北人来讲，我们是打心眼里喜欢那个温暖的城市，但好像网络上对在三亚的东北人评价上并不友好，而且觉得三亚人和东北人的关系也是水火不容，但听我讲完这个自己亲身经历的故事，你就不会这么想了。我家一共四口人，为了供我和姐姐上学，老爸老妈辛苦了大半辈子，而且在冰天雪地的东北，落下了风湿的病根，每年冬天都忍受病痛的折磨，我们看在眼里，除了心疼也没有别的办法…</p>
                        <Link to="">[查看详情]</Link>
                        </div></div>
                        <div><img src={require('../img/gs2.jpg')}/><div className="wenzhang"><h3>东北访客遇到上海房东</h3><p>东北人脾气火爆是出了名的，以至于谁都听过“你瞅啥”“瞅你咋地”的故事。上海人的精明也是出了名的，《我的前半生》里马伊琍的妈妈就是一个典型的上海妇人形象。当狂放不羁风风火火的东北人去到上海，碰到一个生性谨慎事事周密的上海人，又会发生什么样的故事呢？2017年最后一个小长假，家在长春的我跟两个闺蜜准备去上海跨年，那里是我们三个在北国冷酷的雪乡里一直葆留有的浪漫想象。我们三个都是土生土长的东北妞，但相比…</p>
                        <Link to="">[查看详情]</Link>
                        </div></div>
                        <div><img src={require('../img/gs1.jpg')}/><div className="wenzhang"><h3>关于家的一百个梦想</h3><p>她叫钟小喵，从名字就知道她是个爱猫之人，这不家里就养了两只可爱猫咪，分别取名：樱桃和丸子。都说爱猫的人，拥有一颗柔软又善良的内心，她也不例外。博物馆控她是一个喜欢旅游的人，喜欢住民宿。每到一个地方，她最大的爱好就是去当地的博物馆逛一逛。在她看来，博物馆才是一个城市的灵魂所在，虽然爱逛，但一直也只是逛逛而已。直到几年前的一次湖北博物馆之行，开启了她新世界的大门。当时在博物馆遇到一个志愿者，讲解曾侯乙…</p>
                        <Link to="">[查看详情]</Link>
                        </div></div>
                        <div><img src={require('../img/gs2.jpg')}/><div className="wenzhang"><h3>中国的巴厘岛-花鸟岛</h3><p>茫茫东海上，有一座远离大陆的静谧小岛。靠近公海，海水蔚蓝，游客甚少，岛民也不过几百人有人说这里是“中国的巴厘岛”，也有人说是“东方的圣托里尼”，蓝白色的房屋成群，让人仿佛置身爱琴海畔的圣托里尼。想去一个小岛吹吹海风，徒步去看沿路的风景，走不动了，便在路边坐下来，满眼都是安静的风景。于是，想起了这个并不是出名的小岛。前两年枸杞岛大热，韩寒一部《后会无期》捧红了东极岛，但是东极岛以东，还有一个清新的小…</p>
                        <Link to="">[查看详情]</Link>
                        </div></div>
                        <div><img src={require('../img/gs1.jpg')}/><div className="wenzhang"><h3>去青岛寻找大海的感觉</h3><p>七月，对于青岛来说，是个清爽的季节。很多人在夏天向往海边，不止是对大海的无限喜爱，还有这座城市带给人们的清凉。有人说北方的海属青岛的最值得去，去了那里，才能明白什么是“夏是青岛的翻滚海浪，啤酒蛤蜊”。和老公一起带着爸妈来了一趟三日游之旅，虽然我们平时旅游不多，但还是坚持自由行，没有去报团。在这里年代，国内游还要报团好像不是年轻人的做法呢。临行前一周，在木鸟短租上就定好了青岛当地的民宿，因为带着爸妈…</p>
                        <Link to="">[查看详情]</Link>
                        </div></div>
                    </Carousel>
                    
                    </div>
              </div>
              {/* 倒数第二部分 */}
              <div className="bottom">
                   <div className="bt-section">
                        <div className="section-left">
                        <div className="left-nav">
                               <div className="nav-top"></div>
                               <h3>旅游资讯</h3>
                               <div className="gengduo">
                                <Link to="">更多的旅游质询>></Link>
                                </div>
                            </div>
                            <div className="section-bt">
                                <div className="bt-img">
                                    <img src={require('../img/index24.jpg')}/>
                                    <img src={require('../img/bt1.jpg')}/>
                                    <img src={require('../img/bt2.jpg')}/>
                                    <img src={require('../img/bt4.jpg')}/>
                                    <img src={require('../img/index24.jpg')}/>
                                </div>
                                <div className="bt-nav">
                                    <ul className="bt-anv">
                                        <li>神笔山旅游</li>
                                        <li>阳光海陵岛旅游攻略</li>
                                        <li>苏州周庄古镇旅游</li>
                                        <li>深圳杨梅坑旅游攻略</li>
                                        <li>金佛山旅游</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="section-right">
                        <div className="left-nav">
                               <div className="nav-top"></div>
                               <h3>更多房源</h3>
                               <div className="gengduo">
                                <ul className="right-nav">
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                </ul>
                                </div>
                            </div>
                            <ul className="fy">
                               <li>
                                   <div className="fy1">
                                    <Link to="">
                                        <img src={require('../img/fangyuan1.jpg')}/>
                                        <div className="fy1-1">
                                            <p>体验品质杭州居民生活近西湖景区套间...</p>
                                        </div>
                                        <div className="fy1-2">
                                        <span className="area">杭州一下城区</span>
                                        <span className="price">￥498/晚</span>
                                        </div>
                                        
                                    </Link>
                                    </div>
                                    <div className="fy2">
                                    <Link to="">
                                        <img src={require('../img/fangyuan3.jpg')}/>
                                        <div className="fy1-1">
                                            <p>怡-XD1Z-大望路地铁【近建外s...</p>
                                        </div>
                                        <div className="fy1-2">
                                        <span className="area">北京-朝阳区</span>
                                        <span className="price">￥556/晚</span>
                                        </div>
                                        
                                    </Link>
                                    </div>
                               
                               </li>
                               <li>
                               <div className="fy1">
                                    <Link to="">
                                        <img src={require('../img/fangyuan2.jpg')}/>
                                        <div className="fy1-1">
                                            <p>体验品质杭州居民生活近西湖景区套间...</p>
                                        </div>
                                        <div className="fy1-2">
                                        <span className="area">杭州一下城区</span>
                                        <span className="price">￥498/晚</span>
                                        </div>
                                        
                                    </Link>
                                    </div>
                                    <div className="fy2">
                                    <Link to="">
                                        <img src={require('../img/fangyuan4.jpg')}/>
                                        <div className="fy1-1">
                                            <p>怡-XD1Z-大望路地铁【近建外s...</p>
                                        </div>
                                        <div className="fy1-2">
                                        <span className="area">北京-朝阳区</span>
                                        <span className="price">￥556/晚</span>
                                        </div>
                                        
                                    </Link>
                                    </div>
                               </li>
                               <li>
                               <div className="fy1">
                                    <Link to="">
                                        <img src={require('../img/fangyuan5.jpg')}/>
                                        <div className="fy1-1">
                                            <p>体验品质杭州居民生活近西湖景区套间...</p>
                                        </div>
                                        <div className="fy1-2">
                                        <span className="area">杭州一下城区</span>
                                        <span className="price">￥498/晚</span>
                                        </div>
                                        
                                    </Link>
                                    </div>
                                    <div className="fy2">
                                    <Link to="">
                                        <img src={require('../img/fangyuan6.jpg')}/>
                                        <div className="fy1-1">
                                            <p>怡-XD1Z-大望路地铁【近建外s...</p>
                                        </div>
                                        <div className="fy1-2">
                                        <span className="area">北京-朝阳区</span>
                                        <span className="price">￥556/晚</span>
                                        </div>
                                        
                                    </Link>
                                    </div>
                               </li>
                            </ul>
                        </div>
                   </div> 
              </div>
              <div id="spli">
				          <ul>
				              <li id="pas1"><img src={require("../spimg/spin.png")} />
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
				         <img src={require("../spimg/side2.png")} />
				         <div id="side-y">
				          <div id="side-y1">
				          <img src={require("../spimg/side.png")} />
				          </div>
				          <div id="side-y2">
				                <h4>扫描下载APP</h4>
				                <a>IOS下载</a><a>Android下载</a>
				          </div>
				         </div>
				         <span id="close-right"><img src={require("../spimg/close_down.png")} />
				         </span>
				         </div>
				     </div>
				     <div id="left-down">
				          <img src={require("../spimg/left_down.png")} /> 
				     </div>
        </div>  
     
</div>
        );
    }
}

export default Index;