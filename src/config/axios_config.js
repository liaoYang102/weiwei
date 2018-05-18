import Vue from 'vue'
import axios from 'axios'
import store from '@/store'
import isload from '@/components/isload'

import MD5 from 'js-md5'

Vue.use(isload)

axios.defaults.retry = 4 //请求次数
axios.defaults.retryDelay = 1000 //请求间隙
//axios.defaults.timeout = 5000 // 超时时间
axios.defaults.baseURL = '/api' // 请求默认地址
axios.defaults.withCredentials = true // 允许请求携带token

axios.interceptors.request.use(config => {
	// isLoading方法
	Vue.$isload.show()
	if(sessionStorage.getItem('token')) {
		let sign, token
		let timestamp = Math.round(new Date().getTime() / 1000)
		sign = MD5(config.url + timestamp + '123456')
		token = sessionStorage.getItem('token')
		config.headers = {
			'Content-Type': 'application/json;charset=utf-8',
			'timestamp': timestamp,
			'sign': sign,
			'token': token
		}
	} else {
		let sign, token
		let timestamp = Math.round(new Date().getTime() / 1000)
		sign = MD5(config.url + timestamp)
		token = sessionStorage.getItem('token')
		config.headers = {
			'Content-Type': 'application/json;charset=utf-8',
			'timestamp': timestamp,
			'sign': sign,
			'token': token
		}
	}
	return config
}, error => {
	return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(res => { // 响应成功关闭loading
	Vue.$isload.hide()
	if(res.data.status != '00000000') {
		Vue.$vux.toast.show({
			text: res.data.message,
			type: 'text',
			position: 'middle',
			width: '50%'
		})
	}

	return res
}, error => {
	Vue.$isload.hide({
		ishide() {
			Vue.$vux.toast.show({
				text: error.message,
				type: 'text',
				position: 'middle'
			})
		}
	})
	return Promise.reject(error)
})

axios.post('/datacenter/public/v1/login', {
	audience: 'platform',
	name: '123',
	passwd: '456'
}).then((res) => {
	console.log(res)
	sessionStorage.setItem('token', res.data.data.token)
})
export default axios