<template>
	<div v-model="imgList">
		<swiper :list="demoList" auto style="width:100%;margin:0 auto;" :height="height" dots-class="custom-bottom" dots-position="center"></swiper>
	</div>
</template>

<script>
	
	export default {
		props:{
			imgList: Array
		},
		data(){
			return {
				demoList:[],
				height:"2.2rem"
			}
		},
		mounted:function(){
        	this.onList()
    	},	
    	methods:{
			onList(){
				console.log('--', this.imgList)
				const demoList = this.imgList.map((one, index) => ({
				  url: 'javascript:',
				  img: one
				}))
				this.demoList = demoList;
				console.log('--22', this.demoList)
			}
		}
	}
</script>

<style lang='less'>
.vux-slider > .vux-swiper > .vux-swiper-item > a > .vux-swiper-desc{
    background-image: none !important;
}
</style>