<template>
	<div class="score-nav" v-model="scoreTitle">
		<div class="score-top">
			<div class="score-title">{{ title}}</div>
			<div class="score-btn">
				<span>全场包邮，积分全额兑换</span>
				<img src="../../../assets/images/shop/arrow.png">
			</div>
			<div class="score-rules">
				<span>积分规则</span>
				<img src="../../../assets/images/shop/doubt.png">
			</div>
		</div>
		<div class="score-list">
			<li class="score-li" v-for="(item, index) in scorelist">
				<div class="img"><img src="../../../assets/images/shop/1.png"></div>
				<div class="li-text">
					<span>{{ item.title}}</span>
					<div v-if="title == '信用积分兑'" class="pb">
						<div class="red">{{ item.score}}</div>
						<div class="coupons">优惠券</div>
					</div>

					<div v-else>
						<div class="li-red">{{item.score}}+{{item.money}}</div>
					</div>
					
				</div>
			</li>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			scoreTitle: String
		},
		data(){
			return {
				scorelist: [
					{ title: '飞利浦剃须刀', score: '1000积分', money: '199.67元'},
					{ title: '飞利浦剃须刀', score: '1000积分', money: '199.67元'},
					{ title: '飞利浦剃须刀', score: '1000积分', money: '199.67元'}
				],
				title: ''
			}
		},
		mounted:function(){
        	this.onList()
    	},	
		methods:{
			onList(){
				let vm = this;
				vm.title = vm.scoreTitle;
				console.log('---', vm.title)
			}
		}
	}
</script>

<style lang="less" scoped>
li{
	list-style: none;
	background: #FFFFFF;
	box-shadow: 0 0.02rem 0.1rem 0 rgba(102,102,102,0.20);
	font-size: 0.24rem;
	color: #222222;
}
.score-nav{
	position: relative;
	background: #f5f6fa;
	width: 100%;
	padding-bottom: 2rem;
	.score-top{
		position: relative;
		z-index: 0;
		background: url('../../../assets/images/shop/scorebg.png') no-repeat;
		height: 3.2rem;
		color: #fff;
		.score-title{
			text-align: center;
			font-size: 0.34rem;
			padding-top: 0.24rem;
			padding-bottom: 0.17rem;
		}
		.score-btn{
			width: 3rem;
			border: 0.02rem solid #FFFFFF;
			border-radius: 1rem;
			font-size: 0.24rem;
			padding: 0.05rem 0 0.05rem 0.25rem;
			margin: 0 auto;
			img{
				width: 5%;
			}
		}
		.score-rules{
			position: absolute;
			top: 0.76rem;
			left: 80.7%;
			font-size: 0.24rem;
			margin-bottom: 0.31rem;
			img{
				width: 18%;
				vertical-align:middle;
				margin-left: 0.03rem;
				margin-right: 0.1rem;
			}
		}
	}
	.score-list{
		position: absolute;
		top: 1.6rem;
		z-index: 2;
		padding-left: 0.2rem;
		.score-li{
			float: left;
			width: 2.34rem;
			margin-right: 0.04rem;
			box-shadow: 0 0.02rem 0.1rem 0 rgba(102,102,102,0.20);
			.img{
				vertical-align: middle;
				text-align: center;
				img{
					width: 100%;
				}
			}
			.li-text{
				padding-left: 0.12rem;
				padding-bottom: 0.32rem;
				.pb{
					margin-bottom: 0.32rem;
					.red{
						float: left;
						color: #F23030;
						margin-top: 0.12rem;
						margin-right: 0.22rem;
					}
					.coupons{
						float: left;
						background: rgba(56,137,255,0.20);
						font-size: 0.2rem;
						color: #3889FF;
						margin-top: 0.12rem;
						padding-left: 0.07rem;
						padding-right: 0.06rem;
						margin-right: 0.12rem;
					}
				}
				
				.li-red{
					margin-top: 0.14rem;
					color: #F23030;
					font-size: 0.22rem;
				}
			}
			
		}
		
	}
}
</style>