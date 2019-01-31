import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import Bus from './lib/bus'
// 注意只需不是生产环境的时候，才引入mock;
if (process.env.NODE_ENV!=='production') require('./mock')

Vue.config.productionTip = false
Vue.prototype.$bus=Bus //注册到根实例中；
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
