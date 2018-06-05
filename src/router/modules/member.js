import index from '@/views/index'
import login from '@/views/user/login'
import reg from '@/views/user/reg'
import changelist from '@/views/user/changelist'
import changeLoginPassword from '@/views/user/changeLoginPassword'
import changeLoginPassword2 from '@/views/user/changeLoginPassword2'
import changePaymentPassword from '@/views/user/changePaymentPassword'
import changePaymentPassword2 from '@/views/user/changePaymentPassword2'
import couponindex from '@/views/member/coupon/index'
import coupondetail from '@/views/member/coupon/detail'
import member from '@/views/member/index'
import msg_setting from '@/views/member/message/setting'
import address from '@/views/member/address/index'
import address_edit from '@/views/member/address/edit'
import score from '@/views/member/score/index'
import score_log from '@/views/member/score/log'
import team from '@/views/member/team/index'
import info from '@/views/member/info/index'
import infodata from '@/views/member/info/data'
import changeCode from '@/views/member/setting/changeCode'
import nickname from '@/views/member/setting/nickname'
import about from '@/views/member/setting/about'
import real from '@/views/member/setting/real'
import realoading from '@/views/member/setting/realoading'
import resetCode from '@/views/member/setting/resetCode'
import purseindex from '@/views/member/purse/index'
import pursewallet from '@/views/member/purse/wallet'
import qrcode from '@/views/member/purse/qrcode'
import hasqrcode from '@/views/member/purse/hasqrcode'
import banlancelog from '@/views/member/purse/banlancelog'
import banlance from '@/views/member/purse/banlance'
import recharge from '@/views/member/purse/recharge'
import card from '@/views/member/card/index'
import carddetail from '@/views/member/card/detail'
import setting from '@/views/member/setting/index'
import follow from '@/views/member/follow/index'
import earningsindex from '@/views/member/earnings/index'
import earningscurrency from '@/views/member/earnings/currency'
import earningscredit from '@/views/member/earnings/credit'
import record from '@/views/member/earnings/record'
import currencyreward from '@/views/member/earnings/currencyreward'
import creditreward from '@/views/member/earnings/creditreward'
import rule from '@/views/member/earnings/rule'
import logs from '@/views/member/earnings/logs'
import profit from '@/views/member/earnings/profit'
import strategy from '@/views/member/score/strategy'
import currencyrewarddetail from '@/views/member/score/currencyrewarddetail'
import creditrewarddetail from '@/views/member/score/creditrewarddetail'
import agreement from '@/views/member/setting/agreement'
import preview from '@/views/member/setting/preview'
import article from '@/views/member/article/index'
import vip from '@/views/member/vip/index'
import generalize from '@/views/member/generalize/index'

