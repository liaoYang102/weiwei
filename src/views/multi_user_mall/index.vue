<template>
	<section class="multi_user_mall">
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
<<<<<<< HEAD

		<search @click.native="goSearch"></search>

=======
		<search @click.native="goSearch"></search>
>>>>>>> ec9fc19b17a264004b1a2aab19dc1fac808062a7
		<div class="tab">
			<tab :line-width="3" :scroll-threshold="4">
		      	<tab-item selected @on-item-click="onItemClick">
		      		<div class="tab-item">
		      			<img src="../../assets/images/shop/address.png"><br>
		      			<span>首页</span>
		      		</div>
		  		</tab-item>
			    <tab-item @on-item-click="onItemClick">
			    	<div class="tab-item">
			    		<img src="../../assets/images/shop/address.png"><br>
			    		<span>商品</span>
			    	</div>
				</tab-item>
			    <tab-item @on-item-click="onItemClick">
			    	<div class="tab-item">
			    		<img src="../../assets/images/shop/address.png"><br>
			    		<span>服务</span>
			    	</div>
			    </tab-item>
			    <tab-item @on-item-click="onItemClick">
			    	<div class="tab-item">
			    		<img src="../../assets/images/shop/address.png"><br>
			    		<span>简介</span>
			    	</div>
			    </tab-item>
		    </tab>
		</div>
		<div class="index">
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
	    <!-- <shop v-else></shop> -->
	</section>
</template>

<script>
	import mallTheme from './components/mall_theme'
	import search from './components/search'
	// import shop from './productList'
	export default {
		data(){
			return {
				show:true,
				themeTitle: '女子休闲',
				themeTitle1: '男子休闲'
			}
		},
		components:{
			mallTheme,
			search,
			// shop
		},
		mounted() {
			
		},
		methods:{
			onItemClick(){
				// this.show = false;
			},
			goSearch(){
				this.$router.push({ name: 'search'})
			}
		}
	}
</script>

<style lang="less" scoped>
.multi_user_mall{
	width: 100%;
	height: auto;
	background: #F5F6FA;
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