<template>
	<section>
		<settingHeader :title="title"></settingHeader>
		<div class="head">
			<img src="../../assets/images/shop/t_successful.png" alt="" class='fl'>
			<div class="message fl">
				<p class="success">交易成功</p>
				<p class="prompt">快拆开宝贝看看吧~~</p>
			</div>
			<div class="clear"></div>
		</div>
		<div class="center">
			<div class="money">
				<div class="btn">
					<div class="redeemDetails" @click="goShop">商城首页</div>
					<div class="exchangeCenter" @click="goComment">评价商品</div>
					<div class="clear"></div>
				</div>
			</div>
		</div>
		<div class="bottom">
			<recommended></recommended>
		</div>			
	</section>
</template>

<script>
	import settingHeader from '../../components/setting_header'
	import recommended from './components/recommended'
	export default{
		data(){
			return {
				title:'确认订单'
			}
		},
		components:{
			settingHeader,recommended
		},
		methods:{
			goShop(){
				this.$router.push({ path: '/shop'})
			},
			goComment(){
				this.$router.push({ path: '/shop/write_comments'})
			}
		}
	}
</script>

<style lang='less' scoped>
	.head{
		border-top: 1px solid #E1E1E1;
		border-bottom: 1px solid #E1E1E1;
		padding-top: 0.09rem;
		padding-bottom: 0.33rem;
		padding-left: 0.54rem;
		background: #fff;
		img{
			width: 2.81rem;
			height: 1.75rem;
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
				/*width: 100%;*/
				padding-left: 0.55rem;
				margin-top: 0.31rem;
				.redeemDetails,.exchangeCenter{
					float: left;
					width: 2.4rem;
					height: 0.7rem;
					border: 2px solid #90A2C7;
					border-radius: 0.1rem;
					text-align: center;
					line-height: 0.7rem;
					font-size: 0.34rem;
					color: #90A2C7;
					margin-left: 0.36rem;
				}
				.exchangeCenter{
					border: 2px solid #336FFF;
					border-radius: 0.1rem;
					color:#336FFF;
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
	}
</style>