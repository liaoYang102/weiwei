<template>
	<div id="app" v-cloak>
		<router-view />
	</div>
</template>

<script>
	import { ButtonTab, ButtonTabItem } from 'vux'
	export default {
		name: 'App',
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
html,body{
  height: 100%;
}

#app {
	height: 100%;
	padding-top: 46px;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.child-view {
	transition: all .5s linear;
	padding-top: 46px;
	width: 100%;
}
.slide-left-enter,
.slide-right-leave-active {
	-webkit-transform: translateX(100%);
	transform: translateX(100%);
}

.slide-left-leave-active,
.slide-right-enter {
	-webkit-transform: translateX(-100%);
	transform: translateX(-100%);
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
