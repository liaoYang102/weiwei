<template>
	<section class="multi_user_mall">
		<settingHeader :title="title"></settingHeader>
		<div v-if="!nohas">
			<div class="top">
				<div class="store">
					<div class="one">
						<img :src="logo?logo:'./static/shop/storeLogo.png'">
						<div class="name">
							<div><span>{{info.name}}</span></div>
							<div class="positionImg">
								<!-- <img src="../../assets/images/multi_user_mall/position.png"> -->
								<!-- <span class="small">距离正佳广场0.2km</span> -->
							</div>
						</div>
					</div>
					<div class="btn" @click="changeAlliance(info.allianceId)" :class="{'btnActive': isAlliance}" v-if='info.isAlliance == 1'>{{isAlliance?'已关注':'关注'}}</div>
					<div class="btn" @click="changeChains(info.chainsId)" :class="{'btnActive': isChains}" v-if='info.isChains == 1'>{{isChains?'已关注':'关注'}}</div>
				</div>
			</div>
			<div class="searchBox">
				<div class="search">
					<img src="../../assets/images/shop/search.png">
					<input style="border-radius: 0;" type="text" placeholder="搜索商品" @click="goSearch">
				</div>
			</div>

			<div class="mallTab">
				<tab :line-width="3" :scroll-threshold="4" custom-bar-width="0.6rem">
					<tab-item :selected="tabIndex==0" @on-item-click="index">
						<div class="tab-item">
							<img src="../../assets/images/multi_user_mall/shop1.png" v-if="tabIndex==0">
							<img src="../../assets/images/multi_user_mall/shop.png" v-else>
							<div>首页</div>
						</div>
					</tab-item>
					<tab-item :selected="tabIndex==1" @on-item-click="index">
						<div class="tab-item" v-if="info.isChains == 1">
							<img src="../../assets/images/multi_user_mall/shop1.png" v-if="tabIndex==1">
							<img src="../../assets/images/multi_user_mall/shop.png" v-else>
							<div>商品</div>
						</div>
						<div class="tab-item" v-if="info.isAlliance == 1">
							<img src="../../assets/images/multi_user_mall/service1.png" v-if="tabIndex==1">
							<img src="../../assets/images/multi_user_mall/service.png" v-else>
							<div>服务</div>
						</div>
					</tab-item>
					<tab-item :selected="tabIndex==2" @on-item-click="index">
						<div class="tab-item">
							<img src="../../assets/images/multi_user_mall/store1.png" v-if="tabIndex==2">
							<img src="../../assets/images/multi_user_mall/store.png" v-else>
							<div>简介</div>
						</div>
					</tab-item>
				</tab>
			</div>
			<div>
				<div class="index" v-if='tabIndex==0'>
					<img src="../../assets/images/multi_user_mall/banner0.png" style="width: 100%">
					<div class="imgList">
						<div class="img" v-for="(item, index) in 3">
							<img src="../../assets/images/multi_user_mall/1.png">
						</div>
					</div>
					<img src="../../assets/images/multi_user_mall/Bitmap.png" style="width: 100%;">
					<mallTheme :themeTitle="themeTitle"></mallTheme>
					<mallTheme :themeTitle="themeTitle1"></mallTheme>
				</div>
				<service v-if="tabIndex==1 && info.isAlliance == 1"></service>
				<shop v-if="tabIndex==1 && info.isChains == 1"></shop>
				<store v-if="tabIndex==2"></store>
				<loading v-if="tabIndex==1 && show"></loading>
				<noMore v-if="tabIndex==1 && showNomore"></noMore>
			</div>
		</div>
		<div style="height: 100%;background-color: white;" v-else>
			<noData :status="2" stateText="找不到该企业"></noData>
		</div>
	</section>
</template>

