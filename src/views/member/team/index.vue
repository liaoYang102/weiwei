<template>
	<div class="team-box">
		<settingHeader :title="title"></settingHeader>
		<div class="pr-box">
			<div class="top">
				<div class="middle">
					<p>{{totalNums}}</p>
					<p>合伙人( 人 )</p>
				</div>
				<div class="right" @click="toQrcode">
					<img src="../../../assets/images/member/yq@2x.png" />
					<span>我要邀请</span>
				</div>
			</div>

			<div class="list-box">
				<div class="scroll-box">
					<div class="wrapper" ref="wrapper" v-if="list.length>0">
						<div class="content">
							<div class="box2">
								<div>
									<div class="list" v-for="(item,index) in list" :key="index">
										<div class="he">
											<div class="user-img">
												<img :src="item.avatar.original" />
											</div>
											<div class="user-text">
												<p>{{item.nickname}}</p>
												<p>手机号码：{{item.mobile}}</p>
												<p>加入时间：{{item.registerTime}}</p>
											</div>
										</div>
										<div class="footer">
											<grid class="footer-item">
												<grid-item>
													<p>订单数</p>
													<p>{{item.orderSum}}</p>
												</grid-item>
												<grid-item>
													<p>消费额</p>
													<p>{{item.orderPrice}}</p>
												</grid-item>
											</grid>
										</div>
									</div>
									<Loading v-if="showloading"></Loading>
									<Nomore v-if="showNo"></Nomore>
								</div>
							</div>
						</div>
					</div>
					<div class="null-box" v-else>
						<img src="../../../assets/images/index/null-data.png" alt="" />
						<p>暂无伙伴</p>
						<router-link to="/member/purse/qrcode">
							<div class="add-btn">我要邀请</div>
						</router-link>
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
	import noData from '../../../components/noData'
	import BScroll from 'better-scroll'
	export default {
		data() {
			return {
				title: '我的团队',
				showloading: false,
				showNo: false,
				totalNums: 0,
				list: [],
				showloading: false,
				pageSize: 20,
				curPage: 1,
				userInfo: {}
			}
		},
		created() {
			this.getMyTeam()
			this.userInfo = this.$store.state.page.userInfo
		},
		mounted() {

		},
		methods: {

			getMyTeam() {
				var _this = this
				_this.$http.get(_this.url.user.getMyTeam, {
					params: {
						userId: localStorage.getItem('userId'),
						curPage: _this.curPage,
						pageSize: _this.pageSize
					}
				}).then((res) => {
					console.log(res.data.data)
					if(res.data.status == '00000000') {
						var data = res.data.data
						this.list = data.list
						this.totalNums = data.totalNums
						if(data.list.length > 0) {
							this.InitScroll()
						}
					}
				})
			},

			toQrcode() {
				var _this = this
				_this.$router.push({
					path: '/member/purse/qrcode'
				})
			},

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
				_this.curPage++
					var _this = this
				_this.$http.get(_this.url.user.getMyTeam, {
					params: {
						userId: localStorage.getItem('userId'),
						curPage: _this.curPage,
						pageSize: _this.pageSize
					}
				}).then((res) => {
					console.log(res.data.data)
					if(res.data.status == '00000000') {
						var data = res.data.data
						if(data.list.length > 0) {
							_this.showLoading = false
							_this.showNo = false
							_this.list = _this.list.concat(data.list)
						} else {
							_this.showNo = true
						}
					}
				})
			}
		},
		components: {
			settingHeader,
			Grid,
			GridItem,
			Loading,
			noData
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
					}
					.null-box {
						position: relative;
						height: 100%;
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