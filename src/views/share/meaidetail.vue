<template>
	<div class="meai_detail">
		<settingHeader :title="title"></settingHeader>
		<div class="head">
			<p class="time">30分钟<span class="">德国进口</span></p>
			<p class="type">深部炎症治疗仪HD2400</p>
			<p class="fuwu">眼罩/免费wifi/空调</p>
			<p class="fuyi">2018-02-16开始服役</p>
			<p class="img">
				<img src="../../assets/images/share/shebei.png" alt="">
			</p>
		</div>
		<div class="nr">
			<p class="contnt">WIRA（威伐）是由德国的生物物理学家G.Hoffman发明的。他首先将31种介质按照不同的比例、不同的数量经过7种不同的程序反应后获得了一种混合物。</p>
		</div>
		<div class="more">查看详情</div>
	</div>
</template>

<script>
	import settingHeader from '../../components/setting_header'
	import BScroll from 'better-scroll'

	export default {
		data() {
			return {
				title:"套餐详情"
			}
				
		},
		components:{
			settingHeader
		},
		/*created(){

		},*/
		mounted(){
			this.InitScroll();
		},
		computed:{
			
		},
		methods:{
			InitScroll(){
				/*this.$nextTick(() => {
			        this.scroll = new BScroll(this.$refs.wrapper, {})
			      })*/
			},
			onLoadData(){

			},
			
		}
	}
</script>

<style lang="less" scoped>
	@import url('../../../static/css/global');
	.meai_detail{
		width: 100%;
		overflow: hidden;
		.head{
			width: 100%;
			height: 2.5rem;
			background: #336FFF;
			padding: .54rem .7rem;
			overflow: hidden;
			position: relative;
			.time{
				font-size: .36rem;
				color: #fff;
				font-weight: bold;
				/*.border;*/
				width: 4rem;
				span{
					display: inline-block;
					margin-left: .4rem;
					padding: 2px;
					background:#5b8bff;
					color: #fff;
					font-size: .2rem;
					font-weight: normal;
					border-radius: 4px;
					position: relative;
					top: -.05rem;
				}
			}
			.img{
				width: 2rem;
				height: 2.9rem;
				position: absolute;
				bottom: 0;
				right: 2rem;
				box-shadow: #555 0 0 30px 3px;
				img{
					width: 100%;
					height: 100%;
				}
			}
			.type{
				font-weight: bold;
				font-size: .28rem;
				color: #fff;
				margin: .15rem 0;
			}
			.fuwu,.fuyi{
				font-size: .24rem;
				color: #fff;
				margin-bottom: .15rem;
			}

		}
		.nr{
			padding: .24rem .58rem;
			/*text-align: center;*/
			.contnt{
				font-size: .28rem;
				color: #7386AD;
				text-indent: .56rem;
				text-align: justify;
			}
		}
		.more{
			border-top: 1px solid @xian;
			height: 1rem;
			line-height: 1rem;
			text-align: center;
			color: #1A2642;
			font-size: .28rem;
			/*.border;*/
		}
	}

</style>