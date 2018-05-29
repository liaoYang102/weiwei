<template>
	<div class="information-box">
		<settingHeader :title="title"></settingHeader>
		<div class="list">
			<group gutter="0">
				<cell class="list-item user-img" title="头像编辑" is-link>
					<div class="up-box">
						<img class="tx" :src="images?images:'./static/images/mrtx.png'" />
						<input class="upinput" type="file" name="" id="" value="" @change="up" ref="input" />
					</div>
				</cell>
				<cell class="list-item" title="用户昵称" :value="userInfo.nickname" is-link link="/member/setting/nickname"></cell>
			</group>
			<group>
				<cell class="list-item" title="我的二维码" is-link link="/member/purse/qrcode"><img class="code" src="../../../assets/images/member/code@2x.png" /></cell>
				<cell class="list-item user-address" title="地址管理" is-link link="/member/address/index"></cell>
			</group>
			<group>
				<cell class="list-item" title="实名认证" :value="auth" is-link link='/member/setting/real'></cell>
				<cell class="list-item" title="个人档案" is-link link='/member/info/data' primary="content">完整度{{userInfo.percentage}}%</cell>
			</group>
		</div>
	</div>
</template>

<script>
	//上传组件
	import { Cell, Group, XInput, Range } from 'vux'
	import settingHeader from '../../../components/setting_header'
	export default {
		data() {
			return {
				title: '个人信息',
				name: "", //用户名
				varmax: 1, //图片最大张数
				images: '', //图片数组
				userInfo: {},
				auth:''
			}
		},
		created() {

			this.getUserInfo()
			this.getUserAuthInfo()

		},
		mounted() {

		},
		methods: {
			//获取用户信息
			getUserInfo() {
				var _this = this
				_this.$http.get(_this.url.user.getBasicInfo, {
					params: {
						userId: localStorage.getItem('userId')
					}
				}).then((res) => {
					console.log(res)
					if(res.data.status == "00000000") {
						_this.userInfo = res.data.data
						if(res.data.data.avatar.original) {
							_this.images = res.data.data.avatar.original
						}
					}
				})
			},
			getUserAuthInfo() {
				var _this = this
				_this.$http.get(_this.url.user.getUserAuthInfo, {
					params: {
						userId: localStorage.getItem('userId')
					}
				}).then((res) => {
					if(res.data.status == "00000000") {
						_this.auth = res.data.data.auth
					}
				})
			},

			nameChange() {

			},
			ok() {
				this.$refs.name.blur()
			},
			up(e) {
				var _this = this
				var reader = new FileReader();
				var file = e.target.files[0];
				var imgdata = file
				var data = {
					type: 'user',
					name: '1',
					file: imgdata
				}
				_this.$http.post(_this.url.user.fileuploadImage, data).then((res) => {
					if(res.data.status == '00000000') {
						_this.$http.post(_this.url.user.changeAvatar, {
							userId: localStorage.getItem('userId'),
							avatarId: res.data.data.fileId
						}).then((res) => {
							_this.images = res.data.data.original
						})
					}
				})
			}
		},
		components: {
			settingHeader,
			XInput,
			Range
		}
	}
</script>

<style lang="less">
	.information-box {
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
				.input-div {
					padding: 0 15px!important;
					height: 1.02rem;
					.weui-cell__bd>input {
						height: 100%;
						color: rgba(144, 162, 199, 1)!important;
					}
				}
				.weui-cell__ft {
					color: rgba(144, 162, 199, 1)!important;
				}
			}
			.user-img {
				height: 1.5rem;
				.up-box {
					position: relative;
					width: 1rem;
					height: 1rem;
					overflow: hidden;
					.upinput {
						opacity: 0;
						z-index: 11;
						position: absolute;
						top: 0;
						right: 0;
						width: 100%;
						height: 100%;
					}
					img {
						z-index: 1;
					}
				}
			}
		}
	}
</style>