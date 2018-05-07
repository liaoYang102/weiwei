<template>
	<section style="background: #F5F6FA;height: 100%;">
		<drawHeader :title="title" id="changeBlock"></drawHeader>

		<div class="record">
            <div class="btn-large">
               	<button-tab>
	               	<button-tab-item selected @on-item-click="showNumber">参与记录</button-tab-item>
	               	<button-tab-item @on-item-click="showAward">中奖记录</button-tab-item>
               	</button-tab>
            </div>
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
							<p :class="[index === 0 ? 'recent' : '']" class='bottom'>
								<span class="rank">{{item.rank}}<span class='ranks'>{{item.award}}</span></span>
								<span class="winStatus right">{{item.winStatus}}</span>
							</p>
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
			            <ul class="commodity">
			            	<group v-for="(item,index) in recordList" class="li-item">
								<cell>
									<router-link to="/draw/details">
										<li>
											<p class="title">
												<span>{{ item.drawTitle}}</span>
												<span class="frequency right">{{ item.period}}期</span>
											</p>
											<p class="time">开奖时间:{{ item.awardDate}}</p>
											<p class="bonusPool">
												奖金池：<span class="num">￥{{ item.money}}</span> 中奖总人数：{{ item.num}}人
											</p>
				                        </li>
			                    	</router-link>
								</cell>
								<cell>
									<div class="status">
										<span class="wait" v-if="item.status == 0">等待开奖</span>
										<span class="start" v-else-if="item.status == 1">未中奖</span>
										<div v-else-if="item.status == 2">
											<span class="win">已中奖</span>
											<div class="btn" @click="goWinningSpeech">立即领奖</div>
										</div>
										
									</div>
								</cell>
							</group>
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
					{weekend: '周末幸运大抽奖', winMoney: '800', rank: '1232期', award: '三等奖', winStatus: '已领取'},
					{weekend: '周末幸运大抽奖', winMoney: '5000', rank: '1231期', award: '一等奖', winStatus: '已领取'},
					{weekend: '周末幸运大抽奖', winMoney: '5000', rank: '1230期', award: '一等奖', winStatus: '已领取'}
				],
				tab1: true,
				tab2: false,
				show: false,
				showNomore: false,
				showDialog: false,
				recordList:[
					{ drawTitle: '国美番禺店大抽奖', period: '1234', awardDate: '2018-03-20 20:00:00', money: '800.00', num:'600.00',status:0},
					{ drawTitle: '国美番禺店大抽奖', period: '1234', awardDate: '2018-03-20 20:00:00', money: '800.00', num:'600.00',status:0},
					{ drawTitle: '国美番禺店大抽奖', period: '1234', awardDate: '2018-03-20 20:00:00', money: '800.00', num:'600.00',status:1},
					{ drawTitle: '国美番禺店大抽奖', period: '1234', awardDate: '2018-03-20 20:00:00', money: '800.00', num:'600.00',status:1},
					{ drawTitle: '国美番禺店大抽奖', period: '1234', awardDate: '2018-03-20 20:00:00', money: '800.00', num:'600.00',status:2},
					{ drawTitle: '国美番禺店大抽奖', period: '1234', awardDate: '2018-03-20 20:00:00', money: '800.00', num:'600.00',status:1},
					{ drawTitle: '国美番禺店大抽奖', period: '1234', awardDate: '2018-03-20 20:00:00', money: '800.00', num:'600.00',status:0},
					{ drawTitle: '国美番禺店大抽奖', period: '1234', awardDate: '2018-03-20 20:00:00', money: '800.00', num:'600.00',status:0}
				],
				toast: '审核未通过',
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
	.record{
	    background-color: #F5F6FA;
	    padding-top: 0.8rem;
	    padding-bottom: 0.2rem;
	    .btn-large {
	        width: 90%;
	        height: 0.8rem;
	        margin: auto;
	    }
	}
	.wrapper {
		height: 100%;
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
					color: #FF5365;
				}
			}
		}
		
	}
	.time-line{
		background: #fff;
		width: 90%;
		margin: 0.2rem auto 0.3rem auto;
		border-radius: 0.1rem;
		height: 75%;
		color: #1A2642;
		.winMoney{
			font-size: 0.36rem;
			font-weight: 700;
		}
		.weekend{
			font-size: 0.32rem;
		}
		.rank{
			font-size: 0.26rem;
			color: #90A2C7;
		}
		.ranks{
			color: #FF5365;
		}
		.winStatus{
			color: #90A2C7;
			text-align: right;
		}
	}

	.recordList{
		background-color: #F5F6FA;
		.li-item{
			margin-bottom: 0.2rem;
		}
		li {
		  padding-bottom: 0.18rem;
		  background-color: #fff;
		  width: 100%;
		  padding-top: 0.22rem;
		  margin-left: 0.3rem;
		  font-size: 0.26rem;
		  border-bottom: 0.01rem dashed #D8DFF0;
		  .title {
		    font-size: 0.32rem;
		    color: #1A2642;
		    font-weight: 400;
		    .frequency {
		      color: #90A2C7;
		    }
		  }
		  .time {
		    line-height: 0.45rem;
		    color: #90A2C7;
		  }
		  .bonusPool {
		    line-height: 0.35rem;
		    color: #90A2C7;
		    .num {
		      color: #FF5365;
		    }
		  }
		  
		}
		.status {
			position: relative;
		  	margin-top: 0.17rem;
		  	padding-left: 0.3rem;
		  	padding-bottom: 0.2rem;
		  	font-size: 0.32rem;
		  	.wait {
		  	  color: #FF811C;
		  	}
		  	.start {
		    	color: #7386AD;
		  	}
		  	.win {
		    	color: #FF5365;
		  	}
	    	.btn {
		    	position: absolute;
		  	  	width: 1.5rem;
		  	  	border-radius: 0.23rem;
		  	  	height: 0.45rem;
		  	  	color: #fff;
		  	  	line-height: 0.45rem;
		  	  	background-color: #FF5365;
		  	  	font-size: 0.26rem;
		  	  	text-align: center;
		  	  	right: -0.2rem;
		  	  	top: 0rem;
	  		}
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
	  		background-color: #FF5365;
	  		text-align: center;
	  		line-height: 0.54rem;
	  		color: #fff;
	  		border-radius: 0.23rem;
	  	}
	}
