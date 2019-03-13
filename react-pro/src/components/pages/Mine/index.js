import React,{Component} from "react"

import "./index.scss"

class Mine extends Component{
    /* componentWillReceiveProps(props,sate){
        console.log("mine组件的componentWillReceiveProps",props.location.hash,sate)
    } */
    render(){
        // console.log("mine里的一句话",this)

        return(
            <div> 
                Mine公共组件 
            </div>
        )
    }
}

export default Mine