<template>
	<div>
		<settingHeader :title="title"></settingHeader>
	
		<img src="../../assets/images/shop/theme_banner0.png" style="width: 100%; border-top: 0.01rem solid #E1E1E1">
		<tab :line-width="1" custom-bar-width="30px">
	      <tab-item selected @on-item-click="onItemClick">精选</tab-item>
	      <tab-item @on-item-click="onItemClick">食品酒水</tab-item>
	      <tab-item @on-item-click="onItemClick">经典腕表</tab-item>
	      <tab-item @on-item-click="onItemClick">炫酷墨镜</tab-item>
	      <tab-item @on-item-click="onItemClick">母婴</tab-item>
	    </tab>
	</div>
</template>

<script>
import settingHeader from '../../components/setting_header'
	export default {
		data() {
			return {
				title: '中国臻品',
			}
		},
		components:{
			settingHeader
		},
		methods: {
			onItemClick(){

			}
		}
	}
</script>

<style lang="less" scoped>
	
</style>