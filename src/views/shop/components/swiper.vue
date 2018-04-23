<template>
	<div v-model="imgList">
		<swiper :options="swiperOption" class="swiper">
	        <swiper-slide v-for="item in demoList">
	        	<img :src="item">
	        </swiper-slide>
	        <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
	</div>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		props:{
			imgList: Array
		},
		data(){
			return {
				demoList:[],
				swiperOption :{
					pagination:{
						el:'.swiper-pagination'
					},
					// autoplay: true,
					loop:true
				},
			}
		},
		created(){
        	this.onList()
    	},
    	components: {
			swiper,
			swiperSlide
		},
    	methods:{
			onList(){
				this.demoList = this.imgList;
			}
		}
	}
</script>

<style lang='less' scoped>
	@img:2.2rem;
	.swiper{
		height: @img;
	}
	img{
		width: 7.5rem;
		height: @img;
	}
</style>