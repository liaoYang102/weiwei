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
import search from '@/views/multi_user_mall/search'
import write_logistics from '@/views/shop/write_logistics'
import multi_shop_details from '@/views/multi_user_mall/shop_details'
import summary from '@/views/multi_user_mall/summary'
import store_qrcode from '@/views/multi_user_mall/store_qrcode'

const shopModule = [
	// 商城模块
	{
		path: '/shop/o_success', //支付成功
		name: 'o_success',
		component: o_success,
		meta: {
			title:'支付成功'
		}
	},
	{
		path: '/shop/my_order', //我的订单
		name: 'my_order',
		component: my_order,
		meta: {
			title:'我的订单'
		}
	},
	{
		path: '/shop', //首页
		name: 'shop',
		component: shop,
		meta: {
			navShow: true,
			navIndex:1,
			title:'信用商城'
		}
	},
	{
		path: '/shop/index', //首页
		name: 'shop',
		component: shop,
		meta: {
			navShow: true,
			navIndex:1,
			title:'信用商城'
		}
	},
	{
		path: '/shop/t_success', //交易成功
		name: 't_success',
		component: t_success,
		meta: {
			title:'交易成功'
		}
	},
	{
		path: '/shop/shop_cart', //购物车
		name: 'shop_cart',
		component: shop_cart,
		meta: {
			title:'购物车'
		}
	},
	{
		path: '/shop/confirm', //确认订单
		name: 'confirm',
		component: confirm,
		meta: {
			title:'确认订单'
		}
	},
	{
		path: '/shop/logistics', //物流
		name: 'logistics',
		component: logistics,
		meta: {
			title:'物流动态'
		}
	},
	{
		path: '/shop/refund', //退货
		name: 'refund',
		component: refund,
		meta: {
			title:'申请退货'
		}
	},
	{
		path: '/shop/product', //商品分类
		name: 'shop_product',
		component: shop_product,
		meta: {
			title:'商品分类'
		}
	},
	{
		path: '/shop/all_shops', //所有商品
		name: 'all_shops',
		component: all_shops,
		meta: {
			title:'所有商品'
		}
	},
	{
		path: '/shop/order_details', //订单详情，兑换详情
		name: 'order_details',
		component: order_details,
		meta: {
			title:'订单详情'
		}
	},
	{
		path: '/shop/theme_goods', //主题商品
		name: 'theme_goods',
		component: theme_goods,
		meta: {
			title:'主题商品'
		}
	},
	{
		path: '/shop/shop_details', //商城详情
		name: 'shop_details',
		component: shop_details,
		meta: {
			title:'商城详情'
		}
	},
	{
		path: '/shop/write_comments', //商品评论
		name: 'write_comments',
		component: write_comments,
		meta: {
			title:'商品评论'
		}
	},
	{
		path: '/shop/refund_details', //退款详情
		name: 'refund_details',
		component: refund_details,
		meta: {
			title:'退款详情'
		}
	},
	{
		path: '/multi_user_mall', //多用户商城店铺页
		name: 'multi_user_mall',
		component: multi_user_mall,
		meta: {
			title:'店铺首页'
		}
	},
	{
		path: '/multi_user_mall/search', //多用户商城搜索页
		name: 'search',
		component: search,
		meta: {
			title:'商城搜索'
		}
	},
	{
		path: '/shop/write_logistics', //填写退货物流
		name: 'write_logistics',
		component: write_logistics,
		meta: {
			title:'填写退货物流'
		}
	},
	{
		path: '/multi_user_mall/shop_details',//多用户商城商品详情页
		name: 'multi_shop_details',
		component: multi_shop_details,
		meta: {
			title:'商品详情'
		}
	},
	{
		path: '/multi_user_mall/summary', //多用户商城首页
		name: 'summary',
		component: summary,
		meta: {
			title:'多用户商城首页'
		}
	},
	{
		path: '/multi_user_mall/store_qrcode',//店铺二维码
		name: 'store_qrcode',
		component: store_qrcode,
		meta: {
			title:'店铺二维码'
		}
	}
];

export default shopModule