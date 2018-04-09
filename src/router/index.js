import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import navBar from '@/components/navBar'
import login from '@/views/user/login'
import reg from '@/views/user/reg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/user/login',
      name: 'login',
      component: login
    },
    {
      path: '/user/reg',
      name: 'login',
      component: reg
    }
  ]
})
