<template>
	<div class="loading-box" v-show="show">
		<div class="loading-mask"></div>
		<div class="loading-content">
			<div class="animate">
			</div>
			<div class="text">{{text}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			show: Boolean,
			text: {
				type: String,
				default: '正在加载中...'
			},
		}
	}
</script>

<style lang="less">
	.loading-box {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 50px;
		height: 50px;
		background: red;
		color: white;
		text-align: center;
		line-height: 50px;
	}
</style>