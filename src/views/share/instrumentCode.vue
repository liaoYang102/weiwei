<template>
	<section style="height: 100%;background: #fff;">
		<div class="wrapper" ref="wrapper">
			<div class="content">
				<settingHeader :title="title"></settingHeader>
				<div class="top">
					<div class="left">
						<p>德国专利威伐光 <span>No:566</span></p>
						<p class="tag">威伐光-750w</p>
						<div class="p3"> 
							<span>广东成高成数据集团</span> 
							<p class="arrow"></p>
						</div>
					</div>
					<div class="right">
						<div>
							<img src="../../assets/images/share/pd.png">
							<span>产品简介</span>
						</div>
						<div>
							<img src="../../assets/images/share/direction.png">
							<span>使用指导</span>
						</div>
					</div>
				</div>

				<div class="codeTitle">
					<p>可使用通用积分付款</p>
					<div class="forword"> 
						<span>前往充值</span>
						<img src="../../assets/images/share/arrow.png">
					</div>
				</div>

				<div class="price">
					<div class="select">请选择价格套餐</div>
					<div class="item" v-for="(item,index) in priceSetList">
						<div class="left">
							<p>{{ item.time}}分钟</p>
							<p>{{ item.type}}</p>
						</div>
						<div class="right">
							<div class="money">
								<p>{{ item.money}} <span>元</span></p>
								<p>{{ item.content}}</p>
							</div>
							<div class="purchase">购买</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import settingHeader from '../../components/setting_header'
	import BScroll from 'better-scroll'
	export default {
		data() {
			return {
				title:"仪器扫码",
				priceSetList:[
					{
						time: '30',
						type: '单人套餐',
						money: 120,
						content: '消费奖励通用积分'
					},
					{
						time: '60',
						type: '单人套餐',
						money: 240,
						content: '消费奖励通用积分'
					},
					{
						time: '40',
						type: '单人套餐',
						money: 160,
						content: '消费奖励通用积分'
					},
					{
						time: '50',
						type: '单人套餐',
						money: 200,
						content: '消费奖励通用积分'
					}
				]
			}
				
		},
		components:{
			settingHeader,
		},
		/*created(){

		},*/
		mounted(){
			this.InitScroll()
		},
		computed:{
			
		},
		methods:{
			InitScroll() {
			 	this.$nextTick(() => {
			 		if(!this.scroll) {
			 			this.scroll = new BScroll(this.$refs.wrapper, {
			 				click: true,
			 				scrollY: true,
			 				pullUpLoad: {
			 					threshold: 0, // 负值是当上拉到超过低部 70px；正值是距离底部距离 时，                    
			 				}
			 			})
			 		} else {
			 			this.scroll.refresh()
			 		}
			 	})
			}
		}
	}
</script>

<style lang="less" scoped>
	.wrapper{
		height: 100%;
		overflow: hidden;
	}
	.top{
		height: 3rem;
		background:linear-gradient(-90deg,rgba(71,172,255,1),rgba(34,116,255,1));
		display: flex;
		color: #fff;
		font-size: 0.24rem;
		.left{
			flex: 1;
			margin: 0.55rem 0.2rem 0.9rem 0.41rem;
			p:nth-child(1){
				font-size: 0.36rem;
				line-height: 0.5rem;
				span{
					font-size: 0.24rem;
				}
			}
			.tag{
				width:1.6rem;
				padding: 1px 0;
				background:rgba(255,255,255,0.2);
				border-radius:4px;
				line-height: 0.36rem;
				color: #fff;
				text-align: center;
				margin-top: 0.1rem;
			}
			.p3{
				margin-top: 0.19rem;
				font-size: 0.28rem;
				line-height: 0.4rem;
			}
			.arrow{
				width: 7px;
			    height: 7px;
			    border-top: 1px solid #ffffff;
			    border-right: 1px solid #ffffff;
			    transform: rotate(45deg);
			    display: inline-block;
			    margin-top: -1px;
			}
		}
		.right{
			display: flex;
			margin: 0.9rem 0 0 0;
			font-size: 0.22rem;
			div{
				flex: 1;
				text-align: center;
				img{
					width: 50%;
					display: block;
					margin: 0 auto;
					margin-bottom: 0.11rem;
					vertical-align: middle;
				}
			}
		}
	}

	.codeTitle{
		background: #D6E2FF;
		height: 0.8rem;
		display: flex;
		color: #336FFF;
		font-size: 0.28rem;
		line-height: 0.8rem;
		p{
			flex: 1;
			margin-left: 0.24rem;
		}
		.forword{
			margin-right: 0.24rem;
			img{
				vertical-align: middle;
				width: 13%;
			}
		}
	}

	.price{
		background: #fff;
		font-size: 0.24rem;
		color: #1A2642;
		.select{
			padding: 0.23rem 0 0.23rem 0.24rem;
			font-size: 0.32rem;
			border-bottom: 1px solid #D8DFF0;
		}
		.item{
			display: flex;
			border-bottom: 1px solid #D8DFF0;
			padding: 0.19rem 0.3rem;
			.left{
				flex: 1;
				p:nth-child(1){
					font-size: 0.38rem;
					margin-bottom: 0.11rem;
				}
				p:nth-child(2){
					line-height: 0.33rem;
				}
			}
			.right{
				display: flex;
				.money{
					flex: 1;
					text-align: right;
					p:nth-child(1){
						color: #FF5365;
						font-size: 0.42rem;
						margin-bottom: 0.1rem;
						span{
							font-size: 0.24rem;
						}
					}
					p:nth-child(2){
						color: #336FFF;
					}
				}
				.purchase{
					margin: auto;
					margin-left: 0.4rem;
					width:0.9rem;
					height:0.56rem;
					border-radius:0.28rem;
					border:1px solid rgba(255,83,101,1);
					text-align: center;
					color: #FF5365;
					line-height: 0.56rem;

				}
			}
		}
	}
</style>