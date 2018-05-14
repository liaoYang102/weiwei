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
				<p class="courier">官方电话：<span @click="call" class='official'>95543</span></p>
			</div>
			<div class="clear"></div>
		</div>
		<div class="logTime-line">
			<timeline>
				<timeline-item v-for="(i, index) in item" :key="index">
					<h4 :class="[index === 0 ? 'recent' : 'default']" >{{i.Node}}</h4>
					<p :class="[index === 0 ? 'recent' : 'default']" class='bottom'>{{i.Time}}</p>
				</timeline-item>
			</timeline>
		</div>
		<div class="recommended">
			<recommended></recommended>
		</div>
		<div class="comment">
			<div class="fr">
				<div class="fl" @click="showToast">在线客服</div>
				<div class="fl dispatch" @click="goWritecomments">派件评价</div>
			</div>
		</div>
	</section>
</template>

<script>
	import settingHeader from '../../components/setting_header'
	import recommended from './components/recommended'
	export default{
		data(){
			return{
				title:'物流动态',
				count: 4,
				item:[
					{
						Node:'已签收，签收人是签收',
						Time:'2018-04-15 12:42:12'
					},
					{
						Node:'【广州市】广东广州番禺南浦分部派件员：黄兵',
						Time:'2018-04-15 12:42:12'
					},
					{
						Node:'【广东广州番禺南浦分部】已收入',
						Time:'2018-04-15 12:42:12'
					},
					{
						Node:'快件已到达【广东广州番禺南浦分部】扫码员是【严进】',
						Time:'2018-04-15 12:42:12'
					},
					{
						Node:'快件已到达【广东广州番禺南浦分部】扫码员是【严进】',
						Time:'2018-04-15 12:42:12'
					},
					{
						Node:'快件已到达【广东广州番禺南浦分部】扫码员是【严进】',
						Time:'2018-04-15 12:42:12'
					}
				]
			}
		},
		components: {
	        settingHeader,recommended
	    },
	    methods:{
	    	goWritecomments(){
	    		this.$router.push({path: '/shop/write_comments'})
	    	},
	    	call(){
	    		window.location.href = 'tel://95543'
	    	},
	    	showToast(){
				this.$vux.toast.show({
					text: '暂无客服功能',
					type: 'text'
				})
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
		.logTime-line{
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
		.comment{
			height: 1rem;
			.fr{
				margin-right: 0.2rem;
				margin-top: 0.2rem;
				.fl{
					margin-left: 0.2rem;
					width:1.5rem;
					height:0.56rem; 
					border-radius: 4px ;
					border:1px solid #90A2C7;
					font-size:0.28rem;
					color:#90A2C7;
					text-align: center;
					line-height: 0.56rem
				}
				.dispatch{
					color: #336FFF;
					border-color: #336FFF;
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
			color:#FF7B11;
		}
		.default{
			color:#7E90BB;
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