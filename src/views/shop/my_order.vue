<template>
	<section class='myOrder' style="height: 100%">
		<settingHeader :title="title"></settingHeader>
		<tab :line-width="1" :scroll-threshold="5" custom-bar-width="30px">
	      <tab-item selected @on-item-click="onItemClick">全部</tab-item>
	      <tab-item @on-item-click="onItemClick">待付款</tab-item>
	      <tab-item @on-item-click="onItemClick">待收货</tab-item>
	      <tab-item @on-item-click="onItemClick">已完成</tab-item>
	      <tab-item @on-item-click="onItemClick">已取消</tab-item>
	    </tab>
		<div class="wrapper" ref="wrapper" >
			<div class="content">
			    <div class="box" v-if=" test == true">
			        <div class="box2">
			            <div class="shop-box">
			    			<div class="box-head">
			    				<div class="fl">
			    					<img src="../../assets/images/shop/UNIQLO.png" alt="" class='shop-logo'>
			    					<span class="box-name">优衣库冒牌店</span>
			    					<img src="../../assets/images/shop/turn_right.png" alt="" class='turn-right'>
			    				</div>
			    				<div class="fr">等待买家付款</div>
			    				<div class="clear"></div>
			    			</div>
			    			<div class="box-detail" @click="goOrderdetails">
			    				<div class="shop-detail">
			    					<img src="../../assets/images/shop/order_detail1.png" alt="" class='fl'>
			    					<div class="fl shop-details">
			    						<p class="shop-name">女装U宽腿牛仔裤(水洗产品)</p>
			    						<p class="shop-size">颜色:蓝色；尺码:L/170修身</p>
			    					</div>
			    					<div class="clear"></div>
			    				</div>
			    				<div class="shop-total">
			    					<p class="fr">
			    						共 1 件 合计：<span class="shop-price">100积分+30元</span>
			    					</p>
			    					<div class="clear"></div>
			    				</div>
			    			</div>
			    			<div class="box-bottom">
			    				<div class="shop-btn btn-status1 fr" @click="goConfirm">付款</div>
			    				<div class="shop-btn fr">取消订单</div>
			    			</div>
			            </div>
			            <div class="shop-box">
			    			<div class="box-head">
			    				<div class="fl">
			    					<img src="../../assets/images/shop/UNIQLO.png" alt="" class='shop-logo'>
			    					<span class="box-name">优衣库专卖店</span>
			    					<img src="../../assets/images/shop/turn_right.png" alt="" class='turn-right'>
			    				</div>
			    				<div class="fr">买家已付款</div>
			    				<div class="clear"></div>
			    			</div>
			    			<div class="box-detail" @click="goOrderdetails">
			    				<div class="shop-detail">
			    					<img src="../../assets/images/shop/order_detail2.png" alt="" class='fl'>
			    					<div class="fl shop-details">
			    						<p class="shop-name">女装U宽腿牛仔裤(水洗产品)</p>
			    						<p class="shop-size">颜色:蓝色；尺码:L/170修身</p>
			    					</div>
			    					<div class="clear"></div>
			    				</div>
			    				<div class="shop-total">
			    					<p class="fr">
			    						共 1 件 合计：<span class="shop-price">100积分+30元</span>
			    					</p>
			    					<div class="clear"></div>
			    				</div>
			    			</div>
			    			<div class="box-bottom">
			    				<!-- <div class="shop-btn btn-status1 fr">付款</div> -->
			    				<div class="shop-btn fr">提醒发货</div>
			    			</div>
			            </div>
			            <div class="shop-box">
			    			<div class="box-head">
			    				<div class="fl">
			    					<img src="../../assets/images/shop/UNIQLO.png" alt="" class='shop-logo'>
			    					<span class="box-name">优衣库专卖店</span>
			    					<img src="../../assets/images/shop/turn_right.png" alt="" class='turn-right'>
			    				</div>
			    				<div class="fr">卖家已发货</div>
			    				<div class="clear"></div>
			    			</div>
			    			<div class="box-detail" @click="goOrderdetails">
			    				<div class="shop-detail">
			    					<img src="../../assets/images/shop/order_detail2.png" alt="" class='fl'>
			    					<div class="fl shop-details">
			    						<p class="shop-name">女装U宽腿牛仔裤(水洗产品)</p>
			    						<p class="shop-size">颜色:蓝色；尺码:L/170修身</p>
			    					</div>
			    					<div class="clear"></div>
			    				</div>
			    				<div class="shop-total">
			    					<p class="fr">
			    						共 1 件 合计：<span class="shop-price">100积分+30元</span>
			    					</p>
			    					<div class="clear"></div>
			    				</div>
			    			</div>
			    			<div class="box-bottom">
			    				<div class="shop-btn btn-status1 fr" @click="goTsuccess">确认收货</div>
			    				<div class="shop-btn fr" @click="goLogistics">查看物流</div>
			    			</div>
			            </div>
			            <div class="shop-box">
			    			<div class="box-head">
			    				<div class="fl">
			    					<img src="../../assets/images/shop/UNIQLO.png" alt="" class='shop-logo'>
			    					<span class="box-name">优衣库专卖店</span>
			    					<img src="../../assets/images/shop/turn_right.png" alt="" class='turn-right'>
			    				</div>
			    				<div class="fr">交易成功</div>
			    				<div class="clear"></div>
			    			</div>
			    			<div class="box-detail" @click="goOrderdetails">
			    				<div class="shop-detail">
			    					<img src="../../assets/images/shop/order_detail2.png" alt="" class='fl'>
			    					<div class="fl shop-details">
			    						<p class="shop-name">女装U宽腿牛仔裤(水洗产品)</p>
			    						<p class="shop-size">颜色:蓝色；尺码:L/170修身</p>
			    					</div>
			    					<div class="clear"></div>
			    				</div>
			    				<div class="shop-total">
			    					<p class="fr">
			    						共 1 件 合计：<span class="shop-price">100积分+30元</span>
			    					</p>
			    					<div class="clear"></div>
			    				</div>
			    			</div>
			    			<div class="box-bottom">
			    				<div class="shop-btn btn-status1 fr" @click="goTsuccess">确认收货</div>
			    				<div class="shop-btn fr" @clcik="goRefund">退货</div>
			    				<div class="shop-btn fr" @click="goLogistics">查看物流</div>
			    			</div>
			            </div>

	                    <div class="shop-box" v-for="item in 3">
	            			<div class="box-head">
	            				<div class="fl">
	            					<img src="../../assets/images/shop/UNIQLO.png" alt="" class='shop-logo'>
	            					<span class="box-name">优衣库专卖店</span>
	            					<img src="../../assets/images/shop/turn_right.png" alt="" class='turn-right'>
	            				</div>
	            				<div class="fr">交易成功</div>
	            				<div class="clear"></div>
	            			</div>
	            			<div class="box-detail" @click="goOrderdetails">
	            				<div class="shop-detail">
	            					<img src="../../assets/images/shop/order_detail2.png" alt="" class='fl'>
	            					<div class="fl shop-details">
	            						<p class="shop-name">女装U宽腿牛仔裤(水洗产品)</p>
	            						<p class="shop-size">颜色:蓝色；尺码:L/170修身</p>
	            					</div>
	            					<div class="clear"></div>
	            				</div>
	            				<div class="shop-total">
	            					<p class="fr">
	            						共 1 件 合计：<span class="shop-price">100积分+30元</span>
	            					</p>
	            					<div class="clear"></div>
	            				</div>
	            			</div>
	            			<div class="box-bottom">
	            				<div class="shop-btn btn-status1 fr" @click="goTsuccess">确认收货</div>
	            				<div class="shop-btn fr" @clcik="goRefund">退货</div>
	            				<div class="shop-btn fr" @click="goLogistics">查看物流</div>
	            			</div>
	                    </div>
			           <div class="clear"></div>
			        </div>
			        <loading v-if="show"></loading>
			        <noMore v-if="showNomore"></noMore>
			    </div>

			    <div class="wrap no_orders" v-else>
		        	<div class="none-data">
		        		<img src="../../assets/images/shop/noOrder.png" alt=""> 
		    			<p>暂无订单</p>
		        	</div>
		    		
		    		<recommended></recommended>
        		</div>
			</div>
		</div>
	    
	</section>
