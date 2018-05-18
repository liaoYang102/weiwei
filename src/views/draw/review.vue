<template>
	<section style="height: 100%;background-color: #E32921;">
		<div class="wrapper" ref="wrapper">
			<div class="content">
				<!-- <drawHeader :title="title"></drawHeader> -->
				<!-- 轮播 -->
				<!-- <swiper :options="swiperOption" class="swiper">
			        <swiper-slide v-for="item in imgList">
			        	<img :src="item">
			        </swiper-slide>
			        <div class="swiper-pagination" slot="pagination"></div>
		        </swiper> -->
		        <div class="head">
					<img src="../../assets/images/draw/lottery_index1.png">
				</div>
		        
                <div class="drawList">
                	<p class="wonderful">往期回顾</p>
                    <ul class="commodity">
                    	<group  v-for="(item,index) in drawList">
                    		<cell>
		                    	<li @click="$router.push({path: '/draw/pastevents'})">
		                    		<div class="left img">
		                    			<img src="../../assets/images/draw/lottery_index7.png" alt="">
		                    			<div class="arrow">
		                    				<img src="../../assets/images/draw/lottery_index8.png" alt="" >
		                    			</div>
		                    		</div>
		                    		
		                    		<div class="left container">
		                    			<p class="lucky">{{ item.title}}</p>
		                    			<p class="num">参加人数:{{ item.num}}</p>
		                    			<p class="bonusPool">奖金池:<span>￥{{ item.money}}</span></p>
		                    		</div>
		                    		<div class="clear"></div>
		                    	</li>
                    		</cell>
                    	</group>
                    </ul>
                    <loading v-if="show"></loading>
                    <noMore v-if="showNomore"></noMore>
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
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import drawHeader from './components/header'
	export default {
		components: {
			Loading,noMore,swiper, swiperSlide, drawHeader
		},
		data(){
			return {
				title: '幸运大抽奖',
				show:false,
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
				imgList:[
					'./static/draw/lottery_review1.png',
					'./static/draw/lottery_review1.png',
					'./static/draw/lottery_review1.png',
					'./static/draw/lottery_review1.png'
				],
				swiperOption :{
					pagination:{
						el:'.swiper-pagination'
					},
					autoplay: true,
					loop:true
				}
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

<style lang='less' scoped>
	@img:3.97rem;
	.swiper{
		height: @img;
	}
	img{
		width: 7.5rem;
		height: @img;
	}
</style>

<style lang="less" scoped>
.wrapper {
	height: 100%;
	overflow: hidden;
}
.head {
  	width: 100%;
  	img{
  		width: 100%;
  		display: block;
  		margin: 0;
  		padding: 0;
  	}
}
.drawList{
	width: 94.7%;
	margin: 0.2rem auto 0.24rem auto;
	background: #fff;
	border-radius: 0.08rem;
	padding-top: 0.36rem;
	.wonderful {
	  text-align: center;
	  width: 100%;
	  font-size: 0.36rem;
	  color: #333;
	}
	li {
	  padding-top: 0.29rem;
	  position: relative;
	  padding-bottom: 0.3rem;
	  margin-right: 0.24rem;
	  border-bottom: 1px solid #E6E6E6;
	  .img{
	  	position: relative;
	    width: 2.42rem;
	    height: 1.5rem;
	    img{
	    	width: 100%;
	    	height: 100%;
	    }
	  }
	  .left{
	  	float: left;
	  }
	  .arrow {
	    width: 0.33rem;
	    position: absolute;
	    bottom:0.1rem;
	    right: 0.1rem;
	    img{
	    	width: 100%;
	    	height: 100%;
	    }
	  }
	  .container {
	    margin-left: 0.3rem;
	    line-height: .36rem;
	    .lucky {
	      font-size: .3rem;
	      color: #1A2642;
	      margin-bottom: 0.48rem;
	      margin-top: 0.05rem;
	    }
	    .num {
	      font-size: .26rem;
	      color: #666666;
	    }
	    .bonusPool {
	      font-size: .26rem;
	      color: #666666;
	      span {
	        color: #E32921;
	        font-size: 0.3rem;
	      }
	    }
	  }
	}
}
</style>

<style lang="less">
.content .swiper-pagination-bullet-active{
	background: #fff;
}
.commodity{
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