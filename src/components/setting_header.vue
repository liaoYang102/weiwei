<template>
	<div>
		<x-header :left-options="{backText: ''}" style="background:#fff;" class="header">{{ title }}</x-header>
	</div>
</template>

<script>
	export default {
		props: {
			title: String //定义传值的类型<br>    }
		},
		methods: {
		}
	}
</script>
<style lang='less'>
	#app .vux-header .vux-header-left .left-arrow:before {
		border: 1px solid #222;
		border-width: 1px 0 0 1px;
	}
	
	#app .vux-header .vux-header-title {
		color: #333;
	}
	
	.header {
		position: fixed!important;
		top: 0;
		width: 100%;
		z-index: 1111;
	}
</style>