<template>
	<section class="nav">
		<div class="icon" @click="goProduct">
			<img src="../../../assets/images/shop/icon1.png">
			<div class="move">商城分类</div>
		</div>

		<div class="icon" @click="goScore">
			<img src="../../../assets/images/shop/icon2.png">
			<div class="move">1280积分</div>
		</div>

		<div class="icon" @click="goOrder">
			<img src="../../../assets/images/shop/icon3.png">
			<div class="move">我的订单</div>
		</div>
	</section>
</template>

<script>
	export default {
		data(){
			return {

			}
		},
		methods: {
			goProduct(){
				this.$router.push({ path: '/shop/product' })
			},
			goScore(){
				this.$router.push({ path: '/member/score/index'})
			},
			goOrder(){
				this.$router.push({ path: '/shop/my_order' })
			}
		}
	}
</script>

<style lang="less" scoped>
.nav{
	background: #fff;
	width: 100%;
	overflow: hidden;
	margin-bottom: 0.3rem;
	.icon{
		width: 30%;
		float: left;
		padding-top: 0.39rem;
		padding-bottom: 0.2rem;
		margin-left: 0.2rem;
		text-align: center;
		font-size: 0.28rem;
		color: #222222;
		img{
			width: 53.5%;
			vertical-align:middle;
		}
		.move{
			position: relative;
			top: -0.2rem;
		}
	}
}
</style>