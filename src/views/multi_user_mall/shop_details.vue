<template>
	<section class="shop_details_box">
		<x-header :left-options="{backText: '',preventGoBack: true}" title="slot:overwrite-title" style="background:#fff;" @on-click-back="changeBack" class="tab_shop">
			<div class="overwrite-title-demo" slot="overwrite-title">
				<tab bar-position="bottom" custom-bar-width="40px">
					<tab-item :selected="tabTitle == '商品'" @on-item-click="onShop">商品</tab-item>
					<tab-item :selected="tabTitle == '详情'" @on-item-click="scrollTo">详情</tab-item>
					<tab-item :selected="tabTitle == '评价'" @on-item-click="pj">评价</tab-item>
				</tab>
			</div>
		</x-header>

		<div v-if="tabTitle == '评价'" style="background: #fff;height: 100%;">
			<comments></comments>
		</div>

		<div style="margin-top: 46px;" v-else>
			<div class="shopImg">
    			<swiper :options="swiperOption" class="imgBox">
			       	<swiper-slide v-for="(item,index) in shopImg" :key="index">
			       		<div class="imgBox-item">
                        	<img class="previewer-demo-img" v-lazy="item.src" @click="show(index)">
			       		</div>
			       	</swiper-slide>
			    </swiper> 
    		</div>
			<div class="shop_content">
				<div class="shop">
					<div class="shop_title">
						<p>灯火阑珊长隆旁地铁宜家瑞典田园304房</p>
						<div>
							<span>免费WiFi</span>
							<span>空调热水器</span>
							<span>免押金</span>
							<span>智能门锁</span>
							<span>有早餐</span>
						</div>
					</div>
					<div class="shop-f">
						<div class="shop_left">
							<p class="shopPrice">
								<span class="priceNum">￥3598</span>
							</p>
						</div>
						<div class="shop_right">
							<div class="shop_collection" @click="collection">
								<img v-lazy="collectImg"><br>
								<span>{{ collectText}}</span>
							</div>
							<div class="shop_share" @click="showShareDialog">
								<img src="../../assets/images/shop/share.png"><br>
								<span>分享</span>
							</div>
						</div>
					</div>
				</div>

				<div class="shop_cell">
					<group :gutter="0">
						<cell title="店铺名" is-link :border-intent="false">
							<div class="cell_item" @click="$router.push({path: '/multi_user_mall'})">
								<img src="../../assets/images/shop/UNIQLO.png">
								<span>长隆主题酒店式公寓</span>
							</div>
						</cell>
						<cell title="支付方式" :border-intent="false">
							<div class="pr">积分加现金</div>
						</cell>
					</group>

					<div class="comments">
						<div class="comments_title">商品评价</div>
						<div class="comments_details">
							<div class="comments_author">
								<img src="../../assets/images/shop/photo.png">
								<span class="name">陈独秀</span>
							</div>

							<div>很好很好,裤子正好,还要弹性。</div>
							<div class="comments_date">2018.03.30 颜色:蓝色; 尺码:170/92A/M</div>
						</div>

						<div class="comments_btn" @click="view">查看全部评价</div>
					</div>
				</div>
			</div>

			<div class="details" id="lockDetails">
				<div class="title1">房间详情</div>
				<div class="cardlist-popup">
					<div class="pd">
						<div class="tip-box tip-af">
							<p class="title">酒店条件</p>
							<div class="tip-text">
								<div class="one-item" v-for="(item, index) in tips" :key="index">
									<span>{{item.one}}</span>
									<span>{{item.two}}</span>
								</div>
							</div>
						</div>
						<div class="tip-box tip-af">
							<p class="title">退款规则</p>
							<div class="tip-text">
								<p>订单确认后不可取消/变更，如未入住，酒店将扣除全额房费</p>
							</div>
						</div>
						<div class="tip-box">
							<p class="title">购买数量</p>
							<div class="tip-text">
								<p>直接消费，请携带入住人身份证，凭姓名和预定手机号直接办理入住</p>
								<p>请在10:00之后并于次日13：00之前退房；如需提前入住或延时退房，请咨询商家</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="footer">
			<div class="footer_icon" @click="showToast">
				<img src="../../assets/images/shop/customer.png"><br>
				<span>客服</span>
			</div>
			<div class="footer_icon" @click="goShopcart">
				<img src="../../assets/images/shop/cart.png">
				<badge text="12"></badge><br>
				<span>购物车</span>
			</div>
			<div class="footer-btn btn_green" @click="navigation">导航</div>
			<div class="footer-btn btn_blue" @click="goConfirm">立即购买</div>
		</div>

		<div v-transfer-dom class="shareDialog">
			<x-dialog v-model="showDialog" :hide-on-blur="true">
				<div class="dialogs">
					<img src="../../assets/images/shop/rightShare.png" class="right">
					<div class="clear"></div>
					<div class="btn" @click="hideDialog">我知道了</div>
				</div>
			</x-dialog>
		</div>

		<!--购买确认页-->
		<div v-transfer-dom>
			<popup v-model="showsure" height="100%" position="bottom">
				<div class="sure-popup">
					<img @click="showsure = false" class="gbi" src="../../assets/images/lock/gbi@2x.png" alt="" />
					<div class="spec">
						<img src="../../assets/images/lock/Bitmap@2x.png" />
						<div>
							<p class="price">¥190</p>
							<p class="num">仅剩52间</p>
							<p class="ge">已选 : {{layText}}</p>
							<p class="time">入住时间 ：{{inTime?inTime:inDate}}</p>
						</div>
					</div>
					<div class="time-box">
						<p>选择入住时间 :</p>
						<div>
							<inline-calendar ref="calendar" class="inline-calendar-demo" disable-past v-model="inTime"></inline-calendar>
						</div>
					</div>
					<div class="lay-box">
						<p>选择房间类型 :</p>
						<div class="lay-item">
							<div v-for="(item,index) in layList" :key="index" @click="choicelay(index,item)"><span :class="{'layactive':layIndex == index}">{{item}}</span></div>
						</div>
					</div>
					<div class="add-btn" @click="purchase">立即购买</div>
				</div>
			</popup>
		</div>

		<div v-transfer-dom>
	        <previewer :list="shopImg" ref="previewer" :options="options" @on-index-change="logIndexChange"></previewer>
	    </div>
	</section>
