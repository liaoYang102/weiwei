<template>
	<div class="order_detail">
		<settingHeader :title="title"></settingHeader>
		<div class="top">
			<router-link to="/multi_user_mall">
				<div class="box-head">
					<div class="fl">
						<img src="../../assets/images/shop/UNIQLO.png" alt="" class='shop-logo'>
						<span class="box-name">优衣库专卖店</span>
						<img src="../../assets/images/shop/turn_right.png" alt="" class='turn-right'>
					</div>
				</div>
			</router-link>
			
		</div>

		<div class="order">
			<li>
				<div class="order-content">
					<div class="order-img">
						<img src="../../assets/images/share/shebei.png">
					</div>
					<div class="text-right">
						<span>30分钟威伐光单人套餐</span>
						<p class="text-gray">型号:750w <span class="fr">X4</span></p>
					</div>
				</div>
			</li>
		</div>

		<div class="content">
			<ul class="ul-content">
				<group gutter="0">
				    <cell-form-preview :list="list"></cell-form-preview>
				    <cell-form-preview :list="list2"></cell-form-preview>
			    </group>

			    <div class="return">
			    	<div class="return-red">返积分</div>
			    	<span>返积分<span class="score-blue">200</span>点</span>
			    </div>
			</ul>
		
			<!-- <recommended></recommended> -->
		</div>

		<div class="footer">
			<div class="canel commen" @click="eval">评价</div>
			<div class="view commen" @click="orderDelete">删除订单</div>
		</div>

	</div>
</template>

<script>
	import settingHeader from '../../components/setting_header'


	export default {
		data() {
			return {
				title:"订单详情",
				list: [
					{ label: '套餐优惠券', value:'-20.00元'},
					{ label: '支付方式', value:'微信支付'},
					{ label: '实付费', value:'30.00元'}
				],
				list2: [
					{ label: '订单编号', value:'EE2018032424473824723'},
					{ label: '创建时间', value:'2018-03-17 11:44:21'},
					// { label: '订单状态', value:'买家已收货'},
					{ label: '完成时间', value:'2018-03-17 11:44:21'}
				],
			}
				
		},
		components:{
			settingHeader,
		},
		/*created(){

		},*/
		mounted(){
			
		},
		computed:{
			
		},
		methods:{
			 eval(){//评价
			 	this.$router.push({
			 		name:'orderEval',
			 		params:{id:1}
			 	});
			 },
		 	orderDelete(){
		 		let _this = this;
		     	_this.$dialog.show({
		     		type: 'warning',
		     		headMessage: '删除订单',
		     		message: '亲,您是否确定删除订单？',
		     		buttons: ['确定', '取消'],
		     		canel() {
		     			_this.$dialog.hide()
		     		},
		     		confirm() {
		     			// _this.goTsuccess()
		     			_this.$dialog.hide()
		     		}
		     	})
		     	console.log(_this.$dialog)
		 	},

		}
	}

</script>

<style lang="less" scoped>
	@import url('../../../static/css/global');
	li{
		list-style: none;
		background: #F5F6FA;
		margin-bottom: 0.04rem;
		overflow: hidden;
	}
	.order_detail{
		.top{
			background: #fff;
			border-top: 0.01rem solid #E1E1E1;
			font-size: 0.3rem;
			color: #222222;
			display: flex;
			/*.top-left{
				flex: 1;
				margin: 0.33rem 0 0.33rem 0.32rem;
				img{
					width: 8%;
					margin-right: 0.07rem;
					float: left;
				}
				.left-text{
					margin-top: -0.02rem;
					float: left;
				}
				.icon{
					margin-left: 0.12rem;
					width:.3rem;
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
			}*/

			.box-head{
				/*margin-top: 0.25rem;*/
				height: 0.8rem;
				line-height: 0.8rem;
				background-color: #Fff;
				.fr{
					font-size: 0.28rem;
					color: #336FFF;
					margin-right: 0.2rem;
				}
				.fl{
					.shop-logo{
						margin-left: 0.32rem;
						vertical-align: middle;
						width: 0.36rem;
						height: 0.36rem;
					}
					.box-name{
						font-size: 0.3rem;
						color: #1A2642;
						margin-left: 0.15rem;
						line-height: 0.36rem;
					}
					.turn-right{
						width: 0.24rem;
						height: 0.24rem;
					}
				}
			}
		}
		.order{
			width: 100%;
			background: #fff;
			height: 1.7rem;
			overflow: hidden;
			.order-content{
				width: 100%;
				overflow: hidden;
				.order-img{
					float: left;
					width: 22%;
					height: 1.7rem;
					margin-right: 0.19rem;
					img{
						width: 99%;
						height: 100%;
						margin: 0.05rem 0 0.05rem 0.06rem;
					}
				}
				.text-right{
					float: left;
					font-size: 0.3rem;
					color: #1A2642;
					margin-top: 0.18rem;
					width: 70%;
					.text-gray{
						font-size: 0.24rem;
						color: #90A2C7;
						margin-top: 0.05rem;
					}
					.fr{
						float: right;
					}
				}
			}
			.order-btn{
				clear: both;
				width: 100%;
				padding: 0.12rem 0;
				.commen{
					float: right;
					margin-right: 0.2rem;
					margin-bottom: 0.12rem;
					text-align: center;
					height: 0.5rem;
					line-height: 0.54rem;
					width: 1.5rem;
				}
				.comments{
					border: 0.01rem solid #336FFF;
					border-radius: 0.04rem;
					color: #336FFF;
				}
				.giveup{
					border: 0.01rem solid #90A2C7;
					border-radius: 0.04rem;
				}
			}
			
		}
		.content{
			clear: both;
			width: 100%;
			/*margin-bottom: 0.2rem;*/
			/*overflow: auto;*/
			/*padding-bottom: 1rem;*/
			position: relative;
			top: -.3rem;
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
					font-size: 0.28rem;
					color: #90A2C7;
					.return-red{
						background-image: linear-gradient(269deg, #FF7A80 0%, #FF5365 100%);
						width: 0.88rem;
						border-radius: 0.02rem;
						font-size: 0.24rem;
						color: #FFFFFF;
						text-align: center;
						float: left;
						margin-right: 0.1rem;
					}
					.score-blue{
						color: #336FFF;
					}
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
			.commen{
				float: right;
				margin-right: 0.2rem;
				text-align: center;
				width: 1.5rem;
				height: 0.56rem;
				line-height: 0.6rem;
			}
			.view{
				border: 0.01rem solid #90A2C7;
				border-radius: 0.04rem;
			}
			.comments{
				border: 0.01rem solid #F23030;
				border-radius: 0.04rem;
				color: #F23030;
			}
			.canel{
				border: 0.01rem solid #336FFF;
				border-radius: 0.04rem;
				color: #336FFF;
			}
		}
	}
</style>
<style lang="less">
.ul-content{
	margin-bottom: 0.2rem;
}
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
/*.vux-loadmore{
    display: none;
}*/

</style>