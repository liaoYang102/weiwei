<template>
	<div class="order_success">
		<settingHeader :title="title"></settingHeader>
		<div class="head">
			<img src="../../assets/images/shop/payment_successful.png" alt="" class='fl'>
			<div class="message fl">
				<p class="success">支付成功！</p>
				<p class="prompt">快去体验吧~</p>
			</div>
			<div class="clear"></div>
		</div>

		<div class="center">
			<div class="personInfo">
				<p class="basic ellipise">订单编号：EQ2018042142352525325</p>
			</div>
			<div class="money">
				<p class="realPayment">
					实付款：<span class="totalMoney">100积分+20.00元</span>
				</p>
				<div class="btn">
					<div class="redeemDetails" @click="goOrderdetails">查看详情</div>
					<div class="exchangeCenter" @click="openEquitment">启动设备</div>
					<div class="clear"></div>
				</div>
			</div>
		</div>

		<cashBack></cashBack>

		<div class="bottom">
			<recommended></recommended>
		</div>	

	</div>
</template>

<script>
	import settingHeader from '../../components/setting_header'
	import cashBack from '../shop/components/cashBack.vue'
	import recommended from '../shop/components/recommended.vue'

	export default {
		data() {
			return {
				title:"支付成功",
			}
				
		},
		components:{
			settingHeader,
			recommended,
			cashBack
		},
		/*created(){

		},*/
		mounted(){
			
		},
		computed:{
			
		},
		methods:{
			 goOrderdetails(){//查看详情
			 	this.$router.push({
			 		name:'orderDetail',
			 		id:1
			 	});
			 },
			 openEquitment(){//开启设备
			 	this.$router.push({
			 		path:'/share/usetime',
			 		id:1
			 	});
			 }
			
		}
	}
</script>

<style lang="less" scoped>
	@import url('../../../static/css/global');
	.order_success{
		.head{
			border-top: 1px solid #E1E1E1;
			border-bottom: 1px solid #E1E1E1;
			padding-top: 0.09rem;
			padding-bottom: 0.11rem;
			padding-left: 0.54rem;
			background: #fff;
			img{
				width: 2.82rem;
				height: 2.2rem;
			}
			.message{
				margin-left: 0.2rem;
				margin-top:0.69rem;
				.success{
					font-size: 0.36rem;
					font-weight: 700;
					color: #222222;
				}
				.prompt{
					font-size: 0.28rem;
					color: #222222;
				}
			}
		}
		.center{
			background: #fff;
			padding-bottom: 0.3rem;
			padding-left: 0.2rem;
			/*border-bottom: 0.21rem solid #f5f8f9;*/
			.personInfo{
				/*border-bottom: 1px solid #E1E1E1;*/
				font-size: 0.24rem;
				color: #90A2C7;
				line-height: 0.65rem;
				/*padding-bottom: 0.2rem;*/
				span{
					display: inline-block;
					line-height: 0.33rem;
					width: 5.82rem;
					margin-right: 0.28rem;
					margin-top:0.15rem;
				}
			}
			.money{
				padding-top: 0.12rem;
				.realPayment{
					font-size: 0.24rem;
					color: #90A2C7;
					.totalMoney{
						font-size: 0.24rem;
						color: #222222;
					}
				}
				.btn{
					padding-left: 0.55rem;
					margin-top: 0.45rem;
					.redeemDetails,.exchangeCenter{
						float: left;
						width: 2.4rem;
						height: 0.7rem;
						border: 1px solid #90A2C7;
						border-radius: 0.1rem;
						text-align: center;
						line-height: 0.7rem;
						font-size: 0.34rem;
						color: #90A2C7;
						margin-left: 0.36rem;
					}
					.exchangeCenter{
						border: 1px solid #336FFF;
						color: #336FFF;
					}
				}
			}
		}
	}
</style>