<template>
	<section>
		<settingHeader :title="title"></settingHeader>
		<div class="stay-tuned">
			<img src="../../assets/images/shop/stay.png" alt="">
			<p class="prompt">
				敬请期待....
			</p>
		</div>
	</section>
</template>

<script>
	import settingHeader from '../../components/setting_header'
	export default{
		data(){
			return {
				title:'提示'
			}
		},
		components:{
			settingHeader
		},
	}
</script>

<style lang='less' scoped>
	.stay-tuned{
		position: absolute;
		top:0;
		bottom:0;
		width: 100%;
		text-align: center;
		background-color: #fff;
		padding-top: 1.95rem;
		img{
			width: 3.5rem;
		}
		.prompt{
			margin-top: 0.7rem;
			height:0.36rem; 
			font-size:0.36rem;
			font-family:MicrosoftYaHei;
			color:rgba(26,38,66,1);
		}
	}
</style>