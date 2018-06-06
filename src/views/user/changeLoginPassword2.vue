<template>
	<div>
		<settingHeader :title="title"></settingHeader>
		<div class="content">
			<group gutter="0" class="input-div">
				<x-input class="input-item" ref="password" v-model="password" placeholder="输入六位新密码" type="password" :max="20"></x-input>
				<x-input class="input-item" ref="password1" v-model="password1" placeholder="确认新密码" type="password"></x-input>
			</group>
			<div class="tip">
				<x-button class="add-btn" @click.native="submit" :show-loading="showLoading">提交</x-button>
			</div>
		</div>
	</div>
</template>

<script>
	import { XInput, Group, XButton, Cell, } from 'vux'
	import settingHeader from '../../components/setting_header'
	export default {
		data() {
			return {
				title: '设置登录密码', //头部标题
				password: '',
				password1: '',
				showLoading: false
			}
		},
		created() {},
		methods: {
			submit() {
				var _this = this

				if(_this.password == '' || _this.password1 == '') {
					_this.$vux.toast.show({
						width: '50%',
						type: 'text',
						position: 'middle',
						text: '密码不能少于六位'
					})
					return false
				}

				if(_this.password != _this.password1) {
					_this.$vux.toast.show({
						width: '50%',
						type: 'text',
						position: 'middle',
						text: '两次密码输入不一致'
					})
					return false
				}
				
				_this.$http.post(_this.url.user.forgetPassword, {
					mobile: _this.$route.query.mobile,
					smsVerificationCode: _this.$route.query.code,
					newPassword: _this.MD5(_this.password),
					platformId: _this.url.platformId
				}).then((res) => {
					if(res.data.status == "00000000") {
						_this.$vux.toast.show({
							width: '50%',
							type: 'text',
							position: 'middle',
							text: '密码修改成功'
						})
						_this.$router.replace({
							path: '/user/reg'
						})
					}
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
	.login-box {
		width: 100%;
		height: 3.5rem;
		position: relative;
		img {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 2rem;
			height: auto;
		}
	}
	
	.input-item {
		height: 1.02rem;
		font-family: PingFangSC-Regular;
		font-size: 0.28rem;
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
		text-align: center;
	}
	
	.add-btn {
		height: 0.88rem;
		margin-top: 0.55rem;
		ont-family: PingFangSC-Regular;
		font-size: 0.28rem;
		color: #FFFFFF!important;
		letter-spacing: 0;
		background-color: #336FFF!important;
	}
	
	.login-re {
		padding: 10px 15px;
		display: flex;
		justify-content: space-between;
		span {
			color: #10aeff;
		}
	}
</style>