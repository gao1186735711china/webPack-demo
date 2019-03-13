import React,{Component} from "react"//引入组件

import "./index.scss"

import {GroupCommons}  from "../../../../modules/group"
class Login extends Component{  //注册组件
    constructor(props){
        super(props)
        this.login = this.login.bind(this)
    }
    login(){
        //执行登陆把username变成用户信息  一旦要更改用户信息就派发action  找actionCreaors 文件进行编辑
        this.props.login({
            username:"123",
            password:"456",
            success:data=>{ //回调函数
                // alert(data)  
                this.props.history.replace("/mine/user")

            },
            fail:data=>{
                alert(data)
            }
        }); //找不到this的原因是没有绑定this  用constructor设置 并用bind方法传入this
        

    }
    render(){
        console.log("8888",this.props)
        return(
            <div>
                 <button onClick={this.login} >Login公共组件</button>
                 
            </div>
        )
    }
}
export default GroupCommons(Login)