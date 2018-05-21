import Vue from 'vue'
import axios from 'axios'
import store from '@/store'
import isload from '@/components/isload'

import MD5 from 'js-md5'

Vue.use(isload)

axios.defaults.retry = 4 //请求次数
axios.defaults.retryDelay = 1000 //请求间隙
//axios.defaults.timeout = 5000 // 超时时间
axios.defaults.baseURL = 'http://47.104.187.243:18666' // 请求默认地址
// axios.defaults.withCredentials = true // 允许请求携带token

axios.interceptors.request.use(config => {
	// isLoading方法
	Vue.$isload.show()

	let token = sessionStorage.getItem('token')
	let timestamp = Math.round(new Date().getTime() / 1000)
	let sign = token ? MD5(config.url + timestamp + sessionStorage.getItem('userNp')) : MD5(config.url + timestamp)
	let type = 'application/json;charset=utf-8'
	let entry = config.url.slice(0, 4)
	if(entry === 'http') {
		config.headers = {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	} else {
		if(config.url == '/datacenter/v1/fileupload/image') { // 自定义图片上传
			let type = 'Content-Type: multipart/form-data'
			let form = new FormData()
			for(let key in config.data) {
				form.append(key, config.data[key])
			}
			config.data = form
		} else {
			let type = 'application/json;charset=utf-8'
		}
		config.headers = {
			'Content-Type': type,
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

export default axios