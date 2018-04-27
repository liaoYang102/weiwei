<template>
	<div class="cardDetail-box">
		<settingHeader :title="title"></settingHeader>
		<div class="b-w">
			<div class="top">
				<div>威伐光25分钟 体验套餐卡</div>
				<div>
					<span class="left">可用次数 :6次</span>
					<span>剩余次数 :6次</span>
				</div>
			</div>
			<div class="from">
				<div class="ad">
					<img src="../../../assets/images/member/kbao1.png" alt="" />
					<span class="left">开通平台</span>
					<span class="right">健康平台</span>
				</div>
				<div class="ad">
					<img src="../../../assets/images/member/kbao2.png" alt="" />
					<span class="left">开通时间</span>
					<span class="right">2018.04.23 11:20:54</span>
				</div>
				<div class="ad">
					<img src="../../../assets/images/member/kbao3.png" alt="" />
					<span class="left">使用期限</span>
					<span class="right">2018.04.23-2017.5.23</span>
				</div>
			</div>
			<div class="tip">
				<div class="ad">
					<img src="../../../assets/images/member/kbao4.png" alt="" />
					<span class="left">套餐卡说明</span>
				</div>
				<ul>
					<li>改套餐只能在威伐光设备上使用</li>
					<li>体验威伐光设备的时候可以使用此套餐卡</li>
					<li>次数使用完后，该套餐卡失效</li>
				</ul>
			</div>
			<div class="tip">
				<div class="ad">
					<img src="../../../assets/images/member/kbao5.png" alt="" />
					<span class="left">使用纪录</span>
				</div>
				<ul>
					<li class="last" v-for="i in 15">
						<span>南方医科大学附属NO.1</span>
						<span>2018.04.23 11:20</span>
					</li>
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
				title: '卡包详情'
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
		background-color: #F5F6FA;
		font-family: MicrosoftYaHei;
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
			background-color: white;
			padding:0.24rem 0.24rem 0.98rem 0.24rem;
			.top {
				height: 2.53rem;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				border-bottom: 2px solid rgba(255, 129, 28, 1);
				div:nth-child(1) {
					font-size: 0.48rem;
					color: rgba(26, 38, 66, 1);
				}
				div:nth-child(2) {
					span {
						display: inline-block;
						margin-top: 0.43rem;
						font-size: 0.32rem;
						color: rgba(255, 129, 28, 1);
					}
					.left {
						margin-right: 1.14rem;
					}
				}
			}
			.from {
				padding: 0.25rem 0.12rem;
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
					.right {
						font-size: 0.28rem;
						color: rgba(144, 162, 199, 1);
					}
				}
			}
			.tip {
				padding: 0.25rem 0.12rem;
				border-top: 1px dashed #D9D9D9;
				/*border-bottom: 1px dashed #D9D9D9;*/
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
	}
</style>