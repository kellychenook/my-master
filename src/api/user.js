// import axios from './index'
import axios from 'axios'
export const getUserInfo=({userId}) =>{
    return axios.request({
        url:'/getUserInfo',
        method:'post',
        data:{
            userId
        }
    })
}

export const login=({userName,password})=>{
    return axios.request({
        url:'/index/login',
        method:'post',
        data:{
            userName,
            password,
        }
    })
}

export const authorization=()=>{
    return axios.request({
        url:'/users/authorization',
        method:'get'
    })
}