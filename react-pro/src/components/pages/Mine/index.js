import React,{Component} from "react"

import Login from "./Login"
import User from "./User"
import {Route} from "react-router-dom"
import "./index.scss"

import { GroupCommons } from "../../../modules/group"
class Mine extends Component{
    /* componentWillReceiveProps(props,sate){
        console.log("mine组件的componentWillReceiveProps",props.location.hash,sate)
    } */
    componentDidMount(){
        // console.log(this)
        this.checkUserInfo()
    }
    checkUserInfo(){
        let {userInfo} = this.props;
        if(userInfo){   //如果用户存在 就到我的页面 没有就开始登陆

        }else{
            // this.props.history.replace("/mine/login");
            this.props.history.replace("/mine/login") //replace 的作用就是不会记录修改的路径 用别的方法点击后退会进入“我的”一级路由
        }

    }
    render(){
        //  console.log("mine里的一句话",this.props)

        return(
            <div> 
                Mine公共组件 
                <Route path="/mine/login" component={Login}></Route>
                <Route path="/mine/user" component={User} ></Route>
                {/* <Login></Login> */}
            </div>
        )
    }
}

export default GroupCommons(Mine)