<template>
	<section style="background: #E32921;height: 100%;">
		<!-- <drawHeader :title="title" id="changeBlock"></drawHeader> -->

		<!-- <div class="record">
            <div class="btn-large">
               	<button-tab>
	               	<button-tab-item selected @on-item-click="showNumber">参与记录</button-tab-item>
	               	<button-tab-item @on-item-click="showAward">中奖记录</button-tab-item>
               	</button-tab>
            </div>
        </div> -->

        <div class="tab-record">
        	<tab active-color="#E32921" custom-bar-width="80px" default-color="#333">
    	      <tab-item selected @on-item-click="showNumber">参与记录</tab-item>
    	      <tab-item @on-item-click="showAward">中奖记录</tab-item>
    	    </tab>
        </div>

        <div class="wrapper" ref="wrapper">
			<div class="content">
				<!-- tab切换 -->
				<div class="time-line" v-if="tab2 == true">
					<div v-if="count.length == 0">
		        		<div class="noRecord">
		        			<div class="img">
		        				<img src="../../assets/images/draw/norecord.png">
		        				<p>暂无{{tabTitle}}</p>
		        				<p class="text">买单报电机号赢<span>5000元</span>大奖</p>
		        			</div>
		        		</div>
		        	</div>
					<timeline v-else>
						<timeline-item v-for="(item, index) in count" :key="index">
							<h4 :class="[index === 0 ? 'recent' : '']" >
								<span class="weekend">{{item.weekend}}</span>
								<span class="winMoney right">{{item.winMoney}}元</span>
							</h4>
							<div :class="[index === 0 ? 'recent' : '']" class='bottom flex'>
								<div class="rank flex">
									<div>{{item.rank}}</div>
									<div class='ranks' v-if="item.award == '一等奖'">{{item.award}}</div>
									<div class='ranks' :class="{'two': item.award == '二等奖'}" v-else-if="item.award == '二等奖'">{{item.award}}</div>
									<div class='ranks' :class="{'three': item.award == '三等奖'}" v-else-if="item.award == '三等奖'">{{item.award}}</div>
									<div class='ranks' :class="{'four': item.award == '四等奖'}" v-else>{{item.award}}</div>
								</div>
								<div class="winStatus2" v-if="item.winStatus == '领取'">
									<img src="../../assets/images/draw/receiveIcon.png">
									<span>{{item.winStatus}}</span>
								</div>
								<div class="winStatus" :class="[index === 0 ? 'recent' : '']" v-else>{{item.winStatus}}</div>
								
							</div>
							<div class="clear"></div>
						</timeline-item>
					</timeline>
				</div>

		        <div class="recordList" v-else>
					<div v-if="recordList.length==0">
		        		<div class="noRecord">
		        			<div class="img">
		        				<img src="../../assets/images/draw/norecord.png">
		        				<p>暂无{{tabTitle}}</p>
		        				<p class="text">买单报电机号赢<span>5000元</span>大奖</p>
		        			</div>
		        		</div>
		        	</div>
		        	<div v-else style="padding-bottom: 0rem;">
			            <ul class="ul-record" v-for="(item,index) in recordList">
							<router-link to="/draw/details">
								<div class="re-content">
									<div class="left">{{ item.drawTitle}}</div>
			                    	<div class="period left">{{ item.period}}期</div>
			                    	<div class="win">{{ item.stateValue}}</div>
								</div>
	                    	</router-link>
							<div class="clear pd">
								<div class="left">
									<p class="time">开奖时间: {{ item.awardDate}}</p>
									<p class="bonusPool">
										奖金池：￥{{ item.money}}
									</p>
									<p>参与人数：<span class="num">{{ item.num}}人</span></p>
								</div>
								<div class="right btn" v-if="item.status == 2">
									领奖
								</div>
							</div>
			            </ul>
			            <loading v-if="show"></loading>
			            <noMore v-if="showNomore"></noMore>
		        	</div>

			        <!-- 弹出框 -->
			        <div v-transfer-dom class="dialog">
			          	<x-dialog v-model="showDialog" :hide-on-blur="true">
			          		<div class="dia_top">
								<p class="title">{{ toast}}</p>
								<!-- <span class="note">{{ note}}</span> -->
								<router-link to="/member/setting/real"><div class="btn">实名验证</div></router-link>
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
	import drawHeader from './components/header'
	export default {
		components:{
			ButtonTab,ButtonTabItem,Loading,noMore,drawHeader,XDialog
		},
		data(){
			return {
				title: '中奖记录',
				count: [
					{weekend: '周末幸运大抽奖', winMoney: '5000', rank: '1234期', award: '一等奖', winStatus: '已领取'},
					{weekend: '周末幸运大抽奖', winMoney: '1000', rank: '1233期', award: '二等奖', winStatus: '未领取'},
					{weekend: '周末幸运大抽奖', winMoney: '800', rank: '1232期', award: '三等奖', winStatus: '领取'},
					{weekend: '周末幸运大抽奖', winMoney: '5000', rank: '1231期', award: '四等奖', winStatus: '已过期'},
					{weekend: '周末幸运大抽奖', winMoney: '5000', rank: '1230期', award: '一等奖', winStatus: '已过期'}
				],
				tab1: true,
				tab2: false,
				show: false,
				showNomore: false,
				showDialog: false,
				recordList:[
					{ drawTitle: '国美番禺店大抽奖', period: '1234', awardDate: '2018-03-20 20:00:00', money: '800.00', num:'600.00',status:0, stateValue: '等待开奖'},
					{ drawTitle: '国美番禺店大抽奖', period: '1234', awardDate: '2018-03-20 20:00:00', money: '800.00', num:'600.00',status:0, stateValue: '等待开奖'},
					{ drawTitle: '国美番禺店大抽奖', period: '1234', awardDate: '2018-03-20 20:00:00', money: '800.00', num:'600.00',status:1, stateValue: '未中奖'},
					{ drawTitle: '国美番禺店大抽奖', period: '1234', awardDate: '2018-03-20 20:00:00', money: '800.00', num:'600.00',status:1, stateValue: '未中奖'},
					{ drawTitle: '国美番禺店大抽奖', period: '1234', awardDate: '2018-03-20 20:00:00', money: '800.00', num:'600.00',status:2, stateValue: '已中奖'},
					{ drawTitle: '国美番禺店大抽奖', period: '1234', awardDate: '2018-03-20 20:00:00', money: '800.00', num:'600.00',status:1, stateValue: '未中奖'},
					{ drawTitle: '国美番禺店大抽奖', period: '1234', awardDate: '2018-03-20 20:00:00', money: '800.00', num:'600.00',status:0, stateValue: '等待开奖'},
					{ drawTitle: '国美番禺店大抽奖', period: '1234', awardDate: '2018-03-20 20:00:00', money: '800.00', num:'600.00',status:0, stateValue: '等待开奖'}
				],
				toast: '您还未实名验证',
				note: '(请你检查身份验证是否通过)',
				// 恭喜您成功领取奖金  您已成功领取奖金  请您耐心等待审核
				// 审核未通过 （请你检查身份验证是否通过）
				// 领取奖金失败（请你检查身份验证是否通过）
				// 您还未实名验证  按钮实名验证
				tabTitle: '参与记录'

			}
		},
		mounted() {
			this.InitScroll()
		},
		methods:{
			showNumber(){
                this.tab1 = true;
                this.tab2 = false;
                this.tabTitle = '参与记录'
			},
			showAward(){
				this.tab1 = false;
				this.tab2 = true;
				this.tabTitle = '中奖记录'
			},
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
						let obj = [{ drawTitle: '国美番禺店大抽奖', period: '1234', awardDate: '2018-03-20 20:00:00', money: '800.00', num:'600.00'},
						{ drawTitle: '国美番禺店大抽奖', period: '1234', awardDate: '2018-03-20 20:00:00', money: '800.00', num:'600.00'}];
						_this.recordList = _this.recordList.concat(obj);
						console.log(_this.recordList);
					}
					
				},3000)
			},
			goWinningSpeech(){
				var that = this;
				this.showDialog = true;
				setTimeout(function(){
					that.showDialog = false
				},5000)
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
		height: 92.5%;
		overflow: hidden;
	}
	.noRecord{
		background: #fff;
		width: 90%;
		margin: 0.2rem auto;
		border-radius: 0.1rem;
		padding-top: 2.5rem;
		padding-bottom: 3rem;
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
				color: #90A2C7;
			}
			.text{
				font-size: 0.3rem;
				line-height: 0.5rem;
				span{
					color: #E32921;
				}
			}
		}
		
	}
	.time-line{
		background: #fff;
		width: 94.7%;
		margin: 0.2rem auto 0.3rem auto;
		border-radius: 0.06rem;
		height: 75%;
		color: #A0A0A0;
		font-size: 0.26rem;
		.winMoney{
			font-size: 0.36rem;
			font-weight: 700;
			color: #333333;
		}
		.weekend{
			font-size: 0.32rem;
		}
		.rank{
			color: #A0A0A0;
			width: 70%;
			line-height: 0.38rem;
		}
		.ranks{
			background: linear-gradient(-121.4deg,#FDC95A,#F2AE40);
			border-radius: 0.04rem;
			height: 0.38rem;
			width: 0.97rem;
			color: #fff;
			margin-left: 0.2rem;
			font-size: 0.26rem;
			text-align: center;
			line-height: 0.38rem;
		}
		.winStatus{
			flex: 1;
			color: #A0A0A0;
			text-align: right;
		}
		.two{
			background: linear-gradient(-121.4deg,#E2E4E8,#C7CAD1);
		}
		.three{
			background: linear-gradient(-121.4deg,#F9D0B5,#D8AA8B);
		}
		.four{
			background: linear-gradient(-121.4deg,#C0D3FC,#90A2C7);
		}
		.winStatus2{
			flex: 1;
			color: #E32921;
			text-align: right;
			img{
				width: 20%;
				vertical-align: middle;
			}
			span{
				vertical-align: middle;
			}
		}
		.recent{
			color: #E32921;
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
		  	padding-bottom: 0.39rem;
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
		      	border-radius: 0.28rem;
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
	  		border-radius:0.48rem;
	  		box-shadow:0.07rem 0.09rem 0.27rem rgba(255,53,70,0.4);
	  		padding: 0.33rem 0.65rem;
	  		text-align: center;
	  		color: #fff;
	  		font-size: 0.32rem;
	  		margin-right: 0.2rem;
	  		margin-top: 0.25rem;
	  	}
	}

	.dia_top {
		width: 90%;
		height: 1.78rem;
		margin: auto;
	  	border-radius: 0.1rem;
	  	background-color: #fff;
	  	color: #1A2642;
	  	.title {
	  	  font-size: 0.32rem;
	  	  margin-top: 0.8rem;
	  	  line-height: 0.48rem;
	  	  text-align: center;
	  	}
	  	.note{
	  		font-size: 0.2rem;
	  	}
	  	.btn{
	  		margin: 0.35rem auto;
	  		width: 2.17rem;
	  		height: 0.54rem;
	  		background-color: #E32921;
	  		text-align: center;
	  		line-height: 0.54rem;
	  		color: #fff;
	  		border-radius: 0.23rem;
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
			/*color: #333333;*/
		}
		.vux-tab-container{
			height: 0.98rem;
		}
	}

	.time-line{
		.vux-timeline{
			padding: 0.3rem;
			margin-bottom: 0.2rem;
		}
		.vux-timeline-item-content{
			padding:0.05rem 0 0.2rem 0.5rem;
		}
		.bottom{
			padding-bottom: 0.3rem;
			border-bottom: none;
			margin-top: 0.11rem;
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
		.weui-dialog{
			width: 60%;
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