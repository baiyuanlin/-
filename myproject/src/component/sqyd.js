import React from 'react'

import $ from 'jquery'

class Sqyd extends React.Component{
constructor(props){
super(props)
}

render(){
return(
    <div>
        <div className="sqtop">  </div>
        <div className="xqmain">
            <div className="sqmianleft">
                <div className="sqnav">
                    <div className="order_head_left">
                        <h2>订单申请</h2>
                        <p>提交入住申请
                            <br/>
                        <span>级相关信息</span>
                        </p>
                    </div>
                    <div className="order_head_right">
                        <img src={require("../img/findi.jpg")}/>
                    </div>

                </div>
                <div className="sqddxx">
                    <h3 className="order_class_title">订单信息</h3>
                    <ul className="order_date clear">
                        <li>
                            <span>入住时间</span>
                            <div className="order_date_wrap"></div>
                        </li>
                        <li>
                            <span>退房时间</span>
                            <div className="order_date_wrap"></div>
                        </li>
                        <li>
                            <span>预定房源数</span>
                            <div className="order_date_wrap c_roomnumber">
                            <input id="roomnumber" type="text" value="1套" readonly="readonly"/>
                            </div>
                        </li>
                        <li>
                            <span>入住人数</span>
                            <div className="order_date_wrap c_roomnumber">
                            <input id="rentnumber" type="text" name="rentnumber_a" value="1人" readonly="readonly"/>
                            </div>
                            <div className="person_menu">
                                <a href="javascript:void(0);" data-num="1">1人</a> 
                                <a href="javascript:void(0);" data-num="2">2人</a>
                            </div>
                        </li>
                    </ul>
                </div>
        {/* 入住人信息 */}
                <div className="order_class w_mT28">
                    <h3 className="order_class_title">
                        <span className="insur_t">住宿意外险</span>
                        <span className="name_rz" title="实名认证送住宿意外险"><i></i>实名认证</span>入住人信息
                    </h3>
                    <div className="check_infor">
                        <ul>
                        <li className="check_infor_title clear">
                            <span className="name">真实姓名</span>
                            <span className="person_id">身份证号码</span>
                            <span className="gender">性别</span>
                            <span className="birth">出生日期</span>
                            <span className="insurance">住宿意外险<a title="投保详情" href="/Help/Insurance" target="_blank">保额最高10万</a></span>
                            <span className="operation">操作</span>
                        </li>
                        <li className="add_infor clear">
                        
                        <div className="fullname"><input type="text" name="fullname" onkeyup="rp_background(this);" onpaste="rp_background(this);" maxlength="10" value=""/></div>
                        <div className="idcard"><input type="text" name="idcard" oninput="rp_numx(this);keyup_tr(this);" onpropertychange="rp_numx(this);keyup_tr(this);" onkeyup="rp_numx(this);keyup_tr(this);" onpaste="rp_numx(this);keyup_tr(this);" maxlength="18" value=""/></div>
                        <div className="infor_gender">-</div>
                         <div className="birthday" >-</div> 
                         <div className="insur">免费赠送</div>
                         <div className="delete" onclick="clear_tr(this)">清空</div>
                         
                        </li>
                        </ul>
                        <div className="choice_often">
                            <span className="czrk">常驻人口：</span>
                            <div className="style1">

                            </div>
                        </div>
                    </div>
                    <div></div>
                    <div className="bx_plan">
                    <div className="add_cz">
                        <div className="add_person fr"><a className="add" href="javascript:;">+添加入住人</a></div>
                    </div>
                    <input id="check_insurance" name="check_insurance" type="checkbox" value="1" checked="checked" onclick="checkInsurance();"/>
                    <label for="check_insurance">加入<a href="/Help/Insurance" target="_blank">木鸟短租保险计划</a></label>
                    </div>

                    {/*  */}
                    <div className="order_class w_mT28">
                <h3 className="order_class_title">使用优惠</h3>
                <div className="count_open">
                    <a href="/Help/Center" target="_blank" className="count_h">[如何获得优惠券？]</a>
                    <span><i className="open_icon"></i>可用优惠券</span>
                    <span className="ky_yz"><em className="bonus_num">0</em></span>
                    <em className="count_tip"></em>
                    <a id="a_quxiao" className="qx_coupon"  href="javascript:void(0);" onclick="hideBonus();">取消</a>
                    
                </div>
                <div id="div_youhui" className="discount" >
                    <div className="voucher">
                        
                        <p className="w_color f14">当前没有可用优惠券</p>
                        <ul id="ul_bonuslist" className="voucher_list">

                        </ul>
                    </div>
                    <div className="activation">有优惠券码？<a className="activation_conpon" href="javascript:;">激活优惠券</a></div>
                    <div className="activ_code">请输入优惠码：<div className="code_r"><input type="text" id="bonus_receivedate" name="bonus_receivedate" value=""/><a className="activ" href="javascript:void(0);" onclick="activeBonus()">激活</a></div></div>
                </div>
                
                
               
                <div className="remarks"><textarea cols="10" name="Message" maxlength="200" placeholder="请在这里告诉房东您的特殊需求或疑问。(200字以内)"></textarea></div>
            </div>
                </div>
            {/* 提交 */}
            <div className="submit">
                <a className="sub_order" id="sub_order1" onclick="submit()" href="javascript:void(0);">提交订单</a>
                <div className="payment">
                    <span className="real-payment">实付款：￥
                    <em id="em_bottom_needprice" className="needprice">298.00</em></span><br/>
                    <span className="pay-disicount">优惠金额：￥<em className="has_discount">0.00</em></span>
                </div>
                 <p>当您提交订单时，表示您已经仔细阅读并同意<a className="jy_rule" href="javascript:void(0);">《交易规则》</a></p>
            </div>
            {/*  */}
            </div>
            <div className="sqmianright">
               <img src={require("../img/canvas.jpg")}/>
            </div>
        </div>





    </div>  
)
}
}



export default Sqyd;