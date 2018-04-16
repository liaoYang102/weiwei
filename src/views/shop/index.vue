<template>
	<section class=''>
		<settingHeader :title="title"></settingHeader>

		<swiper :imgList="imgList"></swiper>
		
		<navindex></navindex>
		
		<scorenav :scoreTitle="scoreTitle0"></scorenav>
		
		<scorenav :scoreTitle="scoreTitle1"></scorenav>
		
		<swiper :imgList="imgList2" style="margin-top: 0.2rem;"></swiper>

		<section>
			<div class="top">
				<div class="top-title">
					<div class="circle1"></div>
					<div class="recommended">官方推荐</div>
					<div class="circle2"></div>
				</div>

				<div class="top-secondtitle">
					<div class="border1"></div>
					<span>跨品牌最高</span>
					<span class="text">满199减100</span>
					<span>上不封顶</span>
					<div class="border2"></div>
				</div>
			</div>

			<test :theme="purchase" style="margin-top: 0.19rem;"></test>

			<test :theme="best"></test>
		</section>

		<img src="../../assets/images/shop/i_banner.png" style="width: 100%;">
		
		<tab></tab>
	</section>
</template>

<script>
import settingHeader from '../../components/setting_header'
import navindex from './components/nav_index'
import scorenav from './components/scoreNav'
import test from './components/test'
import tab from './components/tab_index'
import swiper from './components/swiper'
export default {
	components: {
		settingHeader,navindex,scorenav,test,tab,swiper
	},
	data(){
		return {
			title: '信用商城',
			scoreTitle0: '信用积分兑',
			scoreTitle1: '信用积分购',
			purchase: '海外购',
			best: '中国臻品',
			imgList:[
				'https://img20.360buyimg.com/da/jfs/t18169/49/1676902787/199684/abf88174/5ad405d6N903b6152.jpg.webp',
				'https://img20.360buyimg.com/da/jfs/t18169/49/1676902787/199684/abf88174/5ad405d6N903b6152.jpg.webp',
				'https://img20.360buyimg.com/da/jfs/t18169/49/1676902787/199684/abf88174/5ad405d6N903b6152.jpg.webp'
			],
			imgList2:[
				'https://img20.360buyimg.com/da/jfs/t18169/49/1676902787/199684/abf88174/5ad405d6N903b6152.jpg.webp',
				'https://img20.360buyimg.com/da/jfs/t18169/49/1676902787/199684/abf88174/5ad405d6N903b6152.jpg.webp',
				'https://img20.360buyimg.com/da/jfs/t18169/49/1676902787/199684/abf88174/5ad405d6N903b6152.jpg.webp',
				'https://img20.360buyimg.com/da/jfs/t18169/49/1676902787/199684/abf88174/5ad405d6N903b6152.jpg.webp'
			]
		}
	}
}
</script>

<style lang="less" scoped>
.top{
	width: 100%;
	background: #f5f6fa;
	.top-title{
		width: 2rem;
		margin: 0 auto;
		text-align: center;
		padding-top: 0.24rem;
		font-size: 0.28rem;
		color: #4050BA;
		.circle1{
			width: 0.29rem;
			height: 0.29rem;
			opacity: 0.15;
			float: left;
			background-image: linear-gradient(238deg, #5EC3FF 0%, #106FE3 100%);
			border-radius: 50%;
			margin-right: 0.15rem;
		}
		.recommended{
			float: left;
			margin-right: 0.16rem;
		}
		.circle2{
			width: 0.18rem;
			height: 0.18rem;
			opacity: 0.15;
			float: left;
			border-radius: 50%;
			margin-top: 0.1rem;
			background-image: linear-gradient(135deg, #8B9EF9 0%, #7587D8 100%);
		}
	}
	.top-secondtitle{
		width: 50%;
		margin: 0 auto;
		clear: both;
		font-size: 0.24rem;
		color: #5486fd;
		.border1{
			position: relative;
			top: 0.16rem;
			left: -0.73rem;
			height: 0.01rem;
			width: 0.68rem;
			background-image: linear-gradient(238deg, #5EC3FF 0%, #106FE3 100%);
		}
		.text{
			color: #3e76fe;
		}
		.border2{
			position: relative;
			top: -0.15rem;
    		left: 3.65rem;
			height: 0.01rem;
			width: 0.68rem;
			background-image: linear-gradient(238deg, #5EC3FF 0%, #106FE3 100%);
		}
	}
}
</style>

<style lang="less">
body{
	background: #f5f6fa;
}
.set-height{
	overflow: hidden;
}

</style>