<template>
	<div class="content">
		<settingHeader :title="title"></settingHeader>
		<div class="list">
			<group gutter="0">
				<slot v-for="(item,index) in data">
					<cell class="list-item" :title="item.title" is-link @click.native="look(index)" :arrow-direction="item.isActive ? 'down' : ''"></cell>
					<div class="text" v-if="item.isActive">
						{{item.tip}}
					</div>
				</slot>
			</group>
		</div>
	</div>
</template>

<script>
	import { Cell, Group } from 'vux'
	import settingHeader from '../../../components/setting_header'
	export default {
		data() {
			return {
				title: '积分规则',
				isActive: false,
				data:[
					{title:'通用积分说明',tip:'通用积分在任何一家平台联盟企业和e消费商城平台1:1抵现金使用，用通用积分消费等同现金消费同样获得消费奖励通用积分',isActive:false},
					{title:'积分使用说明',tip:'通用积分即时到达会员钱包帐户，可以在平台所有联盟企业或e消费APP商城平台1：1抵现金随意使用，没有时间和额度限制',isActive:false},
					{title:'通用积分规则',tip:'会员在平台联盟企业或e消费商城平台购物，可获得平台服务收入的20%CGC通用积分,通过本人推荐二维码注册的平台初始会员在平台联盟企业和e消费商城平台消费，会员可获得所推荐会员产生平台服务费的10%的CGC通用积分',isActive:false}
				]
			}
		},
		created() {},
		mounted() {

		},
		methods: {
			look(index){
				this.data[index].isActive = !this.data[index].isActive
			}
		},
		components: {
			settingHeader
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
		}
		.logout-btn {
			width: 100%;
			margin: 0.21rem 0;
			text-align: center;
			background-color: #fff;
			height: 1.02rem;
			line-height: 1.02rem;
		}
		.text {
			padding: 0.30rem;
			box-sizing: border-box;
			font-size: 0.24rem;
			font-family: MicrosoftYaHei;
			color: rgba(144, 162, 199, 1);
		}
	}
</style>