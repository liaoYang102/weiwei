<template>
	<section class="benefits">
		<div class="top">
			<p>暂未满足条件</p>
			<p>专享 <span>5</span> 大权益 每月预计可赚 <span>2000+</span></p>
			<div class="btn">查看满足条件</div>
		</div>
	</section>
</template>


<script>
	export default {

	}
</script>

<style lang="less" scoped>
	.benefits{
		.top{
			width: 100%;
			background: url(../../../assets/images/member/benefitsBg.png) no-repeat;
			background-size: 100% 100%;
			text-align: center;
			height: 3.35rem;
			font-size: 0.3rem;
			p:nth-child(1){
				font-size: 0.48rem;
				padding-top: 0.53rem;
			}
			p:nth-child(2){
				margin: 0.28rem 0;
			}
			span{
				font-size: 0.36rem;
			}
			.btn{
				width:4.1rem;
				/*background-image:linear-gradient(#336FFF, #7EE8FF) 30 30;*/
				border-radius:0.39rem;
				text-align: center;
				color: #fff;
				font-size: 0.28rem;
				margin: auto;
			}
		}
	}
</style>