<template>
	<div class="scorelog-box">
		<scoreheader :title="title"></scoreheader>
		<div class="top">
			<!--<div class="rules">
                <img src="../../../assets/images/member/rules.png" alt="">
                <span>积分说明</span>  
            </div>-->
			<div class="score">
				<span class="score-text">15526</span>
				<img src="../../../assets/images/member/Group3.png" alt=""><br>
				<span>信用积分</span>
			</div>
		</div>

		<div class="scroll-div" :style="{height:h + 'px'}">
			<div class="wrapper" ref="wrapper">
				<div class="content">
					<div class="box">
						<router-link to="/member/score/detail">
							<div class="log-box" v-for="(item, index) in logList" :key="index">
								<div class="log-wrap">
									<p class="contentOne">
										<span>{{ item.content}}</span>
										<span class="right" v-if=" item.score<0 ">{{ item.score }}</span>
										<span class="right red" v-if=" item.score>0 ">{{ item.score }}</span>
									</p>
									<p class="contentTwo">
										<span>{{ item.date }}</span>
									</p>
								</div>
							</div>
						</router-link>

						<Loading v-if="show"></Loading>
					</div>
				</div>
			</div>
		</div>
		<!-- <scroller lock-x height='-1rem' @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" style="background-color:#fff">
			<div class="box">
				<router-link to="/member/score/detail">
					<div class="log-box" v-for="(item, index) in logList" :key="index">
						<div class="log-wrap">
							<p class="contentOne">
								<span>{{ item.content}}</span>
								<span class="right" v-if=" item.score<0 ">{{ item.score }}</span>
								<span class="right red" v-if=" item.score>0 ">{{ item.score }}</span>
							</p>
							<p class="contentTwo">
								<span>{{ item.date }}</span>
							</p>
						</div>
					</div>
				</router-link>

				<load-more tip="loading" id='loading'></load-more>
			</div>
		</scroller> -->
	</div>
</template>

<script>
	import scoreheader from '../../../components/setting_header'
	import BScroll from 'better-scroll'
	import Loading from '../../../components/loading'
	export default {
		components: {
			scoreheader,
			Loading
		},
		data() {
			return {
				title: '积分记录',
				show: false,
				logList: [{
						content: '年终积分清零',
						score: '-720',
						date: '2018-01-01 00:00:00'
					},
					{
						content: '购物赠送',
						score: '+100',
						date: '2017-12-07 12:02:45'
					},
					{
						content: '购买商城商品',
						score: '-100',
						date: '2017-12-07 12:02:45'
					},
					{
						content: '年终积分清零',
						score: '-720',
						date: '2018-01-01 00:00:00'
					},
					{
						content: '购物赠送',
						score: '+100',
						date: '2017-12-07 12:02:45'
					},
					{
						content: '购买商城商品',
						score: '-100',
						date: '2017-12-07 12:02:45'
					},
					{
						content: '年终积分清零',
						score: '-720',
						date: '2018-01-01 00:00:00'
					},
					{
						content: '购物赠送',
						score: '+100',
						date: '2017-12-07 12:02:45'
					},
					{
						content: '购买商城商品',
						score: '-100',
						date: '2017-12-07 12:02:45'
					}, {
						content: '年终积分清零',
						score: '-720',
						date: '2018-01-01 00:00:00'
					},
					{
						content: '购物赠送',
						score: '+100',
						date: '2017-12-07 12:02:45'
					},
					{
						content: '购买商城商品',
						score: '-100',
						date: '2017-12-07 12:02:45'
					}
				]
			}
		},
		mounted() {
			console.log(document.body.clientHeight - 46)
			this.InitScroll()
		},
		methods: {
			// onScrollBottom() {
			// 	var load = document.getElementById("loading");
			// 	load.style.display = 'block'
			// 	if(this.onFetching) {
			// 		// do nothing
			// 	} else {
			// 		this.onFetching = true
			// 		setTimeout(() => {
			// 			load.style.display = 'none'
			// 			console.log(123);
			// 			this.$nextTick(() => {
			// 				this.$refs.scrollerBottom.reset()
			// 			})
			// 			this.onFetching = false
			// 		}, 2000)
			// 	}
			// }
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
							this.show = true;
							this.LoadData()
							this.$nextTick(function() {
								this.scroll.finishPullUp();
								this.scroll.refresh();
							});
						})
						console.log(this.scroll)
					} else {
						this.scroll.refresh()
					}
				})

			},
			LoadData() {
				var _this = this
				setTimeout(function() {
					_this.show = false;
					// _this.showNomore = true;
				}, 3000)
			},
		},
		computed: {
			h: function() {
				return document.body.clientHeight - 94
			}
		}
	}
</script>

<style lang="less" scoped>
	.scorelog-box {
		height: 100%;
		overflow: hidden;
		background-color: white;
		.scroll-div {
			position: relative;
			.wrapper {
				position: absolute;
				top: 0rem;
				bottom: 0;
				width: 100%;
				z-index: 11;
			}
		}
		.top {
			width: 100%;
			height: 1.98rem;
			position: relative;
			background: #fff;
			z-index: 15;
			background: -webkit-linear-gradient(left, #5EC3FF, #106FE3);
			/* Safari 5.1 - 6.0 */
			background: -o-linear-gradient(left, #0CF, blue);
			/* Opera 11.1 - 12.0 */
			background: -moz-linear-gradient(left, #0CF, blue);
			/* Firefox 3.6 - 15 */
			background: linear-gradient(238deg, #5EC3FF 0%, #106FE3 100%);
			.rules {
				position: relative;
				width: 2rem;
				left: 5.8rem;
				font-family: PingFangSC-Regular;
				font-size: 0.24rem;
				color: #FFFFFF;
				letter-spacing: 0;
				padding-top: 0.2rem;
				img {
					position: absolute;
					width: 14%;
					top: 0.23rem;
				}
				span {
					display: inline-block;
					margin-left: 0.35rem;
				}
			}
			.score {
				font-family: PingFangSC-Regular;
				font-size: 0.24rem;
				color: #FFFFFF;
				letter-spacing: 0;
				text-align: center;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				/*margin-top: -0.2rem;*/
				.score-text {
					display: inline-block;
					font-size: 0.74rem;
				}
				img {
					width: 11%;
					vertical-align: super;
				}
			}
		}
		.log-box {
			width: 100%;
			height: 1.34rem;
			background: #ffffff;
			position: relative;
			.log-wrap {
				margin-left: 0.3rem;
				height: 1.32rem;
				font-size: 0.28rem;
				position: relative;
				.contentOne {
					position: relative;
					top: 0.27rem;
					color: #1A2642;
					.right {
						position: absolute;
						right: 0.2rem;
						font-size: 0.30rem;
					}
					.red {
						color: #F23030;
					}
				}
				.contentTwo {
					margin-top: 0.3rem;
					font-size: 0.28rem;
					color: #90A2C7;
					line-height: 0.4rem;
				}
			}
			.log-wrap:after {
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
				left: 0;
			}
		}
		/*.vux-loadmore {
			display: none;
		}*/
	}
</style>