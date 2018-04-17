<template>
	<section>
		<settingHeader :title="title"></settingHeader>
		<div class="head">
			<img src="../../assets/images/shop/payment_successful.png" alt="">
			<div class="message fr">
				<p class="success">支付成功</p>
				<p class="prompt">宝贝会很快送到您手里~</p>
			</div>
		</div>
		<div class="center">
			<div class="personInfo">
				<p class="basic">收件人：张生 185****6787</p>
				<p class="address">收货地址：<span class='fr'>广东佛山市南海区桂城街道佛平路与宝翠路交界万科金色领域界</span><div class="clear"></div></p>
			</div>
			<div class="money">
				<p class="realPayment">
					实付款：<span class="totalMoney">100积分+20.00元</span>
				</p>
				<div class="btn">
					<div class="redeemDetails">兑换详情</div>
					<div class="exchangeCenter">兑换中心</div>
					<div class="clear"></div>
				</div>
			</div>
		</div>
		<div class="bottom">
			<p class="recommend">为你推荐</p>
			<recommended></recommended>
		</div>
			<!-- <ul>
				<li>
					<img src="../../assets/images/shop/product.png" alt="" class='fl'>
					<div class="shopBasic fl">
						<div class="basicName">
							<span class="logo">商品</span>
							<span class="name">女装U宽腿牛仔裤(水洗产品)</span>
							<div class="clear"></div>
						</div>
						<p class="basicTime">2018年02月27日</p>
						<p class="basicPrice">210积分+20元</p>
						<span class="position">了解详情 <img src="../../assets/images/shop/turn_right.png" alt=""></span>
					</div>
					<div class="clear"></div>
				</li>
				<li>
					<img src="../../assets/images/shop/product.png" alt="" class='fl'>
					<div class="shopBasic fl">
						<div class="basicName">
							<span class="logo">商品</span>
							<span class="name">女装U宽腿牛仔裤(水洗产品)</span>
							<div class="clear"></div>
						</div>
						<p class="basicTime">2018年02月27日</p>
						<p class="basicPrice">210积分+20元</p>
						<span class="position">了解详情 <img src="../../assets/images/shop/turn_right.png" alt=""></span>
					</div>
					<div class="clear"></div>
				</li>
				<li>
					<img src="../../assets/images/shop/product.png" alt="" class='fl'>
					<div class="shopBasic fl">
						<div class="basicName">
							<span class="logo">商品</span>
							<span class="name">女装U宽腿牛仔裤(水洗产品)</span>
							<div class="clear"></div>
						</div>
						<p class="basicTime">2018年02月27日</p>
						<p class="basicPrice">210积分+20元</p>
						<span class="position">了解详情 <img src="../../assets/images/shop/turn_right.png" alt=""></span>
					</div>
					<div class="clear"></div>
				</li>
			</ul>
		</div> -->
	</section>
</template>

<script>
	import settingHeader from '../../components/setting_header'
	import recommended from './components/recommended'
	export default{
		data(){
			return {
				title:'支付成功'
			}
		},
		components:{
			settingHeader,recommended
		}
	}
</script>

<style lang='less' scoped>
	.head{
		border-top: 1px solid #E1E1E1;
		border-bottom: 1px solid #E1E1E1;
		padding-top: 0.09rem;
		padding-bottom: 0.11rem;
		padding-left: 0.54rem;
		img{
			width: 2.82rem;
			height: 2.2rem;
		}
		.message{
			margin-right: 1.01rem;
			margin-top:0.69rem;
			.success{
				font-size: 0.36rem;
				font-weight: 700;
				color: #222222;
			}
			.prompt{
				font-size: 0.28rem;
				color: #222222;
			}
		}
	}
	.center{
		padding-bottom: 0.3rem;
		padding-left: 0.2rem;
		border-bottom: 0.21rem solid #f5f8f9;
		.personInfo{
			border-bottom: 1px solid #E1E1E1;
			font-size: 0.24rem;
			color: #666666;
			line-height: 0.65rem;
			padding-bottom: 0.2rem;
			span{
				display: inline-block;
				line-height: 0.33rem;
				width: 5.82rem;
				margin-right: 0.28rem;
				margin-top:0.15rem;
			}
		}
		.money{
			padding-left: 0.2rem;
			padding-top: 0.12rem;
			.realPayment{
				font-size: 0.24rem;
				color: #666666;
				.totalMoney{
					font-size: 0.24rem;
					color: #222222;
				}
			}
			.btn{
				width: 100%;
				padding-left: 0.55rem;
				margin-top: 0.45rem;
				.redeemDetails,.exchangeCenter{
					float: left;
					width: 2.4rem;
					height: 0.7rem;
					border: 2px solid #A0A0A0;
					border-radius: 0.1rem;
					text-align: center;
					line-height: 0.7rem;
					font-size: 0.34rem;
					color: #666;
					margin-left: 0.36rem;
				}
			}
		}
	}
	.bottom{
		overflow: auto;
		.recommend{
			padding-left: 0.18rem;
			font-size: 0.3rem;
			color: #222222;
			line-height: 0.9rem;
		}
		/*ul{
			li{
				border-top: 1px solid #E1E1E1;
				padding-bottom: 5px;
				padding-top: 5px;
				padding-left: 6px;
				position: relative;
				img{
					width: 1.6rem;
					height: 1.6rem;
					margin-right: 0.18rem;
				}
				.shopBasic{
					padding-top: 0.1rem;
					.basicName{
						padding-left: 4px;
						margin-bottom: 0.1rem;
						.logo{
							display: inline-block;
							vertical-align: middle;
							width: 0.64rem;
							height: 0.32rem;
							line-height: 0.32rem;
							background: #3889FF;
							text-align: center;
							border-radius: 2px;
							font-size: 0.24rem;
							color: #FFFFFF;
						}
						.name{
							display: inline-block;
							font-size: 0.28rem;
							color: #222222;
						}
					}
					.basicTime{
						margin-bottom: 0.11rem;
						font-size: 0.24rem;
						color: #A0A0A0;
					}
					.basicPrice{
						font-size: 0.24rem;
						color: #FF8A30;
					}
					.position{
						position: absolute;
						top:0.75rem;
						right: 0.202rem;
						font-size: 0.28rem;
						color: #9B9B9B;
						img{
							width: 0.2rem;
							height: 0.2rem;
						}
					}
				}
			}
		}*/
	}
</style>