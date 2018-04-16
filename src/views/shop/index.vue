<template>
	<section class=''>
		<settingHeader :title="title"></settingHeader>
		<swiper :imgList="imgList"></swiper>
	</section>
</template>

<script>
	import settingHeader from '../../components/setting_header'
	import swiper from './components/swiper'
export default {
	data(){
		return {
			title: '信用商城',
			imgList:[
				'https://img20.360buyimg.com/da/jfs/t18169/49/1676902787/199684/abf88174/5ad405d6N903b6152.jpg.webp','https://img20.360buyimg.com/da/jfs/t18169/49/1676902787/199684/abf88174/5ad405d6N903b6152.jpg.webp','https://img20.360buyimg.com/da/jfs/t18169/49/1676902787/199684/abf88174/5ad405d6N903b6152.jpg.webp'
			]
		}
	},
	components:{
		settingHeader,
		swiper
	}

}
</script>


<style>


</style>