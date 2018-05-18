<template>
	<div class="content">
		<settingHeader :title="title"></settingHeader>
		<group :gutter="0" class="input-div">
			<x-input class="address-item" placeholder="姓名" v-model="name" required></x-input>
			<x-input class="address-item" placeholder="联系方式" type="text" v-model="vPhone" required></x-input>
			<x-address :list="list" class="address-item address-check" v-model="address" title='' placeholder="请选择地址" value-text-align="left"></x-address>
			<x-input class="address-item" placeholder="详细地址" v-model="xaddress" :max="11" type="text" required></x-input>
			<x-input class="address-item" placeholder="邮箱" v-model="email" type="text"></x-input>
			<x-textarea class="address-tt" title="备注 :" v-model="remarks"></x-textarea>
			<x-textarea class="address-tt" :height="40" title="标签 :" v-model="label" @on-change="isLabel"></x-textarea>
			<div class="label-box">
				<div class="twoClass">
					<div class="type-item" v-for="(item,index) in twoClass">
						<div :class="{'twoActive':twoIndex === index}" @click="twoChange(index,item)">{{item}}</div>
					</div>
				</div>
			</div>
		</group>
		<div class="tip">
			<div class="add-btn">保存</div>
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
				name: '',
				vPhone: '',
				list: [],
				address: [],
				xaddress: '',
				email: '',
				remarks: '',
				label: '',
				twoClass: ['家', '公司', '代收点', '丰巢'],
				twoIndex: '',
			}
		},
		created() {
			var _this = this
			//全局地址数据
		},
		methods: {
			twoChange(index, item) {
				this.twoIndex = index
				this.label = item
			},
			isLabel() {
				
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
</style>