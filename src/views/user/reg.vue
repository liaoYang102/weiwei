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
				<x-input class="input-item" ref="password" v-model="password" placeholder="登录密码" type="password" :required="true"></x-input>
				<x-input v-if="!isReg" class="input-item bounceInUp animated" type="number" ref="code" v-model="code" placeholder="验证码" @on-change="codeChange">
					<x-button slot="right" type="primary" mini @click.native="sendCode" :disabled="sendFlag">{{codeText}}</x-button>
				</x-input>
			</group>
			<div class="tip">
				<x-button class="add-btn" @click.native="submit" :show-loading="showLoading">{{btnText}}</x-button>
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
				code: '', //验证码
				show: false,
				regText: '提示',
				isClick: true,
				btnText: '立即登录',
				isReg: true, //判断是否注册
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
				var _this = this

				if(_this.mainApp.isphone(_this.mobile)) {
					_this.$http.post(this.url.user.userLogin, {
						platformId: '1',
						mobile: _this.mobile,
						passwd: _this.password
					}).then(function(res) {
						console.log(res)
					})
				} else {
					_this.$vux.toast.show({
						width: '50%',
						type: 'text',
						position: 'middle',
						text: '用户名格式不正确'
					})
				}

			},
			submit2() {
				var _this = this
				if(this.isReg) {
					if(_this.phone == '17520439845' && _this.password == '123456') {
						this.showLoading = true
						setTimeout(() => {
							_this.showLoading = false
						}, 2000)
					} else if(_this.phone.length == 11 && _this.phone != '17520439845') {
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
								_this.showLoading = false
								_this.btnText = "立即注册"
							}
						})
					}
				} else {
					if(this.code == '') {
						this.$vux.toast.show({
							width: '50%',
							type: 'text',
							position: 'middle',
							text: '验证码错误'
						})
					} else {
						this.$vux.toast.show({
							width: '50%',
							type: 'text',
							position: 'middle',
							text: '注册成功'
						})
					}
				}
			},
			codeChange(val) {
				if(val.length == 5) {
					this.$refs.code.blur()
					this.isClick = false
				}
			},
			nameChange(val) {
				var _this = this
				if(val.length == 11) {
					_this.$refs.phone.blur()
					_this.$refs.password.focus()
					this.isClick = false
					
					_this.$http(_this.url.user.checkUserExistsByMobile,{
						mobile:_this.mobile
					}).then(res=>{
						console.log(res)
					})
				}
			},
			onConfirm() {
				this.isReg = false
				this.showLoading = false
				this.btnText = "立即注册"
			},
			sendCode() {
				var _this = this
				_this.$refs.code.focus()
				this.$vux.toast.show({
					width: '50%',
					type: 'text',
					position: 'middle',
					text: '验证码发送成功'
				})
				this.reduce()
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
			codeLogin() {

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