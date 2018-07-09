
//纯函数


const Reducer=function(state,action){
    if(typeof state =='undefined'){
        return {}
    }
    switch (action.type) {
        case 'USER_NAME':
            return action.text
            break;
        default:
        return state
            break;
    }
}


export default Reducer