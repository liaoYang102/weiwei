<template>
	<div class="wallet-box">
		<settingHeader :title="title"></settingHeader>
		<group :gutter='0'>
			<cell class="top-item" :title="fundInfo.nickname" value="使用积分" is-link link='/shop'>
				<img slot="icon" :src="userImg">
			</cell>
		</group>
		<group :gutter='0' class="top-tip-box">
			<cell class="top-tip" primary="content" is-link link="/member/earnings/profit">
				<p>累计收益</p>
				<p>{{fundInfo.income}}</p>
			</cell>
		</group>
		<div class="tip-box">
			<div class="top">
				<div class="one-item">
					<div>
						<span>通用积分</span>
						<img @click="changeFundShow" :src="fundInfo.isshowFund == 1?'./static/member/openeyes.png':'./static/member/closedeyes.png'" alt="" />
					</div>
					<p>{{fundInfo.isshowFund?fundInfo.balance:'****'}}</p>
				</div>
				<!--<div class="one-item">
					<p>今日收益</p>
					<p>100000</p>
				</div>-->
			</div>
			<div class="bottom">
				<div class="one-item" @click="toCurrencyReward('通用积分',3)">
					<p>累计充值</p>
					<p>{{fundInfo.isshowFund?fundInfo.recharge:'****'}}</p>
				</div>
				<div class="one-item" @click="toCurrencyReward('通用积分',4)">
					<p>购物奖励</p>
					<p>{{fundInfo.isshowFund?fundInfo.cashback:'****'}}</p>
				</div>
				<div class="one-item" @click="toCurrencyReward('通用积分',6)">
					<p>中奖奖励</p>
					<p>{{fundInfo.isshowFund?fundInfo.lottery:'****'}}</p>
				</div>
				<div class="one-item" @click="toCurrencyReward('通用积分',5)">
					<p>分红奖励</p>
					<p>{{fundInfo.isshowFund?fundInfo.commission:'****'}}</p>
				</div>
				<div class="one-item" @click="toCurrencyReward('通用积分',7)">
					<p>任务奖励</p>
					<p>{{fundInfo.isshowFund?fundInfo.taskBalance:'****'}}</p>
				</div>
				<div class="one-item" @click="$router.push({path:'/member/purse/recharge'})">
					<p style="color:#336FFF">积分充值</p>
					<p>充值1000赠送1000</p>
				</div>
			</div>
		</div>

		<div class="tip-box">
			<div class="top">
				<div class="one-item">
					<div>
						<span>信用积分</span>
						<img @click="changeFundShow" :src="fundInfo.isshowFund == 1?'./static/member/openeyes.png':'./static/member/closedeyes.png'" alt="" />
					</div>
					<p>{{fundInfo.isshowFund?fundInfo.availablePoints:'****'}}</p>
				</div>
				<!--<div class="one-item">
					<p>今日收益</p>
					<p>0.00</p>
				</div>-->
			</div>
			<div class="bottom">
				<div class="one-item" @click="toCreditReward('信用积分',3)">
					<p>充值奖励</p>
					<p>{{fundInfo.isshowFund?fundInfo.rechargePoints:'****'}}</p>
				</div>
				<div class="one-item" @click="toCreditReward('信用积分',2)">
					<p>消费</p>
					<p>{{fundInfo.isshowFund?fundInfo.cashbackPoints:'****'}}</p>
				</div>
				<div class="one-item" @click="toCreditReward('信用积分',6)">
					<p>中奖奖励</p>
					<p>{{fundInfo.isshowFund?fundInfo.lotteryPoints:'****'}}</p>
				</div>
				<div class="one-item" @click="toCreditReward('信用积分',5)">
					<p>推荐用户</p>
					<p>{{fundInfo.isshowFund?fundInfo.recommendPoints:'****'}}</p>
				</div>
				<div class="one-item" @click="toCreditReward('信用积分',7)">
					<p>任务奖励</p>
					<p>{{fundInfo.isshowFund?fundInfo.taskPoints:'****'}}</p>
				</div>
				<div class="one-item">
					
				</div>
			</div>
		</div>
		<router-link to='/draw'>
			<img style="display: block;width: 100%;height: auto;" :src="'./static/images/integral-bg.png'" alt="" />
		</router-link>
		
	</div>
</template>

<script>
	import { Card, Cell, Group, } from 'vux'
	import settingHeader from '../../../components/setting_header'
	export default {
		data() {
			return {
				title: '我的钱包',
				isopen: true,
				isopen2: false,
				fundInfo: {},
				userImg: '',
				isshowFund: 0
			}
		},
		created() {

		},
		mounted() {
			this.getFundInfo()
		},
		methods: {
			getFundInfo() {
				var _this = this
				_this.$http.get(_this.url.user.getFundInfo, {
					params: {
						userId: localStorage.getItem('userId')
					}
				}).then((res) => {
					if(res.data.status == "00000000") {
						_this.fundInfo = res.data.data
						_this.userImg = _this.fundInfo.avatar.original
						_this.isshowFund = _this.fundInfo.isshowFund
					}
				})
			},
			//修改资产显示状态
			changeFundShow() {
				var _this = this
				_this.$http.post(_this.url.user.changeFundShow, {
					userId: localStorage.getItem('userId'),
					isshowFund: _this.isshowFund == 0 ? 1 : 0
				}).then((res) => {
					if(res.data.status == "00000000") {
						_this.getFundInfo()
					}
				})
			},
			//跳转通用积分
			toCurrencyReward(title, type) {
				this.$router.push({
					name: 'currencyreward',
					query: {
						title: title,
						type: type
					}
				})
			},
			//跳转信用积分
			toCreditReward(title, type) {
				this.$router.push({
					name: 'creditreward',
					query: {
						title: title,
						type: type
					}
				})
			}
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
		.top-tip-box .weui-cells:after {
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
				border-radius: 50%;
			}
			.weui-cell__ft {
				color: rgba(51, 111, 255, 1);
			}
		}
	}
</style>