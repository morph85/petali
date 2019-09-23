import 'es6-promise/auto'
import 'babel-polyfill'
/* eslint-disable import/first */

import Vue from 'vue'

import axios from 'axios/dist/axios'
Vue.prototype.$ajax = axios

import lodash from 'lodash'
Vue.use(lodash)
Object.defineProperty(Vue.prototype, '$lodash', { value: lodash })

import VueCookie from 'vue-cookie'
Vue.use(VueCookie)

import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 500,
  easing: 'ease',
  offset: 0,
  cancelable: true,
  onDone: false,
  onCancel: false
})

import InfiniteScroll from 'vue-infinite-scroll'
Vue.use(InfiniteScroll)

import VmBackTop from 'vue-multiple-back-top'
Vue.component(VmBackTop.name, VmBackTop)

import VueImg from 'v-img'
Vue.use(VueImg)

// // Buefy Components UI
// import Buefy from 'buefy'
// Vue.use(Buefy)
// import 'buefy/lib/buefy.css'

import AOS from 'aos'
Vue.use(AOS)
import 'aos/dist/aos.css'

// // Material Design Icons
// import 'material-design-icons/iconfont/material-icons.css'

// load Bulma, override Bulma
// override font-awesome & common styles UI
import '@/styles/app.scss'

import App from './App.vue'
import router from './router'

// scroll to top for each route change
router.beforeEach(function(to, from, next) {
  window.scrollTo(0, 0)
  next()
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
