<template>
	<div class="content">
		<settingHeader :title="title"></settingHeader>
		<div class="couponTab">
			<tab class="tab" :line-width="2" active-color="#397df8">
				<tab-item v-for="(item,index) in couponType" :selected="typeActive == index" @on-item-click="onItemClick(index)">{{item}}</tab-item>
			</tab>
			<i id="menu" class="iconfont" @click.active="showDrawer"></i>
		</div>
		<div class="couponList">
			<div class="rollOne bgImgThree">
				<a href="#">
					<div class="left"><span>购物券1</span> <span class="mt20">(仅限威伐光门店使用)</span> <span>2018.03.29-2018.04.08</span></div>
				</a>
				<div class="right fontOne"><span>满减券</span>
					<a href="#">
						<div class="rightBtn mt20 btnImgThree">
							<span>立即使用</span>
						</div>
					</a>
				</div>
			</div>
		</div>
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
</template>

<script>
	import { Tab, TabItem, Masker, Drawer } from 'vux'
	import settingHeader from '../../../components/setting_header'
	export default {
		data() {
			return {
				typeActive: 0,
				typeItemActive: 0,
				couponType: ['全部', '未使用', '已使用', '已过期'],
				typeList: ['所有优惠券', '体验券', '满减券', '折扣券'],
				title: '我的优惠券',
				drawerShow: false
			}
		},
		methods: {
			onItemClick(index) {
				this.typeActive = index
			},
			showDrawer() {
				this.drawerShow = !this.drawerShow
			},
			type(index) {
				this.typeItemActive = index
			}
		},
		components: {
			Tab,
			TabItem,
			settingHeader,
			Drawer,
			Masker
		}
	}
</script>

<style lang="less" scoped>
	.drawer-box {
		position: fixed;
		top: 46px;
		right: 0;
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
	
	.couponTab {
		position: fixed;
		top: 46px;
		width: 100%;
		display: flex;
		align-items: center;
		.tab {
			flex: 1;
			.vux-tab-item {
				background-color: transparent;
			}
		}
		i {
			display: inline-block;
			width: 15%;
			text-align: center;
			line-height: 0.8rem;
			color: #397df8;
			font-size: 0.35rem;
		}
	}
	
	.couponList {
		margin-top: 55px;
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
			.left {
				width: 60%;
				height: 1.9rem;
				margin-left: 0.15rem;
				display: inline-block;
				position: relative;
				span:nth-of-type(1) {
					position: absolute;
					top: 0.25rem;
					left: 0.3rem;
					font-size: 0.3rem;
					color: #ffffff;
				}
				span:nth-of-type(2) {
					position: absolute;
					top: 0.55rem;
					font-size: 0.2rem;
					left: 0.3rem;
					color: #ffffff;
					margin-top: 0.3rem;
				}
				span:nth-of-type(3) {
					position: absolute;
					bottom: 0.2rem;
					left: 0.3rem;
					width: 100%;
					font-size: 0.2rem;
					color: #ffffff;
					text-align: left;
					padding-right: 0.2rem;
				}
			}
			.right {
				width: 35%;
				display: inline-block;
				text-align: center;
				position: absolute;
				right: 0.2rem;
				top: 0.2rem;
				span:nth-of-type(1) {
					display: block;
					font-size: 0.35rem;
					color: #82a6ee;
				}
				.btnImgThree {
					background: url(../../../assets/images/user/rollBtn4.png) no-repeat;
					background-size: 100% 100%;
					height: 0.6rem;
					span {
						color: #fc705d;
					}
					;
				}
				.rightBtn {
					width: 1.5rem;
					padding-bottom: 0.08rem;
					display: inline-block;
					margin-top: 0.2rem;
					span {
						font-size: 0.2rem;
						vertical-align: middle;
						line-height: 0.6rem;
					}
				}
			}
		}
	}
</style>