<template>
	<section>
		<div class="mt">

			<tab :line-width="3" :scroll-threshold="4" custom-bar-width="30px">
		      <tab-item selected @on-item-click="onItemClick">精选</tab-item>
		      <tab-item @on-item-click="onItemClick">我能兑换</tab-item>
		      <tab-item @on-item-click="onItemClick">食品</tab-item>
		      <tab-item @on-item-click="onItemClick">生活用品</tab-item>
		    </tab>
		    <div class="wrapper" ref="wrapper">
				<div class="content">
					<div class="tab-list">
    			    	<div class="list">
    			    		<li class="tab-li" v-for="(item, index) in shopList">
    			    			<img src="../../../assets/images/shop/shop3.png">
    			    			<div class="tab-text"><span>{{ item.shopname}}</span></div>
    			    			<div class="tab-tag">
    			    				<span class="tag-red">￥{{ item.money}}</span>
    			    				<div class="tag-bule">+{{ item.score}}积分</div>
    			    			</div>
    			    		</li>
    			    		<div class="clear"></div>
    			    	</div>
    			    	<loading v-if="show"></loading>
    	    	    </div>
				</div>
			</div>
		    <!-- <div class="tab-item">
    	    	<scroller lock-x height='-200' @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" v-if='test'>
    	    		<div class="tab-list">
    			    	<div class="list">
    			    		<li class="tab-li" v-for="(item, index) in shopList" @click="goShopdetails">
    			    			<img src="../../../assets/images/shop/shop3.png">
    			    			<div class="tab-text"><span>{{ item.shopname}}</span></div>
    			    			<div class="tab-tag">
    			    				<span class="tag-red">￥{{ item.money}}</span>
    			    				<div class="tag-bule">+{{ item.score}}积分</div>
    			    			</div>
    			    		</li>
    			    	</div>

    	    	        <load-more tip="loading" id='loading'></load-more>
    	    	    </div>
    	    	</scroller>
		    </div> -->
		</div>
	</section>
</template>

<script>
	import BScroll from 'better-scroll'
	import Loading from '../../../components/loading'
	export default {
		data(){
			return {
				test: true,
				show:false,
				shopList: [
					{ shopname: 'VANS Old Skool lite黑白超轻鞋款 黑色38.5', money: '3598', score: '266'},
					{ shopname: 'VANS Old Skool lite黑白超轻鞋款 黑色38.5', money: '3598', score: '266'},
					{ shopname: 'VANS Old Skool lite黑白超轻鞋款 黑色38.5', money: '3598', score: '266'},
					{ shopname: 'VANS Old Skool lite黑白超轻鞋款 黑色38.5', money: '3598', score: '266'}
				]
			}
		},
		components:{
			Loading
		},
		mounted() {
			// this.$nextTick(() => {
			this.InitScroll()

			// })
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
				var _this = this
				setTimeout(function(){
					_this.show = false;
					let obj = [{ shopname: 'VANS Old Skool lite黑白超轻鞋款 黑色38.5', money: '3598', score: '266'},
					{ shopname: 'VANS Old Skool lite黑白超轻鞋款 黑色38.5', money: '3598', score: '266'}];
					_this.shopList = _this.shopList.concat(obj);
					console.log(_this.shopList);
				},3000)
			},
		    goShopdetails(){
		    	this.$router.push({ path: '/shop/shop_details'})
		    }
		}
	}
</script>

<style lang="less" scoped>
.wrapper {
	height: 300px;
	overflow: hidden;
}
li{
	list-style: none;
	background: #fff;
	font-size: 0.24rem;
	color: #1A2642;
}
li:nth-child(odd){
	margin-right: 0.01rem;
}
.vux-loadmore{
    display: none;
}
.mt{
	margin-top: 0.2rem;
}
/*.tab-item{
	margin-top: 0.02rem;
	width: 100%;
	background: #f5f6fa;*/
	.tab-list{
		margin-bottom: 0.02rem;
		.tab-li{
			float: left;
			width: 49.8%;
			img{
				width: 100%;
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
				.tag-red{
					font-size: 0.32rem;
					color: #F23030;
				}
				.tag-bule{
					display: inline-block;
					background-image: linear-gradient(241deg, #5EC3FF 1%, #106FE3 100%);
					text-align: center;
					color: #fff;
					font-size: 0.22rem;
					height: 0.36rem;
					line-height: 0.36rem;
					border-radius: 0.05rem;
					padding: 0.01rem 0.08rem;
				}
			}
		}
	}
/*}*/
</style>

<style lang="less">
.vux-tab .vux-tab-item{
	color: #90A2C7 !important;
}
.vux-tab .vux-tab-item.vux-tab-selected{
	color: #3889FF !important;
}
</style>