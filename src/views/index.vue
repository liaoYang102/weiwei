<template>
	<section id="appIndex">
		<div class="wrapper" ref="wrapper">
			<div class="content">
				<swiper :options="swiperOption" class="swiper">
			        <swiper-slide v-for="item in demoList">
			        	<img :src="item">
			        </swiper-slide>
			        <div class="swiper-pagination" slot="pagination"></div>
		        </swiper>
		        <div class="swiperTop">
					<span class="position fl">
						<img src="../assets/images/index/position.png" alt="">
						<span class="city">广州</span>
					</span>
					<div class="search fl">
						<input type="text" placeholder='搜索你想要的' />
						<img src="../assets/images/index/search.png" alt="">
					</div>
		        </div>
		        <div class="notice">
					<img src="../assets/images/index/notice.png" alt="">
					<swiper :options="noticeOption" class="noticeswiper">
				        <swiper-slide v-for="item in num">
				        	<p class="noticeText">
								<span class="label">活动</span>
								厉害了！超强拼假省钱攻略
				        	</p>
				        	<p class="noticeText">
								<span class="label">活动</span>
								厉害了！超强拼假省钱攻略
				        	</p>
				        </swiper-slide>
			        </swiper>
		        </div>
		        <div class="lottery">
					<img src="../assets/images/index/group.png" alt="">
					<div class="info">
						<p class="infoText">
							<img src="../assets/images/index/time.png" alt="" class="fl">
							<span class="core fl">恭喜500人获得<span class="orange">5000元</span>大奖</span>
							<span class="past fr">往期</span>
						</p>
						<div class="avatar">
							<div class="row" v-for="item in num">
								<div class="persol">
									<img src="../assets/images/index/time.png" alt="" class="fl">
									<div class="fl">
										<p class="persolName">余先生</p>
										<p class="persolPrice">5000元</p>
									</div>
									<div class="clear"></div>
								</div>
								<div class="persol">
									<img src="../assets/images/index/time.png" alt="" class="fl">
									<div class="fl">
										<p class="persolName">余先生</p>
										<p class="persolPrice">5000元</p>
									</div>
									<div class="clear"></div>
								</div>
								<div class="persol">
									<img src="../assets/images/index/time.png" alt="" class="fl">
									<div class="fl">
										<p class="persolName">余先生</p>
										<p class="persolPrice">5000元</p>
									</div>
									<div class="clear"></div>
								</div>
							</div>
						</div>
					</div>
		        </div>
		        <div class="plate">
					<div class="flex fl" v-for="item in 4">
						<img src="../assets/images/index/time.png" alt="" class="fl">
						<div class="fl">
							<p class="top">邀请有奖</p>
							<p class="bottom">送200信用积分</p>
						</div>
					</div>
					<div class="clear"></div>
		        </div>
		        <div class="alliance">
					<img src="https://img1.360buyimg.com/da/s750x366_jfs/t17776/179/1756407821/231537/470e3442/5ad9b0a3N5573c82c.jpg!cr_1125x549_0_72.dpg" alt="">
					<ul>
						
					</ul>
		        </div>
			</div>
		</div>
	</section>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default{
	data(){
		return{
			num:5,
			swiperOption :{
				pagination:{
					el:'.swiper-pagination'
				},
				autoplay: true,
				loop:true
			},
			noticeOption:{
				direction: 'vertical',
				autoplay: true,
				loop:true
			},
			demoList:[
				'https://img1.360buyimg.com/da/s750x366_jfs/t17776/179/1756407821/231537/470e3442/5ad9b0a3N5573c82c.jpg!cr_1125x549_0_72.dpg',
				'https://img1.360buyimg.com/da/s750x366_jfs/t17776/179/1756407821/231537/470e3442/5ad9b0a3N5573c82c.jpg!cr_1125x549_0_72.dpg',
				'https://img1.360buyimg.com/da/s750x366_jfs/t17776/179/1756407821/231537/470e3442/5ad9b0a3N5573c82c.jpg!cr_1125x549_0_72.dpg',
				'https://img1.360buyimg.com/da/s750x366_jfs/t17776/179/1756407821/231537/470e3442/5ad9b0a3N5573c82c.jpg!cr_1125x549_0_72.dpg',
				'https://img1.360buyimg.com/da/s750x366_jfs/t17776/179/1756407821/231537/470e3442/5ad9b0a3N5573c82c.jpg!cr_1125x549_0_72.dpg',
				'https://img1.360buyimg.com/da/s750x366_jfs/t17776/179/1756407821/231537/470e3442/5ad9b0a3N5573c82c.jpg!cr_1125x549_0_72.dpg',
				'https://img1.360buyimg.com/da/s750x366_jfs/t17776/179/1756407821/231537/470e3442/5ad9b0a3N5573c82c.jpg!cr_1125x549_0_72.dpg',
				'https://img1.360buyimg.com/da/s750x366_jfs/t17776/179/1756407821/231537/470e3442/5ad9b0a3N5573c82c.jpg!cr_1125x549_0_72.dpg',
			],
		}
	},
	components: {
		swiper,
		swiperSlide
	},
}
</script>


