<template>
	<div id="app" v-cloak>
		<transition :name="transitionName">
			<router-view class='child-view' />
		</transition>
	</div>
</template>

<script>
	import { ButtonTab, ButtonTabItem } from 'vux'
	export default {
		name: 'App',
		data() {
			return {
				transitionName: '' // 默认动态路由变化为slide-right
			}
		},
		created() {
			console.log(this.$store.state.page.show)
		},
		components: {
			ButtonTab,
			ButtonTabItem
		},
		methods: {
			handleClick: function() {
				this.$toast('Hello world!')
			},
			index(index) {
				console.log(index)
			}
		},
		watch: {
			'$route' (to, from) {
				console.log(this.$store.state.page.show)
				this.transitionName = this.$store.state.page.show ? 'slide-left' : 'slide-right'
				this.$store.state.page.show = !this.$store.state.page.show
			}　
		}
	}
</script>

<style lang='less'>
html,body{
  height: 100%;
}

#app {
	height: 100%;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.child-view {
	transition: all .5s cubic-bezier(.55, 0, .1, 1);
	padding-top: 46px;
	width: 100%;
	height: 100%;
}
.slide-left-enter,
.slide-right-leave-active {
	-webkit-transform: translate(100%,0);
	transform: translate(100%,0);
}

.slide-left-leave-active,
.slide-right-enter {
	-webkit-transform: translate(-100%,0);
	transform: translate(-100%,0);
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
.weui-cell__bd{
	height: 100%;
	input{
		height: 100%;
	}
}
</style>
