const page = {
	state: {
		direction: 'forward',
		addressData: '',
		isLoading: false,
		back: false,
		isLogin: false,
		includeList:[],
		ispreview:false,
		userInfo:{}
	},
	mutations: {
		UPDATE_DIRECTION(state, payload) {
			state.direction = payload.direction
		},
		UPDATE_DACK(state, payload) {
			state.back = payload.back
		},
		UPDATE_LOADING(state, status) {
			state.isLoading = status
		}
	}
}
export default page