<script>
	import settingHeader from '../../components/setting_header'
	import mallTheme from './components/mall_theme'
	import BScroll from 'better-scroll'
	import Loading from '../../components/loading'
	import noMore from '../../components/noMore'
	import shop from './productList'
	import service from './service'
	import store from './store'
	import noData from '../../components/noData'
	export default {
		data() {
			return {
				title: '商城首页',
				pyy: 1,
				themeTitle: '女子休闲',
				themeTitle1: '男子休闲',
				show: false,
				showNomore: false,
				focusStatus: '关注',

				info: {},
				logo: '',
				isAlliance: false, //联盟
				isChains: false, //联营
				tabIndex: 0,
				nohas: false
			}
		},
		components: {
			mallTheme,
			Loading,
			noMore,
			shop,
			service,
			store,
			settingHeader,
			noData
		},
		mounted() {

			this.$route.query.tabIndex ? this.tabIndex = this.$route.query.tabIndex : this.tabIndex = 0

			this.getBasicInfo()
			this.getThumbInfo()
		},
		methods: {
			// 获取企业详情
			getBasicInfo() {
				var _this = this
				_this.$http.get(_this.url.qy.getBasicInfo, {
					params: {
						enterpriseId: _this.$route.query.id
					}
				}).then((res) => {
					if(res.data.status == "00000000") {
						console.log(res.data.data)
						_this.info = res.data.data
						localStorage.setItem('storeInfo',JSON.stringify(res.data.data))
						if(_this.info.logo) {
							_this.logo = _this.info.logo.original
						}

						if(_this.info.isAlliance == 1) {
							_this.getAllianceConcern(_this.info.allianceId)
						} else if(_this.info.isChains == 1) {
							_this.getChainsConcern(res.data.data.chainsId)
						}
					} else if(res.data.status == 'plat-0003') {
						_this.nohas = true
					}
				})
			},
			// 获取企业图册
			getThumbInfo() {
				var _this = this
				_this.$http.get(_this.url.qy.getThumbInfo, {
					params: {
						enterpriseId: _this.$route.query.id
					}
				}).then((res) => {
					if(res.data.status == "00000000") {
						console.log(res.data.data)
					}
				})
			},
			// 获取用户是否关注联盟企业角色接口
			getAllianceConcern(id) {
				var _this = this
				_this.$http.get(_this.url.qy.getAllianceConcern, {
					params: {
						userId: localStorage.getItem('userId'),
						allianceId: id
					}
				}).then((res) => {
					if(res.data.status == '00000000') {
						if(res.data.data.status == 1) {
							_this.isAlliance = true
						} else {
							_this.isAlliance = false
						}
					}
				})
			},
			// 获取用户是否关注联营企业角色接口
			getChainsConcern(id) {
				var _this = this
				_this.$http.get(_this.url.qy.getChainsConcern, {
					params: {
						userId: localStorage.getItem('userId'),
						chainsId: id
					}
				}).then((res) => {
					if(res.data.status == '00000000') {
						if(res.data.data.status == 1) {
							_this.isChains = true
						} else {
							_this.isChains = false
						}
					}
				})
			},
			index(index) {
				var _this = this
				_this.tabIndex = index
				_this.$router.replace({
					query: _this.merge(_this.$route.query, {
						'tabIndex': index
					})
				})
			},
			changeAlliance(id) {
				var _this = this
				//取消关注联盟企业
				if(_this.isAlliance) {
					_this.$http.post(_this.url.user.deleteConcern, {
						userId: localStorage.getItem('userId'),
						type: 2,
						concernIds: id
					}).then((res) => {
						if(res.data.status == "00000000") {
							_this.$vux.toast.show({
								width: '50%',
								type: 'text',
								position: 'middle',
								text: '已取消关注'
							})
						}
						_this.getBasicInfo()
					})
				} else {
					//关注联盟企业
					_this.$http.post(_this.url.user.addConcern, {
						userId: localStorage.getItem('userId'),
						type: 2,
						platformId: _this.url.platformId,
						objectId: id
					}).then((res) => {
						if(res.data.status == "00000000") {
							_this.$vux.toast.show({
								width: '50%',
								type: 'text',
								position: 'middle',
								text: '已关注'
							})
						}
						_this.getBasicInfo()
					})
				}
			},
			changeChains(id) {
				var _this = this
				//取消关注联盟企业
				if(_this.isChains) {
					_this.$http.post(_this.url.user.deleteConcern, {
						userId: localStorage.getItem('userId'),
						type: 3,
						concernIds: id
					}).then((res) => {
						if(res.data.status == "00000000") {
							_this.$vux.toast.show({
								width: '50%',
								type: 'text',
								position: 'middle',
								text: '已取消关注'
							})
						}
						_this.getBasicInfo()
					})
				} else {
					//关注联盟企业
					_this.$http.post(_this.url.user.addConcern, {
						userId: localStorage.getItem('userId'),
						type: 3,
						platformId: _this.url.platformId,
						objectId: id
					}).then((res) => {
						if(res.data.status == "00000000") {
							_this.$vux.toast.show({
								width: '50%',
								type: 'text',
								position: 'middle',
								text: '已关注'
							})
						}
						_this.getBasicInfo()
					})
				}
			},
			goSearch() {
				this.$router.push({
					path: '/multi_user_mall/search'
				})
			},
		}
	}
