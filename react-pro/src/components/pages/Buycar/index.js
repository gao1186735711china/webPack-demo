import React,{Component} from "react"//引入组件

import "./index.scss"

const HOC = (Copm)=>{
    return class aabb extends Component{
        handlerClick(){
            console.log("aaaaa")
        }
        render(){
            return <Copm handlerClick={this.handlerClick} ></Copm>
        }
    }
}
class A extends Component{  //注册组件
  
    render(){
        return(
            <div> 
                <button onClick={this.props.handlerClick} >A公共组件</button>
            </div>
        )
    }
}
class B extends Component{  //注册组件
    
    render(){
        return(
            <div> 
                <button onClick={this.props.handlerClick} >B公共组件</button>
            </div>
        )
    }
}
var HA = HOC(A)
var HB = HOC(B)
class Buycar extends Component{  //注册组件
    render(){
        return(
            <div> 
                Buycar公共组件
                <HA/>
                <HB/>
            </div>
        )
    }
}


export default Buycar