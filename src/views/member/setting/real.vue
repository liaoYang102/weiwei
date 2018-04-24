<template>
	<div class="real-box">
		<scoreheader :title="title"></scoreheader>
	
	</div>
</template>

<script>
	import scoreheader from '../../../components/setting_header'
	export default {
		components: {
			scoreheader
		},
		data() {
			return {
				title: '实名认证'
			}
		},
		methods: {

		}
	}
</script>

<style lang="less" scoped>
	
</style>