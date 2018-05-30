<template>
	<section style="background: #E32921;height: 100%;">
        <div class="wrapper" ref="wrapper">
			<div class="content">
				<settingHeader :title="title"></settingHeader>
		        <div class="recordList">
					<div v-if="recordList.length==0">
		        		<div class="noRecord">
		        			<div class="img">
		        				<img src="../../assets/images/draw/norecord.png">
		        				<p>您还没有中奖记录</p>
		        				<div class="awardBtn" @click="$router.push({ path: '/multi_user_mall/summary'})">我要抽奖</div>
		        				<p class="text red">
		        					温馨提示：
		        				</p>
		        				<p class="text">只要在平台上消费任意一笔订单，就能参加周末幸运大抽奖!</p>
		        				
		        			</div>
		        		</div>
		        	</div>
		        	<div v-else style="padding-bottom: 0rem;">
			            <ul class="ul-record" v-for="(item,index) in recordList" :key="index" @click="$router.push({path:'/draw/details'})">
							<div class="re-content">
								<div class="left">{{ item.drawTitle}}</div>
		                    	<div class="period left">{{ item.period}}期</div>
		                    	<div class="win">{{ item.stateValue}}</div>
							</div>
	                    	
							<div class="clear pd">
								<div class="left">
									<p class="time">开奖时间: {{ item.awardDate}}</p>
									<p class="bonusPool">
										奖金池：￥{{ item.money}}
									</p>
									<p>参与人数：<span class="num">{{ item.num}}人</span></p>
								</div>
								<div v-if="item.status == 2">
									<div class="right btn" v-if="item.awardStatus == '未领取'" @click.stop="goWinningSpeech">
										领奖
									</div>
									<div class="right btn2" v-else>
										已领取
									</div>
								</div>
							</div>
			            </ul>
			            <loading v-if="show"></loading>
			            <noMore v-if="showNomore"></noMore>
		        	</div>

			        <!-- 弹出框 -->
			        <div v-transfer-dom class="dialog">
			        	<x-dialog v-model="showDialog" :hide-on-blur="true">
			        		<!-- 未实名认证\等待审核\审核未通过 -->
			        		<div class="dia" v-if="0 != false">
			        			<img class="img" :src="imgSrc">
			        			<div class="dia_top">
			        				<div class="dia_content">
			        					<p class="title">{{headMessage}}</p>
			        					<p class="note">{{message}}</p>
			        					<div class="btnList">{{btnText}}</div>
			        				</div>
			        			</div>
			        			<div class="close" @click="showDialog=false"><img src="../../assets/images/draw/open.png"></div>
			        		</div>

			        		<!-- 已中奖 -->
			        		<div class="dia" v-else>
			        			<div class="dia_top2">
			        				<div class="dia_title">
			        					<p>第12期</p>
			        					<p>番禺国美店周末幸运大抽奖</p>
			        				</div>
			        				<div class="dia_content2">
			        					<p class="title">{{headMessage}}</p>
			        					<p class="note">买单报手机号赢<span>5000元</span>大奖</p>
			        					<div class="yhq">
			        						<img src="../../assets/images/draw/tag.png" width="100%">
			        						<div class="yhqMoney">
			        							￥<span>5000</span>现金
			        						</div>
			        					</div>
			        					<!-- <div class="btn-link" @click="$router.push({path: '/draw/details'})">点击查看详情 <img src="../../assets/images/draw/crown.png"></div> -->
			        					<div  class="time-line">
			        						<timeline>
			        							<timeline-item v-for="(item, index) in count" :key="index">
			        								<h4 :class="[index === 0 ? 'recent' : '']" >
			        									<span class="tl-content">{{item.content}}</span>
			        									<!-- <span class="winMoney right">{{item.date}}元</span> -->
			        								</h4>
			        								<div :class="[index === 0 ? 'recent' : '']" class='bottom flex'>
			        									<div class="rankDate">{{item.date}}</div>
			        								</div>
			        								<div class="clear"></div>
			        							</timeline-item>
			        						</timeline>
			        					</div>
			        				</div>
			        			</div>
			        			<div class="close" @click="showDialog=false"><img src="../../assets/images/draw/open.png"></div>
			        		</div>
			        	</x-dialog>
			        </div>
		        </div>
	        	
			</div>
		</div>
	</section>
</template>

