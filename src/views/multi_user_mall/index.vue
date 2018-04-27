<template>
	<section class="multi_user_mall">
		<div class="wrapper" ref="wrapper">
			<div class="content">
				<div class="top">
					<div class="store">
						<img src="../../assets/images/shop/UNIQLO.png">
						<p class="name">
							<span>优衣库官方旗舰店</span><br>
							<span class="small">224万人关注</span>
						</p>
						<div class="btn">关注</div>
					</div>
				</div>
				<search @click.native="goSearch"></search>
				<div class="tab">
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
				<div class="index" v-if='pyy==1'>
					<img src="../../assets/images/shop/theme_banner0.png" style="width: 100%">

				    <div class="imgList">
				    	<div class="img" v-for="(item, index) in 3" >
				    		<img src="../../assets/images/multi_user_mall/1.png">
				    	</div>
				    </div>

				    <img src="../../assets/images/shop/theme_banner0.png" style="width: 100%;">

				    <mallTheme :themeTitle="themeTitle"></mallTheme>
				    <mallTheme :themeTitle="themeTitle1"></mallTheme>
				</div>
				<shop v-else-if="pyy==2"></shop>
				<service v-else-if="pyy==3"></service>
				<store v-else-if="pyy==4"></store>
				<loading v-if="show"></loading>
                <noMore v-if="showNomore"></noMore>
			</div>
		</div>
	</section>
</template>

<script>
	import mallTheme from './components/mall_theme'
	import search from './components/search'
	import BScroll from 'better-scroll'
	import Loading from '../../components/loading'
	import noMore from '../../components/noMore'
	import shop from './productList'
	import service from './service'
	import store from './store'
	export default {
		data(){
			return {
				pyy:1,
				themeTitle: '女子休闲',
				themeTitle1: '男子休闲',
				show: false,
            	showNomore: false
			}
		},
		components:{
			mallTheme,
			search,
			Loading,
       		noMore,
			shop,
			service,
			store
		},
		mounted() {
			this.InitScroll()
		},
		methods:{
			onItemClick(){
				this.pyy = 2;
			},
			index(){
				this.pyy = 1;
			},
			service(){
				this.pyy = 3;
			},
			store(){
				this.pyy = 4;
			},
			goSearch(){
				this.$router.push({ name: 'search'})
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
		}
	}
</script>

<style lang="less" scoped>
.multi_user_mall{
	width: 100%;
	height: 100%;
	background: #F5F6FA;
}
.wrapper {
    height: 100%;
    overflow: hidden;
    .content{
    	background: #F5F6FA;
    }
}
.top{
	width: 100%;
	height: 2.36rem;
	background: url('../../assets/images/shop/scorebg.png') no-repeat;
	.store{
		padding-top: 1.15rem;
		img{
			width: 16.5%;
			float: left;
			margin-right: 0.16rem;
		}
		.name{
			float: left;
			font-size: 0.32rem;
			color: #fff;
			padding-top: 0.15rem;
			.small{
				font-size: 0.24rem;
			}
		}
		.btn{
			float: right;
			text-align: center;
			width:1.72rem;
			background:#336FFF;
			border-radius: 0.04rem; 
			border: 0.02rem solid #FFFFFF;
			color: #fff;
			font-size: 0.28rem;
			margin-right: 0.2rem;
			padding: 0.1rem 0;
			margin-top: 0.3rem;
		}
	}
}
.tab .tab-item{
	padding-top: 0.19rem;
}
.imgList .img:nth-child(3){
	float: right;
	margin-right: 0;
}
.imgList{
	margin-top: 0.15rem;
	.img{
		width: 31.5%;
		float: left;
		margin-right: 0.2rem;
		margin-bottom: 0.15rem;
		img{
			width: 100%;
		}
	}
}
</style>

<style lang="less">
.tab .vux-tab-warp{
	padding-top: 1.2rem;
}
.tab .vux-tab .vux-tab-item{
	color: #1A2642;
	font-size: 0.24rem;
	line-height: normal;
	img{
		width: 20%;
		display: inline-block;
	}
}
.tab .vux-tab-selected{
	color: #336FFF !important;
}
.tab .vux-tab-container{
	height: 1.2rem;
}
.tab .vux-tab{
	height: 1.2rem;
}
</style>