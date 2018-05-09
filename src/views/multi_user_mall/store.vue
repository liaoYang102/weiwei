<template>
	<section class='store'>
		<!-- <settingHeader :title='title'></settingHeader> -->
		<div class="shop">
			<div class="fl">
				<img src="../../assets/images/shop/UNIQLO.png" alt="">
			</div>
			<div class="fl" style="padding-top:0.13rem;">
				<p class='shop-name'>优衣库番禺店</p>
				<p class='shop-size'>3.8w关注</p>
			</div>
			<div class="clear"></div>
		</div>
		<div class="select">
			<group>
		      <cell title="店铺号" value="10552555" :border-intent="false"></cell>
		      <cell title="开店时间" value="2015-12-06 20:24:22" :border-intent="false"></cell>
		      <cell title="好评率" value="99.5%" :border-intent="false"></cell>
		    </group>
		    <group class="center">
		    	<router-link to='/multi_user_mall/store_qrcode'>
    		      	<cell title="店铺二维码" value="￥624.00" :border-intent="false" is-link class="code" >
    					<img src="../../assets/images/multi_user_mall/qrcode.png" alt="">
    		      	</cell>
		    	</router-link>
		      <cell title="店铺名" value="优衣库" :border-intent="false"></cell>
		      <cell title="服务电话" value="130293840592" :border-intent="false"></cell>
		    </group>
		    <!-- <group>
		      <cell title="退款说明" value="选填" :border-intent="false"></cell>
		    </group> -->
		    <group style="margin-top:0.2rem">
		      <cell title="店铺地址" :border-intent="false" is-link></cell>
		    </group>
		</div>
	</section>
</template>

<script>
	// import settingHeader from '../../components/setting_header'
	import { PopupHeader } from 'vux'
	import { Radio } from 'vux'
	export default{
		data(){
			return{
				title:"店铺信息",
				show1: false,
				// timer: '',
			}
		},
		components:{
			PopupHeader,Radio
		},
		created(){
			// document.title = '店铺信息';
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
		}
	}
</script>

<style lang="less" scoped>
 .store{
 	background-color: #F5F8F9;
 	.shop{
 		border-top: 1px solid #E1E1E1;
 		background-color: #fff;
		margin-bottom: 0.2rem;
		padding: 0.25rem 0 0.25rem 0.5rem;
		img{
			width: 1rem;
			height: 1rem;
			margin-right: 0.12rem;
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
 }
</style>
<style lang="less">
	.store{
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
			color:#1A2642;
			line-height:0.4rem;
		}
		.weui-cell_access .weui-cell__ft:after{
			border-color:#1A2642;
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
				color:#1A2642;
			}
			.code{
				.weui-cell__ft{
					padding-right: 30px;
				}
			}
			img{
				width: 0.36rem;
				height: 0.36rem;
			}
		}
	}
</style>