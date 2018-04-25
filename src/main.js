// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Mint from 'mint-ui'
import Vuex from 'vuex'
import echatrs from 'echarts'
import axios from 'axios'
import './assets/icons_font/iconfont.css'
import 'mint-ui/lib/style.css'
import './style/global.css'
import 'swiper/dist/css/swiper.css'
import './config/wy_rem'
import { Group, DatetimeRange, Cell, Tab, TabItem, CellBox, XHeader, Scroller, LoadMore,TransferDom, Confirm, Popup, Toast, Swiper, InlineXNumber, CheckIcon, CellFormPreview, XSwitch, XNumber, Badge, Previewer, Timeline, TimelineItem, Rater, XTextarea,Radio } from 'vux'
import FastClick from 'fastclick'
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'

FastClick.attach(document.body);

Vue.use(VueVideoPlayer, /* {
  options: global default options,
  events: global videojs events
} */)

Vue.use(Vuex)
Vue.use(Mint)
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

Vue.prototype.$http = axios //定义axios组件用法  this.$http(opt).then(fn)
axios.defaults.baseURL = '/api';
Vue.config.productionTip = false

//引用动画库
import animate from 'animate.css'
Vue.use(animate)
//全局load
import { LoadingPlugin, DatetimePlugin } from 'vux'
Vue.use(LoadingPlugin)
Vue.use(DatetimePlugin)
//echart
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import { BusPlugin } from 'vux'
Vue.use(BusPlugin)

//动画ios修复
const shouldUseTransition = !/transition=none/.test(location.href)
store.registerModule('vux', {
	state: {
		direction: shouldUseTransition ? 'forward' : '',
		back:true
	},
	mutations: {
		UPDATE_DIRECTION(state, payload) {
			if(!shouldUseTransition) {
				return
			}
			state.direction = payload.direction
			console.log(payload.direction)
		}
	}
})

const history = window.sessionStorage;
history.clear()
let historyCount = history.getItem('count') * 1;

let isPush = false
let endTime = Date.now()
let methods = ['push', 'go', 'replace', 'forward', 'back']

document.addEventListener('touchend', () => {
	endTime = Date.now()
})
methods.forEach(key => {
	let method = router[key].bind(router)
	router[key] = function(...args) {
		isPush = true
		method.apply(null, args)
	}
})
 window.addEventListener("popstate", function(e) {
// 新版中使用wx.closeWindow()方法
    store.state.vux.back = false;
}, false);
router.beforeEach(function(to, from, next) {
	const toIndex = history.getItem(to.path)
	const fromIndex = history.getItem(from.path)
	console.log(history)
	
	if(toIndex) {
		if(!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
			// store.commit('UPDATE_DIRECTION', {
			// 	direction: 'forward'
			// })
			if(!isPush && (Date.now() - endTime) < 377) {
				store.commit('UPDATE_DIRECTION', {
					direction: ''
				})
				store.state.vux.back = true;
			} else{
				store.commit('UPDATE_DIRECTION', {
					direction: 'forward'
				})
			}
			if(!store.state.vux.back){
				store.commit('UPDATE_DIRECTION', {
					direction: 'reverse'
				})
				store.state.vux.back = true;
			}
		} else {
			// 判断是否是ios左滑返回
			if(!isPush && (Date.now() - endTime) < 377) {
				store.commit('UPDATE_DIRECTION', {
					direction: ''
				});
				store.state.vux.back = true;
			} else {
				if(store.state.vux.back){
					store.commit('UPDATE_DIRECTION', {
						direction: 'forward'
					});
					// var ua = navigator.userAgent.toLowerCase();
					// var isWeixin = ua.indexOf('micromessenger') != -1;
					// if (isWeixin) { 
					// 	store.commit('UPDATE_DIRECTION', {
					// 		direction: 'reverse'
					// 	});
					// }
				}else{
					alert(123);
					store.commit('UPDATE_DIRECTION', {
						direction: 'reverse'
					})
					store.state.vux.back = true;
				}
			}
		}
	} else {
		++historyCount
		history.setItem('count', historyCount)
		to.path !== '/' && history.setItem(to.path, historyCount)
		store.commit('UPDATE_DIRECTION', {
			direction: 'forward'
		})
	}

	if(/\/http/.test(to.path)) {
		let url = to.path.split('http')[1]
		window.location.href = `http${url}`
	} else {
		next()
	}
})

router.afterEach(function(to) {
	isPush = false
	if(process.env.NODE_ENV === 'production') {
		ga && ga('set', 'page', to.fullPath)
		ga && ga('send', 'pageview')
	}
})

//const whiteList = ['/user/login', '/index', '/user/reg','/','/member/index'];// 不重定向白名单
// router.beforeEach((to, from, next) => {
//     if (store.getters.userstate) { // 
//         if (to.path === '/user/login') {
//           next();
//         } 
//         else {
//             //避免F5刷新时，vex数据全无，所以需要重新获取一次数据
//             if(!store.getters.username){ //判断是否有用户信息 把token换成userInfo
//                 console.log('未获取到用户',store.getters.username) 
//                 store.dispatch('setUser').then(res => { 
//                     next();                 
//                 }).catch(err => {
//                     console.log(err);
//                 });
//             }
//         }
//     } else {  
//         if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
//             next()
//         } else {
//             next('/user/login'); // 否则全部重定向到登录页
//         }
//     }   
// });

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	},
	template: '<App/>'
})