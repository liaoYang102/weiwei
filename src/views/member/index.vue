<template>
	<div class="info-box">
		<settingHeader :title="title"></settingHeader>
		<div class="content">
			<section>
				<div class="info-bg">
					<router-link to="/member/setting/index"><img class="setting-img" src="../../assets/images/member/shezi.png" /></router-link>
					<div class="avatar">
						<router-link to="/member/info/index">
							<img :src="images?images:'./static/images/mrtx.png'" alt="" />
						</router-link>
						<p class="nickname">{{userInfo.nickname}}</p>
						<p class="status">{{userInfo.levelName}}</p>
					</div>

					<div class="account">
						<router-link to="/member/earnings/currency">
							<div class="universal">
								<p>
									<div class="num">
										<span class="money">{{userInfo.balance}}</span>
										<!--<badge></badge>-->
									</div>
								</p>
								<p class="universalAccount">通用积分</p>
							</div>
						</router-link>
						<router-link to="/member/earnings/credit">
							<div class="universal">
								<div class="num">
									<span class="money">{{userInfo.availablePoints}}</span>

								</div>
								<p class="universalAccount">信用积分</p>
							</div>
						</router-link>
					</div>
				</div>
			</section>
			<section>
				<div class="navigation">
					<ul>
						<li>
							<router-link to="/member/purse/wallet">
								<div class="li-box">
									<img src="../../assets/images/member/member_wallet.png">
									<!--<badge class="new"></badge>-->
								</div>
								<p>我的资产</p>
							</router-link>
						</li>
						<li>
							<router-link to="/member/team/index">
								<div class="li-box">
									<img src="../../assets/images/member/member_cardpackage.png">
									<!--<badge class="new"></badge>-->
								</div>
								<p>我的团队</p>
							</router-link>
						</li>
						<li>
							<router-link to="/shop/my_order">
								<div class="li-box">
									<img src="../../assets/images/member/member_account.png">
									<!--<badge class="new-account" text="2312"></badge>-->
								</div>

								<p>我的订单</p>
							</router-link>
						</li>
						<li>
							<a @click="toQrcode(userInfo)">
								<div class="li-box">
									<img src="../../assets/images/member/member_code.png">
								</div>
								<p>推广码</p>
							</a>
						</li>
					</ul>
				</div>
			</section>
			<section>
				<router-link to="/draw">
					<div class="banner">
						<img src="../../assets/images/member/member_banner.png" alt="">
						<!-- <img src="static/images/alliance1.png"/> -->
					</div>
				</router-link>
			</section>
			<section>
				<group gutter="0">
					<cell v-for="(item,index) in infoList" :key="index" class="info-item" :title="item.text" is-link :link="item.url">
						<img slot="icon" :src="item.img">
					</cell>
				</group>
			</section>
		</div>
	</div>
</template>

<script>
	import { Badge, Cell, Group } from 'vux'
	import settingHeader from '../../components/setting_header'
	export default {
		data() {
			return {
				title: '个人中心',
				userInfo: {},
				images: '',
				infoList: [{
						img: './static/member/member_1.png',
						text: '我的优惠券',
						url: '/member/coupon/index'
					},
					{
						img: './static/member/m_index12.png',
						text: '多商户商城',
						url: '/multi_user_mall/summary'
					},
					/*{
						img: './static/member/member_2.png',
						text: '我的订单',
						url: '/shop/my_order'
					},*/
					{
						img: './static/member/member_3.png',
						text: '我的关注',
						url: '/member/follow/index'
					},
					{
						img: './static/member/member_4.png',
						text: '收货地址',
						url: '/member/address/index'
					},
					{
						img: './static/member/m_index17.png',
						text: '幸运抽奖',
						url: '/draw'
					},
					/*{
						img: './static/member/m_index13.png',
						text: '我的卡包',
						url: '/member/card/index'
					}, {
						img: './static/member/menjin.png',
						text: '门禁系统',
						url: '/lock/card'
					},*/
				],
				yhqTip: '5张快过期'
			}
		},
		created() {
			this.getUserInfo()
		},
		methods: {
			getUserInfo() {
				var _this = this
				//获取用户信息
				_this.$http.get(_this.url.user.getBasicInfo, {
					params: {
						userId: localStorage['userId']
					}
				}).then((res) => {
					if(res.data.status == "00000000") {
						_this.userInfo = res.data.data
						if(_this.userInfo.avatar.original) {
							_this.images = _this.userInfo.avatar.original
						}
					}
				})
			},
			toQrcode(info) {
				var _this = this
				_this.$router.push({
					path: '/member/purse/qrcode'
				})
			}
		},
		components: {
			settingHeader,
			Badge,
			Cell,
			Group
		}
	}
