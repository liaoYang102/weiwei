<template>
	<div class="reg-box">
		<settingHeader :title="title"></settingHeader>
		<div class="content">
			<div class="login-box">
				<img :src="'./static/member/login-img.png'" />
			</div>
			<group gutter="0" class="input-div">
				<!--<cell class="input-item" title="国家" value="中国" is-link value-align="right"></cell>-->
				<x-input class="input-item" ref="phone" v-model="mobile" placeholder="手机号码" type="number" :max="11" @on-change="nameChange"></x-input>
				<x-input class="input-item" ref="password" v-model="password" placeholder="登录密码" type="password" @on-change="passwordChange"></x-input>
				<x-input v-if="!isReg" class="input-item fadeInDown animated" type="number" ref="code" v-model="code" placeholder="验证码" @on-change="codeChange">
					<x-button class="codeBtn" slot="right" type="primary" mini @click.native="sendCode" :disabled="sendFlag">{{codeText}}</x-button>
				</x-input>
			</group>
			<div class="tip">
				<div class="agreement" v-if="!isReg">
					<check-icon :value.sync="isAgree"></check-icon><span class="sg">我已阅读并同意</span>
					<router-link to="/member/setting/agreement">《CGC平台注册协议》</router-link>
				</div>
				<x-button class="add-btn" @click.native="submit" :show-loading="showLoading" v-if="isReg">立即登录 / 注册</x-button>
				<x-button class="add-btn" @click.native="reg" :show-loading="showLoading" v-else>立即注册</x-button>
			</div>
			<div class="login-re" v-if="isReg">
				<router-link to="/user/changeLoginPassword"><span>忘记密码?</span></router-link>
				<router-link to=""><span>短信验证登录</span></router-link>
			</div>
			<div class="login-re" v-else>
				<span @click="isReg = !isReg">返回登录</span>
			</div>
			<div class="Thirdparty" v-if="isReg">
				<p class="title"><span>第三方登录</span></p>
				<div>
					<img src="../../assets/images/user/weibo.png" alt="" />
					<img @click="wxLogin" src="../../assets/images/user/weixin.png" alt="" />
					<img src="../../assets/images/user/qq.png" alt="" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { XInput, Group, XButton, Cell, Loading, AlertModule, Confirm, CheckIcon } from 'vux'
	import settingHeader from '../../components/setting_header'
	import agreement from '@/views/member/setting/agreement'
	export default {
		name: 'reg',
		data() {
			return {
				title: '用户登录', //头部标题
				mobile: '', //手机号码
				password: '', //密码
				code: '', //验证码
				show: false,
				regText: '提示',
				btnText: '立即登录',
				isReg: true, //判断是否注册
				codeText: '发送验证码',
				num: 60,
				sendFlag: false,
				showLoading: false,
				token: '',
				isAgree: true,
				parentId: '',
				frompath: ''
			}
		},
		created() {
			this.parentId = this.mainApp.getCs('parentId')
		},
		beforeRouteEnter(to, from, next) {
			next(vm => {
				vm.frompath = from.path
			})
		},
		methods: {
			submit() {
				var _this = this
				_this.showLoading = true
				if(_this.mainApp.isphone(_this.mobile) && _this.password.length > 0) {
					_this.isCheckLogin()
				} else {
					_this.$vux.toast.show({
						width: '50%',
						type: 'text',
						position: 'middle',
						text: '手机号码或密码格式不正确'
					})
				}

				_this.showLoading = false
			}, //注册
			reg() {
				var _this = this
				console.log(typeof(_this.code), _this.code)
				_this.$http.post(this.url.user.userRegister, {
					mobile: _this.mobile,
					password: _this.password,
					smsVerificationCode: _this.code,
					platformId: _this.url.platformId,
					parentUserId: _this.parentId
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
			////检测用户是否注册
			isCheckLogin() {
				var _this = this
				_this.$nextTick(function() {
					_this.$http.post(_this.url.user.checkUserExistsByMobile, {
						mobile: _this.mobile
					}).then(res => {
						if(res.data.status == "00000000") {
							if(res.data.data == 'false') {
								//未注册
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
								//已注册
								_this.login()
							}
						}
					})
				})

			},
			//登录
			login() {
				var _this = this
				_this.$http.post(this.url.user.userLogin, {
					audience: 'user',
					platformId: _this.url.platformId,
					mobile: _this.mobile,
					password: _this.password
				}).then(function(res) {
					if(res.data.status == "00000000") {

						localStorage.setItem('userId', res.data.data.id)
						localStorage.setItem('userNp', res.data.data.id + res.data.data.randomAccessCode)
						//						localStorage.setItem('userId', 'appUser2018051900000001')
						localStorage.setItem('token', res.data.data.token)
						
						_this.$store.state.page.isLogin = true
						_this.$vux.toast.show({
							width: '50%',
							type: 'text',
							position: 'middle',
							text: '登陆成功'
						})
						if(window.sessionStorage.length>2) {
							if(_this.frompath) {
								_this.$router.replace({
									path: _this.frompath
								})
								console.log(1)
							} else {
								_this.$router.replace({
									path: '/index'
								})
								console.log(2)
							}
						} else {
							_this.$router.replace({
								path: '/index'
							})
							console.log(3)
						}
					} else {
						localStorage.removeItem('userNp')
						localStorage.removeItem('token')
					}
				})
			},
			//验证码输入改变时
			codeChange(val) {
				if(val.length == 4) {
					this.$refs.code.blur()
				}
			},
			//密码输入改变时
			passwordChange() {
				localStorage.removeItem('userNp')
				localStorage.removeItem('token')
			},
			//用户名输入改变时
			nameChange(val) {
				var _this = this
				localStorage.removeItem('userNp')
				localStorage.removeItem('token')
				if(val.length == 11) {
					_this.$refs.phone.blur()
					_this.$refs.password.focus()
				}
			},
			//发送验证码
			sendCode() {
				var _this = this
				_this.code = ''
				if(_this.mainApp.isphone(_this.mobile)) {
					_this.$refs.code.focus()
					_this.$http.post(this.url.user.getVerificationCode, {
						mobile: _this.mobile,
						type: 1
					}).then(function(res) {
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
				} else {
					_this.$vux.toast.show({
						width: '50%',
						type: 'text',
						position: 'middle',
						text: '手机号码格式不正确'
					})
					_this.$refs.phone.focus()
				}
			},
			//倒计时
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
			wxLogin() {
				var _this = this
				_this.$http.get(_this.url.user.getAuthorizationUrl, {
					params: {
						platformId: _this.url.platformId,
						type: 1
					}
				}).then((res) => {
					_this.$http.get(res.data.data).then((res)=>{
						console.log(res)
					})
				})
			}
		},
		components: {
			settingHeader,
			XInput,
			Group,
			XButton,
			Cell,
			Loading,
			Confirm,
			CheckIcon
		}
	}
</script>
<style lang="less">
	.reg-box {
		height: 100%;
		background-color: white;
		padding: 0 0.5rem;
		box-sizing: border-box;
		user-select: none;
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
			.codeBtn {
				background-color: white;
				color: #256fff;
				padding-right: 0;
			}
			.codeBtn:active {
				color: #256FFF;
				background-color: transparent!important;
			}
			.weui-btn:after {
				border: 1px solid transparent!important;
			}
		}
		.weui-cell:before {
			right: 15px!important;
		}
		.tip {
			padding: 10px 0px;
			ont-family: PingFangSC-Regular;
			font-size: 0.28rem;
			color: #90A2C7;
			letter-spacing: 0;
			text-align: center;
			.agreement {
				width: 100%;
				text-align: center;
				color: #151B34;
				font-size: 0.24rem;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 0.4rem;
				.sg {
					color: #60719D;
				}
				.vux-check-icon {
					.weui-icon {
						font-size: 0.3rem;
					}
				}
			}
		}
		.add-btn {
			height: 0.88rem;
			margin-top: 0.55rem;
			font-family: PingFangSC-Regular;
			font-size: 0.28rem;
			color: #FFFFFF!important;
			letter-spacing: 0;
			background-color: #336FFF!important;
			border-radius: 2px!important;
			border: none!important;
		}
		.login-re {
			padding: 10px 0px;
			display: flex;
			justify-content: space-between;
			span {
				color: #90A2C7;
			}
		}
		.Thirdparty {
			margin-top: 0.6rem;
			padding: 0 0.5rem;
			box-sizing: border-box;
			div {
				padding: 0.58rem 0;
				box-sizing: border-box;
				display: flex;
				align-items: center;
				justify-content: center;
				img {
					width: 0.9rem;
					height: 0.9rem;
					margin: 0 0.2rem;
				}
			}
			.title {
				position: relative;
				text-align: center;
				span {
					position: relative;
					background-color: white;
					z-index: 15;
					display: inline-block;
					padding: 0 0.3rem;
					color: #90A2C7;
					font-size: 0.24rem;
				}
			}
			.title:after {
				content: " ";
				position: absolute;
				left: 0;
				bottom: 45%;
				right: 0;
				height: 1px;
				border-top: 1px solid #90A2C7;
				color: #D9D9D9;
				-webkit-transform-origin: 0 0;
				transform-origin: 0 0;
				-webkit-transform: scaleY(0.5);
				transform: scaleY(0.5);
				left: 0px;
			}
		}
	}
</style>