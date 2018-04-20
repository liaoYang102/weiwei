<template>
	<div>
		<settingHeader :title="title"></settingHeader>
		<div class="qrcode-box">
			<div class="bg"></div>
			<div class="content">
				<div class="pr-box">
					<img class="user-img" src="../../../assets/images/member/score_1.png" alt="" />
					<p>账号 : 17520439845</p>
					<div class="qrcode-div">
						<div>
							<qrcode class='qrconde' value="https://vux.li?x-page=demo_qrcode" type="img"></qrcode>
						</div>
					</div>
					<div class="slogan"></div>
					<div class="tip">
						长按此图识别二维码，加盟CGC智慧产业联盟
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { Qrcode } from 'vux'
	import settingHeader from '../../../components/setting_header'
	export default {
		data() {
			return {
				title: '我的二维码',
			}
		},
		created() {

		},
		mounted() {},
		methods: {

		},
		components: {
			settingHeader,
			Qrcode
		}
	}
</script>

<style lang="less">
	.qrcode-box {
		.bg {
			background: url(../../../assets/images/member/qrcode1.png) no-repeat;
			background-size: 100%;
			height: 6.47rem;
		}
		.content {
			box-shadow: 2px 8px 10px #c4d2ee, -2px 0px 10px #c4d2ee;
			border-radius: 10px;
			position: absolute;
			width: 5.73rem;
			height: 8.44rem;
			background-color: #fff;
			left: 50%;
			top: 18%;
			transform: translate(-50%, 0%);
			.pr-box {
				position: absolute;
				left: 50%;
				top: -7%;
				width: 100%;
				transform: translate(-50%, 0%);
				display: flex;
				justify-content: center;
				flex-direction: column;
				align-items: center;
				.user-img {
					width: 1.5rem;
					height: 1.5rem;
					border-radius: 50%;
					overflow: hidden;
				}
				p {
					margin-top: 0.5rem;
				}
				.qrcode-div {
					width: 4.9rem;
					height: 4.74rem;
					background: url(../../../assets/images/member/qrcode3.png) no-repeat;
					background-size: 100%;
					position: relative;
					div {
						position: absolute;
						left: 50%;
						top: 44%;
						transform: translate(-50%, -44%);
						width: 3.02rem;
						height: 3rem;
						position: absolute;
						border: 8px solid #548aeb;
						z-index: 10;
						overflow: hidden;
						display: flex;
						align-items: center;
						justify-content: center;
						.qrcode {
							width: 100%;
							height: 100%;
						}
					}
				}
				.slogan {
					width: 4.1rem;
					height: 1.03rem;
					background: url(../../../assets/images/member/qrcode5.png) no-repeat;
					background-size: 100%;
				}
				.tip {
					text-align: center;
					color: rgb(98, 98, 98);
					font-size: 0.24rem;
					margin-top: 0.2rem;
				}
			}
		}
	}
</style>