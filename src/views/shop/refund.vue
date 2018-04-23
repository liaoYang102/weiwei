<template>
	<section class='refund'>
		<settingHeader :title='title'></settingHeader>
		<div class="shop">
			<div class="fl">
				<img src="../../assets/images/shop/order_detail1.png" alt="">
			</div>
			<div class="fl" style="padding-top:0.13rem;">
				<p class='shop-name'>女装U宽腿牛仔裤(水洗产品)</p>
				<p class='shop-size'>颜色:蓝色；尺码:L/170修身</p>
			</div>
			<div class="clear"></div>
		</div>
		<div class="select">
			<group>
		      <cell title="货物状态" value="请选择" :border-intent="false" is-link></cell>
		      <cell title="退款原因" value="请选择" :border-intent="false" @click.native='test' is-link></cell>
		    </group>
		    <group class="center">
		      <cell title="退款金额" value="￥624.00" :border-intent="false"></cell>
		      <cell title="退款积分" value="2400" :border-intent="false"></cell>
		    </group>
		    <span class="prompt">最多¥624.00，含发货邮费¥0.00</span>
		    <group>
		      <cell title="退款说明" value="选填" :border-intent="false"></cell>
		    </group>
		    <group style="margin-top:0.2rem">
		      <cell title="上传凭证" :border-intent="false"></cell>
		    </group>
		</div>
		<div class="confirm" @click="goRefunddetails">
			确定
		</div>
		<div v-transfer-dom>
	      <popup v-model="show1">
	        <popup-header title="退款原因" :show-bottom-border="false"></popup-header>
	        <group gutter="0">
	        	<scroller lock-x height="200px" ref="scrollerEvent">
			      <div class="box2">
			        <radio :options="['1', '2', '3', '4','5','6','7','8']"></radio>
			      </div>
			    </scroller>
	          <div class="pay-box">
				<x-button class="add-btn" :gradients="['#1D62F0', '#19D5FD']" >确定</x-button>
			  </div>
	        </group>
	      </popup>
	    </div>
	</section>
</template>

<script>
	import settingHeader from '../../components/setting_header'
	import { PopupHeader } from 'vux'
	import { Radio } from 'vux'
	import { XButton } from 'vux'
	export default{
		data(){
			return{
				title:"申请退款",
				show1: false,
				// timer: '',
			}
		},
		components:{
			settingHeader,PopupHeader,Radio,XButton
		},
		created(){
			document.title = '申请退款';
			// var int1 = window.setInterval(this.time,1000);
		},
		methods:{
			time(){
				// var nowreduce = new Date();
				// var endreduce = new Date(Date.parse("2018/4/24 18:00:00"));
				// var leftTimereduce = parseInt((endreduce-nowreduce)/1000);
				// var day = Math.floor((leftTimereduce)/3600/24);
				// var hour = Math.floor((leftTimereduce-day*3600*24)/3600);
				// var minute = Math.floor((leftTimereduce-day*3600*24-hour*60*60)/60);
				// this.timer = day + '天' + hour + '时' + minute + '分';
				// console.log(this.timer);
				// if(day==0&&hour==0&&minute==0){
				// 	window.clearInterval(int1);
				// }
			},
			test(){
				this.show1 = true;
			},
			goRefunddetails(){
				this.$router.push({ path: '/shop/refund_details'})
			}
		}
	}
</script>

<style lang="less" scoped>
 .refund{
 	height: 100%;
 	background-color: #F5F8F9;
 	.shop{
 		border-top: 1px solid #90A2C7;
 		background-color: #fff;
		margin-bottom: 0.1rem;
		padding: 5px 0 5px 6px;
		img{
			width: 1.6rem;
			height: 1.6rem;
			margin-right: 0.2rem;
		}
		.shop-name{
			height:0.4rem; 
			font-size:0.28rem;
			font-family:PingFangSC-Medium;
			color:rgba(26,38,66,1);
			line-height:0.4rem;
			font-weight: 700;
		}
		.shop-size{
			height:0.33rem; 
			font-size:0.24rem;
			font-family:PingFangSC-Regular;
			color:rgba(144,162,199,1);
			line-height:0.33rem;
		}
 	}
 	.confirm{
 		width: 100%;
 		position: absolute;
 		bottom:0;
 		height:0.95rem;
 		text-align: center; 
		background:rgba(51,111,255,1);
		font-size:0.28rem;
		font-family:PingFangSC-Regular;
		color:rgba(255,255,255,1);
		line-height:0.95rem;
 	}
 }
</style>
<style lang="less">
	.refund{
		.vux-label{
			height:0.4rem; 
			font-size:0.28rem;
			font-family:PingFangSC-Regular;
			color:rgba(26,38,66,1);
			line-height:0.4rem;
		}
		.weui-cell__ft{
			height:0.4rem; 
			font-size:0.28rem;
			font-family:PingFangSC-Regular;
			color:rgba(144,162,199,1);
			line-height:0.4rem;
		}
		.weui-cells{
			margin-top: 0;
		}
		.weui-cell{
			padding:15px 15px;
		}
		.center{
			margin-top: 0.2rem;
			position: relative;
			.weui-cell__ft{
				color:#F23030;
			}
		}
		.prompt{
			padding-left: 15px;
			display: inline-block;
			height:0.53rem; 
			font-size:0.24rem;
			font-family:PingFangSC-Regular;
			color:rgba(144,162,199,1);
			line-height:0.53rem;
		}
	}
</style>