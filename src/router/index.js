import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import navBar from '@/components/navBar'
import login from '@/views/user/login'
import reg from '@/views/user/reg'
import change from '@/views/user/change'
import coupon from '@/views/user/coupon'
import forget_pw from '@/views/user/forget_pw'
import member from '@/views/member/index'
import setting from '@/views/member/setting/index'
import newphone from '@/views/member/setting/newphone'
import oldphone from '@/views/member/setting/oldphone'
import sorder from '@/views/sorder/index'

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
    },
    {
      path: '/sorder/index',
      name:'sorder',
      component: sorder
    },
    {
      path: '/user/forget_pw',
      name:'forget_pw',
      component: forget_pw
    },
    {
      path: '/member/setting/index',
      name:'setting',
      component: setting
    },
    {
      path: '/member/setting/newphone',
      name:'newphone',
      component: newphone
    },
    {
      path: '/member/setting/oldphone',
      name:'oldphone',
      component: oldphone
    }
  ]
})
