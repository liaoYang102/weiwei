<template>
	<div class="team">
		<settingHeader :title="title"></settingHeader>
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

		<div class="wrapper" ref="wrapper">
			<div class="content">
				<div class="box2">
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
			</div>
		</div>
		<!-- <scroller class="scroller-box" lock-x height="-100" :use-pullup="showUp" :pullup-config="upConf" @on-pullup-loading="selPullUp" ref="scrollerBottom">
			<div class="box2">
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
				<load-more tip="loading" v-model="showloading" :text="textloading"></load-more>
			</div>
		</scroller> -->
	</div>
</template>

<script>
	import { Grid, GridItem, Scroller } from 'vux'
	import settingHeader from '../../../components/setting_header'
	import Loading from '../../../components/loading'
	import BScroll from 'better-scroll'
	export default {
		data() {
			return {
				title: '我的团队',
				loadingShow: false,
				showloading: false,
				textloading: '加载中',
				showUp: true,
				upConf: { // 上拉配置
					content: '',
					pullUpHeight: 60,
					height: 80,
					autoRefresh: false,
					downContent: 'Loading...',
					upContent: '上拉加载更多',
					loadingContent: 'Loading...',
					clsPrefix: 'xs-plugin-pullup-'
				},
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
				},{
					img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3502149281,2119482052&fm=27&gp=0.jpg',
					name: '这个合伙人ID最多这么长',
					phone: '18520496787',
					time: '2018-01-01 00:00:00'
				}, {
					img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3502149281,2119482052&fm=27&gp=0.jpg',
					name: '这个合伙人ID最多这么长',
					phone: '18520496787',
					time: '2018-01-01 00:00:00'
				},{
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
			this.$store.state.page.footerFalg = true
		},
		mounted() {
			//第一次加载
			// this.$nextTick(() => {
			// 	this.$refs.scrollerBottom.reset()
			// })
			this.InitScroll()
		},
		methods: {
	        InitScroll() {
	        	console.log('0000',this.scroll)
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
				setTimeout(function(){
					_this.showloading = false;
				},3000)
			},
			selPullUp() {
				console.log(123)
				this.showloading = true
				this.list.push({
					img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3502149281,2119482052&fm=27&gp=0.jpg',
					name: '这个合伙人ID最多这么长',
					phone: '18520496787',
					time: '2018-01-01 00:00:00'
				})
				this.showloading = false
				//第一次加载
				this.$refs.scrollerBottom.reset()
				this.$refs.scrollerBottom.donePullup()
			}
		},
		components: {
			settingHeader,
			Grid,
			GridItem,
			Scroller,
			Loading
		}
	}
</script>

<style lang="less" scoped>
	.team {
		background: #F5F6FA;
		height: 100%;
	}
	.wrapper{
		height: 78%;
		overflow: hidden;
	}
	.scroller-box {
		padding-bottom: 180px;
	}
	
	.xs-plugin-pullup-up {
		margin-bottom: 180px;
	}
	
	.top {
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