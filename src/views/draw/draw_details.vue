<template>
	<section>
		<settingHeader :title="title"></settingHeader>
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
	</section>
</template>

<script>
	import settingHeader from '../../components/setting_header'
	export default {
		components:{
			settingHeader
		},
		data(){
			return {
				title: '抽奖详情',
				process: [
					{step: '开奖时间2019-08-08 18:00:00', date: '2018-02-09 18:20:10'},
					{step: '成功参与“周末幸运大抽奖”', date: '2018-02-09 18:20:10'},
					{step: '你花了￥1,256购买了一双耐克KD10广州万国奥特广场负一层', date: '2018-02-09 18:20:10'},
				],
			}
		}
	}
</script>

<style lang="less" scoped>
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

	.time-line{
		background: #fff;
		width: 90%;
		margin: 0.2rem auto 0.3rem auto;
		border-radius: 0.1rem;
		height: 75%;
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
</style>

<style lang="less">
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
</style>