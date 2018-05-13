<template>
	<div class="lockcard-box">
		<settingHeader :title="title"></settingHeader>
		<div class="card-list">
			<div class="wrapper" ref="wrapper" :class="{'top46':hShow == false}">
				<div class="content">
					<div class="pro-box" v-if="list.length>0">
						<div class="card-item" v-for="item in list" @click="showCode(item)">
							<div class="title">
								<span>{{item.store}}</span>
								<span>导航</span>
							</div>
							<div class="content" :style="{background: 'url('+ item.bg +') no-repeat',backgroundSize:'100%'}">
								<div class="one">
									<span>房间号</span>
									<span>{{item.num}} <i>({{item.l}}楼)</i></span>
								</div>
								<div class="two">
									<span>有效期</span>
									<span>{{item.time}}</span>
								</div>
								<div class="three">
									<span>状态</span>
									<span>{{item.status}}</span>
								</div>
							</div>
						</div>
						<Loading v-if="show"> </Loading>
					</div>
					<div class="card-nullbox" v-else>
						<div class="img-box">
							<img src="../../assets/images/lock/sleep01@2x.png" />
							<p>暂无房卡</p>
						</div>
						<div class="tj-pro">
							<div class="tip">附件酒店</div>
							<div class="pro-list">
								<div class="item" @click="$router.push({path:'/multi_user_mall/shop_details'})">
									<div class="pro-img">
										<img src="../../assets/images/lock/jd.png" />
									</div>
									<div class="pl">
										<p class="name">皇冠高级房钟点房</p>
										<p class="price">¥90</p>
										<div class="stro">
											<span class="oldprice">¥150</span>
											<span>仅剩47</span>
										</div>
									</div>
								</div>
								<div class="item">
									<div class="pro-img">
										<img src="../../assets/images/lock/jd.png" />
									</div>
									<div class="pl">
										<p class="name">皇冠高级房钟点房</p>
										<p class="price">¥90</p>
										<div class="stro">
											<span class="oldprice">¥150</span>
											<span>仅剩47</span>
										</div>
									</div>
								</div>
								<div class="item">
									<div class="pro-img">
										<img src="../../assets/images/lock/jd.png" />
									</div>
									<div class="pl">
										<p class="name">皇冠高级房钟点房</p>
										<p class="price">¥90</p>
										<div class="stro">
											<span class="oldprice">¥150</span>
											<span>仅剩47</span>
										</div>
									</div>
								</div>
								<div class="item">
									<div class="pro-img">
										<img src="../../assets/images/lock/jd.png" />
									</div>
									<div class="pl">
										<p class="name">皇冠高级房钟点房</p>
										<p class="price">¥90</p>
										<div class="stro">
											<span class="oldprice">¥150</span>
											<span>仅剩47</span>
										</div>
									</div>
								</div>
							</div>
							<Loading v-if="show"> </Loading>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!--房卡二维码-->
		<div v-transfer-dom>
			<x-dialog v-model="showModel" class="dialog-demo" hide-on-blur>
				<div class="model-box">
					<p class="tip">无法开锁?</p>
					<div class="item-con">
						<p class="title">长隆欢乐酒店</p>
						<div>
							<span>9楼</span><span>905房</span>
						</div>
					</div>
					<img class="card-code" src="../../assets/images/lock/qcode.png"></img>
					<div class="bottom">
						<p>摇一摇或者点击二维码刷新</p>
						<p>2018.04.25 21:10:00</p>
						<p>2018.04.25 21:20:00</p>
					</div>
				</div>
			</x-dialog>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import Loading from '../../components/loading'
	import { XDialog } from 'vux'
	import settingHeader from '../../components/setting_header'
	export default {
		data() {
			return {
				title: '我的房卡',
				show: false,
				hShow: '',
				showModel: false,
				list: [
//				{
//						num: '308',
//						l: '3',
//						time: '2018.04.27-2018.04.29',
//						status: '生效中',
//						store: '长隆欢乐酒店',
//						bg: './static/lock/Bitmap@2x.png'
//					},
//					{
//						num: '521',
//						l: '5',
//						time: '2018.04.27-2018.04.29',
//						status: '已过期',
//						store: '维也纳连锁酒店',
//						bg: './static/lock/Group@2x.png'
//					}, {
//						num: '308',
//						l: '3',
//						time: '2018.04.27-2018.04.29',
//						status: '生效中',
//						store: '长隆欢乐酒店',
//						bg: './static/lock/Bitmap@2x.png'
//					},
//					{
//						num: '521',
//						l: '5',
//						time: '2018.04.27-2018.04.29',
//						status: '已过期',
//						store: '维也纳连锁酒店',
//						bg: './static/lock/Group@2x.png'
//					},
				]
			}
		},
		created() {
			//判断是否微信端
			var ua = navigator.userAgent.toLowerCase();
			var isWeixin = ua.indexOf('micromessenger') != -1;
			if(isWeixin) {
				this.hShow = true;
			} else {
				this.hShow = false;
			}
		},
		mounted() {
			this.InitScroll()
		},
		methods: {
			showCode(item) {
				console.log(item)
				this.showModel = true
			},
			InitScroll() {
				let _this = this
				this.$nextTick(() => {
					if(!this.scroll) {
						this.scroll = new BScroll(this.$refs.wrapper, {
							click: true,
							scrollY: true,
							pullUpLoad: {
								threshold: -30, // 负值是当上拉到超过低部 70px；正值是距离底部距离 时，                    
							}
						})
						this.scroll.on('pullingUp', (pos) => {
							this.show = true
							this.loadData()
							this.$nextTick(function() {
								this.scroll.finishPullUp();
								this.scroll.refresh();
							})

							setTimeout(function() {
								_this.show = false
							}, 1500)
						})
					} else {
						this.scroll.refresh()
					}
				})

			},
			loadData(){
				
			}
		},
		components: {
			settingHeader,
			XDialog,
			Loading
		}
	}