</script>

<style lang="less" scoped>
	.multi_user_mall {
		width: 100%;
		height: 100%;
		background: #F5F6FA;
	}
	
	.wrapper {
		height: 100%;
		overflow: hidden;
		.content {
			background: #F5F6FA;
		}
	}
	
	.top {
		width: 100%;
		height: 2.36rem;
		background-color: #90A2C7;
		/*background: url('../../assets/images/multi_user_mall/Mask.png') no-repeat;*/
		.store {
			height: 100%;
			padding: 15px 15px;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.one {
				display: flex;
				align-items: center;
				img {
					width: 16.5%;
					margin-right: 0.16rem;
					background-color: #F5F6FA;
					border-radius: 2px;
				}
				.name {
					font-size: 0.32rem;
					color: #fff;
					.positionImg {
						float: left;
						img {
							width: 10%;
							float: left;
							vertical-align: middle;
							margin-top: 0.07rem;
						}
						.small {
							display: inline-block;
							float: left;
							font-size: 0.24rem;
							line-height: 0.55rem;
						}
						.rightImg {
							width: 5%;
							margin-top: 0.19rem;
							margin-left: 0.05rem;
						}
					}
				}
			}
			.btn {
				text-align: center;
				width: 1.16rem;
				height: 0.55rem;
				line-height: 0.6rem;
				background: #336FFF;
				color: #fff;
				font-size: 0.25rem;
				border-radius: 2px;
			}
			.btnActive {
				background-color: #90A2C7;
			}
		}
	}
	
	.mallTab {
		height: 1.2rem;
		.tab-item {
			padding-top: 0.19rem;
			img {
				width: 0.5rem;
				display: inline-block;
			}
		}
	}
	
	.imgList .img:nth-child(3) {
		float: right;
		margin-right: 0;
	}
	
	.imgList {
		margin-top: 0.15rem;
		.img {
			width: 31.5%;
			float: left;
			margin-right: 0.2rem;
			margin-bottom: 0.15rem;
			img {
				width: 100%;
			}
		}
	}
	
	.searchBox {
		width: 100%;
		background: #fff;
		padding-bottom: 0.14rem;
		.search {
			position: relative;
			width: 92%;
			margin: 0 auto;
			padding-top: 0.14rem;
			img {
				position: absolute;
				width: 5%;
				top: 0.26rem;
				left: 0.26rem;
			}
			input {
				width: 100%;
				background: #F5F6FA;
				color: #1A2642;
				padding: 0.14rem 0.1rem 0.12rem 0.78rem;
				box-sizing: border-box;
			}
			input::-webkit-input-placeholder {
				color: #90A2C7 !important; // WebKit browsers 
			}
			input:-moz-placeholder {
				color: #90A2C7 !important; // Mozilla Firefox 4 to 18 
			}
			input::-moz-placeholder {
				color: #90A2C7 !important; //Mozilla Firefox 19+ /
			}
			input:-ms-input-placeholder {
				color: #90A2C7 !important; //Internet Explorer 10+ */
			}
		}
	}
</style>

<style lang="less">
	.multi_user_mall .mallTab .vux-tab-container {
		height: 1.2rem;
	}
	
	.multi_user_mall .mallTab .vux-tab {
		height: 1.2rem;
	}
	
	.multi_user_mall .mallTab .vux-tab-warp {
		padding-top: 1.2rem;
	}
	
	.multi_user_mall .mallTab .vux-tab .vux-tab-item {
		color: #1A2642;
		font-size: 0.24rem;
		line-height: normal;
		border: none;
	}
	
	.multi_user_mall .mallTab .vux-tab .vux-tab-selected {
		color: #336FFF !important;
	}
</style>