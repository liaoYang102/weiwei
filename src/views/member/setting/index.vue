<template>
	<div class="content">
		<settingHeader :title="title"></settingHeader>
		<div class="list">
			<group gutter="0">
				<cell class="list-item" title="个人信息" is-link></cell>
				<cell class="list-item" title="消息设置" is-link></cell>
				<cell class="list-item" title="更换手机号" is-link></cell>
				<cell class="list-item" title="重置登录密码" is-link></cell>
				<cell class="list-item" title="关于我们" is-link></cell>
			</group>
			<div class="logout-btn">退出登录</div>
		</div>
	</div>
</template>

<script>
	import { Cell, Group } from 'vux'
	import settingHeader from '../../../components/setting_header'
	export default {
		data() {
			return {
				title: '账户设置'
			}
		},
		created() {},
		mounted() {

		},
		methods: {

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
		.logout-btn{
			width: 100%;
			margin: 0.8rem 0;
			text-align: center;
		}
	}
</style>