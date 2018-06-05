<template>
	<div id="app" ref="fBox" v-cloak>
		<!--动画  页面缓存-->
		<transition :name="viewTransition" :css="!!direction">
			<keep-alive :include="includeList">
				<router-view></router-view>
			</keep-alive>
		</transition>
		<!--图片预览插件-->
		<lg-preview v-if="$store.state.page.ispreview"></lg-preview>
		<settingFooter v-if="$route.meta.navShow"></settingFooter>
		<div v-transfer-dom>
			<x-dialog v-model="orientation" class="dialog-demo" hide-on-blur>
				<div class="img-box">
					<img src="../static/images/orientation.jpg" style="max-width:100%">
				</div>
				<div @click="orientation=false">
					<!-- <span class="vux-close"></span> -->
				</div>
			</x-dialog>
		</div>
	</div>
</template>

<script>
	import settingFooter from '@/components/setting_footer'
	import { ButtonTab, ButtonTabItem } from 'vux'
	import { mapState } from 'vuex'
	export default {
		name: 'App',
		computed: {
			...mapState({
				direction: state => state.page.direction,
				includeList: state => state.page.includeList
			}),
			viewTransition() {
				if(!this.direction) return ''
				return 'vux-pop-' + (this.direction === 'forward' ? 'in' : 'out')
			}
		},
		data() {
			return {
				show: '',
				orientation: false
			}
		},
		created() {
			var _this = this

			window.onorientationchange = function() {
				if(window.orientation == 90 || window.orientation == -90) {
					_this.orientation = true;
				} else {
					_this.orientation = false;
				}
			}
			if(this.$router.app._route.meta.title) {
				document.title = this.$router.app._route.meta.title
			}

			var ua = navigator.userAgent.toLowerCase();
			var isWeixin = ua.indexOf('micromessenger') != -1;
			if(isWeixin) {
				this.show = false;
				return true;
			} else {
				this.show = true;
				return false;
			}
		},
		components: {
			ButtonTab,
			ButtonTabItem,
			settingFooter
		},
		methods: {},
		watch: {
			'$route' (to, from, next) {

				var _this = this

				//路由切换返回顶部
				document.body.scrollTop = 0
				document.documentElement.scrollTop = 0

				//设置微信端头部标题
				if(this.$route.meta.title) {
					document.title = this.$route.meta.title
				} else {
					document.title = '大健康App'
				}

				//自定义组件关闭
				this.$code.hide()
				this.$dialog.hide()
			}
		}
	}
</script>

<style lang='less'>
	* {
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	}
	
	.weui-dialog {
		background-color: transparent;
		z-index: 10001;
	}
	
	.weui-mask {
		z-index: 10000;
	}
	
	.add-btn{
		border-radius: 2px!important;
	}
	
	#app {
		height: 100%;
		background-color: #F5F6FA;
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	
	.vux-pop-out-enter-active,
	.vux-pop-out-leave-active,
	.vux-pop-in-enter-active,
	.vux-pop-in-leave-active {
		will-change: transform;
		transition: all .5s cubic-bezier(.55, 0, .1, 1);
		height: 100%;
		width: 100%;
		top: 0;
		width: 100%;
		position: absolute;
		backface-visibility: hidden;
		perspective: 1000;
	}
	
	.vux-pop-out-enter {
		transform: translate3d(-100%, 0, 0);
	}
	
	.vux-pop-out-leave-active {
		transform: translate3d(100%, 0, 0);
	}
	
	.vux-pop-in-enter {
		transform: translate3d(100%, 0, 0);
	}
	
	.vux-pop-in-leave-active {
		transform: translate3d(-100%, 0, 0);
	}
	/*弹窗 取消  确定  按钮颜色*/
	
	.weui-dialog__btn_primary {
		color: #f90!important;
	}
	
	.weui-dialog__btn_default {
		color: #353535!important;
	}
	/*单选框颜色*/
	
	.vux-check-icon>.weui-icon-success:before,
	.vux-check-icon>.weui-icon-success-circle:before {
		color: #1c70f1!important;
	}
	/*地址选择框 完成按钮 颜色*/
	
	.vux-popup-header-right {
		color: #336fff!important;
	}
	/*input框架  高度100%*/
	
	.input-div {
		.weui-cell__bd {
			height: 100%;
			input {
				height: 100%;
			}
		}
	}
</style>