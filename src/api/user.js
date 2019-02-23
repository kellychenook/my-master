// import axios from './index'
import axios from 'axios'
export const getUserInfo=({userId}) =>{
    return axios.request({
        url:'/getUserInfo',
        method:'post',
        data:{
            userId:userId
        }
    })
}