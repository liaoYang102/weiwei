import team from '@/views/member/team/index'
import info from '@/views/member/info/index'
import changeCode from '@/views/member/setting/changeCode'
import code from '@/views/member/setting/code'
import resetCode from '@/views/member/setting/resetCode'
import purse from '@/views/member/purse/index'
import qrcode from '@/views/member/purse/qrcode'
import banlancelog from '@/views/member/purse/banlancelog'
import banlance from '@/views/member/purse/banlance'
import recharge from '@/views/member/purse/recharge'
import card from '@/views/member/card/index'

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
	}
]

export default qiang