</script>

<style lang="less" scoped>
	.model-box {
		padding: 0.3rem;
		box-sizing: border-box;
		font-family: PingFangSC-Medium;
		.tip {
			color: rgba(144, 162, 199, 1);
			text-align: right;
			font-size: 0.24rem;
		}
		.item-con {
			text-align: left;
			color: rgba(26, 38, 66, 1);
			.title {
				font-size: 0.4rem;
			}
			div {
				span {
					font-size: 0.28rem;
					margin-right: 0.21rem;
				}
			}
		}
		.card-code {
			width: 80%;
			height: auto;
			margin: 0.2rem auto;
		}
		.bottom {
			text-align: center;
			font-family: PingFangSC-Regular;
			p {
				color: rgba(144, 162, 199, 1);
				font-size: 0.24rem;
			}
			p:nth-child(1) {
				color: rgba(26, 38, 66, 1);
				margin-bottom: 0.1rem;
			}
		}
	}
	
	.lockcard-box {
		height: 100%;
		.card-list {
			position: relative;
			height: 100%;
			.wrapper {
				height: 100%;
				overflow: hidden;
				.pro-box {
					padding: 0.26rem 0.55rem;
				}
			}
			.top46 {
				top: 47px!important;
			}
			.pro-box {
				background-color: white;
				.card-item {
					padding-bottom: 0.4rem;
					.title {
						display: flex;
						align-items: center;
						justify-content: space-between;
						margin-bottom: 0.21rem;
						font-family: PingFangSC-Medium;
						span:nth-child(1) {
							color: rgba(26, 38, 66, 1);
							font-size: 0.32rem;
						}
						span:nth-child(2) {
							color: rgba(144, 162, 199, 1);
							font-size: 0.24rem;
						}
					}
					.content {
						border-radius: 5px;
						padding: 0.54rem;
						display: flex;
						flex-direction: column;
						justify-content: center;
						font-family: PingFangSC-Medium;
						background-size: 100% 100%;
						.one {
							display: flex;
							align-items: center;
							margin-bottom: 0.41rem;
							span:nth-child(1) {
								color: rgba(160, 160, 160, 1);
								font-size: 0.28rem;
								margin-right: 0.52rem;
								display: inline-block;
								width: 0.9rem;
								text-align: center;
							}
							span:nth-child(2) {
								color: rgba(209, 174, 120, 1);
								font-size: 0.72rem;
								i {
									font-size: 0.28rem;
								}
							}
						}
						.two {
							margin-bottom: 0.11rem;
						}
						.two,
						.three {
							span:nth-child(1) {
								color: rgba(160, 160, 160, 1);
								font-size: 0.28rem;
								margin-right: 0.52rem;
								display: inline-block;
								width: 0.9rem;
								text-align: center;
							}
							span:nth-child(2) {
								color: rgba(255, 255, 255, 1);
								font-size: 0.28rem;
							}
						}
					}
				}
			}
			.card-nullbox {
				.img-box {
					height: 5.38rem;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					margin-bottom: 0.2rem;
					background-color: white;
					img {
						width: 4.75rem;
						height: 3.54rem;
						margin-bottom: 0.14rem;
					}
					p {
						color: rgba(26, 38, 66, 1);
						font-size: 0.32rem;
					}
				}
				.tj-pro {
					.tip {
						height: 1.02rem;
						line-height: 1.02rem;
						padding-left: 0.18rem;
						position: relative;
						background-color: white;
					}
					.pro-list {
						display: flex;
						flex-wrap: wrap;
						justify-content: space-between;
						.item {
							width: 49.6%;
							margin-bottom: 0.06rem;
							background-color: white;
							.pro-img {
								height: 2.58rem;
								margin: 0.08rem;
								display: flex;
								align-items: center;
								justify-content: center;
								overflow: hidden;
								img {
									width: 100%;
									height: auto;
								}
							}
							.pl {
								padding: 0.1rem 0.21rem;
								font-family: PingFangSC-Regular;
								.name {
									font-size: 0.24rem;
									color: rgba(26, 38, 66, 1);
								}
								.price {
									font-size: 0.32rem;
									color: rgba(242, 48, 48, 1);
									margin: 0.11rem 0;
								}
								.stro {
									display: flex;
									align-items: center;
									justify-content: space-between;
									span {
										font-size: 0.24rem;
										color: rgba(144, 162, 199, 1);
									}
									.oldprice{
										text-decoration:line-through;
									}
								}
							}
						}
					}
					.tip:after {
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
			}
		}
	}
	
	.card-list:before {
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
</style>