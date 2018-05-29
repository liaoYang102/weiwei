<template>
	<div class="content">
		<settingHeader :title="title"></settingHeader>
		<group class="input-div" gutter="0">
			<x-input class="input-item" v-model="name" placeholder="请输入修改的用户名" type="text" :max="20" :required="true"></x-input>
		</group>
		<div class="tip">
			<div class="add-btn" @click="submit">保存</div>
		</div>
	</div>
</template>

<script>
	import { XInput, Group, Cell } from 'vux'
	import settingHeader from '../../../components/setting_header'
	export default {
		data() {
			return {
				title: '修改用户昵称',
				name: ''
			}
		},
		created() {},
		mounted() {

		},
		methods: {
			submit() {
				let _this = this
				let param = {
					userId: localStorage['userId'],
					nickname: _this.name
				}
				_this.$http.post(_this.url.user.changeNickname, param).then(resp=>{
					_this.$vux.toast.show({
						type: 'text',
						text: '修改成功'
					})
					_this.$router.go(-1)
				})
			}
		},
		components: {
			settingHeader,
			XInput,
			Group,
			Cell
		}
	}
</script>

<style lang="less" scoped>
	.input-item {
		height: 1.02rem;
		font-family: PingFangSC-Regular;
		font-size: 0.28rem;
		color: #90A2C7;
		letter-spacing: 0;
		padding-top: 0;
		padding-bottom: 0;
		box-sizing: border-box;
	}
	
	.tip {
		padding: 10px 15px;
		.add-btn {
			height: 0.88rem;
			line-height: 0.88rem;
			background: #336fff;
			margin-top: 0.6rem;
			font-size: 0.28rem;
			text-align: center;
			font-family: MicrosoftYaHei;
			color: #ffffff;
			border-radius: 2px;
			box-sizing: border-box;
		}
	}
</style>