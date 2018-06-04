<template>
	<div class="isload">
		<x-dialog class="w1" v-model="show" :hide-on-blur="true" @on-hide="ishide">
			<div class="load-bw">
				<img class="load-img" :src="'./static/index/isload.gif'" />
			</div>
		</x-dialog>
	</div>
</template>

<script>
	import { XDialog } from 'vux'
	export default {
		props: {
			type: String
		},
		data() {
			return {
				show: false,
				ishide:Function
			}
		},
		created() {

		},
		methods: {
		},
		components: {
			XDialog
		}
	}
</script>

<style lang="less">
	.w1 .weui-dialog{
		width: 1.1rem !important;
		background: transparent !important; 
	}
	.load-bw{
		width: 1.1rem;
		height: 1.1rem;
		border-radius: 8px;
		background-color: white;
		position: relative;
		margin: 0 auto;
	}
	.load-img {
		width: 0.8rem;
		height: 0.8rem;
		border-radius: 50%;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
	}
</style>