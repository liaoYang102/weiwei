<template>
	<div class="couponindex-box">

		<x-header class="b-w" :left-options="{backText:''}">
			<div class="tar-box">
				<tab class="tab" :line-width="2" active-color="#397df8" custom-bar-width="0.56rem">
					<tab-item v-for="(item,index) in couponType" :key="index" :selected="typeActive == index" @on-item-click="onItemClick(index)">{{item}}</tab-item>
				</tab>
			</div>
			<div class="edit-btn" @click="showDrawer" slot="right">
				<img src="../../../assets/images/index/shaixuan.png" alt="" />
			</div>
		</x-header>

		<div class="couponList">
			<div class="wrapper" :class="{'top46':hShow}" ref="wrapper">
				<div class="content">
					<div v-if="couponList.length>0">
						<div v-for="(item,index) in couponList" :style="[!item.show?mb:'']">
							<div class="rollOne" :class="[{'red':item.bq == 1},{'blue':item.bq == 0},{'gq':item.timeout}]">
								<div class="left">
									<p><i>￥</i>{{item.money}}</p>
									<p>{{item.emoney}}</p>
								</div>
								<div class="right">
									<div class="top">
										<span>{{item.bq == 1?'官方':'商家'}}</span><span>{{item.type}}</span>
									</div>
									<div class="middle">{{item.time}}</div>
									<div class="bottom" @click="item.show = !item.show">查看详情</div>
								</div>
							</div>
							<div class="detail" v-if="item.show">
								仅限135******95会员使用
							</div>
						</div>

						<Loading v-if="show"> </Loading>
						<Nomore v-if="showNo"></Nomore>
					</div>
					<noData v-if="couponList.length == 0" :status="2" stateText="暂无数据"></noData>
				</div>
			</div>
		</div>
		<!--筛选菜单栏-->
		<div v-transfer-dom>
			<popup v-model="show9" position="top">
				<div class="position-vertical-demo">
					<div class="twoClass">
						<div class="type-item" v-for="(item,index) in twoClass">
							<span :class="{'twoActive':twoIndex == index}" @click="twoChange(index,item)">{{item}}</span>
						</div>
					</div>
				</div>
			</popup>
		</div>

	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import { Tab, TabItem, Masker, Drawer, Spinner, XHeader } from 'vux'
	import settingHeader from '../../../components/setting_header'
	import Loading from '../../../components/loading'
	import Nomore from '../../../components/noMore'
	import noData from '../../../components/noData'
	export default {
		data() {
			return {
				typeActive: 0,
				twoIndex: 0,
				drawerShow: false,
				show: false,
				couponType: ['全部', '未使用', '已使用', '已过期'],
				twoClass: ['所有优惠券', '体验券', '满减券', '折扣券'],
				title: '我的优惠券',
				hShow: '',
				show9: false,
				showNo: false,
				showIndex:'',
				mb:{
					marginBottom:'0.2rem'
				},
				couponList: [{
						bq: '1',
						tip: '仅限威伐光门店使用',
						time: '2018.03.29-2018.04.08',
						type: '满减券',
						money: '100',
						emoney: '满100元减5元',
						show:false
					},
					{
						bq: '0',
						tip: '仅限威伐光门店使用',
						time: '2018.03.29-2018.04.08',
						type: '满减券',
						money: '100',
						emoney: '满100元减5元',
						show:false
					}, {
						bq: '2',
						tip: '仅限威伐光门店使用',
						time: '2018.03.29-2018.04.08',
						type: '满减券',
						money: '100',
						emoney: '满100元减5元',
						timeout: true,
						show:false
					}
				]
			}
		},
		created() {
			//判断是否微信端
			var ua = navigator.userAgent.toLowerCase();
			var isWeixin = ua.indexOf('micromessenger') != -1;
			if(isWeixin) {
				this.hShow = true;
			} else {
				this.hShow = false;
			}
		},
		mounted: function() {
			this.InitScroll() //初始化下拉组件
		},
		methods: {
			onItemClick(index) {
				this.typeActive = index
				this.show = false
			},
			showDrawer() {
				this.show9 = true
			},
			type(index) {
				this.typeItemActive = index
			},
			twoChange(index, item) {
				this.twoIndex = index
				this.show9 = false
			},
			InitScroll() {
				this.$nextTick(() => {
					if(!this.scroll) {
						this.scroll = new BScroll(this.$refs.wrapper, {
							click: true,
							scrollY: true,
							pullUpLoad: {
								threshold: -30
							}
						})
						this.scroll.on('pullingUp', (pos) => {

							this.LoadData()
							this.$nextTick(function() {
								this.scroll.finishPullUp();
								this.scroll.refresh();
							});
						})
					} else {
						this.scroll.refresh()
					}
				})

			},
			LoadData() {
				let _this = this
				console.log(_this.couponList.length)
				if(_this.couponList.length <= 11) {
					_this.show = true
					_this.showNo = false
					_this.couponList = _this.couponList.concat({
						title: '购物券1',
						tip: '仅限威伐光门店使用',
						time: '2018.03.29-2018.04.08',
						type: '满减券'
					})
					setTimeout(function() {
						_this.show = false
					}, 1500)
				} else {
					_this.show = false
					_this.showNo = true
				}
			}
		},
		components: {
			Tab,
			TabItem,
			settingHeader,
			Drawer,
			Masker,
			Spinner,
			Loading,
			XHeader,
			Nomore,
			noData
		}
	}
