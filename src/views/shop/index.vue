<template>
	<section class="shopIndex">
		<settingHeader :title="title"></settingHeader>
		<div class="wrapper" ref="wrapper">
			<div class="content">
				
				<swiper :imgList="imgList"></swiper>

				<div class="swiperTop">
					<div class="search" @click="$router.push({path:'/multi_user_mall/search'})">
						<input type="text" placeholder='搜索你想要的' />
						<img src="../../assets/images/index/search.png" alt="">
					</div>
				</div>
				
				<navindex></navindex>  
				
				<scorenav :scoreTitle="scoreTitle0"></scorenav>
				
				<scorenav :scoreTitle="scoreTitle1"></scorenav>
				
				<!-- <swiper :imgList="imgList2" style="margin-top: 0.2rem;"></swiper> -->
				<div class="score" @click="goAllshop">
					<div class="scoreText">
						<p>信用积分兑</p>
						<div class="exchange">
							<span>积分</span>
							<div class="free">免费</div>
							<span>兑换</span>
						</div>
					</div>
				</div>

				<section>
					<div class="top">
						<div class="top-title">
							<div class="circle1"></div>
							<div class="recommended">官方推荐</div>
							<div class="circle2"></div>
						</div>

						<div class="top-secondtitle">
							<div class="border1"></div>
							<div class="textDiv">
								<span>跨品牌最高</span>
								<span class="text">满199减100</span>
								<span>上不封顶</span>
							</div>
							<div class="border2"></div>
						</div>
					</div>

					<theme :theme="purchase" style="margin-top: 0.19rem;"></theme>

					<theme :theme="best"></theme>
				</section>

				<!-- <img src="../../assets/images/shop/i_banner.png" style="width: 100%;"> -->

				<tab :line-width="3" :scroll-threshold="4" custom-bar-width="30px" class="tab mt">
			      <tab-item selected @on-item-click="onItemClick">精选</tab-item>
			      <tab-item @on-item-click="onItemClick">我能兑换</tab-item>
			      <tab-item @on-item-click="onItemClick">食品</tab-item>
			      <tab-item @on-item-click="onItemClick">生活用品</tab-item>
			    </tab>

				<div class="tab-list">
			    	<div class="list">
			    		<li class="tab-li" v-for="(item, index) in shopList" @click="goShopdetails">
			    			<img :src="item.img">
			    			<div class="tab-text"><span>{{ item.shopname}}</span></div>
			    			<div class="tab-tag">
		    					<p class="shopPrice">
									<span class="priceNum">￥{{ item.money}}</span> 
									<span class="shopAcount" v-if="item.score!== ''">+{{ item.score}}积分</span>
									<span class="shopTag" v-else-if="item.score == ''" :class="[item.tag == '满减'?'tagBg':'']">{{ item.tag}}</span>
								</p>
			    			</div>
			    		</li>
			    		<div class="clear"></div>
			    	</div>
			    	<loading v-if="show"></loading>
			    	<noMore v-if="showNomore"></noMore>
	    	    </div>
			</div>
		</div>
	</section>
</template>

