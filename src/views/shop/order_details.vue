<template>
	<div class="order-details">
		<settingHeader :title="title"></settingHeader>

		<div class="top">
			<div class="top-left" @click="goMultiUserMall">
				<img src="../../assets/images/shop/UNIQLO.png">
				<div class="left-text">优衣库旗舰店</div>
				<img src="../../assets/images/shop/right.png" class="icon">
			</div>
			
			<div class="top-right" @click="showToast">
				<img src="../../assets/images/shop/customer.png">
				<span class="right-text">联系客服</span>
			</div>
		</div>

		<div class="order">
			<li>
				<div class="order-content">
					<div class="order-img">
						<img src="../../assets/images/shop/order_detail1.png">
					</div>
					<div class="text-right">
						<span>女装U宽腿牛仔裤(水洗产品)</span>
						<p class="text-gray">颜色:蓝色；尺码:L/170修身 <span class="fr">X4</span></p>
					</div>
				</div>
				<div class="order-btn">
					<div class="comments commen" @click="goWritecomments">评价</div>
					<div class="giveup commen" @click="goRefund">退货</div>
				</div>
			</li>

			<li>
				<div class="order-content">
					<div class="order-img">
						<img src="../../assets/images/shop/order_detail1.png">
					</div>
					<div class="text-right">
						<span>女装U宽腿牛仔裤(水洗产品)</span><br>
						<p class="text-gray">颜色:蓝色；尺码:L/170修身 <span class="fr">X4</span></p>
					</div>
				</div>
				<div class="order-btn">
					<div class="comments commen" @click="goWritecomments">评价</div>
					<div class="giveup commen" @click="goRefund">退货</div>
				</div>
			</li>
		</div>

		<div class="content">
			<ul class="ul-content">
				<group gutter="0">
				    <cell-form-preview :list="list"></cell-form-preview>
				    <cell-form-preview :list="list2"></cell-form-preview>
			    </group>

			    <div class="return" v-if="value != 0 && value != 4">
			    	<div class="return-red">返积分</div>
			    	<span>返积分<span class="score-blue">200</span>点</span>
			    </div>
			</ul>
		
			<recommended></recommended>
		</div>


		<!-- 买家已收货 无返积分-->
		<div class="footer" v-if="value == 0">  
			<div class="comments commen" @click="goWritecomments">评价</div>
			<div class="canel view commen" @click="goLogistics">查看物流</div>
			<router-link to="/shop/refund"><div class="view commen">申请售后</div></router-link>
		</div>

		<!-- 卖家已发货 有返积分-->
		<div class="footer" v-else-if="value == 1">
			<div class="comments commen" @click="onConfirm">确认收货</div>
			<div class="canel commen" @click="goLogistics">查看物流</div>
			<router-link to="/shop/refund"><div class="view commen">退货</div></router-link>
		</div>

		<!-- 买家已付款 有返积分-->
		<div class="footer" v-else-if="value == 3">
			<div class="view commen" @click="shipmentCancel">取消发货</div>
		</div>

		<!-- 等待买家付款 有返积分-->
		<div class="footer" v-else-if="value == 2">
			<router-link to="/shop/confirm"><div class="canel commen">付款</div></router-link>
			<div class="view commen" @click="orderCancel">取消订单</div>
		</div>

		<!-- 交易关闭 未付款 无返积分 -->
		<div class="footer" v-else-if="value == 4">
			<div class="view commen" @click="orderDelete">删除订单</div>
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
				cancelShipment:false,
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
				],
				value: 1
			}
		},
		components: {
			settingHeader,recommended
		},
		methods: {
			onClick:function(){
				console.log('-=-')
			},
			goWritecomments: function(){
				this.$router.push({ path: '/shop/write_comments'})
			},
			goRefund(){
				this.$router.push({ path: '/shop/refund'})
			},
			goLogistics(){
		    	this.$router.push({ path: '/shop/logistics'})
		    },
		    goTsuccess(){
		    	this.$router.push({ path: '/shop/t_success'})
		    },
		    // 确认收货
		    onConfirm(){
		    	let _this = this;
		    	_this.$dialog.show({
		    		type: 'warning',
		    		headMessage: '确认收货',
		    		message: '亲,您的快件状态是已到达,是否确定收到货?',
		    		buttons: ['确定', '取消'],
		    		canel() {
		    			_this.$dialog.hide()
		    		},
		    		confirm() {
		    			_this.goTsuccess()
		    			_this.$dialog.hide()
		    		}
		    	})
		    	console.log(_this.$dialog)
		    },
		    shipmentCancel(){
		    	let _this = this;
		    	_this.$dialog.show({
		    		type: 'warning',
		    		headMessage: '取消发货',
		    		message: '亲,您是否确定取消发货？',
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
		    showToast(){
				this.$vux.toast.show({
					text: '暂无客服功能',
					type: 'text',
					width: '10em',
					position: 'middle'
				})
			},
			orderCancel(){
				let _this = this;
		    	_this.$dialog.show({
		    		type: 'warning',
		    		headMessage: '取消订单',
		    		message: '亲,您是否确定取消订单？',
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
			goMultiUserMall(){
				this.$router.push({path: '/multi_user_mall'})
			}
		}
	}
</script>

<style lang="less" scoped>
li{
	list-style: none;
	background: #F5F6FA;
	margin-bottom: 0.04rem;
	overflow: hidden;
} 
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
				margin-top: -0.02rem;
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
	.order{
		width: 100%;
		background: #fff;
		.order-content{
			width: 100%;
			overflow: hidden;
			.order-img{
				float: left;
				width: 22%;
				margin-right: 0.19rem;
				img{
					width: 99%;
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
				color: #90A2C7;
			}
		}
		
	}
	.content{
		clear: both;
		width: 100%;
		/*margin-bottom: 0.2rem;*/
		overflow: auto;
		padding-bottom: 1.22rem;
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
		border-top: 1px solid #E1E1E1;
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
			color: #90A2C7;
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
	margin-top: 0;
}
.ul-content .weui-form-preview__bd{
	color: #1A2642;
}
.ul-content .weui-form-preview__bd div:nth-child(3){
	color: #336FFF;
}
.ul-content .weui-cells:before{
	border-top: none;
}
.ul-content .weui-form-preview__label{
	color: #90A2C7;
	margin-left: 0.15rem;
	text-align: left;
	text-align-last: left;
}
.ul-content .weui-form-preview__value{
	margin-right: 0.44rem;
}
</style>