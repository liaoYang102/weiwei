<template>
	<x-header title="slot:overwrite-title">
      <div class="overwrite-title-demo" slot="overwrite-title">
        <tab>
	      <tab-item selected @on-item-click="onItemClick">已发货</tab-item>
	      <tab-item @on-item-click="onItemClick">未发货</tab-item>
	      <tab-item @on-item-click="onItemClick">全部订单</tab-item>
	    </tab>
      </div>
    </x-header>
</template>

<script>
	export default {
		
	}
</script>
<style lang='less'>
	
</style>