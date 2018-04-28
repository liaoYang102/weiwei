
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
	  component: draw
	},
	{
	  path: '/draw/index',//抽奖系统首页
	  name:'draw',
	  component: draw
	},
	{
		path: '/draw/review', //幸运大抽奖
		name: 'review',
		component: review
	},
	{
		path: '/draw/luckyrank',//幸运排行
		name: 'luckyrank',
		component: luckyrank
	},
	{
		path: '/draw/awards',//我要领奖
		name: 'awards',
		component: awards
	},
	{
		path: '/draw/record',//中奖记录
		name: 'record',
		component: record
	},
	{
		path: '/draw/pastevents',//往期回顾
		name: 'pastevents',
		component: pastevents
	},
	{
		path: '/draw/draw_details',//抽奖详情
		name: 'details',
		component: draw_details
	}
]

export default drawModule

