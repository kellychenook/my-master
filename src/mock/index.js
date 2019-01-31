import Mock from 'mockjs'
import {getUserInfo} from './response/user'

Mock.mock('/getUserInfo',getUserInfo)//当拦截到网址下的请求，调用后一个getUserInfo方法；

export default Mock
