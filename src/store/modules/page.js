const page = {
	state: {
		direction: 'forward',
		addressData: '',
		isLoading: false
	},
	mutations: {
		UPDATE_DIRECTION(state, payload) {
			state.direction = payload.direction
		},
		UPDATE_LOADING(state, status) {
			state.isLoading = status
		}
	}
}
export default page