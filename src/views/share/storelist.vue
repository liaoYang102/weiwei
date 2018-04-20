<template>
	<div class="storelist">
		<settingHeader :title="title"></settingHeader>
		<div class="nav">
			<div class="area">
				<p>区域<i class="iconfont icon-shixinjiantou-copy"></i></p>
			</div>
			<div class="type">
				<p>类型<i class="iconfont icon-shixinjiantou-copy"></i></p>
			</div>
			<div class="price">
				<p>价格<i class="iconfont icon-shixinjiantou-copy"></i></p>
			</div>
		</div>

		<div class="wrapper" ref="wrapper">
			
			<div class="content">
				<!-- <h2>附近商家 <span class="fr">更多<i class="iconfont icon-arrow-right"></i></span></h2> -->
				<div class="list">
					<ul>
						<li class="clearfix">
							<div class="left">
								<img src="../../assets/images/share/md_logo.png" alt="">
							</div>
							<div class="right">
								<p class="title">章光101（番禺店）<span class="juli">5.5km</span></p>
								<p class="content ellipise">[番禺]金牌双人套餐，提供免费WiFi</p>
								<p class="nr"><span class="momey">￥120</span><span class="ms_price">门市价:￥150</span><span class="num">已售：2414</span></p>
								<p class="zhekou">8折</p>
							</div>
						</li>
						<li class="clearfix">
							<div class="left">
								<img src="../../assets/images/share/md_logo.png" alt="">
							</div>
							<div class="right">
								<p class="title">章光101（番禺店）<span class="juli">5.5km</span></p>
								<p class="content ellipise">[番禺]金牌双人套餐，提供免费WiFi</p>
								<p class="nr"><span class="momey">￥120</span><span class="ms_price">门市价:￥150</span><span class="num">已售：2414</span></p>
								<p class="zhekou">8折</p>
							</div>
						</li>
						<li class="clearfix">
							<div class="left">
								<img src="../../assets/images/share/md_logo.png" alt="">
							</div>
							<div class="right">
								<p class="title">章光101（番禺店）<span class="juli">5.5km</span></p>
								<p class="content ellipise">[番禺]金牌双人套餐，提供免费WiFi</p>
								<p class="nr"><span class="momey">￥120</span><span class="ms_price">门市价:￥150</span><span class="num">已售：2414</span></p>
								<p class="zhekou">8折</p>
							</div>
						</li>
						<li class="clearfix">
							<div class="left">
								<img src="../../assets/images/share/md_logo.png" alt="">
							</div>
							<div class="right">
								<p class="title">章光101（番禺店）<span class="juli">5.5km</span></p>
								<p class="content ellipise">[番禺]金牌双人套餐，提供免费WiFi</p>
								<p class="nr"><span class="momey">￥120</span><span class="ms_price">门市价:￥150</span><span class="num">已售：2414</span></p>
								<p class="zhekou">8折</p>
							</div>
						</li>
						<li class="clearfix">
							<div class="left">
								<img src="../../assets/images/share/md_logo.png" alt="">
							</div>
							<div class="right">
								<p class="title">章光101（番禺店）<span class="juli">5.5km</span></p>
								<p class="content ellipise">[番禺]金牌双人套餐，提供免费WiFi</p>
								<p class="nr"><span class="momey">￥120</span><span class="ms_price">门市价:￥150</span><span class="num">已售：2414</span></p>
								<p class="zhekou">8折</p>
							</div>
						</li>
						<li class="clearfix">
							<div class="left">
								<img src="../../assets/images/share/md_logo.png" alt="">
							</div>
							<div class="right">
								<p class="title">章光101（番禺店）<span class="juli">5.5km</span></p>
								<p class="content ellipise">[番禺]金牌双人套餐，提供免费WiFi</p>
								<p class="nr"><span class="momey">￥120</span><span class="ms_price">门市价:￥150</span><span class="num">已售：2414</span></p>
								<p class="zhekou">8折</p>
							</div>
						</li>
					</ul>
				</div>
			</div>

		</div>

	</div>
</template>

<script>
	import settingHeader from '../../components/setting_header'
	import BScroll from 'better-scroll'

	export default {
		data() {
			return {
				title: '门店列表',
				data:[],
				scroll
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
		methods:{
			InitScroll(){
				
			},
			onLoadData(){

			}
		}
	}
</script>

<style lang="less" scoped>
	@import url('../../../static/css/global'); 
	.wrapper{
		height:11.15rem;
		overflow:hidden;
	}
	.storelist{

	}
	.header{
		/*position:relative !important;*/
	}
	.nav{
		border-top:1px solid #eee;
		width:100%;
		height:.9rem;
		display:flex;
		align-items: center;
		/*position: fixed;*/
		/*border-bottom:1px solid #333;*/
		div{
			flex: 1;
			display: flex;
			justify-content: center;
			p{
				font-size: .28rem;
				color: #1A2642;
				font-weight: bold;
				i{
					color: #90A2C7;
				}
			}
		}
	}
	.content{
		/*width: 95%;*/
		/*margin:0 auto;*/
		/*margin:1rem auto 0;*/
		/*border-top:1px solid #D8DFF0;*/
		/*padding-bottom: .4rem;*/
		h2{
			padding-left: 3%;
			font-size: .36rem;
			color: #141C33;
			font-weight: 600;
			margin-top: .4rem;
			span{
				font-weight: normal;
				color: #60719D;
				font-size: .28rem;
				display: block;
				vertical-align: bottom;
				padding-right: .2rem;
			}
		}
		.list{
			border-top: 1px solid #D8DFF0;
			/*border-bottom: 1px solid #D8DFF0;*/
			/*margin-top: .22rem;*/
			margin-bottom: 2rem;
			li{
				padding: .3rem .05rem .3rem 0;
				border-bottom: 1px solid #D8DFF0;
				.left{
					float: left;
					width: 2.04rem;
					height: 1.6rem;
					margin-right: .2rem;
					img{
						width: 100%;
						height: 100%;
					}
				}
				.right{
					float: left;
					/*border:1px solid #333;*/
					width: 4.75rem;
					.title{
						font-size: .32rem;
						color: #1A2642;
						font-weight: bold;
						.juli{
							font-size: .24rem;
							float: right;
						}
					}
					.content{
						color: #7386AD;
						font-size: .28rem;
						margin-top: .1rem;
					}
					.nr{
						margin-top: .1rem;
						.momey{
							font-size: .32rem;
							color: #F23030;
							font-weight: bold;
						}
						.ms_price,.num{
							font-size: .24rem;
							color: #7386AD;
							padding-left: .1rem;
						}
						.num{
							float: right;
							margin-top: .1rem;
						}
					}
					.zhekou{
						width: .8rem;
						height: .4rem;
						line-height: .4rem;
						text-align: center;
						border-radius: 5px;
						background: #e0e9fd;
						color: #336FFF;
						font-size: .22rem;
						margin-top: .1rem;
					}
				}
			}
		}
	}
</style>