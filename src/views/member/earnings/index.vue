<template>
	<div class="b-w">
		<settingHeader :title="title"></settingHeader>
		<div class="purse-box1">
			<div class="purse-box2">
				<div class="box-h">
					<div class="top">
						<div>
							<p>当前信用积分</p>
							<p>5000.0</p>
						</div>
					</div>
					<div class="bottom">
						<card>
							<div slot="content" class="card-demo-flex card-demo-content01">
								<div class="vux-1px-r">
									<router-link to="/member/earnings/logs">
										<p>350.0</p>
										<span>累计收益</span>
									</router-link>
								</div>
								<div class="vux-1px-r">
									<p>200.0</p>
									<span>今日收益</span>
								</div>
							</div>
						</card>
					</div>
				</div>
				<!-- @click="showDialogStyle = true" -->
				<div class="gz" @click="goJfshop">
					<img src="../../../assets/images/member/thao.png" alt="" /> 兑换更多
				</div>
			</div>
			<div class="purse-list">
				<router-link to="/member/purse/recharge">
					<div>
						<img src="../../../assets/images/member/purse2.png" />
						<span>积分充值</span>
					</div>
				</router-link>
				<router-link to="/member/purse/banlancelog">
					<div>
						<img src="../../../assets/images/member/purse4.png" />
						<span>积分日志</span>
					</div>
				</router-link>
			</div>
			<div class="af-box">
				<p class="title">兑换公告</p>
				<div>
					<marquee :duration='3000'>
						<marquee-item v-for="i in 5" :key="i" @click.native="onClick(i)" class="align-middle">
							<div>
								<p>恭喜130*******0045 用户兑换三亚三天两夜游旅游票</p>
								<p>恭喜130*******0045 用户兑换一辆奔驰</p>
								<p>恭喜130*******0045 用户兑换一辆奔驰</p>
							</div>
						</marquee-item>
					</marquee>
				</div>
				<p class="title">更多信息</p>
				<div class="bt-box">
					<div class="item" v-for="item in bottomList">
						<img :src="item.img" />
						<div>
							<p>{{item.money}}</p>
							<p>{{item.tip}}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { Card, Cell, Group, Popover, XDialog, Marquee, MarqueeItem } from 'vux'
	import settingHeader from '../../../components/setting_header'
	export default {
		data() {
			return {
				title: '通用积分',
				// showDialogStyle: false,
				bottomList: [{
						img: './static/member/follow1.png',
						tip: '幸运抽奖（元）',
						money: '5000.0'
					},
					{
						img: './static/member/follow2.png',
						tip: '可用积分（元）',
						money: '5000.0'
					},
					{
						img: './static/member/follow3.png',
						tip: '中奖次数（次）',
						money: '5000.0'
					},
					{
						img: './static/member/follow4.png',
						tip: '冻结积分（元）',
						money: '5000.0'
					},
					{
						img: './static/member/follow5.png',
						tip: '消费返现（元）',
						money: '5000.0'
					},
					{
						img: './static/member/follow6.png',
						tip: '推荐返现（元）',
						money: '5000.0'
					},
				]
			}
		},
		created() {

		},
		mounted() {},
		methods: {
			goJfshop() {
				this.$router.push('/shop');
			}
		},
		components: {
			settingHeader,
			Card,
			Cell,
			Group,
			XDialog,
			Marquee,
			MarqueeItem
		}
	}
</script>
<style lang="less">
	@import '~vux/src/styles/1px.less';
	@import '~vux/src/styles/close';
	.b-w {
		height: 100%;
		background-color: white;
		.purse-box1 {
			.info-item {
				font-family: PingFangSC-Regular;
				font-size: 0.28rem;
				color: #464646;
				height: 0.8rem;
				.vux-label {
					color: #90A2C7;
				}
				.weui-cell__ft {
					color: #1A2642;
				}
			}
			.af-box {
				padding: 0 15px;
				background-color: #fff;
				.title {
					height: 0.7rem;
					line-height: 0.7rem;
					font-size: 0.28rem;
					color: rgba(26, 38, 66, 1);
				}
				.align-middle {
					height: 80px;
					display: flex;
					align-items: center;
					color: rgba(144, 162, 199, 1);
					font-size: 0.26rem;
					p:nth-child(2) {
						margin: 0.15rem 0;
					}
				}
				.bt-box {
					display: flex;
					align-items: center;
					flex-wrap: wrap;
					.item {
						display: flex;
						align-items: center;
						justify-content: center;
						width: 50%;
						box-sizing: border-box;
						height: 1.12rem;
						img {
							width: 0.56rem;
							height: 0.56rem;
							margin-right: 0.8rem;
						}
						p:nth-child(1) {
							font-size: 0.32rem;
							color: rgba(242, 67, 67, 1);
						}
						p:nth-child(2) {
							font-size: 0.2rem;
							color: rgba(176, 188, 214, 1);
						}
					}
				}
			}
			.purse-box2 {
				background-color: #f5f6fa;
				position: relative;
				.box-h {
					width: 100%;
					height: 2.8rem;
					background: url(../../../assets/images/member/index-bg.png) no-repeat;
					background-size: 100%;
					.top {
						display: flex;
						height: 1.64rem;
						div {
							flex: 1;
							display: flex;
							align-items: flex-start;
							justify-content: center;
							flex-direction: column;
							padding-left: 0.25rem;
							p:nth-child(1) {
								font-size: 0.32rem;
								color: white;
							}
							p:nth-child(2) {
								font-size: 0.36rem;
								margin-top: 0.05rem;
								color: rgba(255, 255, 255, 1);
							}
						}
					}
					.bottom {
						height: 1.15rem;
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
				.gz {
					position: absolute;
					top: 0.3rem;
					right: 0.4rem;
					display: flex;
					align-items: center;
					font-size: 0.24rem;
					color: white;
					img {
						width: 0.24rem;
						height: 0.24rem;
						margin-right: 0.1rem;
					}
				}
			}
			.purse-list {
				display: flex;
				height: 1.1rem;
				background: white;
				/*margin: 0.1rem 0;*/
				padding: 0.26rem 0.65rem;
				position: relative;
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
			.purse-list:after {
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
</style>