<template>
	<div class="infodata-box">
		<settingHeader :title="title"></settingHeader>
		<div class="list">
			<group gutter="0">
				<cell class="list-item" title="性别" :value="sex" is-link @click.native="showsex = true"></cell>
				<cell class="list-item" title="出生日期" :value="birthday" is-link @click.native="showDate"></cell>
				<cell class="list-item" title="最高学历" :value="education" is-link @click.native="showrec = true"></cell>
			</group>
			<group>
				<cell class="list-item" title="微信号">
					<x-input class="input-item" ref="wx" v-model="wxnum" :value="wxnum" text-align="right" placeholder="未设置" type="text" @on-change="wxChange"></x-input>
				</cell>
				<cell class="list-item" title="支付宝账号">
					<x-input class="input-item" ref="zfb" v-model="zfbnum" :value="zfbnum" text-align="right" placeholder="未设置" type="text" @on-change="zfbChange"></x-input>
				</cell>
				<cell class="list-item" title="邮箱">
					<x-input class="input-item" ref="mail" v-model="mail" :value="mail" text-align="right" placeholder="未设置" type="text" @on-change="mailChange"></x-input>
				</cell>
				<cell class="list-item" title="QQ">
					<x-input class="input-item" ref="qq" v-model="qq" :value="qq" text-align="right" placeholder="未设置" type="text" @on-change="qqChange"></x-input>
				</cell>
			</group>
			<group>
				<cell class="list-item" title="紧急联系人">
					<x-input class="input-item" ref="contact" v-model="contact" :value="contact" text-align="right" placeholder="未设置" type="text" @on-change="contactChange"></x-input>
				</cell>
				<cell class="list-item" title="紧急联系人号码">
					<x-input class="input-item" ref="contactnum" v-model="contactnum" :value="contactnum" text-align="right" placeholder="未设置" type="text" @on-change="contactnumChange"></x-input>
				</cell>
			</group>
			<div class="up-box">
				<p>上传生活照</p>
				<div class="img-box">
					<div class="one" v-for="(item,index) in backImages" @click="cindex(index)">
						<div>
							<img :src="item" alt="" />
						</div>
						<img @click="shanc(index)" class="gbx" src="../../../assets/images/member/gbx.png" />
						<input class="upinput" type="file" @change="cone" />
					</div>
					<div class="one" v-if="backImages.length!=3">
						<div>
							<img src="../../../assets/images/member/p@2x.png" />
						</div>
						<input class="upinput" type="file" multiple @change="back" ref="back" />
					</div>
				</div>

				<div class="tip">
					<div class="add-btn" @click="changeUserInfo">保存</div>
				</div>
			</div>
		</div>

		<actionsheet v-model="showsex" theme="ios" :menus="sexlist" @on-click-menu="sexclick" show-cancel>
		</actionsheet>
		<actionsheet v-model="showrec" theme="ios" :menus="reclist" @on-click-menu="recclick" show-cancel>
		</actionsheet>
	</div>
</template>