<script>
	import { ButtonTab, ButtonTabItem, XDialog} from 'vux'
	import BScroll from 'better-scroll'
	import Loading from '../../components/loading'
	import noMore from '../../components/noMore'
	import settingHeader from '../../components/setting_header'
	export default {
		components:{
			ButtonTab,ButtonTabItem,Loading,noMore,settingHeader,XDialog
		},
		data(){
			return {
				title: '中奖记录',
				count: [
					{content: '恭喜您中了一等奖', date: '2018-02-09 17：56：30'},
					{content: '开奖时间：2018-08-28 19：00：00', date: '2018-08-28 19：00：00'},
					{content: '您花了￥1，256购买了一双耐克KD10广州万国奥特广场负一层', date: '2018-08-28 19：00：00'}
				],
				tab1: true,
				tab2: false,
				show: false,
				showNomore: false,
				showDialog: false,
				recordList:[
					{ drawTitle: '国美番禺店大抽奖', period: '1234', awardDate: '2018-03-20 20:00:00', money: '800.00', num:'600.00',status:0, stateValue: '等待开奖',awardStatus: '未领取'},
					{ drawTitle: '国美番禺店大抽奖', period: '1234', awardDate: '2018-03-20 20:00:00', money: '800.00', num:'600.00',status:0, stateValue: '等待开奖',awardStatus: '未领取'},
					{ drawTitle: '国美番禺店大抽奖', period: '1234', awardDate: '2018-03-20 20:00:00', money: '800.00', num:'600.00',status:2, stateValue: '已中奖',awardStatus: '未领取'},
					{ drawTitle: '国美番禺店大抽奖', period: '1234', awardDate: '2018-03-20 20:00:00', money: '800.00', num:'600.00',status:2, stateValue: '已中奖',awardStatus: '已领取'},
					{ drawTitle: '国美番禺店大抽奖', period: '1234', awardDate: '2018-03-20 20:00:00', money: '800.00', num:'600.00',status:2, stateValue: '已中奖',awardStatus: '未领取'},
					{ drawTitle: '国美番禺店大抽奖', period: '1234', awardDate: '2018-03-20 20:00:00', money: '800.00', num:'600.00',status:1, stateValue: '未中奖',awardStatus: '未领取'},
					{ drawTitle: '国美番禺店大抽奖', period: '1234', awardDate: '2018-03-20 20:00:00', money: '800.00', num:'600.00',status:0, stateValue: '等待开奖',awardStatus: '未领取'},
					{ drawTitle: '国美番禺店大抽奖', period: '1234', awardDate: '2018-03-20 20:00:00', money: '800.00', num:'600.00',status:0, stateValue: '等待开奖',awardStatus: '未领取'}
				],
				headMessage: '您还未进行实名认证',
				message: '进行实名认证之后才可以领取奖励',
				btnText: '立即去认证',
				imgSrc:'./static/draw/warning.png'
				// 1、未实名认证  进行实名认证之后才可以领取奖励 按钮:立即去认证 图片: warning.png
				// 2、等待审核 请您耐心等待审核 图片wait.png
				// 3、审核未通过 审核未通过
				// 4、已中奖 恭喜您成功领取奖金 点击查看详情 图片：5000元现金 timeline：
			}
		},
		mounted() {
			this.InitScroll()
		},
		methods:{
	        InitScroll() {
				this.$nextTick(() => {
					if(!this.scroll) {
						this.scroll = new BScroll(this.$refs.wrapper, {
							click: true,
							scrollY: true,
							pullUpLoad: {
								threshold: -30, // 负值是当上拉到超过低部 70px；正值是距离底部距离 时，                    
							}
						})
						this.scroll.on('pullingUp', (pos) => {
							this.show = true;
							this.LoadData()
							this.$nextTick(function() {
								this.scroll.finishPullUp();
								this.scroll.refresh();
							});
						})
					} else {
						this.scroll.refresh()
					}
				})

			},
			LoadData() {
				var _this = this
				setTimeout(function(){
					_this.show = false;
					let leng = _this.recordList.length;
					if(_this.recordList.length == 11){
						_this.showNomore = true;
					}else{
						let obj = [{ drawTitle: '国美番禺店大抽奖', period: '1234', awardDate: '2018-03-20 20:00:00', money: '800.00', num:'600.00',status:0, stateValue: '等待开奖',awardStatus: '未领取'},
						{ drawTitle: '国美番禺店大抽奖', period: '1234', awardDate: '2018-03-20 20:00:00', money: '800.00', num:'600.00',status:2, stateValue: '已开奖',awardStatus: '未领取'}];
						_this.recordList = _this.recordList.concat(obj);
						console.log(_this.recordList);
					}
					
				},3000)
			},
			goWinningSpeech(){
				var that = this;
				this.showDialog = true;
				// setTimeout(function(){
				// 	that.showDialog = false
				// },5000)
			},
		}
	}
</script>

