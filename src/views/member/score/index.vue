<template>
	<section class="score-box">
		<settingHeader :title="title"></settingHeader>
		<div class='head'>
			<div class="position">
				<router-link to="/member/score/strategy">
					<img src="../../../assets/images/member/score_3.png" alt="">
					<span class='fr'>积分说明</span>
				</router-link>
			</div>
			<div class="avatar">
				<img src="../../../assets/images/member/score_1.png" alt="">
			</div>
			<p class="integral">
				<span>15526 <img src="../../../assets/images/member/score_2.png" alt=""></span>
			</p>
			<router-link to="/shop">
				<p class="prompt"><span>去积分商城兑换商品</span></p>
			</router-link>
		</div>
		<div class="earings">
			<p class="recent">
				<span class="fl">近七日平台积分收益</span>
				<span class="fr">本周</span>
			</p>
			<p class="time">
				<span class="fl">日期</span>
				<span class="fr">收益</span>
			</p>
			<ul v-if="isData.length>0">
				<li v-for="item in isData" @click="$router.push({path:'/member/score/detail'})">
					<span class="fl">{{item.date}}</span>
					<span class="fr">{{item.money}}</span>
				</li>
			</ul>
			<noData v-if="isData.length == 0" :status="2" stateText="暂无数据"></noData>
		</div>
	</section>
</template>

<script>
	import settingHeader from '../../../components/setting_header'
	import noData from '../../../components/noData'
	export default {
		data() {
			return {
				title: '我的积分',
				isData: [{
						date: '03月21日',
						money: '220'
					},
					{
						date: '03月22日',
						money: '220'
					},
					{
						date: '03月23日',
						money: '220'
					},
					{
						date: '03月24日',
						money: '220'
					},
					{
						date: '03月25日',
						money: '220'
					},
					{
						date: '03月26日',
						money: '220'
					},
					{
						date: '03月26日',
						money: '220'
					},
				]
			}
		},
		components: {
			settingHeader,
			noData
		},
		created() {

		},
		mounted() {

		},
		methods: {

		}
	}
</script>

<style lang='less' scoped>
	.score-box {
		height: 100%;
		background-color: #fff;
		.head {
			width: 100%;
			height: 3.2rem;
			background-image: url(../../../assets/images/member/score_group.png);
			background-size: 100% 100%;
			padding-top: 0.36rem;
			position: relative;
			.position {
				position: absolute;
				top: 0.3rem;
				right: 0.3rem;
				img {
					width: 0.34rem;
					height: 0.34rem;
				}
				span {
					font-size: 0.24rem;
					color: #fff;
					margin-left: 0.06rem;
					margin-top: 0.03rem;
				}
			}
			.avatar {
				width: 100%;
				text-align: center;
				margin-bottom: 0.2rem;
				img {
					width: 0.88rem;
					height: 0.88rem;
				}
			}
			.integral {
				width: 100%;
				height: 1.03rem;
				font-size: 0.74rem;
				text-align: center;
				color: #ffffff;
				line-height: 1.03rem;
				margin-bottom: 0.1rem;
				span {
					margin-right: -0.46rem;
				}
				img {
					width: 0.4rem;
					height: 0.4rem;
				}
			}
			.prompt {
				height: 0.5rem;
				text-align: center;
				span {
					text-align: center;
					display: inline-block;
					width: 3.65rem;
					height: 100%;
					font-size: 0.28rem;
					line-height: 0.5rem;
					color: #336fff;
					background-color: #fff;
					border-radius: 1rem;
				}
			}
		}
		.earings {
			padding-bottom: 15px;
			padding-left: 0.26rem;
			padding-right: 0.3rem;
			.recent {
				height: 1.02rem;
				line-height: 1.02rem;
				border-bottom: 1px solid #D8DFF0;
				.fl {
					font-size: 0.3rem;
					color: #1A2642;
				}
				.fr {
					font-size: 0.28rem;
					color: #1A2642;
				}
			}
			.time {
				height: 0.73rem;
				line-height: 0.73rem;
				border-bottom: 1px solid #D8DFF0;
				.fl {
					font-size: 0.24rem;
					color: #90A2C7;
				}
				.fr {
					font-size: 0.24rem;
					color: #90A2C7;
				}
			}
			ul {
				li {
					height: 0.96rem;
					line-height: 0.96rem;
					box-sizing: border-box;
					position: relative;
					.fl {
						font-size: 0.28rem;
						color: #1A2642;
					}
					.fr {
						font-size: 0.28rem;
						color: #1A2642;
					}
				}
				li:not(:first-child):after {
					content: " ";
					position: absolute;
					left: 0;
					top: 0;
					right: 0;
					height: 1px;
					border-bottom: 1px solid #D9D9D9;
					color: #D9D9D9;
					-webkit-transform-origin: 0 0;
					transform-origin: 0 0;
					-webkit-transform: scaleY(0.5);
					transform: scaleY(0.5);
					left: 0;
				}
			}
		}
	}
</style>