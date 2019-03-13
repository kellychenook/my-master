import {login,authorization} from '@/api/user';
import {setToken} from '@/lib/util';
import { resolve, reject } from 'q';
const state = {
  userName:'kelly'
}
const getters = {
  userNameFirstLetter:(state)=>{
    return state.userName.substr(0,1);//返回username的第一个字母
  }
}
const mutations = {
  SET_USER_NAME(state,params){
    state.userName=params.userName;
  }
}
const actions = {
  // updateUserName({commit,state,rootState,dispatch}){
  //   // rootState.appName;
  //   dispatch('demo','');
  // },
  // demo (){
  //   // 
  // }
  login({commit},{userName,password}){
    return new Promise((resolve,reject)=>{
      login({userName,password}).then(res=>{
        // console.log(res.data);
        let resData=res.data;
        if(resData.code==200 && resData.data.token){
          setToken(resData.data.token);
          resolve();
        }else{
          reject(new Error('错误'))
        }
      }).catch(error=>{
        reject(error);
      })
    })
  },
  authorization({commit},token){
    return new Promise((resolve,reject)=>{
      authorization().then(res=>{
        if (parseInt(res.code) === 401) {
          reject(new Error('token error'))
        }else{
          // 每次路由跳转都重新获取新的token,替换旧的token；
          setToken(res.data.token);
          resolve()
        }
      }).catch(error => {
        reject(error);
      })
    })
  },

  logout(){
    setToken('')
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
