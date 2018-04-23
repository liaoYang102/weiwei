<template>
	<div class="content">
		<settingHeader :title="title"></settingHeader>
		<div class="strategy-box">
			<img src="../../../../static/member/score-tip.png" />
		</div>
	</div>
</template>

<script>
	import { Tab, TabItem, Masker, Drawer } from 'vux'
	import settingHeader from '../../../components/setting_header'
	export default {
		data() {
			return {
				title: '积分攻略'
			}
		},
		methods: {

		},
		components: {
			settingHeader
		}
	}
</script>

<style lang="less" scoped>
	.strategy-box {
		img {
			width: 100%;
			height: auto;
		}
	}
</style>