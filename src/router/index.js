import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import {setTitle,setToken,getToken} from '@/lib/util'
import store from '@/store'

Vue.use(Router)

const router = new Router({
    routes
})

const HAS_LOGINED=true
// 全局前置守卫
router.beforeEach((to,from,next)=>{
    to.meta && setTitle(to.meta.title);
    if(to.name!=='login'){ //如果访问的不是登录页面
        if(HAS_LOGINED) next() //已经登录过了就直接进目标页面
        else next({name:'login'}) //没有登录过就进登录页面
    } else{ //如果访问的是登录页面
        if(HAS_LOGINED) next({name:'home'}) //已经登录了就进首页
        else next() //没有登录就还是登录页面
    }
    // const token=getToken()
    // if(token){
    //     // 判断token是否有效
    //     store.dispatch('authorization',token).then(() => {
    //         if(to.name === 'login') next({name:'home'})
    //         else next()
    //     }).catch(()=>{
    //         setToken('')
    //         next({name:'login'})
    //     })
    // }else{
    //     if(to.name === 'login') next()
    //     else next({name:'login'})
    // }
})
// // 全局解析守卫
// router.beforeResolve((to,from,next)=>{ //导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫被调用
//     next();
// })
// 全局后置钩子
router.afterEach((to,from)=>{ //所有路由跳转结束的时候调用
})


export default router
