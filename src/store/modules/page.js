const page = {
	state: {
		direction: 'forward'
	},
	mutations: {
		UPDATE_DIRECTION(state, payload) {
			state.direction = payload.direction
		}

	}
}
export default page;