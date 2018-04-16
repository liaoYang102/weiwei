import setting from '@/views/member/setting/index'
import o_success from '@/views/shop/o_success'
import my_order from '@/views/shop/my_order'
import shop from '@/views/shop/index'

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
    }
]

export default liaoy