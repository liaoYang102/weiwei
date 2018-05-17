<template>
	<div class="content" style="height: 100%">
		<settingHeader :title="title"></settingHeader>
		<div class="list">
			<div class="wrapper" ref="wrapper">
				<div class="content">
					<div class="content-left">
    			    	<div class="box1">
							<div class="box1-item" v-for="(item,index) in listData" :class="{'border-left':index == itemActive}" @click.active="boxItemActive(index)">
								<span>{{item}}</span>
							</div>
						</div>
    	    	    </div>
				</div>
			</div>
			<div class="content-right">
				<!-- <div class="imglist">
					<swiper :options="swiperOption">
				        <swiper-slide v-for="item in imgList" class="img">
				        	<img :src="item">
				        </swiper-slide>
				        <div class="swiper-pagination" slot="pagination"></div>
			        </swiper>
				</div> -->
				<router-link to="/shop/all_shops">
					<div class="channel">
						<span>进入手机频道</span>
						<span class="gray">></span>
					</div>
				</router-link>

				<div class="wrapper1" ref="wrapper1">
					<div class="content">
						<div class="box2">
							<div class="title">热门品牌</div>
							<div class="type-box clearfix">
								<div v-for="i in item" @click="goAllshop">
									<span><img v-lazy="i.img"></span>
									<p>{{i.name}}</p>
								</div>
							</div>
							<div class="title">热门分类</div>
							<div class="type-circle clearfix">
								<div v-for="i in item" @click="goAllshop">
									<span><img v-lazy="i.img"/></span>
									<p>{{i.name}}</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- <scroller lock-x height="-68">
					<div class="box2">
						<div class="title">热门品牌</div>
						<div class="type-box clearfix">
							<div v-for="i in item" @click="goAllshop">
								<span><img :src="i.img"></span>
								<p>{{i.name}}</p>
							</div>
						</div>
						<div class="title">热门分类</div>
						<div class="type-circle clearfix">
							<div v-for="i in item" @click="goAllshop">
								<span><img :src="i.img"/></span>
								<p>{{i.name}}</p>
							</div>
						</div>
					</div>
				</scroller> -->
			</div>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import settingHeader from '../../components/setting_header'
	export default {
		data() {
			return {
				title: '商品分类',
				itemActive: 0,
				listData: ['海外购', '中国臻品', '外套', 'T恤', '裤子', '鞋子', '饰品', '生活用品', '珠宝', '日用品', '保暖内衣', '女士裙子', '潮牌', '运动鞋', '休闲系列'],
				imgList: ['https://img1.360buyimg.com/pop/jfs/t16792/328/1497480399/93929/c0d0fbb1/5ac9f290N29a3ad9d.jpg', 'https://img1.360buyimg.com/pop/jfs/t16792/328/1497480399/93929/c0d0fbb1/5ac9f290N29a3ad9d.jpg'],
				item:[{
					"img":"http://www.logoids.com/upload/image/201804/15240382172248838.jpg",
					"name":"苹果"
				},{
					"img":"http://www.logoids.com/upload/image/201804/15240380219342299.jpg",
					"name":'华为'
				},{
					"img":"http://www.logoids.com/upload/image/201804/15240378205641691.jpg",
					"name":'oppo'
				},{
					"img":"http://www.logoids.com/upload/image/201804/15240376906592008.jpg",
					"name":'小米'
				},{
					"img":"http://www.logoids.com/upload/image/201804/15240374719953276.jpg",
					"name":'小米'
				},{
					"img":"http://www.logoids.com/upload/image/201804/15240363475676435.jpg",
					"name":'华为'
				},{
					"img":"http://www.logoids.com/upload/image/201804/15240361364797529.jpg",
					"name":'oppo'
				},{
					"img":"http://www.logoids.com/upload/image/201804/15240356806127836.jpg",
					"name":'小米'
				},{
					"img":"http://www.logoids.com/upload/image/201804/15240354882315717.jpg",
					"name":'苹果'
				},{
					"img":"http://www.logoids.com/upload/image/201611/2016110515012682411.jpg",
					"name":'苹果'
				},{
					"img":"http://www.logoids.com/upload/image/201804/15240311177004133.jpg",
					"name":'oppo'
				},{
					"img":"http://www.logoids.com/upload/image/201804/15240306367235121.jpg",
					"name":'华为'
				},{
					"img":"http://www.logoids.com/upload/image/201611/2016112117161830872.jpg",
					"name":'小米'
				}],
				swiperOption :{
					pagination:{
						el:'.swiper-pagination'
					},
					autoplay: true,
					loop:true
				},
			}
		},
		mounted() {
				this.InitScroll();
		},
		methods: {
			InitScroll() {
				this.$nextTick(() => {
					if(!this.scroll) {
						this.scroll = new BScroll(this.$refs.wrapper, {
							click: true,
							scrollY: true,
							pullUpLoad: {
								threshold: -30, // 负值是当上拉到超过低部 70px；正值是距离底部距离 时，                    
							}
						})

						this.scroll2 = new BScroll(this.$refs.wrapper1, {
							click: true,
							scrollY: true,
							pullUpLoad: {
								threshold: -30,
							}
						})
						
					} else {
						this.scroll.refresh()
						this.scroll2.refresh();
					}
				})

			},
			boxItemActive(index) {
				this.itemActive = index
				if(index === 0 || index === 1){
					this.$router.push({ name: 'theme_goods', params: { themeTitle: this.listData[index]}})
				}
			},
			goAllshop(){
				this.$router.push({ path: '/shop/all_shops'})
			}
		},
		components: {
			settingHeader,
			swiper,
			swiperSlide
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
	
	.box2 {
		padding-bottom: 0.4rem;
	}
	
	.list {
		display: flex;
		height: 100%;
		.wrapper {
			height: 100%;
			overflow: hidden;
		}
		.content-left {
			width: 2.1rem;
			/*border-top: 1px solid #E1E1E1;*/
			/*padding-bottom: 50px;*/
			.box1-item {
				background: #F5F6FA;
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
				border-left: 3px solid #3889FF;
				background: #fff;
			}
		}
		.content-right {
			flex: 1;
			padding: 0.11rem 0.09rem 0 0.11rem;
			box-sizing: content-box;
			background-color: #fff;
			/*height: 100%;*/
			.wrapper1{
				height: 90.7%;
				overflow: hidden;
			}
			.channel{
				width: 97%;
				margin: 0 auto 0.37rem auto;
				background: #E4EBFB;
				text-align: center;
				padding: 0.25rem 0;
				color: #1A2642;
				font-size: 0.28rem;
				.gray{
					color: #90A2C7;
				} 
			}
			img {
				width: 100%;
				height: 1.84rem;
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
						text-align: center;
						border: 0.02rem solid #D8DFF0;
						img{
							width: 100%;
							height: 0.8rem;
						}
					}
					p {
						margin-top: 0.06rem;
						text-align: center;
					}
				}
			}
			.type-circle{
				div{
					width: 33.33%;
					margin-bottom: 0.2rem;
					padding: 0 0.1rem;
					box-sizing: border-box;
					float: left;
					span {
						display: inline-block;
						width: 100%;
						height: 1.5rem;
						text-align: center;
						border: 0.02rem solid #D8DFF0;
						border-radius: 50%;
						overflow: hidden;
						img{
							width: 100%;
							height: 1.5rem;
						}
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

<style lang="less" scoped>
.imglist{
	width: 5.126rem;
	height: 1.84rem;
}
</style>