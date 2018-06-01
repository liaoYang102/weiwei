<template>
	<div>
		<setting-header :title="title"></setting-header>
		<qrcode :value="qrcodeVal" :size="250" type="img" class="qrcode"></qrcode>
	</div>
</template>

<script>
	import { Qrcode } from 'vux'
	import settingHeader from '../../components/setting_header'
	export default {
		data() {
			return {
				title: '二维码',
				qrcodeVal: ''
			}
		},
		components: {
			settingHeader,
			Qrcode
		},
		created() {
			this.qrcodeVal = 'http://192.168.3.145:8080/#/user/reg?parentId=' + localStorage.getItem('userId')
			alert(this.qrcodeVal)
		}
	}
</script>

<style lang="less" scoped>
	.qrcode {
		padding-top: 2rem;
		display: flex;
		justify-content: center;
	}
</style>