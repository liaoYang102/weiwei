<template>
	<div class="follow-box">
		<x-header class="b-w" :left-options="{backText: '',preventGoBack: true}" @on-click-more="edit" @on-click-back="changeBack">
			<div class="tar-box">
				<tab v-model="index" :line-width="2" active-color="#397df8" custom-bar-width="1.1rem">
					<tab-item selected @on-item-click="active">联盟企业</tab-item>
					<tab-item @on-item-click="active">联营企业</tab-item>
					<tab-item @on-item-click="active">商品</tab-item>
				</tab>
			</div>
			<div class="edit-btn" @click="edit" slot="right">{{isBj?'完成':'编辑'}}</div>
		</x-header>
		<swiper v-model="index" height="100vh" :show-dots="false" :threshold='150'>
			<swiper-item>
				<div class="store-list">
					<div class="wrapper3" ref="wrapper3">
						<div class="content">
							<div class="list-item" v-for="(item,index) in lyList" v-if="lyList.length>0" @click="toDetail(item.enterpriseId)">
								<div @click="changeStore2()">
									<check-icon v-if="storeShow2" class="check-btn" :value.sync="item.ischeck"></check-icon>
								</div>
								<div class="img-box"><img v-if="item.logo" :src="item.logo.original" /></div>
								<div class="pro-box">
									<div>
										<p>{{item.name}}</p>
										<div class="storbtn-box">
											<!-- <span>标签</span> --><span>关注人数：{{item.concernSum}} 人</span>
										</div>
									</div>
									<div class="go" v-if="!isBj">
										<span>进入店铺</span>
										<i class="icon iconfont icon-arrow-right"></i>
									</div>
								</div>
							</div>
							<Loading v-if="show3"> </Loading>
							<noData v-if="lyList.length==0" :status="storeState" :stateText="noly"></noData>
						</div>
					</div>
				</div>
			</swiper-item>
			<swiper-item>
				<div class="store-list">
					<div class="wrapper2" ref="wrapper2">
						<div class="content">
							<div class="list-item" v-for="(item,index) in lmList" v-if="lmList.length>0" @click="toDetail(item.enterpriseId)">
								<div @click="changeStore()">
									<check-icon v-if="storeShow" class="check-btn" :value.sync="item.ischeck"></check-icon>
								</div>
								<div class="img-box"><img v-if="item.logo" :src="item.logo.original" /></div>
								<div class="pro-box">
									<div>
										<p>{{item.name}}</p>
										<div class="storbtn-box">
											<!-- <span>标签</span> --><span>关注人数：{{item.concernSum}} 人</span>
										</div>
									</div>
									<div class="go" v-if="!isBj">
										<span>进入店铺</span>
										<i class="icon iconfont icon-arrow-right"></i>
									</div>
								</div>
							</div>
							<Loading v-if="show2"> </Loading>
							<noData v-if="lmList.length==0" :status="storeState" :stateText="nolm"></noData>
						</div>
					</div>
				</div>
			</swiper-item>
			<swiper-item>
				<div class="pro-list">
					<div class="wrapper" ref="wrapper">
						<div class="content">
							<div class="list-item" v-for="(item,index) in proList">
								<div @click="changePr()">
									<check-icon v-if="proShow" class="check-btn" :value.sync="item.ischeck"></check-icon>
								</div>
								<div class="img-box"><img :src="item.img" /></div>
								<div class="pro-box">
									<p>{{item.name}}</p>
									<p>￥{{item.money}}</p>
									<div class="btn-box">
										<!-- <span>加入购物车</span> -->
										<router-link to="/shop/confirm"><span>立即购买</span></router-link>
									</div>
								</div>
							</div>
							<Loading v-if="show"> </Loading>
							<noData v-if="proList.length==0" :status="proState" :stateText="noPro"></noData>
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
						<check-icon v-if="isBj && index==2" class="check-btn" :value.sync="allprCheck">全部商品 <span v-if="!allprCheck">已选 <i>{{proidList.length}}</i> 个商品</span></check-icon>
						<check-icon v-if="isBj && index==1" class="check-btn" :value.sync="allstCheck">全部店铺<span v-if="!allstCheck">已选 <i>{{storeidList.length}}</i> 间店铺</span></check-icon>
						<check-icon v-if="isBj && index==0" class="check-btn" :value.sync="allstCheck2">全部店铺<span v-if="!allstCheck2">已选 <i>{{storeidList2.length}}</i> 间店铺</span></check-icon>
					</div>
					<div class="qx-box">
						<div class="add-btn" @click="deleteConcern">取消关注</div>
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
	import noData from '../../../components/noData'
	export default {
		data() {
			return {
				title: '我的关注',
				index: 0,
				isBj: false,
				proShow: false, //点击商品编辑
				storeShow: false, //点击店铺编辑
				storeShow2: false, //点击店铺编辑
				onFetching: false,
				show10: false,
				allprCheck: false, //全选商品
				allstCheck: false, //全选店铺
				allstCheck2: false, //全选店铺
				results: [], //搜索值
				proList: [],
				lyList: [],
				lmList: [],
				proidList: [],
				storeidList: [],
				storeidList2: [],
				show: false,
				show2: false,
				show3: false,
				proState: 0,
				storeState: 0,
				noPro: '暂无商品',
				noly: '暂无联营企业',
				nolm: '暂无联盟企业',
				pageSize: 20,
				curPage: 1,
				type: 2,
				back: Function
			}
		},
		created() {
			
			this.$route.query.index ? this.index = Number(this.$route.query.index) : this.index = 0
			this.getFollow()
		},
		mounted() {
			this.InitScroll()
		},
		methods: {
			changeBack() {
				this.$router.go(-1)
				this.$store.state.page.back = true
			},
			getFollow() {
				var _this = this
				_this.$http.get(_this.url.user.getConcernLists, {
					params: {
						userId: localStorage.getItem('userId'),
						type: _this.type,
						pageSize: _this.pageSize,
						curPage: _this.curPage
					}
				}).then((res) => {
					if(res.data.status == "00000000") {
						//联盟企业
						if(_this.type == 2) {
							_this.lyList = res.data.data.list
							_this.lyList.forEach((value) => {
								value.ischeck = false
							})
							console.log(_this.lyList)
						} else if(_this.type == 3) {
							_this.lmList = res.data.data.list
							_this.lmList.forEach((value) => {
								value.ischeck = false
							})

						}
					}
				})
			},
			deleteConcern() {
				var _this = this
				if(_this.type == 2) {
					var concernIds = _this.storeidList2.join(',')
				} else if(_this.type == 3) {
					var concernIds = _this.storeidList.join(',')
				}
				_this.$http.post(_this.url.user.deleteConcern, {
					userId: localStorage.getItem('userId'),
					type: _this.type,
					concernIds: concernIds
				}).then((res) => {
					if(res.data.status == "00000000") {
						_this.$vux.toast.show({
							width: '50%',
							type: 'text',
							position: 'middle',
							text: '已取消关注'
						})
						_this.getFollow()
					}
				})
			},
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
								threshold: -30,
							}
						})
						this.scroll2.on('pullingUp', (pos) => {
							this.show2 = true;
							this.LoadData2()
							this.$nextTick(function() {
								this.scroll2.finishPullUp();
								this.scroll2.refresh();
							});
						})

						this.scroll3 = new BScroll(this.$refs.wrapper2, {
							click: true,
							scrollY: true,
							pullUpLoad: {
								threshold: -30,
							}
						})
						this.scroll3.on('pullingUp', (pos) => {
							this.show3 = true;
							this.LoadData3()
							this.$nextTick(function() {
								this.scroll2.finishPullUp();
								this.scroll2.refresh();
							});
						})
					} else {
						this.scroll.refresh()
						this.scroll2.refresh()
						this.scroll3.refresh()
					}
				})

			},
			LoadData() {
				let _this = this;
				setTimeout(function() {
					_this.show = false;
				}, 3500)
			},
			LoadData2() {
				let _this = this;
				setTimeout(function() {
					_this.show2 = false;
				}, 3500)
			},
			LoadData3() {
				let _this = this;
				setTimeout(function() {
					_this.show3 = false;
				}, 3500)
			},
			//点击全选
			isallcheck() {
				this.proidList = [] //重置商品id数组
				this.storeidList = [] //重置店铺id数组
				this.storeidList2 = [] //重置店铺id数组

				if(this.index == 2) {
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
				} else if(this.index == 0) {
					if(this.allstCheck2 == true) {
						for(var i = 0; i < this.lyList.length; i++) {
							this.lyList[i].ischeck = true
							this.storeidList2.push(this.lyList[i].objectId)
						}
					} else {
						for(var i = 0; i < this.lyList.length; i++) {
							this.lyList[i].ischeck = false
							this.storeidList2 = []
						}
					}
					console.log(this.storeidList2, 'store2')
				} else if(this.index == 1) {
					if(this.allstCheck == true) {
						for(var i = 0; i < this.lmList.length; i++) {
							this.lmList[i].ischeck = true
							this.storeidList.push(this.lmList[i].objectId)
						}
					} else {
						for(var i = 0; i < this.lmList.length; i++) {
							this.lmList[i].ischeck = false
							this.storeidList = []
						}
					}
					console.log(this.storeidList, 'store')
				}
			},
			//商品  店铺切换
			active(index) {
				var _this = this
				_this.isBj = false //重置编辑
				_this.storeShow = false //重置商品选择框
				_this.proShow = false //重置店铺选择框
				_this.allprCheck = false
				_this.allstCheck = false
				_this.proidList = []
				_this.storeidList = []
				_this.show = false
				_this.show2 = false

				if(index == 1) {
					_this.type = 3
				} else if(index == 0) {
					_this.type = 2
				} else if(index == 2) {
					_this.type = 1
				}
				_this.index = index
			},
			//点击编辑
			edit() {
				this.proidList = [] //重置商品id列表
				this.storeidList = [] //重置店铺id列表
				this.storeidList2 = [] //重置店铺id列表
				this.allprCheck = false //重置全选
				this.allstCheck = false
				this.allstCheck2 = false

				//重置原始数据
				for(var i = 0; i < this.proList.length; i++) {
					this.proList[i].ischeck = false
				}
				for(var i = 0; i < this.lmList.length; i++) {
					this.lmList[i].ischeck = false
				}
				for(var i = 0; i < this.lyList.length; i++) {
					this.lyList[i].ischeck = false
				}

				if(this.index == 2 && this.proList.length > 0) {
					this.isBj = !this.isBj
					this.proShow = !this.proShow
				} else if(this.index == 1 && this.lmList.length > 0) {
					this.isBj = !this.isBj
					this.storeShow = !this.storeShow
				} else if(this.index == 0 && this.lyList.length > 0) {
					this.isBj = !this.isBj
					this.storeShow2 = !this.storeShow2
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
				for(var i = 0; i < this.lmList.length; i++) {
					if(this.lmList[i].ischeck == true) {
						idList.push(this.lmList[i].objectId)
					}
				}
				this.storeidList = idList
			},
			//店铺选择
			changeStore2() {
				var idList = []
				for(var i = 0; i < this.lyList.length; i++) {
					if(this.lyList[i].ischeck == true) {
						idList.push(this.lyList[i].objectId)
					}
				}
				this.storeidList2 = idList
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
			},
			toDetail(id) {
				if(!this.isBj) {
					this.$router.push({
						name: 'multi_user_mall',
						query: {
							id: id
						}
					})
				}
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
				if(this.storeidList.length == this.lmList.length) {
					this.allstCheck = true
				} else {
					this.allstCheck = false
				}
			},
			storeidList2() {
				if(this.storeidList2.length == this.lyList.length) {
					this.allstCheck2 = true
				} else {
					this.allstCheck2 = false
				}
			},
			index() {
				this.isBj = false //重置编辑
				this.storeShow = false //重置商品选择框
				this.storeShow2 = false //重置商品选择框
				this.proShow = false //重置店铺选择框
				this.allprCheck = false
				this.allstCheck = false
				this.allstCheck2 = false
				this.proidList = []
				this.storeidList = []
				this.storeidList2 = []

				if(this.index == 0) {
					this.type = 2 //联盟企业
				} else if(this.index == 1) {
					this.type = 3 //联营企业
				} else {
					this.type = 1 //商品
				}

				this.$router.replace({
					query: this.merge(this.$route.query, {
						'index': this.index
					})
				})

				this.getFollow()
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
			Loading,
			noData
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
		background-color: white;
		height: 100%;
		overflow: hidden;
		.vux-header .vux-header-title {
			margin: 0 66px;
		}
		.animated {
			-webkit-animation-duration: 1s;
			animation-duration: 1s;
			-webkit-animation-fill-mode: both;
			animation-fill-mode: both;
		}
		.b-w {
			background-color: white;
			position: relative;
			height: 50px;
			.vux-tab-ink-bar {
				bottom: 4px!important;
			}
			.edit-btn {
				color: rgba(144, 162, 199, 1);
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
		.pro-list,
		.store-list {
			background-color: white;
			.wrapper,
			.wrapper2 {
				position: absolute;
				top: 0px;
				bottom: 47px;
				overflow: hidden;
				width: 100%;
				/*.vux-loadmore {
					display: inline-block;
					width: 100%;
				}*/
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
					width: 100%;
					box-sizing: border-box;
					display: flex;
					align-items: center;
					justify-content: space-between;
					.go {
						font-size: 0.24rem;
						color: #90a2c7;
						display: flex;
						align-items: center;
						i {
							font-size: 0.45rem;
						}
					}
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
						/*span:nth-child(1) {
							display: inline-block;
							border: 1px solid #F23030;
							font-size: 0.24rem;
							padding: 0.05rem 0.15rem;
							border-radius: 2px;
							color: #F23030;
							margin: 0.18rem 0.26rem 0 0;
							height: 0.3rem;
						}*/
						span {
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