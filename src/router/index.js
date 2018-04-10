import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import navBar from '@/components/navBar'
import login from '@/views/user/login'
import reg from '@/views/user/reg'
import change from '@/views/user/change'
import coupon from '@/views/user/coupon'
import member from '@/views/member/index'

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
      name: 'reg',
      component: reg
    },
    {
      path: '/user/change',
      name: 'change',
      component: change
    },{
      path: '/user/coupon',
      name: 'coupon',
      component: coupon
    },
    {
      path: '/member/index',
      name: 'member',
      component: member
    }
  ]
})
