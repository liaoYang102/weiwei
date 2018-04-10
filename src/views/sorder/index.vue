<template>
	<section>
		<tab>
	      <tab-item selected @on-item-click="onItemClick">全部</tab-item>
	      <tab-item class='vux-center' @on-item-click="onItemClick">待付款</tab-item>
	      <tab-item @on-item-click="onItemClick">进行中</tab-item>
	      <tab-item @on-item-click="onItemClick">已完成</tab-item>
	      <tab-item @on-item-click="onItemClick"><span class="iconfont icon-caidan" style="color: rgb(50, 119, 255);"></span></tab-item>
	    </tab>
        <swiper height="100px">
	        <swiper-item>
	          <div class="tab-swiper vux-center"></div>
	        </swiper-item>
        </swiper>
	</section>
</template>
<script>
	export default {
	  data(){
	  	return{

	  	}
	  },
	  methods:{
	  	onItemClick (index) {
	        console.log('on item click:', index);
	    }
	  }
	}
</script>
<style lang='less' scoped>
	.scrollable .vux-tab-item{
		flex:inherit;
	}
</style>