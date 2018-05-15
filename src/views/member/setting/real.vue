<template>
	<div class="real-box">
		<scoreheader :title="title"></scoreheader>
		<group gutter="0">
			<x-input class="input-item" v-model="name" placeholder="输入真实姓名" type="text" :required="true"></x-input>
			<x-input class="input-item" v-model="idNum" placeholder="输入身份证号" type="text" :max="18" :required="true"></x-input>
		</group>
		<div class="img-box">
			<div class="one">
				<div class="t">
					<p v-if="justImages == ''">身份证正面照片</p>
					<div class="img-bg" v-if="justImages">
						<img :src="justImages" alt="" />
					</div>
				</div>
				<input class="upinput" type="file" name="" id="" value="" @change="just" multiple ref="just" />
			</div>
			<div class="one">
				<div class="t">
					<p>身份证反面照片</p>
					<div class="img-bg" v-if="backImages">
						<img :src="backImages" alt="" />
					</div>
				</div>
				<input class="upinput" type="file" name="" id="" value="" @change="back" ref="back" />
			</div>
			<div class="one">
				<div class="t">
					<p>本人手持身份证正面照</p>
					<div class="img-bg" v-if="userImages">
						<img :src="userImages" alt="" />
					</div>
				</div>
				<input class="upinput" type="file" name="" id="" value="" @change="user" ref="user" />
			</div>
		</div>
		<div class="tip">
			<p v-if="status == 0">（文字清晰,四角齐全）</p>
			<x-button v-if="status == 0" class="add-btn" @click.native="submit" :show-loading="isload">{{isload?'正在上传':'保存'}}</x-button>
			<div v-if="status == 1" class="two-btn bounceInRight animated">
				<div @click="$router.go(-1)">返回</div>
				<div @click="reexamination">重新递交审核</div>
			</div>
			<div v-if="status == 3" class="add-btn" :class="{'b-g':status == 3}">受理中，请耐心等待</div>
		</div>
		<div v-transfer-dom>
			<loading :show="showDialogStyle" :text="text1"></loading>
		</div>
	</div>
</template>

<script>
	import { XInput, Group, XButton, Cell, Loading, XCircle, Range, Icon, XDialog } from 'vux'
	import scoreheader from '../../../components/setting_header'
	export default {
		components: {
			scoreheader,
			XInput,
			Group,
			XButton,
			Cell,
			XCircle,
			Range,
			Icon,
			XDialog,
			Loading
		},
		data() {
			return {
				title: '实名认证',
				showDialogStyle: false,
				isload: false,
				status: 0, //0 上传审核  1 未受理   2 已受理  3 审核结果
				text1: 'Processing',
				name: '',
				idNum: '',
				justImages: '',
				backImages: '',
				userImages: '',
			}
		},
		mounted() {
			var _this = this
		},
		methods: {
			just(e) {
				var _this = this
				_this.justImages = ''
				_this.justPr = 0
				var reader = new FileReader();
				var file = e.target.files[0];
				reader.readAsDataURL(file); // 读出 base64
				reader.onloadend = function(e) {
					// 图片的 base64 格式, 可以直接当成 img 的 src 属性值        
					var dataURL = reader.result;
					_this.justImages = e.target.result

				};

				var total = file.size;
				reader.onprogress = function(e) {
					_this.justPr = (e.loaded / total) * 100
				}
			},
			back(e) {
				var _this = this
				var reader = new FileReader();
				var file = e.target.files[0];
				reader.readAsDataURL(file); // 读出 base64
				reader.onloadend = function(e) {
					// 图片的 base64 格式, 可以直接当成 img 的 src 属性值        
					var dataURL = reader.result;
					_this.backImages = e.target.result
				};
			},
			user(e) {
				var _this = this
				var reader = new FileReader();
				var file = e.target.files[0];
				reader.readAsDataURL(file); // 读出 base64
				reader.onloadend = function(e) {
					// 图片的 base64 格式, 可以直接当成 img 的 src 属性值        
					var dataURL = reader.result;
					_this.userImages = e.target.result
				};
			},
			submit() {
				var _this = this
				//				_this.showDialogStyle = true
				//				tick(0, (percent) => {
				//					if(percent === 100) {
				//						_this.showDialogStyle = false
				//						_this.status = 1
				//
				//						_this.$dialog.show({
				//							type: 'success',
				//							headMessage: '信息提交成功',
				//							message: '',
				//							buttons: ['我知道了'],
				//							delay: 2000
				//						})
				//						return
				//					} else {
				//						_this.text1 = '上传了' + `${percent}%`
				//					}
				//				})
				_this.isload = true
				setTimeout(function() {
					_this.status = 1
					_this.$dialog.show({
						type: 'success',
						headMessage: '信息提交成功',
						message: '',
						buttons: ['我知道了'],
						delay: 2000,
						canel() {
							console.log(123)
						},
						confirm() {

						}
					})
					_this.isload = false
				}, 1500)

			},
			reexamination() {
				this.status = 0
				this.justImages = ''
				this.backImages = ''
				this.userImages = ''
				this.idNum = ''
				this.name = ''
			}
		},
		watch: {
			status() {
				if(this.status == 0) {
					document.title = '身份认证'
				} else if(status == 1) {
					document.title = '审核未受理'
				} else if(status == 2) {
					document.title = '审核已受理'
				} else if(status == 3) {
					document.title = '审核结果'
				}
			}
		}
	}

	function tick(i, cb) {
		setTimeout(function() {
			i++
			cb(i)
			if(i < 100) {
				tick(i, cb)
			}
		}, 20)
	}
