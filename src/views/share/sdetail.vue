<template>
	<div class="sdetail">
		<settingHeader :title="title"></settingHeader>
		<div class="banner">
			<swiper :options="swiperOption">
		        <swiper-slide v-for="(item, index) in demo04_list" :key="index">
		        	<img :src="item">
		        </swiper-slide>
		        <div class="swiper-pagination" slot="pagination"></div>
		     </swiper>
		</div>
		<div class="shoucang clearfix">
			<div class="left">
				<p class="title ellipise">妍小姐韩国皮肤管理美容中心</p>
				<p class="jigou ellipise">卫生，社会保障和社会福利业</p>
			</div>
			<div class="right">
				<p class="btn">收藏</p>
			</div>
		</div>
		<div class="address clearfix">
			<div class="left fl"><i class="iconfont icon-dizhi1"></i></div>
			<div class="center fl"><p class="ellipise2">番禺区大夫山南门对面马路直走200米右转50米，横江酒家旁边<span>(距您9.6km)</span></p></div>
			<div class="right fl"><i class="iconfont icon-dianhua"></i></div>
		</div>
		<div class="cbanner">
			<img src="../../assets/images/share/xbanner.png" alt="">
		</div>

		<div class="fujin">
			<h2>套餐类型</h2>
			<div class="list">
				<ul>
					<li class="clearfix" @click="goMeaidetail(1)">
						<div class="left">
							<img src="../../assets/images/share/md_logo.png" alt="">
						</div>
						<div class="right">
							<p class="title ellipise">30分钟 威伐光-750w单人套餐 </p>
							<p class="content ellipise">金牌双人套餐，提供眼罩、免费WiFi</p>
							<p class="nr"><span class="momey">￥120</span><span class="ms_price">门市价:￥150</span><span class="num">已售：2414</span></p>
							<!-- <p class="zhekou">8折</p> -->
						</div>
					</li>
					<li class="clearfix" @click="goMeaidetail(1)">
						<div class="left">
							<img src="../../assets/images/share/md_logo.png" alt="">
						</div>
						<div class="right">
							<p class="title ellipise">60分钟 威伐光-750w单人套餐 </p>
							<p class="content ellipise">金牌双人套餐，提供眼罩、免费WiFi</p>
							<p class="nr"><span class="momey">￥120</span><span class="ms_price">门市价:￥150</span><span class="num">已售：2414</span></p>
							<!-- <p class="zhekou">8折</p> -->
						</div>
					</li>
					<li class="clearfix" @click="goMeaidetail(1)">
						<div class="left">
							<img src="../../assets/images/share/md_logo.png" alt="">
						</div>
						<div class="right">
							<p class="title ellipise">60分钟 威伐光-750w双人套餐 </p>
							<p class="content ellipise">金牌双人套餐，提供眼罩、免费WiFi</p>
							<p class="nr"><span class="momey">￥120</span><span class="ms_price">门市价:￥150</span><span class="num">已售：2414</span></p>
							<!-- <p class="zhekou">8折</p> -->
						</div>
					</li>
					
				</ul>
			</div>
		</div>

	</div>
</template>

<script>
	/*import {Scroller,XButton} from 'vux'*/
	import {swiper,swiperSlide } from 'vue-awesome-swiper'
	import 'swiper/dist/css/swiper.css'
	import settingHeader from '../../components/setting_header'
	export default {
		data() {
			return {
				title: '门店详情',
				demo04_list:[
					// 'https://img1.360buyimg.com/pop/jfs/t16792/328/1497480399/93929/c0d0fbb1/5ac9f290N29a3ad9d.jpg'
					// '@/assets/images/share/banner1.png'
					'./static/images/banner2.png',
					'./static/images/banner2.png',
					'./static/images/banner2.png'
			
				],
				swiperOption:{
					pagination:{
						el:'.banner .swiper-pagination'
					},
					autoplay: true,
					loop:true
				}
			}
		},
		components: {
			settingHeader,
			swiper,
			swiperSlide
		},
		methods:{
			goMeaidetail(id){
				this.$router.push({path:'/share/meaidetail',params:id})
			}
		}

	}
