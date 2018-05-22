<template>
	<div v-model="imgList">
		<swiper :options="swiperOption" class="swiper">
	        <swiper-slide v-for="(item, index) in demoList" :key="index">
	        	<img v-lazy="item">
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
					autoplay: {
						disableOnInteraction: false,
					},
					// loop:true,
					// observer:true,//修改swiper自己或子元素时，自动初始化swiper
                	// observeParents:true,//修改swiper的父元素时，自动初始化swiper
                	// disableOnInteraction : false,
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