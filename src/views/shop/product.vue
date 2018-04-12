<template>
	<div class="content">
		<settingHeader :title="title"></settingHeader>
		<div class="list">
			<div class="content-left">
				<scroller lock-x>
					<div class="box1">
						<div class="box1-item" v-for="(item,index) in listData" :class="{'border-left':index == itemActive}" @click.active="boxItemActive(index)"><span>{{item}}</span></div>
					</div>
				</scroller>
			</div>
			<div class="content-right">
				<swiper :aspect-ratio="300/800" height="aspect-ratio">
					<swiper-item class="swiper-demo-img" v-for="(item, index) in demo04_list" :key="index">
						<img :src="item">
					</swiper-item>
				</swiper>
				<scroller lock-x>
					<div class="box2">
						<div class="title">热门品牌</div>
						<div class="type-box clearfix">
							<div v-for="i in 21">
								<span>
							<img src="../../assets/images/shop/apple.png"/>
						</span>
								<p>小米</p>
							</div>
						</div>
						<div class="title">热门品牌</div>
						<div class="type-box clearfix">
							<div v-for="i in 21">
								<span>
							<img src="../../assets/images/shop/apple.png"/>
						</span>
								<p>小米</p>
							</div>
						</div>
					</div>
				</scroller>
			</div>
		</div>
	</div>
</template>

<script>
	import { Scroller, Swiper, SwiperItem } from 'vux'
	import settingHeader from '../../components/setting_header'
	export default {
		data() {
			return {
				title: '商品分类',
				itemActive: 0,
				listData: ['海外购', '海外购', '海外购', '海外购', '海外购', '海外购', '海外购', '海外购', '海外购', '海外购', '海外购', '海外购', '海外购', '海外购', '海外购'],
				demo04_list: ['https://img1.360buyimg.com/pop/jfs/t16792/328/1497480399/93929/c0d0fbb1/5ac9f290N29a3ad9d.jpg', 'https://img1.360buyimg.com/pop/jfs/t16792/328/1497480399/93929/c0d0fbb1/5ac9f290N29a3ad9d.jpg']
			}
		},
		methods: {
			boxItemActive(index) {
				this.itemActive = index
			}
		},
		components: {
			settingHeader,
			Swiper,
			SwiperItem
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
	
	.box1,
	.box2 {
		padding-bottom: 180px;
	}
	
	.list {
		display: flex;
		height: 100vh;
		.content-left {
			width: 2.1rem;
			height: 100%;
			padding-bottom: 50px;
			.box1-item {
				height: 1.18rem;
				line-height: 1.18rem;
				text-align: center;
			}
			.box1-item:nth-child(1)>span {
				font-family: PingFangSC-Semibold;
				font-size: 0.28rem;
				color: #8591ED;
				letter-spacing: 0;
			}
			.box1-item:nth-child(2)>span {
				font-family: PingFangSC-Semibold;
				font-size: 0.28rem;
				color: #FB6666;
				letter-spacing: 0;
			}
			.border-left {
				border-left: 0.03rem solid #3889FF;
				background: #f0f0f0;
			}
		}
		.content-right {
			flex: 1;
			padding: 0.11rem 0.09rem 0 0.11rem;
			box-sizing: content-box;
			img {
				width: 100%;
				height: auto;
				display: block;
			}
			.title {
				font-family: PingFangSC-Regular;
				font-size: 0.28rem;
				color: #1A2642;
				letter-spacing: 0;
				margin: 0.2rem 0.1rem;
			}
			.type-box {
				div {
					width: 33.33%;
					margin-bottom: 0.2rem;
					padding: 0 0.1rem;
					box-sizing: border-box;
					float: left;
					span {
						display: inline-block;
						width: 100%;
						height: 0.84rem;
						line-height: 0.84rem;
						text-align: center;
						border: 0.02rem solid #D8DFF0;
					}
					p {
						margin-top: 0.06rem;
						text-align: center;
					}
				}
			}
		}
	}
</style>