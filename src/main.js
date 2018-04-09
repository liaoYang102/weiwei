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
import { Group, DatetimeRange } from 'vux'
import vuexI18n from 'vuex-i18n'

Vue.use(Vuex)
Vue.use(Mint)
Vue.component('group', Group)
Vue.component('datetime-range', DatetimeRange)

Vue.use(vuexI18n)

Vue.config.productionTip = false

const whiteList = ['/login', '/index', '/register','/'];// 不重定向白名单
router.beforeEach((to, from, next) => {

    if (store.getters.userstate) { // 
        if (to.path === '/login') {
          next();
        } 
        else {
            //避免F5刷新时，vex数据全无，所以需要重新获取一次数据
            if(!store.getters.username){ //判断是否有用户信息 把token换成userInfo
                console.log('未获取到用户',store.getters.username) 
                
                store.dispatch('setUser').then(res => { 
                    next(); 
                    
                }).catch(err => {
                    console.log(err);
                });
            }
        }
    } else {  
        if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
            next()
        } else {
            next('/login'); // 否则全部重定向到登录页
        }
    }   
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
