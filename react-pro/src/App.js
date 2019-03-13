import React, { Component } from 'react';

import AppFooter from "./components/commons/AppFooter"
import {
  Home,
  Buycar,
  List,
  Mine,
} from "./components/pages"  

import {Route,Switch,withRouter} from "react-router-dom"


class App extends Component {
 
  componentWillReceiveProps(props){
    // console.log("render属性发生了变化")
    // console.log(props.location.pathname) //可以拿到成为高阶组件后父级传给的propos属性变化
   
  }
    renderRoute(){
      let {navs} = this.props
      return (
        <Switch>
          {navs.map(item=>{
            return (
              <Route key={item.id} path={item.path} component={item.component} exact={item.exact}/>
            )
          })}
        </Switch>
      )
    }
    renderFooter(){
      let {pathname} = this.props.location
      // if(pathname === "/mine") return false
      // let no_footer_path = ['/mine',"/buycar"]; //判断多个是否消失
      let no_footer_path = ['/mine/login']; //判断多个是否消失
      if(no_footer_path.indexOf(pathname)>-1) return false
      return <AppFooter></AppFooter>
    }
  render() {
          // console.log("app里的一句话",this)
    return (
      <div className="App">
        {this.renderRoute()}
        {this.renderFooter()}
      </div>
    );
  }

  
/*   componentDidMount(){
    // 请求数据
    this.$get({url:"/bb/v1/home/page",data:{a:1}}).then(res=>{
      console.log(res)
    })
  } */
}
App.defaultProps ={
  navs:[
    {id:1,path:"/",component:Home,exact:true},
    {id:2,path:"/list",component:List},
    {id:3,path:"/mine",component:Mine,},
    {id:4,path:"/buycar",component:Buycar},

  ]
}
export default withRouter(App);//伪路由组件
