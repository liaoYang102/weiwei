<template>
	<section>
		<settingHeader :title="title"></settingHeader>
		<div class="head">
			<div class="info">
				<span class="name fl">张生</span>
				<span class="phone fl">18520496787</span>
				<div class="clear"></div>
			</div>
			<div class="address">
				<img src="../../assets/images/shop/address.png" alt="">
				<span class='details'>广东佛山市南海区桂城街道佛平路与宝翠路交界万科金色领域界</span>
				<span class="arrow fr">></span>
			</div>
		</div>
		<div v-transfer-dom>
	      <popup v-model="show9" position="bottom">
	        <div style="height:5.38rem;background-color:white" class='popup'>
	        	<div class="popupTop">
					<span class="fl">X</span>
					<span class="fr">选择支付方式</span>
	        	</div>
	        	<ul>
					<li>
						<div class='fl wechat'></div>
						<span class="fl">微信支付</span>
						<check-icon :value.sync="demo1" class='fr'></check-icon>
						<div class="clear"></div>
					</li>
					<li>
						<div class='fl wechat'></div>
						<span class="fl">余额支付</span>
						<check-icon :value.sync="demo2" class='fr'></check-icon>
						<div class="clear"></div>
					</li>
	        	</ul>
	        	<div class="btn" @click="goShopsuccess">立即支付</div>
	        </div>
	      </popup>
	    </div>
		<div class="shops">
			<group style='margin-bottom:0.38rem;'>
                <cell title="优衣库旗舰店" is-link :border-intent="false" >
			        <img slot="icon" width="20" style="display:block;margin-right:5px;" >
			    </cell>
                <div class="shopInfo">
					<img src="../../assets/images/shop/product.png" alt="" class='fl'>
					<div class='fl' style='padding-top:0.1rem;'>
						<p class="shopName">女装U宽腿牛仔裤(水洗产品)</p>
						<p class="shopSize">颜色:蓝色；尺码:L/170修身 <span class="fr">X4</span></p>
						<p class="shopPrice"><span class="priceNum">￥3598</span> <span class="shopAcount">+266积分</span></p>
					</div>
					<div class="clear"></div>
                </div>
                <cell title="店铺优惠" value="省10元：100减5" :border-intent="false"></cell>
                <cell :border-intent="false">
					<span slot="title" style="color:#F23030;">CGC通用余额抵扣</span>
					<span class="banlance" style='font-size: 0.24rem;color: #90A2C7;'><x-switch title="余额: ￥23400" sytle="padding-right: 0 !important;"></x-switch></span>

                </cell>
                <cell title="兑换方式" value="积分+现金" :border-intent="false"></cell>
                <cell title="配送方式" value="统一运费(10.00元)" :border-intent="false"></cell>
                <cell title="积分" value="100积分" :border-intent="false"></cell>
                <cell title="现金" value="20元" :border-intent="false"></cell>
                <div class="leave">
					<span class="message">卖家留言</span>
					<input type="text" placeholder='选填:填写内容已和卖家协商确认' style="width: 55%;font-size: 0.24rem">
                </div>
            </group>
		</div>
		<div class="submit">
			<div class="total fl">
				共 <span class='color'>1</span> 件，总计：<span class="totalNum">¥3598</span><span class="totalAccount">+266积分</span>
			</div>
			<div class="confirmSumbit fr" @click='popup'>确认提交</div>
			<div class="clear"></div>
		</div>
	</section>
</template>

<script>
import settingHeader from '../../components/setting_header'
export default {
	data(){
		return {
			show: false,
			title:'确认订单',
			show9:false,
			demo1: true,
			demo2: false,
		}
	},
	components:{
		settingHeader
	},
	methods:{
		popup(){
			this.show9 = true;
		},
		goShopsuccess(){
			this.$router.push({ path:'/shop/o_success'})
		}
	}
}
</script>

<style lang='less' scoped>
	.popup{
		position: relative;
		.popupTop{
			line-height: 1rem;
			height: 1rem;
			padding-left: 0.46rem;
			padding-right: 0.25rem;
			border-bottom: 1px solid #e1e1e1;
			.fl{
				color: #9B9B9B;
				font-size: 0.28rem;
			}
			.fr{
				font-size: 0.28rem;
				color: #222222;
			}
		}
		ul{
			padding-left: 0.3rem;
			li{
				padding-left: 0.11rem;
				padding-top: 0.4rem;
				padding-bottom: 0.4rem;
				border-bottom: 1px solid #E1E1E1;
				.wechat{
					width: 0.5rem;
					height: 0.46rem;
					background-color: #00CA20;
					margin-right: 0.33rem;
				}
				span{
					font-size: 0.32rem;
					color: #222222;
				}
			}
		}
		.btn{
			width: 100%;
			text-align: center;
			position: absolute;
			height: 0.9rem;
			line-height: 0.9rem;
			bottom:0;
			background-image: linear-gradient(238deg, #5EC3FF 0%, #106FE3 100%);
			font-size: 0.28rem;
			color: #FFFFFF;
		}
	}
	section{
		background-color: #f5f6fa;
	}
	.head{
		background-color: #fff;
		border-top: 1px solid #E1E1E1;
		width: 100%;
		height: 1.92rem;
		margin-bottom: 0.2rem;
		.info{
			padding-top: 0.31rem;
			padding-left: 0.74rem;
			margin-bottom: 0.15rem;
			.name{
				font-size: 0.28rem;
				color: #333333;
				margin-right: 0.41rem;
			}
			.phone{
				font-size: 0.28rem;
				color: #333333;
			}
		}
		.address{
			padding-left: 0.24rem;
			img{
				vertical-align: top;
				width: 0.32rem;
				height: 0.32rem;
				margin-right: 0.08rem;
			}
			.details{
				display: inline-block;
				word-wrap:break-word;
				width: 5.6rem;
				height: auto;
				font-size: 0.28rem;
				color: #333333;
			}
			.arrow{
				color:#CFCFCF;
				font-size:0.28rem;
				margin-right: 0.44rem;
			}
		}
	}
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
	.leave{
		border-top: 1px solid #D9D9D9;
		padding: 12px 15px;
		.message{
			font-size: 0.3rem;
			color: #222222;
			margin-right: 0.27rem;
		}
	}
	.submit{
		width: 100%;
		.total{
			background-color: #fff;
			width: 4.4rem;
			padding-left: 0.7rem;
			line-height: 1.05rem;
			font-size: 0.28rem;
			color:#222;
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
			height: 1.05rem;
			line-height: 1.05rem;
			text-align: center;
			background: #336FFF;
			font-size: 0.28rem;
			color: #FFFFFF;
		}
	}
</style>
<style lang='less'>
.shops .weui-cells{
	margin-top: 0 !important;
}
.shops .vux-no-group-title{
	margin-top: 0 !important;
}
.shops .weui-cell_switch{
	    padding-right: 0!important;
	}
.shops .weui-label{
		width: 8em!important;
		margin-right: 0.2rem;
	}
.shops .weui-icon-success{
		float: right;
		margin-right: 0.25rem;
	}
.shops .weui-icon-circle{
		float: right;
		margin-right: 0.25rem;
	}
.shops .vux-number-input{
		border: none!important;
		font-size: 0.28rem!important;
		color:#333!important;
	}
.shops .vux-number-selector{
		color:#222!important;
		background: #F5F5F5!important;
	}
.shops .vux-number-selector svg{
		fill:#222!important;
	}
.shops .vux-label{
		color:#222;
	}
.shops .weui-cell__ft{
		color: #1A2642!important;
	}
.shops .weui-cell{
		padding: 0.15rem 0.15rem;
	}
</style>