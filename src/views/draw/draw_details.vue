<template>
	<section style="background-color: #F3F3F3;height: 100%;">
		<settingHeader :title="title"></settingHeader>
		<div class="content">
			<p class="title left">番禺国美店周末幸运大抽奖</p>
			<p class="times left">12356期</p>
			<!-- <p class="text">只要在e消费平台上消费任意一笔订单，就能参与周末幸运大抽奖</p> -->
		</div>
		<!-- <div class="status">
			<div>状态</div>
			<div class="text">已中奖</div>
			<div class="clear"></div>
		</div> -->

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
					{ label: '参与方式', value:'2018.02.12购买耐克店铺商品赠送'},
					{ label: '状态', value:'已中奖'}
				],
			}
		}
	}
</script>

<style lang="less" scoped>
.left{
	float: left;
}
.content{
	background-color: #fff;
	color: #333333;
	padding: 0.29rem 0 0.36rem 0.29rem;
	overflow: hidden;
	.title{
		font-size: 0.36rem;
	}
	.times{
		font-size: 0.24rem;
		color: #fff;
		background:linear-gradient(-121.4deg,#AF51FF,#9013FE);
		border-radius: 0.04rem;
		text-align: center;
		padding:0.05rem 0.07rem; 
		margin-left: 0.12rem;
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
		color: #FF5365;
		font-size: 0.32rem;
	}
}
</style>

<style lang="less">
.ways{
	margin-top: 0.4rem;
	.weui-cells{
		margin-top: 0.14rem;
	}
	.weui-cells:before{
		border-top: none;
	}
	.weui-cell{
		padding: 0.33rem 0.4rem 0.22rem 0.28rem;
	}
	.weui-cells:after{
		border-bottom: none;
	}
	.weui-form-preview__label{
		color: #666666;
		font-size: 0.28rem;
	}
	.weui-form-preview__value{
		color: #A0A0A0;
		font-size: 0.28rem;
	}
	.weui-form-preview__item:last-child .weui-form-preview__value{
		color: #E32921;
	}
}
</style>