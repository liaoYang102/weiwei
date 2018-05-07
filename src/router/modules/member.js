import index from '@/views/index'
import login from '@/views/user/login'
import reg from '@/views/user/reg'
import change from '@/views/user/change'
import coupon from '@/views/member/coupon/coupon'
import coupondetail from '@/views/member/coupon/detail'
import member from '@/views/member/index'
import newphone from '@/views/member/setting/newphone'
import oldphone from '@/views/member/setting/oldphone'
import sorder from '@/views/sorder/index'
import msg_setting from '@/views/member/message/setting'
import address from '@/views/member/address/index'
import address_edit from '@/views/member/address/edit'
import score from '@/views/member/score/index'
import score_log from '@/views/member/score/log'
import team from '@/views/member/team/index'
import info from '@/views/member/info/index'
import infodata from '@/views/member/info/data'
import changeCode from '@/views/member/setting/changeCode'
import code from '@/views/member/setting/code'
import about from '@/views/member/setting/about'
import real from '@/views/member/setting/real'
import realoading from '@/views/member/setting/realoading'
import resetCode from '@/views/member/setting/resetCode'
import purse from '@/views/member/purse/index'
import qrcode from '@/views/member/purse/qrcode'
import hasqrcode from '@/views/member/purse/hasqrcode'
import banlancelog from '@/views/member/purse/banlancelog'
import banlance from '@/views/member/purse/banlance'
import recharge from '@/views/member/purse/recharge'
import card from '@/views/member/card/index'
import carddetail from '@/views/member/card/detail'
import setting from '@/views/member/setting/index'
import follow from '@/views/member/follow/index'
import earnings from '@/views/member/earnings/index'
import logs from '@/views/member/earnings/logs'
import strategy from '@/views/member/score/strategy'
import scoreDetail from '@/views/member/score/detail'

const memberModule = [{
		path: '/index',
		name: 'index',
		component: index,
		meta: {
			navShow: true,
			navIndex: 0
		}
	},
	{
		path: '/',
		name: 'index',
		component: index,
		meta: {
			navShow: true
		}
	},
	{
		path: '/member/setting/index',
		name: 'setting',
		component: setting
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
	}, {
		path: '/member/coupon/coupon',
		name: 'coupon',
		component: coupon
	}, {
		path: '/member/coupon/detail',
		name: 'coupon',
		component: coupondetail
	},
	{
		path: '/member/index',
		name: 'member',
		component: member,
		meta: {
			navShow: true,
			navIndex: 4
		}
	},
	{
		path: '/sorder/index',
		name: 'sorder',
		component: sorder
	},
	{
		path: '/member/setting/newphone',
		name: 'newphone',
		component: newphone
	},
	{
		path: '/member/setting/oldphone',
		name: 'oldphone',
		component: oldphone
	},
	{
		path: '/member/message/setting',
		name: 'msg_setting',
		component: msg_setting
	},
	{
		path: '/member/address/index',
		name: 'address',
		component: address
	},
	{
		path: '/member/address/edit',
		name: 'address_edit',
		component: address_edit
	},
	{
		path: '/member/score/index',
		name: 'score',
		component: score
	},
	{
		path: '/member/score/log',
		name: 'score_log',
		component: score_log
	},
	{
		path: '/member/team/index',
		name: 'team',
		component: team
	},
	{
		path: '/member/info/index',
		name: 'info',
		component: info
	},{
		path: '/member/info/data',
		name: 'infodata',
		component: infodata
	},
	{
		path: '/member/setting/changeCode',
		name: 'changeCode',
		component: changeCode
	},
	{
		path: '/member/setting/code',
		name: 'code',
		component: code
	},
	{
		path: '/member/setting/resetCode',
		name: 'resetCode',
		component: resetCode
	},
	{
		path: '/member/setting/about',
		name: 'about',
		component: about
	}, {
		path: '/member/setting/real',
		name: 'real',
		component: real
	}, {
		path: '/member/setting/realoading',
		name: 'realoading',
		component: realoading
	},
	{
		path: '/member/purse/index',
		name: 'purse',
		component: purse
	},
	{
		path: '/member/purse/qrcode',
		name: 'qrcode',
		component: qrcode
	},{
		path: '/member/purse/hasqrcode',
		name: 'hasqrcode',
		component: hasqrcode
	},
	{
		path: '/member/purse/recharge',
		name: 'recharge',
		component: recharge
	},
	{
		path: '/member/card/index',
		name: 'card',
		component: card
	}, {
		path: '/member/card/detail',
		name: 'carddetail',
		component: carddetail
	},
	{
		path: '/member/purse/banlancelog',
		name: 'banlancelog',
		component: banlancelog
	},
	{
		path: '/member/purse/banlance',
		name: 'banlance',
		component: banlance
	},
	{
		path: '/member/follow/index',
		name: 'follow',
		component: follow
	},
	{
		path: '/member/earnings/index',
		name: 'earnings',
		component: earnings
	},
	{
		path: '/member/earnings/logs',
		name: 'logs',
		component: logs
	},
	{
		path: '/member/score/strategy',
		name: 'strategy',
		component: strategy
	},
	{
		path: '/member/score/detail',
		name: 'scoreDetail',
		component: scoreDetail
	}
]

export default memberModule