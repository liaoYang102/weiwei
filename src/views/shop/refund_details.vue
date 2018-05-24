<template>
	<section class="refund-details">
		<settingHeader :title="title"></settingHeader>
		<div class="message">
			<p>{{ timetitle}}</p>
			<p class="remaining">还剩{{ remainingDays}}</p>
		</div>

		<div class="details">
			<div class="person-msg" @click="$router.push({path:'/member/address/index'})">
				<img src="../../assets/images/shop/position.png">
				<div class="msg-right">
					<p>
						<span class="mr">张生</span>
						<span>18520496787</span>
					</p>
					<p class="mt">
						广东佛山市南海区桂城街道佛平路与宝翠路交 界万科金色领域界
					</p>
				</div>
				<div class="fr"><img src="../../assets/images/shop/turn_right.png" width="40%"></div>
			</div>

			<div class="msg-li">
				<li v-for="(item,index) in msglist">
					<span class="dian"></span>
					<span class="text">{{ item.text}}</span>
				</li>

				<div class="msg-btn" v-if="view == true">
					<div class="li-btn public" @click="goWriteLogistics">我已寄出</div>
					<div class="li-text">点击填写物流单号</div>
				</div>

				<div class="msg-btn" v-else>
					<div class="btns">
						<div class="li-contact public">联系卖家</div>
						<div class="li-apply public">申请售后</div>
					</div>
				</div>

			</div>
		</div>

		<div class="content">
			<ul class="ul-contents">
				<div class="ul-top">
					<div class="ul-left"><img src="../../assets/images/shop/product.png"></div>
					<div class="ul-right">
						<span>女装U宽腿牛仔裤(水洗产品)</span>
						<p>颜色:蓝色；尺码:L/170修身</p>
					</div>
				</div>

				<group gutter="0">
				    <cell-form-preview :list="list"></cell-form-preview>
				    <cell-form-preview :list="list2"></cell-form-preview>
			    </group>
			</ul>
			
		</div>
	</section>
</template>

<script>
import settingHeader from '../../components/setting_header'
export default {
	components: {
		settingHeader
	},
	data(){
		return{
			title: '退款详情',
			msglist:[
				{ text: '未与商家协商一致，请勿使用到付或平邮，以免商家拒签货物'},
				{ text: '交易的钱款在大健康中间账户，确保您的资金安全(积分不返还)'},
				{ text: '请填写真实物流信息，逾期未填写，退货申请撤销'}
			],
			list: [
				{ label: '退款原因', value:'尺码拍错/不喜欢'},
				{ label: '退款金额', value:'¥624.00'},
				{ label: '申请件数', value:'1'}
			],
			list2: [
				{ label: '申请时间', value:'2018-03-17 11:44:21'},
				{ label: '退款编号', value:'3242572342423232'}
			],
			view: true,
			timetitle: '请退货并填写物流信息',
			remainingDays: ''
		}
	},
	mounted:function(){
		var int1 = window.setInterval(this.changeDate,60000);
	    this.changeDate();
	},
	methods:{
		changeDate(){
			var nowreduce = new Date();
			var endreduce = new Date(Date.parse("2018/6/24 18:00:00"));
			var leftTimereduce = parseInt((endreduce-nowreduce)/1000);
			var day = Math.floor((leftTimereduce)/3600/24);
			var hour = Math.floor((leftTimereduce-day*3600*24)/3600);
			var minute = Math.floor((leftTimereduce-day*3600*24-hour*60*60)/60);
			this.remainingDays = day + '天' + hour + '时' + minute + '分';
			console.log(this.remainingDays);
			if(day==0&&hour==0&&minute==0){
				this.timetitle = '退货已超时'
				this.remainingDays = '您在一周内未填写物流订单号'
				this.view = false
				window.clearInterval(int1);
			}
		},
		goWriteLogistics(){
			this.$router.push({ path:'/shop/write_logistics'})
		}
	}
}
</script>

<style lang="less" scoped>
.refund-details{
	background: #F5F6FA;
	.message{
		width: 100%;
		background: #336FFF;
		height: 1.7rem;
		color: #fff;
		font-size: 0.32rem;
		text-align: center;
		p{
			padding-top: 0.26rem;
		}
		.remaining{
			padding-top: 0.15rem;
		}
	}
	.details{
		width: 100%;
		background: #fff;
		padding-bottom: 0.26rem;
		.person-msg{
			margin-left: 0.2rem;
			border-bottom: 0.01rem solid #D8DFF0;
			margin-right: 0.2rem;
			overflow: hidden;
			padding-bottom: 0.4rem;
			img{
				float: left;
				vertical-align: middle;
				margin-right: 0.24rem;
				margin-top: 0.9rem;
			}
			.msg-right{
				float: left;
				width: 80%;
				color: #333333;
				font-size: 0.28rem;
				margin-top: 0.31rem;
				.mr{
					display: inline-block;
					margin-right: 0.14rem;
				}
				.mt{
					margin-top: 0.15rem;
				}
			}
		}
		.msg-li{
			clear: both;
			padding-top: 0.25rem;
			margin-left: 0.2rem;
			margin-right: 0.2rem;
			li{
				color: #90A2C7;
				font-size: 0.3rem;
				margin-bottom: 0.12rem;
				list-style: none;
				.dian{
					display: inline-block;
					width: 0.12rem;
					height: 0.12rem;
					background-color: #90A2C7;
					border-radius: 50%;
					content: '';
					margin-right: 0.1rem;
				}
				.text{
					/*position: relative;*/
					/*left: -0.18rem;*/
					font-size: 0.24rem;
					/*display: inline-block;*/
				}
			}
			.msg-btn{
				overflow: hidden;
				.public{
					width: 2.4rem; 
					border-radius: 0.1rem; 
					text-align: center;
					font-size: 0.32rem;
					padding: 0.12rem 0;
				}
				.li-btn{
					margin: 0.8rem auto 0.1rem auto;
					color: #336FFF;
					border: 0.01rem solid #336FFF;
				}
				.li-text{
					font-size: 0.24rem;
					color: #90A2C7;
					text-align: center;
				}
				.btns{
					margin: 0.8rem auto 0 auto;
					padding-bottom: 0.42rem;
					width: 75%;
					overflow: hidden;
					.li-contact{
						float: left;
						color: #90A2C7;
						border: 0.01rem solid #90A2C7;
						margin-right: 0.28rem;
					}
					.li-apply{
						float: left;
						color: #336FFF;
						border: 0.01rem solid #336FFF;
					}
				}
				
			}
		}
	}

	.content{
		clear: both;
		width: 100%;
		overflow: auto;
		padding-bottom: 0.48rem;
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
					span{
						margin-top: 0.18rem;
					}
					p{
						font-size: 0.24rem;
						color: #90A2C7;
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
}
</style>

<style lang="less">
.ul-contents .weui-cells{
	margin-top: 0;
}
.ul-contents .weui-form-preview__item{
	margin-top: 0.18rem;
}
.ul-contents .weui-form-preview__bd{
	color: #1A2642;
}
.ul-contents .weui-cells:before{
	border-top: none;
}
.ul-contents .weui-form-preview__label{
	color: #90A2C7;
	text-align: left;
	text-align-last: left;
	font-size: 0.28rem;
}
.ul-contents .weui-form-preview__value{
	margin-right: 0.44rem;
	font-size: 0.28rem;
}
</style>