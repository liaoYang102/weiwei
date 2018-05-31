<template>
	<div class="address-box">
		<settingHeader :title="title"></settingHeader>
		<div v-if="list.length>0">
			<div class="list" v-for="(item,index) in list" :key="index">
				<div class="top">
					<div class="pro">
						<div>
							<span>{{item.name}}</span>
							<span class="label" v-if="item.remark">{{item.remark}}</span>
						</div>
						<span>{{item.mobile}}</span>
					</div>
					<p>{{item.country}}{{item.province}}{{item.city}}{{item.area}} {{item.address}}</p>
				</div>
				<div class="bottom">
					<div @click="ischange(item.addressId, index)">
						<check-icon :value.sync="item.isDefault">设置为默认地址</check-icon>
					</div>
					<div>
						<span @click="toEdit(item.addressId)">编辑</span>
						<span @click="deleteAddress(item.addressId)">删除</span>
					</div>
				</div>
			</div>
		</div>
		<div style="height: 100vh;background-color: white;">
			<noData v-if="list.length == 0" :status="2" stateText="暂无数据"></noData>
		</div>
		<div class="add-btn-box">
			<router-link to="/member/address/edit">
				<div class="add-btn">添加地址</div>
			</router-link>
		</div>
	</div>
</template>

<script>
	import { Scroller, CheckIcon, XButton } from 'vux'
	import settingHeader from '../../../components/setting_header'
	import noData from '../../../components/noData'
	export default {
		data() {
			return {
				title: '管理收货地址',
				list: []
			}
		},
		created() { //判断是否微信端
			var ua = navigator.userAgent.toLowerCase();
			var isWeixin = ua.indexOf('micromessenger') != -1;
			if(isWeixin) {
				this.hShow = true;
			} else {
				this.hShow = false;
			}
			this.getShippingAddress()
		},
		methods: {
			toEdit(id){
				this.$router.push({
					name:'address_edit',
					query:{
						'addressId':id
					}
				})
			},
			deleteAddress(addressId) { // 删除地址
				let _this = this
				_this.$dialog.show({
					type: 'warning',
					headMessage: '提示',
					message: '确定删除该地址吗?',
					canel() {
						console.log('取消')
					},
					confirm() {
						let param = {
							userId: localStorage['userId'],
							addressId: addressId
						}
						_this.$http.post(_this.url.user.deleteShippingAddress, param).then(resp => {
							_this.$vux.toast.show({
								type: 'text',
								text: '成功删除'
							})
							_this.getShippingAddress()
						})
					}
				})
			},
			ischange(addressId, i) { // 设置默认地址
				let _this = this
				let param = {
					userId: localStorage['userId'],
					addressId: addressId
				}
				_this.$http.put(_this.url.user.setDefaultShippingAddress, param).then(resp => {
					if(resp.data.status === '00000000') {
						_this.list.forEach(function(index, value, array) {
							_this.list[value].isDefault = false
							_this.list[i].isDefault = true
						})
					} else {
						_this.list[i].isDefault = false
					}
				})
			},
			getShippingAddress() { // 获取收货地址列表
				let _this = this
				let param = {
					'userId': localStorage['userId'],
					'pageSize': 20,
					'curPage': 1
				}
				_this.$http.get(_this.url.user.getShippingAddress, {
					params: param
				}).then(resp => {
					_this.list = resp.data.data.list
					_this.list.forEach(function(value){
					 	value.isDefault = !!value.isDefault
					})
				})
				
			}
		},
		components: {
			settingHeader,
			CheckIcon,
			XButton,
			Scroller,
			noData
		}
	}
</script>

<style lang="less" scoped>
	.address-box {
		background: #F5F6FA;
		padding-bottom: 1rem;
		position: relative;
		.settingHeader {
			position: relative;
		}
		.settingHeader:after {
			content: " ";
			position: absolute;
			left: 0;
			bottom: -2px;
			right: 0;
			height: 1px;
			border-top: 1px solid #D9D9D9;
			color: #D9D9D9;
			-webkit-transform-origin: 0 0;
			transform-origin: 0 0;
			-webkit-transform: scaleY(0.5);
			transform: scaleY(0.5);
			left: 0;
		}
		.add-btn-box {
			width: 100%;
			background: white;
			position: fixed;
			bottom: 0;
			left: 0;
			height: 0.88rem;
			box-sizing: border-box;
			.add-btn {
				height: 0.88rem;
				line-height: 0.88rem;
				background: rgba(51, 111, 255, 1);
				font-size: 0.28rem;
				text-align: center;
				font-family: MicrosoftYaHei;
				color: rgba(255, 255, 255, 1);
			}
		}
		.box2 {
			padding-top: 0.21rem;
		}
		.top46 {
			top: 47px!important;
		}
		.list {
			box-sizing: border-box;
			margin-bottom: 0.21rem;
			background: white;
			.top {
				padding: 0.27rem 0.25rem;
				.pro {
					display: flex;
					justify-content: space-between;
					font-family: PingFangSC-Regular;
					font-size: 0.28rem;
					color: #1A2642;
					letter-spacing: 0;
					margin-bottom: 0.11rem;
					align-items: center;
					.label {
						display: inline-block;
						// width: 0.8rem;
						border: 1px solid #1c70f1;
						border-radius: 2px;
						margin-left: 0.18rem;
						text-align: center;
						font-size: 0.24rem;
						padding: 0.02rem 0.1rem;
					}
				}
				p {
					font-family: PingFangSC-Regular;
					font-size: 0.28rem;
					color: #1A2642;
					letter-spacing: 0;
				}
			}
			.bottom {
				height: 0.88rem;
				padding: 0.06rem 0.25rem;
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 0.24rem;
				position: relative;
				.weui-icon-success {
					color: dodgerblue!important;
				}
				span {
					display: inline-block;
					width: 1rem;
					height: 0.5rem;
					line-height: 0.5rem;
					border: 1px solid #D8DFF0;
					border-radius: 4px;
					margin-left: 0.18rem;
					text-align: center;
					box-sizing: border-box;
				}
			}
			.bottom:before {
				content: " ";
				position: absolute;
				left: 0;
				top: 0;
				right: 0;
				height: 1px;
				border-top: 1px solid #D9D9D9;
				color: #D9D9D9;
				-webkit-transform-origin: 0 0;
				transform-origin: 0 0;
				-webkit-transform: scaleY(0.5);
				transform: scaleY(0.5);
				left: 0px;
			}
		}
	}
</style>