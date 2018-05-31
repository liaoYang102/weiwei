<template>
	<div class="infodata-box">
		<settingHeader :title="title"></settingHeader>
		<div class="list">
			<group gutter="0">
				<cell class="list-item" title="性别" :value="sex" is-link @click.native="showsex = true"></cell>
				<cell class="list-item" title="出生日期" :value="birthday" is-link @click.native="showDate"></cell>
				<cell class="list-item" title="最高学历" :value="education" is-link @click.native="showrec = true"></cell>
			</group>
			<group class="input-div">
				<cell class="list-item" title="微信号">
					<x-input class="input-item" ref="wx" v-model="wxnum" :value="wxnum" text-align="right" placeholder="未设置" type="text" @on-change="wxChange"></x-input>
				</cell>
				<cell class="list-item" title="支付宝账号">
					<x-input class="input-item" ref="zfb" v-model="zfbnum" :value="zfbnum" text-align="right" placeholder="未设置" type="text" @on-change="zfbChange"></x-input>
				</cell>
				<cell class="list-item" title="邮箱">
					<x-input class="input-item" ref="email" v-model="email" :value="email" text-align="right" placeholder="未设置" type="text" @on-change="mailChange"></x-input>
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

		<actionsheet v-model="showsex" theme="ios" :menus="sexlist" @on-click-menu="sexclick" show-cancel></actionsheet>
		<actionsheet v-model="showrec" theme="ios" :menus="reclist" @on-click-menu="recclick" show-cancel></actionsheet>
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
				wxnum: '',
				zfbnum: '',
				email: '',
				qq: '',
				contact: '',
				contactnum: '',
				showsex: false,
				showrec: false,
				sexlist: ['男', '女','未设置'],
				reclist: ['小学', '初中', '高中', '大专', '本科'],
				txt: '<span>请选择性别</span>',
				backImages: [],
				pindex: 0,
				sex: '', //性别
				xl: '',
				birthday: '', //生日
				education: '', //学历
				info: {},
				imgdata: null,
				token: '',
				fileIdList: [],
				instance: ''
			}
		},
		created() {
			this.getUserInfo()

			var _this = this
		},
		mounted() {

		},
		methods: {
			getUserInfo() {
				var _this = this

				_this.backImages = []
				_this.fileIdList = []

				this.$http.get(_this.url.user.getUserInfo, {
					params: {
						userId: localStorage.getItem('userId')
					}
				}).then((res) => {
					if(res.data.status == '00000000') {
						var info = res.data.data
						_this.gender = info.gender
						if(info.gender == 1){
							_this.sex = '男'
						}else if(info.gender == 2){
							_this.sex = '女'
						}else{
							_this.sex = '未设置'
						}
						_this.xl = info.education
						if(info.education == 0) {
							_this.education = '小学'
						} else if(info.education == 1) {
							_this.education = '初中'
						} else if(info.education == 2) {
							_this.education = '高中'
						} else if(info.education == 3) {
							_this.education = '大专'
						} else if(info.education == 4) {
							_this.education = '本科'
						}
						_this.birthday = _this.mainApp.frDateTimehp.getFormatDateTamp(info.birthday * 1000)
						_this.wxnum = info.wechat
						_this.zfbnum = info.alipay
						_this.email = info.email
						_this.qq = info.qq
						_this.contact = info.emergency
						_this.contactnum = info.egmobile

						if(info.imagelist) {
							info.imagelist.forEach((value, index, array) => {
								_this.backImages.push(array[index].original)
								_this.fileIdList.push(array[index].imageId)
							})
						}

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
					this.gender = 1
				} else if(val == 1) {
					this.sex = '女'
					this.gender = 2
				}else if(val == 2){
					this.sex = '未设置'
					this.gender = 0
				}
			},
			recclick(val) {
				this.xl = val
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
					minYear: '1970',
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
						var imgdata = file[i]
						var data = {
							type: 'user',
							name: '1',
							file: imgdata
						}
						_this.$http.post(_this.url.user.fileuploadImage, data).then((res) => {
							if(res.data.status == '00000000') {
								_this.backImages.push(res.data.data.fileUrl)
								_this.fileIdList.push(res.data.data.fileId)
							}
						})
					}
				}
			},
			cindex(index) {
				this.pindex = index
			},
			cone(e) {
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
						_this.$set(_this.backImages,_this.pindex,res.data.data.fileUrl)
						_this.$set(_this.fileIdList,_this.pindex,res.data.data.fileId)
					}
				})
			},
			shanc(index) {
				this.backImages.splice(index, 1)
				this.fileIdList.splice(index, 1)
			},
			changeUserInfo() {
				var _this = this

				if(!_this.mainApp.isemail(_this.email) && _this.email) {
					_this.$vux.toast.show({
						width: '50%',
						type: 'text',
						position: 'middle',
						text: '邮箱格式不正确'
					})
					return false
				}

				if(!_this.mainApp.isphone(_this.contactnum) && _this.contactnum) {
					_this.$vux.toast.show({
						width: '50%',
						type: 'text',
						position: 'middle',
						text: '联系人号码格式不正确'
					})
					return false
				}

				var data = {
					gender: _this.gender,
					birthday: _this.mainApp.frDateTimehp.getDateTimesTamp(_this.birthday),
					education: _this.xl,
					wechat: _this.wxnum,
					qq: _this.qq,
					alipay: _this.zfbnum,
					email: _this.email,
					egmobile: _this.contactnum,
					emergency: _this.contact,
					imageIds: _this.fileIdList.join() + ",",
					userId: localStorage.getItem('userId')
				}
				_this.$http.post(_this.url.user.changeUserInfo, data).then((res) => {
					if(res.data.status == '00000000') {
						_this.$vux.toast.show({
							width: '50%',
							type: 'text',
							position: 'middle',
							text: '修改成功'
						})
						_this.getUserInfo()
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