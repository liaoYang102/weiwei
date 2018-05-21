<template>
	<section v-model="themeTitle">
	    <div class="mall-theme">
	    	<div class="theme-title" :class="[themeTitle == '男子休闲'?'text':'']">{{themeTitle}}</div>

		    <div class="wrapper"> <!-- ref="wrapper" -->
				<div class="content">
					<div class="tab-list">
    			    	<div class="list">
    			    		<li class="tab-li" v-for="(item, index) in shopList" @click="$router.push({path:'/shop/shop_details'})">
    			    			<img src="../../../assets/images/shop/shop3.png">
    			    			<div class="tab-text"><span>{{ item.shopname}}</span></div>
    			    			<div class="tab-tag">
			    					<p class="shopPrice">
										<span class="priceNum">￥{{ item.money}}</span> 
										<span class="shopAcount">+{{ item.score}}积分</span>
									</p>
    			    			</div>
    			    		</li>
    			    		<div class="clear"></div>
    			    	</div>
    			    	<!-- <loading v-if="show"></loading> -->
    	    	    </div>
				</div>
			</div>
	    </div>
	</section>
</template>

<script>
	// import BScroll from 'better-scroll'
	// import Loading from '../../../components/loading'
	export default {
		props:{
			themeTitle: String
		},
		data(){
			return {
				test: true,
				show:false,
				shopList: [
					{ shopname: 'VANS Old Skool lite黑白超轻鞋款 黑色38.5', money: '3598', score: '266'},
					{ shopname: 'VANS Old Skool lite黑白超轻鞋款 黑色38.5', money: '3598', score: '266'},
					{ shopname: 'VANS Old Skool lite黑白超轻鞋款 黑色38.5', money: '3598', score: '266'},
					{ shopname: 'VANS Old Skool lite黑白超轻鞋款 黑色38.5', money: '3598', score: '266'},
					{ shopname: 'VANS Old Skool lite黑白超轻鞋款 黑色38.5', money: '3598', score: '266'},
					{ shopname: 'VANS Old Skool lite黑白超轻鞋款 黑色38.5', money: '3598', score: '266'}
				]
			}
		},
		components:{
			// Loading
		},
		mounted() {
			// this.$nextTick(() => {
			// this.InitScroll()

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
li{
	list-style: none;
}
	.mall-theme{
		width: 100%;
		margin-top: 0.2rem;
		margin-bottom: 0.2rem;
		.theme-title{
			background: #fff;
			color: #7687D9;
			font-size: 0.32rem;
			text-align: center;
			box-shadow: 0px 0.02rem 0.1rem 0px rgba(26,38,66,0.2);
			padding: 0.28rem 0 0.27rem 0;
			margin-bottom: 0.2rem;
		}
		.text{
			color: #1A2642;
		}
		.wrapper {
			/*height: 300px;
			overflow: hidden;*/
		}
		.tab-list{
			margin-bottom: 0.02rem;
			background: #F5F6FA;
			.tab-li{
				float: left;
				width: 49.8%;
				margin-bottom: 0.02rem;
				background: #fff;
				margin-right: 0.01rem;
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
					}
				}
			}
		}
	}

</style>