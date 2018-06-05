// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuex from 'vuex'
import echatrs from 'echarts'
import './assets/icons_font/iconfont.css'
import './style/global.css'
import 'swiper/dist/css/swiper.css'
import './config/wy_rem'
import { Group, DatetimeRange, Cell, XDialog, Tab, TabItem, CellBox, XHeader, Scroller, LoadMore, TransferDom, Confirm, Popup, Toast, Swiper, InlineXNumber, CheckIcon, CellFormPreview, XSwitch, XNumber, Badge, Previewer, Timeline, TimelineItem, Rater, XTextarea, Radio, Swipeout, SwipeoutItem, SwipeoutButton } from 'vux'
import FastClick from 'fastclick'
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import VueLazyLoad from 'vue-lazyload'
import merge from 'webpack-merge'
Vue.prototype.merge = merge

import mainApp from './global/global'
Vue.prototype.mainApp = mainApp

import MD5 from 'js-md5'
Vue.prototype.MD5 = MD5

import vuePicturePreview from 'vue-picture-preview'
Vue.use(vuePicturePreview)

import axios from './config/axios_config'
Vue.prototype.$http = axios //定义axios组件用法  this.$http(opt).then(fn)

import url from './config/url'
Vue.prototype.url = url //全局url路径

Vue.config.silent = true

// 懒加载图片
Vue.use(VueLazyLoad, {
	preLoad: 1.3,
	error: './static/images/warning.png',
	loading: './static/images/loading.png',
})
// --------------------------------

FastClick.attach(document.body);

Vue.use(VueVideoPlayer)

Vue.use(Vuex)
Vue.directive('transfer-dom', TransferDom)
Vue.component('group', Group)
Vue.component('datetime-range', DatetimeRange)
Vue.component('cell', Cell)
Vue.component('tab', Tab)
Vue.component('tab-item', TabItem)
Vue.component('cell-box', CellBox)
Vue.component('x-header', XHeader)
Vue.component('scroller', Scroller)
Vue.component('load-more', LoadMore)
Vue.component('popup', Popup)
Vue.component('toast', Toast)
Vue.component('confirm', Confirm)
Vue.component('swiper', Swiper)
Vue.component('inline-x-number', InlineXNumber)
Vue.component('check-icon', CheckIcon)
Vue.component('cell-form-preview', CellFormPreview)
Vue.component('x-switch', XSwitch)
Vue.component('x-number', XNumber)
Vue.component('badge', Badge)
Vue.component('previewer', Previewer)
Vue.component('timeline', Timeline)
Vue.component('timeline-item', TimelineItem)
Vue.component('rater', Rater)
Vue.component('x-textarea', XTextarea)
Vue.component('radio', Radio)
Vue.component('x-dialog', XDialog)
Vue.component('swipeout', Swipeout)
Vue.component('swipeout-item', SwipeoutItem)
Vue.component('swipeout-button', SwipeoutButton)

Vue.config.productionTip = false

//组件插件
import dialog from '@/components/dialog'
import code from '@/components/code'
Vue.use(dialog)
Vue.use(code)

//引用动画库
import animate from 'animate.css'
Vue.use(animate)
//全局load
import { LoadingPlugin, DatetimePlugin, ToastPlugin } from 'vux'
Vue.use(LoadingPlugin)
Vue.use(DatetimePlugin)
Vue.use(ToastPlugin)
//echart
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import { BusPlugin } from 'vux'
Vue.use(BusPlugin)

//动画ios修复
const shouldUseTransition = !/transition=none/.test(location.href)
store.registerModule('vux', {
	state: {
		direction: shouldUseTransition ? 'forward' : ''
	},
	mutations: {
		UPDATE_DIRECTION(state, payload) {
			if(!shouldUseTransition) {
				return
			}
			state.direction = payload.direction
		}
	}
})

const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1;

let isPush = false
let endTime = Date.now()
let methods = ['push', 'go', 'replace', 'forward', 'back']

var startX = 0
//touchStart事件
document.addEventListener('touchstart', function(event) {
	startX = event.targetTouches[0].pageX
}, false)

//touchend事件
document.addEventListener('touchend', (e) => {
	endTime = Date.now()
})

methods.forEach(key => {
	let method = router[key].bind(router)
	router[key] = function(...args) {
		isPush = true
		method.apply(null, args)
	}
})