</template>

<script>
	import comments from './components/comments'
	import { XDialog, Actionsheet, InlineCalendar, Popup } from 'vux'
	import {swiper,swiperSlide } from 'vue-awesome-swiper'
	import 'swiper/dist/css/swiper.css'
	export default {
		components: {
			comments,
			XDialog,
			Actionsheet,
			InlineCalendar,
			Popup,
			swiper,swiperSlide
		},
		data() {
			return {
				tabTitle: '商品',
				obj: null,
				collectImg: './static/shop/collection.png',
				collectText: '收藏',
				showDialog: false,
				showsure: false,
				inTime: '', //入住时间
				layText: '标准房', //房间名字
				layIndex: 0, //房型index
				content: ['请选择尺码'],
				router: '',
				layList: ['标准房', '双人房', '总统套房', '贵宾房', '地下室', '情侣房'],
				tips: [{
					one: '上网',
					two: 'wifi'
				}, {
					one: '卫浴',
					two: '独立'
				}, {
					one: '窗户',
					two: '有'
				}, {
					one: '可住',
					two: '两人'
				}, {
					one: '早餐',
					two: '无'
				}],
				reclist: ['分钟房', '钟点房', '包月住宿', '单日住宿', '三日住宿'],
				startDate: '请选择入住时间',
				formatValueFunction(val) {
					return val.replace(/-/g, '$')
				},
				val1: '请选择房间类型',
				showrec: false,
				swiperOption: {
					autoHeight: true,
		        },
		        shopImg:[
		        	{	msrc: 'https://m.360buyimg.com/mobilecms/s750x366_jfs/t18775/221/1737433669/102730/f366197/5ad58a68N264b153b.jpg!cr_1125x549_0_72!q70.jpg.dpg',src: 'https://m.360buyimg.com/mobilecms/s750x366_jfs/t18775/221/1737433669/102730/f366197/5ad58a68N264b153b.jpg!cr_1125x549_0_72!q70.jpg.dpg'
				    },
				    {	msrc: 'https://img20.360buyimg.com/da/jfs/t18169/49/1676902787/199684/abf88174/5ad405d6N903b6152.jpg.webp',src: 'https://img20.360buyimg.com/da/jfs/t18169/49/1676902787/199684/abf88174/5ad405d6N903b6152.jpg.webp'
				    },
				    {	msrc: 'https://m.360buyimg.com/mobilecms/s750x366_jfs/t17776/57/1707882480/210974/217399d5/5ad6b797N78d99799.jpg!cr_1125x549_0_72!q70.jpg.dpg',src: 'https://m.360buyimg.com/mobilecms/s750x366_jfs/t17776/57/1707882480/210974/217399d5/5ad6b797N78d99799.jpg!cr_1125x549_0_72!q70.jpg.dpg'
				    }
		        ],
		        options: {
			        getThumbBoundsFn (index) {
			          let thumbnail = document.querySelectorAll('.previewer-demo-img')[index]
			          let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
			          let rect = thumbnail.getBoundingClientRect()
			          return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
			        }
		      	}
			}
		},
		create: function() {},
		mounted() {
			this.onRouter();
			let top = parseInt(document.getElementById('lockDetails').offsetTop);
			this.obj = top -47;
		},
		computed: {
			inDate() {
				var date = new Date()
				return date.toLocaleDateString()
			}
		},
		methods: {
			purchase() {
				this.showsure = false
				this.$router.push({
					path: '/shop/confirm'
				})
			},

			choicelay(index, item) {
				this.layIndex = index
				this.layText = item
			},
			showMask: function() {
				this.$refs.sp.show1 = true;
			},
			onRouter() {
				if(this.$route.params.title != null && this.$route.params != null) {
					this.tabTitle = this.$route.params.title;
					window.scrollTo(0, 0);
				}
			},
			onShop() {
				this.tabTitle = '商品'
				window.scrollTo(0, 0);
			},
			scrollTo() {
				this.tabTitle = '详情';
				var that = this;
				window.setTimeout(function() {
					let top = parseInt(document.getElementById('lockDetails').offsetTop);
					console.log('--scrollTo', document.getElementById('lockDetails'))
					that.obj = top - 47;
					window.scrollTo(0, that.obj);
					console.log('',that.obj)
				}, 200)
			},
			pj() {
				this.tabTitle = '评价';
				window.scrollTo(0, 0);
			},
			view() {
				this.tabTitle = '评价';
				window.scrollTo(0, 0);
			},
			goShopcart() {
				this.$router.push({
					path: '/shop/shop_cart'
				})
			},
			navigation() {
				var marker = new AMap.Marker({
					position: [113.370196,22.979898]
				})

				marker.markOnAMAP({
					position: marker.getPosition(),
					name: '广州市番禺区天安科技园' //name属性在移动端有效
				})
			},
			goConfirm() {
				this.showsure = true
			},
			changeBack() {
				this.$store.state.vux.back = false;
				this.$router.go(-1)
			},
			collection() {
				if(this.collectImg == './static/shop/collection.png') {
					this.collectImg = './static/shop/collectAction.png'
					this.collectText = '已收藏'
				} else {
					this.collectImg = './static/shop/collection.png'
					this.collectText = '收藏'
				}
			},
			showShareDialog() {
				this.showDialog = true;
			},
			hideDialog() {
				this.showDialog = false;
			},
			confirm() {
				if(this.$refs.sp.router != 'shop_cart') {
					this.content = this.$refs.sp.list3;
					let num = 'x' + this.$refs.sp.num
					this.content.push(num)
					this.$refs.sp.show1 = false;
				}
				if(this.$refs.sp.router == 'goShopcart') {
					this.$router.push({
						path: '/shop/shop_cart'
					})
				}
			},
			recclick(val) {
				this.val1 = this.reclist[val]
			},
			show(index) {
	        	console.log('-=-=', index)
	        	console.log(this.$refs.previewer);
	          	this.$refs.previewer.show(index)
	        },
	        logIndexChange (arg) {
	          	console.log(arg)
	        },
	        showToast(){
	        	this.$vux.toast.show({
	        		text: '暂无客服功能',
	        		type: 'text',
	        		width: '10em',
	        		position: 'middle'
	        	})
	        },
		}
	}
