<template>
	<section style="height: 100%;background: #E32921;">
		<div class="wrapper" ref="wrapper">
			<div class="content">
				<settingHeader :title="title"></settingHeader>

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
                	<p class="wonderful">精彩推荐</p>
                    <ul class="commodity">
                    	<group  v-for="(item,index) in reviewData.lists" :key="index">
                    		<cell>
		                    	<li @click="$router.push({path: '/draw/pastevents'})">
		                    		<div class="img">
		                    			<img :src="item.thumb" alt="">
		                    			<div class="arrow">
		                    				<img src="../../assets/images/draw/lottery_index8.png" alt="" >
		                    			</div>
		                    		</div>
		                    		<div class="container flex">
		                    			<p class="lucky">{{ item.title}}</p>
		                    			<p class="num">参加人数:{{ item.user}}</p>
		                    			<p class="bonusPool">奖金池:<span>￥{{ item.bonusPool}}</span></p>
		                    		</div>
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
	import settingHeader from '../../components/setting_header'
	import url from '../../config/url'
	export default {
		components: {
			Loading,noMore,settingHeader
		},
		data(){
			return {
				show:false,
				showNomore: false,
				reviewData: {},
				title: '幸运大抽奖',
				page: 1
			}
		},
		mounted() {
			this.getData()
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
			goPastevents(){
				this.$router.push({ path: '/draw/pastevents'})
			},
			LoadData() {
				this.page ++;
				var _this = this
				_this.show = true
				if(_this.showNomore){
					_this.show = false; 
				}else{
					setTimeout(function(){
						_this.show = false;
						let len = _this.reviewData.lists.length;
						let par = new URLSearchParams()
						par.append('page',_this.page)
						_this.$http.post(url.draw.getReviewLists,par).then(function (response) {
							if( response.status == 200 && response.data != null&&response.data.result.page == _this.page){
								_this.reviewData.lists = _this.reviewData.lists.concat(response.data.result.lists)
							}
							console.log(_this.reviewData);
							if(len == _this.reviewData.lists.length){
								_this.showNomore = true;
							}
						}).catch(function (error) {
							console.log(error);
						});
					},3000)
				}
			},
			getData(){
				let _this = this;
				this.$http.post(url.draw.getReviewLists,{}).then(function (response) {
					if( response.status == 200 && response.data != null){
						_this.reviewData = response.data.result
					}
					console.log(_this.reviewData);
				}).catch(function (error) {
					console.log(error);
				});
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
		        font-size: .6rem;
		        font-weight: 500;
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
				    border-radius: 0.62rem ; 
				    border: 1px solid #FF2D4F;
				    margin-right: 0.64rem;
				    color: #FF3B5A;
				    font-size: 0.32rem;
				    padding: 0.25rem 0; 
				    width: 44.5%;
				}
				li:nth-child(2) {
			      	margin-right: 0;
			    }
			}
			.btn{
                width:81.5%; 
				background:linear-gradient(-90deg,rgba(255,92,52,1),rgba(255,42,75,1));
				box-shadow:0px 0px 30px 0px rgba(255,81,58,0.5);
				border-radius:0.48rem;
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
	  display: flex;
	  .flex{
	  	flex: 1;
	  }
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
	      margin-bottom: 0.4rem;
	      margin-top: 0.05rem;
	      word-wrap: break-word;
	      display: -webkit-box;
	      -webkit-line-clamp: 2;
	      -webkit-box-orient: vertical;
	      word-break: break-all;
	      height: 0.7rem;
	      overflow: hidden;
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
.commodity{
	padding: 0 0.2rem 0 0.3rem;
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
		width: 100%;
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