<template>
	<div>
		<settingHeader :title="title"></settingHeader>
		<div class="purse-box1">
			<div class="purse-box2">
				<div class="box-h">
					<div class="top">
						<div>
							<p>1000000.00</p>
							<p>积分</p>
						</div>
					</div>
					<div class="bottom">
						<card>
							<div slot="content" class="card-demo-flex card-demo-content01">
								<div class="vux-1px-r">
									<p>+ 5000.0</p> 
									<span>增加积分</span>
								</div>
								<div class="vux-1px-r">
									<p>500.0</p>
									<span>冻结积分</span>
								</div>
							</div>
						</card>
					</div>
				</div>
				<div class="gz" @click="showDialogStyle = true">
					<img src="../../../assets/images/member/thao.png" alt="" /> 规则
				</div>
			</div>
			<section>
				<group gutter="0">
					<cell class="info-item" title="当前状态" value="已收入"></cell>
					<cell class="info-item" title="积分说明" value="充值"></cell>
					<cell class="info-item" title="账单类型" value="后台充值"></cell>
					<cell class="info-item" title="创建时间" value="2018.04.19 11:30"></cell>
					<cell class="info-item" title="编号" value="2018041017080385390"></cell>
				</group>
			</section>
			<div v-transfer-dom>
				<x-dialog v-model="showDialogStyle" hide-on-blur :dialog-style="{'max-width': '100%', width: '100%', height: '50%', 'background-color': 'transparent'}">
					<p class="gz-box" @click="showDialogStyle = false">
						<span style="font-size:0.32rem;color: white;">商品的退货期内，返现的余额是冻结的</span>
						<br>
						<br>
						<x-icon type="ios-close-outline" style="fill:#fff;"></x-icon>
					</p>
				</x-dialog>
			</div>
		</div>
	</div>
</template>

<script>
	import { Card, Cell, Group, Popover, XDialog } from 'vux'
	import settingHeader from '../../../components/setting_header'
	export default {
		data() {
			return {
				title: '积分详情',
				showDialogStyle: false
			}
		},
		created() {

		},
		mounted() {},
		methods: {

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
	.purse-box1 {
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
				font-size: 0.20rem;
				color: white;
				img {
					width: 0.26rem;
					height: 0.26rem;
					margin-right: 0.1rem;
				}
			}
		}
	}
</style>