<style lang="less" scoped>
	#appIndex{
		/*banner顶部*/
		.swiperTop{
			z-index: 1000;
			width:100%;
			height:0.88rem; 
			line-height: 0.88rem;
			position: absolute;
			top: 0;
			.position{
				margin-left: 0.42rem;
				margin-right: 0.42rem;
				img{
					width:0.22rem;
					height: 0.28rem;
					vertical-align: middle;
				}
				.city{
					font-size:0.24rem;
					color:#FFFFFF;
				}
			}
			.search{
				position: relative;
				input{
					width: 4.14rem;
					height: 0.54rem;
					border-radius: 0.27rem;
					background-color: #808080;
					color:#fff;
					padding-left:0.64rem; 
					font-size: 0.24rem;
					opacity: 0.5;
					letter-spacing: 1px;
				}
				input::-webkit-input-placeholder{
		            color:#fff;;
		        }
		        input::-moz-placeholder{   /* Mozilla Firefox 19+ */
		            color:#fff;;
		        }
		        input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
		            color:#fff;;
		        }
		        input:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
		            color:#fff;;
		        }
				img{
					width: 0.32rem;
					height: 0.32rem;
					position: absolute;
					top: 0.3rem;
					left: 0.24rem;
				}
			}
		}
		/*通告模块*/
		.notice{
			width: 100%;
			height: 0.95rem;
			margin-bottom: 0.2rem;
			background-color: #fff;
			padding-top: 0.15rem;
			padding-left: 0.45rem;
			img{
				float:left;
				width: 0.6rem;
				height: 0.6rem;
				border-right: 1px solid #E1E1E1;
				padding-right: 0.2rem;
			}
		}
		/*抽奖模块*/
		.lottery{
			background-color: #FF9304;
			padding-bottom: 0.1rem;
			img{
				width: 100%;
				height: 2.7rem;
			}
			.info{
				width: 7.3rem;
				margin:0 auto;
				.infoText{
					width: 100%;
					height: 0.8rem;
					line-height: 0.8rem;
					background-color: #FFF609;
					img{
						width: 0.68rem;
						height: 0.28rem;
						margin-left: 0.54rem;
						margin-top: 0.26rem;
						margin-right: 0.3rem;
					}
					.core{
						margin-top:0.16rem;
						padding-left: 0.12rem; 
						display: inline-block;
						height: 0.5rem;
						line-height: 0.5rem;
						border-left: 1px solid #FF9304;
						font-size:0.26rem;
						color:#000;
						font-family:PingFangSC-Regular;
						.orange{
							color:#F32D37;
						}
					}
					.past{
						width: 1rem;
						height: 0.5rem;
						background-color: #FF7B11;
						line-height: 0.5rem;
						text-align: center;
						font-size:0.24rem;
						margin-top: 0.14rem;
						color: #fff;
						margin-right: 0.22rem;
						border-radius: 0.06rem ; 
					}
				}
			}
			.avatar{
				background-color: #fff;
				.row{
					display: flex;
					width: 100%;
					height: 1.2rem;
					padding: 0.1rem 0;
					border-bottom: 1px solid #EDEFF3;
					.persol{
						flex: 1;
						border-right: 1px solid #EDEFF3;
						img{
							width: 0.66rem;
							height: 0.66rem;
							border-radius: 50%;
							margin: 0.16rem 0.14rem 0 0.25rem;
						}
						.fl{
							margin-top: 0.16rem;
							.persolName{
								font-size:0.24rem;
								line-height:0.33rem;
								color:#666666;
							}
							.persolPrice{
								font-size:0.28rem;
								line-height:0.4rem;
								color: #F84646;
								font-weight: 700;
							}
						}
					}
				}
			}
		}
		/*入口模块*/
		.plate{
			padding:1.1rem 0.28rem 0.28rem;
			background-color: #F5F8F9;
			.flex{
				width: 3.13rem;
				height: 1.6rem;
				background-color: #fff;
				padding-top:0.22rem;
				padding-left: 0.22rem;
				margin-bottom: 0.2rem;
				img{
					width: 1.06rem;
					height: 1.06rem;
					margin-right: 0.12rem;
				}
				.fl{
					.top{
						margin-top: 0.16rem;
						font-size:0.32rem;
						line-height: 0.5rem;
						color: #1A2642;
					}
					.bottom{
						line-height:0.36rem;
						font-size:0.24rem;
						color:#90A2C7;
					}
				}
			}
			.flex:nth-child(odd){
				margin-right: 0.18rem;
			}
		}
		/*联盟模块*/
		.alliance{
			img{
				width: 100%;
				height: 3rem;
			}
		}
	}
</style>

<style lang='less'>
	#appIndex{
		/*banner轮播*/
		.swiper{
			height: 3.36rem;
			img{
				width: 100%;
				height: 3.36rem;
			}
			.swiper-pagination-bullet{
				background:#fff!important;
				width: 8px;
				height: 2px!important;
			}
			.swiper-pagination-bullet-active{
				margin: -2px 4px!important;
				height: 4px!important;
				width: 4px!important;
				background-color: transparent!important;
				border: 2px solid #fff;
				border-radius: 50%;
			}
		}
		.noticeswiper{
			height: 1.1rem;
			padding-left: 0.38rem;
			.noticeText{
				margin-bottom: 0.05rem;
				font-size:0.24rem;
				color: #90A2C7;
				.label{
					margin-right: 0.2rem;
					display: inline-block;
					border-radius: 2px ;
					border:2px solid #F23030;
					padding:0.02rem  8px;
					text-align: center;
					font-size:0.2rem;
					color: #F23030;
				}
			}
			
		}
	}
</style>