import team from '@/views/member/team/index'
import info from '@/views/member/info/index'
import changeCode from '@/views/member/setting/changeCode'
import code from '@/views/member/setting/code'
import about from '@/views/member/setting/about'
import real from '@/views/member/setting/real'
import resetCode from '@/views/member/setting/resetCode'
import purse from '@/views/member/purse/index'
import qrcode from '@/views/member/purse/qrcode'
import banlancelog from '@/views/member/purse/banlancelog'
import banlance from '@/views/member/purse/banlance'
import recharge from '@/views/member/purse/recharge'
import card from '@/views/member/card/index'
import carddetail from '@/views/member/card/detail'
import follow from '@/views/member/follow/index'
import earnings from '@/views/member/earnings/index'
import logs from '@/views/member/earnings/logs'
import strategy from '@/views/member/score/strategy'
import scoreDetail from '@/views/member/score/detail'

const qiang = [{
		path: '/member/team/index',
		name: 'team',
		component: team
	},
	{
		path: '/member/info/index',
		name: 'info',
		component: info
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
	},{
		path: '/member/setting/real',
		name: 'real',
		component: real
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
	},{
		path: '/member/card/detail',
		name: 'carddetail',
		component: carddetail
	},
	{
		path: '/member/follow/index',
		name: 'follow',
		component: follow
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

export default qiang