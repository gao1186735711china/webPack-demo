import {connect} from "react-redux" //高阶组件 可以获取数据等
import {bindActionCreators} from "redux" //redux里请求的方法
import actionCreators from "../../store/commons/actionCreators"
export default connect(state=>state.commons,dispatch=>{
    return bindActionCreators(actionCreators,dispatch);
})