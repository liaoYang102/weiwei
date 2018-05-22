import Vue from 'vue'
import axios from 'axios'
import store from '@/store'
import isload from '@/components/isload'
import router from '@/router'

import MD5 from 'js-md5'

Vue.use(isload)

//REQUST_TIMESTAMP_NULL("apigw001", "requst_timestamp_null"),
//REQUST_TIMESTAMP_TIMEOUT("apigw002", "requst_timestamp_timeout "),
//REQUST_TIMESTAMP_CONVERT_EXCEPTION("apigw003", "requst_timestamp_convert_exception"),
//REQUST_TOKEN_NULL("apigw004", "requst_token_null"),
//REQUST_SIGN_NULL("apigw005", "requst_sign_null"),
//REQUST_SIGN_NOT_MATCH("apigw006", "requst_sign_not_match "),
//REQUST_THIRD_PARTY_INVALID("apigw007", "thirdparty invalid"),
//API_GATEWAY_UNKNOW_EXCEPTION("apigw999", "api_gateway_unknow_exception"),

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
	Vue.$isload.hide({
		ishide() {

		}
	})
	if(res.data.status != '00000000') {
		if(res.data.status == 'apigw004') {
			Vue.$dialog.show({
				type: 'warning',
				headMessage: '提示',
				message: '暂未登录,是否立即登录?',
				buttons: ['确定', '取消'],
				canel() {
					Vue.$dialog.hide()
				},
				confirm() {
					Vue.$dialog.hide()
					router.push({
						path: '/user/reg'
					})
				}
			})
		} else {
			Vue.$vux.toast.show({
				text: res.data.message,
				type: 'text',
				position: 'middle',
				width: '50%'
			})
		}
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