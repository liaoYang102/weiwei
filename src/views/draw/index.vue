<template>
	<section style="height: 100%;">
		<div class="wrapper" ref="wrapper">
			<div class="content">
				<drawHeader :title="title"></drawHeader>

				<div class="head">
					<div class="list">
						<ul>
							<li>
								<p class="money">5000</p>
								<p class="status">待领奖金</p>
							</li>
							<li>
								<p class="money">5</p>
								<p class="status">中奖次数</p>
							</li>
							<li>
								<p class="money">25000</p>
								<p class="status">中奖总额</p>
							</li>
						</ul>
					</div>
		        </div>
				
		       	<div class="navList">
		       		<ul>
		       			<li>
		       				<router-link to="/draw/review">
		       					<img src="../../assets/images/draw/lottery_index3.png" alt="">
		       					<p>往期回顾</p>
		       				</router-link>
		       			</li>
		       		 	<li>
		       				<router-link to="/draw/luckyrank">
		       					<img src="../../assets/images/draw/lottery_index4.png" alt="">
		       					<p>幸运排行</p>
		       				</router-link>
		       			</li>

		   				<li>
		   					<img src="../../assets/images/draw/lottery_index5.png" alt="">
		   					<p>抽奖预告</p>
		   				</li>
		       			<li>
		       				<router-link to="/draw/record">
		       					<img src="../../assets/images/draw/lottery_index6.png" alt="">
		       					<p>中奖记录</p>
		       				</router-link>
		       			</li>
		       		</ul>
		        </div>

                <div class="drawList">
                	<p class="wonderful">精彩推荐</p>
                    <ul class="commodity">
                    	<group v-for="(item,index) in drawList">
							<cell is-link>
								<li @click="goPastevents">
									<div class="left img">
										<img src="../../assets/images/draw/lottery_index7.png" alt="">
									</div>
									<div class="arrow">
										<img src="../../assets/images/draw/lottery_index8.png" alt="" >
									</div>
									<div class="left container">
										<p class="lucky">{{ item.title}}</p>
										<p class="num">参加人数:{{ item.num}}</p>
										<p class="bonusPool">奖金池:<span>￥{{ item.money}}</span></p>
									</div>
									<span class="right"></span>
									<div class="clear"></div>
			                    </li>
							</cell>
						</group>
                    </ul>
                    <loading v-if="show"></loading>
                    <noMore v-if="showNomore"></noMore>
                </div>
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
					_this.showNomore = true;
				},3000)
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
}
.head {
  	background-image: url('../../assets/images/draw/lottery_index1.png');
  	background-size: 100% 100%;
  	width: 100%;
  	height: 1.8rem;
  	padding-top: 4.36rem;
  	.list {
	  width: 100%;
	  height: 1.49rem;
	  background-image: url('../../assets/images/draw/lottery_index2.png');
	  background-size: 100% 100%;
	  ul {
	    display: flex;
	    padding-top: 0.18rem;
	    padding-bottom: 0.12rem;
	    padding-left: 0.86rem;
	    padding-right: 0.44rem;
	    height: 80%;
	    li {
	      flex: 1;
	      text-align: center;
	      padding-top: 0.16rem;
	      border-right: 1px solid #eee;
	      .money {
	        font-size: .4rem;
	        font-weight: 700;
	        color: #dd1633;
	      }
	      .status {
	        font-size: 0.28rem;
	        color: #333;
	      }
	    }
	    li:nth-child(3) {
	      border: none;
	    }
	  }
	}
}
.navList {
  width: 100%;
  height: 1.68rem;
  background-color: #FFF;
  margin-bottom: 0.18rem;
  ul {
  display: flex;
  padding-top: 0.24rem;
	li {
	    text-align: center;
	    flex: 1;
	    img {
	      width: 0.78rem;
	      height: 0.78rem;
	    }
	    p {
	      font-size: 0.28rem;
	      color: #333;
	    }
	}
  }
}
.drawList{
	background: #fff;
	.wonderful {
	  padding-left: 0.18rem;
	  font-size: 0.32rem;
	  color: #333;
	  line-height: 0.7rem;
	}
	li {
	  padding-left: 0.18rem;
	  padding-top: 0.28rem;
	  position: relative;
	  padding-bottom: 0.28rem;
	  .img{
	    width: 1.54rem;
	    img{
	    	width: 100%;
	    }
	  }

	  .left{
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
	  }
	  .container {
	    margin-left: 0.25rem;
	    line-height: .36rem;
	    .lucky {
	      font-size: .32rem;
	      color: #000;
	      margin-bottom: 0.12rem;
	    }
	    .num {
	      font-size: .26rem;
	      color: #333;
	    }
	    .bonusPool {
	      font-size: .26rem;
	      color: #333;
	      span {
	        color: #dc1b33;
	      }
	    }
	  }
	  .right {
	    margin-right: 0.18rem;
	    font-size: .36rem;
	    color: #999;
	    line-height: 1.12rem;
	  }
	}
}
</style>

<style lang="less">
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
	}
	.weui-cell_access .weui-cell__ft{
		width: 100%;
	}
	.weui-cell_access .weui-cell__ft:after{
		width: 0.2rem !important;
		height: 0.2rem !important;
		right: 0.2rem !important;
		border-width: 0.04rem 0.04rem 0 0 !important;
	}
}	
</style>