</script>

<style lang="less" scoped>
	.shopImg{
		margin-top: 0.92rem;
		width: 100%;
		height: 3.66rem;
		line-height: 3.66rem;
		img{
			width: 100%;
			display: inline-block; 
			vertical-align: middle;
		}
	}
	.sure-popup {
		height: 100%;
		padding: 0.3rem 0.38rem;
		background-color: white;
		box-sizing: border-box;
		position: relative;
		.gbi {
			position: absolute;
			right: 0.3rem;
			top: 0.3rem;
			width: 0.42rem;
			height: 0.42rem;
		}
		.lay-box {
			position: relative;
			padding: 0.25rem 0;
			p {
				font-size: 0.28rem;
				font-family: PingFangSC-Regular;
				color: rgba(26, 38, 66, 1);
				margin-bottom: 0.2rem;
			}
			.lay-item {
				display: flex;
				flex-wrap: wrap;
				div {
					width: 20%;
					height: 0.57rem;
					line-height: 0.57rem;
					text-align: center;
					margin-bottom: 0.3rem;
					span {
						display: inline-block;
						text-align: center;
						background: rgba(245, 246, 250, 1);
						border-radius: 4px;
						font-size: 0.24rem;
						width: 90%;
						margin: 0 auto;
						transition: all 0.2s linear;
					}
					.layactive {
						color: white;
						background-color: #336FFF;
					}
				}
			}
		}
		.add-btn {
			height: 0.88rem;
			line-height: 0.88rem;
			background: rgba(51, 111, 255, 1);
			font-size: 0.28rem;
			text-align: center;
			font-family: MicrosoftYaHei;
			color: rgba(255, 255, 255, 1);
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
		}
		.lay-box:before {
			content: " ";
			position: absolute;
			left: 0;
			top: 0;
			right: 0;
			height: 1px;
			border-top: 1px solid #D9D9D9;
			color: #D9D9D9;
			-webkit-transform-origin: 0 0;
			transform-origin: 0 0;
			-webkit-transform: scaleY(0.5);
			transform: scaleY(0.5);
			left: 0px;
		}
		.time-box {
			padding-top: 0.2rem;
			p {
				font-size: 0.28rem;
				font-family: PingFangSC-Regular;
				color: rgba(26, 38, 66, 1);
				margin-bottom: 0.2rem;
			}
			div {
				padding-bottom: 0.25rem;
			}
		}
		.spec {
			display: flex;
			align-items: center;
			img {
				width: 1.9rem;
				height: 1.9rem;
				margin-right: 0.3rem;
			}
			div {
				height: 1.9rem;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.price {
					font-size: 0.32rem;
					font-family: PingFangSC-Medium;
					color: rgba(242, 48, 48, 1);
				}
				.num {
					font-size: 0.28rem;
					font-family: PingFangSC-Regular;
					color: rgba(144, 162, 199, 1);
				}
				.ge,
				.time {
					font-size: 0.28rem;
					font-family: PingFangSC-Regular;
					color: rgba(26, 38, 66, 1);
				}
			}
		}
	}
	
	.shop_details_box {
		height: 100%;
		width: 100%;
		background: #F5F6FA;
		.shop_content {
			background: #FFF;
			.shop {
				width: 93.5%;
				font-size: 0.32rem;
				color: #1A2642;
				word-wrap: break-word;
				word-break: normal;
				padding-top: 0.2rem;
				margin: 0 auto;
				.shop_title {
					font-family: PingFangSC-Regular;
					p {
						margin-bottom: ;
					}
					span {
						font-size: 0.22rem;
						color: rgba(115, 134, 173, 1);
						margin-right: 0.1rem;
					}
				}
				.shop-f {
					display: flex;
					align-items: center;
					.shop_left {
						width: 50%;
						margin: 0.31rem 0;
						font-size: 0.24rem;
						color: #90A2C7;
						.priceNum {
							display: inline-block;
							font-size: 0.32rem;
							color: #F23030;
							font-weight: 700;
							vertical-align: middle;
						}
					}
					.shop_right {
						width: 50%;
						margin: 0.31rem 0;
						font-size: 0.2rem;
						color: #90A2C7;
						img {
							width: 47%;
						}
						.shop_share {
							float: right;
							border-right: 1px solid #90A2C7;
						}
						.shop_collection {
							float: right;
							text-align: center;
							padding-left: 0.27rem;
							span {
								text-align: center;
							}
						}
					}
				}
			}
			.shop_cell {
				width: 100%;
				clear: both;
				background: #F5F6FA;
				.vue_label {
					font-size: 0.28rem;
					font-family: PingFangSC-Regular;
					color: rgba(144, 162, 199, 1);
				}
				.cell_item {
					img {
						width: 0.36rem;
						height: 0.36rem;
						vertical-align: middle;
					}
				}
				.time {
					font-size: 0.28rem;
					display: flex;
					justify-content: flex-end;
				}
				.comments {
					background: #FFF;
					margin-top: 0.2rem;
					border-bottom: 0.2rem solid #F5F8F9;
					font-size: 0.28rem;
					padding-left: 0.19rem;
					padding-bottom: 0.32rem;
					color: #1A2642;
					.comments_title {
						padding-top: 0.25rem;
						margin-bottom: 0.3rem;
					}
					.comments_details {
						font-size: 0.24rem;
						.comments_author {
							margin-bottom: 0.23rem;
							img {
								float: left;
								width: 8.5%;
								margin-right: 0.18rem;
							}
							.name {
								color: #90A2C7;
								line-height: 0.65rem;
							}
						}
						.comments_date {
							margin-top: 0.08rem;
							color: #90A2C7;
							margin-bottom: 0.41rem;
						}
					}
					.comments_btn {
						width: 2.4rem;
						margin: 0 auto;
						border: 0.02rem solid #336FFF;
						border-radius: 0.1rem;
						text-align: center;
						color: #336FFF;
						font-size: 0.28rem;
						padding: 0.05rem 0 0 0;
					}
				}
			}
		}
		.details {
			background: #FFF;
			padding-bottom: 1rem;
			.title1 {
				font-size: 0.32rem;
				color: #666666;
				text-align: center;
				padding: 0.3rem 0;
				position: relative;
			}
			.title1:after {
				content: " ";
				position: absolute;
				left: 0;
				bottom: 0;
				right: 0;
				height: 1px;
				border-top: 1px solid #D9D9D9;
				color: #D9D9D9;
				-webkit-transform-origin: 0 0;
				transform-origin: 0 0;
				-webkit-transform: scaleY(0.5);
				transform: scaleY(0.5);
				left: 0px;
			}
			.cardlist-popup {
				background-color: white;
				position: relative;
				.pd {
					padding: 0.3rem 0.38rem 0 0.38rem;
				}
				.gb {
					position: absolute;
					right: 0.38rem;
					top: 0.24rem;
					width: 0.42rem;
					height: 0.42rem;
					z-index: 1111;
				}
				.list-item {
					display: flex;
					align-items: center;
					height: 2.11rem;
					position: relative;
					.left {
						width: 1.8rem;
						padding-right: 0.26rem;
						overflow: hidden;
						img {
							width: 100%;
							height: auto;
						}
					}
					.right {
						flex: 1;
						font-family: PingFangSC-Medium;
						p:nth-child(1) {
							font-size: 0.32rem;
							color: rgba(242, 48, 48, 1);
						}
						p:nth-child(2) {
							font-size: 0.28rem;
							color: rgba(144, 162, 199, 1);
							margin: 0.04rem 0;
						}
						p:nth-child(3) {
							font-size: 0.28rem;
							color: rgba(26, 38, 66, 1);
						}
					}
				}
				.tip-box {
					padding: 0.19rem 0;
					position: relative;
					.title {
						font-size: 0.28rem;
						color: rgba(26, 38, 66, 1);
					}
					.tip-text {
						margin-top: 0.33rem;
						display: flex;
						flex-wrap: wrap;
						font-size: 0.24rem;
						.one-item {
							width: 50%;
							margin-bottom: 0.13rem;
							span:nth-child(1) {
								color: rgba(115, 134, 173, 1);
								margin-right: 0.22rem;
							}
							span:nth-child(2) {
								color: rgba(26, 38, 66, 1);
							}
						}
						p {
							color: rgba(115, 134, 173, 1);
							margin-bottom: 0.11rem;
						}
					}
				}
				.tip-af :after {
					content: " ";
					position: absolute;
					left: 0;
					bottom: 0;
					right: 0;
					height: 1px;
					border-top: 1px solid #D9D9D9;
					color: #D9D9D9;
					-webkit-transform-origin: 0 0;
					transform-origin: 0 0;
					-webkit-transform: scaleY(0.5);
					transform: scaleY(0.5);
					left: 0px;
				}
				.list-item :after {
					content: " ";
					position: absolute;
					left: 0;
					bottom: 0;
					right: 0;
					height: 1px;
					border-top: 1px solid #D9D9D9;
					color: #D9D9D9;
					-webkit-transform-origin: 0 0;
					transform-origin: 0 0;
					-webkit-transform: scaleY(0.5);
					transform: scaleY(0.5);
					left: 0px;
				}
			}
			.list-box {
				position: relative;
				padding: 0 0.24rem;
				background-color: white;
				.list-item {
					display: flex;
					align-items: center;
					height: 2.11rem;
					.left {
						width: 1.8rem;
						padding-right: 0.26rem;
						overflow: hidden;
						img {
							width: 100%;
							height: auto;
						}
					}
					.right {
						flex: 1;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						div:nth-child(1) {
							display: flex;
							align-items: center;
							justify-content: space-between;
							font-family: PingFang-SC-Bold;
							span:nth-child(1) {
								font-size: 0.28rem;
								color: rgba(26, 38, 66, 1);
							}
							span:nth-child(2) {
								font-size: 0.26rem;
								color: rgba(51, 111, 255, 1);
							}
						}
						p {
							font-size: 0.24rem;
							color: rgba(115, 134, 173, 1);
							margin-bottom: 0.37rem;
						}
						.bo {
							img {
								width: 0.25rem;
								height: 0.25rem;
							}
							font-size: 0.24rem;
							color:rgba(144, 162, 199, 1);
						}
					}
				}
			}
		}
		.footer {
			position: fixed;
			bottom: 0;
			width: 100%;
			height: 1rem;
			background: #FFF;
			border-top: 0.01rem solid #eeeeee;
			.footer_icon {
				box-sizing: border-box;
				width: 18%;
				float: left;
				font-size: 0.2rem;
				color: #7386AD;
				text-align: center;
				border-right: 0.01rem solid #eeeeee;
				margin: auto;
				padding-top: 0.16rem;
				padding-bottom: 0.09rem;
				img {
					width: 30%;
				}
			}
			.footer-btn {
				width: 32%;
				height: 100%;
				line-height: 1rem;
				text-align: center;
				font-size: 0.32rem;
				color: #FFFFFF;
				float: left;
				/*padding: 0.26rem 0 0.29rem 0;*/
			}
			.btn_green {
				background: #00DB83;
			}
			.btn_blue {
				background: #336FFF;
			}
		}
	}
	
	.dialogs {
		width: 100%;
		padding-top: 1.28rem;
		img {
			width: 3.33rem;
		}
		.right {
			float: right;
			margin-right: 0.41rem;
		}
		.btn {
			width: 3.32rem;
			height: 1.15rem;
			border-radius: 0.32rem;
			background-color: rgba(255, 255, 255, 0);
			color: #fff;
			border: 1px solid #fff;
			font-size: 0.32rem;
			margin: auto;
			text-align: center;
			line-height: 1.15rem;
			letter-spacing: 0.08rem;
			margin-top: 85%;
		}
	}
