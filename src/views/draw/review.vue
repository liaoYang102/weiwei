<template>
	<section style="height: 100%;">
		<div class="wrapper" ref="wrapper">
			<div class="content">
				<drawHeader :title="title"></drawHeader>
				<!-- 轮播 -->
				<swiper :options="swiperOption" class="swiper">
			        <swiper-slide v-for="item in imgList">
			        	<img :src="item">
			        </swiper-slide>
			        <div class="swiper-pagination" slot="pagination"></div>
		        </swiper>
		        
                <div class="drawList">
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
					'./static/images/lottery_review1.png',
					'./static/images/lottery_review1.png',
					'./static/images/lottery_review1.png'
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
	    	height: 100%;
	    }
	  }
	  .left{
	  	float: left;
	  }
	  .arrow {
	    width: 0.33rem;
	    position: absolute;
	    left: 0.8rem;
	    top: 0.6rem;
	    img{
	    	width: 100%;
	    	height: 100%;
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
.content .swiper-pagination-bullet-active{
	background: #fff !important;
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