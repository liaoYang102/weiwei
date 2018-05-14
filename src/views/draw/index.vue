<template>
	<section style="height: 100%;background: #E32921;">
		<div class="wrapper" ref="wrapper">
			<div class="content">
				<!-- <drawHeader :title="title"></drawHeader> -->

				<div class="head">
					<img src="../../assets/images/draw/lottery_index1.png">
					<div class="list">
						<ul class="ul-list">
							<li>
								<p class="status">中奖次数</p>
								<p class="money">5</p>
							</li>
							<li>
								<p class="status">待领奖金</p>
								<p class="money">5000</p>
							</li>
							<li>
								<p class="status">中奖总额</p>
								<p class="money">25000</p>
							</li>
						</ul>

						<div class="navList">
							<ul>
								<li class="li-nav" @click="$router.push({path: '/draw/luckyrank'})">	
									<span>幸运排行</span>
								</li>
								<li class="li-nav" @click="$router.push({path: '/draw/record'})">
									<span>中奖记录</span>
								</li>
							</ul>
							<div class="btn" @click="$router.push({path: '/draw/review'})">
								<span>往期回顾</span>
							</div>
							<div class="round1"></div>
							<div class="round2"></div>
						</div>
					</div>
		        </div>
				
                <div class="drawList">
                	<p class="wonderful">往期视频</p>
                    <ul class="commodity">
                    	<li v-for="(item,index) in drawList" @click="$router.push({path: '/draw/pastevents'})">
                    		<div class="img">
								<img src="../../assets/images/draw/lottery_index7.png" alt="">
							</div>
							<div class="bonusPool">奖金池{{ item.money}}</div>
							<div class="container">
								<p class="lucky">{{ item.title}}</p>
								<p class="num">{{ item.num}}人参与</p>
							</div>
                    	</li>
                    	<div class="clear"></div>
                    </ul>
                    <div class="more" @click="$router.push({path: '/draw/review'})"><span>查看更多></span></div>
                </div>
                <div class="clear"></div>
			</div>
		</div>
	</section>
</template>

<script>
	import BScroll from 'better-scroll'
	import Loading from '../../components/loading'
	import noMore from '../../components/noMore'
	import drawHeader from './components/header'
	export default {
		components: {
			Loading,noMore,drawHeader
		},
		data(){
			return {
				show:true,
				showNomore: false,
				drawList: [
					{ title: '第1263期周末幸运大抽奖', num: '1000000', money: '80000'},
					{ title: '第1263期周末幸运大抽奖', num: '1000000', money: '80000'},
					{ title: '第1263期周末幸运大抽奖', num: '1000000', money: '80000'},
					{ title: '第1263期周末幸运大抽奖', num: '1000000', money: '80000'},
					{ title: '第1263期周末幸运大抽奖', num: '1000000', money: '80000'},
					{ title: '第1263期周末幸运大抽奖', num: '1000000', money: '80000'},
					{ title: '第1263期周末幸运大抽奖', num: '1000000', money: '80000'},
					{ title: '第1263期周末幸运大抽奖', num: '1000000', money: '80000'}
				],
				title: '幸运大抽奖'
			}
		},
		mounted() {
			this.InitScroll()
		},
		methods: {
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
							// this.show = true;
							// this.LoadData()
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
			goPastevents(){
				this.$router.push({ path: '/draw/pastevents'})
			}
		}
	}
</script>

