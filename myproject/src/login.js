import React, { Component } from 'react';
import './css/register.css'
import $ from 'jquery';
import Store from './Store';
import Action from './Actions'
class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            pass:'',
           
        }
    }
    tap(){
        this.setState({username:this.refs.iphone.value})
    }
    tap1(){
        this.setState({pass:this.refs.pass.value})
    }
    componentDidMount(){
      var _this=this
       
        $('.btn').click(function(){
            var reg=11&& /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
            if(!reg.test(_this.state.username)){
                alert('请输入正确手机号码')
            }
            else{
                $.ajax({
                    type:"POST",
                    header:{
                        'Content-Type':'application/x-www-form-urlenc'
                    },
                    url:"http://h6.duchengjiu.top/shop/api_user.php",
                    data:{status:'login',username:_this.state.username,password:_this.state.pass},
                    success:function(data){
                        console.log(data);
                        if(data.code==0){
                            alert('登录成功');
                            _this.props.history.push('/index');
                            Store.dispatch(Action({user:_this.state.username}))
                        }
                        if(data.code==2003){
                            alert('用户名不存在')
                        }else{
                            alert('请输入正确密码')
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
                            <div className="zclx zlogin">
                               用户登录
                            </div>
                            <div className="ke">
                            <div className="iphone">
                                手机号码：
                                <input type="text" placeholder="请输入你的手机号码" ref="iphone"onChange={this.tap.bind(this)}/>
                            </div>
                           
                            <div className="pass">
                                登录密码：
                                <input type="text" placeholder="请输入你的登录密码" ref="pass" onChange={this.tap1.bind(this)}/>
                            </div>
                            </div>
                            <div className="tiaokuan">
                            <input type="radio"/>我已同意<span>《服务协议》</span>和<span>《隐私条款》</span>
                            </div>
                            <button className="btn">登录</button>
                        </div>
                    </div>
                   
              </div>
              <hr/>
            </div>
        );
    }
}

export default Login;