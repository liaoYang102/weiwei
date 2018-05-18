<template>
	<div class="info-box">
		<setting-header :title="title"></setting-header>
		<div class="content-head">
			<div class="address"><i class="iconfont icon-dizhi1"></i>广州
				<div class="search fr">
					<router-link to="/multi_user_mall/search"><input type="text" placeholder='搜索你想要的' /></router-link>
					<img src="../../assets/images/index/search.png" alt="">
				</div>
			</div>

			
			<!-- <swiper height="3.4rem" dots-position="center" loop auto>
				<swiper-item class="swiperImg" v-for="(item, index) in demo04_list" :key="index">
					<img :src="item">
				</swiper-item>
			</swiper> -->

			
			<swiper :options="swiperOption">
		        <swiper-slide v-for="(item, index) in demo04_list" :key="index">
		        	<img :src="item">
		        </swiper-slide>
		        <div class="swiper-pagination" slot="pagination"></div>
		     </swiper>
		</div>
		<div class="nav-brief">
			<div class="main">
				<div class="left">
					<span>威伐光介绍</span>
				</div>
				<div class="right">
					<div class="cont">
						<span>治疗指引</span>
					</div>
					<div class="cont bg">
						<span>应用案例</span>
					</div>
				</div>
			</div>
			<button class="nav-btn">立即体验</button>
		</div>
		<button class="qr-btn" @click="btnQrcode">生成二维码</button>
		<img src="../../assets/images/share/partner-bg.png" class="image"/>
		<div class="partner">
			<div class="partner-item">
				<img src="../../assets/images/share/partner02.png"/>
				<h2>联营企业</h2>
				<span>(合伙人)</span>
			</div>
			<div class="partner-item">
				<img src="../../assets/images/share/partner01.png"/>
				<h2>设备投资商</h2>
				<span>(合伙人)</span>
			</div>
			<div class="partner-item">
				<img src="../../assets/images/share/partner03.png"/>
				<h2>系统服务商</h2>
				<span>(合伙人)</span>
			</div>
		</div>
		<div class="wrap">
			<!-- <div class="nav clearfix">
				<ul class="fl">
					<a href="javascript:;">
						<li @click="showProduct">
							<img src="../../assets/images/share/product.png">
							<p>产品指引</p>
						</li>
					</a>
					<a href="javascript:;">
						<li @click="treatment">
							<img src="../../assets/images/share/order.png">
							<p>我的订单</p>
						</li>
					</a>
					<a href="javascript:;">
						<li @click="join">
							<img src="../../assets/images/share/join.png">
							<p>招商加盟</p>
						</li>
					</a>
					<a href="javascript:;">
						<li @click="seeStore">
							<img src="../../assets/images/share/shop.png">
							<p>查看门店</p>
						</li>
					</a>
					<a href="javascript:;">
						<li @click="$router.push({path:'/member/coupon/index'})">
							<img src="../../assets/images/share/coupon.png">
							<p>优惠券</p>
						</li>
					</a>
				</ul>
			</div> -->

			<!-- <div class="banner">
				<img src="../../assets/images/share/xbanner.png" alt="">
			</div> -->

			<!-- <div class="hot_product">
				<h2>热门产品</h2>
				<span class="fr">全部28台<i class="iconfont icon-arrow-right"></i></span>
				<div class="product">
				      
				      	<swiper :options="swiperOption2">
				      						        <swiper-slide>
				      						        	<li>
				      		      							<img src="../../assets/images/share/yiqi1.png" alt="">
				      		      							<p>高级治疗仪</p>
				      		      							<x-button :gradients="['#1D62F0', '#19D5FD']" mini>查看</x-button>
				      		      						</li>
				      						        </swiper-slide>
				      						        <swiper-slide>
				      						        	<li>
				      		      							<img src="../../assets/images/share/yiqi2.png" alt="">
				      		      							<p>高级治疗仪</p>
				      		      							<x-button :gradients="['#1D62F0', '#19D5FD']" mini>查看</x-button>
				      		      						</li>
				      						        </swiper-slide>
				      						        <swiper-slide>
				      						        	<li>
				      		      							<img src="../../assets/images/share/yiqi1.png" alt="">
				      		      							<p>高级治疗仪</p>
				      		      							<x-button :gradients="['#1D62F0', '#19D5FD']" mini>查看</x-button>
				      		      						</li>
				      						        </swiper-slide>
				      						        <swiper-slide>
				      						        	<li>
				      		      							<img src="../../assets/images/share/yiqi1.png" alt="">
				      		      							<p>高级治疗仪</p>
				      		      							<x-button :gradients="['#1D62F0', '#19D5FD']" mini>查看</x-button>
				      		      						</li>
				      						        </swiper-slide>
				      						        <swiper-slide>
				      						        	<li>
				      		      							<img src="../../assets/images/share/yiqi1.png" alt="">
				      		      							<p>高级治疗仪</p>
				      		      							<x-button :gradients="['#1D62F0', '#19D5FD']" mini>查看</x-button>
				      		      						</li>
				      						        </swiper-slide>
				      						        <div class="swiper-pagination" slot="pagination"></div>
				      						    </swiper>
				</div>
			</div> -->

			<!-- <div class="youhui">
				<h2>优惠专区</h2>
				<div class="pro_wrap">
					<div class="pro">
						<img src="../../assets/images/share/ban.png" alt="">
						<p>周五半价日</p>
					</div>
					<div class="pro">
						<img src="../../assets/images/share/dianpu.png" alt="">
						<p>周五半价日</p>
					</div>
				</div>
				<div class="purpos">
					<ul class="clearfix">
						<li>
							<p class="title">免费</p>
							<p class="ellipise">消费免单券</p>
							<img src="../../assets/images/share/coupon2.png" alt="">
						</li>
						<li>
							<p class="title">折扣</p>
							<p class="ellipise">8.5折</p>
							<img src="../../assets/images/share/coupon3.png" alt="">
						</li>
						<li>
							<p class="title">美容院</p>
							<p class="ellipise">超级尊贵体验</p>
							<img src="../../assets/images/share/coupon4.png" alt="">
						</li>
						<li>
							<p class="title">养老院</p>
							<p class="ellipise">积分大放送</p>
							<img src="../../assets/images/share/coupon5.png" alt="">
						</li>
					</ul>
				</div>
			</div> -->

			<div class="fujin">
				<h2>附近商家 <span class="fr" @click="seeStore">更多<i class="iconfont icon-arrow-right"></i></span></h2>
				<div class="list">
					<ul>
						<li class="clearfix" @click="goStoreDetail(1)">
							<div class="left">
								<img src="../../assets/images/share/md_logo.png" alt="">
							</div>
							<div class="right">
								<p class="title">章光101（番禺店）<span class="juli">5.5km</span></p>
								<p class="content ellipise">[番禺]金牌双人套餐，提供免费WiFi</p>
								<p class="nr"><span class="momey">￥120</span><span class="ms_price">门市价:￥150</span><span class="num">已售：2414</span></p>
								<p class="zhekou">8折</p>
							</div>
						</li>
						<li class="clearfix" @click="goStoreDetail(1)">
							<div class="left">
								<img src="../../assets/images/share/md_logo.png" alt="">
							</div>
							<div class="right">
								<p class="title">章光101（番禺店）<span class="juli">5.5km</span></p>
								<p class="content ellipise">[番禺]金牌双人套餐，提供免费WiFi</p>
								<p class="nr"><span class="momey">￥120</span><span class="ms_price">门市价:￥150</span><span class="num">已售：2414</span></p>
								<p class="zhekou">8折</p>
							</div>
						</li>
						<li class="clearfix" @click="goStoreDetail(1)">
							<div class="left">
								<img src="../../assets/images/share/md_logo.png" alt="">
							</div>
							<div class="right">
								<p class="title">章光101（番禺店）<span class="juli">5.5km</span></p>
								<p class="content ellipise">[番禺]金牌双人套餐，提供免费WiFi</p>
								<p class="nr"><span class="momey">￥120</span><span class="ms_price">门市价:￥150</span><span class="num">已售：2414</span></p>
								<p class="zhekou">8折</p>
							</div>
						</li>
						<li class="clearfix" @click="goStoreDetail(1)">
							<div class="left">
								<img src="../../assets/images/share/md_logo.png" alt="">
							</div>
							<div class="right">
								<p class="title">章光101（番禺店）<span class="juli">5.5km</span></p>
								<p class="content ellipise">[番禺]金牌双人套餐，提供免费WiFi</p>
								<p class="nr"><span class="momey">￥120</span><span class="ms_price">门市价:￥150</span><span class="num">已售：2414</span></p>
								<p class="zhekou">8折</p>
							</div>
						</li>
					</ul>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	import {Scroller,XButton} from 'vux'
	import {swiper,swiperSlide } from 'vue-awesome-swiper'
	import 'swiper/dist/css/swiper.css'
	import settingHeader from '../../components/setting_header'

	import mainApp from '../../global/global.js'

	export default {
		data() {
			return {
				title: '共享设备',
				demo04_list:[
					// 'https://img1.360buyimg.com/pop/jfs/t16792/328/1497480399/93929/c0d0fbb1/5ac9f290N29a3ad9d.jpg'
					// '@/assets/images/share/banner1.png'
					'./static/images/banner1.png',
					'./static/images/banner1.png',
					'./static/images/banner1.png'
			
				],
				swiperOption:{
					pagination:{
						el:'.content-head .swiper-pagination'
					},
					autoplay: true,
					loop:true
				},
				swiperOption2:{
					slidesPerView:3,
					spaceBetween:10,
					pagination:{
						el:'.product .swiper-pagination'
					},
					clickable: true
				}
			}
		},
		components: {
			settingHeader,
			Scroller,
			XButton,
			swiper,
			swiperSlide
		},
		created:function(){
			/*var data='2018-05-10'
			console.log(mainApp.frDateTimehp.getDateTimesTamp(data));*/
		},
		methods:{
			showProduct(){
				this.$router.push('/share/pintroduce')
			},
			join(){
				this.$router.push('/share/join')
			},
			treatment(){
				// this.$router.push('/share/treatment')
				this.$router.push('/shop/my_order')
			},
			seeStore(){
				this.$router.push('/share/storelist')
			},
			goCoupon(){
				this.$router.push('/member/coupon/index')
			},
			goStoreDetail(id){//go门店详情
				this.$router.push({path:'/multi_user_mall',params:{
					id:id
				}});
			},
			btnQrcode () {
				this.$router.push({ name: 'shareQrcode', params: { url: 'https://www.baidu.com/' }})
			}
		}
	}
