<template>
	<div>
		<settingHeader :title="title"></settingHeader>
		<div class="banlanceLog-box">
			<div class="top">
				<div @click="showRight"><img src="../../../assets/images/index/shaixuan.png" alt="" />筛选</div>
				<div class="gary">{{typeText}}</div>
			</div>
			<div class="wrapper" :class="{'top46':hShow}" ref="wrapper">
				<div class="content">
					<div class="banlanceLog-list">
						<router-link to="/member/purse/banlance">
							<div class="list-item" v-for="i in 11">
								<div>
									<span>充值-积分：10000</span>
									<span>+10000</span>
								</div>
								<div>
									<span>2018-04-10 17:08:03</span>
									<span>充值</span>
								</div>
							</div>
						</router-link>
					</div>
					<Loading v-if="show"></Loading>
				</div>

			</div>
			<!--筛选菜单栏-->
			<div v-transfer-dom>
				<popup v-model="show9" position="top">
					<div class="position-vertical-demo">
						<!--<card>
							<div slot="content" class="card-demo-flex oneClass">
								<div class="vux-1px-r" :class="{'typeActive':typeIndex === 0}" @click="typeChange(0)">
									<div><i class="iconfont icon-riqi shijian"></i>时间</div>
								</div>
								<div class="vux-1px-r" :class="{'typeActive':typeIndex === 1}" @click="typeChange(1)">
									分类
									<img class="ren-jt" :class="[jtFalg?'xia':'top']" v-if="typeIndex == 1" src="../../../assets/images/member/jiantou.png" alt="" />
									<img class="gyay-jt" v-else src="../../../assets/images/member/jiantou1.png" alt="" />
								</div>
							</div>
						</card>-->
						<div class="twoClass">
							<div class="type-item" v-for="(item,index) in twoClass">
								<span :class="{'twoActive':twoIndex == index}" @click="twoChange(index,item)">{{item}}</span>
							</div>
						</div>
					</div>
				</popup>
			</div>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import { LoadMore, Datetime, Popup, Card } from 'vux'
	import settingHeader from '../../../components/setting_header'
	import Loading from '../../../components/loading'
	export default {
		data() {
			return {
				title: '积分日志',
				show: false,
				show9: false,
				hShow: false,
				data1: '',
				twoClass: ['全部', '充值', '消费', '返现', '推荐返现', '时间'],
				//				typeIndex: '',
				twoIndex: '',
				typeText: '全部',
				//				jtFalg: false,
				//				shaixuanFalg: false
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
							this.$nextTick(function() {
								this.scroll.finishPullUp();
								this.scroll.refresh();
							})

							setTimeout(function() {
//								_this.show = false
							}, 1500)
						})
					} else {
						this.scroll.refresh()
					}
				})

			},
			showRight() {
				this.show9 = true
			},
			//			typeChange(index) {
			//				this.typeIndex = index
			//				if(this.typeIndex == 1) {
			//					this.shaixuanFalg = !this.shaixuanFalg
			//					if(this.shaixuanFalg == true) {
			//						this.jtFalg = false
			//					} else {
			//						this.jtFalg = true
			//					}
			//				}
			//			},
			twoChange(index, item) {
				this.twoIndex = index
				this.typeText = item
				this.show9 = false
			}
		},
		components: {
			settingHeader,
			LoadMore,
			Datetime,
			Popup,
			Card,Loading
		},
		watch: {
			twoIndex() {
				var _this = this
				if(this.twoIndex == 5) {
					this.jtFalg = false
					this.shaixuanFalg = false
					this.$vux.datetime.show({
						cancelText: '取消',
						confirmText: '确定',
						clearText: '请选择时间',
						format: 'YYYY-MM-DD HH',
						value: '2017-05-20 18',
						onConfirm(val) {
							console.log('plugin confirm', val)
						},
						onShow() {
							console.log('plugin show')
						},
						onHide() {}
					})

				}
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '~vux/src/styles/1px.less';
	.position-vertical-demo {
		background: white;
		.card-demo-flex {
			display: flex;
			align-items: center;
		}
		.oneClass {
			height: 0.9rem;
			.shijian {
				margin-right: 0.1rem;
			}
			img {
				width: 0.3rem;
				vertical-align: middle;
			}
			.xia {
				transform: rotate(180deg);
				transition: all 0.2s linear;
			}
			.top {
				transform: rotate(0deg);
				transition: all 0.2s linear;
			}
		}
		.twoClass {
			display: flex;
			flex-wrap: wrap;
			padding: 0.2rem 0;
			.type-item {
				width: 25%;
				padding: 0.08rem 0.25rem;
				text-align: center;
				box-sizing: border-box;
				span {
					display: inline-block;
					width: 100%;
					height: 0.5rem;
					line-height: 0.5rem;
					/*border: 1px solid #eaeaea;*/
					background: #eaeaea;
					border-radius: 2px;
					font-size: 0.20rem;
				}
				.twoActive {
					/*border: 1px solid #ff00006b!important;*/
					background: #336FFF;
					color: white;
				}
			}
		}
		.typeActive {
			color: red;
		}
		.card-padding {
			padding: 15px;
		}
		.card-demo-flex>div {
			flex: 1;
			text-align: center;
		}
		.card-demo-flex span {
			font-size: 0.2rem;
		}
	}
	
	.banlanceLog-box {
		position: relative;
		background-color: white;
		font-family: MicrosoftYaHei;
		.top {
			height: 46px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			color: #6099ff;
			position: relative;
			padding: 0px 15px;
			position: relative;
			img {
				width: 0.21rem;
				height: 0.22rem;
				margin-right: 0.1rem;
			}
			.gary {
				font-size: 0.30rem;
				color: #1a2642;
			}
		}
		.top:after {
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
		/*.top:after {
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
		}*/
		.wrapper {
			position: fixed;
			top: 92px;
			bottom: 0px;
			overflow: hidden;
			width: 100%;
			background: white;
			/*.vux-loadmore {
				display: inline-block;
				width: 100%;
			}*/
		}
		.top46 {
			top: 46px!important;
		}
		.banlanceLog-list {
			padding: 10px 0px 10px 15px;
			.list-item {
				height: 1.47rem;
				position: relative;
				display: flex;
				justify-content: center;
				flex-direction: column;
				div {
					display: flex;
					align-items: center;
					justify-content: space-between;
				}
				div:nth-child(1) {
					padding-right: 15px;
					font-size: 0.28rem;
					margin-bottom: 0.2rem;
					span:nth-child(1) {
						color: rgba(26, 38, 66, 1);
					}
					span:nth-child(2) {
						color: rgba(242, 48, 48, 1);
					}
				}
				div:nth-child(2) {
					padding-right: 15px;
					font-size: 0.24rem;
					span:nth-child(1) {
						color: rgba(144, 162, 199, 1);
					}
					span:nth-child(2) {
						color: rgba(26, 38, 66, 1);
					}
				}
			}
			.list-item:after {
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
	
	.banlanceLog-box:before {
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