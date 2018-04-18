<template>
	<section class='logistics'>
		<settingHeader :title="title"></settingHeader>
		<div class="shop-log">
			<div class="fl">
				<img src="../../assets/images/shop/order_detail1.png" alt="">
			</div>
			<div class="fl" style="padding-top:8px;">
				<p class="status">物流状态：<span>已签收</span></p>
				<p class="courier">承运来源：申通快递</p>
				<p class="courier">运单编号：3352342313334</p>
				<p class="courier">官方电话：<span class='official'>95543</span></p>
			</div>
			<div class="clear"></div>
		</div>
		<div class="time-line">
			<timeline>
				<timeline-item v-for="(i, index) in count" :key="index">
					<h4 :class="[i === 1 ? 'recent' : '']" @click="test">Timeline Node {{i + 1}}</h4>
					<p :class="[i === 1 ? 'recent' : '']" class='bottom'>index {{i + 1}}</p>
				</timeline-item>
			</timeline>
		</div>
	</section>
</template>

<script>
	import settingHeader from '../../components/setting_header'
	export default{
		data(){
			return{
				title:'物流动态',
				count: 4
			}
		},
		components: {
	        settingHeader
	    },
	    methods:{
	    	test(){
	    		alert('we');
	    	}
	    }
	}
</script>

<style lang='less' scoped>
	.logistics{
		background-color: #F5F6FA;
		height: 100%;
		.shop-log{
			margin-top: 0.2rem;
			margin-bottom: 0.2rem;
			background-color: #fff;
			padding: 5px 0 5px 6px;
			img{
				width: 1.6rem;
				height: 1.6rem;
				margin-right: 0.2rem;
			}
			.status{
				height:0.4rem; 
				font-size:0.28rem;
				font-family:PingFangSC-Medium;
				color:#141C33;
				line-height:0.28rem;
				span{
					color:#2850FF;
				}
			}
			.courier{
				height:0.33rem; 
				font-size:0.24rem;
				font-family:PingFangSC-Regular;
				color:rgba(144,162,199,1);
				line-height:0.33rem;
			}
			.official{
				color:#2850FF;
			}
		}
		.time-line{
			background-color: #fff;
			.timeline-demo {
				p {
					color: #888;
					font-size: 0.8rem;
				}
				h4 {
					color: #666;
					font-weight: normal;
				}
				.recent {
					color: rgb(4, 190, 2)
				}
			}
		}
		
	}
</style>

<style lang='less'>
	.logistics{
		.vux-timeline{
			padding: 0.3rem;
			margin-bottom: 0.2rem;
		}
		.vux-timeline-item-content{
			padding:0.05rem 0 0.2rem 0.5rem;
		}
		.bottom{
			padding-bottom: 0.3rem;
			border-bottom: 2px solid #D8DFF0;
		}
		.recent{
			color: #FF7B11;
		}
		.vux-timeline-item-color{
			background-color:#90A2C7;
		}
		.vux-timeline-item-tail{
			background-color:#90A2C7;
		}
		.vux-timeline-item-head-first{
			background-color:#FF7B11;
			i{
				display: none;
			}
		}
	}
</style>