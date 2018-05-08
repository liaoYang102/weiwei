<template>
	<div>
		<settingHeader :title="title"></settingHeader>
		<div class="content">
			<group gutter="0" class="input-div">
				<x-input class="input-item" ref="phone" v-model="phone" placeholder="输入手机号码" type="number" :max="11" :required="true" @on-change="phoneChange"></x-input>
				<x-input class="input-item" type="number" ref="code" v-model="code" placeholder="验证码" @on-change="codeChange">
					<x-button slot="right" type="primary" mini @click.native="sendCode" :disabled="sendFlag">{{codeText}}</x-button>
				</x-input>
			</group>
			<div class="tip">
				<x-button class="add-btn" @click.native="submit" :show-loading="showLoading">下一步</x-button>
			</div>
		</div>
	</div>
</template>

<script>
	import { XInput, Group, XButton, Cell, AlertModule } from 'vux'
	import settingHeader from '../../components/setting_header'
	export default {
		data() {
			return {
				title: '设置登录密码', //头部标题
				phone: '', //手机号码
				code: '', //验证码
				regText: '提示',
				codeText: '发送验证码',
				num: 60,
				sendFlag: false,
				showLoading: false
			}
		},
		created() {},
		mounted() {
			this.$refs.phone.focus()
		},
		methods: {
			submit() {
				this.$router.push({path:'/user/changePaymentPassword2'})
			},
			codeChange(val) {

			},
			phoneChange(val) {
				if(val.length == 11) {
					this.$refs.phone.blur()
				}
			},
			sendCode() {
				var _this = this
				_this.$refs.code.focus()
				this.$vux.toast.show({
					width: '50%',
					type: 'text',
					text: '验证码发送成功'
				})
				this.reduce()
			},
			reduce() {
				var _this = this
				if(_this.num == 0) {
					_this.codeText = "发送验证码";
					_this.num = 60;
					_this.sendFlag = false
					return;
				} else {
					_this.num--
						_this.codeText = '重新发送验证码' + "(" + _this.num + ")"
					_this.sendFlag = true
				}

				setTimeout(function() {
					_this.reduce()
				}, 1000)
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