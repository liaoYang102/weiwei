<template>
	<div class="follow-box">
		<x-header class="b-w" :left-options="{backText:''}" @on-click-more="edit">
			<div class="tar-box">
				<tab v-model="index" :line-width="2" active-color="#397df8" custom-bar-width="0.56rem">
					<tab-item selected @on-item-click="active">商品</tab-item>
					<tab-item @on-item-click="active">店铺</tab-item>
				</tab>
			</div>
			<div class="edit-btn" @click="edit" slot="right">{{isBj?'完成':'编辑'}}</div>
		</x-header>
		<!--<div class="top">
			<div class="bj-box" @click="edit" :class="{'bjcolor':isBj}"></div>
			<div class="tar-box">
				<tab v-model="index" :line-width="2" active-color="#397df8" custom-bar-width="0.56rem">
					<tab-item selected @on-item-click="active">商品</tab-item>
					<tab-item @on-item-click="active">店铺</tab-item>
				</tab>
			</div>
			<img @click="sousShow" src="../../../assets/images/member/sous.png" />
		</div>-->
		<swiper v-model="index" height="100vh" :show-dots="false" :threshold='100'>
			<swiper-item>
				<div class="pro-list">
					<div class="wrapper" ref="wrapper">
						<div class="content">
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
							<Loading v-if="show"> </Loading>
						</div>
					</div>
				</div>
			</swiper-item>
			<swiper-item>
				<div class="store-list">
					<div class="wrapper2" ref="wrapper2">
						<div class="content">
							<router-link to="">
								<div class="list-item" v-for="(item,index) in storeList" @click="changeStore()">
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
							<Loading v-if="show2"> </Loading>
						</div>
					</div>
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
		<!--编辑页-->
		<div v-transfer-dom>
			<popup v-model="isBj" position="bottom" height="0.94rem" :show-mask="false">
				<div class="bjBtn-box">
					<div style="flex: 1;" @click="isallcheck">
						<check-icon v-if="isBj && index==0" class="check-btn" :value.sync="allprCheck">全部商品 <span v-if="!allprCheck">已选<i>{{proidList.length}}</i>个商品</span></check-icon>
						<check-icon v-if="isBj && index==1" class="check-btn" :value.sync="allstCheck">全部店铺<span v-if="!allstCheck">已选<i>{{proidList.length}}</i>间店铺</span></check-icon>
					</div>
					<div class="qx-box">
						<div class="add-btn">取消关注</div>
					</div>
				</div>
			</popup>
		</div>

	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import { Tab, TabItem, Swiper, SwiperItem, CheckIcon, Scroller, Search, Popup, XButton, XHeader } from 'vux'
	import settingHeader from '../../../components/setting_header'
	import Loading from '../../../components/loading'
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
				allprCheck: false, //全选商品
				allstCheck: false, //全选店铺
				results: [], //搜索值
				proList: [{
						img: 'https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/299c55e31d7f50ae4dc85faa90d6f445_121_121.jpg',
						name: '热风2018年小清新女士星星休闲双肩包拉链方形背包B52W8201',
						money: '50.0',
						ischeck: false,
						id: 1
					},
					{
						img: './static/member/login-img.png',
						name: '热风2018年小清新女士星星休闲双肩包拉链方形背包B52W8201',
						money: '50.0',
						ischeck: false,
						id: 2
					}, {
						img: './static/member/login-img.png',
						name: '热风2018年小清新女士星星休闲双肩包拉链方形背包B52W8201',
						money: '50.0',
						ischeck: false,
						id: 2
					}, {
						img: './static/member/login-img.png',
						name: '热风2018年小清新女士星星休闲双肩包拉链方形背包B52W8201',
						money: '50.0',
						ischeck: false,
						id: 2
					}, {
						img: './static/member/login-img.png',
						name: '热风2018年小清新女士星星休闲双肩包拉链方形背包B52W8201',
						money: '50.0',
						ischeck: false,
						id: 2
					}, {
						img: './static/member/login-img.png',
						name: '热风2018年小清新女士星星休闲双肩包拉链方形背包B52W8201',
						money: '50.0',
						ischeck: false,
						id: 2
					}, {
						img: './static/member/login-img.png',
						name: '热风2018年小清新女士星星休闲双肩包拉链方形背包B52W8201',
						money: '50.0',
						ischeck: false,
						id: 2
					}, {
						img: './static/member/login-img.png',
						name: '热风2018年小清新女士星星休闲双肩包拉链方形背包B52W8201',
						money: '50.0',
						ischeck: false,
						id: 2
					},
				],
				storeList: [{
						img: 'https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/299c55e31d7f50ae4dc85faa90d6f445_121_121.jpg',
						name: '热风2018年小清新女士星星休闲双肩包拉链方形背包B52W8201',
						money: '50.0',
						ischeck: false,
						id: 1
					},
					{
						img: './static/member/login-img.png',
						name: '热风2018年小清新女士星星休闲双肩包拉链方形背包B52W8201',
						money: '50.0',
						ischeck: false,
						id: 2
					}, {
						img: 'https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/299c55e31d7f50ae4dc85faa90d6f445_121_121.jpg',
						name: '热风2018年小清新女士星星休闲双肩包拉链方形背包B52W8201',
						money: '50.0',
						ischeck: false,
						id: 1
					},
					{
						img: './static/member/login-img.png',
						name: '热风2018年小清新女士星星休闲双肩包拉链方形背包B52W8201',
						money: '50.0',
						ischeck: false,
						id: 2
					}, {
						img: 'https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/299c55e31d7f50ae4dc85faa90d6f445_121_121.jpg',
						name: '热风2018年小清新女士星星休闲双肩包拉链方形背包B52W8201',
						money: '50.0',
						ischeck: false,
						id: 1
					},
					{
						img: './static/member/login-img.png',
						name: '热风2018年小清新女士星星休闲双肩包拉链方形背包B52W8201',
						money: '50.0',
						ischeck: false,
						id: 2
					}
				],
				proidList: [],
				storeidList: [],
				show: false,
				show2: false
			}
		},
		created() {},
		mounted() {
			this.InitScroll()
		},
		methods: {
			InitScroll() {
				this.$nextTick(() => {
					if(!this.scroll) {
						this.scroll = new BScroll(this.$refs.wrapper, {
							click: true,
							scrollY: true,
							pullUpLoad: {
								threshold: -30, // 负值是当上拉到超过低部 70px；正值是距离底部距离 时，                    
							}
						})
						this.scroll.on('pullingUp', (pos) => {
							this.show = true;
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
						console.log(this.scroll2)
						this.scroll2.on('pullingUp', (pos) => {
							this.show2 = true;
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
				setTimeout(function() {
					this.show = false;
				}, 5500)
			},
			LoadData2() {
				setTimeout(function() {
					this.show2 = false;
				}, 5500)
			},
			//点击全选
			isallcheck() {
				this.proidList = [] //重置商品id数组
				this.storeidList = [] //重置店铺id数组

				if(this.index == 0) {
					if(this.allprCheck == true) {
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
					console.log(this.proidList, 'pro')
				} else {
					if(this.allstCheck == true) {
						for(var i = 0; i < this.storeList.length; i++) {
							this.storeList[i].ischeck = true
							this.storeidList.push(this.storeList[i].id)
						}
					} else {
						for(var i = 0; i < this.storeList.length; i++) {
							this.storeList[i].ischeck = false
							this.storeidList = []
						}
					}
					console.log(this.storeidList, 'store')
				}
			},
			//商品  店铺切换
			active(index) {
				this.isBj = false //重置编辑
				this.storeShow = false //重置商品选择框
				this.proShow = false //重置店铺选择框
				this.allprCheck = false
				this.allstCheck = false
				this.proidList = []
				this.storeidList = []
			},
			//点击编辑
			edit() {
				this.proidList = [] //重置商品id列表
				this.storeidList = [] //重置店铺id列表
				this.allprCheck = false //重置全选
				this.allstCheck = false

				//重置原始数据
				for(var i = 0; i < this.proList.length; i++) {
					this.proList[i].ischeck = false
				}
				for(var i = 0; i < this.storeList.length; i++) {
					this.storeList[i].ischeck = false
				}

				this.isBj = !this.isBj
				if(this.index == 0) {
					this.proShow = !this.proShow
				} else {
					this.storeShow = !this.storeShow
				}
			},
			//商品选择
			changePr() {
				var idList = []
				for(var i = 0; i < this.proList.length; i++) {
					if(this.proList[i].ischeck == true) {
						idList.push(this.proList[i].id)
					}
				}
				this.proidList = idList
				console.log(this.proidList, 'pro')
			},
			//店铺选择
			changeStore() {
				var idList = []
				for(var i = 0; i < this.storeList.length; i++) {
					if(this.storeList[i].ischeck == true) {
						idList.push(this.storeList[i].id)
					}
				}
				this.storeidList = idList
				console.log(this.storeidList, 'store')
			},
			onScrollBottom() {
				if(this.onFetching) { // do nothing
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
					this.allprCheck = true
				} else {
					this.allprCheck = false
				}
			},
			storeidList() {
				if(this.storeidList.length == this.storeList.length) {
					this.allstCheck = true
				} else {
					this.allstCheck = false
				}
			},
			index() {
				this.isBj = false //重置编辑
				this.storeShow = false //重置商品选择框
				this.proShow = false //重置店铺选择框
				this.allprCheck = false
				this.allstCheck = false
				this.proidList = []
				this.storeidList = []
			}
		},
		components: {
			Tab,
			TabItem,
			Swiper,
			SwiperItem,
			CheckIcon,
			Search,
			Popup,
			XButton,
			XHeader,
			Loading
		}
	}
</script>

<style lang="less">
	.bjBtn-box {
		position: fixed;
		bottom: 0;
		display: flex;
		align-items: center;
		width: 100%;
		height: 0.94rem;
		padding-left: 0.24rem;
		box-sizing: border-box;
		background-color: white;
		.check-btn {
			margin-right: 0.24rem;
			span {
				margin-left: 0.25rem;
				font-size: 0.24rem;
				font-family: PingFangSC-Regular;
				color: rgba(115, 134, 173, 1);
				i {
					color: red;
				}
			}
		}
		.qx-box {
			.add-btn {
				width: 2.4rem;
				height: 0.94rem;
				line-height: 0.94rem;
				background: #FF292E;
				font-size: 0.28rem;
				text-align: center;
				font-family: MicrosoftYaHei;
				color: rgba(255, 255, 255, 1);
				text-align: center;
			}
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
	
	.follow-box {
		font-family: MicrosoftYaHei;
		.animated {
			-webkit-animation-duration: 1s;
			animation-duration: 1s;
			-webkit-animation-fill-mode: both;
			animation-fill-mode: both;
		}
		.b-w {
			background-color: white;
			.vux-tab-ink-bar {
				bottom: 4px!important;
			}
			.edit-btn {
				color: rgba(144, 162, 199, 1);
			}
		}
		.top {
			padding: 0px 15px;
			height: 0.98rem;
			display: flex;
			align-items: center;
			justify-content: space-between;
			position: relative;
			background-color: white;
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
			background-color: white;
			.wrapper,
			.wrapper2 {
				position: absolute;
				top: 0px;
				bottom: 0;
				overflow: hidden;
				width: 100%;
				.vux-loadmore {
					display: inline-block;
					width: 100%;
				}
			}
			.list-item {
				background-color: white;
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
				left: 0.21rem;
			}
		}
	}
</style>