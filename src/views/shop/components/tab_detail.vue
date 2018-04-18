<template>
	<x-header :left-options="{backText: '',preventGoBack:'true'}" title="slot:overwrite-title"  style="background:#fff;" class="tab_shop">
      <div class="overwrite-title-demo" slot="overwrite-title">
        <tab bar-position="bottom" custom-bar-width="40px">
	      <tab-item selected @on-item-click="onItemClick">商品</tab-item>
	      <tab-item @on-item-click="onItemClick">详情</tab-item>
	      <tab-item @on-item-click="onItemClick">评价</tab-item>
	    </tab>
      </div>
    </x-header>
</template>

<script>
	export default {
		data(){
			return{

			}
		},
		methods:{
			onItemClick (index) {
		      console.log('on item click:', index)
		    },
		}
	}
</script>
<style lang='less'>
	#app .vux-header .vux-header-left .left-arrow:before {
		border: 1px solid #222;
		border-width: 1px 0 0 1px;
	}
	
	#app .vux-header .vux-header-title {
		color: #333;
	}
	.vux-header{
		position: fixed!important;
		top: 0;
		width: 100%;
		z-index: 1111;
	}
	.tab_shop .vux-tab-ink-bar{
		bottom:4px;
	}
</style>