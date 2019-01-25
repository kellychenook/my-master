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
}
export default {
  state,
  getters,
  mutations,
  actions
}
