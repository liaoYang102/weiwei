import card from '@/views/lock/card'
import list from '@/views/lock/list'

const lock = [{
	path: '/lock/card',
	name: 'card',
	component: card,
}, {
	path: '/lock/list',
	name: 'list',
	component: list,
}, ]

export default lock