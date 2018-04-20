import navBar from '@/components/navBar'
import login from '@/views/user/login'
import reg from '@/views/user/reg'
import change from '@/views/user/change'
import coupon from '@/views/member/coupon/coupon'
import member from '@/views/member/index'
import newphone from '@/views/member/setting/newphone'
import oldphone from '@/views/member/setting/oldphone'
import sorder from '@/views/sorder/index'
import msg_setting from '@/views/member/message/setting'
import address from '@/views/member/address/index'
import address_edit from '@/views/member/address/edit'
import score from '@/views/member/score/index'
import score_log from '@/views/member/score/log'
import shop_product from '@/views/shop/product'
import all_shops from '@/views/shop/all_shops'
import order_details from '@/views/shop/order_details'
import theme_goods from '@/views/shop/theme_goods'
import shop_details from '@/views/shop/shop_details'
import write_comments from '@/views/shop/write_comments'
import refund_details from '@/views/shop/refund_details'
import multi_user_mall from '@/views/multi_user_mall/index'

const anni = [
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



    // 商城模块
    {
      path: '/shop/product',//商品分类
      name:'shop_product',
      component: shop_product
    },
    {
      path: '/shop/all_shops',//所有商品
      name:'all_shops',
      component: all_shops
    },
    {
      path: '/shop/order_details',//订单详情，兑换详情
      name: 'order_details',
      component: order_details
    },
    {
      path: '/shop/theme_goods',//主题商品
      name: 'theme_goods',
      component: theme_goods
    },
    {
      path: '/shop/shop_details',//商城详情
      name: 'shop_details',
      component: shop_details
    },
    {
      path: '/shop/write_comments',//商品评论
      name: 'write_comments',
      component: write_comments
    },
    {
      path: '/shop/refund_details',//退款详情
      name: 'refund_details',
      component: refund_details
    },
    {
      path: '/multi_user_mall',//多用户商城首页
      name: 'multi_user_mall',
      component: multi_user_mall
    }
  ]

export default anni
