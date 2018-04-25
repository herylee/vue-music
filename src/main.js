import 'babel-polyfill'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'

import fastclick from 'fastclick'
import 'common/stylus/index.styl'

// Vue.config.productionTip = false

fastclick.attach(document.body)
// 移动端所有的点击都不会有100ms的延迟

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router  
})
