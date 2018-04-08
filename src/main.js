// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import Vuex from 'vuex'
import echatrs from 'echarts'
import axios from 'axios'
// require('../node_modules/vux/src/styles/reset.less');

Vue.use(Vuex)
Vue.use(Mint)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
