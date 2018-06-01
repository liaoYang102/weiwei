<template>
	<div>
		<settingHeader :title="title"></settingHeader>
		<div class="purse-box">
			<div class="box-h">
				<div class="top">
					<div>
						<p>总资产 (元)</p>
						<p>5000.0</p>
					</div>
					<div>
						<p>昨日收益</p>
						<p>5000.0</p>
					</div>
				</div>
				<div class="bottom">
					<card>
						<div slot="content" class="card-demo-flex card-demo-content01">
							<div class="vux-1px-r">
								<span>积分</span>
								<p>5000.0</p>
							</div>
							<div class="vux-1px-r">
								<span>可用积分</span>
								<p>5000.0</p>
							</div>
							<div class="vux-1px-r">
								<span>冻结积分</span>
								<p>5000.0</p>
							</div>
						</div>
					</card>
				</div>
			</div>
			<div class="purse-list">
				<router-link to="/member/purse/recharge">
					<div>
						<img src="../../../assets/images/member/purse2.png" />
						<span>积分充值</span>
					</div>
				</router-link>
				<!--<router-link to="/member/purse/recharge">
					<div>
						<img src="../../../assets/images/member/purse3.png" alt="" />
						<span>账单</span>
					</div>
				</router-link>-->
				<router-link to="/member/purse/banlancelog">
					<div>
						<img src="../../../assets/images/member/purse4.png" />
						<span>积分日志</span>
					</div>
				</router-link>
			</div>
			<div class="pur-row2">
				<!--<div class="row-item" v-for="i in 3">
					<div>
						<p>累计收益</p>
						<p>0.00</p>
					</div>
				</div>-->
				<group gutter="0">
					<cell class="item" title='累计收益' value="200.0"></cell>
					<cell class="item" title='返现积分' value="88.0"></cell>
					<cell class="item" title='返现积分' value="150.0"></cell>
				</group>
			</div>
			<div class="chart-box">
				<div class="banlance">
					<p>积分收入</p>
					<div class="sign">
						<span class="s_top"></span>
						<span class="sur">冻结积分</span>
						<div class="tz">
							<span class="s_bottom"></span>
							<span class="sur">当日返现</span>
						</div>
					</div>
				</div>
				<div id="myChart" class="pieChart"></div>
			</div>
			<div class="chart-box">
				<div class="banlance">
					<p>最近7天消费趋势</p>
				</div>
				<div id="myChart2" class="pieChart"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import { Card, Cell, Group, } from 'vux'
	import settingHeader from '../../../components/setting_header'
	export default {
		data() {
			return {
				title: '我的钱包'
			}
		},
		created() {

		},
		mounted() {
			this.echart()
		},
		methods: {
			echart() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById('myChart'))
				// 绘制图表
				myChart.setOption({
					tooltip: {
						trigger: 'axis',
						axisPointer: { // 坐标轴指示器，坐标轴触发有效
							type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
						}
					},
					grid: {
						x: 400,
						left: '1%',
						right: '15%',
						bottom: '5%',
						top: "17%",
						containLabel: true
					},
					xAxis: [{
						type: 'category',
						name: "时间",
						data: ['04-11', '04-12', '04-13', '04-14', '04-15', '04-16', '04-17', '04-18', ],
						axisLabel: {
							interval: 0,
							rotate: 26,
							textStyle: {
								color: '#3172ce'
							}
						},
						axisLine: {
							lineStyle: {
								color: '#9dcdff',
							}
						},
						axisTick: {
							length: 0
						},
						nameTextStyle: {
							color: "#5a5a5a"
						},
					}],
					yAxis: [{
						type: 'category',
						name: "收益",
						data: ['0', '20000', '30000', '40000', '60000', '80000', '1W'],
						axisLabel: {
							interval: 'auto',
							textStyle: {
								color: '#a0c7fe'
							},
							formatter: function(value, index) {
								if(value >= 10000) {
									value = "" + value;
									value = value.substr(0, value.length - 4) + "W"
								}
								return value;
							}
						},
						axisLine: {
							lineStyle: {
								color: '#9dcdff',
							}
						},
						axisTick: {
							length: 0
						},
						nameTextStyle: {
							color: "#5a5a5a"
						},
					}],
					series: [{
							name: '冻结积分',
							barWidth: 7,
							type: 'bar',
							itemStyle: {
								normal: {
									color: '#badbf8'
								}
							},
							data: [3.4, 4.5, 15, 43, 15, 15, 15, 15],
						},
						{
							name: '当日返现',
							barWidth: 7,
							type: 'bar',
							itemStyle: {
								normal: {
									color: '#79b2ff'
								}
							},
							data: [3.4, 4.5, 15, 43, 15, 15, 15, 15],
						},
					]
				});

				// 基于准备好的dom，初始化echarts实例
				let myChart2 = this.$echarts.init(document.getElementById('myChart2'))
				// 绘制图表
				myChart2.setOption({
					tooltip: {
						trigger: 'axis',
						axisPointer: { // 坐标轴指示器，坐标轴触发有效
							type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
						}
					},
					grid: {
						x: 400,
						left: '1%',
						right: '15%',
						bottom: '5%',
						top: "17%",
						containLabel: true
					},
					xAxis: [{
						type: 'category',
						name: "日期",
						data: ['04-11', '04-12', '04-13', '04-14', '04-15', '04-16', '04-17', '04-18', ],
						axisLabel: {
							interval: 0,
							rotate: 26,
							textStyle: {
								color: '#3172ce'
							}
						},
						axisLine: {
							lineStyle: {
								color: '#9dcdff',
							}
						},
						axisTick: {
							length: 0
						},
						nameTextStyle: {
							color: "#5a5a5a"
						},
					}],
					yAxis: [{
						type: 'category',
						name: "金额  (元)",
						data: ['0', '20000', '30000', '40000', '60000', '80000', '1W'],
						axisLabel: {
							interval: 'auto',
							textStyle: {
								color: '#a0c7fe'
							},
							formatter: function(value, index) {
								if(value >= 10000) {
									value = "" + value;
									value = value.substr(0, value.length - 4) + "W"
								}
								return value;
							}
						},
						axisLine: {
							lineStyle: {
								color: '#9dcdff',
							}
						},
						axisTick: {
							length: 0
						},
						nameTextStyle: {
							color: "#5a5a5a"
						},
					}],
					series: [{
						name: '消费',
						barWidth: 7,
						type: 'bar',
						itemStyle: {
							normal: {
								color: '#badbf8'
							}
						},
						data: [3.4, 4.5, 15, 43, 15, 15, 15, 15],
					}]
				});
			}
		},
		created() {
			this.$store.state.page.footerFalg = true
		},
		components: {
			settingHeader,
			Card
		}
	}