</template>

<script>
	import settingHeader from '../../components/setting_header'
	import BScroll from 'better-scroll'
	import Loading from '../../components/loading'
	import noMore from '../../components/noMore'
	import recommended from './components/recommended'
	export default {
		data(){
			return {
				title:'我的订单',
				test: true,
				show9: false,
				show: false,
				showNomore: false
			}
		},
		components: {
	        settingHeader,Loading,noMore,recommended
	    },
	    mounted() {
			this.InitScroll()
		},
		methods:{
		  	onItemClick (index) {
		  		this.test = false;
		        console.log('on item click:', index);
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
    				// let obj = [{ shopname: 'VANS Old Skool lite黑白超轻鞋款 黑色38.5', money: '3598', score: '266'},
    				// { shopname: 'VANS Old Skool lite黑白超轻鞋款 黑色38.5', money: '3598', score: '266'}];
    				// _this.shopList = _this.shopList.concat(obj);
    				// console.log(_this.shopList);
    			},3000)
    		},
		    goConfirm(){
		    	this.$router.push({ path: '/shop/confirm'})
		    },
		    goLogistics(){
		    	this.$router.push({ path: '/shop/logistics'})
		    },
		    goTsuccess(){
		    	this.$router.push({ path: '/shop/t_success'})
		    },
		    goRefund(){
		    	this.$router.push({ path: '/shop/refund'})
		    },
		    goOrderdetails(){
		    	this.$router.push({ path: '/shop/order_details'})
		    }
		}
	}
