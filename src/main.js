import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import Bus from './lib/bus'

Vue.config.productionTip = false
Vue.prototype.$bus=Bus //注册到根实例中；
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
