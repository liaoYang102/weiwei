<template>
	<div>
		<settingHeader :title="title"></settingHeader>
		<div class="content">
			<div class="login-box">
				<img :src="'./static/member/login-img.png'" />
			</div>
			<group gutter="0" class="input-div">
				<!--<cell class="input-item" title="国家" value="中国" is-link value-align="right"></cell>-->
				<x-input class="input-item" ref="phone" v-model="mobile" placeholder="用户名" type="number" :max="11" :required="true" @on-change="nameChange"></x-input>
				<x-input class="input-item" ref="password" v-model="password" placeholder="登录密码" type="password" :required="true" @on-change="passwordChange"></x-input>
				<x-input v-if="!isReg" class="input-item bounceInUp animated" type="number" ref="code" v-model="code" placeholder="验证码" @on-change="codeChange">
					<x-button slot="right" type="primary" mini @click.native="sendCode" :disabled="sendFlag">{{codeText}}</x-button>
				</x-input>
			</group>
			<div class="tip">
				<x-button class="add-btn" @click.native="submit" :show-loading="showLoading" v-if="isReg">立即登录</x-button>
				<x-button class="add-btn" @click.native="reg" :show-loading="showLoading" v-else>立即注册</x-button>
			</div>
			<div class="login-re">
				<span @click="resetPass">忘记密码?</span>
			</div>
		</div>
	</div>
</template>

<script>
	import { XInput, Group, XButton, Cell, Loading, AlertModule, Confirm } from 'vux'
	import settingHeader from '../../components/setting_header'
	export default {
		data() {
			return {
				title: '用户登录', //头部标题
				mobile: '', //手机号码
				password: '', //密码
				code: null, //验证码
				show: false,
				regText: '提示',
				btnText: '立即登录',
				isReg: true, //判断是否注册
				codeText: '发送验证码',
				num: 60,
				sendFlag: false,
				showLoading: false
			}
		},
		beforeCreate() {
			if(sessionStorage.getItem('userToken')) {
				this.$router.go(-1)
			}
		},
		created() {},
		mounted() {
			this.$refs.phone.focus()
		},
		methods: {
			submit() {
				var _this = this
				_this.showLoading = true
				if(_this.mainApp.isphone(_this.mobile)) {
					sessionStorage.setItem('userNp', _this.mobile + _this.password)
					//获取云中心登录token
					_this.$http.post(_this.url.user.login, {
						audience: 'platform',
						name: _this.mobile,
						passwd: _this.password,
					}).then((res) => {
						sessionStorage.setItem('token', res.data.data.token)
						_this.isCheckLogin()
					})
				} else {
					_this.$vux.toast.show({
						width: '50%',
						type: 'text',
						position: 'middle',
						text: '用户名格式不正确'
					})
				}

				_this.showLoading = false
			},
			reg() {
				var _this = this
				_this.$http.post(this.url.user.userRegister, {
					mobile: _this.mobile,
					password: _this.password,
					smsVerificationCode: parseInt(_this.code),
					platformId: _this.url.platformId
				}).then(function(res) {
					if(res.data.status == "00000000") {
						_this.$vux.toast.show({
							width: '50%',
							type: 'text',
							position: 'middle',
							text: '注册成功',
							onHide() {
								_this.login()
							}
						})
					}
				})
			},
			isCheckLogin() {
				var _this = this

				_this.$nextTick(function() {
					//检测用户是否注册
					_this.$http.post(_this.url.user.checkUserExistsByMobile, {
						mobile: _this.mobile
					}).then(res => {
						if(res.data.status == "00000000") {
							if(res.data.data == 'false') {
								//已注册
								_this.$dialog.show({
									type: 'warning',
									headMessage: '提示',
									message: '该账户没有注册,是否立即注册?',
									buttons: ['确定', '取消'],
									canel() {
										_this.$dialog.hide()
									},
									confirm() {
										_this.$dialog.hide()
										_this.isReg = false
									}
								})
							} else {
								_this.login()
							}
						}
					})
				})

			},
			login() {
				var _this = this

				_this.$http.post(this.url.user.userLogin, {
					platformId: _this.url.platformId,
					mobile: _this.mobile,
					password: _this.password
				}).then(function(res) {
					sessionStorage.setItem('userToken', res.data.data.userToken)
					sessionStorage.setItem('userId', res.data.data.userId)
					if(res.data.status == "00000000") {
						_this.$vux.toast.show({
							width: '50%',
							type: 'text',
							position: 'middle',
							text: '登陆成功',
							onHide() {
								_this.$router.push({
									path: '/index'
								})
							}
						})
					}
				})
			},
			codeChange(val) {
				if(val.length == 4) {
					this.$refs.code.blur()
				}
			},
			passwordChange() {
				sessionStorage.removeItem('token')
			},
			nameChange(val) {
				var _this = this
				sessionStorage.removeItem('token')
				if(val.length == 11) {
					_this.$refs.phone.blur()
					_this.$refs.password.focus()
				}
			},
			sendCode() {
				var _this = this
				_this.$refs.code.focus()
				_this.code = null
				_this.$http.post(this.url.user.getVerificationCode, {
					mobile: _this.mobile,
					type: 1
				}).then(function(res) {
					console.log(res)
					if(res.data.status == "00000000") {
						_this.$vux.toast.show({
							width: '50%',
							type: 'text',
							position: 'middle',
							text: '验证码发送成功'
						})

						_this.reduce()
					}
				})
			},
			reduce() {
				var _this = this
				if(_this.num == 0) {
					_this.codeText = "重新发送验证码";
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
			},
			resetPass() {
				this.$router.push({
					path: '/user/changeLoginPassword'
				});
			}
		},
		components: {
			settingHeader,
			XInput,
			Group,
			XButton,
			Cell,
			Loading,
			Confirm
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
		border-radius: 2px!important;
	}
	
	.login-re {
		padding: 10px 15px;
		display: flex;
		justify-content: space-between;
		span {
			color: #90A2C7;
		}
	}
</style>