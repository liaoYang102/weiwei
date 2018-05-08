import card from '@/views/lock/card'
import list from '@/views/lock/list'

const lock = [{
	path: '/lock/card',
	name: 'card',
	component: card,
	meta: {
		title:'我的房卡'
	}
}, {
	path: '/lock/list',
	name: 'list',
	component: list,
	meta: {
		title:'房卡列表'
	}
}, ]

export default lock