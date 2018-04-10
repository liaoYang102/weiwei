<template>
	<div class="couponTab">
		<tab class="tab" :line-width="2" active-color="#397df8">
			<tab-item v-for="(item,index) in couponType" :selected="typeActive == index" @on-item-click="onItemClick(index)">{{item}}</tab-item>
		</tab>
		<i id="menu" class="iconfont"></i>
	</div>
</template>

<script>
	import { Tab, TabItem } from 'vux'
	export default {
		data() {
			return {
				typeActive: 0,
				couponType: ['全部', '未使用', '已使用', '已过期']
			}
		},
		methods: {
			onItemClick(index) {
				this.typeActive = index
			}
		},
		components: {
			Tab,
			TabItem
		}
	}
</script>

<style lang="less" scoped>
	.couponTab {
		display: flex;
		align-items: center;
		.tab {
			flex: 1;
			.vux-tab-item{
				background-color: transparent;
			}
		}
		i {
			display: inline-block;
			width: 15%;
			text-align: center;
			line-height: 0.8rem;
			color: #397df8;
			font-size: 0.24rem;
		}
	}
</style>