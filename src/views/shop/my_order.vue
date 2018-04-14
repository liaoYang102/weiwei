<template>
	<section class='myOrder'>
		<settingHeader :title="title"></settingHeader>
		<tab :line-width="1" :scroll-threshold="5" custom-bar-width="30px">
	      <tab-item selected @on-item-click="onItemClick">全部</tab-item>
	      <tab-item @on-item-click="onItemClick">待付款</tab-item>
	      <tab-item @on-item-click="onItemClick">待收货</tab-item>
	      <tab-item @on-item-click="onItemClick">已完成</tab-item>
	      <tab-item @on-item-click="onItemClick">已取消</tab-item>
	    </tab>
	    <scroller lock-x  @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" style="background-color:#efeff4" v-if='test'>
	      <div class="box2">
	        <div class="shop-box">
				<div class="box-head">
					<div class="fl">
						<img src="" alt="" class='shop-logo'>
						<span class="box-name">优衣库冒牌店</span>
						<img src="../../assets/images/shop/turn_right.png" alt="">
					</div>
					<div class="fr">等待买家付款</div>
					<div class="clear"></div>
				</div>
				<div class="box-detail">
					<div class="shop-detail">
						<img src="../../assets/images/shop/order_detail1.png" alt="">
						<div class="fl">
							<p class="shop-name">女装U宽腿牛仔裤(水洗产品)</p>
							<p class="shop-size">颜色:蓝色；尺码:L/170修身</p>
						</div>
					</div>
					<div class="shop-total">
						<p class="fr">
							共 1 件 合计：<span class="shop-price">100积分+30元</span>
						</p>
					</div>
				</div>
				<div class="box-bottom">
					<div class="shop-btn fr">取消订单</div>
					<div class="shop-btn fr">付款</div>
				</div>
	        </div>
	        <load-more tip="loading" id='loading'></load-more>
	      </div>
	    </scroller>
	    <div class="wrap no_orders none-data" v-else>
			<img src="../../assets/images/sorder/none_03.png" alt=""> 
			<p>啊噢！什么订单也没有</p> 
			<span class="guang">到处逛逛</span>
	    </div>
	</section>
</template>

<script>
	import settingHeader from '../../components/setting_header'
	export default {
		data(){
			return {
				title:'我的订单',
				test: true,
				show9: false
			}
		},
		components: {
	        settingHeader
	    },
		methods:{
		  	onItemClick (index) {
		  		this.test = false;
		        console.log('on item click:', index);
		    },
		    onScrollBottom(){
		    	var load = document.getElementById("loading");
		    	load.style.display = 'block'
		    	if (this.onFetching) {
			        // do nothing
			      } else {
			        this.onFetching = true
			        setTimeout(() => {
			        	load.style.display = 'none'
			        	console.log(123);
			          	this.$nextTick(() => {
			            this.$refs.scrollerBottom.reset()
			          })
			          this.onFetching = false
			        }, 2000)
			      }
		    }
		}
	}
</script>

<style lang="less" scoped>
	.vux-loadmore{
		display: none;
	}
	.none-data {
	    /* display: none; */
	    position: absolute;
	    height: 8.8rem;
	    background: #fff;
	    width: 100%;
	    height: 100%;
	    max-width: 480px;
	    text-align: center;
	    z-index: 10;
	    img{
    	    width: 40%;
    		margin-top: 26%;
	    }
	    p{
	    	font-size: 14px;
    		color: #8f8f94;
	    }
	    .guang{
	    	display: inline-block;
		    border-radius: 0.3rem;
		    border: 1px solid #3eabff;
		    color: #3eabff;
		    font-size: 0.24rem;
		    padding: 0.1rem 0.3rem;
		    margin-top: 0.3rem;
	    }
	}
	.box2{
		background-color: #F5F6FA;
		.box-head{
			height: 0.8rem;
			line-height: 0.8rem;
			.fr{
				font-size: 0.28rem;
				color: #336FFF;
				margin-right: 0.2rem;
			}
			.fl{
				.shop-logo{
					width: 0.36rem;
					height: 0.36rem;
				}
				.box-name{
					font-size: 0.3rem;
					color: #1A2642;
				}
			}
		}
	}
</style>
<style lang="less">
	.myOrder .vux-tab-item-badge{
		font-size: 0.16rem!important;
		margin:auto 0 auto 0.04rem !important;
	}
	.myOrder .vux-tab-item{
		font-size: 0.14rem!important;
	}
</style>