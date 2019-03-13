 // https://api.bilibili.com/x/web-interface/ranking/region?rid=39&day=7
 import axios from "axios"
 import qs from "querystring"

 export default ({url,data})=>{
     return axios.post(url,qs.stringify(data))/* .then(response=>{
     console.log(response)
 }).catch(err => {
     console.log("请求失败",err)
 }) */
 }
 