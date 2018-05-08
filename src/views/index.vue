<template>
	<section id="appIndex">
		<div class="wrapper" ref="wrapper">
			<div class="content">
				<swiper :options="swiperOption" class="swiper">
					<swiper-slide v-for="item in demoList">
						<img :src="item">
					</swiper-slide>
					<div class="swiper-pagination" slot="pagination"></div>
				</swiper>
				<div class="swiperTop">
					<span class="position fl">
						<img src="../assets/images/index/position.png" alt="">
						<span class="city">{{address}}</span>
					</span>
					<div class="search fl" @click="$router.push({path:'/multi_user_mall/search'})">
						<input type="text" placeholder='搜索你想要的' />
						<img src="../assets/images/index/search.png" alt="">
					</div>
				</div>
				<div class="notice">
					<img src="../assets/images/index/notice.png" alt="">
					<swiper :options="noticeOption" class="noticeswiper">
						<swiper-slide v-for="item in num">
							<p class="noticeText">
								<span class="label">活动</span> 厉害了！超强拼假省钱攻略
							</p>
							<p class="noticeText">
								<span class="label">活动</span> 美国人的棚子情节
							</p>
						</swiper-slide>
					</swiper>
				</div>
				<div class="lottery">
					<img src="../assets/images/index/group.png" alt="">
					<div class="info">
						<p class="infoText">
							<img src="../assets/images/index/time.png" alt="" class="fl">
							<span class="core fl">恭喜500人获得<span class="orange">5000元</span>大奖</span>
							<router-link to="/draw/review">
								<span class="past fr">往期</span>
							</router-link>
						</p>
						<div class="avatar">
							<div class="row" v-for="(item,index) in num">
								<div class="persol">
									<img :src="'./static/index/'+index+'.png'" alt="" class="fl">
									<div class="fl">
										<p class="persolName">{{item}}</p>
										<p class="persolPrice">5000元</p>
									</div>
									<div class="clear"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="plate">
					<div class="item" v-for="item in plateList">
						<router-link :to="item.url">
							<div class="b-w">
								<!-- <span style="font-size:20px;">Loading123123</span> -->
								<!-- <x-img :src="item.img" @on-success="success" @on-error="error" class="ximg-demo" error-class="ximg-error" :offset="-100" container=".content"></x-img> -->
								<img v-lazy="item.img" />
								<div>
									<p>{{item.title}}</p>
									<p>{{item.tip}}</p>
								</div>
							</div>
						</router-link>
					</div>
				</div>
				<router-link to="/share">
					<img style="width: 100%;height: auto;display: block;" src="../../static/images/jiam.png" alt="" />
				</router-link>
				<div class="alliance">
					<card>
						<div slot="content" class="card-demo-flex">
							<div class="item" :class="{'vux-1px-r':index != 2}" v-for="(item,index) in allianceList">
								<img :src="item.img" />
								<span>{{item.title}}</span>
							</div>
						</div>
					</card>
				</div>
				<div class="pro-allbox" v-for="item in proList">
					<div class="titlebox">{{item.title}}</div>
					<img style="width: 100%;height: auto;display: block;" :src="item.img" />
					<div class="pro-box">
						<div :class="{'vux-1px-r':index != 2}" v-for="(i,index) in item.pro">
							<p>{{i.name}}</p>
							<p :class="[{'red':i.color == 'red'},{'yollow':i.color == 'yollow'},{'blue':i.color == 'blue'}]">{{i.tip}}</p>
							<img :src="i.img" alt="" />
						</div>
					</div>
					<img style="width: 100%;height: auto;display: block;" v-if="item.twoimg" :src="item.twoimg" alt="" />
				</div>
				<div class="pro-allbox">
					<div class="titlebox">明星商家</div>
					<img style="width: 100%;height: auto;display: block;" src="../../static/images/store1.png" alt="" />
					<div class="store-box">
						<div class="item-box">
							<div>
								<p>屈臣氏</p>
								<p>满100减30</p>
							</div>
							<img src="../../static/images/store2.png" alt="" />
						</div>
						<div class="item-box">
							<div>
								<p>全家</p>
								<p>满20减10</p>
							</div>
							<img src="../../static/images/store3.png" alt="" />
						</div>
						<div class="item-box">
							<div>
								<p>卜蜂莲花</p>
								<p>双日立减5元</p>
							</div>
							<img src="../../static/images/store4.png" alt="" /></div>
						<div class="item-box">
							<div>
								<p>大润发</p>
								<p>双日立减5元</p>
							</div>
							<img src="../../static/images/store5.png" alt="" />
						</div>
					</div>
					<div class="titlebox">
						<span>查看附件商家</span>
					</div>
				</div>
				<!--<div class="pro-allbox">
					<div class="titlebox">猜你喜欢</div>
					<div class="cai-box">
						<div v-for="item in caiList">
							<div class="img-box"><img :src="item.img" alt="" /></div>
							<p class="one">{{item.title}}</p>
							<p class="two">{{item.tip}}</p>
						</div>
					</div>
				</div>-->
			</div>
		</div>
		<div id='container'></div>
	</section>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import { Card } from 'vux'
	import BScroll from 'better-scroll'
	//	import AMap from 'AMap'
	export default {
		data() {
			return {
				num: ['郁先生','孔先生','杨先生','汤女士','朱先生','杜先生','赵先生','尹先生','顾先生','昂女士','金女士','张先生','赵先生','邹先生','张女士'],
				address: '',
				swiperOption: {
					pagination: {
						el: '.swiper-pagination'
					},
					autoplay: true,
					loop: true
				},
				noticeOption: {
					direction: 'vertical',
					autoplay: true,
					loop: true
				},
				caiList: [{
						img: './static/images/cai1.png',
						title: 'VANS Old Skool lite黑白超轻鞋款 黑色38.5',
						tip: '100积分+199.67元'
					},
					{
						img: './static/images/cai2.png',
						title: 'VANS Old Skool lite黑白超轻鞋款 黑色38.5',
						tip: '100积分+199.67元'
					},
					{
						img: './static/images/cai2.png',
						title: 'VANS Old Skool lite黑白超轻鞋款 黑色38.5',
						tip: '100积分+199.67元'
					},
					{
						img: './static/images/cai1.png',
						title: 'VANS Old Skool lite黑白超轻鞋款 黑色38.5',
						tip: '100积分+199.67元'
					},
				],
				demoList: [
					'https://img1.360buyimg.com/da/s750x366_jfs/t17776/179/1756407821/231537/470e3442/5ad9b0a3N5573c82c.jpg!cr_1125x549_0_72.dpg',
					'https://img1.360buyimg.com/da/s750x366_jfs/t17776/179/1756407821/231537/470e3442/5ad9b0a3N5573c82c.jpg!cr_1125x549_0_72.dpg',
					'https://img1.360buyimg.com/da/s750x366_jfs/t17776/179/1756407821/231537/470e3442/5ad9b0a3N5573c82c.jpg!cr_1125x549_0_72.dpg',
					'https://img1.360buyimg.com/da/s750x366_jfs/t17776/179/1756407821/231537/470e3442/5ad9b0a3N5573c82c.jpg!cr_1125x549_0_72.dpg',
					'https://img1.360buyimg.com/da/s750x366_jfs/t17776/179/1756407821/231537/470e3442/5ad9b0a3N5573c82c.jpg!cr_1125x549_0_72.dpg',
					'https://img1.360buyimg.com/da/s750x366_jfs/t17776/179/1756407821/231537/470e3442/5ad9b0a3N5573c82c.jpg!cr_1125x549_0_72.dpg',
					'https://img1.360buyimg.com/da/s750x366_jfs/t17776/179/1756407821/231537/470e3442/5ad9b0a3N5573c82c.jpg!cr_1125x549_0_72.dpg',
					'https://img1.360buyimg.com/da/s750x366_jfs/t17776/179/1756407821/231537/470e3442/5ad9b0a3N5573c82c.jpg!cr_1125x549_0_72.dpg',
				],
				plateList: [{
						title: '邀请有奖',
						tip: '送200信用积分',
						img: './static/images/plate1.png',
						url: '/member/purse/qrcode'
					},
					{
						title: '积分商城',
						tip: '积分任意兑',
						img: './static/images/plate2.png',
						url: '/shop'
					},
					{
						title: '我的钱包',
						tip: '消费增值管理',
						img: './static/images/plate3.png',
						url: '/member/purse/index'
					},
					{
						title: '积分充值',
						tip: '百万豪礼等你来',
						img: './static/images/plate4.png',
						url: '/member/purse/recharge'
					},
				],
				allianceList: [{
						title: '本地服务',
						img: './static/images/alliance1.png'
					},
					{
						title: '本地商圈',
						img: './static/images/alliance2.png'
					},
					{
						title: '加盟合作',
						img: './static/images/alliance3.png'
					},
				],
				proList: [{
						title: '积分热兑',
						img: './static/images/rdui.png',
						pro: [{
								name: '红五千',
								tip: '送给生命中的爱人',
								img: './static/images/pro1.png'
							},
							{
								name: '长城葡萄酒',
								tip: '送给生命中的爱人',
								img: './static/images/pro2.png'
							},
							{
								name: '五粮液',
								tip: '送给生命中的爱人',
								img: './static/images/pro3.png'
							}
						]
					},
					{
						title: '海外购',
						img: './static/images/fq.png',
						pro: [{
								name: 'JAYJUN面膜',
								tip: '樱花三部曲',
								img: './static/images/pro4.png'
							},
							{
								name: '德运脱脂奶粉',
								tip: '到港澳洲进口',
								img: './static/images/pro5.png'
							},
							{
								name: 'JBL 无线音箱',
								tip: '送给生命中的爱人',
								img: './static/images/pro6.png'
							}
						]
					}, {
						title: '千万家庭健康计划',
						img: './static/images/jk.png',
						twoimg: './static/images/wfg.png',
						pro: [{
								name: '立即体验',
								tip: '高品质 良心价',
								img: './static/images/pro7.png',
								color: 'yollow'
							},
							{
								name: '领取优惠券',
								tip: '商家体验卷',
								img: './static/images/pro8.png',
								color: 'red'
							},
							{
								name: '招商加盟',
								tip: '千万家庭健康',
								img: './static/images/pro9.png',
								color: 'blue'
							}
						]
					}, {
						title: '积分购买',
						img: './static/images/jf1.png',
						pro: [{
								name: 'RK 机械键盘',
								tip: '竞技游戏有线键盘',
								img: './static/images/jf2.png'
							},
							{
								name: '斗牛犬音箱',
								tip: '重低音立体声',
								img: './static/images/jf3.png'
							},
							{
								name: 'Polo男士包',
								tip: '轻盈包身大容量',
								img: './static/images/jf4.png'
							}
						]
					}
				]
			}
		},
		created() {
			this.loc()

		},
		mouted() {

		},
		methods: {
			// success (src, ele) {
			//      console.log('success load', src)
			//      const span = ele.parentNode.querySelector('span')
			//      ele.parentNode.removeChild(span)
			//    },
			//    error (src, ele, msg) {
			//      console.log('error load', msg, src)
			//      const span = ele.parentNode.querySelector('span')
			//      span.innerText = 'load error'
			//    },
			loc() {
				var _this = this
				var map, geolocation;
				//加载地图，调用浏览器定位服务
				map = new AMap.Map('container', {
					resizeEnable: true
				});
				map.plugin('AMap.Geolocation', function() {
					geolocation = new AMap.Geolocation({
						enableHighAccuracy: true, //是否使用高精度定位，默认:true
						timeout: 10000, //超过10秒后停止定位，默认：无穷大
					});
					map.addControl(geolocation);
					geolocation.getCurrentPosition();
					AMap.event.addListener(geolocation, 'complete', function(data) {
						_this.address = data.addressComponent.city //返回城市定位
					});
				});
				//				wx.config({
				//					debug: true,
				//					appId: "wx957ff39bdac082af",
				//					timestamp: Date.parse(new Date()),
				//					nonceStr: Math.random().toString(36).substring(2),
				//					signature: "6b3af35b304341aff8b551924b385ce48d20c85b",
				//					jsApiList: ['getLocation']
				//				})
				//				wx.ready(function() {
				//					wx.getLocation({
				//						type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
				//						success: function(res) {
				//							alert(123)
				//							var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
				//							var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
				//							var speed = res.speed; // 速度，以米/每秒计
				//							var accuracy = res.accuracy; // 位置精度
				//							getBaiduPosition(latitude, longitude);
				//						},
				//						cancel: function(res) {
				//							alert('用户拒绝授权获取地理位置');
				//						}
				//					})
				//				})
			}
		},
		components: {
			swiper,
			swiperSlide,
			Card
		},
	}
