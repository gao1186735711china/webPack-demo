    //引入了一个从redux里的处理方法 纯函数形式
import {combineReducers} from "redux"
import commons from "./commons/reducer"
const reducer = combineReducers({
    //定义reducer 并写入一个对象 输出出去
    commons
})
export default reducer