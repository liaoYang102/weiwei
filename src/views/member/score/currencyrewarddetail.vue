<template>
	<div>
		<settingHeader :title="title"></settingHeader>
		<div class="scoreDetail-box">
			<div class="purse-box1">
				<div class="box-h">
					<div class="top" :class="balanceDetail.type == 4 || balanceDetail.type == 1?'':'h100'">
						<div>
							<p>{{balanceDetail.directType==1?'+':'-'}} {{balanceDetail.balance}}</p>
							<p>{{balanceDetail.remark}}</p>
						</div>
					</div>
					<div class="bottom" v-if="balanceDetail.type == 1 || balanceDetail.type == 4">
						<card>
							<div slot="content" class="card-demo-flex card-demo-content01">
								<div class="vux-1px-r">
									<p>{{balanceDetail.profit}}</p>
									<span>到账收益</span>
								</div>
								<div class="vux-1px-r">
									<p>{{total}}</p>
									<span>总计收益</span>
								</div>
							</div>
						</card>
					</div>
				</div>
				<div class="gz" @click="$router.push({path:'/member/earnings/rule'})">
					<img src="../../../assets/images/member/thao.png" alt="" /> 规则
				</div>
			</div>
			<section>
				<group gutter="0">
					<cell class="info-item" title="来源平台" :value="balanceDetail.platformName"></cell>
					<cell class="info-item" title="说明" :value="balanceDetail.remark"></cell>
					<cell class="info-item" title="创建时间" :value="balanceDetail.createTime"></cell>
					<cell class="info-item" title="订单编号" :value="balanceDetail.orderSn" v-if="balanceDetail.type == 1 || balanceDetail.type == 4"></cell>
					<cell class="info-item" :title="balanceDetail.nickname" v-if="balanceDetail.type == 5">
						<div class="up-box">
							<span>{{balanceDetail.mobile}}</span>
							<img class="tx" :src="balanceDetail.avatar.original" />
						</div>
					</cell>
				</group>
			</section>
		</div>
	</div>
</template>

<script>
	import { Card, Cell, Group, Popover, XDialog } from 'vux'
	import settingHeader from '../../../components/setting_header'
	export default {
		data() {
			return {
				title: '通用积分详情',
				balanceDetail: {},
				total: 0,
			}
		},
		created() {
			console.log(this.$route.query)
			this.getMyBalanceDetail(this.$route.query.id)
		},
		mounted() {

		},
		methods: {
			getMyBalanceDetail(id) {
				var _this = this
				_this.$http.get(_this.url.user.getMyBalanceDetail, {
					params: {
						userId: localStorage.getItem('userId'),
						balanceId: id
					}
				}).then((res) => {
					if(res.data.status == "00000000") {
						console.log(res.data.data)
						_this.balanceDetail = res.data.data
						_this.total = Number(res.data.data.profit + res.data.data.forzenProfit)
					}
				})
			},
		},
		components: {
			settingHeader,
			Card,
			Cell,
			Group,
			XDialog
		}
	}
</script>
<style lang="less">
	@import '~vux/src/styles/1px.less';
	@import '~vux/src/styles/close';
	.scoreDetail-box {
		height: 100vh;
		background-color: white;
		.lw-box {
			margin-top: 0.6rem;
			.all-h {
				width: 6.04rem;
				height: 0.99rem;
				background: url(../../../../static/member/score-bg.png) no-repeat;
				background-size: 100%;
				margin: 0 auto;
				display: flex;
				align-items: center;
				padding: 0 1.41rem;
				box-sizing: border-box;
				img {
					width: 0.63rem;
					height: auto;
					margin-right: 0.18rem;
				}
				div {
					p:nth-child(1) {
						font-size: 0.24rem;
						color: rgba(55, 171, 254, 1);
					}
					p:nth-child(2) {
						font-size: 0.20rem;
						color: rgba(255, 99, 99, 1);
					}
				}
			}
		}
		.info-item {
			font-family: PingFangSC-Regular;
			font-size: 0.28rem;
			color: #464646;
			height: 0.6rem;
			.vux-label {
				color: #90A2C7;
			}
			.weui-cell__ft {
				color: #1A2642;
			}
		}
		.info-item {
			font-family: PingFangSC-Regular;
			font-size: 0.28rem;
			color: #1A2642;
			letter-spacing: 0;
			height: 0.6rem;
			.tx {
				width: 0.6rem;
				height: 0.6rem;
				border-radius: 50%;
				vertical-align: middle;
			}
		}
		.purse-box1 {
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
				.h100 {
					height: 100%;
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
				font-size: 0.25rem;
				color: white;
				img {
					width: 0.28rem;
					height: 0.28rem;
					margin-right: 0.1rem;
					vertical-align: middle;
				}
			}
		}
	}
</style>