</script>

<style lang="less" scoped>
	.wrapper {
		height: 95%;
		background-color: #F5F6FA;
		overflow: hidden;
	}
	.no_orders{
		padding-bottom: 0.2rem;
		background-color: #F5F6FA;
		.none-data {
		    /* display: none; */
		    /*position: absolute;*/
		    background: #fff;
		    width: 100%;
		    padding-bottom: 0.66rem;
		    margin-bottom: 0.2rem;
		    text-align: center;
		    z-index: 10;
		    img{
	    	    width: 100%;
		    }
		    p{
		    	font-size: 0.32rem;
	    		color: #1A2642;
		    }
		}
	}
	.box{
		padding-bottom: 0.5rem;
	}
	.box2{
		background-color: #F5F6FA;
		.box-head{
			margin-top: 0.25rem;
			height: 0.8rem;
			line-height: 0.8rem;
			background-color: #Fff;
			.fr{
				font-size: 0.28rem;
				color: #336FFF;
				margin-right: 0.2rem;
			}
			.fl{
				.shop-logo{
					margin-left: 0.32rem;
					vertical-align: middle;
					width: 0.36rem;
					height: 0.36rem;
				}
				.box-name{
					font-size: 0.3rem;
					color: #1A2642;
					margin-left: 0.15rem;
				}
				.turn-right{
					width: 0.24rem;
					height: 0.24rem;
				}
			}
		}
		.box-detail{
			.shop-detail{
				height: 1.7rem;
				padding-right: 0.2rem;
				img{
					margin:0.05rem 0.2rem 0.05rem 6px;
					width: 1.6rem;
					height: 1.6rem;
				}
				.shop-details{
					margin-top: 0.18rem;
					.shop-name{
						font-size: 0.28rem;
						color: #1A2642;
					}
					.shop-size{
						font-size: 0.24rem;
						color: #90A2C7;
					}
				}
			}
			.shop-total{
				height: 0.8rem;
				line-height: 0.8rem;
				padding-right: 0.32rem;
				background-color: #fff;
				.fr{
					font-size: 0.24rem;
					color: #1A2642;
					.shop-price{
						font-size: 0.28rem;
						color: #141C33;
					}
				}
			}	
		}
		.box-bottom{
			border-top: 1px solid #D8DFF0;
			height: 0.8rem;
			line-height: 1rem;
			padding-right: 0.22rem;
			background-color: #fff;
			padding-top: 0.2rem;
			.shop-btn{
				box-sizing: border-box;
				display: inline-block;
				width: 1.5rem;
				height: 0.56rem;
				line-height: 0.56rem;
				text-align: center;
				font-size: 0.28rem;
				color: #90A2C7;
				border: 1px solid #90A2C7;
				border-radius: 4px;
				margin-left:0.2rem;
			}
			.btn-status1{
				color:#336FFF;
				border: 1px solid #336FFF;
			}
		}
	}
</style>
<style lang="less">
	.myOrder .vux-tab-item-badge{
		font-size: 0.16rem;
		margin:auto 0 auto 0.04rem;
	}
	.myOrder .vux-tab-item{
		font-size: 0.28rem;
	}
	.myOrder .vux-tab .vux-tab-item.vux-tab-selected{
		border-bottom: 4px solid #256fff ;
	}
</style>
