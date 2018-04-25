<template>
	<section style="background: #eaeaea;height: 100%;">
		<drawHeader :title="title"></drawHeader>

		<div class="top">
            <div class="btn-large">
               	<button-tab>
	               	<button-tab-item selected @on-item-click="showNumber">参与记录</button-tab-item>
	               	<button-tab-item @on-item-click="showAward">中奖记录</button-tab-item>
               	</button-tab>
            </div>
        </div>

        <div class="time-line" v-if="tab2 == true">
        	<timeline>
        		<timeline-item v-for="(i, index) in count" :key="index">
        			<h4 :class="[i === 1 ? 'recent' : '']" >
        				<span class="weekend">周末幸运大抽奖</span>
        				<span class="winMoney right">5000元</span>
        			</h4>
        			<p :class="[i === 1 ? 'recent' : '']" class='bottom'>
        				<span class="rank">1234期<span class='ranks'>一等奖</span></span>
        				<span class="winStatus right">已领取</span>
        			</p>
        		</timeline-item>
        	</timeline>
        </div>

        <div class="recordList" v-else>
            <ul class="commodity">
            	<group v-for="(item,index) in 5" class="li-item">
					<cell>
						<li>
							<p class="title">
								国美番禺店大抽奖
								<span class="frequency right">1234期</span>
							</p>
							<p class="time">开奖时间:2018-03-20 20:00:00</p>
							<p class="bonusPool">
								奖金池：<span class="num">￥800.00</span> 奖金池：600.00人
							</p>
                        </li>
					</cell>
					<cell is-link>
						<p class="status" @click="showDialogs">
							<span class="wait" v-if="status == 0">等待开奖</span>
							<span class="start" v-else-if="status == 1">已开奖</span>
							<span class="win" v-else>已中奖</span>
							<span class="right mui-icon mui-icon-forward"></span>
						</p>
					</cell>
				</group>
            </ul>
            <loading v-if="show"></loading>
            <noMore v-if="showNomore"></noMore>
        </div>

        <div v-transfer-dom class="dialog">
          	<x-dialog v-model="showDialog" hide-on-blur="true">
          		<div class="dia_top">
					<p class="title">番禺国美店周末幸运大抽奖</p>
					<span class="dia_times">第12356期</span>
					<p class="text">买单报手机号<span class="text_red">5000元</span>大奖</p>
					<p class="vivid">恭喜您中了一等级5000元</p>
					<router-link to="/draw/awards">
						<div class="btn">
							立即领奖
						</div>
					</router-link>
				</div>
				<div  class="time-line" style="height: 5rem;">
					<timeline>
						<timeline-item v-for="(item, index) in process" :key="index">
							<h4 :class="[index === 1 ? 'recent' : '']" style="text-align: left">
								<span>{{ item.step}}</span>
							</h4>
							<p :class="[index === 1 ? 'recent' : '']" class='bottom'  style="text-align: left;color: #000">
								<span>{{ item.date}}</span>
							</p>
						</timeline-item>
					</timeline>
				</div>
				
          	</x-dialog>
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
				count: 4,
				tab1: true,
				tab2: false,
				show: false,
				showNomore: false,
				status:0,
				showDialog: false,
				process: [
					{step: '开奖时间2019-08-08 18:00:00', date: '2018-02-09 18:20:10'},
					{step: '成功参与“周末幸运大抽奖”', date: '2018-02-09 18:20:10'},
					{step: '你花了￥1,256购买了一双耐克KD10广州万国奥特广场负一层', date: '2018-02-09 18:20:10'},
				]
			}
		},
		methods:{
			showNumber(){
                this.tab1 = true;
                this.tab2 = false;
			},
			showAward(){
				this.tab1 = false;
				this.tab2 = true;
			},
			showDialogs(){
				this.showDialog= true
			}
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
	.top{
	    background-color: #eaeaea;
	    padding-top: 1rem;
	    padding-bottom: 0.2rem;
	    .btn-large {
	        width: 90%;
	        height: 0.8rem;
	        margin: auto;
	    }
	}
	.time-line{
		background: #fff;
		width: 90%;
		margin: 0.2rem auto;
		border-radius: 0.1rem;
		height: 8rem;
		.winMoney{
			font-size: 0.32rem;
			color: #000;
			font-weight: 700;
		}
		.weekend{
			font-size: 0.28rem;
  			color: #333;
		}
		.rank{
			font-size: 0.26rem;
			color: #666666;
		}
		.ranks{
			color: #db0928;
		}
		.winStatus{
			color: #9d9d9d;
			text-align: right;
		}
	}

	.recordList{
		.li-item{
			margin-bottom: 0.2rem;
		}
		li {
		  padding-bottom: 0.18rem;
		  background-color: #fff;
		  width: 100%;
		  padding-top: 0.22rem;
		  margin-left: 0.3rem;
		  border-bottom: 0.01rem dashed #ccc;
		  .title {
		    font-size: 0.32rem;
		    color: #333;
		    .frequency {
		      font-size: 0.26rem;
		      color: #999;
		    }
		  }
		  .time {
		    line-height: 0.45rem;
		    font-size: 0.26rem;
		    color: #999;
		  }
		  .bonusPool {
		    line-height: 0.35rem;
		    font-size: 0.26rem;
		    color: #999;
		    .num {
		      color: #db0928;
		    }
		  }
		  
		}
		.status {
		  margin-top: 0.1rem;
		  padding-left: 0.3rem;
		  padding-bottom: 0.1rem;
		  font-size: 0.26rem;
		  .wait {
		    color: #fabc00;
		  }
		  .start {
		    color: #666;
		  }
		  .win {
		    color: #db0928;
		  }
		}
	}

	.dia_top {
	  border-top-left-radius: 5px;
	  border-top-right-radius: 5px;
	  background-color: #ffeff1;
	  text-align: center;
	  padding-top: 0.3rem;
	  padding-left: 0.4rem;
	  padding-right: 0.4rem;
	  padding-bottom: 0.3rem;
	  	.title {
	  	  font-size: 0.36rem;
	  	  color: #333;
	  	  margin-bottom: 0.16rem;
	  	}
	  	.dia_times {
  		  font-size: 0.3rem;
  		  color: #666;
  		}
  		.text {
		  margin-top: 0.24rem;
		  line-height: 0.32rem;
		  font-size: 0.26rem;
		  color: #494949;
		  	.text_red {
		  	  color: #db0928;
		  	}
		}
		.vivid {
		  width: 3rem;
		  margin: 0.4rem auto;
		  font-size: 0.34rem;
		  color: #db0928;
		}
		.btn {
		  width: 3.2rem;
		  border-radius: 5px;
		  height: 0.76rem;
		  line-height: 0.76rem;
		  color: #fff;
		  background-color: #f1425c;
		  font-size: 0.34rem;
		  text-align: center;
		  margin: 0 auto;
		}
	}
</style>

<style lang="less">
@button-tab-border-radius: 0.6rem;
	.top{
		.vux-button-group > a.vux-button-group-current{
			color: #fff !important;
			background: #dd1633 !important;
		}
		.vux-button-group{
			height: 0.8rem !important;
		}
		.vux-button-group > a{
			height: 0.8rem !important;
			line-height: 0.8rem !important;
			font-size: 0.36rem !important;
			color: #dd1633 !important;
			background: rgba(0,0,0,0) !important;
			
		}
		.vux-button-group > a.vux-button-tab-item-first:after, .vux-button-group > a.vux-button-tab-item-last:after{
			border: 0.02rem solid #dd1633;
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
			color: #9d9d9d;
		}
		.recent{
			color: #000;
		}
		.vux-timeline-item-color{
			background-color:#e42d48;
		}
		.vux-timeline-item-tail{
			background-color:#e42d48;
		}
		.vux-timeline-item-head-first{
			background-color:#e42d48;
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
			text-align: left !important;
			width: 92% !important;
			padding-right: 0.6rem !important;
		}
		.weui-cell_access .weui-cell__ft{
			padding-right: 1.75rem !important;
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
			max-width: 25rem !important;
			width: 90% !important;
		}
	}
</style>