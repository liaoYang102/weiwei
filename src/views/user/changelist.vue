<template>
	<div class="content">
		<settingHeader :title="title"></settingHeader>
		<div class="list">
			<group gutter="0">
				<cell class="list-item" title="设置支付密码" is-link link="/user/changePaymentPassword"></cell>
				<cell class="list-item" title="设置登录密码" is-link link="/user/changeLoginPassword"></cell>
			</group>
		</div>
	</div>
</template>

<script>
	import { Cell, Group } from 'vux'
	import settingHeader from '../../components/setting_header'
	export default {
		data() {
			return {
				title: '密码设置'
			}
		},
		components: {
			settingHeader
		}
	}
</script>

<style lang="less" scoped>
	.list {
		.list-item {
			font-family: PingFangSC-Regular;
			font-size: 0.28rem;
			color: #1A2642;
			letter-spacing: 0;
			height: 1.02rem;
			padding-top: 0!important;
			padding-bottom: 0!important;
		}
	}
</style>