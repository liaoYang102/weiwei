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

axios.interceptors.request.use(config => {
	// isLoading方法
	Vue.$isload.show()
	if(sessionStorage.getItem('token')) {
		let sign, token
		let timestamp = Math.round(new Date().getTime() / 1000)
		sign = MD5(config.url + timestamp + '17520439845123123')
		token = sessionStorage.getItem('token')

		if(config.url == '/datacenter/v1/fileupload/image') { // 自定义图片上传
			config.headers = {
				'Content-Type': 'Content-Type: multipart/form-data',
				'timestamp': timestamp,
				'sign': sign,
				'token': token
			}
			let form = new FormData()
			for(let key in config.data) {
				form.append(key, config.data[key])
			}
			config.data = form
		} else {
			config.headers = {
				'Content-Type': 'application/json;charset=utf-8',
				'timestamp': timestamp,
				'sign': sign,
				'token': token
			}
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

if(!sessionStorage.getItem('token')) {
	axios.post('/datacenter/public/v1/login', {
		audience: 'platform',
		name: '17520439845',
		passwd: '123123'
	}).then((res) => {
		sessionStorage.setItem('token', res.data.data.token)
	})
}

export default axios