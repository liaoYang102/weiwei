<template>
	<div class="follow-box">
		<settingHeader :title="title"></settingHeader>
		<div class="top">
			<div class="bj-box" @click="edit" :class="{'bjcolor':isBj}">{{isBj?'完成':'编辑'}}</div>
			<div class="tar-box">
				<tab v-model="index" :line-width="2" active-color="#397df8" custom-bar-width="0.56rem">
					<tab-item selected @on-item-click="active">商品</tab-item>
					<tab-item @on-item-click="active">店铺</tab-item>
				</tab>
			</div>
			<img @click="sousShow" src="../../../assets/images/member/sous.png" />
		</div>
		<swiper v-model="index" height="800px" :show-dots="false">
			<swiper-item>
				<div class="pro-list">
					<scroller lock-x height="-120" @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="200">
						<div class="box2">
							<router-link to="">
								<div class="list-item" v-for="(item,index) in proList" @click="changePr()">
									<check-icon v-if="proShow" class="check-btn" :value.sync="item.ischeck"></check-icon>
									<div class="img-box"><img :src="item.img" /></div>
									<div class="pro-box">
										<p>{{item.name}}</p>
										<p>￥{{item.money}}</p>
										<div class="btn-box">
											<span>加入购物车</span> <span>立即购买</span>
										</div>
									</div>
								</div>
							</router-link>
							<load-more tip="loading" v-if="onFetching"></load-more>
						</div>
					</scroller>
				</div>
			</swiper-item>
			<swiper-item>
				<div class="store-list">
					<scroller lock-x height="-120" @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="200">
						<div class="box2">
							<router-link to="">
								<div class="list-item" v-for="(item,index) in proList" @click="changePr()">
									<check-icon v-if="storeShow" class="check-btn" :value.sync="item.ischeck"></check-icon>
									<div class="img-box"><img :src="item.img" /></div>
									<div class="pro-box">
										<p>{{item.name}}</p>
										<div class="storbtn-box">
											<span>标签</span> <span>关注人数：5850人</span>
										</div>
									</div>
								</div>
							</router-link>
							<load-more tip="loading" v-if="onFetching"></load-more>
						</div>
					</scroller>
				</div>
			</swiper-item>
		</swiper>
		<div v-transfer-dom>
			<popup v-model="show10" position="top">
				<div class="position-vertical-demo">
					<search class="sous" @on-focus="onFocus" :auto-fixed="false" @on-cancel="onCancel" @on-submit="onSubmit" ref="search"></search>
				</div>
			</popup>
		</div>
		<transition enter-active-class="slideInUp animated" leave-active-class="leave">
			<div class="bjBtn-box" v-if="isBj">
				<div @click="isallcheck">
					<check-icon v-if="isBj" class="check-btn" :value.sync="allCheck">全选</check-icon>
				</div>
				<div class="qx-box">
					<x-button :gradients="['#1D62F0', '#19D5FD']">取消关注</x-button>
				</div>
			</div>
		</transition>

	</div>
</template>

