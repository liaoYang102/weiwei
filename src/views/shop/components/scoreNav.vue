<template>
	<div class="score-nav" v-model="scoreTitle">
		<div class="score-top" v-if="title == '信用积分购'">
			<div class="score-title">{{ title}}</div>
			<div class="score-btn" @click="goAllshop">
				<span>全场包邮，积分全额兑换</span>
				<img src="../../../assets/images/shop/arrow.png">
			</div>
			<div class="score-rules" @click="$router.push({path:'/member/score/strategy'})">
				<span>积分规则</span>
				<img src="../../../assets/images/shop/doubt.png">
			</div>
		</div>
		<div class="colorful-top" v-else></div>
		<div class="score-list">
			<li class="score-li" v-for="(item, index) in scorelist" @click="goShopdetails">
				<div class="img" v-if="title == '信用积分购'"><img src="../../../assets/images/shop/1.png"></div>
				<div class="img" v-else><img src="../../../assets/images/shop/shop01.png"></div>
				<div class="li-text">
					<span>{{ item.title}}</span>
					<div v-if="title == '七彩云南'" class="pb">
						<span class="red">{{ item.score}}</span>
						<span class="coupons">信用积分</span>
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
					{ title: '昆大丽六日五夜', score: '1000积分', money: '199.67元'},
					{ title: '港澳海洋公园', score: '1000积分', money: '199.67元'},
					{ title: '云南三人豪华游', score: '1000积分', money: '199.67元'}
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
				if(vm.title == '七彩云南'){
					vm.scorelist = [
						{ title: '昆大丽六日五夜', score: '1000积分', money: '199.67元'},
						{ title: '港澳海洋公园', score: '1000积分', money: '199.67元'},
						{ title: '云南三人豪华游', score: '1000积分', money: '199.67元'}
					]
				}else{
					vm.scorelist = [
						{ title: '美国进口吹风机', score: '1000积分', money: '199.67元'},
						{ title: '心相印柔卷纸', score: '1000积分', money: '199.67元'},
						{ title: 'Dove多芬止汗喷雾', score: '1000积分', money: '199.67元'}
					]
				}
			},
			goAllshop(){
				let title = this.title.slice(2);
				this.$router.push({ name: 'all_shops', params: { title }})
			},
			goShopdetails(){
				this.$router.push({ path: '/shop/shop_details'})
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
		background: url('../../../assets/images/shop/scorebg1.png') no-repeat;
		height: 3.2rem;
		color: #fff;
		background-size: 100%;
		.score-title{
			text-align: center;
			font-size: 0.34rem;
			padding-top: 0.24rem;
			padding-bottom: 0.17rem;
		}
		.score-btn{
			width: 40%;
			border: 1px solid #FFFFFF;
			border-radius: 1rem;
			font-size: 0.24rem;
			padding: 0.05rem 0.1rem 0.05rem 0.25rem;
			margin: 0 auto;
			img{
				width: 5%;
				margin-left: 0.05rem;
			}
		}
		.score-rules{
			position: absolute;
			top: 0.76rem;
			right: 0;
			font-size: 0.24rem;
			margin-bottom: 0.31rem;
			img{
				width: 16%;
				vertical-align:middle;
				margin-left: 0.03rem;
				margin-right: 0.1rem;
				margin-top: -0.02rem;
			}
		}
	}
	.colorful-top{
		position: relative;
		height: 3.2rem;
		background: url('../../../assets/images/shop/colorful.png') no-repeat;
		color: #fff;
		background-size: 100%;
	}
	.score-list{
		position: absolute;
		top: 1.6rem;
		z-index: 2;
		padding-left: 0.2rem;
		.score-li{
			float: left;
			width: 32%;
			margin-right: 0.04rem;
			box-shadow: 0 0.02rem 0.1rem 0 rgba(102,102,102,0.20);
			.img{
				vertical-align: middle;
				text-align: center;
				padding: 0.12rem;
				img{
					width: 100%;
				}
			}
			.li-text{
				padding-left: 0.12rem;
				padding-bottom: 0.32rem;
				.pb{
					padding-top: 0.12rem;
					.red{
						/*float: left;*/
						color: #F23030;
						font-size: 0.24rem;
						/*margin-top: 0.12rem;
						margin-right: 0.22rem;*/
					}
					.coupons{
						/*float: left;*/
						/*background: rgba(56,137,255,0.20);*/
						font-size: 0.2rem;
						color: #61719F;
						/*margin-top: 0.13rem;*/
						/*padding-left: 0.1rem;*/
						/*padding-right: 0.06rem;
						padding-top: 0.02rem;
						margin-right: 0.12rem;*/
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