</script>

<style lang="less" scoped>
	.real-box {
		height: 100%;
		background-color: white;
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
			ont-family: PingFangSC-Regular;
			font-size: 0.28rem;
			color: #90A2C7;
			letter-spacing: 0;
			.add-btn {
				height: 0.88rem;
				line-height: 0.88rem;
				background: rgba(51, 111, 255, 1);
				margin-top: 0.6rem;
				font-size: 0.28rem;
				text-align: center;
				font-family: MicrosoftYaHei;
				color: rgba(255, 255, 255, 1);
				border-radius: 0!important;
			}
			.b-g {
				background-color: #90a2c7;
			}
		}
		.two-btn {
			display: flex;
			align-items: center;
			justify-content: space-between;
			div {
				width: 2.7rem;
				height: 0.88rem;
				line-height: 0.88rem;
				margin-top: 0.6rem;
				font-size: 0.28rem;
				text-align: center;
				font-family: MicrosoftYaHei;
			}
			div:nth-child(1) {
				border: 1px solid #ddd;
				color: rgba(26, 38, 66, 1);
			}
			div:nth-child(2) {
				background: rgba(51, 111, 255, 1);
				color: rgba(255, 255, 255, 1);
			}
		}
		.img-box {
			display: flex;
			padding: 0.24rem;
			box-sizing: border-box;
			font-size: 0.18rem;
			font-family: MicrosoftYaHei;
			color: rgba(176, 188, 214, 1);
			.one {
				flex: 1;
				padding: 0.1rem;
				box-sizing: border-box;
				position: relative;
				.t {
					display: flex;
					align-items: center;
					justify-content: center;
					height: 1.77rem;
					text-align: center;
					box-sizing: border-box;
					border: 1px dashed #D5D5D6;
					z-index: 11;
					position: relative;
					overflow: hidden;
					.img-bg {
						z-index: 13;
						width: 100%;
						height: 100%;
						position: absolute;
						top: 0;
						left: 0;
						background-color: white;
						img {
							width: 100%;
							height: 100%;
							position: absolute;
							top: 50%;
							left: 50%;
							transform: translate(-50%, -50%);
						}
					}
				}
				input {
					opacity: 0;
					z-index: 15;
					position: absolute;
					top: 0;
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>