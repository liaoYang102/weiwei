<template>
	<section class="multi_user_mall">
		
		<settingHeader :title="title"></settingHeader>
		<div class="top">
			<div class="store">
				<img src="../../assets/images/shop/UNIQLO.png">
				<div class="name">
					<div><span>优衣库官方旗舰店</span></div>
					<div class="positionImg">
						<!-- <img src="../../assets/images/multi_user_mall/position.png"> -->
						<!-- <span class="small">距离正佳广场0.2km</span> -->
						<img src="../../assets/images/multi_user_mall/right.png" class="rightImg">
					</div>
				</div>
				<div class="btn" @click="focus" :class="{'btnActive': focusStatus == '已关注'}">{{focusStatus}}</div>
			</div>
		</div>
		<div class="searchBox">
			<div class="search">
				<img src="../../assets/images/shop/search.png">
				<input type="search" placeholder="搜索商品" @click="goSearch">
			</div>
		</div>

		<div class="mallTab">
			<tab :line-width="3" :scroll-threshold="4">
				<tab-item selected @on-item-click="index">
					<div class="tab-item">
						<img src="../../assets/images/multi_user_mall/index1.png" v-if='pyy==1'>
						<img src="../../assets/images/multi_user_mall/index.png" v-else><br>
						<span>首页</span>
					</div>
				</tab-item>
				<tab-item @on-item-click="onItemClick">
					<div class="tab-item">
						<img src="../../assets/images/multi_user_mall/shop1.png" v-if='pyy==2'>
						<img src="../../assets/images/multi_user_mall/shop.png" v-else><br>
						<span>商品</span>
					</div>
				</tab-item>
				<tab-item @on-item-click="service">
					<div class="tab-item">
						<img src="../../assets/images/multi_user_mall/service1.png" v-if='pyy==3'>
						<img src="../../assets/images/multi_user_mall/service.png" v-else><br>
						<span>服务</span>
					</div>
				</tab-item>
				<tab-item @on-item-click="store">
					<div class="tab-item">
						<img src="../../assets/images/multi_user_mall/store1.png" v-if='pyy==4'>
						<img src="../../assets/images/multi_user_mall/store.png" v-else><br>
						<span>简介</span>
					</div>
				</tab-item>
			</tab>
		</div>
		<div style="height: 67.2%"  v-if="pyy!=2">
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
					<store v-else-if="pyy==4"></store>
					<loading v-if="show && pyy!=3 && pyy!=4 && pyy!= 1"></loading>
					<noMore v-if="showNomore && pyy!=3 && pyy!=4"></noMore>
				</div>
			</div>
		</div>
		

		<div style="height: 65.5%" v-else><shop style="height: 100%"></shop></div>
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
				focusStatus: '关注'
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
			this.InitScroll()
		},
		methods: {
			changeScroll(){
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
			focus() {
				if(this.focusStatus == '关注') {
					this.focusStatus = '已关注'
				} else {
					this.focusStatus = '关注'
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
		background: url('../../assets/images/multi_user_mall/Mask.png') no-repeat;
		.store {
			padding-top: 1.15rem;
			img {
				width: 16.5%;
				float: left;
				margin-right: 0.16rem;
			}
			.name {
				float: left;
				font-size: 0.32rem;
				color: #fff;
				padding-top: 0.15rem;
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
				padding: 0.06rem 0 0.03rem 0;
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
				width: 20%;
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
		border-bottom: 0.01rem solid #D8DFF0;
		.search {
			position: relative;
			width: 92%;
			margin: 0 auto;
			padding-top: 0.14rem;
			img {
				position: absolute;
				width: 5%;
				top: 0.25rem;
				left: 0.26rem;
			}
			input {
				width: 100%;
				background: #F5F6FA;
				border-radius: 0.06rem;
				color: #1A2642;
				padding: 0.14rem 0.1rem 0.12rem 0.78rem;
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
		border:none;
	}
	
	.multi_user_mall .mallTab .vux-tab .vux-tab-selected {
		color: #336FFF !important;
	}
	
</style>