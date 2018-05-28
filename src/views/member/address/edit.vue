<template>
	<div class="content">
		<settingHeader :title="title"></settingHeader>
		<group :gutter="0" class="input-div">
			<x-input class="address-item" placeholder="姓名" v-model="info.name" required></x-input>
			<x-input class="address-item" placeholder="联系方式" type="text" v-model="info.mobile" required></x-input>
			<cell title="中国" value-align="left" class="addr-cell">
				<x-address :list="list" class="address-item address-check" v-model="addArr" title='' placeholder="请选择地址" value-text-align="left"></x-address>
			</cell>
			<x-input class="address-item" placeholder="详细地址" v-model="info.address" :max="11" type="text" required></x-input>
			<x-input class="address-item" placeholder="邮箱" v-model="info.email" type="text"></x-input>
			<x-textarea class="address-tt" :height="40" title="标签 :" v-model="info.remark"></x-textarea>
			<div class="label-box">
				<div class="twoClass">
					<div class="type-item" v-for="(item,index) in twoClass">
						<div :class="{'twoActive':twoIndex === index}" @click="twoChange(index,item)">{{item}}</div>
					</div>
				</div>
			</div>
		</group>
		<div class="tip">
			<div class="add-btn" @click="submit">保存</div>
		</div>
	</div>
</template>

<script>
	import { Group, Cell, XInput, XAddress, ChinaAddressV4Data, XButton, XTextarea } from 'vux'
	import settingHeader from '../../../components/setting_header'
	export default {
		data() {
			return {
				title: '编辑收货地址',
				info: {
					name: '',
					mobile: '',
					countryId: '1',
					provinceId: '',
					cityId: '',
					areaId: '',
					address: '',
					email: '',
					remark: '',
					townId: '',
					tel: '',
					default: 0
				},
				list: [],
				addArr: [],
				label: '',
				twoClass: ['家', '公司', '代收点', '丰巢'],
				twoIndex: '',
			}
		},
		created() {
			var _this = this
			// _this.getRegionOptions(1) // 获取国家，暂时不用
			_this.getRegionOptions(2)
			_this.getRegionOptions(3)
			_this.getRegionOptions(4)
			//全局地址数据
		},
		mounted () {
			if(this.$route.params.addressId) {
				this.getShippingAddressById(this.$route.params.addressId)
			}
		},
		methods: {
			twoChange(index, item) {
				let _this = this
				if (_this.twoIndex === index) {
					_this.twoIndex = ''
					_this.info.remark = ''
				} else {
					_this.twoIndex = index
					_this.info.remark = item
				}
			},
			getRegionOptions (level) { // 获取地址选项
				let _this = this
				let param = {
					'level': level
				}
				_this.$http.get(_this.url.zone.area, {params:param}).then(resp => {
					let temp
					let arrData = resp.data.data
					if (level===2) {
						arrData.forEach(function(item) {
							temp = {
								name: item.name,
								value: item.areaId
							}
							_this.list.push(temp)
						})
					} else {
						arrData.forEach(function(item) {
							temp = {
								name: item.name,
								value: item.areaId,
								parent: item.parentId + ''
							}
							_this.list.push(temp)
						})
					}
				})
			},
			submit () {
				let _this = this
				if (!_this.info.name) {
					_this.$vux.toast.show({
						type: 'text',
						text: '请输入姓名'
					})
					return
				}
				if (!_this.info.mobile) {
					_this.$vux.toast.show({
						type: 'text',
						text: '请输入联系方式'
					})
					return
				}
				if (_this.addArr.length !== 3 || !_this.info.address) {
					_this.$vux.toast.show({
						type: 'text',
						text: '请输入地址'
					})
					return
				}
				_this.info.provinceId = _this.addArr[0]
				_this.info.cityId = _this.addArr[1]
				_this.info.areaId = _this.addArr[2]
				_this.info.userId = sessionStorage['userId']
				let tempUrl = _this.info.addressId ? _this.url.user.editShippingAddress : _this.url.user.addShippingAddress
				_this.$http.post(tempUrl, _this.info).then(resp => {
					_this.$vux.toast.show({
						type: 'text',
						text: '保存成功'
					})
					_this.$router.go(-1)
				})
			},
			getShippingAddressById (addressId) { // 获取地址选项
				let _this = this
				let param = {
					userId: sessionStorage['userId'],
					addressId: addressId
				}
				_this.$http.get(_this.url.user.getShippingAddressById, {params:param}).then(resp => {
					_this.info = resp.data.data
					_this.info.addressId = _this.$route.params.addressId
					_this.addArr = [_this.info.provinceId, _this.info.cityId, _this.info.areaId]
				})
			}
		},
		components: {
			settingHeader,
			Group,
			Cell,
			XInput,
			XAddress,
			XButton,
			XTextarea
		},
		watch: {
			vPhone() {
				if(!(/0\d{2,3}-\d{7,8}/).test(this.vPhone)) {
					console.log('手机号码')
				} else {
					console.log('固定电话')
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.label-box {
		padding: 0px 15px;
		.twoClass {
			display: flex;
			flex-wrap: wrap;
			padding: 0.2rem 0;
			justify-content: flex-start;
			.type-item {
				width: 25%;
				text-align: center;
				box-sizing: border-box;
				padding: 0rem 0.25rem;
				margin-bottom: 0.1rem;
				div {
					display: inline-block;
					width: 100%;
					height: 0.5rem;
					line-height: 0.55rem;
					background: #eaeaea;
					border-radius: 2px;
					font-size: 0.20rem;
				}
				.twoActive {
					background: #336FFF;
					color: white;
				}
			}
		}
	}
	
	.address-tt {
		font-family: PingFangSC-Regular;
		font-size: 0.28rem!important;
		color: #1A2642!important;
	}
	
	.address-item {
		font-family: PingFangSC-Regular;
		font-size: 0.28rem!important;
		color: #1A2642;
		letter-spacing: 0;
		padding-top: 0;
		padding-bottom: 0;
		height: 1.02rem;
	}
	
	.address-check {
		padding-top: 0.1rem;
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
			border-radius: 2px;
		}
	}
	.addr-cell {
		padding-top: 0;
		padding-right: 0;
		padding-bottom: 0;
		font-size: .28rem;
		color: #999;
	}
</style>