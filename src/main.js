// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Mint from 'mint-ui'
import Vuex from 'vuex'
import echatrs from 'echarts'
import axios from 'axios'
import './assets/icons_font/iconfont.css'
import 'mint-ui/lib/style.css'
import './style/global.css'
import './config/wy_rem'
import { Group, DatetimeRange, Cell, Tab, TabItem, CellBox, XHeader, Scroller, LoadMore,TransferDom, Confirm, Popup, Toast, Swiper, InlineXNumber, CheckIcon, CellFormPreview} from 'vux'
import FastClick from 'fastclick'

FastClick.attach(document.body);
Vue.use(Vuex)
Vue.use(Mint)
Vue.directive('transfer-dom', TransferDom)
Vue.component('group', Group)
Vue.component('datetime-range', DatetimeRange)
Vue.component('cell', Cell)
Vue.component('tab', Tab)
Vue.component('tab-item', TabItem)
Vue.component('cell-box', CellBox)
Vue.component('x-header', XHeader)
Vue.component('scroller', Scroller)
Vue.component('load-more', LoadMore)
Vue.component('popup', Popup)
Vue.component('toast', Toast)
Vue.component('confirm', Confirm)
Vue.component('swiper', Swiper)
Vue.component('inline-x-number', InlineXNumber)
Vue.component('check-icon', CheckIcon)
Vue.component('cell-form-preview', CellFormPreview)

Vue.prototype.$http = axios  //定义axios组件用法  this.$http(opt).then(fn)
axios.defaults.baseURL = '/api';
Vue.config.productionTip = false

//引用动画库
import animate from 'animate.css'
Vue.use(animate)

import  { LoadingPlugin } from 'vux'
Vue.use(LoadingPlugin)

//const whiteList = ['/user/login', '/index', '/user/reg','/','/member/index'];// 不重定向白名单
// router.beforeEach((to, from, next) => {
//     if (store.getters.userstate) { // 
//         if (to.path === '/user/login') {
//           next();
//         } 
//         else {
//             //避免F5刷新时，vex数据全无，所以需要重新获取一次数据
//             if(!store.getters.username){ //判断是否有用户信息 把token换成userInfo
//                 console.log('未获取到用户',store.getters.username) 
//                 store.dispatch('setUser').then(res => { 
//                     next();                 
//                 }).catch(err => {
//                     console.log(err);
//                 });
//             }
//         }
//     } else {  
//         if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
//             next()
//         } else {
//             next('/user/login'); // 否则全部重定向到登录页
//         }
//     }   
// });


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
