<template>
	<section style="background-color: #F5F8F9;">
		<settingHeader :title="title"></settingHeader>
		<div class="content">
			<p class="title">番禺国美店周末幸运大抽奖</p>
			<p class="times">第12356期</p>
			<p class="text">只要在e消费平台上消费任意一笔订单，就能参与周末幸运大抽奖</p>
		</div>

		<div class="status">
			<div>状态</div>
			<div class="text">已中奖</div>
			<div class="clear"></div>
		</div>

		<div class="ways">	
			<group>
			    <cell-form-preview :list="list"></cell-form-preview>
		    </group>
		</div>
	</section>
</template>

<script>
	import settingHeader from '../../components/setting_header'
	export default {
		components:{
			settingHeader
		},
		data(){
			return {
				title: '抽奖详情',
				list: [
					{ label: '开奖时间', value:'2018.04.29'},
					{ label: '参与时间', value:'2018.02.12'},
					{ label: '参与方式', value:'2018.02.12购买耐克店铺商品赠送'}
				],
			}
		}
	}
</script>

<style lang="less" scoped>
.content{
	/*height: 2.36rem;*/
	background-color: #F23030;
	color: #fff;
	padding: 0.25rem 0 0.41rem 0.39rem;
	.title{
		font-size: 0.28rem;
	}
	.times{
		margin: 0.25rem 0;
		font-size: 0.36rem;
	}
	.text{
		font-size: 0.2rem;
	}
}
.status{
	background-color: #fff;
	height: 1.02rem;
	line-height: 1.02rem;
	color: #90A2C7;
	font-size: 0.28rem;
	padding-left: 0.15rem;
	div{
		width: 48%;
		float: left;
	}
	.text{
		text-align: right;
		color: #F23030;
		font-size: 0.32rem;
	}
}
</style>

<style lang="less">
.ways{
	.weui-cells{
		margin-top: 0.2rem;
	}
	.weui-cells:before{
		border-top: none;
	}
	.weui-cell{
		padding: 0.22rem 0.4rem 0.22rem 0.15rem;
	}
	.weui-cells:after{
		border-bottom: none;
	}
	.weui-form-preview__label{
		color: #90A2C7;
		font-size: 0.28rem;
	}
	.weui-form-preview__value{
		color: #1A2642;
		font-size: 0.28rem;
	}
}
</style>