<script>
import settingHeader from '../../components/setting_header'
import navindex from './components/nav_index'
import scorenav from './components/scoreNav'
import theme from './components/theme'
import swiper from './components/swiper'
import BScroll from 'better-scroll'
import Loading from '../../components/loading'
import noMore from '../../components/noMore'
export default {
	components: {
		settingHeader,navindex,scorenav,theme,swiper,Loading,noMore
	},
	data(){
		return {
			title: '信用商城',
			scoreTitle0: '七彩云南',
			scoreTitle1: '信用积分购',
			purchase: '海外购',
			best: '中国臻品',
			imgList:[
				'./static/images/banner1.png',
				'./static/images/banner2.png',
				'./static/images/banner1.png',
			],
			imgList2:[
				'./static/images/banner1.png',
				'./static/images/banner2.png',
				'./static/images/banner1.png',
			],
			// defaultSrc:"http://dev.hotkidclub.com/ceo/static/images/loading.png",
			// currentSrc:"https://m.360buyimg.com/mobilecms/s750x366_jfs/t16798/317/2168092068/211062/decdd020/5aea8108N635af9a7.jpg!cr_1125x549_0_72!q70.jpg.dpg",
			test: true,
			show:false,
			showNomore: false,
			shopList: [
				{ shopname: 'VANS Old Skool lite黑白超轻鞋款 黑色38.5', money: '3598', score: '266', tag: '满减', img:"./static/images/cai2.png"},
				{ shopname: 'VANS Old Skool lite黑白超轻鞋款 黑色38.5', money: '3598', score: '266', tag: '新品', img:"./static/images/cai2.png"},
				{ shopname: 'VANS Old Skool lite黑白超轻鞋款 黑色38.5', money: '3598', score: '', tag: '满减', img:"./static/images/cai2.png"},
				{ shopname: 'VANS Old Skool lite黑白超轻鞋款 黑色38.5', money: '3598', score: '', tag: '新品', img:"./static/images/cai2.png"},
				{ shopname: 'VANS Old Skool lite黑白超轻鞋款 黑色38.5', money: '3598', score: '266', tag: '满减', img:"./static/images/cai2.png"},
				{ shopname: 'VANS Old Skool lite黑白超轻鞋款 黑色38.5', money: '3598', score: '266', tag: '新品', img:"./static/images/cai2.png"},
				{ shopname: 'VANS Old Skool lite黑白超轻鞋款 黑色38.5', money: '3598', score: '', tag: '满减', img:"./static/images/cai2.png"},
				{ shopname: 'VANS Old Skool lite黑白超轻鞋款 黑色38.5', money: '3598', score: '', tag: '新品', img:"./static/images/cai2.png"},
				{ shopname: 'VANS Old Skool lite黑白超轻鞋款 黑色38.5', money: '3598', score: '266', tag: '满减', img:"./static/images/cai2.png"},
				{ shopname: 'VANS Old Skool lite黑白超轻鞋款 黑色38.5', money: '3598', score: '266', tag: '新品', img:"./static/images/cai2.png"},
				{ shopname: 'VANS Old Skool lite黑白超轻鞋款 黑色38.5', money: '3598', score: '', tag: '满减', img:"./static/images/cai2.png"},
				{ shopname: 'VANS Old Skool lite黑白超轻鞋款 黑色38.5', money: '3598', score: '', tag: '新品', img:"./static/images/cai2.png"},
				{ shopname: 'VANS Old Skool lite黑白超轻鞋款 黑色38.5', money: '3598', score: '266', tag: '满减', img:"./static/images/cai2.png"},
				{ shopname: 'VANS Old Skool lite黑白超轻鞋款 黑色38.5', money: '3598', score: '266', tag: '新品', img:"./static/images/cai2.png"},
				{ shopname: 'VANS Old Skool lite黑白超轻鞋款 黑色38.5', money: '3598', score: '', tag: '满减', img:"./static/images/cai2.png"},
				{ shopname: 'VANS Old Skool lite黑白超轻鞋款 黑色38.5', money: '3598', score: '', tag: '新品', img:"./static/images/cai2.png"},
			]
		}
	},
	mounted() {
		this.InitScroll()
	},
	methods:{
		onItemClick(){

		},
        InitScroll() {
			this.$nextTick(() => {
				if(!this.scroll) {
					this.scroll = new BScroll(this.$refs.wrapper, {
						click: true,
						scrollY: true,
						pullUpLoad: {
							threshold: 0, // 负值是当上拉到超过低部 70px；正值是距离底部距离 时，                    
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
			var _this = this
			setTimeout(function(){
				_this.show = false;
				let obj = [{ shopname: 'VANS Old Skool lite黑白超轻鞋款 黑色38.5', money: '3598', score: '266'},
				{ shopname: 'VANS Old Skool lite黑白超轻鞋款 黑色38.5', money: '3598', score: '266'}];
				_this.shopList = _this.shopList.concat(obj);
				console.log(_this.shopList);
				// _this.showNomore = true;
			},3000)
		},
	    goShopdetails(){
	    	this.$router.push({ path: '/shop/shop_details'})
	    },
    	goAllshop(){
    		let title = '积分兑';
    		this.$router.push({ name: 'all_shops', params: { title }})
    	},
	    
	}
}
</script>

<style lang="less" scoped>
.shopIndex{
	.swiperTop {
		z-index: 1000;
		width: 100%;
		height: 0.88rem;
		line-height: 0.88rem;
		position: absolute;
		top: 0;
		.search {
			width: 80%;
			margin: auto;
			position: relative;
			text-align: right;
			padding-right: 0.5rem;
			input {
				width: 100%;
				height: 0.54rem;
				border-radius: 0.27rem;
				background:rgba(255,255,255,0.5);
				/*color: #fff;*/
				padding-left: 0.64rem;
				font-size: 0.24rem;
				/*opacity: 0.5;*/
				letter-spacing: 1px;
			}
			input::-webkit-input-placeholder {
				color: #fff;
			}
			input::-moz-placeholder {
				/* Mozilla Firefox 19+ */
				color: #fff;
			}
			input:-moz-placeholder {
				/* Mozilla Firefox 4 to 18 */
				color: #fff;
			}
			input:-ms-input-placeholder {
				/* Internet Explorer 10-11 */
				color: #fff;
			}
			img {
				width: 0.32rem;
				height: 0.32rem;
				position: absolute;
				top: 0.3rem;
				left: 0.24rem;
			}
		}
	}
	.score{
		width: 100%;
		margin-top: 0.2rem;
		background: url('../../assets/images/shop/scoreBanner.png') no-repeat;
		height: 2rem;
		background-size: 100%;
		.scoreText{
			margin-left: 0.61rem;
			padding-top: 0.36rem;
			color: #fff;
			font-size: 0.28rem;
			p{
				font-size: 0.48rem;
			}
			.exchange{
				margin-top: 0.1rem;
				.free{
					display: inline-block;
					background:#FF001F;
					width: 0.86rem;
					text-align: center;
					padding:0.05rem 0 0.01rem 0;
					border-radius: 0.09rem;
				}
			}
		}
	}
}
.top{
	width: 100%;
	background: #f5f6fa;
	.top-title{
		width: 2rem;
		margin: 0 auto;
		text-align: center;
		padding-top: 0.24rem;
		font-size: 0.28rem;
		color: #4050BA;
		.circle1{
			width: 0.29rem;
			height: 0.29rem;
			opacity: 0.15;
			float: left;
			background-image: linear-gradient(238deg, #5EC3FF 0%, #106FE3 100%);
			border-radius: 50%;
			margin-right: 0.15rem;
		}
		.recommended{
			float: left;
			margin-right: 0.16rem;
		}
		.circle2{
			width: 0.18rem;
			height: 0.18rem;
			opacity: 0.15;
			float: left;
			border-radius: 50%;
			margin-top: 0.1rem;
			background-image: linear-gradient(135deg, #8B9EF9 0%, #7587D8 100%);
		}
	}
	.top-secondtitle{
		width: 100%;
		clear: both;
		font-size: 0.24rem;
		color: #5486fd;
		position: relative;
		.textDiv{
			text-align: center;
		}
		.border1{
			position: absolute;
			top: 0.16rem;
			left: 1.2rem;
			height: 1px;
			width: 0.68rem;
			background-image: linear-gradient(238deg, #5EC3FF 0%, #106FE3 100%);
		}
		.text{
			color: #3e76fe;
		}
		.border2{
			position: absolute;
			top: 0.15rem;
    		right: 1.2rem;
			height: 1px;
			width: 0.68rem;
			background-image: linear-gradient(238deg, #5EC3FF 0%, #106FE3 100%);
		}
	}
}
.wrapper {
	height: 93%;
	overflow: hidden;
	padding-bottom: 1rem;
}
li{
	list-style: none;
	background: #fff;
	font-size: 0.24rem;
	color: #1A2642;
}
li:nth-child(odd){
	margin-right: 1px;
}
.mt{
	margin-top: 0.2rem;
}
.tab-list{
	margin-bottom: 1px;
	padding-bottom: 0.2rem;
	background: #f5f6fa;
	.tab-li{
		float: left;
		width: 49.8%;
		margin-bottom: 1px;
		img{
			width: 80%;
			vertical-align:middle;
			display: block;
			margin: 0 auto; 
		}
		.tab-text{
			margin-left: 0.23rem;
			margin-right: 0.28rem;
			word-wrap: break-word; 
			word-break: normal;
		}
		.tab-tag{
			margin-top: 0.18rem;
			margin-left: 0.23rem;
			margin-bottom: 0.22rem;
			.shopPrice{
				.priceNum{
					display: inline-block;
					font-size: 0.32rem;
					color: #F23030;
					font-weight: 700;
					vertical-align: middle;
				}
				.shopAcount{
					font-weight: normal;
					display: inline-block;
					padding-left: 0.06rem;
					padding-right: 0.08rem;
					height: 0.4rem;
					text-align: center;
					font-size: 0.24rem;
					line-height: 0.4rem;
					background-image: linear-gradient(238deg, #5EC3FF 0%, #106FE3 100%);
					border-radius: 0.04rem;
					color:#fff;
				}
				.shopTag{
					background:linear-gradient(127.8deg,rgba(0,215,124,1),rgba(27,246,153,1));
					border-radius: 0.02rem ; 
					text-align: center;
					color: #fff;
					height: 0.4rem;
					padding-left: 0.06rem;
					padding-right: 0.08rem;
					font-size: 0.24rem;
				}
				.tagBg{
					background:linear-gradient(-90deg,rgba(255,122,128,1),rgba(255,83,101,1));
				}
			}
		}
	}
}
</style>

<style lang="less">
.ximg-demo {
  width: 100%;
  height: auto;
}
.ximg-error {
  background-color: yellow;
}
.ximg-error:after {
  content: '加载失败';
  color: red;
}
.shopIndex{
	height: 92%;
}
body{
	background: #f5f6fa;
}
.set-height{
	overflow: hidden;
}
.tab .vux-tab .vux-tab-item{
	color: #90A2C7;
}
.tab .vux-tab .vux-tab-item .vux-tab-selected{
	color: #3889FF;
}
</style>