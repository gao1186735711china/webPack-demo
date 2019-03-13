import {createStore, applyMiddleware} from "redux"

//引入导出的reducer
import reducer from "./reducer"
//引入中间件
import thunk from "redux-thunk"

const store = createStore(reducer,applyMiddleware(thunk)) //把reducer放进去  引入redux中间件 增强了dispatch派发功能

export default store;