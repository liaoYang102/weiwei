<template>
	<section class="benefits">
		<settingHeader :title="title"></settingHeader>
		<div class="top">
			<p>暂未满足条件</p>
			<p>专享 <span>5</span> 大权益 每月预计可赚 <span>2000+</span></p>
			<router-link to="/member/purse/hasqrcode"><div class="btn">查看满足条件</div></router-link>
		</div>

		<div class="content">
			<div class="title">
				<p>专享五大权益</p>
				<p class="text mt">专门为您打造的至尊礼遇</p>
			</div>
			<div class="box">
				<div class="img"><img :src="zc.img"></div>
				<div class="flex">
					<p>注册奖励</p>
					<p class="text mt">注册VlP会员可获信用积分<span>{{zc.num}}</span>分。</p>
				</div>
			</div>
			<div class="box">
				<div class="img"><img :src="gw.img"></div>
				<div class="flex">
					<p>购物奖励</p>
					<p class="text mt">可获得消费额<span>{{gw.num}}</span>的CGC通用积分。</p>
				</div>
			</div>
			<div class="box">
				<div class="img"><img :src="jf.img"></div>
				<div class="flex">
					<p>积分抵现金</p>
					<p class="text mt">CGC通用积分在商城<span>{{ jf.num}}</span>抵现金通用。</p>
				</div>
			</div>
			<div class="box">
				<div class="img"><img :src="ydj.img"></div>
				<div class="flex">
					<p>赢大奖</p>
					<p class="text mt">每一次消费均有机会赢<span>{{ydj.num}}</span>元通用积分。</p>
				</div>
			</div>
			<div class="box">
				<div class="img"><img :src="tj.img"></div>
				<div class="flex">
					<p>推荐得积分</p>
					<p class="text mt">信用积分<span>{{ tj.num}}</span>分/消费额<span>{{ tj.number}}</span>CGC通用积分</p>
				</div>
			</div>
			<div class="btn">
				<span>权益说明</span>  
				<img src="../../../assets/images/member/go.png">
			</div>
		</div>
	</section>
</template>


<script>
	import settingHeader from '../../../components/setting_header'
	export default {
		components: {
			settingHeader
		},
		data(){
        	return {
        		title:'会员权益',
        		zc:{
        			num: 200, img: './static/member/jf.png'
        		},
        		gw:{
        			num: '10%', img: './static/member/bag.png'
        		},
        		jf:{
        			num: '1:1', img: './static/member/money.png'
        		},
        		ydj:{
        			num: '5000', img: './static/member/lw.png'
        		},
        		tj:{
        			num: '200', number: '10%', img: './static/member/heart.png'
        		}
        	}
        },
        methods: {},

	}
</script>

<style lang="less" scoped>
	.benefits{
		background: #fff;
		.top{
			width: 100%;
			background: url(../../../assets/images/member/benefitsBg.png) no-repeat;
			background-size: 100% 100%;
			text-align: center;
			font-size: 0.3rem;
			color: #1A2642;
			padding-bottom: 0.72rem;
			p:nth-child(1){
				font-size: 0.48rem;
				padding-top: 0.53rem;
			}
			p:nth-child(2){
				margin: 0.28rem 0;
			}
			span{
				font-size: 0.36rem;
			}
			.btn{
				width:4.1rem;
				height: 0.78rem;
				background:linear-gradient(70deg,#7EE8FF,#336FFF);
				border-radius:0.39rem;
				text-align: center;
				color: #fff;
				font-size: 0.28rem;
				margin: auto;
				line-height: 0.78rem;
			}
		}

		.content{
			padding: 0.8rem 0 0.7rem 0;
			color: #1A2642;
			font-size: 0.36rem;
			.mt{
				margin-top: 0.2rem;
			}
			.text{
				color: #90A2C7;
				font-size: 0.26rem;
			}
			.title{
				text-align: center;
				padding-bottom: 0.07rem;
			}
			.box{
				display: flex;
				margin-top: 0.62rem;
				margin-left: 0.51rem;
				
				.img{
					width: 1rem;
					margin-right: 0.28rem;
					img{
						width: 100%;
					}
				}

				.flex{
					flex: 1;
				}
				span{
					color: #1A2642;
				}
			}
			.btn{
				width:3rem;
				height:0.66rem;
				border: 1px solid #90A2C7;
				border-radius:0.33rem;
				text-align: center;
				color: #90A2C7;
				margin: auto;
				line-height: 0.66rem;
				font-size: 0.26rem;
				margin-top: 0.71rem;
				img{
					width: 8%;
					margin-top: 0.1rem;
					display: inline-block;
				}
			}
		}
	}
</style>