<style lang="less" scoped>
.wrapper {
	height: 100%;
	overflow: hidden;
	.content{
		padding-bottom: 0.24rem;
	}
}
.head {
  	width: 100%;
  	img{
  		width: 100%;
  		display: block;
  		margin: 0;
  		padding: 0;
  	}
  	.list {
		width: 94.7%;
		margin: 0 auto;
		background: #fff;
		padding-bottom: 0.48rem;
		border-radius: 0.08rem;
		.ul-list {
		    display: flex;
		    margin: 0 0.1rem;
		    border-bottom: 1px solid #E6E6E6;
		    padding-top: 0.28rem ;
		    padding-bottom: 0.15rem;
		    li {
		      flex: 1;
		      text-align: center;
		      padding-bottom: 0.2rem;
		      border-right: 1px solid #eee;
		      .money {
		        font-size: .64rem;
		        font-weight: 700;
		        color: #1A2642;
		        margin-top: 0.12rem;
		      }
		      .status {
		        font-size: 0.24rem;
		        color: #666666;
		      }
		    }
		    li:nth-child(3) {
		      border: none;
		    }
		}
		.navList {
		  width: 100%;
		  margin-top: 0.39rem;
		  background-color: #FFF;
		  position: relative;
		  	ul {
		  		display: flex;
		  		width: 81.5%;
		  		margin: 0 auto;
				.li-nav {
				    text-align: center;
				    flex: 1;
				    border-radius: 0.49rem ; 
				    border: 1px solid #FF2D4F;
				    margin-right: 0.64rem;
				    color: #FF3B5A;
				    font-size: 0.32rem;
				    padding: 0.25rem 0.6rem; 
				}
				li:nth-child(2) {
			      	margin-right: 0;
			    }
			}
			.btn{
                width:81.5%; 
				background:linear-gradient(-90deg,rgba(255,92,52,1),rgba(255,42,75,1));
				box-shadow:0px 0px 30px 0px rgba(255,81,58,0.5);
				border-radius:0.49rem;
				color: #fff;
				text-align: center;
				font-size: 0.32rem;
				padding: 0.25rem 0;
				margin: 0 auto;
				margin-top: 0.32rem;
			}
			.round1{
				position: absolute;
				background-color: #E32921;
				border-radius: 50%;
				width: 0.24rem;
				height: 0.24rem;
				top: 0;
				left: -0.12rem;
			}
			.round2{
				position: absolute;
				background-color: #E32921;
				border-radius: 50%;
				width: 0.24rem;
				height: 0.24rem;
				top: 0;
				right: -0.12rem;
			}
		}
	}
}

.drawList{
	width: 94.7%;
	margin: 0.2rem auto 0 auto;
	background: #fff;
	border-radius: 0.08rem;
	padding-bottom: 0.42rem;
	.wonderful {
	  padding-top: 0.36rem;
	  font-size: 0.36rem;
	  color: #1A2642;
	  text-align: center;
	  margin-bottom: 0.32rem;
	}
	li:nth-child(odd){
		margin-right: 0.1rem;
	}
	li {
		position: relative;
		width: 49%;
		float: left;
		.img{
		    width: 100%;
		    border-radius: 0.06rem;
		    img{
		    	width: 100%;
		    	border-radius: 0.06rem;
		    }
		}

		.bonusPool{
			position: absolute;
			top: 0;
			left: 25%;
			width:50%;
			background:linear-gradient(94.5deg,rgba(254,91,52,1),rgba(255,41,75,1));
			border-radius:0px 0px 8px 8px;
			color: #fff;
			font-size: 0.24rem;
			padding: 1px 0.1rem;
		}
	  /*.left{
	  	float: left;
	  }
	  
	  .arrow {
	    position: absolute;
	    width: 0.33rem;
	    left: 0.8rem;
	    top: 0.6rem;
	    img{
	    	width: 100%;
	    }
	  }*/
	  	.container {
		  	position: absolute;
		  	bottom: 0;
		  	left: 0.11rem;
		  	color: #fff;
		    .lucky {
		      font-size: .28rem;
		    }
		    .num {
		      font-size: .2rem;
		      margin-bottom: 0.1rem;
		    }
	    /*.bonusPool {
	      font-size: .26rem;
	      color: #90A2C7;
	      span {
	        color: #FF5365;
	      }
	    }*/
	  	}
	}
	.more{
		width: 100%;
		text-align: center;
		color: #A0A0A0;
		font-size: 0.24rem;
		margin-top: 0.43rem;
	}
}
</style>

<style lang="less">
.commodity{
	padding: 0 0.2rem;
	.weui-cells{
		margin-top: 0;
	}
	.vux-no-group-title{
		margin-top: 0;
	}
	.weui-cells:before{
		border-top: none;
	}
	.weui-cell{
		padding: 0;
	}
	.weui-cell__ft{
		text-align: left;
	}
	.weui-cell_access .weui-cell__ft{
		width: 100%;
	}
	.weui-cell_access .weui-cell__ft:after{
		width: 0.2rem;
		height: 0.2rem;
		right: 0.2rem;
		border-width: 0.04rem 0.04rem 0 0;
		border-color: #D8DFF0;
	}
	.weui-cells:after{
		border-bottom: solid 1px #D8DFF0;
	}
}	
</style>