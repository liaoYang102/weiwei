<template>
	<section>
		<ul class="recommended">
			<div class="re-title">为你推荐</div>
			<div class="ul-recommended">
				<div>
					<group v-for="(item, index) in goodslist" :key="index">
						<cell is-link>
							<div class="ul-top" @click="goShopdetails">
								<div class="ul-left"><img src="../../../assets/images/shop/product.png"></div>
								<div class="ul-center">
									<span>{{ item.name}}</span><br>
									<span class="gray">{{ item.date}}</span>
									<p class="shopPrice">
										<span class="priceNum">￥{{ item.money}}</span> 
										<span class="shopAcount">+{{ item.score}}积分</span>
									</p>
								</div>
								<div class="ul-right">
									<span>了解详情</span>
								</div>
							</div>
					    </cell>
					</group>
				</div>
			
			</div>
		</ul>
	</section>

	
</template>

<script>
	export default {
		data() {
			return {
				goodslist: [
					{ name: '女装U宽腿牛仔裤(水洗产品)' ,date: '2018年02月27日', money: '3598', score: '266'},
					{ name: '女装U宽腿牛仔裤(水洗产品)' ,date: '2018年02月27日', money: '3598', score: '266'},
					{ name: '女装U宽腿牛仔裤(水洗产品)' ,date: '2018年02月27日', money: '3598', score: '266'},
					{ name: '女装U宽腿牛仔裤(水洗产品)' ,date: '2018年02月27日', money: '3598', score: '266'},
					{ name: '女装U宽腿牛仔裤(水洗产品)' ,date: '2018年02月27日', money: '3598', score: '266'},
					{ name: '女装U宽腿牛仔裤(水洗产品)' ,date: '2018年02月27日', money: '3598', score: '266'},
					{ name: '女装U宽腿牛仔裤(水洗产品)' ,date: '2018年02月27日', money: '3598', score: '266'},
					{ name: '女装U宽腿牛仔裤(水洗产品)' ,date: '2018年02月27日', money: '3598', score: '266'},
					{ name: '女装U宽腿牛仔裤(水洗产品)' ,date: '2018年02月27日', money: '3598', score: '266'},
					{ name: '女装U宽腿牛仔裤(水洗产品)' ,date: '2018年02月27日', money: '3598', score: '266'}
				],
				test: true,
			}
		},
		methods:{
		    goShopdetails(){
		    	this.$router.push({ path: '/shop/shop_details'})
		    }
		}
	}
</script>

<style lang="less" scoped>
.recommended{
	background: #fff;
	.re-title{
		font-size: 0.3rem;
		color: #222222;
		padding: 0.3rem 0;
		padding-left: 0.18rem;
		border-bottom: 0.01rem solid #E1E1E1;
	}
}
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
		.shopPrice{
			margin-top: 0.07rem;
			.priceNum{
				display: inline-block;
				
				font-size: 0.32rem;
				color: #F23030;
				font-weight: 700;
				vertical-align: middle;
			}
			.shopAcount{
				font-weight: normal;
				display: inline-block;
				padding-left: 0.06rem;
				padding-right: 0.08rem;
				height: 0.4rem;
				text-align: center;
				font-size: 0.24rem;
				line-height: 0.4rem;
				background-image: linear-gradient(238deg, #5EC3FF 0%, #106FE3 100%);
				border-radius: 0.04rem;
				color:#fff;
			}
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
	margin-top: 0;
}
.ul-recommended .weui-cell{
	padding: 0;
}
.ul-recommended .weui-cell_access .weui-cell__ft:after{
	border-color: #90A2C7;
	right: 0.202rem;
	margin-top: -5px;
	/*border:none;*/
}
.ul-recommended .weui-cells:before{
	border:none;
}
</style>