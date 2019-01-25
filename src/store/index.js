import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import user from './module/user'
import saveInLocal from './plugin/saveInLocal'

Vue.use(Vuex) //Vuex作为Vue的插件，需要使用use;

export default new Vuex.Store({//Vuex.Store创建实例；
  // strict:true,//严格模式 false的时候，可以使用赋值的方式，但是true的时候，使用赋值方式是错误的；
  strict:process.env.NODE_ENV === 'development',//开发模式下
  state,
  getters,
  mutations,
  actions,
  modules: {
    user
  },
  plugins:[saveInLocal],
})
