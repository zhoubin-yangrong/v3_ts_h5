import {post,get,put,del} from "./server"
export const loginApi=(data:any)=>{
    return put({
        url:"/user/login",
        data
    })
}
export const registApi=(data:any)=>{
    return put({
        url:"/user/register",
        data
    })
}

export const getIndexPageDataApi=(data:any)=>{
    return get({
        url:"/goods/list",
        data
    })
} 

export const getGoodsListApi=(data:any)=>{
    return get({
        url:"/goods/list",
        data
    })
} 
// 获取商品详情

export const getGoodsDetailApi=(data:any)=>{
    return get({
        url:"/goods/detailById",
        data
    })
} 
export const addCarApi=(data:any)=>{
    return put({
        url:"/shopping/cart",
        data
    })
} 
export const getCarApi=(data:any)=>{
    return get({
        url:"/shopping/listByUserId",
        data
    })
} 

export const getAddressApi=(data:any)=>{
    return get({
        url:"/address/listByUserId",
        data
    })
}  
export const addAddressApi=(data:any)=>{
    return put({
        url:"/address/add",
        data
    })
} 
export const addOrderApi=(data:any)=>{
    return put({
        url:"/order/add",
        data
    })
} 
export const orderListApi=(data:any)=>{
    return get({
        url:"/order/list",
        data
    })
} 

