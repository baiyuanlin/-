import React, { Component } from 'react';
import './css/register.css'
import $ from 'jquery';
class Registr extends Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            pass:''
        }
    }
    tap(){
        this.setState({username:this.refs.iphone.value})
    }
    tap1(){
        this.setState({pass:this.refs.pass.value})
    }

    componentDidMount(){
       console.log(this.state)
      var _this=this
       
        $('.btn').click(function(){
            var reg=11&& /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
            if(!reg.test(_this.state.username)){
                alert('请输入正确手机号码')
            }
            else{
                $.ajax({
                    type:"post",
                    header:{
                        'Content-Type':'application/x-www-form-urlenc'
                    },
                    url:"http://h6.duchengjiu.top/shop/api_user.php",
                    data:{status:'register',username:_this.state.username,password:_this.state.pass},
                    success:function(data){
                        if(data==0){
                            alert('注册成功');
                        }
                        if(data==2002){
                            alert('用户名已存在')
                        }
                    }
                })
            }
        })
    }
    render() {
        return (
            <div>
               <div className="register" >
                    <div className="register1">
                        <div className="zhuce">
                            <div className="zclx">
                                注册类型：
                                <input type='radio' name="leixing" className="fangke"/>房客注册
                                <input type="radio" name="leixing" className="fangdong"/>房客注册
                            </div>
                            <div className="ke">
                            <div className="iphone">
                                手机号码：
                                <input type="text" placeholder="请输入你的手机号码" ref="iphone"onChange={this.tap.bind(this)}/>
                            </div>
                            <div className="email">
                               邮箱账号：
                                <input type="email" placeholder="请输入你的邮箱账号" ref="email"/>
                            </div>
                            <div className="xingming">
                                真实姓名：
                                <input type="text" placeholder="请输入你的真实姓名" ref="xingming"/>
                            </div>
                            <div className="pass">
                                登录密码：
                                <input type="text" placeholder="请输入你的登录密码" ref="pass" onChange={this.tap1.bind(this)}/>
                            </div>
                            </div>
                            <div className="tiaokuan">
                            <input type="radio"/>我已同意<span>《服务协议》</span>和<span>《隐私条款》</span>
                            </div>
                            <button className="btn">免费注册</button>
                        </div>
                    </div>
                    <div className="login">
                            已有木鸟账号？请<span>点击直接登录</span>
                    </div>
              </div>
            </div>
        );
    }
}

export default Registr;