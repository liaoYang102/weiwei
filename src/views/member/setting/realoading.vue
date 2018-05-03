<template>
	<div class="realload-box">
		<scoreheader :title="title"></scoreheader>
		<div class="tip">
			<p>信息审核中</p>
			<p>请耐心等待2~5分钟</p>
		</div>
		<div class="btn-box">
			<div @click="$router.go(-1)">返回</div>
			<div>刷新页面</div>
		</div>
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
				title: '审核中'
			}
		},
		methods: {

		}
	}
</script>

<style lang="less" scoped>
	.realload-box {
		height: 100%;
		background-color: white;
		.tip {
			height: 1.7rem;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			background: rgba(51, 111, 255, 1);
			font-family: PingFangSC-Medium;
			color: rgba(255, 255, 255, 1);
			p:nth-child(1) {
				font-size: 0.32rem;
			}
			p:nth-child(2) {
				font-size: 0.28rem;
				margin-top: 0.12rem;
			}
		}
		.btn-box {
			margin-top: 0.65rem;
			display: flex;
			align-items: center;
			justify-content: center;
			div:nth-child(1) {
				width: 2.4rem;
				height: 0.7rem;
				line-height: 0.7rem;
				text-align: center;
				border-radius: 3px;
				color: #90A2C7;
				border: 1px solid #90A2C7;
				margin-right: 0.28rem;
			}
			div:nth-child(2) {
				width: 2.4rem;
				height: 0.7rem;
				line-height: 0.7rem;
				text-align: center;
				border-radius: 3px;
				color: #336FFF;
				border: 1px solid #336FFF;
			}
		}
	}
</style>