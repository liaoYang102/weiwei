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
			status: Number
		},
		data(){
			return {
				imgSrc: './static/shop/noShop.png', //./static/shop/404.png 页面丢失  //./static/shop/network.png  网络异常
				stateText:'暂无商品',
			}
		},
		methods:{
			changeText(){
				if(this.status == 0) {
					this.imgSrc = './static/shop/noShop.png';
					this.stateText = '暂无商品'
				}else if(this.status == 1){
					this.imgSrc = './static/shop/404.png';
					this.stateText = '页面丢失'
				}else if(this.status == 2){
					this.imgSrc = './static/shop/network.png';
					this.stateText = '网络异常'
				}
			}
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