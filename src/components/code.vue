<template>
	<div>
		<div v-if="type == 'code'">
			<popup class="code-popup" height="100%" v-model="showCode" @on-hide="hide">
				<x-header class="code-header" :left-options="{showBack: false}">
					请输入验证码
					<a slot="right" @click="showCode = false">关闭</a>
				</x-header>
				<div class="code-box">
					<div class="code-tip">
						我们已发送<span>验证码</span>短信到您的手机
						<p>18520496787</p>
					</div>
					<div class="code-input-box" @click.native="focus">
						<x-input v-model="code" class="code-input" ref="one" type="number" placeholder="请输入5验证码" :show-clear="false" text-align="center" :max="5" @on-change="one"></x-input>
					</div>
					<transition enter-active-class="zoomIn animated" leave-active-class="zoomOut animated">
						<div class="code-err-tip" v-if="iserror">
							<div>{{errText}}</div>
							<div @click="recapture">重新获取</div>
						</div>
					</transition>
				</div>
			</popup>
		</div>

		<div v-if="type == 'pay'">
			<popup class="pay-popup" v-model="showCode" @on-hide="hide">
				<div>
					<x-header class="code-header" :left-options="{showBack: false}">
						请输入支付密码
						<a slot="right" @click="gb">关闭</a>
					</x-header>
					<div class="pay-input">
						<ul>
							<li>{{payNum[0]}}</li>
							<li>{{payNum[1]}}</li>
							<li>{{payNum[2]}}</li>
							<li>{{payNum[3]}}</li>
							<li>{{payNum[4]}}</li>
							<li>{{payNum[5]}}</li>
						</ul>
						<p @click="forgetpassword">忘记密码？</p>
					</div>
				</div>

				<div class="keyboard">
					<ul>
						<li v-for="(item,index) in keyboard" @click="keyActive(item,index)">
							<img v-if="index == 11" src="../assets/images/index/x.png" alt="" />
							<p v-else>{{item}}</p>
						</li>
					</ul>
				</div>
			</popup>
		</div>
	</div>
</template>

<script>
	import { XInput, Group, XButton, Cell, Popup, XHeader } from 'vux'
	export default {
		props: {
			type: String,
			change: Function
		},
		data() {
			return {
				showCode: false,
				title: '输入验证码',
				errText: '验证码错误，请重新输入',
				iserror: false,
				code: '',
				payNum: [],
				keyboard: [1, 2, 3, 4, 5, 6, 7, 8, 9, 'C', 0, '']
			}
		},
		created() {

		},
		mounted() {
			if(this.showCode == true) {
				this.$refs.one.focus()
			}
		},
		methods: {
			keyActive(num, index) {

				var _this = this

				if(_this.payNum.length < 6 && index != 9 && index != 11) {
					_this.payNum.push('●')
				} else if(index == 9) {
					_this.payNum = []
				} else if(index == 11) {
					_this.payNum.pop()
				}
			},
			one(val) {
				if(val.length == 6) {
					this.$refs.one.blur()
				}
				this.codeChange()
			},
			focus() {
				this.$refs.one.focus()
			},
			recapture() {
				this.$refs.one.focus()
				this.iserror = false
				this.code = ""
			},
			gb() {
				this.payNum = []
				this.showCode = false
			},
			forgetpassword() {
				console.log(this.vm)
				this.vm.$router.push({
					path: '/user/changePaymentPassword'
				})
			},
			hide() {
				if(this.type == 'pay') {
					this.payNum = []
					this.ishide()
				}
			}
		},
		watch: {
			payNum() {
				var _this = this
				if(_this.payNum.length == 6) {
					setTimeout(function(){
						_this.change()
					},100)
				}
			},
			showCode() {
				if(this.showCode == false) {
					this.payNum = []
				}
			}
		},
		components: {
			XInput,
			Group,
			XButton,
			Popup,
			XHeader
		}
	}
</script>

