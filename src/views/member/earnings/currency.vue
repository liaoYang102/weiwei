<template>
	<div class="currency-box">
		<settingHeader :title="title"></settingHeader>
		<div class="top">
			<p>753.01</p>
			<p>当前通用积分</p>
		</div>
		<div class="g-list">
			<group :gutter='0'>
				<cell class="item" primary="content" is-link>
					<div class="left">
						<p>累计通用积分</p>
						<p>1000.00</p>
					</div>
				</cell>
			</group>
		</div>
		<div class="bottom">
			<div class="title">
				<div>积分来源</div>
				<div @click="$router.push({path:'/member/score/strategy'})">积分规则<img :src="thao" alt="" /></div>
			</div>
			<div class="b-list">
				<group :gutter='0'>
					<cell class="item" primary="content" is-link v-for="item in bList">
						<div class="left">
							<img :src="item.img" alt="" />
							<div>
								<p>{{item.tip}}</p>
								<p>累计奖励：{{item.money}}</p>
							</div>
						</div>
					</cell>
				</group>
			</div>
		</div>
	</div>
</template>

<script>
	import { Cell, Group } from 'vux'
	import settingHeader from '../../../components/setting_header'
	export default {
		data() {
			return {
				title: '通用积分',
				thao: './static/member/thao.png',
				bList: [{
						tip: '充值',
						money: '400.50',
						img: './static/member/czjl.png'
					},
					{
						tip: '购物奖励',
						money: '200.50',
						img: './static/member/gwjl.png'
					},
					{
						tip: '分红奖励',
						money: '400.50',
						img: './static/member/fhjl.png'
					},
					{
						tip: '任务奖励',
						money: '6700.50',
						img: './static/member/rwjl.png'
					},
					{
						tip: '中奖',
						money: '9900.50',
						img: './static/member/zjjl.png'
					},
				]
			}
		},
		created() {

		},
		mounted() {},
		methods: {},
		components: {
			settingHeader,
			Cell,
			Group,
		}
	}
</script>
<style lang="less">
	.currency-box {
		font-family: MicrosoftYaHei;
		.top {
			height: 3.2rem;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			background: url(../../../assets/images/member/score_group.png) no-repeat;
			background-size: 100% 100%;
			color: rgba(255, 255, 255, 1);
			p:nth-child(1) {
				font-size: 0.7rem;
			}
			p:nth-child(2) {
				font-size: 0.24rem;
			}
		}
		.bottom {
			margin-top: 0.2rem;
			/*padding-bottom: 0.2rem;*/
			.title {
				padding: 0 15px;
				height: 0.9rem;
				background-color: white;
				display: flex;
				align-items: center;
				justify-content: space-between;
				div:nth-child(2) {
					display: flex;
					align-items: center;
					color: rgba(115, 134, 173, 1);
					img {
						width: 0.25rem;
						height: 0.25rem;
						margin-left: 0.12rem;
					}
				}
			}
			.b-list {
				.item {
					.left {
						display: flex;
						img {
							width: 1rem;
							height: 1rem;
							margin-right: 0.3rem;
						}
						div {
							text-align: left;
							display: flex;
							flex-direction: column;
							justify-content: space-between;
							padding: 0.05rem 0;
							p:nth-child(1) {
								font-size: 0.28rem;
								color: rgba(26, 38, 66, 1);
							}
							P:nth-child(2) {
								font-size: 0.26rem;
								color: rgba(115, 134, 173, 1);
							}
						}
					}
				}
			}
		}
		.g-list {
			.item {
				.left {
					text-align: left;
					p:nth-child(1) {
						font-size: 0.28rem;
						color: rgba(115, 134, 173, 1);
					}
					P:nth-child(2) {
						font-size: 0.48rem;
						color: rgba(26, 38, 66, 1);
					}
				}
			}
			.weui-cells:after {
				border-bottom: none!important;
			}
		}
	}
</style>