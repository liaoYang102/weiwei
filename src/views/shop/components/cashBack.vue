<template>
	<div class="cashBack">
		<p class="cashTop">本次支付获得</p>
		<div class="cashBox">
			<router-link to="/member/earnings/currency">
				<div class="fl box">
					<p class="accountBack">CGC通用积分</p>
					<p class="priceBack">2元</p>
					<p class="statusBack">去查看 ></p>
				</div>
			</router-link>
			
			<router-link to="/member/earnings/credit">
				<div class="fl box">
					<p class="accountBack">信用积分</p>
					<p class="priceBack">200分</p>
					<p class="statusBack">已有4245分 ></p>
				</div>
			</router-link>
			<div class="clear"></div>
		</div>
	</div>
</template>

<style lang='less' scoped>
	.cashBack{
		width: 100%;
		height: 3.32rem;
		padding-top: 0.3rem;
		background: #F5F6FA;
		.cashTop{
			height:0.4rem;
			font-size:0.28rem;
			color:#90A2C7;
			text-align: center;
		}
		.cashBox{
			margin: 0.18rem 0 0.3rem;
			padding-left: 0.32rem;
			.box{
				margin-right: 0.16rem;
				padding-top: 0.31rem;
				width: 3.34rem;
				height: 2.14rem;
				background-color: #E4EBFB;
				text-align: center;
				border-radius: 4px ; 
				.accountBack{
					height:0.45rem;
					line-height:0.45rem; 
					font-size:0.32rem;
					color:#1A2642;
					margin-bottom: 0.2rem;
				}
				.priceBack{
					margin-bottom: 0.2rem;
					height:0.4rem;
					line-height:0.4rem;
					font-size:0.28rem;
					color:#336FFF;
				}
				.statusBack{
					height:0.4rem; 
					line-height: 0.4rem;
					font-size:0.28rem;
					color:#90A2C7;
				}
			}
		}
	}
</style>