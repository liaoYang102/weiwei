<template>
	<div class="content">
		<settingHeader :title="title"></settingHeader>
		<div class="list">
			<group gutter="0">
				<cell class="list-item" title="个人信息" is-link link="/member/info/index"></cell>
				<cell class="list-item" title="消息设置" is-link link="/member/message/setting"></cell>
				<cell class="list-item" title="密码管理" is-link link="/user/changelist"></cell>
				<cell class="list-item" title="关于我们" is-link link="/member/setting/about"></cell>
			</group>
			<div class="logout-btn" @click="logout">退出登录</div>
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
			logout() {
				var _this = this;
				_this.$http.post(_this.url.user.logout, {
					userId: localStorage.getItem('userId'),
					platformId: _this.url.platformId
				}).then((res) => {
					if(res.data.status == '00000000') {
						_this.$vux.toast.show({
							width: '50%',
							type: 'text',
							position: 'middle',
							text: '退出成功'
						})
					}
					_this.$router.push({
						path: '/user/reg'
					})
				})
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
		.logout-btn {
			width: 100%;
			margin: 0.21rem 0;
			text-align: center;
			background-color: #fff;
			height: 1.02rem;
			line-height: 1.02rem;
		}
	}
</style>