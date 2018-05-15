<template>
	<div class="cardDetail-box">
		<settingHeader :title="title"></settingHeader>
		<div class="b-w">
			<div class="top">
				<div class="one">
					<div>￥<span>100</span></div>
					<div>满599元可用</div>
				</div>
				<div class="two">
					<div class="left">满减券</div>
					<div>2018.4.27-2018.5.27</div>
				</div>
			</div>
			<div class="tip">
				<div class="ad">
					<img src="../../../assets/images/member/kbao4.png" alt="" />
					<span class="left"> 优惠券说明</span>
				</div>
				<ul>
					<li>该优惠券仅限135*****1595的用户使用</li>
					<li>一张订单只能使用一种类型的优惠券</li>
					<li>下单时满足使用条件即可抵扣商品金额，领取成功的优惠券即可使用</li>
				</ul>
			</div>
		</div>
		<div class="btn">
			立即使用
		</div>
	</div>
</template>

<script>
	import { Badge, Cell, Group, Scroller, Masker, Drawer, Tab, TabItem, Swiper, SwiperItem } from 'vux'
	import settingHeader from '../../../components/setting_header'
	export default {
		data() {
			return {
				title: '优惠券详情'
			}
		},
		created() {

		},
		mouted() {

		},
		methods: {

		},
		components: {
			settingHeader
		}
	}
</script>

<style lang="less" scoped>
	.cardDetail-box {
		background-color: white;
		font-family: MicrosoftYaHei;
		height: 100%;
		overflow: hidden;
		.btn {
			position: fixed;
			width: 100%;
			bottom: 0;
			height: 0.88rem;
			line-height: 0.88rem;
			text-align: center;
			background: rgba(51, 111, 255, 1);
			font-size: 0.32rem;
			color: rgba(255, 255, 255, 1);
		}
		.b-w {
			padding: 0 0.24rem 0 0.24rem;
			position: relative;
			.top {
				display: flex;
				align-items: center;
				flex-direction: column;
				justify-content: center;
				padding: 0.41rem;
				padding-left: 1.72rem;
				.one {
					display: flex;
					width: 100%;
					height: 0.8rem;
					align-items: center;
					font-family: MicrosoftYaHei;
					div:nth-child(1) {
						font-size: 0.4rem;
						color: rgba(255, 129, 28, 1);
						span {
							font-size: 0.8rem;
						}
					}
					div:nth-child(2) {
						font-size: 0.28rem;
						font-family: MicrosoftYaHei;
						color: rgba(26, 38, 66, 1);
						margin-left: 0.3rem;
					}
				}
				.two {
					display: flex;
					width: 100%;
					height: 0.8rem;
					align-items: center;
					font-family: MicrosoftYaHei;
					font-size: 0.28rem;
					.left {
						width: 1.8rem;
						text-align: center;
					}
				}
			}
			.tip {
				padding: 0.25rem 0.12rem;
				background: url(../../../../static/member/coupondetail-bg.png) no-repeat;
				background-size: 100% 100%;
				.ad {
					img {
						width: 0.6rem;
						height: auto;
						vertical-align: middle;
						margin-right: 0.09rem;
					}
					.left {
						display: inline-block;
						margin-right: 0.9rem;
						font-size: 0.32rem;
						color: rgba(26, 38, 66, 1);
					}
				}
				ul {
					margin-left: 0.81rem;
					li {
						list-style-type: disc;
						font-size: 0.28rem;
						color: rgba(144, 162, 199, 1);
						margin: 0.2rem 0;
					}
					.last {
						span:nth-child(1) {
							font-size: 0.28rem;
							color: rgba(26, 38, 66, 1);
							margin-right: 0.6rem;
						}
					}
				}
			}
		}
		.b-w:before {
			content: " ";
			position: absolute;
			left: 0;
			top: 0;
			right: 0;
			height: 1px;
			border-top: 1px solid #C7C7C7;
			color: #D9D9D9;
			-webkit-transform-origin: 0 0;
			transform-origin: 0 0;
			-webkit-transform: scaleY(0.5);
			transform: scaleY(0.5);
			left: 0px;
		}
	}
</style>