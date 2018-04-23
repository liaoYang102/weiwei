<template>
	<div class="logs-box">
		<settingHeader :title="title"></settingHeader>
		<div class="purse-box">
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
			<div>查看全部</div>
			<div @click="showRight"><i class="iconfont icon-caidan"></i>筛选</div>
		</div>
		<div class="logs-list">
			<scroller lock-x height="-250" @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="200">
				<div class="box">
					<div class="item" v-for="item in dataList">
						<div class="h" :style="{backgroundSize:item.w + '% 100%'}">
							<span>{{item.date}}</span>
							<span>{{item.sy}}</span>
						</div>
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
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import { Datetime, XProgress, Box, Scroller } from 'vux'
	import settingHeader from '../../../components/setting_header'
	export default {
		data() {
			return {
				title: '累计收益',
				showDialogStyle: false,
				show: false,
				onFetching: false,
				dataList: [{
						date: '2018-4-20',
						sy: '1.0709',
						w: '78'
					},
					{
						date: '2018-4-20',
						sy: '1.0709',
						w: '50'
					},
					{
						date: '2018-4-20',
						sy: '0',
						w: '98'
					}, {
						date: '2018-4-20',
						sy: '0',
						w: '0'
					}
				]
			}
		},
		created() {

		},
		mounted() {},
		methods: {
			showRight() {
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
			Scroller
		}
	}
</script>
<style lang="less">
	@import '~vux/src/styles/1px.less';
	@import '~vux/src/styles/close';
	.logs-box {
		.purse-box {
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
		}
		.logs-list {
			padding: 0.24rem;
			.wrapper {
				height: 8rem;
				overflow: hidden;
			}
			.item {
				height: 0.74rem;
				margin-bottom: 0.36rem;
				display: flex;
				align-items: center;
				justify-content: space-between;
				background: rgba(245, 248, 249, 1);
				padding: 0 0.26rem;
				border-radius: 2px;
			}
			.h {
				height: 100%;
				width: 100%;
				color: white;
				background: url(../../../../static/member/jf-bg.png) no-repeat;
			}
		}
	}
</style>