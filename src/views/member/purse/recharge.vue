<template>
	<div>
		<settingHeader :title="title"></settingHeader>
		<div class="recharge-box">
			<div class="item">
				<div class="left">
					<p>健康平台</p>
					<p>当前平台</p>
				</div>
				<div class="right">
					当前余额: <span>500000000000.0</span>
				</div>
			</div>
			<div class="change-box">
				<div class="change-tip">
					<img src="../../../assets/images/member/icon-paid.png" alt="" /> 选择支付套餐 :</div>
				<div class="change-row">
					<div v-for="(item,index) in moneyList" class="row-item" :class="{'moneyActive':index == moneyIndex}" @click="changeMoney(index)">
						<div class="box">
							<p>{{item.old}}元</p>
							<p>售价{{item.now}}元</p>
						</div>
					</div>
				</div>
			</div>
			<div class="change-box">
				<div class="change-tip">
					<img src="../../../assets/images/member/icon-more.png" alt="" /> 可用消费平台 :</div>
				<div class="change-row">
					<div v-for="item in ptList" class="row-item">
						<div>
							<p>
								<img :src="item.img" />
							</p>
							<p>{{item.name}}</p>
						</div>
					</div>
				</div>
			</div>

			<div class="btn-box">
				<x-button class="add-btn" @click.native="submit">确认充值</x-button>
			</div>
		</div>

		<div v-transfer-dom>
			<popup v-model="show1">
				<popup-header right-text="取消" title="请选择支付方式" :show-bottom-border="false" @on-click-left="show1 = false" @on-click-right="show1 = false"></popup-header>
				<group gutter="0">
					<radio :options="list" value="1" @on-change="change"></radio>
					<div class="pay-box">
						<div class="add-btn">立即支付</div>
					</div>
				</group>
			</popup>
		</div>
	</div>
</template>

<script>
	import { Group, CellBox, XButton, PopupHeader, Radio, Checklist } from 'vux'
	import settingHeader from '../../../components/setting_header'
	export default {
		data() {
			return {
				title: '余额充值',
				moneyIndex: 0, //套餐默认选中
				ptIndex: 0,
				list: [{
					icon: './static/member/bandCard.png',
					key: '1',
					value: '银行卡支付'
				}, {
					icon: './static/member/treasure.png',
					key: '2',
					value: '支付宝支付'
				}, {
					icon: './static/member/wechapaid.png',
					key: '3',
					value: '微信支付'
				}],
				show1: false,
				moneyList: [{
						now: '499',
						old: '500.0'
					},
					{
						now: '499',
						old: '500.0'
					},
					{
						now: '499',
						old: '500.0'
					},
					{
						now: '499',
						old: '50000.0'
					},
				],
				ptList: [{
						img: './static/member/hairdressing1.png',
						name: '美容平台'
					},
					{
						img: './static/member/traval.png',
						name: '旅游平台'
					},
					{
						img: './static/member/shopping1.png',
						name: '餐饮平台'
					},
					{
						img: './static/member/catering.png',
						name: '购物平台'
					},
				]
			}
		},
		created() {
			this.$store.state.page.footerFalg = true
		},
		mounted() {},
		methods: {
			changeMoney(index) {
				this.moneyIndex = index
			},
			changePt(index) {
				this.ptIndex = index
			},
			submit() {
				this.show1 = true
			},
			change(value, label) {
				console.log('change:', value, label)
			}
		},
		components: {
			settingHeader,
			Group,
			CellBox,
			XButton,
			PopupHeader,
			Radio,
			Checklist
		}
	}
</script>

<style lang="less">
	.recharge-box {
		font-family: MicrosoftYaHei;
		background-color: #F5F6FA;
		.item {
			padding: 0 0.25rem;
			height: 1.13rem;
			display: flex;
			align-items: center;
			justify-content: space-between;
			background: url(../../../assets/images/member/index-bg.png) no-repeat;
			background-size: 100%;
			color: white;
			.left {
				p:nth-child(1) {
					font-size: 0.32rem;
				}
				p:nth-child(2) {
					font-size: 0.18rem;
					color: #d5d5d6;
				}
			}
			.right {
				font-size: 0.24rem;
				span {
					font-size: 0.28rem;
				}
			}
		}
		.change-box {
			padding: 0.25rem;
			background-color: white;
			margin-bottom: 0.21rem;
			.change-tip {
				color: #555555;
				font-size: 0.24rem;
				text-indent: 0.2rem;
				margin-bottom: 0.2rem;
				img {
					width: 0.25rem;
					vertical-align: sub;
				}
			}
			.change-row {
				display: flex;
				background: white;
				flex-wrap: wrap;
				.row-item {
					flex: 1;
					max-width: 33.333%;
					div {
						margin: 0.1rem auto;
						display: flex;
						align-items: center;
						justify-content: center;
						flex-direction: column;
						height: 1.1rem;
						border-radius: 3px;
						color: #8b45139c;
						p:nth-child(1) {
							font-size: 0.28rem;
						}
						p:nth-child(2) {
							font-size: 0.20rem;
						}
						img {
							width: 0.4rem;
							height: 0.4rem;
						}
					}
					.box {
						width: 1.91rem;
						background: #e5e5e5;
					}
				}
				.moneyActive {
					.box {
						color: white;
						background: #336fff;
						transition: all 0.3s linear;
					}
				}
				.ptActive {
					div {
						border: 1px solid #1c7ff3;
						color: #26a2ff;
						background: transparent;
						background: transparent!important;
					}
				}
			}
		}
		.btn-box {
			position: fixed;
			bottom: 0;
			width: 100%;
			padding: 0.25rem;
			box-sizing: border-box;
			.add-btn {
				height: 0.88rem;
				line-height: 0.88rem;
				background: rgba(51, 111, 255, 1);
				font-size: 0.28rem;
				text-align: center;
				font-family: MicrosoftYaHei;
				color: rgba(255, 255, 255, 1);
				border-radius: 2px;
			}
		}
	}
	
	.pay-box {
		padding: 10px 15px;
		.add-btn {
			height: 0.88rem;
			line-height: 0.88rem;
			background: rgba(51, 111, 255, 1);
			font-size: 0.28rem;
			text-align: center;
			font-family: MicrosoftYaHei;
			color: rgba(255, 255, 255, 1);
			border-radius: 2px;
		}
	}
</style>