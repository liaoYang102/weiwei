<template>
	<div>
		<settingHeader :title="title"></settingHeader>
	
		<img src="../../assets/images/shop/theme_banner0.png" style="width: 100%; border-top: 0.01rem solid #E1E1E1">
		<div class="theme">
			<tab :line-width="1" custom-bar-width="30px">
		      <tab-item selected @on-item-click="onItemClick">精选</tab-item>
		      <tab-item @on-item-click="onItemClick">食品酒水</tab-item>
		      <tab-item @on-item-click="onItemClick">经典腕表</tab-item>
		      <tab-item @on-item-click="onItemClick">炫酷墨镜</tab-item>
		      <tab-item @on-item-click="onItemClick">母婴</tab-item>
		    </tab>
		    <Swiper :imgList="imgList"></Swiper>
		</div>
		
	</div>
</template>

<script>
import settingHeader from '../../components/setting_header'
import Swiper from './components/swiper'
	export default {
		data() {
			return {
				title: '中国臻品',
				imgList: [
				  'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff',
				  'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
				  'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'
				],
			}
		},
		components:{
			settingHeader,Swiper
		},
		methods: {
			onItemClick(){

			}
		}
	}
</script>

<style lang="less" scoped>
.theme{
	background: #f72d61;
}
</style>