</script>

<style lang="less" scoped>
	/*@import url('../../../static/css/global'); */
	.clearfix:after{
		content: "";
		display: block;
		clear: both;
	}
	.ellipise{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.info-box {
		.content-head{
			position: relative;
			width: 100%;
			height: 3.4rem;
			/*border: 1px solid #333;*/
			img{
				height: 100%;
				width: 100%;
			}
			.address{
				/*border: 1px solid #333;*/
				/*width: 2rem;*/
				padding-left: .2rem;
				font-size: .3rem;
				color: #fff;
				position: absolute;
				top: 0;
				z-index: 2;
				i{
					font-size: .45rem;
					position: relative;
					top: .05rem;
				}
				.search {
					position: relative;
					margin-top: 0.1rem;
					margin-left: 0.34rem;
					input {
						width: 4.14rem;
						height: 0.54rem;
						border-radius: 0.27rem;
						background:rgba(255,255,255,0.5);
						/*color: #fff;*/
						padding-left: 0.64rem;
						font-size: 0.24rem;
						letter-spacing: 1px;
					}
					input::-webkit-input-placeholder {
						color: #fff;
						/*opacity: 1;*/
					}
					input::-moz-placeholder {
						/* Mozilla Firefox 19+ */
						color: #fff;
						/*opacity: 1;*/
					}
					input:-moz-placeholder {
						/* Mozilla Firefox 4 to 18 */
						color: #fff;
						/*opacity: 1;*/
					}
					input:-ms-input-placeholder {
						/* Internet Explorer 10-11 */
						color: #fff;
						/*opacity: 1;*/
					}
					img {
						width: 0.32rem;
						height: 0.32rem;
						position: absolute;
						top: 0.12rem;
						left: 0.24rem;
					}
				}
			}
		}
		.wrap{
			background: #fff;
			border-radius: 10px 10px 0 0;
			position: relative;
			top: -.15rem;
			width: 100%;
			z-index: 4;
			.nav{
				ul{
					width: 100%;
					margin-top: .4rem;
					a{
						float: left;
						width: 20%;
						li{
							width: 100%;
							text-align: center;
							img{
								width: 0.81rem;
								height: .81rem;
							}
							p{
								font-size: .14rem;
								color: #7386AD;
							}
						}
					}
				}
			}
			.banner{
				/*margin-top: .34rem;*/
				border-top: 1px solid #D8DFF0;
				width: 95%;
				margin: .34rem auto 0;
				padding-top: .2rem;
				img{
					width: 100%;
					/*height: 1.5rem;*/
				}
			}
			.hot_product{
				margin-top: .58rem;
				h2{
					padding-left: 3%;
					font-size: .36rem;
					color: #141C33;
					font-weight: 600;
					span{
						font-weight: normal;
						color: #60719D;
						font-size: .28rem;
						display: block;
						vertical-align: bottom;
						padding-right: .2rem;	
					}
				}
				 .product{
					width: 100%;
					margin-top: .1rem;
					/*border: 1px solid transparent;*/
					box-sizing: border-box;
					overflow: hidden;
					/* ul{
						min-width: 600px;
						display: block;
						position: relative;
						overflow-x: scroll;
						
					} */
					.swiper-slide{
						margin-right: 0px !important;
						/*width: 110px !important;*/
					}
					li{
							display: inline-block;
							/*float: left;*/
							width: 2rem;
							margin-left:.2rem;
							/*border: 1px solid #333;*/
							img{
								width: 100%;
								height: 2.9rem;
							}
							p{
								font-size: .28rem;
								font-weight: bold;
								color: #1A2642;
								margin-top: .14rem;
								margin-bottom: .18rem;
							}
						}
					.weui-btn_mini{
						/* width: 1rem;
						height: .56rem; */
						border-radius: 20px;
					}
				} 
			}
			.youhui{
				/*margin-top: .58rem;*/
				width: 95%;
				margin: .58rem auto 0;
				border-top: 1px solid #D8DFF0;
				padding-top: .4rem;
				h2{
					padding-left: 3%;
					font-size: .36rem;
					color: #141C33;
					font-weight: 600;
					margin-bottom: .22rem;
				}
				.pro_wrap{
					/*border:1px solid #333;*/
					.pro{
						width: 48%;
						height: 1.7rem;
						display: inline-block;
						box-sizing: border-box;
						position: relative;
						img{
							width: 100%;
							height: 100%;
						}
						&:last-child{
							margin-left: 2%;
						}
						p{
							height: .44rem;
							line-height: .44rem;
							background:rgba(26,38,66,.7);
							font-size: .32rem;
							color: #fff;
							position: absolute;
							top: .62rem;
							padding: 2px 4px;
						}
					}
				}
				.purpos{
					margin-top: .1rem;
					li{
						float: left;
						width: 1.65rem;
						height: 1.7rem;
						/*border:1px solid #333;*/
						margin-right: .12rem;
						background: #FEFAF6;
						position: relative;
						/*padding: .1 .05rem;*/
						.title{
							font-size: .28rem;
							color: #1A2642;
							font-weight: bold;
						}
						p{
							font-size: .22rem;
							color: #90A2C7;
							margin:.1rem 5px;
						}
						img{
							width: .58rem;
							height: .46rem;
							position: absolute;
							right: .2rem;
							bottom: .14rem;
						}
					}
				}
			}
			.fujin{
				width: 95%;
				margin:.4rem auto 0;
				border-top:1px solid #D8DFF0;
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
					/*border-top: 1px solid #D8DFF0;*/
					/*border-bottom: 1px solid #D8DFF0;*/
					margin-top: .22rem;
					padding-bottom: 1rem;
					li{
						padding: .3rem .05rem .3rem 0;
						border-top: 1px solid #D8DFF0;
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
		}
		.nav-brief {
			height: 4.6rem;
			font-size: .32rem;
			font-weight: bold;
			padding: .2rem .3rem 0 .3rem;
			.main {
				height: 2.9rem;
				padding-bottom: .3rem;
				display: flex;
				justify-content: space-between;
				.left {
					width: 3.08rem;
					height: 100%;
					box-shadow: 0px 2px 10px 0px rgba(144,162,199,0.13);
					background: #fff url('../../assets/images/share/case.png') no-repeat;
					background-size: 2.04rem 1.82rem;
					background-position: 0.88rem 1.08rem;
					span {
						display: inline-block;
						padding-left: .2rem;
						padding-top: .48rem;
					}
				}
				.right {
					width: 3.7rem;
					height: 100%;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.cont {
						height: 1.4rem;
						box-shadow: 0px 2px 10px 0px rgba(144,162,199,0.13);
						background: #fff url('../../assets/images/share/guide.png') no-repeat;
						background-size: 1.15rem 1.2rem;
						background-position: 2.17rem 0.2rem;
						span {
							line-height: 1.4rem;
							padding-left: 0.2rem;
						}
					}
					.bg {
						background: #fff url('../../assets/images/share/introduce.png') no-repeat;
						background-size: 1.99rem 0.91rem;
						background-position: 1.48rem 0.49rem;
					}
				}
			}
			.nav-btn {
				width: 100%;
				height: 0.94rem;
				color: #fff;
				font-size: 0.28rem;
				line-height: 0.94rem;
				background-color: #3889FF;
				border: 0;
				box-shadow: 0px 2px 20px 0px rgba(41,120,235,0.4);
			}
		}
		.image {
			width: 100%;
			height: 2.6rem;
		}
		.partner {
			display: flex;
			justify-content: space-between;
			padding-bottom: .2rem;
			.partner-item {
				width: 33%;
				height: 3rem;
				background-color: #fff;
				box-shadow: 0px 2px 10px 0px rgba(115,134,173,0.2);
				img {
					width: 1.1rem;
					height: 1.1rem;
					margin: 0.15rem;
				}
				h2 {
					padding-left: .4rem;
					font-size: 0.28rem;
					color: #1A2642;
					font-weight: bold;
				}
				span {
					padding-left: .4rem;
					font-size: .24rem;
					color: #90A2C7;
				}
			}
		}
		.qr-btn {
			width: 100%;
			height: 0.94rem;
			color: #fff;
			font-size: 0.28rem;
			line-height: 0.94rem;
			background-color: #3889FF;
			border: 0;
			box-shadow: 0px 2px 20px 0px rgba(41,120,235,0.4);
		}
	}
</style>