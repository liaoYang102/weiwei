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
import { Group, DatetimeRange, Cell, XDialog, Tab, TabItem, CellBox, XHeader, Scroller, LoadMore, TransferDom, Confirm, Popup, Toast, Swiper, InlineXNumber, CheckIcon, CellFormPreview, XSwitch, XNumber, Badge, Previewer, Timeline, TimelineItem, Rater, XTextarea, Radio } from 'vux'
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

import axios from './config/axios_config'
Vue.prototype.$http = axios //定义axios组件用法  this.$http(opt).then(fn)

import url from './config/url'
Vue.prototype.url = url //全局url路径

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

const history = window.localStorage
history.clear()
let historyCount = history.getItem('count') * 1;

let isPush = false
let endTime = Date.now()
let methods = ['push', 'go', 'replace', 'forward', 'back']

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

 window.onpopstate = function(e) {
 	console.log(e)
    if((Date.now() - endTime) < 377){
    	store.state.page.back = false
    }else{
    	store.state.page.back = true
    }
 }

router.beforeEach(function(to, from, next) {
	
	const toIndex = history.getItem(to.path)
	const fromIndex = history.getItem(from.path)
	

	if(toIndex) {
		if(!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
			// 判断是否是ios左滑返回
			if(!isPush && (Date.now() - endTime) < 377 || !isPush && (Date.now() - endTime) > 377) {
				if(store.state.page.back) {
					store.commit('UPDATE_DIRECTION', {
						direction: ''
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
					direction: ''
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

	if(/\/http/.test(to.path)) {
		let url = to.path.split('http')[1]
		window.location.href = `http${url}`
	} else {
		next(function() {
			store.state.page.back = false
		})
	}
})

router.afterEach(function(to) {
	isPush = false
	store.commit('UPDATE_DACK', {
		back: false
	})
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