<script>
	import { Tab, TabItem, Swiper, SwiperItem, CheckIcon, Scroller, Search, Popup, XButton } from 'vux'
	import settingHeader from '../../../components/setting_header'
	export default {
		data() {
			return {
				title: '我的关注',
				index: 0,
				isBj: false,
				proShow: false, //点击商品编辑
				storeShow: false, //点击店铺编辑
				onFetching: false,
				show10: false,
				allCheck: false, //全选
				results: [], //搜索值
				proList: [{
						img: 'https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/299c55e31d7f50ae4dc85faa90d6f445_121_121.jpg',
						name: '热风2018年小清新女士星星休闲双肩包拉链方形背包B52W8201',
						money: '50.0',
						ischeck: false,
						id: 1
					},
					{
						img: '../../../../static/member/login-img.png',
						name: '热风2018年小清新女士星星休闲双肩包拉链方形背包B52W8201',
						money: '50.0',
						ischeck: false,
						id: 2
					},
				],
				proidList: []
			}
		},
		created() {

		},
		mouted() {

		},
		methods: {
			isallcheck() {
				if(this.index == 0) {
					if(this.allCheck == true) {
						for(var i = 0; i < this.proList.length; i++) {
							this.proList[i].ischeck = true
							this.proidList.push(this.proList[i].id)
						}
					} else {
						for(var i = 0; i < this.proList.length; i++) {
							this.proList[i].ischeck = false
							this.proidList = []
						}
					}
					console.log(this.proidList)
				}
			},
			active(index) {
				this.isBj = false
				if(index == 0) {
					this.storeShow = false
				} else {
					this.proShow = false
				}
			},
			edit() {
				this.isBj = !this.isBj
				this.allCheck = false
				if(this.index == 0) {
					this.proShow = !this.proShow
				} else {
					this.storeShow = !this.storeShow
				}
			},
			changePr() {
				var idList = []
				for(var i = 0; i < this.proList.length; i++) {
					if(this.proList[i].ischeck == true) {
						idList.push(this.proList[i].id)
					}
				}
				this.proidList = idList
				console.log(this.proidList)
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
			sousShow() {
				this.show10 = true
				this.$nextTick(() => {
					this.$refs.search.setFocus()
				})
			},
			onSubmit() {
				this.$refs.search.setBlur()
			},
			onFocus() {
				console.log('on focus')
			},
			onCancel() {
				console.log('on cancel')
			}
		},
		watch: {
			proidList() {
				if(this.proidList.length == this.proList.length) {
					this.allCheck = true
				} else {
					this.allCheck = false
				}
			}
		},
		components: {
			settingHeader,
			Tab,
			TabItem,
			Swiper,
			SwiperItem,
			CheckIcon,
			Search,
			Popup,
			XButton
		}
	}
</script>

<style lang="less" scoped>
	.follow-box {
		font-family: MicrosoftYaHei;
		.animated {
			-webkit-animation-duration: 1s;
			animation-duration: 1s;
			-webkit-animation-fill-mode: both;
			animation-fill-mode: both;
		}
		.bjBtn-box {
			position: fixed;
			bottom: 0;
			display: flex;
			align-items: center;
			width: 100%;
			padding-left: 0.24rem;
			box-sizing: border-box;
			.check-btn {
				margin-right: 0.24rem;
			}
			.qx-box {
				flex: 1;
				height: 100%;
				text-align: center;
				padding: 0.24rem 0.8rem;
				box-sizing: border-box;
			}
		}
		.bjBtn-box:before {
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
		.leave {
			position: fixed;
			bottom: -80px;
			transition: all 0.1s linear;
		}
		.top {
			padding: 0px 15px;
			height: 0.98rem;
			display: flex;
			align-items: center;
			justify-content: space-between;
			position: relative;
			.bj-box {
				height: 0.98rem;
				line-height: 0.98rem;
				padding: 0 0.6rem 0 0.3rem;
				font-size: 14px
			}
			.bjcolor {
				color: #256fff;
			}
			.tar-box {
				flex: 1;
				box-sizing: border-box;
				padding-right: 0.4rem;
				.vux-tab-item {
					background: transparent!important;
				}
			}
			img {
				width: 0.35rem;
				height: auto;
			}
		}
		.top:after {
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
			left: 0px;
		}
		.top:before {
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
		.pro-list,
		.store-list {
			.list-item {
				height: 2.22rem;
				position: relative;
				padding: 0.26rem 0.24rem;
				display: flex;
				align-items: center;
				box-sizing: border-box;
				.check-btn {
					margin-right: 0.24rem;
				}
				.img-box {
					width: 1.68rem;
					height: 1.70rem;
					display: flex;
					align-items: center;
					justify-content: center;
					img {
						width: 100%;
						height: auto;
						vertical-align: middle;
					}
				}
				.pro-box {
					box-sizing: border-box;
					padding-left: 0.35rem;
					p:nth-child(1) {
						font-size: 0.24rem;
						color: rgba(26, 38, 66, 1);
						line-height: 0.35rem;
					}
					p:nth-child(2) {
						font-size: 0.28rem;
						color: rgba(242, 48, 48, 1);
					}
					.btn-box {
						text-align: right;
						span:nth-child(1) {
							display: inline-block;
							border: 1px solid #90A2C7;
							font-size: 0.24rem;
							padding: 0.05rem 0.15rem;
							border-radius: 2px;
							color: rgba(144, 162, 199, 1);
							margin-right: 0.26rem;
						}
						span:nth-child(2) {
							display: inline-block;
							border: 1px solid #336FFF;
							font-size: 0.24rem;
							padding: 0.05rem 0.15rem;
							border-radius: 2px;
							color: rgba(51, 111, 255, 1);
						}
					}
					.storbtn-box {
						span:nth-child(1) {
							display: inline-block;
							border: 1px solid #F23030;
							font-size: 0.24rem;
							padding: 0.05rem 0.15rem;
							border-radius: 2px;
							color: #F23030;
							margin: 0.18rem 0.26rem 0 0;
							height: 0.3rem;
						}
						span:nth-child(2) {
							font-size: 0.24rem;
							color: rgba(144, 162, 199, 1);
						}
					}
				}
			}
			.list-item :after {
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
				left: 0px;
			}
		}
	}
</style>