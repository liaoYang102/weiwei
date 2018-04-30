<template>
	<div class="content">
		<settingHeader :title="title"></settingHeader>
		<div class="list">
			<group gutter="0">
				<cell class="list-item user-img" title="头像编辑" is-link>
					<div class="up-box">
						<img class="tx" :src="images?images:'./static/images/mrtx.png'" />
						<input class="upinput" type="file" name="" id="" value="" @change="up" ref="input" />
						<!--<uploader :max="varmax" :showHeader="false" :images="images" :handle-click="false" :autoUpload="false" :capture="camera" :show-header="false" :readonly="true" :upload-url="uploadUrl" name="img" :params="params" size="small" @preview="previewMethod" :upload-image="up" @add-image="addImageMethod" @remove-image="removeImageMethod">
						</uploader>-->
					</div>
				</cell>
				<cell class="list-item" title="用户昵称">
					<x-input class="input-item" ref="name" v-model="name" :value="name" text-align="right" :show-clear="false" placeholder="未设置" type="text" @on-change="nameChange" @on-enter="ok"></x-input>
				</cell>
				<cell class="list-item" title="我的二维码" is-link link="/member/purse/qrcode"><img class="code" src="../../../assets/images/member/code@2x.png" /></cell>
				<cell class="list-item user-address" title="地址管理" is-link link="/member/address/index"></cell>
				<cell class="list-item" title="实名认证" :value="sureName" is-link link='/member/setting/real'></cell>
			</group>
		</div>
	</div>
</template>

<script>
	//上传组件
	import { Cell, Group, XInput } from 'vux'
	import settingHeader from '../../../components/setting_header'
	export default {
		data() {
			return {
				title: '个人信息',
				name: "", //用户名
				sureName: '张广', //实名认证
				varmax: 1, //图片最大张数
				images: '', //图片数组
			}
		},
		created() {},
		mounted() {

		},
		methods: {
			nameChange() {

			},
			ok() {
				this.$refs.name.blur()
			},
			up(e) {
				var _this = this
				var reader = new FileReader();
				var file = e.target.files[0];
				console.log(file)
				reader.readAsDataURL(file); // 读出 base64
				reader.onloadend = function(e) {
					// 图片的 base64 格式, 可以直接当成 img 的 src 属性值        
					var dataURL = reader.result;
					_this.images = e.target.result
				};
			}
		},
		components: {
			settingHeader,
			XInput,
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
			.up-box {
				position: relative;
				overflow: hidden;
				.upinput {
					opacity: 0;
					z-index: 11;
					position: absolute;
					top: 0;
					right: 0;
					width: 100%;
					height:100%;
				}
				img {
					z-index: 1;
				}
			}
		}
	}
</style>