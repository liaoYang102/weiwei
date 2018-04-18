import setting from '@/views/member/setting/index'
import o_success from '@/views/shop/o_success'
import t_success from '@/views/shop/t_success'
import my_order from '@/views/shop/my_order'
import shop from '@/views/shop/index'
import shop_cart from '@/views/shop/shop_cart'
import confirm from '@/views/shop/confirm'
import logistics from '@/views/shop/logistics'

const liaoy = [
	{
      path: '/member/setting/index',
      name:'setting',
      component: setting
    },
    {
      path: '/shop/o_success',
      name:'o_success',
      component: o_success
    },
    {
      path: '/shop/my_order',
      name:'my_order',
      component: my_order
    },
    {
      path: '/shop',
      name:'shop',
      component: shop
    },
    {
      path: '/shop/index',
      name:'shop',
      component: shop
    },
    {
      path: '/shop/t_success',
      name:'t_success',
      component: t_success
    },
    {
      path: '/shop/shop_cart',
      name:'shop_cart',
      component: shop_cart
    },
    {
      path: '/shop/confirm',
      name:'confirm',
      component: confirm
    },
    {
      path: '/shop/logistics',
      name:'logistics',
      component: logistics
    }
]

export default liaoy