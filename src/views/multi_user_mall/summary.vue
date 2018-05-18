<template>
	<div class="info-box">
		<settingHeader :title="title"></settingHeader>
		<div class="content-head">
			<div class="address"><i class="iconfont icon-dizhi1"></i>广州
				<div class="search fr">
					<router-link to="/multi_user_mall/search"><input type="text" placeholder='搜索你想要的' /></router-link>
					<img src="../../assets/images/index/search.png" alt="">
				</div>
			</div>
			
			<swiper :options="swiperOption">
		        <swiper-slide v-for="(item, index) in demo04_list" :key="index">
		        	<img v-lazy="item">
		        </swiper-slide>
		        <div class="swiper-pagination" slot="pagination"></div>
		     </swiper>
		</div>
		<div class="wrap">
			<div class="nav clearfix">
				<ul class="fl">
					<a href="javascript:;">
						<li @click="showProduct">
							<img src="../../assets/images/multi_user_mall/product.png">
							<p>商超连锁</p>
						</li>
					</a>
					<a href="javascript:;">
						<li @click="treatment">
							<img src="../../assets/images/multi_user_mall/order.png">
							<p>酒店住宿</p>
						</li>
					</a>
					<a href="javascript:;">
						<li @click="join">
							<img src="../../assets/images/multi_user_mall/join.png">
							<p>生活服务</p>
						</li>
					</a>
					<a href="javascript:;">
						<li @click="seeStore">
							<img src="../../assets/images/multi_user_mall/beauty.png">
							<p>美容美发</p>
						</li>
					</a>
					<a href="javascript:;">
						<li @click="goShare">
							<img src="../../assets/images/multi_user_mall/coupon.png">
							<p>威伐光</p>
						</li>
					</a>
				</ul>
			</div>
			
			<div class="banner">
				<img src="../../assets/images/share/xbanner.png" alt="">
			</div>
			
			<div class="area">
				<h2>优惠专区</h2>
				<div class="areaBanner">
					<div class="fl"><img src="../../assets/images/shop/i_banner.png" alt=""><p class="bannerTitle">周五半价日</p></div>
					<div class="fr"><img src="../../assets/images/shop/index_banner.png" alt=""><p class="bannerTitle">人气好店铺</p></div>
					<div class="clear"></div>
				</div>
				<ul>
					<li>
						<p class="areaTitle">免费</p>
						<span class="areadiscount">消费面单卷</span>
						<br>
						<img src="../../assets/images/multi_user_mall/shape.png" alt="" class="fr">
					</li>
					<li>
						<p class="areaTitle">折扣</p>
						<span class="areadiscount">8.5折</span>
						<br>
						<img src="../../assets/images/multi_user_mall/shape2.png" alt="" class="fr">
					</li>
					<li>
						<p class="areaTitle">霸王餐</p>
						<span class="areadiscount">超级尊贵体验</span>
						<br>
						<img src="../../assets/images/multi_user_mall/shape3.png" alt="" class="fr">
					</li>
					<li>
						<p class="areaTitle">足疗按摩</p>
						<span class="areadiscount">积分大放送</span>
						<br>
						<img src="../../assets/images/multi_user_mall/shape4.png" alt="" class="fr">
					</li>
				</ul>
			</div>

			<div class="fujin">
				<h2><label class="nearStore storeActive" @click="near($event)">附近商家</label> &nbsp;&nbsp;&nbsp;<label class="goodStore" @click="good($event)">优质商家</label></h2>
				<div class="list">
					<ul>
						<li class="clearfix" @click="goStoreDetail(1)" v-for="item in 20">
							<div class="left">
								<img src="../../assets/images/share/md_logo.png" alt="">
							</div>
							<div class="right">
								<p class="title">章光101（番禺店）</p>
								<p class="content ellipise">
									<span class="free">免单</span>
									<span class="return">返积分</span>
								</p>
								<p class="nr"><span class="ms_price">美容美发</span><span class="num">番禺区 2.6km</span></p>
							</div>
						</li>
					</ul>
					<p class="more" @click="seeStore">查看更多<i class="iconfont icon-arrow-right"></i></p>
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
	export default {
		data() {
			return {
				title: '多用户商城首页',
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
		methods:{
			showProduct(){
				this.$router.push('/share/storelist')
			},
			join(){
				this.$router.push('/share/storelist')
			},
			treatment(){
				// this.$router.push('/share/treatment')
				this.$router.push('/share/storelist')
			},
			seeStore(){
				this.$router.push('/share/storelist')
			},
			goShare(){
				this.$router.push('/share')
			},
			goStoreDetail(id){//go门店详情
				this.$router.push({path:'/multi_user_mall',params:{
					id:id
				}});
			},
			near(e){
				document.getElementsByClassName('goodStore')[0].className = "goodStore";
				e.target.className += ' storeActive';
			},
			good(e){
				document.getElementsByClassName('nearStore')[0].className = "nearStore";
				e.target.className += ' storeActive';
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
				height: 3.4rem;
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
								font-size: .2rem;
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
			.area{
				width: 95%;
    			margin: 0 auto;
				h2{
				    font-size: .36rem;
				    color: #141C33;
				    font-weight: 600;
				    margin-top: .4rem;
				    margin-bottom: 0.2rem;
				}
				.areaBanner{
					.fl,.fr{
						position: relative;
						.bannerTitle{
							top: 40%;
							padding:0.05rem 0.2rem;
							position: absolute;
							line-height: 0.44rem;
							font-size:0.32rem;
							color: #FFFFFF;
							line-height: 0.44rem;
							height:0.44rem; 
							background:rgba(26,38,66,0.79);
						}
					}
					img{
						width: 3.4rem;
						height: 1.7rem;
						border: none;
					}
				}
				ul{
					margin-top: 0.2rem;
					display: flex;
					li{
						padding-left: 0.1rem;
						padding-top: 0.1rem;
						flex: 1;
						height: 1.7rem;
						margin-right: 0.2rem;
						.areaTitle{
							font-size: 0.28rem;
							color: #1A2642;
						}
						.areadiscount{
							font-size: 0.22rem;
							color: #90A2C7;
						}
						img{
							margin-top: 0.2rem;
							margin-right: 0.2rem;
							width: 0.46rem;
							height: 0.46rem;
						}
					}
					li:nth-child(1){
						background-color: #FEFAF6;
					}
					li:nth-child(2){
						background-color: #FFF9FA;
					}
					li:nth-child(3){
						background-color: #F8FCFF;
					}
					li:nth-child(4){
						background-color: #FAF9FF;
						margin-right: 0;
					}
				}
			}
			.fujin{
				width: 95%;
				margin:.4rem auto 0;
				border-top:1px solid #D8DFF0;
				/*padding-bottom: .4rem;*/
				h2{
					font-size: .36rem;
					color: #141C33;
					font-weight: 600;
					margin-top: .4rem;
					.storeActive{
						color:#336FFF;
					}
				}
				.list{
					border-top: 1px solid #D8DFF0;
					/*border-bottom: 1px solid #D8DFF0;*/
					margin-top: .22rem;
					/*margin-bottom: 2rem;*/
					.more{
						font-weight: normal;
						color: #60719D;
						font-size: .32rem;
						display: block;
						vertical-align: bottom;
						text-align: center;
						margin: 0.1rem 0;
					}
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
								margin-bottom: 0.05rem;
								.juli{
									font-size: .24rem;
									float: right;
								}
							}
							.content{
								/*color: #7386AD;*/
								/*font-size: .28rem;*/
								/*margin-top: .1rem;*/
								.free{
									display: inline-block;
									background:linear-gradient(121.4deg,rgba(94,195,255,1),rgba(16,111,227,1));
									border-radius: 2px ; 
									text-align: center;
									color: #fff;
									font-size: 0.24rem;
									padding:2px 5px;
								}
								.return{
									display: inline-block;
									background:linear-gradient(90deg,rgba(255,122,128,1),rgba(255,83,101,1));
									border-radius: 2px ; 
									text-align: center;
									color: #fff;
									font-size: 0.24rem;
									padding:2px 5px;
								}
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
									/*padding-left: .1rem;*/
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
	}
</style>