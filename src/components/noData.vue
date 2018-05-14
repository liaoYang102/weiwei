<template>
	<section class="no_data">
    	<div class="none-data">
    		<img :src="imgSrc" alt=""> 
			<p>{{ stateText}}</p>
    	</div>
	</section>
</template>

<script>
	export default {
		props:{
			status: Number,
			stateText: String
		},
		data(){
			return {
				imgSrc: '', //./static/shop/404.png 页面丢失  //./static/shop/network.png  网络异常
			}
		},
		methods:{
			changeImg(){
				if(this.status == 0) {
					this.imgSrc = './static/shop/noShop.png';
				}else if(this.status == 1){
					this.imgSrc = './static/shop/404.png';
				}else if(this.status == 2){
					this.imgSrc = './static/shop/network.png';
				}
			}
		},
		mounted:function(){
			this.changeImg()
		}
	}
</script>

<style lang="less" scoped>
	.no_data{
		width: 100%;
		.none-data {
		    text-align: center;
		    width: 100%;
		    padding-bottom: 0.2rem;
		    img{
	    	    width: 100%;
		    }
		    p{
		    	font-size: 0.32rem;
	    		color: #1A2642;
		    }
		}
	}
</style>