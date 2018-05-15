<template>
	<div class="cardindex-box">
		<x-header class="b-w" :left-options="{backText:''}">
			<div class="tab">
				<tab v-model="cardLook" custom-bar-width="0.56rem">
					<tab-item selected @on-item-click="lookCard">全部</tab-item>
					<tab-item @on-item-click="lookCard">我的</tab-item>
				</tab>
			</div>
			<span slot="right" class="shaix" @click="showRight"><img src="../../../../static/member/shaixuanIcon.png" alt="" /></span>
		</x-header>
		<!--<div class="card-header">
			<button-tab class="change-box" :height="34" v-model="cardLook">
				<button-tab-item selected @on-item-click="lookCard()">全部</button-tab-item>
				<button-tab-item @on-item-click="lookCard()"><span class="vux-reddot-s">我的</span></button-tab-item>
			</button-tab>
		</div>-->

		<div class="card-box">
			<swiper v-model="cardLook" height="100vh" :show-dots="false" :threshold='150'>
				<swiper-item>
					<div class="box2">
						<div class="wrapper1" ref="wrapper1">
							<div class="content">
								<div v-if="cardList">
									<div class="card-list">
										<div class="card-ltem" :class="[item.type ==1 ? 'b-bg':'y-bg']" v-for="(item,index) in cardList">
											<div class="card-f">{{item.store}}</div>
											<div class="card-m">
												<div style="text-align: right;">{{item.tip}}</div>
												<div>{{item.typename}}</div>
											</div>
										</div>
									</div>
									<Loading v-if="show"></Loading>
									<Nomore v-if="showNo"></Nomore>
								</div>
								<noData v-if="cardList.length == 0" :status="2" stateText="暂无数据"></noData>
							</div>
						</div>
					</div>
				</swiper-item>
				<swiper-item>
					<div class="box2">
						<div class="wrapper2" ref="wrapper2">
							<div class="content">
								<div class="card-list">
									<router-link to="/member/card/detail">
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
									</router-link>
								</div>
								<Loading v-if="show2"></Loading>
							</div>
						</div>
					</div>
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
	import { Badge, Cell, Group, Masker, Drawer, Tab, TabItem, Swiper, SwiperItem, XHeader } from 'vux'
	import Loading from '../../../components/loading'
	import Nomore from '../../../components/noMore'
	import noData from '../../../components/noData'
	import BScroll from 'better-scroll'
	export default {
		data() {
			return {
				title: '全部卡包',
				show: false,
				show2: false,
				showNo:false,
				drawerShow: false,
				typeItemActive: 0,
				cardLook: 0,
				twoClass: ['所有优惠券', '体验券', '满减券', '折扣券'],
				show9: false,
				data1: '',
				twoIndex: '',
				typeText: '全部',
				cardList: [
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
		mounted() {
			this.InitScroll()
		},
		methods: {
			InitScroll() {
				this.$nextTick(() => {
					if(!this.scroll) {
						this.scroll = new BScroll(this.$refs.wrapper1, {
							click: true,
							scrollY: true,
							pullUpLoad: {
								threshold: -30, // 负值是当上拉到超过低部 70px；正值是距离底部距离 时，                    
							}
						})
						this.scroll.on('pullingUp', (pos) => {
							this.onFetching = true;
							this.LoadData()
							this.$nextTick(function() {
								this.scroll.finishPullUp();
								this.scroll.refresh();
							});
						})

						this.scroll2 = new BScroll(this.$refs.wrapper2, {
							click: true,
							scrollY: true,
							pullUpLoad: {
								threshold: -30, // 负值是当上拉到超过低部 70px；正值是距离底部距离 时，                    
							}
						})
						this.scroll2.on('pullingUp', (pos) => {
							this.onFetching = true;
							this.LoadData2()
							this.$nextTick(function() {
								this.scroll2.finishPullUp();
								this.scroll2.refresh();
							});
						})
					} else {
						this.scroll.refresh()
						this.scroll2.refresh()
					}
				})
			},
			LoadData() {
				var _this = this
				if(_this.cardList.length <= 11) {
					_this.show = true
					_this.showNo = false
					_this.cardList = _this.cardList.concat({
						store: '威伐光番禺门店',
						type: '0',
						tip: '8折',
						typename: 'VIP会员卡'
					})
					setTimeout(function() {
						_this.show = false
					}, 1500)
				} else {
					_this.show = false
					_this.showNo = true
				}
			},
			LoadData2() {
				let _this = this;
				setTimeout(function() {
					_this.onFetching = false;
				}, 3500)
			},
			enter(el, done) {
				console.log(123)
			},
			showDrawer() {
				this.drawerShow = !this.drawerShow
			},
			type(index) {
				this.typeItemActive = index
			},
			lookCard(index) {
				this.onFetching = false
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
			Badge,
			Cell,
			Group,
			Masker,
			Drawer,
			Tab,
			TabItem,
			Swiper,
			SwiperItem,
			Loading,
			XHeader,
			Nomore,
			noData
		}
	}
</script>

<style lang="less">
	.cardindex-box {
		.b-w {
			background-color: white;
			position: relative;
			.vux-tab-ink-bar {
				bottom: 4px!important;
			}
			.shaix {
				img {
					width: 0.4rem;
					height: 0.4rem;
					vertical-align: middle;
				}
			}
			.vux-header-left .left-arrow:before {
				border: 1px solid #222;
				border-width: 1px 0 0 1px;
			}
		}
		.b-w:after {
			content: " ";
			position: absolute;
			left: 0;
			bottom: 0;
			right: 0;
			height: 1px;
			border-top: 1px solid #D9D9D9;
			color: #D9D9D9;
			-webkit-transform-origin: 0 0;
			transform-origin: 0 0;
			-webkit-transform: scaleY(0.5);
			transform: scaleY(0.5);
			left: 0;
		}
		.box2 {
			.wrapper1,
			.wrapper2 {
				position: fixed;
				top: 0;
				bottom: 47px;
				overflow: hidden;
				width: 100%;
			}
		}
		.card-box {
			padding: 0 15px;
			background-color: white;
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
				.top2 {
					font-size: 0.24rem;
					color: #ffffff;
					display: flex;
					align-content: center;
					span {
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
	}
	
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
					background: #F5F6FA;
					border-radius: 2px;
					font-size: 0.20rem;
					color: #1A2642;
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
</style>