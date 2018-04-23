<template>
	<div class="content">
		<settingHeader :title="title"></settingHeader>
		<div class="list">
			<group gutter="0">
				<cell class="list-item user-img" title="头像编辑" is-link><img class="tx" src="../../../assets/images/member/score_1.png" /></cell>
				<cell class="list-item" title="用户昵称">
					<x-input class="input-item" ref="name" v-model="name" :value="name" text-align="right" :show-clear="false" placeholder="未设置" type="text" @on-change="nameChange" @on-enter="ok"></x-input>
				</cell>
				<cell class="list-item" title="我的二维码" is-link link="/member/purse/qrcode"><img class="code" src="../../../assets/images/member/code@2x.png" /></cell>
				<cell class="list-item user-address" title="地址管理" is-link link="/member/address/index"></cell>
				<cell class="list-item" title="实名认证" :value="sureName" is-link></cell>
			</group>
		</div>
	</div>
</template>

<script>
	import { Cell, Group, XInput } from 'vux'
	import settingHeader from '../../../components/setting_header'
	export default {
		data() {
			return {
				title: '个人信息',
				name: "", //用户名
				sureName: '张广', //实名认证
			}
		},
		created() {},
		mounted() {

		},
		methods: {
			nameChange() {

			},
			ok(){
				this.$refs.name.blur()
			}
		},
		components: {
			settingHeader,
			XInput
		}
	}
</script>

<style lang="less" scoped>
	.list {
		.list-item {
			font-family: PingFangSC-Regular;
			font-size: 0.28rem;
			color: #1A2642;
			letter-spacing: 0;
			height: 1.02rem;
			padding-top: 0!important;
			padding-bottom: 0!important;
			.tx {
				width: 1rem;
				height: 1rem;
				border-radius: 50%;
				vertical-align: middle;
			}
			.code {
				width: 0.36rem;
				height: 0.36rem;
				vertical-align: middle;
			}
		}
		.user-img {
			height: 1.5rem;
		}
	}
</style>