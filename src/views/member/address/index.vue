<template>
	<div class="content">
		<settingHeader :title="title"></settingHeader>
		<scroller lock-x height="-46">
			<div class="box2">
				<div class="list" v-for="(item,index) in list">
					<div class="top">
						<div class="pro">
							<span>{{item.name}}</span>
							<span>{{item.phone}}</span>
						</div>
						<p>{{item.address}}</p>
					</div>
					<div class="bottom">
						<check-icon :value.sync="item.isdefault">设置为默认地址</check-icon>
						<div>
							<router-link to="/member/address/edit"><span>编辑</span></router-link>
							<span>删除</span>
						</div>
					</div>
				</div>
			</div>
		</scroller>
		<div class="add-btn-box">
			<x-button class="add-btn" :gradients="['#1D62F0', '#19D5FD']">添加地址</x-button>
		</div>
	</div>
</template>

<script>
	import { Scroller, CheckIcon, XButton } from 'vux'
	import settingHeader from '../../../components/setting_header'
	export default {
		data() {
			return {
				title: '管理收货地址',
				demo1: false,
				list: [{
					name: '张广',
					phone: '18520496787',
					address: '广州市番禺区橘树北街43号',
					isdefault: true
				}, {
					name: '张广',
					phone: '18520496787',
					address: '广州市番禺区橘树北街43号',
					isdefault: false
				}, {
					name: '张广',
					phone: '18520496787',
					address: '广州市番禺区橘树北街43号',
					isdefault: false
				}, {
					name: '张广',
					phone: '18520496787',
					address: '广州市番禺区橘树北街43号',
					isdefault: false
				}, {
					name: '张广',
					phone: '18520496787',
					address: '广州市番禺区橘树北街43号',
					isdefault: false
				}, {
					name: '张广',
					phone: '18520496787',
					address: '广州市番禺区橘树北街43号',
					isdefault: false
				}, {
					name: '张广',
					phone: '18520496787',
					address: '广州市番禺区橘树北街43号',
					isdefault: false
				}]
			}
		},
		methods: {

		},
		components: {
			settingHeader,
			CheckIcon,
			XButton,
			Scroller
		}
	}
</script>

<style lang="less" scoped>
	.content {
		background: #F5F6FA;
	}
	.box2{padding-bottom: 180px;padding-top: 0.21rem;}
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
				font-size: 0.32rem;
				color: #1A2642;
				letter-spacing: 0;
				margin-bottom: 0.11rem;
			}
			p {
				font-family: PingFangSC-Regular;
				font-size: 0.30rem;
				color: #1A2642;
				letter-spacing: 0;
			}
		}
		.bottom {
			height: 0.88rem;
			padding: 0.06rem 0.25rem;
			border-top: 0.02rem solid #D8DFF0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 0.24rem;
			.weui-icon-success {
				color: dodgerblue!important;
			}
			span {
				display: inline-block;
				width: 1rem;
				height: 0.55rem;
				line-height: 0.6rem;
				border: 1px solid #90A2C7;
				border-radius: 4px;
				margin-left: 0.18rem;
				text-align: center;
			}
		}
	}
	
	.add-btn-box {
		width: 100%;
		height: 1rem;
		background: white;
		position: fixed;
		bottom: 0%;
		box-sizing: border-box;
		.add-btn{
			height: 100%;
			font-size: 0.32rem;
			border-radius: 0;
		}
	}
</style>