
import draw from '@/views/draw/index'
import review from '@/views/draw/review'
import luckyrank from '@/views/draw/luckyrank'
import awards from '@/views/draw/awards'
import record from '@/views/draw/record'
import pastevents from '@/views/draw/pastevents'
import draw_details from '@/views/draw/draw_details'

const drawModule = [
	{
	  path: '/draw',//抽奖系统首页
	  name:'draw',
	  component: resolve => require(['@/views/draw/index'], resolve),
	  meta: {
			title:'抽奖系统首页'
		}
	},
	{
	  path: '/draw/index',//抽奖系统首页
	  name:'draw',
	  component: resolve => require(['@/views/draw/index'], resolve),
	  meta: {
			title:'抽奖系统首页'
		}
	},
	{
		path: '/draw/review', //幸运大抽奖
		name: 'review',
		component: resolve => require(['@/views/draw/review'], resolve),
		meta: {
			title:'幸运大抽奖'
		}
	},
	{
		path: '/draw/luckyrank',//幸运排行
		name: 'luckyrank',
		component: resolve => require(['@/views/draw/luckyrank'], resolve),
		meta: {
			title:'幸运排行'
		}
	},
	{
		path: '/draw/awards',//我要领奖
		name: 'awards',
		component: resolve => require(['@/views/draw/awards'], resolve),
		meta: {
			title:'我要领奖'
		}
	},
	{
		path: '/draw/record',//中奖记录
		name: 'record',
		component: resolve => require(['@/views/draw/record'], resolve),
		meta: {
			title:'中奖记录'
		}
	},
	{
		path: '/draw/pastevents',//往期回顾
		name: 'pastevents',
		component: resolve => require(['@/views/draw/pastevents'], resolve),
		meta: {
			title:'往期回顾'
		}
	},
	{
		path: '/draw/details',//抽奖详情
		name: 'details',
		component: resolve => require(['@/views/draw/draw_details'], resolve),
		meta: {
			title:'抽奖详情'
		}
	}
]

export default drawModule

