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
						<div class="rollOne bgImgThree" v-for="item in couponList">
							<router-link to="/member/coupon/detail">
								<div class="left">
									<p>{{item.title}}</p>
									<p class="mt20">{{item.tip}}</p>
									<p>{{item.time}}</p>
								</div>
							</router-link>
							<div class="right fontOne"><span>{{item.type}}</span>
								<a href="#">
									<div class="rightBtn mt20 btnImgThree">
										<span>立即使用</span>
									</div>
								</a>
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
				couponList: [
				{
						title: '购物券1',
						tip: '仅限威伐光门店使用',
						time: '2018.03.29-2018.04.08',
						type: '满减券'
					},
					{
						title: '购物券1',
						tip: '仅限威伐光门店使用',
						time: '2018.03.29-2018.04.08',
						type: '满减券'
					},
					{
						title: '购物券1',
						tip: '仅限威伐光门店使用',
						time: '2018.03.29-2018.04.08',
						type: '满减券'
					},
					{
						title: '购物券1',
						tip: '仅限威伐光门店使用',
						time: '2018.03.29-2018.04.08',
						type: '满减券'
					},
					{
						title: '购物券1',
						tip: '仅限威伐光门店使用',
						time: '2018.03.29-2018.04.08',
						type: '满减券'
					},
					{
						title: '购物券1',
						tip: '仅限威伐光门店使用',
						time: '2018.03.29-2018.04.08',
						type: '满减券'
					},
					{
						title: '购物券1',
						tip: '仅限威伐光门店使用',
						time: '2018.03.29-2018.04.08',
						type: '满减券'
					},
					{
						title: '购物券1',
						tip: '仅限威伐光门店使用',
						time: '2018.03.29-2018.04.08',
						type: '满减券'
					},
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
		background-color: white;
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
			}
			.bgImgThree {
				background: url(../../../assets/images/user/rollBg4.png) no-repeat;
				background-size: 100% 100%;
			}
			.rollOne {
				background-position: 50%;
				position: relative;
				height: 2rem;
				width: 95%;
				margin: 0 auto;
				margin-left: 0.5rem;
				.left {
					width: 60%;
					height: 100%;
					margin-left: 0.15rem;
					position: relative;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					padding: 0.4rem 0.2rem;
					box-sizing: border-box;
					p:nth-of-type(1) {
						font-size: 0.3rem;
						color: #ffffff;
					}
					p:nth-of-type(2) {
						font-size: 0.2rem;
						color: #ffffff;
					}
					p:nth-of-type(3) {
						font-size: 0.2rem;
						color: #ffffff;
						padding-right: 0.2rem;
					}
				}
				.right {
					width: 50%;
					display: inline-block;
					text-align: center;
					position: absolute;
					right: 0.2rem;
					top: 0.2rem;
					span:nth-of-type(1) {
						display: block;
						font-size: 0.3rem;
						color: #82a6ee;
						margin-top: 0.1rem;
					}
					.btnImgThree {
						background: url(../../../assets/images/user/rollBtn4.png) no-repeat;
						background-size: 100% 100%;
						height: 0.6rem;
						span {
							color: #fc705d;
						}
					}
					.rightBtn {
						width: 1.5rem;
						padding-bottom: 0.08rem;
						display: inline-block;
						margin-top: 0.1rem;
						span {
							font-size: 0.2rem;
							vertical-align: middle;
							line-height: 0.5rem;
						}
					}
				}
			}
		}
	}
</style>