<style lang="less">
	.pay-popup {
		background: rgba(245, 248, 249, 1)!important;
		z-index: 666!important;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		user-select: none;
		font-family: MicrosoftYaHei;
		.pay-input {
			background-color: white;
			padding: 0.57rem 0.43rem;
			box-sizing: border-box;
			ul {
				display: flex;
				align-items: center;
				justify-content: space-between;
				li {
					width: 20%;
					height: 0.93rem;
					line-height: 0.93rem;
					border-top: 1px solid #C7C7C7;
					border-bottom: 1px solid #C7C7C7;
					text-align: center;
					font-size: 0.40rem;
					box-sizing: border-box;
					position: relative;
				}
				li:nth-child(1) {
					border-top-left-radius: 3px;
					border-bottom-left-radius: 3px;
					border-left: 1px solid #C7C7C7;
				}
				li:last-child {
					border-top-right-radius: 3px;
					border-bottom-right-radius: 3px;
					border-right: 1px solid #C7C7C7;
				}
				li:not(:last-child):after {
					content: " ";
					position: absolute;
					right: 0;
					top: 0;
					width: 1px;
					bottom: 0;
					border-right: 1px solid #C7C7C7;
					color: #C7C7C7;
					-webkit-transform-origin: 100% 0;
					transform-origin: 100% 0;
					-webkit-transform: scaleX(0.5);
					transform: scaleX(0.5);
				}
			}
			p {
				text-align: right;
				margin-top: 0.30rem;
				font-size: 0.24rem;
				color: #90A2C7;
			}
		}
		.keyboard {
			ul {
				display: flex;
				align-items: center;
				justify-content: space-between;
				flex-wrap: wrap;
			}
			ul>li {
				width: 33.333333333333336%;
				height: 1.12rem;
				display: flex;
				align-items: center;
				justify-content: center;
				position: relative;
				font-size: 0.40rem;
				font-family: PingFangSC-Medium;
				color: rgba(26, 38, 66, 1);
				user-select: none;
				img {
					width: 0.65rem;
					height: 0.53rem;
				}
			}
			ul>li:nth-child(10),
			ul>li:nth-child(12) {
				background: rgba(216, 223, 240, 1);
			}
			ul>li:active {
				background: #256fff;
				color: white;
			}
			ul>li:before {
				content: " ";
				position: absolute;
				right: 0;
				top: 0;
				width: 1px;
				bottom: 0;
				border-right: 1px solid #c7c7c7;
				color: #c7c7c7;
				transform-origin: 100% 0;
				transform: scaleX(.5);
			}
			ul>li:after {
				content: " ";
				position: absolute;
				top: 0;
				right: 0;
				height: 1px;
				border-top: 1px solid #c7c7c7;
				color: #d9d9d9;
				transform-origin: 0 0;
				transform: scaleY(.5);
				left: 0;
			}
		}
	}
	
	.code-header {
		background-color: white!important;
		position: relative;
		.vux-header-title {
			color: black!important;
		}
		.vux-header-right>a {
			color: #73859f!important;
			font-size: 16px;
		}
	}
	
	.code-header:after {
		content: " ";
		position: absolute;
		left: 0;
		bottom: 0;
		right: 0;
		height: 1px;
		border-top: 1px solid #D9D9D9;
		color: #D9D9D9;
		-webkit-transform-origin: 0 0;
		transform-origin: 0 0;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		left: 0px;
	}
	
	.code-popup {
		background-color: white!important;
		z-index: 666!important;
	}
	
	.code-box {
		width: 100%;
		height: 100%;
		background-color: white;
	}
	
	.code-tip {
		padding: 0.39rem 0.51rem;
		font-family: PingFangSC-Regular;
		font-size: 0.28rem;
		color: #90A2C7;
		letter-spacing: 0;
		text-align: center;
		span {
			font-size: 0.32rem;
			color: #000000;
		}
		p {
			font-size: 0.48rem;
			color: #1A2642;
			margin-top: 0.07rem;
		}
	}
	
	.code-input-box {
		padding: 15px 40px;
		.code-input {
			width: 100%;
			padding: 0;
			height: 50px;
			border-bottom: 0.02rem solid #ddd;
			font-size: 0.35rem;
			color: #336FFF;
			.weui-cell__bd {
				height: 100%;
				.weui-input {
					height: 100%;
					letter-spacing: 5px!important;
				}
			}
		}
		.code-input:before {
			border-top: none;
		}
	}
	
	.code-err-tip {
		font-family: PingFangSC-Regular;
		text-align: center;
		div:nth-child(1) {
			color: #F23030;
			font-size: 0.26rem;
		}
		div:nth-child(2) {
			color: #336FFF;
			font-size: 0.28rem;
			margin-top: 0.3rem;
		}
	}
</style>