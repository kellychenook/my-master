import axios from 'axios'
import {baseURL} from '@/config'
class HttpRequest {
    constructor (baseUrl = baseURL){ //es6写法
        this.baseUrl=baseUrl;
        this.queue={};//空队列
        // 
    }
    getInsideConfig(){
        const config={
            baseURL:this.baseUrl,
            headers:{
                // 
            }
        }
        return config;
    }
    interceptors(instance){//请求与响应拦截器
        instance.interceptors.request.use(config=>{ //请求拦截器
            // 添加一个全局的loading
        },error=>{
            return Promise.reject(error);
        })
        instance.interceptors.response.use(res=>{ //响应拦截器
            console.log(res);
            return res;
        },error=>{
            return Promise.reject(error);
        })
    }
    request (options){
        const instance=axios.create();
        options=Object.assign(this.getInsideConfig(),options);//将两个对象合并成一个对象；
        this.interceptors(instance);
        return instance(options);
    }
}
export default HttpRequest;