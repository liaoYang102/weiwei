<template>
	<section>
		<settingHeader :title="title"></settingHeader>
		<div class="head">
			<img src="../../assets/images/shop/payment_successful.png" alt="" class='fl'>
			<div class="message fl">
				<p class="success">支付成功</p>
				<p class="prompt">宝贝会很快送到您手里~</p>
			</div>
			<div class="clear"></div>
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
					<div class="redeemDetails" @click="goOrderdetails">订单详情</div>
					<div class="exchangeCenter" @click="goShop">商城首页</div>
					<div class="clear"></div>
				</div>
			</div>
		</div>
		<cashBack></cashBack>
		<div class="bottom">
			<recommended></recommended>
		</div>			
	</section>
</template>

<script>
	import settingHeader from '../../components/setting_header'
	import cashBack from './components/cashBack'
	import recommended from './components/recommended'
	export default{
		data(){
			return {
				title:'支付成功'
			}
		},
		components:{
			settingHeader,recommended,cashBack
		},
		methods:{
			goOrderdetails(){
				this.$router.push({ path: '/shop/order_details'})
			},
			goShop(){
				this.$router.push({ path: '/shop'})
			}
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
		background: #fff;
		img{
			width: 2.82rem;
			height: 2.2rem;
		}
		.message{
			margin-left: 0.2rem;
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
		background: #fff;
		padding-bottom: 0.3rem;
		padding-left: 0.2rem;
		/*border-bottom: 0.21rem solid #f5f8f9;*/
		.personInfo{
			border-bottom: 1px solid #E1E1E1;
			font-size: 0.24rem;
			color: #90A2C7;
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
			padding-top: 0.12rem;
			.realPayment{
				font-size: 0.24rem;
				color: #90A2C7;
				.totalMoney{
					font-size: 0.24rem;
					color: #1A2642;
				}
			}
			.btn{
				padding-left: 0.55rem;
				margin-top: 0.45rem;
				.redeemDetails,.exchangeCenter{
					float: left;
					width: 2.4rem;
					padding: 0.1rem 0;
					border: 2px solid #90A2C7;
					border-radius: 0.1rem;
					text-align: center;
					font-size: 0.32rem;
					color: #90A2C7;
					margin-left: 0.36rem;
					box-sizing: border-box;
				}
			}
		}
	}
	.bottom{
		overflow: auto;
		clear: both;
		.recommend{
			padding-left: 0.18rem;
			font-size: 0.3rem;
			color: #222222;
			line-height: 0.9rem;
		}
	}
</style>