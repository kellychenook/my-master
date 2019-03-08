import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import Bus from './lib/bus'
// 注意只需不是生产环境的时候，才引入mock;
if (process.env.NODE_ENV!=='production') require('./mock')

import CountTo from '_c/count-to'

Vue.config.productionTip = false
Vue.prototype.$bus=Bus //注册到根实例中；

new Vue({
  router,
  store,
  render:h=>h(App)
  //返回的是虚拟节点
  // render:h=>h(CountTo,{
  //   'class':{
  //     // 自定义样式类名，clas需要用,字符串形式,数组形式，数组表达式,对象，对象表达式
  //   },
  //   style:{},
  //   attrs:{},
  //   props:{
  //     endVal:100
  //   },
  //   domProps:{
  //     // innerHTML:''
  //   },
  //   nativeOn:{
  //     // 自定义绑定事件
  //     'click':()=>{
  //       console.log('click');
  //     }
  //   },
  //   directives:[
  //     // 自定义数组指令
  //   ],
  //   // 自定义插槽，默认名称为slot,可自定义名称
  //   slot:'',
  //   scopedSlots:{},
  //   key:'',
  //   ref:'',
  // })
  // render: h => h('div',[
  //   h('h1','111'),
  //   h('h2','222'),
  //   h('h3','333'),
  // ])
}).$mount('#app')
