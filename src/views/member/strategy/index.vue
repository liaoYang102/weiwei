<template>
	<section class="strategy">
		<settingHeader :title="title"></settingHeader>
		<img src="../../../assets/images/member/strategyBg.png" width="100%">
		

		<div class="content">
			<div class="title">
				<div class="diamond"></div>
				<p>如何获得积分</p>
				<div class="diamond2"></div>
			</div>
			<div class="box" v-for="(item,index) in strategyList" :key="index">
				<div class="img"><img :src="item.img"></div>
				<div class="flex right">
					<div class="flex">
						<p>{{ item.title}}</p>
						<p class="text mt">{{item.content}}</p>
					</div>
					<div><img src="../../../assets/images/member/nextPage.png"></div>
				</div>
			</div>
		</div>

		<div class="content">
			<div class="title">
				<div class="diamond"></div>
				<p>关于积分</p>
				<div class="diamond2"></div>
			</div>
			<div class="box2">
				
			</div>
		</div>
	</section>
</template>


<script>
	import settingHeader from '../../../components/setting_header'
	export default {
		components: {
			settingHeader
		},
		data(){
        	return {
        		title:'赚钱攻略',
        		strategyList:[
        			{title: '消费购物', content: '交易成功后，获得实付金额20%的通用积分', img: './static/member/xfgw.png'},
        			{title: '幸运抽奖', content: '消费参加抽奖，大奖可抽得5000通用积分', img: './static/member/xycj.png'},
        			{title: '推荐分享', content: '会员分享可以获得消费金额10%的通用积分', img: './static/member/tjfx.png'},
        			{title: '充值有奖', content: '会员在e消费APP充值，获得等值信用积分', img: './static/member/czyj.png'}

        		]
        	}
        },
        methods: {},

	}
</script>

<style lang="less" scoped>
	.strategy{
		background: #fff;
		.flex{
			flex: 1;
		}
		.content{
			padding: 0.6rem 0 0.24rem 0;
			color: #1A2642;
			font-size: 0.32rem;
			.mt{
				margin-top: 0.18rem;
			}
			.text{
				color: #90A2C7;
				font-size: 0.24rem;
			}
			.title{
				position: relative;
				text-align: center;
				padding-bottom: 0.66rem;
				font-size: 0.36rem;
				.diamond{
					position: absolute;
					width: 0.18rem;
					height: 0.18rem;
					background:linear-gradient(70deg,#7EE8FF,#336FFF);
					transform:rotate(45deg);
					top: 0.15rem;
					left: 30%;
				}
				.diamond2{
					position: absolute;
					width: 0.18rem;
					height: 0.18rem;
					background:linear-gradient(70deg,#7EE8FF,#336FFF);
					transform:rotate(45deg);
					top: 0.15rem;
					right: 31%;
				}
			}
			.box{
				display: flex;
				margin-left: 0.29rem;
				margin-bottom: 0.29rem;
				.img{
					width: 1rem;
					margin-right: 0.25rem;
					img{
						width: 100%;
					}
				}
				.right{
					display: flex;
					border-bottom: 1px solid #D9DCF8;
					padding-bottom: 0.35rem;
					align-items: center;
					justify-content: center;
					margin-top: 0.09rem;
					img{
						width: 50%;
						display: inline-block;
						margin: auto;
					}
				}
			}
			.box:last-child .right{
				border-bottom: none;
			}

			.box2{
				
			}
		}
	}
</style>