<style lang="less" scoped>
	.left{
		float: left;
	}
	.right{
		float: right;
	}
	.flex{
		display: flex;
	}
	.tab-record{
		background-color: #fff;
		padding-bottom: 2px;
	}
	.wrapper {
		height: 100%;
		overflow: hidden;
	}
	.noRecord{
		background: #fff;
		width: 94.7%;
		margin: 0.2rem auto;
		border-radius: 0.08rem;
		padding-top: 1.07rem;
		padding-bottom: 0.6rem;
		.img{
			width: 100%;
			text-align: center;
			img{
				width: 50%;
				margin: 0 auto;
				display: block;
			}
			p{
				font-size: 0.32rem;
				color: #333333;
				margin-top: 0.27rem;
			}
			.awardBtn{
				width: 88.8%;
				background: linear-gradient(-120deg,#FF5C34,#FF2A4B);
				margin: 1.3rem auto 0.32rem auto ;
				padding: 0.31rem 0;
				text-align: center;
				color: #fff;
				border-radius: 0.48rem;
				box-shadow:0.07rem 0.09rem 0.27rem rgba(255,53,70,0.4);
				font-size: 0.36rem;
			}
			.text{
				font-size: 0.2rem;
				line-height: 0.5rem;
				color: #A0A0A0;
				text-align: left;
				width: 85%;
				margin: 0 auto;
			}
			.red{
				color: #E32921;
			}
		}
		
	}
	.time-line{
		background: #FFF5F6;
		width: 100%;
		border-radius: 0.06rem;
		height: 75%;
		color: #666666;
		font-size: 0.26rem;
		text-align: left;
		.tl-content{
			font-size: 0.28rem;
		}
		.rankDate{
			color: #666666;
			font-size: 0.26rem;
		}
		.recent{
			color: #333333;
		}
	}

	.recordList{
		width: 94.7%;
		margin: 0 auto;
		padding-bottom: 0.2rem;
		.ul-record{
			width: auto;
			margin-top: 0.2rem;
			border-radius: 0.08rem;
			background-color: #fff;
			padding: 0.35rem 0.1rem;
		}
	  	.re-content{
	      	color: #333333;
	      	font-size: 0.36rem;
	      	padding-left: 0.4rem;
		  	border-bottom: 1px solid #F3F3F3;
		  	padding-top: 0.05rem;
		  	padding-bottom: 0.29rem;
		  	overflow: hidden;
		    .period{
		      	color: #fff;
		      	font-size: 0.26rem;
		      	background:linear-gradient(-121.4deg,#AF51FF,#9013FE);
		      	border-radius: 0.04rem;
		      	text-align: center;
		      	padding:0.05rem 0.07rem; 
		      	margin-left: 0.12rem;
		    }
		    .win{
		      	float: right;
		      	background-color: #E5EAEF;
		      	padding: 0.15rem 0.38rem;
		      	color: #666666;
		      	font-size: 0.28rem;
		      	text-align: center;
		      	border-radius: 0.37rem;
		      	margin-right: 0.2rem;
		    }
	  	}
	  	.pd{
	  		padding:0.29rem 0 0 0.4rem ;
	  		p{
	  			font-size: 0.26rem;
	  			color: #666;
	  		}
	  		.num{
	  			color: #333333;
	  		}
	  	}

	  	.btn{
	  		background:linear-gradient(-121.4deg,#FF5C34,#FF2A4B);
	  		border-radius:0.52rem;
	  		box-shadow:0.07rem 0.09rem 0.27rem rgba(255,53,70,0.4);
	  		padding: 0.3rem 0.65rem;
	  		text-align: center;
	  		color: #fff;
	  		font-size: 0.32rem;
	  		margin-right: 0.2rem;
	  		margin-top: 0.25rem;
	  	}
	  	.btn2{
	  		background:#E5EAEF;
	  		border-radius:0.52rem;
	  		padding: 0.3rem 0.5rem;
	  		text-align: center;
	  		color: #666666;
	  		font-size: 0.32rem;
	  		margin-right: 0.2rem;
	  		margin-top: 0.25rem;
	  		
	  	}
	}

	.dia {
		width: 100%;
		color: #1A2642;
		position: relative;
		height: auto;
		.img {
			width: 25%;
			position: absolute;
			top: 0;
			left: 50%;
			transform: translate(-50%, -50%);
		}
		.dia_top {
			width: 100%;
			margin: 0 auto;
			height: auto;
			min-height: 2.49rem;
			background-color: #FF273A;
			text-align: center;
			padding-top: 1.09rem;
			margin-top: 1.09rem;
			border-radius: 0.16rem;
			.dia_content{
				background: #fff;
				height: auto;
				min-height: 2.49rem;
				padding-bottom: 0.55rem;
				border-radius: 0 0 0.16rem 0.16rem;
			}
			.title {
				font-size: 0.36rem;
				line-height: 0.59rem;
				margin-bottom: 0.12rem;
				color: #333333;
				padding-top: 0.6rem;
			}
			.note {
				color: #666666;
				padding: 0 0.5rem;
				box-sizing: border-box;
				font-size: 0.24rem;
			}
			.btnList {
				margin: 0 auto;
				width: 85.4%;
				background: #FF273A;
				color: #fff;
				font-size: 0.36rem;
				border-radius: 0.5rem;
				text-align: center;
				box-shadow:0.04rem 0px 0.08rem rgba(136,46,219,0.3);
				padding: 0.32rem 0; 
				margin-top: 0.8rem;
			}
			
			
		}
		.dia_top2{
			width: 100%;
			margin: 0 auto;
			height: auto;
			min-height: 2.49rem;
			background-color: #FF273A;
			text-align: center;
			margin-top: 1.09rem;
			border-radius: 0.16rem;
			.dia_title{
				color: #fff;
				padding-top: 0.08rem;
				font-size: 0.36rem;
				padding-bottom: 0.1rem;
				p:nth-child(1){
					font-size: 0.72rem;
				}
			}
			.dia_content2{
				background: #fff;
				height: auto;
				border-radius: 0 0 0.16rem 0.16rem;
				.title {
					font-size: 0.36rem;
					line-height: 0.59rem;
					margin-bottom: 0.15rem;
					color: #333333;
					padding-top: 0.45rem;
				}
				.note {
					color: #666666;
					padding: 0 0.5rem;
					box-sizing: border-box;
					font-size: 0.24rem;
					margin-bottom: 0.5rem;
					span{
						color: #E32921;
					}
				}
				.btn-link{
					color: #666666;
					font-size: 0.3rem;
					text-align: center;
					margin-top: 0.2rem;
					img{
						width: 5%;
						vertical-align: middle;
					}
				}
				.yhq{
					position: relative;
					.yhqMoney{
						position: absolute;
						top: 23%;
						left: 11%;
						color: #fff;
						font-size: 0.48rem;
						span{
							font-size: 0.6rem;
							letter-spacing: 2px;
						}
					}
				}
			}
		}
		.close{
			width: 100%;
			background: rgba(255,255,255,0);
			height: 1.25rem;
			img{
				height: 100%;
				margin: 0 auto;
			}
		}
	}
</style>

<style lang="less">
	.tab-record{
		.vux-tab{
			height: 0.98rem;
		}
		.vux-tab-warp{
			padding-top: 0.98rem;
		}
		.vux-tab .vux-tab-item{
			font-size: 0.36rem;
			background-size: 100% 0;
		}
		.vux-tab-container{
			height: 0.98rem;
		}
	}

	.time-line{
		/*margin-top: 0.3rem;*/
		.vux-timeline{
			padding: 0.3rem 0.3rem 0 0.3rem;
		}
		.vux-timeline-item-content{
			padding:0.05rem 0 0.15rem 0.5rem;
		}
		.bottom{
			padding-bottom: 0.3rem;
			border-bottom: none;
			margin-top: 0.05rem;
		}
		
		.vux-timeline-item-color{
			background-color:#E32921;
		}
		.vux-timeline-item-tail{
			background-color:#E32921;
		}
		.vux-timeline-item-head-first{
			background-color:#E32921;
			/*opacity: 0.4;*/
			i{
				display: none;
			}
		}
	}

	.ul-record{
		.weui-cells{
			margin-top: 0 !important;
		}
		.vux-no-group-title{
			margin-top: 0 !important;
		}
		.weui-cells:before{
			border-top: none !important;
		}
		.weui-cell{
			padding: 0 !important;
		}
		.weui-cell__ft{
			text-align: left;
			width: 95%;
			padding-right: 0.5rem;
		}
		.weui-cell_access .weui-cell__ft:after{
			width: 0.2rem !important;
			height: 0.2rem !important;
			right: 0.2rem !important;
			border-width: 0.02rem 0.02rem 0 0 !important;
		}
		.weui-cells:after{
			border-bottom: none !important;
		}
		.weui-cell:before{
			border-top: none !important;
		}
		.weui-cell_access .weui-cell__ft:after{
			right: 0.3rem !important;
		}
	}
	.dialog{
		.weui-dialog {
			width: 78.67%;
			max-width: 78.67%;
			z-index: 111111111111111111111111;
			border-radius: 0.16rem; 
			top: 46%;
		}
	}

	#changeBlock .vux-header .vux-header-left .left-arrow:before {
		border: 0.02rem solid #000;
		border-width: 0.02rem 0 0 0.02rem;
	}
	
	#changeBlock .vux-header .vux-header-title {
		color: #000;
	}
</style>