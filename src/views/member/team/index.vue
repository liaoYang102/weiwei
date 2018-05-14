<template>
	<div class="team-box">
		<settingHeader :title="title"></settingHeader>
		<div class="pr-box">
			<div class="top">
				<div class="middle">
					<p>23</p>
					<p>合伙人( 人 )</p>
				</div>
				<router-link to="/member/purse/qrcode">
					<div class="right">
						<img src="../../../assets/images/member/yq@2x.png" />
						<span>我要邀请</span>
					</div>
				</router-link>
			</div>

			<div class="list-box">
				<div class="scroll-box">
					<div class="wrapper" ref="wrapper">
						<div class="content">
							<div class="box2">
								<div v-if="has>0">
									<div class="list" v-for="(item,index) in list" :key="index">
										<div class="he">
											<div class="user-img">
												<img :src="item.img" />
											</div>
											<div class="user-text">
												<p>{{item.name}}</p>
												<p>手机号码：{{item.phone}}</p>
												<p>加入时间：{{item.time}}</p>
											</div>
										</div>
										<div class="footer">
											<grid class="footer-item">
												<grid-item v-for="i in 2" :key="i">
													<p>订单数</p>
													<p>12</p>
												</grid-item>
											</grid>
										</div>
									</div>
									<Loading v-if="showloading"></Loading>
								</div>

								<div class="null-box" v-else>
									<img src="../../../assets/images/index/null-data.png" alt="" />
									<p>暂无数据</p>
									<router-link to="/member/purse/qrcode">
										<div class="add-btn">我要邀请</div>
									</router-link>
								</div>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { Grid, GridItem } from 'vux'
	import settingHeader from '../../../components/setting_header'
	import Loading from '../../../components/loading'
	import BScroll from 'better-scroll'
	export default {
		data() {
			return {
				title: '我的团队',
				showloading: false,
				has: 0,
				list: [{
					img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3502149281,2119482052&fm=27&gp=0.jpg',
					name: '这个合伙人ID最多这么长',
					phone: '18520496787',
					time: '2018-01-01 00:00:00'
				}, {
					img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3502149281,2119482052&fm=27&gp=0.jpg',
					name: '这个合伙人ID最多这么长',
					phone: '18520496787',
					time: '2018-01-01 00:00:00'
				}, {
					img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3502149281,2119482052&fm=27&gp=0.jpg',
					name: '这个合伙人ID最多这么长',
					phone: '18520496787',
					time: '2018-01-01 00:00:00'
				}, {
					img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3502149281,2119482052&fm=27&gp=0.jpg',
					name: '这个合伙人ID最多这么长',
					phone: '18520496787',
					time: '2018-01-01 00:00:00'
				}, {
					img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3502149281,2119482052&fm=27&gp=0.jpg',
					name: '这个合伙人ID最多这么长',
					phone: '18520496787',
					time: '2018-01-01 00:00:00'
				}, {
					img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3502149281,2119482052&fm=27&gp=0.jpg',
					name: '这个合伙人ID最多这么长',
					phone: '18520496787',
					time: '2018-01-01 00:00:00'
				}],
				showloading: false
			}
		},
		created() {

		},
		mounted() {
			this.InitScroll()
		},
		methods: {
			InitScroll() {
				this.$nextTick(() => {
					if(!this.scroll) {
						this.scroll = new BScroll(this.$refs.wrapper, {
							click: true,
							scrollY: true,
							pullUpLoad: {
								threshold: -50, // 负值是当上拉到超过低部 70px；正值是距离底部距离 时，                    
							}
						})
						this.scroll.on('pullingUp', (pos) => {
							this.showloading = true;
							this.LoadData()
							this.$nextTick(function() {
								this.scroll.finishPullUp();
								this.scroll.refresh();
							});
						})
					} else {
						this.scroll.refresh()
					}
				})

			},
			LoadData() {
				var _this = this
				setTimeout(function() {
					_this.showloading = false;
				}, 3000)
			}
		},
		components: {
			settingHeader,
			Grid,
			GridItem,
			Loading
		}
	}
</script>

<style lang="less" scoped>
	.team-box {
		background: #F5F6FA;
		height: 100%;
		.pr-box {
			position: relative;
			height: 100%;
			.list-box {
				position: absolute;
				top: 1.98rem;
				width: 100%;
				height: 10.08rem;
				z-index: 11;
				.scroll-box {
					position: relative;
					height: 100%;
					.wrapper {
						position: absolute;
						top: 0;
						bottom: 0;
						width: 100%;
						.null-box {
							position: relative;
							height: 11rem;
							text-align: center;
							background: white;
							img {
								width: auto;
								height: 4.12rem;
							}
							p {
								font-size: 0.32rem;
								font-family: PingFangSC-Medium;
								color: rgba(26, 38, 66, 1);
							}
							.add-btn {
								width: 6.18rem;
								height: 0.88rem;
								line-height: 0.88rem;
								color: white;
								background: rgba(51, 111, 255, 1);
								border-radius: 4px;
								margin: 1.91rem auto;
							}
						}
					}
				}
			}
		}
	}
	
	.top {
		z-index: 15;
		height: 1.98rem;
		position: relative;
		background-image: linear-gradient(-238deg, #5EC3FF 0%, #106FE3 100%);
		.middle {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			p:nth-child(1) {
				font-family: PingFangSC-Medium;
				font-size: 0.74rem;
				color: #FFFFFF;
				letter-spacing: 0;
				text-align: center;
			}
			p:nth-child(2) {}
			font-family: PingFangSC-Regular;
			font-size: 0.24rem;
			color: #FFFFFF;
			letter-spacing: 0;
			text-align: center;
		}
		.right {
			position: absolute;
			top: 0.21rem;
			right: 0.41rem;
			img {
				width: 0.24rem;
				height: 0.24rem;
				margin-right: 0.07rem;
				vertical-align: middle;
			}
			span {
				font-family: PingFangSC-Regular;
				font-size: 0.24rem;
				color: #FFFFFF;
				letter-spacing: 0;
			}
			;
		}
	}
	
	.list {
		margin-bottom: 0.21rem;
		background: white;
		.he {
			display: flex;
			padding: 0.35rem 0.29rem;
			align-items: center;
			.user-img {
				width: 1.39rem;
				display: flex;
				align-items: center;
				justify-content: flex-start;
				img {
					width: 0.9rem;
					height: 0.9rem;
					border-radius: 50%;
				}
			}
			.user-text {
				p:nth-child(1) {
					font-family: PingFangSC-Regular;
					font-size: 0.28rem;
					color: #1A2642;
					letter-spacing: 0;
				}
				p:nth-child(2),
				p:nth-child(3) {
					font-family: PingFangSC-Regular;
					font-size: 0.24rem;
					color: #90A2C7;
					letter-spacing: 0;
				}
			}
		}
		.footer {
			height: 1.3rem;
			.footer-item {
				height: 100%;
				.weui-grid {
					padding: 0;
					height: 100%;
					padding: 0.23rem 0.3rem;
					font-family: PingFangSC-Medium;
					letter-spacing: 0;
					font-size: 0.28rem;
					text-align: center;
					p:nth-child(1) {
						color: #90A2C7;
					}
					p:nth-child(2) {
						color: #1A2642;
						margin-top: 0.05rem;
					}
				}
			}
		}
	}
</style>