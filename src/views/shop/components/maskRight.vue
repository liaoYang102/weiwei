<template>
	<div>
		<div v-transfer-dom>
		  <popup v-model="value" position="right">
		    <div style="width:6.6rem;" class="screening">

		    </div>
		  </popup>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		value: Boolean
	},
    data(){
    	return {
    		showMaskRight: true,
    	}
    }
}	
</script>

<style lang="less" scoped>
	
</style>