const memberModule = [{
		path: '/index',
		name: 'index',
		component: resolve => require(['@/views/index'], resolve),
		meta: {
			navShow: true,
			navIndex: 0,
			title: '首页'
		}
	},
	{
		path: '/',
		name: 'index',
		component: index,
		meta: {
			navShow: true,
			navIndex: 0,
			title: '首页'
		}
	},
	{
		path: '/member/setting/index',
		name: 'setting',
		component: resolve => require(['@/views/member/setting/index'], resolve),
		meta: {
			title: '账户设置'
		}
	},
	{
		path: '/user/reg',
		name: 'reg',
		component: resolve => require(['@/views/user/reg'], resolve),
		meta: {
			title: '用户登录',
			keepAlive: true
		}
	},
	{
		path: '/user/changeLoginPassword',
		name: 'changeLoginPassword',
		component: resolve => require(['@/views/user/changeLoginPassword'], resolve),
		meta: {
			title: '设置登录密码'
		}
	}, {
		path: '/user/changeLoginPassword2',
		name: 'changeLoginPassword2',
		component: resolve => require(['@/views/user/changeLoginPassword2'], resolve),
		meta: {
			title: '设置登录密码'
		}
	}, {
		path: '/user/changePaymentPassword',
		name: 'changePaymentPassword',
		component: resolve => require(['@/views/user/changePaymentPassword'], resolve),
		meta: {
			title: '设置支付密码'
		}
	}, {
		path: '/user/changePaymentPassword2',
		name: 'changePaymentPassword2',
		component: resolve => require(['@/views/user/changePaymentPassword2'], resolve),
		meta: {
			title: '设置支付密码'
		}
	}, {
		path: '/user/changelist',
		name: 'changelist',
		component: resolve => require(['@/views/user/changelist'], resolve),
		meta: {
			title: '密码管理'
		}
	}, {
		path: '/member/coupon/index',
		name: 'couponindex',
		component: resolve => require(['@/views/member/coupon/index'], resolve),
		meta: {
			title: '我的优惠券'
		}
	}, {
		path: '/member/coupon/detail',
		name: 'coupon',
		component: resolve => require(['@/views/member/coupon/detail'], resolve),
		meta: {
			title: '优惠券详情'
		}
	},
	{
		path: '/member/index',
		name: 'member',
		component: resolve => require(['@/views/member/index'], resolve),
		meta: {
			navShow: true,
			navIndex: 4,
			title: '个人中心'
		}
	},
	{
		path: '/member/message/setting',
		name: 'msg_setting',
		component: resolve => require(['@/views/member/message/setting'], resolve),
		meta: {
			title: '消息设置'
		}
	},
	{
		path: '/member/address/index',
		name: 'address',
		component: resolve => require(['@/views/member/address/index'], resolve),
		meta: {
			title: '地址管理'
		}
	},
	{
		path: '/member/address/edit',
		name: 'address_edit',
		component: resolve => require(['@/views/member/address/edit'], resolve),
		meta: {
			title: '修改地址'
		}
	}, {
		path: '/member/setting/nickname',
		name: 'nickname',
		component: resolve => require(['@/views/member/setting/nickname'], resolve),
		meta: {
			title: '修改用户昵称'
		}
	},
	{
		path: '/member/score/index',
		name: 'score',
		component: resolve => require(['@/views/member/score/index'], resolve),
		meta: {
			title: '我的积分'
		}
	},
	{
		path: '/member/score/log',
		name: 'score_log',
		component: resolve => require(['@/views/member/score/log'], resolve),
		meta: {
			title: '积分记录'
		}
	},
	{
		path: '/member/team/index',
		name: 'team',
		component: resolve => require(['@/views/member/team/index'], resolve),
		meta: {
			title: '我的团队'
		}
	},
	{
		path: '/member/info/index',
		name: 'info',
		component: resolve => require(['@/views/member/info/index'], resolve),
		meta: {
			title: '个人信息'
		}
	}, {
		path: '/member/info/data',
		name: 'infodata',
		component: resolve => require(['@/views/member/info/data'], resolve),
		meta: {
			title: '详细资料'
		}
	},
	{
		path: '/member/setting/changeCode',
		name: 'changeCode',
		component: resolve => require(['@/views/member/setting/changeCode'], resolve),
		meta: {
			title: '设置新密码'
		}
	},
	{
		path: '/member/setting/about',
		name: 'about',
		component: resolve => require(['@/views/member/setting/about'], resolve),
		meta: {
			title: '关于我们'
		}
	}, {
		path: '/member/setting/real',
		name: 'real',
		component: resolve => require(['@/views/member/setting/real'], resolve),
		meta: {
			title: '身份认证'
		}
	}, {
		path: '/member/setting/realoading',
		name: 'realoading',
		component: resolve => require(['@/views/member/setting/realoading'], resolve),
		meta: {
			title: '审核结果'
		}
	},
	{
		path: '/member/purse/wallet',
		name: 'pursewallet',
		component: resolve => require(['@/views/member/purse/wallet'], resolve),
		meta: {
			title: '我的钱包'
		}
	}, {
		path: '/member/purse/index',
		name: 'purseindex',
		component: resolve => require(['@/views/member/purse/index'], resolve),
		meta: {
			title: '我的钱包'
		}
	},
	{
		path: '/member/purse/qrcode',
		name: 'qrcode',
		component: resolve => require(['@/views/member/purse/qrcode'], resolve),
		meta: {
			title: '我的赚钱码'
		}
	}, {
		path: '/member/purse/hasqrcode',
		name: 'hasqrcode',
		component: resolve => require(['@/views/member/purse/hasqrcode'], resolve),
		meta: {
			title: '开启赚钱码'
		}
	},
	{
		path: '/member/purse/recharge',
		name: 'recharge',
		component: resolve => require(['@/views/member/purse/recharge'], resolve),
		meta: {
			title: '积分充值'
		}
	},
	{
		path: '/member/card/index',
		name: 'card',
		component: resolve => require(['@/views/member/card/index'], resolve),
		meta: {
			title: '我的卡包'
		}
	}, {
		path: '/member/card/detail',
		name: 'carddetail',
		component: resolve => require(['@/views/member/card/detail'], resolve),
		meta: {
			title: '卡包详情'
		}
	},
	{
		path: '/member/purse/banlancelog',
		name: 'banlancelog',
		component: resolve => require(['@/views/member/purse/banlancelog'], resolve),
		meta: {
			title: '积分日志'
		}
	},
	{
		path: '/member/purse/banlance',
		name: 'banlance',
		component: resolve => require(['@/views/member/purse/banlance'], resolve),
		meta: {
			title: '积分详情'
		}
	},
	{
		path: '/member/follow/index',
		name: 'follow',
		component: resolve => require(['@/views/member/follow/index'], resolve),
		meta: {
			title: '我的关注'
		}
	},
	{
		path: '/member/earnings/index',
		name: 'earningsindex',
		component: resolve => require(['@/views/member/earnings/index'], resolve),
		meta: {
			title: '通用积分'
		}
	}, {
		path: '/member/earnings/currency',
		name: 'earningscurrency',
		component: resolve => require(['@/views/member/earnings/currency'], resolve),
		meta: {
			title: '通用积分'
		}
	}, {
		path: '/member/earnings/credit',
		name: 'earningscredit',
		component: resolve => require(['@/views/member/earnings/credit'], resolve),
		meta: {
			title: '信用积分'
		}
	}, {
		path: '/member/earnings/record',
		name: 'record',
		component: resolve => require(['@/views/member/earnings/record'], resolve),
		meta: {
			title: '累计收益'
		}
	}, {
		path: '/member/earnings/currencyreward',
		name: 'currencyreward',
		component: resolve => require(['@/views/member/earnings/currencyreward'], resolve),
		meta: {
			title: '通用积分奖励'
		}
	}, {
		path: '/member/earnings/creditreward',
		name: 'creditreward',
		component: resolve => require(['@/views/member/earnings/creditreward'], resolve),
		meta: {
			title: '信用积分奖励'
		}
	}, {
		path: '/member/earnings/rule',
		name: 'rule',
		component: resolve => require(['@/views/member/earnings/rule'], resolve),
		meta: {
			title: '积分规则'
		}
	},
	{
		path: '/member/earnings/logs',
		name: 'logs',
		component: resolve => require(['@/views/member/earnings/logs'], resolve),
		meta: {
			title: '累计收益'
		}
	}, {
		path: '/member/earnings/profit',
		name: 'profit',
		component: resolve => require(['@/views/member/earnings/profit'], resolve),
		meta: {
			title: '累计收益'
		}
	},
	{
		path: '/member/score/strategy',
		name: 'strategy',
		component: resolve => require(['@/views/member/score/strategy'], resolve),
		meta: {
			title: '积分攻略'
		}
	},
	{
		path: '/member/score/currencyrewarddetail',
		name: 'currencyrewarddetail',
		component: resolve => require(['@/views/member/score/currencyrewarddetail'], resolve),
		meta: {
			title: '通用积分详情'
		}
	}, {
		path: '/member/score/creditrewarddetail',
		name: 'creditrewarddetail',
		component: resolve => require(['@/views/member/score/creditrewarddetail'], resolve),
		meta: {
			title: '信用积分详情'
		}
	},
	{
		path: '/member/setting/agreement',
		name: 'agreement',
		component: resolve => require(['@/views/member/setting/agreement'], resolve),
		meta: {
			title: 'CGC平台注册协议'
		}
	},
	{
		path: '/member/article/index',
		name: 'article',
		component: resolve => require(['@/views/member/article/index'], resolve),
		meta: {
			title: '快讯列表'
		}
	},
	{
		path: '/member/vip/index',
		name: 'vip',
		component: resolve => require(['@/views/member/vip/index'], resolve),
		meta: {
			title: '会员等级'
		}
	},
	{
		path: '/member/setting/preview',
		name: 'preview',
		component: resolve => require(['@/views/member/setting/preview'], resolve),
		meta: {
			title: '图册'
		}
	}, {
		path: '/member/generalize/index',
		name: 'generalize',
		component: resolve => require(['@/views/member/generalize/index'], resolve),
		meta: {
			title: '推广助手'
		}
	},
	{
		path: '/member/benefits/index',
		name: 'benefits',
		component: resolve => require(['@/views/member/benefits/index'], resolve),
		meta: {
			title: '会员权益'
		}
	}
]

export default memberModule