</script>

<style lang="less">
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
				background-color: #336fff;
				color: white;
			}
		}
	}
	
	.couponindex-box {
		height: 100%;
		.vux-header .vux-header-title {
			margin: 0 40px;
		}
		.b-w {
			background-color: white;
			position: relative;
			.vux-tab-ink-bar {
				bottom: 4px!important;
			}
			.edit-btn {
				color: rgba(144, 162, 199, 1);
				img {
					width: 0.3rem;
					height: 0.3rem;
					vertical-align: middle;
				}
			}
		}
		.vux-header-left .left-arrow:before {
			border: 1px solid #222!important;
			border-width: 1px 0 0 1px!important;
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
		.couponList {
			.wrapper {
				position: absolute;
				top: 46px;
				bottom: 0px;
				overflow: hidden;
				width: 100%;
				padding: 0.23rem 0.21rem;
				box-sizing: border-box;
			}
			.bgImgThree {
				background: url(../../../assets/images/user/rollBg4.png) no-repeat;
				background-size: 100% 100%;
			}
			.red {
				background: url(../../../assets/images/member/yhq-red.png) no-repeat;
			}
			.blue {
				background: url(../../../assets/images/member/yhq-blue.png) no-repeat;
			}
			.gq {
				background: url(../../../assets/images/member/yhq-gq.png) no-repeat;
			}
			.detail{
				padding: 0.27rem;
				box-sizing: border-box;
				background-color: white;
				color:rgba(66,88,132,1);
				font-size: 0.24rem;
				margin-bottom: 0.2rem;
			}
			.rollOne {
				height: 2.16rem;
				background-size: 100% 100%;
				display: flex;
				.left {
					width: 2.66rem;
					display: flex;
					align-items: center;
					justify-content: center;
					flex-direction: column;
					font-family: MicrosoftYaHei;
					color: rgba(255, 255, 255, 1);
					p:nth-child(1) {
						font-size: 0.68rem;
						i {
							font-size: 0.39rem;
						}
					}
					p:nth-child(2) {
						font-size: 0.24rem;
					}
				}
				.right {
					flex: 1;
					padding: 0rem 0.24rem;
					box-sizing: border-box;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.top {
						height: 0.35rem;
						line-height: 0.35rem;
						margin-top: 0.29rem;
						span:nth-child(1) {
							width: 0.72rem;
							background: rgba(255, 83, 101, 1);
							border-radius: 3px;
							color: rgba(255, 255, 255, 1);
							font-size: 0.22rem;
							display: inline-block;
							text-align: center;
							margin-right: 0.2rem;
						}
						span:nth-child(2) {
							font-size: 0.28rem;
							color: rgba(66, 88, 132, 1);
						}
					}
					.middle {
						font-size: 0.28rem;
						color: rgba(144, 162, 199, 1);
					}
					.bottom {
						height: 0.6rem;
						line-height: 0.6rem;
						font-size: 0.24rem;
						color: rgba(144, 162, 199, 1);
					}
				}
			}
		}
	}
</style>