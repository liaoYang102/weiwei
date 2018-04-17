<template>
	<div class="content">
		<settingHeader :title="title"></settingHeader>
		<group>
			<cell class="address-item" :title="name"></cell>
			<x-input class="address-item" placeholder="手机号码" :max="11" type="number" is-type="china-mobile" required></x-input>
			<x-address class="address-item address-check" @on-hide="logHide" v-model="value_0_1" :list="addressData" title="" placeholder="请选择地址" value-text-align="left"></x-address>
			<x-input class="address-item" placeholder="详细地址" :max="11" type="text" required></x-input>
			<x-input class="address-item" placeholder="邮政编码" :max="6" type="number"></x-input>
		</group>
		<x-button class="add-btn" :gradients="['#1D62F0', '#19D5FD']">保存</x-button>
	</div>
</template>

<script>
	import { Group, Cell, XInput, XAddress, ChinaAddressV4Data, XButton } from 'vux'
	import settingHeader from '../../../components/setting_header'
	export default {
		data() {
			return {
				title: '编辑收货地址',
				name: '张广',
				value_0_1: [],
				addressData: ChinaAddressV4Data,
			}
		},
		methods: {
			logHide(str) {
				console.log('on-hide', str)
				console.log(this.value_0_1)
			},
			logShow(str) {
				console.log('on-show')
			}
		},
		components: {
			settingHeader,
			Group,
			Cell,
			XInput,
			XAddress,
			XButton
		}
	}
</script>

<style lang="less" scoped>
	.address-item {
		font-family: PingFangSC-Regular;
		font-size: 0.3rem!important;
		color: #1A2642;
		letter-spacing: 0;
		padding-top: 0;
		padding-bottom: 0;
		height: 1.02rem;
	}
	.address-check{
		padding-top: 0.1rem;
		box-sizing: border-box;
	}
	.add-btn {
		width: 6.18rem;
		height: 0.88rem;
		line-height: 0.88rem;
		margin-top: 0.61rem;
		font-size: 0.32rem;
	}
</style>