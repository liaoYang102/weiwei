<template>
	<div class="ul-recommended">
		<group v-for="(item, index) in goodslist">
			<cell is-link>
				<div class="ul-top">
					<div class="ul-left"><img src="../../../assets/images/shop/product.png"></div>
					<div class="ul-center">
						<span>{{ item.name}}</span><br>
						<span class="gray">{{ item.date}}</span><br>
						<span class="money-red">￥{{ item.money}}</span>
						<div class="score-num">+{{ item.score}}积分</div>
					</div>
					<div class="ul-right">
						<span>了解详情</span>
					</div>
				</div>
		    </cell>
		</group>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				goodslist: [
					{ name: '女装U宽腿牛仔裤(水洗产品)' ,date: '2018年02月27日', money: '3598', score: '266'},
					{ name: '女装U宽腿牛仔裤(水洗产品)' ,date: '2018年02月27日', money: '3598', score: '266'},
					{ name: '女装U宽腿牛仔裤(水洗产品)' ,date: '2018年02月27日', money: '3598', score: '266'}
				]
			}
		}
	}
</script>

<style lang="less" scoped>
.ul-top{
	background: #fff;
	font-size: 0.28rem;
	color: #1A2642;
	display: flex;
	.ul-left{
		width: 1.52rem;
		margin: 0.05rem 0.17rem 0.05rem 0.06rem;
		img{
			width: 100%;
			vertical-align:middle; 
		}
	}
	.ul-center{
		text-align: left;
		margin-right: 0.28rem;
		margin-top: 0.17rem;
		span{
			display: inline-block;
		}
		.gray{
			font-size: 0.24rem;
			color: #90A2C7;
		}
		.money-red{
		    font-size: 0.32rem;
		    color: #F23030;
		}
		.score-num{
			display:inline-block;
		    background-image: linear-gradient(238deg, #5EC3FF 0%, #106FE3 100%);
		    text-align: center;
		    color:#fff;
		    font-size: 0.22rem;
		    height: 0.36rem;
		    border-radius: 0.04rem;
		    margin: 0.14rem 0 0.26rem 0;
		    padding: 0.01rem 0.08rem;
		}
		
	}
	.ul-right{
		flex: 1;
		font-size: 0.28rem;
		color: #90A2C7;
		margin: auto 0.11rem auto 0.5rem ;
	}
}
</style>

<style lang="less">
.ul-recommended .vux-no-group-title,.ul-recommended .weui-cells{
	margin-top: 0 !important;
}
.ul-recommended .weui-cell{
	padding: 0 !important;
}
.ul-recommended .weui-cell_access .weui-cell__ft:after{
	border-color: #90A2C7 !important;
	right: 0.202rem !important;
}
</style>