<script>
	//上传组件
	import { Cell, Group, XInput, Actionsheet, Datetime } from 'vux'
	import settingHeader from '../../../components/setting_header'
	export default {
		data() {
			return {
				title: '详细资料',
				wxnum: 'zh43787835',
				zfbnum: '18598572455',
				mail: '',
				qq: '',
				contact: '',
				contactnum: '',
				showsex: false,
				showrec: false,
				sexlist: ['男', '女', '隐藏'],
				reclist: ['小学', '初中', '高中', '大专', '本科'],
				txt: '<span>请选择性别</span>',
				backImages: [],
				pindex: 0,
				sex: '', //性别
				birthday: '', //生日
				education: '', //学历
				info: {},
				imgdata: null
			}
		},
		created() {
			this.getUserInfo()
		},
		mounted() {

		},
		methods: {
			getUserInfo() {
				var _this = this
				_this.$http.get(_this.url.user.getUserInfo, {
					params: {
						userId: 1
					}
				}).then((res) => {
					if(res.status == '00000000') {
						_this.info = res.data
					}
				})
			},
			wxChange(val) {},
			zfbChange(val) {},
			mailChange(val) {},
			qqChange(val) {},
			contactChange(val) {},
			contactnumChange(val) {},
			sexclick(val) {
				if(val == 0) {
					this.sex = '男'
				} else if(val == 1) {
					this.sex = '女'
				} else {
					this.sex = '隐藏'
				}
			},
			recclick(val) {
				if(val == 0) {
					this.education = '小学'
				} else if(val == 1) {
					this.education = '初中'
				} else if(val == 2) {
					this.education = '高中'
				} else if(val == 3) {
					this.education = '大专'
				} else if(val == 4) {
					this.education = '本科'
				}
			},
			showDate() {
				var _this = this
				_this.$vux.datetime.show({
					value: '',
					confirmText: '确定',
					cancelText: '取消',
					clearText: '请选择日期',
					onConfirm(val) {
						_this.birthday = val
					}
				})
			},
			back(e) {
				var _this = this
				var file = e.target.files
				for(var i = 0; i < file.length; i++) {
					if(file.length > 3) {
						this.$vux.toast.show({
							text: '最多只能上传三张照片',
							type: 'text'
						})
						return
					} else {
						// _this.backImages = []
						var reader = new FileReader();
						reader.readAsDataURL(file[i]); // 读出 base64
						reader.onloadend = function(e) {
							// 图片的 base64 格式, 可以直接当成 img 的 src 属性值        
							var dataURL = reader.result;
							if(_this.backImages.length < 3) {
								_this.backImages.push(e.target.result)
							}
						};

						var imgdata = new FormData()
						imgdata.append('img' + i, file[i])

						let config = {
							'Content-Type': 'multipart/form-data'
						}

						var data = {
							type: 'user',
							name: '1',
							file: imgdata
						}

						_this.$http.post(_this.url.user.fileuploadImage,{
							
						}).then((res) => {
							if(res.status == '00000000') {
								_this.info = res.data
							}
						})
					}
				}
			},
			cindex(index) {
				this.pindex = index
				console.log(this.pindex)
			},
			cone(e) {
				var _this = this
				var reader = new FileReader();
				var file = e.target.files[0];
				reader.readAsDataURL(file);
				reader.onloadend = function(e) {
					var dataURL = reader.result;
					_this.backImages.splice(_this.pindex, 1, e.target.result)
				};
			},
			shanc(index) {
				this.backImages.splice(index, 1)
			},
			changeUserInfo() {
				var _this = this
				var data = {
					gender: _this.sex,
					birthday: _this.mainApp.frDateTimehp.getDateTimesTamp(_this.birthday),
					education: _this.education,
					wechat: _this.wxnum,
					qq: _this.qq,
					alipay: _this.zfbnum,
					email: _this.mail,
					egmobile: _this.contactnum,
					emergency: _this.contact,
					userId: 1
				}
				_this.$http.post(_this.url.user.changeUserInfo, data).then((res) => {
					if(res.status == '00000000') {
						_this.info = res.data
					}
				})
			}
		},
		components: {
			settingHeader,
			XInput,
			Actionsheet,
			Datetime
		}
	}
</script>

<style lang="less">
	.infodata-box {
		.list {
			.list-item {
				font-family: PingFangSC-Regular;
				font-size: 0.28rem;
				color: #1A2642;
				letter-spacing: 0;
				height: 1.02rem;
				padding-top: 0!important;
				padding-bottom: 0!important;
				.weui-cell__ft {
					color: rgba(26, 38, 66, 1);
				}
			}
			.up-box {
				margin-top: 1.17647059em;
				padding: 10px 15px;
				font-size: 0.28rem;
				font-family: PingFangSC-Regular;
				color: rgba(26, 38, 66, 1);
				background-color: white;
				.img-box {
					display: flex;
					padding: 0.24rem 0;
					box-sizing: border-box;
					font-size: 0.18rem;
					font-family: MicrosoftYaHei;
					color: rgba(176, 188, 214, 1);
					.one {
						width: 1.5rem;
						height: 1.5rem;
						padding: 0.1rem;
						margin-right: 0.25rem;
						box-sizing: border-box;
						position: relative;
						div {
							position: absolute;
							top: 0;
							left: 0;
							width: 100%;
							height: 100%;
							display: flex;
							align-items: center;
							justify-content: center;
							box-sizing: border-box;
							border: 1px dashed #D5D5D6;
							overflow: hidden;
							img {
								z-index: 13;
								position: absolute;
								top: 50%;
								left: 50%;
								transform: translate(-50%, -50%);
								width: 100%;
								height: auto;
							}
						}
						input {
							opacity: 0;
							z-index: 15;
							position: absolute;
							top: 0;
							left: 0;
							width: 100%;
							height: 100%;
						}
						.gbx {
							position: absolute;
							right: -7px;
							top: -7px;
							width: 0.38rem;
							height: 0.38rem;
							z-index: 18;
						}
					}
				}
				.add-btn {
					height: 0.88rem;
					line-height: 0.88rem;
					background: rgba(51, 111, 255, 1);
					margin-top: 0.6rem;
					font-size: 0.28rem;
					text-align: center;
					font-family: MicrosoftYaHei;
					color: rgba(255, 255, 255, 1);
				}
			}
		}
	}
</style>