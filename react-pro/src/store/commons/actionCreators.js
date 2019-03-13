import {CHECK_USER_INFO} from "./consts"
export default{
    login({username,password,success,fail}){
        //因为已经安装了中间键 并引入啦  所以就可以进行异步请求
        return dispatch=>{
            // console.log(username,password)
            setTimeout(()=>{
               if(username === "123" && password ==="456"){
                dispatch({type:CHECK_USER_INFO,userInfo:{username:"二狗"}})
               success && success("登陆成功")
                return false;
               }
               fail && fail("登录失败");
            },1000)
        }
    }
}