<template>
	<div class="logs-box">
		<settingHeader :title="title"></settingHeader>
		<div class="purse-box1">
			<div class="box-h">
				<div class="top">
					<div>
						<p>1000000.00</p>
						<p>累计收益（元）</p>
					</div>
				</div>
			</div>
		</div>
		<div class="shaixuan">
			<div class="gary">{{typeText}}</div>
			<div @click="showRight"><i class="iconfont icon-caidan"></i>筛选</div>
		</div>
		<div class="logs-list">
			<scroller lock-x height="-250" @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="200">
				<div class="box">
					<div class="item" v-for="(item,index) in dataList" :class="{'h':index == 0}" :style="{width:item.w + '%'}">
						<span>{{item.date}}</span>
						<span>+{{item.sy}}</span>
					</div>
					<load-more tip="loading" v-if="onFetching"></load-more>
				</div>
			</scroller>
			<!--<div class="wrapper" ref="wrapper">
				<div class="content">
					<div class="item" v-for="i in 15">
						<span>2018-4-20</span>
						<span>1.0709</span>
					</div>
					<load-more v-if="show" tip="正在加载"></load-more>
				</div>
			</div>-->
		</div>
		<!--筛选菜单栏-->
		<div v-transfer-dom>
			<popup v-model="show8" position="top">
				<div class="position-vertical-demo">
					<div class="twoClass">
						<div class="type-item" v-for="(item,index) in twoClass">
							<span :class="{'twoActive':twoIndex == index}" @click="twoChange(index,item)">{{item}}</span>
						</div>
					</div>
				</div>
			</popup>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import { Datetime, XProgress, Box, Scroller, Card } from 'vux'
	import settingHeader from '../../../components/setting_header'
	export default {
		data() {
			return {
				title: '累计收益',
				showDialogStyle: false,
				show: false,
				onFetching: false,
				show8: false,
				twoIndex: 0,
				twoClass: ['累计收益', '近一周', '近一个月','时间'],
				typeText:'全部',
				dataList: [{
						date: '2018-4-20',
						sy: '1.0709',
						w: '50'
					},
					{
						date: '2018-4-21',
						sy: '1.0709',
						w: '60'
					},
					{
						date: '2018-4-22',
						sy: '10',
						w: '70'
					}, {
						date: '2018-4-23',
						sy: '0',
						w: '80'
					}, {
						date: '2018-4-24',
						sy: '0',
						w: '90'
					}, {
						date: '2018-4-25',
						sy: '0',
						w: '100'
					}
				]
			}
		},
		created() {

		},
		mounted() {},
		methods: {
			showRight() {
				this.show8 = true
			},
			twoChange(index,item) {
				this.twoIndex = index
				this.typeText = item
				this.show8 = false
			},
			onScrollBottom() {
				if(this.onFetching) {
					// do nothing
				} else {
					this.onFetching = true
					setTimeout(() => {
						this.$nextTick(() => {
							this.$refs.scrollerBottom.reset()
						})
						this.onFetching = false
					}, 2000)
				}
			},
		},
		components: {
			settingHeader,
			Datetime,
			XProgress,
			Box,
			Scroller,
			Card
		},
		watch: {
			twoIndex() {
				var _this = this
				if(this.twoIndex == 3) {
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
						onHide() {
						}
					})

				}
			}
		}
	}
</script>
<style lang="less">
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
					background: #eaeaea;
					border-radius: 2px;
					font-size: 0.20rem;
				}
				.twoActive {
					background: #10aeff;
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
	
	.logs-box {
		.purse-box1 {
			background-color: #f5f6fa;
			position: relative;
			.box-h {
				width: 100%;
				height: 2.8rem;
				background: url(../../../assets/images/member/index-bg.png) no-repeat;
				background-size: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				.top {
					display: flex;
					height: 1.64rem;
					div {
						flex: 1;
						display: flex;
						align-items: center;
						justify-content: center;
						flex-direction: column;
						p:nth-child(1) {
							font-size: 0.60rem;
							color: white;
						}
						p:nth-child(2) {
							font-size: 0.24rem;
							margin-top: 0.05rem;
							color: rgba(255, 255, 255, 1);
						}
					}
				}
			}
		}
		.shaixuan {
			height: 0.98rem;
			display: flex;
			align-items: center;
			justify-content: space-between;
			color: #6099ff;
			position: relative;
			padding: 0px 15px;
			background: #eaeaea99;
			.iconfont {
				margin-right: 0.1rem;
			}
			.gary {
				font-size: 0.32rem;
				color: #888;
			}
		}
		.logs-list {
			padding: 0.36rem 0.24rem;
			.wrapper {
				height: 8rem;
				overflow: hidden;
			}
			.item {
				min-width: 50%;
				height: 0.74rem;
				margin-bottom: 0.36rem;
				background: rgba(191, 200, 222, 1);
				display: flex;
				border-radius: 1px;
				align-items: center;
				justify-content: space-between;
				position: relative;
				color: white;
				padding: 0 0.26rem;
				box-sizing: border-box;
			}
			.h {
				width: 100%;
				background: url(../../../../static/member/jf-bg.png) no-repeat;
			}
		}
	}
</style>