</script>

<style lang="less" scoped>
	.info-box {
		background-color: #F5F6FA;
		padding-bottom: 1rem;
		.info-bg {
			height: 4.47rem;
			background: url(../../assets/images/member/index-bg.png) no-repeat;
			background-size: 100%;
			position: relative;
		}
		.setting-img {
			width: 0.44rem;
			height: 0.44rem;
			position: absolute;
			right: 0.33rem;
			top: 0.28rem;
		}
		.avatar {
			width: 100%;
			padding-top: 0.29rem;
			text-align: center;
			img {
				border-radius: 50%;
				width: 1.44rem;
				height: 1.44rem;
			}
			.nickname {
				font-family: PingFangSC-Regular;
				font-size: 0.38rem;
				color: #FFFFFF;
				letter-spacing: 0;
			}
			.status {
				font-family: PingFangSC-Regular;
				font-size: 0.24rem;
				color: #FFFFFF;
				letter-spacing: 0;
				margin-top: 0.1rem;
			}
		}
		.account {
			margin-top: 0.313rem;
			margin-bottom: 0.186rem;
			display: flex;
			width: 100%;
			a {
				flex: 1;
				text-align: center;
				.universal {
					.num {
						font-size: 0.391rem;
						color: #333333;
						letter-spacing: 0;
						position: relative;
						display: flex;
						align-items: center;
						justify-content: center;
						.money {
							font-family: PingFangSC-Medium;
							font-size: 0.46rem;
							color: #FFFFFF;
							letter-spacing: 0;
							margin-right: 0.2rem;
						}
					}
					.universalAccount {
						font-family: PingFangSC-Regular;
						font-size: 0.24rem;
						color: #FFFFFF;
						letter-spacing: 0;
					}
				}
				.credit {
					flex: 1;
					text-align: center;
					.num {
						font-size: 0.391rem;
						color: #333333;
						letter-spacing: 0;
						position: relative;
						line-height: 0.54rem;
					}
					.creditlAccount {
						font-size: 0.204rem;
						color: #A3A3A3;
						letter-spacing: 0;
					}
				}
			}
		}
		.navigation {
			width: 100%;
			margin: 0.2rem 0;
			background: white;
			ul {
				padding: 0.26rem 0.2rem;
				display: flex;
				li {
					flex: 1;
					a {
						position: relative;
						display: flex;
						align-items: center;
						justify-content: center;
						flex-direction: column;
						.li-box {
							position: relative;
							width: 0.52rem;
							height: 0.52rem;
							img {
								width: 100%;
								height: auto;
							}
							.new {
								position: absolute;
								right: -3px;
								top: -2px;
							}
							.new-account {
								position: absolute;
								right: -28px;
								top: -2px;
							}
						}
						p {
							font-family: PingFangSC-Regular;
							font-size: 0.24rem;
							color: #7D7D7D;
							letter-spacing: 0;
							margin-top: 0.18rem;
						}
					}
				}
			}
		}
		.banner {
			width: 100%;
			height: 2.2rem;
			margin-bottom: 0.2rem;
			img {
				width: 100%;
				height: 2.2rem;
			}
		}
		.info-item {
			font-family: PingFangSC-Regular;
			font-size: 0.28rem;
			color: #464646;
			letter-spacing: 0;
			img {
				width: 0.48rem;
				height: 0.48rem;
				vertical-align: sub;
				margin-right: 0.13rem;
			}
		}
	}
</style>