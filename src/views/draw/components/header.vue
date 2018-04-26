<template>
	<div v-if='show' class="drawHeader">
		<x-header :left-options="{backText: ''}" style="background:rgba(0,0,0,0);" class="header" id="header">{{ title }}</x-header>
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
		}
	}
</script>
<style lang='less'>
	.drawHeader{
		.vux-header .vux-header-left .left-arrow:before {
			border: 0.02rem solid #fff;
			border-width: 0.02rem 0 0 0.02rem;
		}
		.vux-header .vux-header-title {
			color: #fff;
		}
		.header {
			position: absolute !important;
			top: 0;
			left: 0;
			width: 100%;
			z-index: 2;
		}
	} 
</style>