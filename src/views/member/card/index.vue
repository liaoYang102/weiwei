<template>
	<div class="info-box">
		<settingHeader :title="title"></settingHeader>
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
			<span class="shaix" @click.active="showRight"><img src="../../../../static/member/shaixuanIcon.png" alt="" /></span>
		</div>
		<div class="card-box">
			<swiper v-model="cardLook" height="800px" :show-dots="false">
				<swiper-item>
					<scroller lock-x height="-80" @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="200">
						<div class="box2">
							<div class="card-list">
								<router-link to="/member/card/detail">
									<div class="card-ltem" :class="[item.type ==1 ? 'b-bg':'y-bg']" v-for="(item,index) in cardList">
										<div class="card-f">{{item.store}}</div>
										<div class="card-m">
											<div style="text-align: right;">{{item.tip}}</div>
											<div>{{item.typename}}</div>
										</div>
									</div>
								</router-link>
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
									<div class="top2">
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
			<!--<div class="drawer-box" @click.active="showDrawer">
				<masker :fullscreen="drawerShow">
					<div slot="content">
						<drawer :show.sync="drawerShow" show-mode="overlay" placement="right" :drawer-style="{'background-color':'white', width: '200px',height:'100vh'}">
							<div slot="drawer">
								<div class="typeItem" :class="{'typeItem-bg':typeItemActive == index}" v-for="(item,index) in typeList" @click.active="type(index)">{{item}}</div>
							</div>
						</drawer>
					</div>
				</masker>
			</div>-->
			<!--筛选菜单栏-->
			<div v-transfer-dom>
				<popup v-model="show9" position="top">
					<div class="position-vertical-demo">
						<!--<card>
							<div slot="content" class="card-demo-flex oneClass">
								<div class="vux-1px-r" :class="{'typeActive':typeIndex === 0}" @click="typeChange(0)">
									<div><i class="iconfont icon-riqi shijian"></i>时间</div>
								</div>
								<div class="vux-1px-r" :class="{'typeActive':typeIndex === 1}" @click="typeChange(1)">
									分类
									<img class="ren-jt" :class="[jtFalg?'xia':'top']" v-if="typeIndex == 1" src="../../../assets/images/member/jiantou.png" alt="" />
									<img class="gyay-jt" v-else src="../../../assets/images/member/jiantou1.png" alt="" />
								</div>
							</div>
						</card>-->
						<div class="twoClass">
							<div class="type-item" v-for="(item,index) in twoClass">
								<span :class="{'twoActive':twoIndex == index}" @click="twoChange(index,item)">{{item}}</span>
							</div>
						</div>
					</div>
				</popup>
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
				twoClass: ['所有优惠券', '体验券', '满减券', '折扣券'],
				show9: false,
				data1: '',
				twoIndex: '',
				typeText: '全部',
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
			},
			showRight() {
				this.show9 = true
			},
			twoChange(index, item) {
				this.twoIndex = index
				this.typeText = item
				this.show9 = false
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
	.position-vertical-demo {
		background: white;
		.card-demo-flex {
			display: flex;
			align-items: center;
		}
		.oneClass {
			height: 0.9rem;
			.shijian {
				margin-right: 0.1rem;
			}
			img {
				width: 0.3rem;
				vertical-align: middle;
			}
			.xia {
				transform: rotate(180deg);
				transition: all 0.2s linear;
			}
			.top {
				transform: rotate(0deg);
				transition: all 0.2s linear;
			}
		}
		.twoClass {
			display: flex;
			flex-wrap: wrap;
			padding: 0.2rem 0;
			.type-item {
				width: 25%;
				padding: 0.08rem 0.25rem;
				text-align: center;
				box-sizing: border-box;
				span {
					display: inline-block;
					width: 100%;
					height: 0.5rem;
					line-height: 0.5rem;
					background: #eaeaea;
					border-radius: 2px;
					font-size: 0.20rem;
				}
				.twoActive {
					background: #336FFF;
					color: white;
				}
			}
		}
		.typeActive {
			color: red;
		}
		.card-padding {
			padding: 15px;
		}
		.card-demo-flex>div {
			flex: 1;
			text-align: center;
		}
		.card-demo-flex span {
			font-size: 0.2rem;
		}
	}
	
	.card-header {
		padding: 0.17rem 0.6rem;
		display: flex;
		align-items: center;
		background-color: white;
		.tab {
			flex: 1;
			.vux-tab-item {
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
	
	.card-box {
		padding: 0 15px;
		position: relative;
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
			margin-top: 0.13rem;
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
			.top2{
				font-size: 0.24rem;
				color: #ffffff;
				display: flex;
				align-content: center;
				span{
					margin-right: 0.4rem;
				}
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