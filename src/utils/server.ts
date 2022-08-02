import axios from "axios"
import {Toast} from "vant"
// 创建请求实例 
interface typeData{
    code:number,
    message:string,
    data?:any
}
const Service = axios.create({
    timeout:8000,
    baseURL:"/api",
    headers:{
        "Content-type":"application/json;charset:utf-8"
    } 
})
// 请求拦截
Service.interceptors.request.use((config)=>{
    // 请求成功发送 
    Toast.loading({
        type:"loading",
        message: '加载中'
      });
    return config
},()=>{

})
// 响应拦截
Service.interceptors.response.use(response=>{
    Toast.clear();
    const data:typeData =response.data
    if(data.code==200){
        return data
    }else{
        Toast(data.message||"响应出错")
        return data
    }
},err=>{
    Toast.clear();

})
interface configType{
    url:string,
    data?:any,
    headers?:any
}
// 暴露请求方法
// post get put delete


export const post=(config:configType)=>{
    return Service({
        ...config,
        method:"post",
        data:config.data
    })
}
export const get=(config:configType)=>{
    return Service({
        ...config,
        method:"get",
        params:config.data
    })
}
 export const put=(config:configType)=>{
     return Service({
         ...config,
         method:"put",
         data:JSON.stringify(config.data)
     })
 }
// 例子:delete请求放式没有data参数传递 url?id=1&type=2
 export const del=(config:configType)=>{
    return Service({
        ...config,
        method:"delete", 
    })
}
 
