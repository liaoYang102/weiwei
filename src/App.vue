<template>
	<div id="app" v-cloak>
		<transition :name="viewTransition" :css="!!direction">
			<router-view class="router-view"></router-view>
		</transition>
	</div>
</template>

<script>
	import { ButtonTab, ButtonTabItem } from 'vux'
	import { mapState } from 'vuex'
	export default {
		name: 'App',
		computed: {
			...mapState({
				direction: state => state.page.direction,
			}),
			viewTransition() {
				if(!this.direction) return ''
				return 'vux-pop-' + (this.direction === 'forward' ? 'in' : 'out')
			}
		},
		data() {
			return {
				show:''
			}
		},
		created() {
			var ua = navigator.userAgent.toLowerCase();
			var isWeixin = ua.indexOf('micromessenger') != -1;
			if (isWeixin) {
				this.show = false;
			    return true;
			}else{
				this.show = true;
			    return false;
			}
		},
		components: {
			ButtonTab,
			ButtonTabItem
		},
		methods: {
			handleClick: function() {
				this.$toast('Hello world!')
			},
		},
		watch: {
			'$route' (to, from) {
				
			}　
		}
	}
</script>

<style lang='less'>
	* {
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
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
		transition: all 300ms;
		height: 100%;
		top: 0;
		width: 100%;
		position: absolute;
		backface-visibility: hidden;
		perspective: 1000;
	}
	
	.vux-pop-out-enter {
		opacity: 0;
		transform: translate3d(-100%, 0, 0);
	}
	
	.vux-pop-out-leave-active {
		opacity: 0;
		transform: translate3d(100%, 0, 0);
	}
	
	.vux-pop-in-enter {
		opacity: 0;
		transform: translate3d(100%, 0, 0);
	}
	
	.vux-pop-in-leave-active {
		opacity: 0;
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
		color: #FF9900!important;
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
	/*我的钱包*/
</style>