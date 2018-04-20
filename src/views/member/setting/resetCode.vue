<template>
	<div class="content">
		<settingHeader :title="title"></settingHeader>
		<div class="header clear">
			<div class="logo">
				<img src="../../../assets/images/user/change.png" alt="">
			</div>
			<p class="tit">重置密码</p>
		</div>
		<group gutter="0">
			<x-input class="input-item" v-model="oldPassword" placeholder="输入新密码" type="number" :max="20" :required="true"></x-input>
			<x-input class="input-item" v-model="newPassword" placeholder="再次输入新密码" type="number" :max="20" :required="true"></x-input>
		</group>
		<div class="tip">
			登录密码由6-20位数字和字母组成
			<x-button class="add-btn" :gradients="['#1D62F0', '#19D5FD']" @click.native="submit">保存</x-button>
		</div>
	</div>
</template>

<script>
	import { XInput, Group, XButton, Cell } from 'vux'
	import settingHeader from '../../../components/setting_header'
	export default {
		data() {
			return {
				title: '重置密码',
				oldPassword: '',
				newPassword: ''
			}
		},
		created() {},
		mounted() {

		},
		methods: {
			submit() {
				console.log(this.oldPassword, this.newPassword)
				this.$router.push({
					path: "/member/info/index"
				})
			}
		},
		components: {
			settingHeader,
			XInput,
			Group,
			XButton,
			Cell
		}
	}
</script>

<style lang="less" scoped>
	.header {
		width: 100%;
		height: 4.8rem;
		color: #f00;
		background-size: 100% 100%;
		overflow: hidden;
		.logo {
			width: 1.75rem;
			margin: 0.6rem auto 0;
			img {
				width: 100%;
			}
		}
		.tit {
			font-size: 0.4rem;
			color: rgb(135, 186, 255);
			text-align: center;
			margin-top: .1rem;
		}
	}
	
	.input-item {
		height: 1.02rem;
		font-family: PingFangSC-Regular;
		font-size: 0.28rem;
		color: #90A2C7;
		letter-spacing: 0;
		padding-top: 0;
		padding-bottom: 0;
		box-sizing: border-box;
	}
	
	.tip {
		padding: 10px 15px;
		ont-family: PingFangSC-Regular;
		font-size: 0.28rem;
		color: #90A2C7;
		letter-spacing: 0;
	}
	
	.add-btn {
		height: 0.88rem;
		margin-top: 0.55rem;
		ont-family: PingFangSC-Regular;
		font-size: 0.28rem;
		color: #FFFFFF;
		letter-spacing: 0;
	}
</style>