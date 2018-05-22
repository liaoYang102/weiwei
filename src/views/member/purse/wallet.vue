<template>
	<div class="wallet-box">
		<settingHeader :title="title"></settingHeader>
		<group :gutter='0'>
			<cell class="top-item" :title="name" value="使用积分" is-link>
				<img slot="icon" src="../../../assets/images/draw/photo2.png">
			</cell>
		</group>
		<group :gutter='0' class="top-tip-box">
			<cell class="top-tip" primary="content" is-link link="/member/earnings/profit">
				<p>累计收益</p>
				<p>1000.00</p>
			</cell>
		</group>
		<div class="tip-box">
			<div class="top">
				<div class="one-item">
					<div>
						<span>通用积分</span>
						<img @click="isopen = !isopen" :src="isopen?'./static/member/openeyes.png':'./static/member/closedeyes.png'" alt="" />
					</div>
					<p>{{isopen?10000000000000:'***'}}</p>
				</div>
				<!--<div class="one-item">
					<p>今日收益</p>
					<p>100000</p>
				</div>-->
			</div>
			<div class="bottom">
				<div class="one-item" v-for="(item,index) in tyList" @click="$router.push({path:item.url})">
					<p :style="index == 5?color:''">{{item.title}}</p>
					<p>{{item.money}}</p>
				</div>
			</div>
		</div>

		<div class="tip-box">
			<div class="top">
				<div class="one-item">
					<div>
						<span>信用积分</span>
						<img @click="isopen2 = !isopen2" :src="isopen2?'./static/member/openeyes.png':'./static/member/closedeyes.png'" alt="" />
					</div>
					<p>{{isopen2?10000000000000:'***'}}</p>
				</div>
				<!--<div class="one-item">
					<p>今日收益</p>
					<p>0.00</p>
				</div>-->
			</div>
			<div class="bottom">
				<div class="one-item" v-for="(item,index) in yList" @click="$router.push({path:item.url})">
					<p>{{item.title}}</p>
					<p>{{item.money}}</p>
				</div>
			</div>
		</div>
		<img style="display: block;width: 100%;height: auto;" :src="'./static/images/integral-bg.png'" alt="" />
	</div>
</template>

<script>
	import { Card, Cell, Group, } from 'vux'
	import settingHeader from '../../../components/setting_header'
	export default {
		data() {
			return {
				title: '我的钱包',
				name: '乐乐',
				isopen: true,
				isopen2: false,
				color:{
					color:'#336FFF'
				},
				tyList:[
					{title:'充值奖励',money:'300.00',url:'/member/earnings/reward'},
					{title:'购物奖励',money:'300.00',url:'/member/earnings/reward'},
					{title:'中奖奖励',money:'300.00',url:'/member/earnings/reward'},
					{title:'分红奖励',money:'300.00',url:'/member/earnings/reward'},
					{title:'任务奖励',money:'300.00',url:'/member/earnings/reward'},
					{title:'积分充值',money:'充100送100',url:'/member/purse/recharge'},
				],
				yList:[
					{title:'充值奖励',money:'300.00',url:'/member/earnings/reward'},
					{title:'购物奖励',money:'300.00',url:'/member/earnings/reward'},
					{title:'推荐用户',money:'300.00',url:'/member/earnings/reward'},
					{title:'分红奖励',money:'300.00',url:'/member/earnings/reward'},
				]
			}
		},
		created() {

		},
		mounted() {},
		methods: {

		},
		created() {},
		components: {
			settingHeader,
			Card
		}
	}
</script>

<style lang="less">
	.wallet-box {
		font-family: MicrosoftYaHei;
		.tip-box {
			margin-top: 0.2rem;
			background-color: white;
			.bottom {
				display: flex;
				flex-wrap: wrap;
				.one-item {
					width: 50%;
					padding: 0.31rem 0.28rem;
					height: 1.35rem;
					position: relative;
					box-sizing: border-box;
					p:nth-child(1) {
						font-size: 0.30rem;
						color: rgba(26, 38, 66, 1);
					}
					p:nth-child(2) {
						font-size: 0.28rem;
						color: rgba(115, 134, 173, 1);
					}
				}
				.one-item:before {
					content: " ";
					position: absolute;
					right: 0;
					top: 0;
					width: 1px;
					bottom: 0;
					border-right: 1px solid #c7c7c7;
					color: #c7c7c7;
					transform-origin: 100% 0;
					transform: scaleX(.5);
				}
				.one-item:after {
					content: " ";
					position: absolute;
					top: 0;
					right: 0;
					height: 1px;
					border-top: 1px solid #c7c7c7;
					color: #d9d9d9;
					transform-origin: 0 0;
					transform: scaleY(.5);
					left: 0;
				}
			}
			.top {
				display: flex;
				height: 1.56rem;
				padding: 0.31rem 0.28rem;
				box-sizing: border-box;
				.one-item {
					flex: 1;
					display: flex;
					justify-content: center;
					flex-direction: column;
				}
				.one-item:nth-child(1) {
					div>span {
						font-size: 0.30rem;
						color: rgba(115, 134, 173, 1);
						margin-right: 0.14rem;
					}
					div>img {
						width: 0.3rem;
						height: auto;
					}
					p {
						margin-top: 0.1rem;
						color: rgba(26, 38, 66, 1);
					}
				}
				.one-item:nth-child(2) {
					text-align: right;
					p:nth-child(1) {
						font-size: 0.30rem;
						color: rgba(115, 134, 173, 1);
					}
					p:nth-child(2) {
						font-size: 0.48rem;
						color: rgba(115, 134, 173, 1);
					}
				}
			}
		}
		.top-tip {
			height: 1.55rem;
			background-color: white;
			box-sizing: border-box;
			p:nth-child(1) {
				font-size: 0.28rem;
				color: rgba(115, 134, 173, 1);
				text-align: left;
			}
			p:nth-child(2) {
				font-size: 0.48rem;
				color: rgba(26, 38, 66, 1);
				text-align: left;
			}
		}
		.top-tip-box .weui-cells:after{
			border-bottom: none!important;
		}
		.top-item {
			height: 1.6rem;
			font-size: 0.32rem;
			color: rgba(26, 38, 66, 1);
			img {
				width: 0.76rem;
				height: 0.76rem;
				margin-right: 0.35rem;
			}
			.weui-cell__ft {
				color: rgba(51, 111, 255, 1);
			}
		}
	}
</style>