</script>

<style lang="less" scoped>
	@import url('../../../static/css/global'); 
	
	.banner{
		width: 100%;
		height: 2.74rem;
		img{
			width: 100%;
			height: 100%;
		}
	}
	.sdetail{
		background: #fff;
	}
	.shoucang{
		width: 95%;
		/*border: 1px solid #333;*/
		box-sizing: border-box;
		margin:0 auto;
		padding: .18rem 0;
		border-bottom: 1px solid @xian;
		.left{
			width: 70%;
			/*.border;*/
			float: left;
			.title{
				color: #1A2642;
				font-size: .32rem;
				font-weight: bold;
				margin-bottom: .16rem;
			}
			.jigou{
				color: #90A2C7;
				font-size: .24rem;
			}
		}
		.right{
			float: right;
			width: 30%;
			.btn{
				width: 2rem;
				height: .68rem;
				line-height: .68rem;
				text-align: center;
				margin-top: .1rem;
				border-radius: 4px;
				background: #336FFF;
				color: #fff;
				font-size: .32rem;
			}
		}
	}
	.address{
		height: 1.16rem;
		/*.border;*/
		border:1px solid transparent;
		.left{
			width: 10%;
			line-height: 1.16rem;
			text-align: center;
			i{
				font-size: .5rem;
				color: #336FFF;
			}
		}
		.center{
			width: 70%;
			p{
				font-size: .28rem;
				color: #1A2642;
				margin-top: .15rem;
				border-right:1px solid #D8DFF0;
			}
		}
		.right{
			width: 20%;
			line-height: 1.16rem;
			text-align: center;
			i{
				font-size: .5rem;
				color: #336FFF;
			}
		}
	}
	.cbanner{
		width: 100%;
		background: #f5f6fa;
		text-align: center;
		img{
			width:7rem;
			height: 1.5rem;
			margin: .25rem auto;
		}
	}
	.fujin{
		width: 95%;
		margin:.4rem auto 0;
		/*border-top:1px solid #D8DFF0;*/
		/*padding-bottom: .4rem;*/
		h2{
			padding-left: 3%;
			font-size: .36rem;
			color: #141C33;
			font-weight: 600;
			margin-top: .4rem;
			span{
				font-weight: normal;
				color: #60719D;
				font-size: .28rem;
				display: block;
				vertical-align: bottom;
				padding-right: .2rem;
			}
		}
		.list{
			border-top: 1px solid #D8DFF0;
			/*border-bottom: 1px solid #D8DFF0;*/
			margin-top: .22rem;
			margin-bottom: 2rem;
			li{
				padding: .3rem .05rem .3rem 0;
				border-bottom: 1px solid #D8DFF0;
				.left{
					float: left;
					width: 2.04rem;
					height: 1.6rem;
					margin-right: .2rem;
					img{
						width: 100%;
						height: 100%;
					}
				}
				.right{
					float: left;
					/*border:1px solid #333;*/
					width: 4.75rem;
					.title{
						font-size: .32rem;
						color: #1A2642;
						font-weight: bold;
						.juli{
							font-size: .24rem;
							float: right;
						}
					}
					.content{
						color: #7386AD;
						font-size: .28rem;
						margin-top: .1rem;
					}
					.nr{
						margin-top: .1rem;
						.momey{
							font-size: .32rem;
							color: #F23030;
							font-weight: bold;
						}
						.ms_price,.num{
							font-size: .24rem;
							color: #7386AD;
							padding-left: .1rem;
						}
						.num{
							float: right;
							margin-top: .1rem;
						}
					}
					.zhekou{
						width: .8rem;
						height: .4rem;
						line-height: .4rem;
						text-align: center;
						border-radius: 5px;
						background: #e0e9fd;
						color: #336FFF;
						font-size: .22rem;
						margin-top: .1rem;
					}
				}
			}
		}
	}
</style>