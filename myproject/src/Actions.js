//动作，用来接收数据定义type，text类型。




const Action=function(text){
    return{
        type:'USER_NAME',
        text:text
    }
};

export default Action

