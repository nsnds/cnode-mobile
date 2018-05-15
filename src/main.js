import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import vueInfiniteScroll from 'vue-infinite-scroll'

import 'reset-css/reset.css'
import './common/css/index.css'

Fastclick.attach(document.body)
Vue.use(VueLazyload, {
  loading: require('./common/image/vue-logo.png')
})
Vue.use(vueInfiniteScroll)
Vue.filter('time', val => {
  if (typeof val !== 'string') return ''
  return val.split('.')[0].split('T').join(' ')
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
