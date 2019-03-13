import React,{Component} from "react"//引入组件
import {GroupCommons} from "../../../../modules/group"
import "./index.scss"
class User extends Component{  //注册组件
    constructor(props){
        super(props)
        this.exit = this.exit.bind(this)
    }
    exit(){

    }
    render(){
        return(
            <div> 
                User公共组件
                <button onClick={this.exit}>退出</button>    
            </div>
        )
    }
}
export default GroupCommons(User)