</script>

<style lang="less">
	@import '~vux/src/styles/1px.less';
	.purse-box {
		background-color: #f5f6fa;
		.box-h {
			width: 100%;
			height: 2.8rem;
			background: url(../../../assets/images/member/index-bg.png) no-repeat;
			background-size: 100%;
			.top {
				display: flex;
				height: 1.48rem;
				div {
					flex: 1;
					display: flex;
					align-items: center;
					justify-content: center;
					flex-direction: column;
					color: white;
					p:nth-child(1) {
						font-size: 0.32rem;
					}
					p:nth-child(2) {
						font-size: 0.36rem;
						margin-top: 0.1rem;
					}
				}
			}
			.bottom {
				height: 1.31rem;
				.weui-panel {
					height: 100%;
					background: transparent!important;
				}
				.weui-panel:after {
					border-bottom: transparent!important;
				}
				.weui-panel__bd {
					height: 100%!important;
					.vux-card-content {
						height: 100%!important;
					}
				}
				.card-demo-flex {
					display: flex;
					align-items: center;
				}
				.card-demo-content01 {
					height: 100%;
				}
				.card-padding {
					padding: 15px;
				}
				.card-demo-flex>div {
					flex: 1;
					text-align: center;
				}
				.card-demo-flex span {
					color: white;
					font-size: 0.2rem;
				}
				.card-demo-flex p {
					color: white;
					font-size: 0.28rem;
				}
			}
		}
		.purse-list {
			display: flex;
			height: 1.1rem;
			background: white;
			/*margin: 0.1rem 0;*/
			padding: 0.26rem 0.65rem;
			a {
				flex: 1;
				div {
					width: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					flex-direction: column;
					img {
						width: 0.5rem;
						height: 0.5rem;
						margin-bottom: 0.13rem;
					}
					span {
						font-size: 0.25rem;
						color: #1A2642;
						font-family: MicrosoftYaHei;
					}
				}
			}
		}
		.pur-row {
			display: flex;
			padding: 0.25rem;
			background: white;
			.row-item {
				flex: 1;
				div {
					margin: 0 auto;
					display: flex;
					align-items: center;
					justify-content: center;
					flex-direction: column;
					width: 1.91rem;
					height: 1.1rem;
					background: rgba(239, 243, 246, 1);
					border-radius: 3px;
					p:nth-child(1) {
						font-size: 0.20rem;
					}
					p:nth-child(2) {
						font-size: 0.32rem;
					}
				}
			}
		}
		.pur-row2 {
			.item {
				height: 0.6rem;
				font-size: 0.24rem;
				font-family: MicrosoftYaHei;
				color: rgba(144, 162, 199, 1);
				.weui-cell__ft {
					font-size: 0.28rem;
					color: rgba(26, 38, 66, 1);
				}
			}
			.weui-cell:before{
				left: 0!important;
			}
		}
		.chart-box {
			padding: 0.3rem;
			background-color: white;
			.pieChart {
				width: 100%;
				height: 5rem;
			}
			.banlance {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 0.1rem;
			}
			.banlance p {
				display: inline-block;
			}
			.banlance .sign .s_top {
				display: inline-block;
				width: 0.29rem;
				height: 0.12rem;
				background-color: #badbf8;
			}
			.banlance .sign .s_bottom {
				display: inline-block;
				width: 0.29rem;
				height: 0.12rem;
				background-color: #79b2ff;
			}
			.banlance .sign .sur {
				font-size: 0.2rem;
				color: #639eed;
			}
			.banlance .sign .tz {
				margin-top: -6px;
			}
			.column {
				height: 3.94rem;
				box-shadow: 1px 2px 6px #c4d2ee, -1px 1px 6px #c4d2ee;
				width: 94%;
				margin-bottom: 0.4rem
			}
		}
	}
</style>