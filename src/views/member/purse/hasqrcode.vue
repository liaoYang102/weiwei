<template>
	<div class="hasqrcode-box">
		<settingHeader :title="title"></settingHeader>
		<div class="content">
			<span class="one">所需条件</span><span class="two">满足以下任意一条自动开启</span>
			<div class="list-box">
				<div class="item">
					<div class="one">
						<p>消费满888元</p>
						<p>以订单完成为准</p>
					</div>
					<div class="two">
						<div>领取礼卷</div>
					</div>
				</div>
				<div class="item">
					<div class="one">
						<p>消费满888元</p>
						<p>以订单完成为准</p>
					</div>
					<div class="two">
						<div>领取礼卷</div>
					</div>
				</div>
				<div class="item">
					<div class="one">
						<p>消费满888元</p>
						<p>以订单完成为准</p>
					</div>
					<div class="two">
						<div>领取礼卷</div>
					</div>
				</div>
			</div>
			<div class="tip-box">
				<p class="title">我的消费充值记录</p>
				<div class="content1">
					<img src="../../../assets/images/member/11@2x.png" alt="" />
					<div>
						<p>成功交易 0 笔</p>
						<p>充值总数 300 元</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import settingHeader from '../../../components/setting_header'
	export default {
		data() {
			return {
				title: '开启二维码'
			}
		},
		created() {

		},
		mounted() {},
		methods: {

		},
		components: {
			settingHeader
		}
	}
</script>

<style lang="less">
	.hasqrcode-box {
		height: 100%;
		background-color: white;
		.content {
			padding: 0.27rem 0.45rem;
			position: relative;
			.one {
				font-size: 0.36rem;
				font-family: PingFangSC-Medium;
				color: rgba(26, 38, 66, 1);
				margin-right: 0.1rem;
			}
			.two {
				font-size: 0.24rem;
				font-family: PingFangSC-Regular;
				color: rgba(115, 134, 173, 1);
			}
			.list-box {
				margin-top: 0.37rem;
				width: 100%;
				.item {
					height: 1rem;
					background: rgba(216, 223, 240, 1);
					border-radius: 2px;
					padding: 0 0.39rem;
					display: flex;
					align-items: center;
					box-sizing: border-box;
					.one {
						flex: 1;
						border-right: 1px dashed #1A2642;
						p:nth-child(1) {
							font-size: 0.24rem;
							font-family: PingFangSC-Medium;
							color: rgba(26, 38, 66, 1);
							margin-bottom: 0.06rem;
						}
						p:nth-child(2) {
							font-size: 0.20rem;
							font-family: PingFangSC-Regular;
							color: rgba(26, 38, 66, 1);
						}
					}
					.two {
						padding-left: 0.39rem;
						div {
							width: 1.34rem;
							height: 0.46rem;
							line-height: 0.46rem;
							text-align: center;
							color: white;
							background: rgba(26, 38, 66, 1);
							border-radius: 23px;
							float: right;
							padding: 0.05rem 0.19rem;
							font-size: 0.24rem;
						}
					}
				}
				.item:nth-child(2) {
					margin: 0.2rem 0;
				}
			}
			.tip-box {
				width: 100%;
				height: 2.18rem;
				margin-top: 0.26rem;
				padding: 0.24rem;
				border: 1px solid #D8DFF0;
				background: rgba(245, 246, 250, 1);
				box-sizing: border-box;
				.title {
					font-size: 0.28rem;
					font-family: PingFangSC-Regular;
					color: rgba(115, 134, 173, 1);
					text-align: center;
					margin-bottom: 0.11rem;
				}
				.content1 {
					display: flex;
					align-items: center;
					justify-content: center;
					margin-right: 0.5rem;
					img {
						width: 1.2rem;
						height: 1.2rem;
					}
					p{
						font-size: 0.28rem;
						font-family: PingFangSC-Medium;
						color: rgba(26, 38, 66, 1);
					}
				}
			}
		}
		.content:before {
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
	}
</style>