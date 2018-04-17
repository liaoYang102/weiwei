<template>
	<div class="content">
		<settingHeader :title="title"></settingHeader>
		<div class="code-tip">
			我们已发送<span>验证码</span>短信到您的手机
			<p>18520496787</p>
		</div>
		<div class="code-input-box" @click.native="focus">
			<x-input class="code-input" ref="one" type="number" :show-clear="false" text-align="center" :max="5" @on-change="one"></x-input>
		</div>
		<div class="code-err-tip">
			<div>{{errText}}</div>
			<div>重新获取</div>
		</div>
	</div>
</template>

<script>
	import { XInput, Group, XButton, Cell } from 'vux'
	import settingHeader from '../../../components/setting_header'
	export default {
		data() {
			return {
				title: '输入验证码',
				errText: '验证码错误，请重新输入',
				transitionName: 'bounceInDown animated' // 默认动态路由变化为slide-right
			}
		},
		created() {

		},
		mounted() {
			this.$refs.one.focus()
		},
		ready() {

		},
		methods: {
			one(val) {
				if(val.length == 5) {
					this.$refs.one.blur()
				}
			},
			focus() {
				this.$refs.one.focus()
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

<style lang="less">
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
			font-size: 0.48rem;
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
		div:nth-child(1){
			color: #F23030;
			font-size: 0.26rem;
		}
		div:nth-child(2){
			color: #336FFF;
			font-size: 0.28rem;
			margin-top: 0.3rem;
		}
	}
</style>