router.beforeEach(function(to, from, next) {

	//缓存路由页面
	store.state.page.includeList = []

	if(to.path == '/user/reg') {
		to.meta.keepAlive = true
	} else if(from.path == '/user/reg' && to.path != '/member/setting/agreement') {
		from.meta.keepAlive = false
	} else if(from.path == '/user/reg' && to.path == '/member/setting/agreement') {
		from.meta.keepAlive = true
	}

	if(to.meta.keepAlive) {
		store.state.page.includeList.push(to.name)
	}
	if(from.meta.keepAlive) {
		store.state.page.includeList.push(from.name)
	}

	//判断微信版本
	var wechatInfo = navigator.userAgent.match(/MicroMessenger\/([\d\.]+)/i)
	if(wechatInfo) {
		if(wechatInfo[1] < '6.6.7') {

			//touchEnd事件
			document.addEventListener('touchend', function(event) {
				startX = 0
			}, false)

			window.onpopstate = function(e) {
				if((Date.now() - endTime) < 377) {
					store.state.page.back = false
				} else if((Date.now() - endTime) > 377 && startX > 160) {
					store.state.page.back = false
				} else {
					store.state.page.back = true
				}
			}

			const toIndex = history.getItem(to.path)
			const fromIndex = history.getItem(from.path)

			if(toIndex) {
				if(!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
					// 判断是否是ios左滑返回
					if(!isPush && (Date.now() - endTime) < 377 || !isPush && (Date.now() - endTime) > 377) {
						if(store.state.page.back) {
							store.commit('UPDATE_DIRECTION', {
								direction: 'reverse'
							})
						} else {
							store.commit('UPDATE_DIRECTION', {
								direction: ''
							})
						}
					} else {
						store.commit('UPDATE_DIRECTION', {
							direction: 'forward'
						})
					}
				} else {
					// 判断是否是ios左滑返回
					if(!isPush && (Date.now() - endTime) < 377 || !isPush && (Date.now() - endTime) > 377) {
						if(store.state.page.back) {
							store.commit('UPDATE_DIRECTION', {
								direction: 'reverse'
							})
						} else {
							store.commit('UPDATE_DIRECTION', {
								direction: ''
							})
						}
					} else {
						store.commit('UPDATE_DIRECTION', {
							direction: 'reverse'
						})
					}
				}
			} else {
				++historyCount
				history.setItem('count', historyCount)
				to.path !== '/' && history.setItem(to.path, historyCount)
				if(!isPush && (Date.now() - endTime) < 377 || !isPush && (Date.now() - endTime) > 377) {
					if(store.state.page.back) {
						store.commit('UPDATE_DIRECTION', {
							direction: 'reverse'
						})
					} else {
						store.commit('UPDATE_DIRECTION', {
							direction: ''
						})
					}
				} else {
					store.commit('UPDATE_DIRECTION', {
						direction: 'forward'
					})
				}
			}
		} else {
			const toIndex = history.getItem(to.path)
			const fromIndex = history.getItem(from.path)
			if(toIndex) {
				if(!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
					store.commit('UPDATE_DIRECTION', {
						direction: 'forward'
					})
				} else {
					store.commit('UPDATE_DIRECTION', {
						direction: 'reverse'
					})
				}
			} else {
				++historyCount
				history.setItem('count', historyCount)
				to.path !== '/' && history.setItem(to.path, historyCount)
				if(startX > 0) {
					store.commit('UPDATE_DIRECTION', {
						direction: 'forward'
					})
				} else {
					store.commit('UPDATE_DIRECTION', {
						direction: ''
					})
				}
			}
		}
	}

	if(/\/http/.test(to.path)) {
		let url = to.path.split('http')[1]
		window.location.href = `http${url}`
	} else {
		//       路由切换 没有登录  重定向至登录页
		//		if(store.state.page.isLogin == false) {
		//			if(to.path != '/user/reg') {
		//				next({
		//					path: '/user/reg'
		//				})
		//			} else {
		//				next()
		//			}
		//		} else {
		//			next()
		//		}
		next()
	}
})

router.afterEach(function(to) {
	isPush = false
	startX = 0
	store.commit('UPDATE_DACK', {
		back: false
	})
	store.state.page.isLogin = true
})

Vue.prototype.vm = new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	},
	template: '<App/>'
})