</style>

<style lang="less">
	.shareDialog {
		.weui-mask {
			z-index: 100;
		}
		.weui-dialog {
			background-color: rgba(255, 255, 255, 0);
			width: 100%;
			height: 100%;
			max-width: 100%;
		}
	}
	
	.shop_cell .weui-cell {
		padding: 0.3rem 15px;
	}
	
	.shop_cell .weui-cells:before {
		border-top: 1px solid #D8DFF0;
	}
	
	.shop_cell .weui-cell:before {
		border-top: 1px solid #D8DFF0;
	}
	
	.shop_cell .vux-label {
		color: #90A2C7;
		font-size: 0.28rem;
	}
	
	.shop_cell .weui-cell__ft {
		font-size: 0.28rem;
		color: #1A2642;
	}
	/*.shop_cell .weui-cell_access .weui-cell__ft {
		padding-right: 0.79rem;
	}*/
	/*.shop_cell .weui-cell_access .weui-cell__ft:after {
		right: 0.45rem;
		border-color: #90A2C7;
	}*/
	
	.shop_cell .weui-cells:after {
		border-bottom: 0.01rem solid #F5F6FA;
	}
	
	.shop_cell .vux-no-group-title {
		margin-top: 0.22rem;
	}
	
	.shop_details_box .vux-header .vux-header-left .left-arrow:before {
		border: 1px solid #222;
		border-width: 1px 0 0 1px;
	}
	
	.shop_details_box.vux-header .vux-header-title {
		color: #333;
	}
	
	.shop_details_box .vux-header {
		position: fixed!important;
		top: 0;
		width: 100%;
		z-index: 111;
	}
	
	.tab_shop .vux-tab-ink-bar {
		bottom: 4px;
	}
	
	.footer .vux-badge {
		position: absolute;
		border-radius: 0.3rem;
		left: 28%;
		top: 6%;
	}
</style>