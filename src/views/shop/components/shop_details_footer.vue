<template>
	<section>
		<div class="footer">
			<div class="footer_icon">
				<img src="../../../assets/images/shop/customer.png"><br>
				<span>客服</span>
			</div>
			<div class="footer_icon">
				<img src="../../../assets/images/shop/cart.png">
				<badge text="12"></badge><br>
				<span>购物车</span>
			</div>
			<div class="footer-btn btn_green">加入购物车</div>
			<div class="footer-btn btn_blue">立即购买</div>
		</div>
	</section>
</template>

<script>
	
</script>

<style lang="less" scoped>
.footer{
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 1rem;
	background: #FFF;
	border-top: 0.01rem solid #eeeeee;
	.footer_icon{
		width: 18%;
		float: left;
		font-size: 0.2rem;
		color: #7386AD;
		text-align: center;
		border-right: 0.01rem solid #eeeeee;
		margin: auto;
		padding-top: 0.16rem;
		padding-bottom: 0.09rem;
		img{
			width: 30%;
		}
	}
	.footer-btn{
		width: 31.8%;
		text-align: center;
		font-size: 0.32rem;
		color: #FFFFFF;
		float: left;
		padding: 0.26rem 0 0.29rem 0;
	}
	.btn_green{
		background: #00DB83;
	}
	.btn_blue{
		background: #336FFF;
	}
}
</style>

<style lang="less">
.footer .vux-badge{
	position: absolute;
	border-radius: 0.3rem;
	height: 0.25rem;
	width: 0.2rem;
	font-size: 0.18rem;
	line-height: 0.25rem;
	text-align: left;
	left: 27%;
	top: 13%;
	padding: 0 0.08rem 0 0.02rem;
}
</style>