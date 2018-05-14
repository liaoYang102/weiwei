<template>
	<popup class="code-popup" height="100%" v-model="showCode">
		<div v-if="type == 'code'">
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
		</div>

		<div v-if="type == 'pay'">
			<x-header class="code-header" :left-options="{showBack: false}">
				请输入支付密码
				<a slot="right" @click="showCode = false">关闭</a>
			</x-header>
			<div class="code-box">
				<div class="code-input-box" @click.native="focus">
					<x-input v-model="code" class="code-input" ref="one" type="password" placeholder="请输入支付密码" :show-clear="false" text-align="center" :max="5" @on-change="one"></x-input>
				</div>
				<transition enter-active-class="zoomIn animated" leave-active-class="zoomOut animated">
					<div class="code-err-tip" v-if="iserror">
						<div>{{errText}}</div>
						<div @click="recapture">重新获取</div>
					</div>
				</transition>
			</div>
		</div>

	</popup>
</template>

<script>
	import { XInput, Group, XButton, Cell, Popup, XHeader } from 'vux'
	export default {
		props: {
			type: String
		},
		data() {
			return {
				showCode: false,
				title: '输入验证码',
				errText: '验证码错误，请重新输入',
				iserror: false,
				code: '',
			}
		},
		created() {

		},
		mounted() {
			if(this.showCode == true) {

				this.$refs.one.focus()
			}
		},
		ready() {

		},
		methods: {
			one(val) {
				if(val.length == 5) {
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
			ishide() {

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
	.code-header {
		background-color: white!important;
		position: relative;
		.vux-header-title {
			color: black!important;
		}
		.vux-header-right>a{
			color: #73859f!important;
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
		z-index: 999999999!important;
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