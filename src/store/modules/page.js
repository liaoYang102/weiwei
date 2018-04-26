const page = {
	state: {
		direction: 'forward',
		footerFalg:false //控制底部栏是否显示
	},
	mutations: {
		UPDATE_DIRECTION(state, payload) {
			state.direction = payload.direction
		}

	}
}
export default page;