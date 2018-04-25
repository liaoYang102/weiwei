<template>

	<div v-if='show' style="height:46px;" class="app-header">
		<x-header :left-options="{backText: ''}" style="background:#fff;" class="header">{{ title }}</x-header>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				show:''
			}
		},
		created(){
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
		props: {
			title: String //定义传值的类型<br>    }
		},
		methods: {
		}
	}
</script>
<style lang='less'>
	#app .app-header .vux-header .vux-header-left .left-arrow:before {
		border: 1px solid #222;
		border-width: 1px 0 0 1px;
	}
	
	#app .app-header .vux-header .vux-header-title {
		color: #333;
	}
	
	#app .app-header .header {
		position: fixed!important;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 111;
	}
</style>