</style>

<style lang="less">
@button-tab-border-radius: 0.6rem;
	.record{
		.vux-button-group > a.vux-button-group-current{
			color: #fff !important;
			background: #FF5365 !important;
		}
		.vux-button-group{
			height: 0.8rem !important;
		}
		.vux-button-group > a{
			height: 0.8rem !important;
			line-height: 0.8rem !important;
			font-size: 0.36rem !important;
			color: #FF5365 !important;
			background: rgba(0,0,0,0) !important;
			
		}
		.vux-button-group > a.vux-button-tab-item-first:after, .vux-button-group > a.vux-button-tab-item-last:after{
			border: 0.02rem solid #FF5365;
		}
		.vux-button-group > a.vux-button-tab-item-first{
			border-top-left-radius: @button-tab-border-radius !important;
			border-bottom-left-radius: @button-tab-border-radius !important;
		}
		.vux-button-group > a.vux-button-tab-item-last{
			border-top-right-radius: @button-tab-border-radius !important;
			border-bottom-right-radius: @button-tab-border-radius !important;
		}
		.vux-button-group > a.vux-button-tab-item-first:after{
			border-top-left-radius: 0.7rem !important;
			border-bottom-left-radius: 0.7rem !important;
		}
		.vux-button-group > a.vux-button-tab-item-last:after{
			border-top-right-radius: 0.7rem !important;
			border-bottom-right-radius: 0.7rem !important;
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
			margin-top: 0.1rem;
			color: #1A2642;
		}
		.recent{
			color: #000;
		}
		.vux-timeline-item-color{
			background-color:#FF5365;
		}
		.vux-timeline-item-tail{
			background-color:#FF5365;
		}
		.vux-timeline-item-head-first{
			background-color:#FF5365;
			i{
				display: none;
			}
		}
	}

	.commodity{
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