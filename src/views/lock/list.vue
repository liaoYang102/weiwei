<template>
	<div class="cardlist-box">
		<settingHeader :title="title"></settingHeader>
		<div class="list-box">
			<div class="list-item" v-for="item in cardlist" @click="sure(item)">
				<div class="left">
					<img :src="item.img" />
				</div>
				<div class="right">
					<div>
						<span>{{item.name}}</span><span>{{item.status}}</span>
					</div>
					<p>{{item.num}}</p>
					<div class="bo">
						<img src="../../../static/images/alliance2.png" />
						<span>{{item.time}}</span>
					</div>
				</div>
			</div>
		</div>
		<div v-transfer-dom>
			<popup v-model="showModel" hide-on-blur>
				<div class="cardlist-popup">
					<img @click="sure" class="gb" src="../../assets/images/lock/gbi@2x.png" />
					<div class="pd">
						<div class="list-item">
							<div class="left">
								<img src="../../../static/images/pro8.png" />
							</div>
							<div class="right">
								<p>¥190</p>
								<p>仅剩52间</p>
								<p>已选“皇冠高级房钟点房套餐”</p>
							</div>
						</div>
						<div class="tip-box tip-af">
							<p class="title">酒店条件</p>
							<div class="tip-text">
								<div class="one-item" v-for="item in tips">
									<span>{{item.one}}</span>
									<span>{{item.two}}</span>
								</div>
							</div>
						</div>
						<div class="tip-box tip-af">
							<p class="title">退款规则</p>
							<div class="tip-text">
								<p>订单确认后不可取消/变更，如未入住，酒店将扣除全额房费</p>
							</div>
						</div>
						<div class="tip-box">
							<p class="title">购买数量</p>
							<div class="tip-text">
								<p>直接消费，请携带入住人身份证，凭姓名和预定手机号直接办理入住</p>
								<p>请在10:00之后并于次日13：00之前退房；如需提前入住或延时退房，请咨询商家</p>
							</div>
						</div>
					</div>

					<div class="add-btn">预定</div>
				</div>
			</popup>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import { Popup } from 'vux'
	import settingHeader from '../../components/setting_header'
	export default {
		data() {
			return {
				title: '房卡列表',
				showModel: false,
				tips: [{
					one: '上网',
					two: 'wifi'
				}, {
					one: '卫浴',
					two: '独立'
				}, {
					one: '窗户',
					two: '有'
				}, {
					one: '可住',
					two: '两人'
				}, {
					one: '早餐',
					two: '无'
				}],
				cardlist: [{
						img: './static/images/pro8.png',
						name: '天安总部16号楼',
						num: '威伐光理疗室01房',
						status: '未生效',
						time: '2018.04.23 12:30 ~ 2018.04.23 12:30'
					},
					{
						img: './static/images/pro8.png',
						name: '天安总部16号楼',
						num: '威伐光理疗室02房',
						status: '生效中',
						time: '2018.04.23 12:30 ~ 2018.04.23 12:30'
					},
					{
						img: './static/images/pro8.png',
						name: '天安总部16号楼',
						num: '威伐光理疗室03房',
						status: '已过期',
						time: '2018.04.23 12:30 ~ 2018.04.23 12:30'
					},
					{
						img: './static/images/pro8.png',
						name: '天安总部16号楼',
						num: '威伐光理疗室04房',
						status: '未生效',
						time: '2018.04.23 12:30 ~ 2018.04.23 12:30'
					},
				]
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

		},
		methods: {
			sure() {
				this.showModel = !this.showModel
			}
		},
		components: {
			settingHeader,
			Popup
		}
	}
</script>

<style lang="less" scoped>
	.cardlist-popup {
		background-color: white;
		position: relative;
		.pd {
			padding: 0.3rem 0.38rem 0 0.38rem;
		}
		.gb {
			position: absolute;
			right: 0.38rem;
			top: 0.24rem;
			width: 0.42rem;
			height: 0.42rem;
			z-index: 1111;
		}
		.add-btn {
			height: 0.88rem;
			line-height: 0.88rem;
			font-size: 0.28rem;
			margin-top: 0.8rem;
			color: #FFFFFF!important;
			text-align: center;
			background-color: #336FFF!important;
		}
		.list-item {
			display: flex;
			align-items: center;
			height: 2.11rem;
			position: relative;
			.left {
				width: 1.8rem;
				padding-right: 0.26rem;
				overflow: hidden;
				img {
					width: 100%;
					height: auto;
				}
			}
			.right {
				flex: 1;
				font-family: PingFangSC-Medium;
				p:nth-child(1) {
					font-size: 0.32rem;
					color: rgba(242, 48, 48, 1);
				}
				p:nth-child(2) {
					font-size: 0.28rem;
					color: rgba(144, 162, 199, 1);
					margin: 0.04rem 0;
				}
				p:nth-child(3) {
					font-size: 0.28rem;
					color: rgba(26, 38, 66, 1);
				}
			}
		}
		.tip-box {
			padding: 0.19rem 0;
			position: relative;
			.title {
				font-size: 0.28rem;
				color: rgba(26, 38, 66, 1);
			}
			.tip-text {
				margin-top: 0.33rem;
				display: flex;
				flex-wrap: wrap;
				font-size: 0.24rem;
				.one-item {
					width: 50%;
					margin-bottom: 0.13rem;
					span:nth-child(1) {
						color: rgba(115, 134, 173, 1);
						margin-right: 0.22rem;
					}
					span:nth-child(2) {
						color: rgba(26, 38, 66, 1);
					}
				}
				p {
					color: rgba(115, 134, 173, 1);
					margin-bottom: 0.11rem;
				}
			}
		}
		.tip-af :after {
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
		.list-item :after {
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
	
	.list-box {
		position: relative;
		padding: 0 0.24rem;
		background-color: white;
		.list-item {
			display: flex;
			align-items: center;
			height: 2.11rem;
			.left {
				width: 1.8rem;
				padding-right: 0.26rem;
				overflow: hidden;
				img {
					width: 100%;
					height: auto;
				}
			}
			.right {
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				div:nth-child(1) {
					display: flex;
					align-items: center;
					justify-content: space-between;
					font-family: PingFang-SC-Bold;
					span:nth-child(1) {
						font-size: 0.28rem;
						color: rgba(26, 38, 66, 1);
					}
					span:nth-child(2) {
						font-size: 0.26rem;
						color: rgba(51, 111, 255, 1);
					}
				}
				p {
					font-size: 0.24rem;
					color: rgba(115, 134, 173, 1);
					margin-bottom: 0.37rem;
				}
				.bo {
					img {
						width: 0.25rem;
						height: 0.25rem;
					}
					font-size: 0.24rem;
					color:rgba(144, 162, 199, 1);
				}
			}
		}
	}
	
	.list-box:before {
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