</script>

<style lang="less" scoped>
	@import '~vux/src/styles/1px.less';
	#appIndex {
		background-color: #F5F6FA;
		overflow-x: hidden;
		padding-bottom: 1rem;
		/*banner顶部*/
		.swiperTop {
			z-index: 1000;
			width: 100%;
			height: 0.88rem;
			line-height: 0.88rem;
			position: absolute;
			top: 0;
			.position {
				margin-left: 0.42rem;
				margin-right: 0.42rem;
				img {
					width: 0.22rem;
					height: 0.28rem;
					vertical-align: middle;
				}
				.city {
					font-size: 0.24rem;
					color: #FFFFFF;
				}
			}
			.search {
				position: relative;
				input {
					width: 4.14rem;
					height: 0.54rem;
					border-radius: 0.27rem;
					background-color: #808080;
					color: #fff;
					padding-left: 0.64rem;
					font-size: 0.24rem;
					opacity: 0.5;
					letter-spacing: 1px;
				}
				input::-webkit-input-placeholder {
					color: #fff;
				}
				input::-moz-placeholder {
					/* Mozilla Firefox 19+ */
					color: #fff;
				}
				input:-moz-placeholder {
					/* Mozilla Firefox 4 to 18 */
					color: #fff;
				}
				input:-ms-input-placeholder {
					/* Internet Explorer 10-11 */
					color: #fff;
				}
				img {
					width: 0.32rem;
					height: 0.32rem;
					position: absolute;
					top: 0.3rem;
					left: 0.24rem;
				}
			}
		}
		/*通告模块*/
		.notice {
			width: 100%;
			height: 0.95rem;
			margin-bottom: 0.2rem;
			background-color: #fff;
			padding-top: 0.15rem;
			padding-left: 0.45rem;
			img {
				float: left;
				width: 0.6rem;
				height: 0.6rem;
				border-right: 1px solid #E1E1E1;
				padding-right: 0.2rem;
			}
		}
		/*抽奖模块*/
		.lottery {
			background-color: #FF9304;
			padding-bottom: 0.1rem;
			img {
				width: 100%;
				height: 2.7rem;
			}
			.info {
				width: 7.3rem;
				margin: 0 auto;
				.infoText {
					width: 100%;
					height: 0.8rem;
					line-height: 0.8rem;
					background-color: #FFF609;
					img {
						width: 0.68rem;
						height: 0.28rem;
						margin-left: 0.54rem;
						margin-top: 0.26rem;
						margin-right: 0.3rem;
					}
					.core {
						margin-top: 0.16rem;
						padding-left: 0.12rem;
						display: inline-block;
						height: 0.5rem;
						line-height: 0.5rem;
						border-left: 1px solid #FF9304;
						font-size: 0.26rem;
						color: #000;
						font-family: PingFangSC-Regular;
						.orange {
							color: #F32D37;
						}
					}
					.past {
						width: 1rem;
						height: 0.5rem;
						background-color: #FF7B11;
						line-height: 0.5rem;
						text-align: center;
						font-size: 0.24rem;
						margin-top: 0.14rem;
						color: #fff;
						margin-right: 0.22rem;
						border-radius: 0.06rem;
					}
				}
			}
			.avatar {
				background-color: #fff;
				display: flex;
				flex-wrap: wrap;
				.row {
					display: flex;
					width: 33.333%;
					height: 1.2rem;
					padding: 0.1rem 0;
					border-bottom: 1px solid #EDEFF3;
					.persol {
						flex: 1;
						border-right: 1px solid #EDEFF3;
						display: flex;
						align-items: center;
						justify-content: center;
						img {
							width: 0.66rem;
							height: 0.66rem;
							border-radius: 50%;
							margin-right: 0.14rem;
						}
						.fl {
							.persolName {
								font-size: 0.24rem;
								line-height: 0.33rem;
								color: #666666;
							}
							.persolPrice {
								font-size: 0.28rem;
								line-height: 0.4rem;
								color: #F84646;
								font-weight: 700;
							}
						}
					}
				}
			}
		}
		/*入口模块*/
		.plate {
			padding: 0.2rem 0.29rem;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			font-family: PingFangSC-Medium;
			.item {
				width: 50%;
				padding: 0.05rem;
				box-sizing: border-box;
				.b-w {
					height: 1.65rem;
					display: flex;
					align-items: center;
					justify-content: center;
					background: rgba(255, 255, 255, 1);
					box-shadow: 0px 2px 4px 0px rgba(144, 162, 199, 0.2);
					img {
						width: 1.2rem;
						height: auto;
						margin-right: 0.1rem;
					}
					p:nth-child(1) {
						font-size: 0.32rem;
						color: rgba(26, 38, 66, 1);
					}
					p:nth-child(2) {
						font-size: 0.24rem;
						color: rgba(144, 162, 199, 1);
					}
				}
			}
		}
		/*联盟模块*/
		.alliance {
			height: 1.2rem;
			.card-demo-flex {
				display: flex;
				padding: 0.4rem;
			}
			.card-demo-flex>.item {
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: center;
				img {
					width: 0.36rem;
					height: auto;
					margin-right: 0.12rem;
				}
				span {
					font-size: 0.28rem;
					color: rgba(26, 38, 66, 1);
				}
			}
		}
		.pro-allbox {
			.cai-box {
				display: flex;
				flex-wrap: wrap;
				div {
					width: 50%;
					background-color: white;
					padding: 0.31rem 0.23rem;
					box-sizing: border-box;
					.img-box {
						width: 2.4rem;
						height: 2.75rem;
						margin: 0 auto;
						display: flex;
						align-items: center;
						justify-content: center;
						img {
							width: 100%;
							height: auto;
						}
					}
					.one {
						font-size: 0.24rem;
						font-family: PingFangSC-Regular;
						color: rgba(26, 38, 66, 1);
						margin-top: 0.18rem;
					}
					.two {
						font-size: 0.32rem;
						font-family: PingFangSC-Semibold;
						color: rgba(242, 48, 48, 1);
						margin-top: 0.26rem;
					}
				}
			}
			/*标题*/
			.titlebox {
				height: 1.02rem;
				line-height: 1.02rem;
				text-align: center;
				background-color: white;
				font-size: 0.38rem;
				font-family: PingFangSC-Regular;
				color: rgba(26, 38, 66, 1);
				margin-top: 0.2rem;
				span {
					font-size: 0.28rem;
					font-family: PingFangSC-Regular;
					color: rgba(119, 119, 119, 1);
				}
			}
			.look {
				margin-top: 0!important;
			}
			/*商品*/
			.pro-box {
				display: flex;
				background: white;
				div {
					flex: 1;
					text-align: center;
					font-family: PingFangSC-Regular;
					box-sizing: border-box;
					p:nth-child(1) {
						font-size: 0.32rem;
						color: rgba(26, 38, 66, 1);
						margin-bottom: 0.09rem;
						margin-top: 0.3rem;
					}
					p:nth-child(2) {
						font-size: 0.24rem;
						color: rgba(144, 162, 199, 1);
						margin-bottom: 0.14rem;
					}
					.yollow {
						width: 1.67rem;
						height: 0.39rem;
						line-height: 0.39rem;
						background: rgba(245, 166, 35, 1);
						border-radius: 2px;
						margin: 0 auto;
						color: white!important;
					}
					.red {
						width: 1.67rem;
						height: 0.39rem;
						line-height: 0.39rem;
						background: rgba(242, 48, 48, 1);
						border-radius: 2px;
						margin: 0 auto;
						color: white!important;
					}
					.blue {
						width: 1.67rem;
						height: 0.39rem;
						line-height: 0.39rem;
						background: rgba(39, 135, 253, 1);
						border-radius: 2px;
						margin: 0 auto;
						color: white!important;
					}
					img {
						width: 1.5rem;
						height: auto;
					}
				}
			}
			.store-box {
				display: flex;
				flex-wrap: wrap;
				.item-box {
					width: 50%;
					height: 1.49rem;
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 0 0.2rem;
					box-sizing: border-box;
					background: white;
					position: relative;
					div {
						p:nth-child(1) {
							font-size: 0.28rem;
							color: rgba(26, 38, 66, 1);
							font-family: PingFangSC-Medium;
						}
						p:nth-child(2) {
							font-size: 0.24rem;
							font-family: PingFangSC-Regular;
							color: rgba(144, 162, 199, 1);
							margin-top: 0.08rem;
						}
					}
					img {
						width: 1.59rem;
						height: 1.21rem;
						display: block;
					}
				}
				.item-box:before {
					content: " ";
					position: absolute;
					right: 0;
					top: 0;
					width: 1px;
					bottom: 0;
					border-right: 1px solid #C7C7C7;
					color: #C7C7C7;
					-webkit-transform-origin: 100% 0;
					transform-origin: 100% 0;
					-webkit-transform: scaleX(0.5);
					transform: scaleX(0.5);
				}
				.item-box:after {
					content: " ";
					position: absolute;
					left: 0;
					top: 0;
					right: 0;
					height: 1px;
					border-top: 1px solid #C7C7C7;
					color: #D9D9D9;
					-webkit-transform-origin: 0 0;
					transform-origin: 0 0;
					-webkit-transform: scaleY(0.5);
					transform: scaleY(0.5);
					left: 0px;
				}
			}
		}
	}
</style>

<style lang='less'>
	#appIndex {
		/*banner轮播*/
		.swiper {
			height: 3.36rem;
			img {
				width: 100%;
				height: 3.36rem;
			}
			.swiper-pagination-bullet {
				background: #fff!important;
				width: 8px;
				height: 2px!important;
			}
			.swiper-pagination-bullet-active {
				margin: -2px 4px!important;
				height: 4px!important;
				width: 4px!important;
				background-color: transparent!important;
				border: 2px solid #fff;
				border-radius: 50%;
			}
		}
		.noticeswiper {
			height: 1.1rem;
			padding-left: 0.38rem;
			.noticeText {
				margin-bottom: 0.05rem;
				font-size: 0.24rem;
				color: #90A2C7;
				.label {
					width: 0.56rem;
					margin-right: 0.2rem;
					display: inline-block;
					border-radius: 2px;
					border: 2px solid #F23030;
					padding: 0.02rem 0;
					text-align: center;
					font-size: 0.2rem;
					color: #F23030;
				}
			}
		}
	}
</style>