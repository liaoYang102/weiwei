<template>
	<div class="info-box">
		<settingHeader :title="title"></settingHeader>
		<div class="card-box">
			<div class="card-header">
				<div class="tab">
					<tab v-model="cardLook" custom-bar-width="0.56rem">
						<tab-item selected @on-item-click="lookCard">全部</tab-item>
						<tab-item @on-item-click="lookCard">我的</tab-item>
					</tab>
				</div>
				<!--<button-tab class="change-box" :height="34" v-model="cardLook">
				<button-tab-item selected @on-item-click="lookCard()">全部</button-tab-item>
				<button-tab-item @on-item-click="lookCard()"><span class="vux-reddot-s">我的</span></button-tab-item>
			</button-tab>-->
				<span class="shaix" @click.active="showDrawer">筛选<img src="../../../../static/member/shaixuanIcon.png" alt="" /></span>
			</div>
			<swiper v-model="cardLook" height="800px" :show-dots="false">
				<swiper-item>
					<scroller lock-x height="-80" @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="200">
						<div class="box2">
							<div class="card-list">
								<div class="card-ltem" :class="[item.type ==1 ? 'b-bg':'y-bg']" v-for="(item,index) in cardList">
									<div class="card-f">{{item.store}}</div>
									<div class="card-m">
										<div>{{item.tip}}</div>
										<div>{{item.typename}}</div>
									</div>
								</div>
							</div>
							<load-more tip="loading" v-if="onFetching"></load-more>
						</div>
					</scroller>
				</swiper-item>
				<swiper-item>
					<scroller lock-x height="-80" @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="200">
						<div class="box2">
							<div class="card-list">
								<div class="card-item2">
									<div class="top">
										<span>适用所有联营门店</span>
										<span>查看详情</span>
									</div>
									<div class="name">威伐光25分钟体验套餐卡</div>
									<div class="top">
										<span>仅支持威伐光设备</span>
										<span>可用次数： 10</span>
									</div>
								</div>
							</div>
							<load-more tip="loading" v-if="onFetching"></load-more>
						</div>
					</scroller>
				</swiper-item>
			</swiper>
			<div class="drawer-box" @click.active="showDrawer">
				<masker :fullscreen="drawerShow">
					<div slot="content">
						<drawer :show.sync="drawerShow" show-mode="overlay" placement="right" :drawer-style="{'background-color':'white', width: '200px',height:'100vh'}">
							<div slot="drawer">
								<div class="typeItem" :class="{'typeItem-bg':typeItemActive == index}" v-for="(item,index) in typeList" @click.active="type(index)">{{item}}</div>
							</div>
						</drawer>
					</div>
				</masker>
			</div>
		</div>
	</div>
</template>

<script>
	import { Badge, Cell, Group, Scroller, Masker, Drawer, Tab, TabItem, Swiper, SwiperItem } from 'vux'
	import settingHeader from '../../../components/setting_header'
	export default {
		data() {
			return {
				title: '全部卡包',
				onFetching: false,
				drawerShow: false,
				typeItemActive: 0,
				cardLook: 0,
				typeList: ['所有优惠券', '体验券', '满减券', '折扣券'],
				cardList: [{
						store: '威伐光番禺门店',
						type: '1',
						tip: '9折',
						typename: 'VIP会员卡'
					},
					{
						store: '威伐光番禺门店',
						type: '0',
						tip: '8折',
						typename: 'VIP会员卡'
					},
					{
						store: '威伐光番禺门店',
						type: '1',
						tip: '9折',
						typename: 'VIP会员卡'
					},
					{
						store: '威伐光番禺门店',
						type: '0',
						tip: '8折',
						typename: 'VIP会员卡'
					}, {
						store: '威伐光番禺门店',
						type: '1',
						tip: '8折',
						typename: 'VIP会员卡'
					}, {
						store: '威伐光番禺门店',
						type: '0',
						tip: '8折',
						typename: 'VIP会员卡'
					}, {
						store: '威伐光番禺门店',
						type: '1',
						tip: '8折',
						typename: 'VIP会员卡'
					}, {
						store: '威伐光番禺门店',
						type: '0',
						tip: '8折',
						typename: 'VIP会员卡'
					},
				]
			}
		},
		created() {

		},
		mouted() {

		},
		methods: {
			enter(el, done) {
				console.log(123)
			},
			onScrollBottom() {
				if(this.onFetching) {
					// do nothing
				} else {
					this.onFetching = true
					setTimeout(() => {
						this.$nextTick(() => {
							this.$refs.scrollerBottom.reset()
						})
						this.onFetching = false
					}, 2000)
				}
			},
			showDrawer() {
				this.drawerShow = !this.drawerShow
			},
			type(index) {
				this.typeItemActive = index
			},
			lookCard(index) {
				console.log(this.cardLook)
				this.cardLook = index
			}
		},
		components: {
			settingHeader,
			Badge,
			Cell,
			Group,
			Scroller,
			Masker,
			Drawer,
			Tab,
			TabItem,
			Swiper,
			SwiperItem
		}
	}
</script>

<style lang="less" scoped>
	.card-box {
		padding: 0 15px;
		position: relative;
		.card-header {
			padding: 0.17rem;
			display: flex;
			align-items: center;
			.tab {
				flex: 1;
				.vux-tab-item{
					background: transparent!important;
				}
			}
			.shaix {
				padding-left: 0.5rem;
				display: flex;
				align-items: center;
				color: #328bff;
				font-size: 0.24rem;
				img {
					margin-left: 0.1rem;
					width: 0.4rem;
				}
			}
		}
		.card-ltem {
			height: 1.82rem;
			border-radius: 2px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding-left: 1.65rem;
			position: relative;
			margin-bottom: 0.24rem;
			.card-f {
				color: #fff;
				font-size: 0.3rem;
			}
			.card-m {
				color: #fff;
				font-size: 0.24rem;
				margin-right: 0.4rem;
			}
		}
		.b-bg {
			background: url(../../../../static/member/boxBg1.png) no-repeat;
			background-size: 100%;
		}
		.y-bg {
			background: url(../../../../static/member/boxBg3.png);
			background-size: 100%;
		}
		.card-item2 {
			height: 2.7rem;
			border-radius: 2px;
			background: url(../../../../static/member/cardBg1.png) no-repeat;
			background-size: 100%;
			padding: 0.3rem;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.top {
				font-size: 0.24rem;
				color: #ffffff;
				display: flex;
				align-content: center;
				justify-content: space-between;
			}
			.name {
				color: white;
				font-size: 0.4rem;
			}
		}
		.drawer-box {
			position: fixed;
			top: 46px;
			right: 0;
			z-index: 1111;
			.typeItem {
				text-align: center;
				height: 1rem;
				line-height: 1rem;
				color: #888;
			}
			.typeItem-bg {
				background-color: #26a2ff;
				color: white;
			}
		}
	}
	.card-box:before {
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