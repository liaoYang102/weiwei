import o_success from '@/views/shop/o_success'
import t_success from '@/views/shop/t_success'
import my_order from '@/views/shop/my_order'
import shop from '@/views/shop/index'
import shop_cart from '@/views/shop/shop_cart'
import confirm from '@/views/shop/confirm'
import logistics from '@/views/shop/logistics'
import refund from '@/views/shop/refund'
import shop_product from '@/views/shop/product'
import all_shops from '@/views/shop/all_shops'
import order_details from '@/views/shop/order_details'
import theme_goods from '@/views/shop/theme_goods'
import shop_details from '@/views/shop/shop_details'
import write_comments from '@/views/shop/write_comments'
import refund_details from '@/views/shop/refund_details'
import multi_user_mall from '@/views/multi_user_mall/index'

const shopModule = [
	// 商城模块
	{
	  path: '/shop/o_success',//
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
	},
	{
	  path: '/shop/refund',
	  name:'refund',
	  component: refund
	},
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
];

export default shopModule