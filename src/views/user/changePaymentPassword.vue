<template>
	<div class="zf-box">
		<settingHeader :title="title"></settingHeader>
		<div v-if="isRemember == 3">
			<div class="tips">
				<div>您是否记得账号<span>17520439845</span></div>
				<div>当前使用的支付密码</div>
			</div>
			<div class="two-btn">
				<div @click="remember">记得</div>
				<div @click="forget">忘记了</div>
			</div>
		</div>
		<div class="content bounceInRight animated" v-if="isRemember == 0">
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
		<div class="content bounceInRight animated" v-if="isRemember == 1">
			<group gutter="0" class="input-div">
				<x-input class="input-item" ref="oldpassword" v-model="phone" placeholder="输入旧密码" type="number" :max="4" :required="true" @on-change="oldpasswordChange"></x-input>
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
				showLoading: false,
				isRemember: 3,
			}
		},
		created() {
			this.getUserPayPassword()
		},
		mounted() {

		},
		methods: {
			//检测是否设置支付密码
			getUserPayPassword() {
				var _this = this
				_this.$http.get(_this.url.user.getUserPayPassword, {
					userId: sessionStorage.getItem('userId')
				}).then((res) => {
					if(res.data.status == "00000000") {
						console.log(res)
					}
				})
			},
			remember() {
				var _this = this
				_this.isRemember = 1
				_this.$nextTick(function() {
					_this.$refs.oldpassword.focus()
				})
			},
			forget() {
				var _this = this
				_this.isRemember = 0
				_this.$nextTick(function() {
					_this.$refs.phone.focus()
				})
			},
			submit() {
				this.$router.push({
					path: '/user/changePaymentPassword2'
				})
			},
			oldpasswordChange(val) {

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
	.zf-box {
		.tips {
			height: 2.22rem;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			background-color: white;
			font-size: 0.28rem;
			font-family: MicrosoftYaHei;
			color: rgba(144, 162, 199, 1);
			div {
				margin-bottom: 0.1rem;
				span {
					font-size: 0.32rem;
					color: #1A2642;
				}
			}
		}
		.two-btn {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 0.35rem;
			margin-top: 0.30rem;
			box-sizing: border-box;
			div {
				width: 2.7rem;
				height: 0.88rem;
				line-height: 0.88rem;
				margin-top: 0.6rem;
				font-size: 0.28rem;
				text-align: center;
				font-family: MicrosoftYaHei;
			}
			div:nth-child(1) {
				border: 1px solid #ddd;
				color: rgba(26, 38, 66, 1);
			}
			div:nth-child(2) {
				background: rgba(51, 111, 255, 1);
				color: rgba(255, 255, 255, 1);
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
			border-radius: 0!important;
		}
		.login-re {
			padding: 10px 15px;
			display: flex;
			justify-content: space-between;
			span {
				color: #10aeff;
			}
		}
	}
</style>