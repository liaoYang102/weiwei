import Vue from 'vue'
import Router from 'vue-router'
import navBar from '@/components/navBar'
import login from '@/views/user/login'
import reg from '@/views/user/reg'
import change from '@/views/user/change'
import coupon from '@/views/member/coupon/coupon'
import member from '@/views/member/index'
import setting from '@/views/member/setting/index'
import newphone from '@/views/member/setting/newphone'
import oldphone from '@/views/member/setting/oldphone'
import sorder from '@/views/sorder/index'
import msg_setting from '@/views/member/message/setting'
import address from '@/views/member/address/index'
import address_edit from '@/views/member/address/edit'
import score from '@/views/member/score/index'
import score_log from '@/views/member/score/log'
import shop_product from '@/views/shop/product'
import all_shop from '@/views/shop/all_shops'

Vue.use(Router)

export default new Router({
  routes: [
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
      path: '/member/coupon/coupon',
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
    },
    {
      path: '/member/message/setting',
      name:'msg_setting',
      component: msg_setting
    },
    {
      path: '/member/address/index',
      name:'address',
      component: address
    },
    {
      path: '/member/address/edit',
      name:'address_edit',
      component: address_edit
    },
    {
      path: '/member/score/index',
      name:'score',
      component: score
    },
    {
      path: '/member/score/log',
      name:'score_log',
      component: score_log
    },
    {
      path: '/shop/product',
      name:'shop_product',
      component: shop_product
    },
    {
      path: '/shop/all_shops',
      name:'all_shops',
      component: all_shops
    }
  ]
})
