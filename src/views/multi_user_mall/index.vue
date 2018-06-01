<template>
	<section class="multi_user_mall">

		<settingHeader :title="title"></settingHeader>
		<div class="top">
			<div class="store">
				<img :src="logo?logo:'./static/shop/storeLogo.png'">
				<div class="name">
					<div><span>{{info.name}}</span></div>
					<div class="positionImg">
						<!-- <img src="../../assets/images/multi_user_mall/position.png"> -->
						<!-- <span class="small">距离正佳广场0.2km</span> -->
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
				<tab-item selected @on-item-click="index">
					<div class="tab-item">
						<img src="../../assets/images/multi_user_mall/index1.png" v-if='pyy==1'>
						<img src="../../assets/images/multi_user_mall/index.png" v-else><br>
						<div>首页</div>
					</div>
				</tab-item>
				<tab-item @on-item-click="onItemClick" v-if="info.isChains == 1">
					<div class="tab-item">
						<img src="../../assets/images/multi_user_mall/shop1.png" v-if='pyy==2'>
						<img src="../../assets/images/multi_user_mall/shop.png" v-else><br>
						<div>商品</div>
					</div>
				</tab-item>
				<tab-item @on-item-click="service" v-if="info.isAlliance == 1">
					<div class="tab-item">
						<img src="../../assets/images/multi_user_mall/service1.png" v-if='pyy==3'>
						<img src="../../assets/images/multi_user_mall/service.png" v-else><br>
						<div>服务</div>
					</div>
				</tab-item>
				<tab-item @on-item-click="store">
					<div class="tab-item">
						<img src="../../assets/images/multi_user_mall/store1.png" v-if='pyy==4'>
						<img src="../../assets/images/multi_user_mall/store.png" v-else><br>
						<div>简介</div>
					</div>
				</tab-item>
			</tab>
		</div>
		<div style="height: 63.1%" v-if="pyy!=2">
			<div class="wrapper" ref="wrapper">
				<div class="content">
					<div class="index" v-if='pyy==1'>
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

					<service v-else-if="pyy==3"></service>
					<store v-else-if="pyy==4" :info="info"></store>
					<loading v-if="show && pyy!=3 && pyy!=4 && pyy!= 1"></loading>
					<noMore v-if="showNomore && pyy!=3 && pyy!=4"></noMore>
				</div>
			</div>
		</div>

		<div style="height: 63.1%" v-else>
			<shop style="height: 100%"></shop>
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
			}
		},
		components: {
			mallTheme,
			Loading,
			noMore,
			shop,
			service,
			store,
			settingHeader
		},
		mounted() {
			this.getBasicInfo()
			this.getThumbInfo()
			this.InitScroll()
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
						_this.getAllianceConcern(res.data.data.enterpriseBasic2018051500000001)
						_this.getChainsConcern(res.data.data.chainsId)
						if(_this.info.logo) {
							_this.logo = _this.info.logo.original
						}
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
						allianceId: _this.$route.query.id
					}
				}).then((res) => {
					if(res.data.status == '00000000') {
						if(res.data.data.status == 1) {

							_this.isAlliance = true
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
						chainsId: _this.$route.query.id
					}
				}).then((res) => {
					if(res.data.status == '00000000') {
						if(res.data.data.status == 1) {
							_this.isChains = true
						}
					}
				})
			},
			changeScroll() {
				this.$nextTick(() => {
					this.scroll = new BScroll(this.$refs.wrapper, {
						click: true,
						scrollY: true,
						pullUpLoad: {
							threshold: -30, // 负值是当上拉到超过低部 70px；正值是距离底部距离 时，                    
						}
					})
				})
			},
			onItemClick() {
				this.pyy = 2;
			},
			index() {
				this.pyy = 1;
				this.changeScroll()
			},
			service() {
				this.pyy = 3;
				this.changeScroll()
			},
			store() {
				this.pyy = 4;
				this.changeScroll()
			},
			goSearch() {
				this.$router.push({
					name: 'search'
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
					} else {
						this.scroll.refresh()
					}
				})
			},
			LoadData() {
				// var _this = this
				// setTimeout(function(){
				//     _this.show = false;
				//     let obj = [{ name: 'Vivo X21 屏幕指纹版全面...', presentprice: '￥3598' ,orprice: '￥4355', pin: '月销4714', score: '265积分', status: 2},
				//     { name: 'Vivo X21 屏幕指纹版全面...', presentprice: '￥3598' ,orprice: '￥4355', pin: '月销4714', score: '265积分', status: 2}];
				//     _this.moneylist = _this.moneylist.concat(obj);
				//     console.log(_this.moneylist);
				// },3000)
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
					})
				}
			},
			changeChains(id) {
				var _this = this
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
				})
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
			padding: 1rem 0rem 0 0.14rem;
			img {
				width: 16.5%;
				float: left;
				margin-right: 0.16rem;
				background-color: #F5F6FA;
				border-radius: 2px;
			}
			.name {
				float: left;
				font-size: 0.32rem;
				color: #fff;
				padding-top: 0.15rem;
				line-height: 0.9rem;
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
			.btn {
				float: right;
				text-align: center;
				width: 1.16rem;
				height: 0.55rem;
				line-height: 0.6rem;
				background: #336FFF;
				color: #fff;
				font-size: 0.25rem;
				margin-right: 0.2rem;
				margin-top: 0.4rem;
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