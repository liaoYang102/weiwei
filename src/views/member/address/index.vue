<template>
	<div class="content">
		<settingHeader :title="title"></settingHeader>
	</div>
</template>

<script>
	import { Scroller } from 'vux'
	import settingHeader from '../../../components/setting_header'
	export default {
		data() {
			return {
				title: '我的收货地址',
			}
		},
		methods: {
			
		},
		components: {
			settingHeader
		}
	}
</script>

<style lang="less" scoped>
	.clearfix {
		zoom: 1;
	}
	
	.clearfix:after {
		visibility: hidden;
		display: block;
		font-size: 0;
		content: " ";
		clear: both;
		height: 0;
	}
</style>