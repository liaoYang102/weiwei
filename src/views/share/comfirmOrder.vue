<template>
	<section>
		<settingHeader :title="title"></settingHeader>

		<div class="shops">
			<group style='margin-bottom:0.38rem;'>
                <cell title="优衣库旗舰店" :border-intent="false" >
			        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../assets/images/share/md_logo.png">	
			    </cell>
                <div class="shopInfo">
					<img src="../../assets/images/share/yiqi2.png" alt="" class='fl'>
					<div class='fl' style='padding-top:0.1rem;'>
						<p class="shopName">30分钟威伐光-750W单人套餐</p>
						<p class="shopSize">型号：威伐光-750W</p>
						<p class="shopPrice"><span class="priceNum">￥{{unitPrice}}</span></p>
					</div>
					<div class="clear"></div>
                </div>
                <cell title="购买数量">
                	<x-number @on-change="changeNum" v-model="totalNum" button-style="round" fillable :min="1" :max="999"></x-number>
                </cell>
                <cell title="店铺优惠" value="省10元：100减5" :border-intent="false"></cell>
                <cell :border-intent="false">
					<span slot="title" style="color:#F23030; width: 3rem;display: inline-block;">CGC通用积分抵扣</span>
					<span class="banlance" style='font-size: 0.24rem;color: #90A2C7;'>
						<x-switch :title="'积分: ￥'+balance" v-model="defaultValue" @on-change="onPrice" :value-map="[0,1]" sytle="padding-right: 10 !important;"></x-switch>
					</span>

                </cell>

            </group>
		</div>


		<div class="submit">
			<div class="total fl">
				共 <span class='color'>{{totalNum}}</span> 件，总计：<span class="totalNum">¥{{totalPrice}}</span>
			</div>
			<div class="confirmSumbit fr" @click='popup'>确认提交</div>
			<div class="clear"></div>
		</div>

		<div v-transfer-dom>
			<popup v-model="paytype">
				<popup-header right-text="取消" title="请选择支付方式" :show-bottom-border="false" @on-click-left="paytype = false" @on-click-right="paytype = false"></popup-header>
				<group gutter="0">
					<radio :options="list" value="1" @on-change="change"></radio>
					<div class="pay-box">
						<router-link to='/share/orderSuccess'><div class="add-btn">立即支付</div></router-link>
					</div>
				</group>
			</popup>
		</div>

	</section>
</template>

<script>
	import settingHeader from '../../components/setting_header'
	import { Group, CellBox, XButton, PopupHeader, Radio,Checklist } from 'vux'

	export default {
		data() {
			return {
				title:"确认订单",
				totalNum:1,  //默认数量,总计
				unitPrice:120,//单价
				totalPrice:120,//总价
				paytype:false,
				list: [{
					icon: './static/member/bandCard.png',
					key: '1',
					value: '银行卡支付'
				}, {
					icon: './static/member/treasure.png',
					key: '2',
					value: '支付宝支付'
				}, {
					icon: './static/member/wechapaid.png',
					key: '3',
					value: '微信支付'
				}],
				balance:1200,
				// price:120
				defaultValue:1
			}
				
		},
		components:{
			settingHeader,
			Group,
			CellBox,
			XButton,
			PopupHeader,
			Radio,
			Checklist
		},
		/*created(){

		},*/
		mounted(){
			
		},
		computed:{
			
		},
		methods:{
			popup(){
				this.paytype = true;
			},
			change(value, label) {
				console.log('change:', value, label)
			},
			goShopsuccess(){
				this.$router.push('/share/orderSuccess');
			},
			changeNum(totalNum){//改变订单数量
				// console.log(totalNum)
				this.totalPrice=this.totalNum * this.unitPrice
			},
			onPrice(newVal){
				console.log(newVal)
			}
			
		}
	}
</script>

<style lang="less" scoped>
	@import url('../../../static/css/global');

	.shopInfo{
		border-top: 1px solid #D9D9D9;
		padding: 12px 15px;
		background-color: #F5F6FA;
		img{
			width: 1.52rem;
			height: 1.52rem;
			margin-right: 0.28rem;
		}
		.shopName{
			font-size: 0.28rem;
			color: #1A2642;
			font-weight: 700;
			line-height:0.33rem;
			width: 5.05rem;
			word-wrap:break-word;
		}
		.shopSize{
			font-size: 0.24rem;
			color: #90A2C7;
			line-height:0.53rem;
		}
		.shopPrice{
			margin-top: 0.24rem;
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
				padding-left: 6px;
				padding-right: 8px;
				height: 0.4rem;
				text-align: center;
				font-size: 0.24rem;
				line-height: 0.4rem;
				background-image: linear-gradient(238deg, #5EC3FF 0%, #106FE3 100%);
				border-radius: 4px;
				color:#fff;
			}
		}
	}

	.submit{
		width: 100%;
		position: fixed;
		bottom:0;
		background-color: #fff;
		border-top: 1px solid #E1E1E1;
		box-sizing:border-box;
		height: 1rem;
		.total{
			/*background-color: #fff;*/
			width: 4.4rem;
			padding-left: 0.7rem;
			line-height: 1rem;
			font-size: 0.28rem;
			color:#1A1A1A;
			.color{
				color:#f45656;
			}
			.totalNum{
				font-weight: 700;
				font-size: 0.32rem;
				color: #F23030;
			}
			.totalAccount{
				float:right;
				font-size: 0.24rem;
				color: #FFFFFF;
				background-image: linear-gradient(238deg, #5EC3FF 0%, #106FE3 100%);
				border-radius: 4px;
				height: 0.4rem;
				width: 1.2rem;
				line-height: 0.4rem;
				text-align: center;
				margin-top: 0.32rem;
				margin-right: 0.2rem;
			}
		}
		.confirmSumbit{
			width: 2.4rem;
			padding: 0.3rem 0;
			line-height: 0.4rem;
			text-align: center;
			background: #336FFF;
			font-size: 0.28rem;
			color: #FFFFFF;
		}
	}

	.pay-box {
		padding: 10px 15px;
		.add-btn {
			height: 0.88rem;
			line-height: 0.88rem;
			background: rgba(51, 111, 255, 1);
			font-size: 0.28rem;
			text-align: center;
			font-family: MicrosoftYaHei;
			color: rgba(255, 255, 255, 1);
			border-radius: 2px;
		}
	}
</style>
<style lang="less">
	.shops .weui-cells{
		margin-top: 0 !important;
	}
	.shops .weui-label{
		width: 9em!important;
		padding-right: 5px;
	}
	.shops{
		.vux-label{
			font-size: 0.28rem;
			color:#1A2642;
		}
		.weui-cell__ft{
			font-size: 0.3rem;
			color:#1A2642;
		}
	}
</style>