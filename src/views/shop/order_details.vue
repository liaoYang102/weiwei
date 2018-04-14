<template>
	<div class="order-details">
		<settingHeader :title="title"></settingHeader>

		<div class="top">
			<div class="top-left">
				<img src="../../assets/images/shop/UNIQLO.png">
				<div class="left-text">优衣库旗舰店</div>
				<img src="../../assets/images/shop/right.png" class="icon">
			</div>

			<div class="top-right">
				<img src="../../assets/images/shop/customer.png">
				<span class="right-text">联系客服</span>
			</div>
		</div>

		<div class="content">
			<ul class="ul-content">
				<div class="ul-top">
					<div class="ul-left"><img src="../../assets/images/shop/product.png"></div>
					<div class="ul-right">
						<span>女装U宽腿牛仔裤(水洗产品)宽腿牛仔裤宽腿宽腿牛仔裤</span>
						<p>X1</p>
					</div>
				</div>

				<group>
				    <cell-form-preview :list="list"></cell-form-preview>
				    <cell-form-preview :list="list2"></cell-form-preview>
			    </group>

			    <div class="return">
			    	<div class="return-red">返积分</div>
			    	<span>返积分 <span>200</span>点</span>
			    </div>
			</ul>
			
			<ul class="recommended">
				<div class="re-title">为你推荐</div>
				<recommended></recommended>
			</ul>
		</div>

		<div class="footer">
			<div class="comments">评价</div>
			<div class="view">查看物流</div>
		</div>
			
	</div>
</template>

<script>
import settingHeader from '../../components/setting_header'
import recommended from './components/recommended'

	export default {
		data(){
			return {
				title: '订单详情',
				list: [
					{ label: '积分类型', value:'信用积分'},
					{ label: '运费', value:'10.00'},
					{ label: '实运费', value:'100积分+30.00元'}
				],
				list2: [
					{ label: '订单编号', value:'信用积分'},
					{ label: '创建时间', value:'10.00'},
					{ label: '订单状态', value:'买家已收货'},
					{ label: '完成时间', value:'2018-03-17 11:44:21'}
				]
			}
		},
		components: {
			settingHeader,recommended
		},
		methods: {
			onClick:function(){
				console.log('-=-')
			}
		}
	}
</script>

<style lang="less" scoped>
.order-details{
	background: #F5F6FA;
	.top{
		background: #fff;
		border-top: 0.01rem solid #E1E1E1;
		font-size: 0.3rem;
		color: #222222;
		display: flex;
		.top-left{
			flex: 1;
			margin: 0.33rem 0 0.33rem 0.32rem;
			img{
				width: 8%;
				margin-right: 0.07rem;
				float: left;
			}
			.left-text{
				margin-top: -0.05rem;
				float: left;
			}
			.icon{
				margin-left: 0.12rem;
				width:6%;
				margin-top: 0.03rem
			}
		}
		.top-right{
			width: 1.8rem;
			margin: 0.16rem 0.2rem 0.16rem 0;
			border: 0.02rem solid #90A2C7;
			border-radius: 0.1rem;
			padding: 0.15rem 0.18rem 0.19rem 0.27rem;
			img{
				width: 20%;
				vertical-align:middle; 
				margin-right: 0.2rem;
			}
			.right-text{
				font-size: 0.28rem;
				color: #7386AD;
			}
		}
	}
	.content{
		clear: both;
		width: 100%;
		margin-bottom: 0.2rem;
		overflow: auto;
		padding-bottom: 1rem;
		ul{
			background: #fff;
			.ul-top{
				margin-top: 0.2rem;
				margin-left: 0.24rem;
				font-size: 0.28rem;
				color: #1A2642;
				display: flex;
				border-bottom: 0.01rem solid #E1E1E1;
				.ul-left{
					width: 1.52rem;
					margin: 0.12rem 0.28rem 0.12rem 0;
					img{
						width: 100%;
						vertical-align:middle; 
					}
				}
				.ul-right{
					flex: 1;
					margin-right: 0.28rem;
					margin-top: 0.17rem;
					p{
						font-size: 0.36rem;
						color: #90A2C7;
						margin-top: 0.21rem;
					}
				}
			}
			.return{
				padding: 0.35rem 0;
				padding-left: 0.21rem;
				.return-red{
					background-image: linear-gradient(269deg, #FF7A80 0%, #FF5365 100%);
					border-radius: 0.02rem;

				}
			}
		}
		.recommended{
			margin-top: 0.2rem;
			.re-title{
				font-size: 0.3rem;
				color: #222222;
				padding: 0.3rem 0;
				padding-left: 0.18rem;
				border-bottom: 0.01rem solid #E1E1E1;
			}
		}

	}
	.footer{
		position: fixed;
		width: 100%;
		bottom: 0;
		background: #fff;
		font-size: 0.28rem;
		color: #90A2C7;
		padding: 0.22rem 0;
		.view{
			float: right;
			border: 1px solid #90A2C7;
			border-radius: 0.04rem;
			padding: 0.08rem 0.19rem;
			margin-right: 0.2rem;
		}
		.comments{
			float: right;
			margin-right: 0.2rem;
			border: 1px solid #F23030;
			border-radius: 0.04rem;
			padding: 0.08rem 0.47rem;
			color: #F23030;
		}
	}

}
</style>

<style lang="less">
.ul-content .weui-cells{
	margin-top: 0 !important;
}
.ul-content .weui-form-preview__bd{
	color: #1A2642 !important;
}
.ul-content .weui-form-preview__bd div:nth-child(3){
	color: #336FFF !important;
}
.ul-content .weui-cells:before{
	border-top: none !important;
}
.ul-content .weui-form-preview__label{
	color: #90A2C7 !important;
	margin-left: 0.15rem;
	text-align: left !important;
	text-align-last: left !important;
}
.ul-content .weui-form-preview__value{
	margin-right: 0.44rem;
}

</style>