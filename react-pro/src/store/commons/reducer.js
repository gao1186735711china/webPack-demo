//纯函数 固定的输入 必须要又固定的输出 
//内部能不能有不纯的方法 
//不能进行异步请求
import {CHECK_USER_INFO} from "./consts"
import state from "./state"
const reducer = (prevState=state,action)=>{
    let new_state = {...prevState}
    switch (action.type) {
        case CHECK_USER_INFO:
            new_state.userInfo = action.userInfo
            break;
        default:
            break;
    }
    return new_state
}
export default reducer