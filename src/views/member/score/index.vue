<template>
	<section>
		<settingHeader :title="title"></settingHeader>
		<div class='head'>
			<div class="position">
				<img src="../../../assets/images/member/score_3.png" alt="">
				<span class='fr'>积分明细</span>
			</div>
			<div class="avatar">
				<img src="../../../assets/images/member/score_1.png" alt="">
			</div>
			<p class="integral">
				<span>15526 <img src="../../../assets/images/member/score_2.png" alt=""></span>
			</p>
			<p class="prompt"><span>去积分商城兑换商品</span></p>
		</div>
		<div class="earings">
			<p class="recent">
				<span class="fl">近七日平台积分收益</span>
				<span class="fr">本周</span>
			</p>
			<p class="time">
				<span class="fl">日期</span>
				<span class="fr">收益</span>
			</p>
			<scroller lock-x height='-281' @on-scroll-bottom="onScrollBottom" ref="scrollerBottom">
		      <div class="box2">
		      	<ul>
					<li>
						<span class="fl">03月21日</span>
						<span class="fr">220</span>
					</li>
					<li>
						<span class="fl">03月21日</span>
						<span class="fr">220</span>
					</li>
					<li>
						<span class="fl">03月21日</span>
						<span class="fr">220</span>
					</li>
					<li>
						<span class="fl">03月21日</span>
						<span class="fr">220</span>
					</li>
					<li>
						<span class="fl">03月21日</span>
						<span class="fr">220</span>
					</li>
					<li>
						<span class="fl">03月21日</span>
						<span class="fr">220</span>
					</li>
					<li>
						<span class="fl">03月21日</span>
						<span class="fr">220</span>
					</li>
		      	</ul>
		        <load-more tip="loading" id='loading'></load-more>
		      </div>
		    </scroller>
		</div>
	</section>
</template>

<script>
import settingHeader from '../../../components/setting_header'
export default {
	data(){
		return {
			title:'我的积分'
		}
	},
	components: {
	        settingHeader
	},
	methods:{
		onScrollBottom(){
	    	var load = document.getElementById("loading");
	    	load.style.display = 'block'
	    	if (this.onFetching) {
		        // do nothing
		      } else {
		        this.onFetching = true
		        setTimeout(() => {
		        	load.style.display = 'none'
		        	console.log(123);
		          	this.$nextTick(() => {
		            this.$refs.scrollerBottom.reset()
		          })
		          this.onFetching = false
		        }, 2000)
		      }
	    }
	}
}
</script>

<style lang='less' scoped>
	.vux-loadmore{
		display: none;
	}
	.head{
		width: 100%;
		height: 3.2rem;
		background-image: url(../../../assets/images/member/score_group.png);
		background-size: 100% 100%;
		padding-top: 0.36rem;
		position: relative;
		.position{
			position: absolute;
			top:0.19rem;
			left: 5.99rem;
			img{
				width: 0.34rem;
				height: 0.34rem;
			}
			span{
				font-size: 0.24rem;
				color:#fff;
				margin-left: 0.06rem;
				margin-top: 0.03rem;
			}
		}
		.avatar{
			width: 100%;
			text-align: center;
			margin-bottom: 0.2rem;
			img{
				width: 0.88rem;
				height: 0.88rem;
			}
		}
		.integral{
			width: 100%;
			height: 1.03rem;
			font-size: 0.74rem;
			text-align: center;
			color:#ffffff;
			line-height: 1.03rem;
			margin-bottom: 0.1rem;
			span{
				margin-right: -0.46rem;
			}
			img{
				width: 0.4rem;
				height: 0.4rem;
			}
		}
		.prompt{
			height: 0.5rem;
			text-align: center;
			span{
				text-align: center;
				display: inline-block;
				width: 3.65rem;
				height: 100%;
				font-size: 0.28rem;
				line-height: 0.5rem;
				color:#336fff;
				background-color: #fff;
				border-radius: 1rem;
			}
		}
	}
	.earings{
		padding-bottom: 15px;
		padding-left: 0.26rem;
		padding-right: 0.3rem;
		.recent{
			height: 1.02rem;
			line-height: 1.02rem;
			border-bottom: 1px solid #D8DFF0;
			.fl{
				font-size: 0.3rem;
				color:#1A2642;
			}
			.fr{
				font-size: 0.28rem;
				color: #1A2642;
			}
		}
		.time{
			height: 0.73rem;
			line-height: 0.73rem;
			border-bottom: 1px solid #D8DFF0;
			.fl{
				font-size: 0.24rem;
				color:#90A2C7;
			}
			.fr{
				font-size: 0.24rem;
				color: #90A2C7;
			}
		}
		ul{
			li{
				height: 0.96rem;
				line-height: 0.96rem;
				border-bottom: 1px solid #D8DFF0;
				.fl{
					font-size: 0.28rem;
					color: #1A2642;
				}
				.fr{
					font-size: 0.28rem;
					color: #1A2642;
				}
			}
		}
	}
</style>