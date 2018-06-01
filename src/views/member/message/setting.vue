<template>
	<div class="content">
		<settingHeader :title="title"></settingHeader>
		<scroller lock-x height="-40">
			<div class="box2">
				<div class="list">
					<group gutter="0" title="订单类" title-color="#90A2C7">
						<x-switch class="list-item" title="订单提交" :value="ddtjVal" v-model="ddtjVal" @on-change="ddtj"></x-switch>
						<x-switch class="list-item" title="消息取消"></x-switch>
						<x-switch class="list-item" title="下单成功"></x-switch>
						<x-switch class="list-item" title="收获成功"></x-switch>
						<x-switch class="list-item" title="积分到账"></x-switch>
					</group>
					<group gutter="0" title="积分类" title-color="#90A2C7">
						<x-switch class="list-item" title="积分到账"></x-switch>
						<x-switch class="list-item" title="积分抵扣"></x-switch>
					</group>
					<group gutter="0" title="充值类" title-color="#90A2C7">
						<x-switch class="list-item" title="充值成功"></x-switch>
						<x-switch class="list-item" title="充值失败"></x-switch>
					</group>
				</div>
			</div>
		</scroller>

	</div>
</template>

<script>
	import { Cell, Group, XSwitch, Scroller } from 'vux'
	import settingHeader from '../../../components/setting_header'
	export default {
		data() {
			return {
				title: '消息提醒',
				ddtjVal: true
			}
		},
		created() {},
		mounted() {

		},
		methods: {
			ddtj() {
				console.log(this.ddtjVal)
			}
		},
		components: {
			settingHeader,
			XSwitch,
			Scroller
		}
	}
</script>

<style lang="less" scoped>
	.content {
		background-color: #F5F6FA;
	}
	
	.list {
		.list-item {
			font-family: PingFangSC-Regular;
			font-size: 0.28rem;
			color: #1A2642;
			letter-spacing: 0;
			height: 1.02rem;
			padding: 0 0.33rem 0 0.49rem;
		}
	}
</style>