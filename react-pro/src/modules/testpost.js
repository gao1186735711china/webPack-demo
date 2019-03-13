// // https://api.bilibili.com/x/web-interface/ranking/region?rid=39&day=7

// import axios from "axios"
// import qs from "querystring"
// let data   ={
//         "client_id": "180100031051",
//         "channel_id": "0",
//         "webp": "1",
//         "page_type": "recommend",
//         "recommend_tag": "XMGUEST-27A18300-4466-11E9-8317-53D08021BA59",
// };
// axios.post("/bb/v1/home/page",qs.stringify(data)).then(response=>{
//     console.log(response)
// }).catch(err => {
//     console.log("请求失败",err)
// })