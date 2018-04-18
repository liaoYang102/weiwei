<template>
	<section class="shop_details">
		<div v-if="tabTitle == '评价'" style="background: #fff">
			<comments></comments>
			<footers></footers>
		</div>

		<div v-else>
			<div><img src="../../assets/images/shop/theme_banner0.png" style="width: 100%;"></div>

			<div class="shop_content">
				<div class="shop">
					<div class="shop_title"><span>女装U宽腿牛仔裤(水洗产品)宽腿牛仔裤宽腿宽腿牛仔裤</span></div>
					<div class="shop_left">
						<span class="shop_red">￥3598</span>
						<div class="shop_score">+266积分</div><br>
						<span>运费:10.00</span>
					</div>
					<div class="shop_right">
						<div class="shop_collection">
							<img src="../../assets/images/shop/collection.png"><br>
							<span>收藏</span>
						</div>
						<div class="shop_share">
							<img src="../../assets/images/shop/share.png"><br>
							<span>分享</span>
						</div>
					</div>
				</div>

				<div class="shop_cell">
					<group>
					    <cell title="店铺名" is-link>
					    	<div class="cell_item">
					    		<img src="../../assets/images/shop/UNIQLO.png">
					    		<span>优衣库旗舰店</span>
					    	</div>
					    </cell>
					    <cell title="支付方式">
					    	<div class="pr">积分加现金</div>
					    </cell>
					</group>

					<group>
						<cell title="规格">
							<div class="pr" @click="showMask">请选择尺码</div>
						</cell>
					</group>

					<div class="comments">
						<div class="comments_title">商品评价</div>
						<div class="comments_details">
							<div class="comments_author">
								<img src="../../assets/images/shop/photo.png">
								<span class="name">陈独秀</span>
							</div>
							
							<div>很好很好,裤子正好,还要弹性。</div>
							<div  class="comments_date">2018.03.30 颜色:蓝色; 尺码:170/92A/M</div>
						</div>
						
						<div class="comments_btn">查看全部评价</div>
					</div>
				</div>
			</div>

			<div class="details">
				<div class="title">图文详情</div>
				<div class="img"><img src="../../assets/images/shop/shop_details.png"></div>
				<div class="details_text">
					<div class="text">
						<p>缤纷绽放 尽享喜悦</p>
						<span>—— 芬兰经典品牌Marimekko合作系列</span>
						<p class="text_many">
							芬兰经典设计品牌Marimekko创立于1951年,以原始版画和色彩闻名于世。
						</p>
					</div>
				</div>
			</div>

			<footers></footers>

			<specifications ref='sp'></specifications>

		</div>
		
	</section>
</template>

<script>
import specifications from './components/specifications' 
import comments from './components/comments'
import footers from './components/shop_details_footer'
export default {
	components: {
		specifications, comments, footers
	},
	data(){
		return {
			tabTitle: '评价'
		}
	},
	methods: {
		showMask: function() {
		    this.$refs.sp.show1 = true;
		}
	}
}	
</script>

<style lang="less" scoped>
.shop_details{
	width: 100%;
	background: #F5F6FA;
	.shop_content{
		background: #FFF;
		.shop{
			width: 93.5%;
			font-size: 0.32rem;
			color: #1A2642;
			word-wrap: break-word; 
			word-break: normal;
			padding-top: 0.2rem;
			margin: 0 auto;
			.shop_left{
				float: left;
				width: 50%;
				margin-top: 0.31rem;
				font-size: 0.24rem;
				color: #90A2C7;
				padding-bottom: 0.29rem;
				.shop_red{
					color: #F23030;
					font-size: 0.32rem;
				}
				.shop_score{
					width: 1.2rem;
					background-image: linear-gradient(241deg, #5EC3FF 1%, #106FE3 100%);
					text-align: center;
					color:#fff;
					font-size: 0.22rem;
					height: 0.36rem;
					line-height: 0.36rem;
					border-radius: 0.05rem;
					margin: 0.1rem 0 0.19rem 0.1rem;
					padding: 0.02rem 0;
					display: inline-block;
				}
			}
			.shop_right{
				float: left;
				width: 50%;
				margin-top: 0.31rem;
				font-size: 0.2rem;
				color: #90A2C7;
				img{
					width: 47%;
				}
				.shop_share{
					float: right;
					border-right: 1px solid #90A2C7;
				}
				.shop_collection{
					float: right;
					margin-left: 0.27rem;
				}
			}
		}
		.shop_cell{
			width: 100%;
			clear: both;
			background: #F5F6FA;
			.cell_item{
				img{
					width: 15%;
					vertical-align:middle;
				}
			}
			.pr{
				padding-right: 0.44rem;
			}
			.comments{
				background: #FFF;
				margin: 0.2rem 0;
				font-size: 0.28rem;
				padding-left: 0.19rem;
				padding-bottom: 0.32rem;
				color: #1A2642;
				.comments_title{
					padding-top: 0.25rem;
					margin-bottom: 0.3rem;
				}
				.comments_details{
					font-size: 0.24rem;
					.comments_author{
						margin-bottom: 0.23rem;
						img{
							float: left;
							width: 8.5%;
							margin-right: 0.18rem;
						}
						.name{
							color: #90A2C7;
							line-height: 0.65rem;
						}
					}
					.comments_date{
						margin-top: 0.08rem;
						color: #90A2C7;
						margin-bottom: 0.41rem;
					}
				}
				.comments_btn{
					width: 2.4rem;
					margin: 0 auto;
					border: 0.02rem solid #336FFF;
					border-radius: 0.1rem;
					text-align: center;
					color: #336FFF;
					font-size: 0.28rem;
					padding: 0.02rem 0;

				}
			}
		}
	}

	.details{
		background: #FFF;
		margin-bottom: 1rem;
		.title{
			font-size: 0.32rem;
			color: #666666;
			text-align: center;
			padding: 0.3rem 0;
		}
		.img{
			img{
				width: 100%;
			}
		}
		.details_text{
			width: 100%;
			border-top: 0.01rem solid #eeeeee;
			.text{
				width: 77%;
				margin: 0 auto;
				font-size: 0.32rem;
				color: #222222;
				padding-bottom: 0.54rem;
				p{
					padding-top: 0.41rem;
				}
				.text_many{
					font-size: 0.24rem;
				}
			}
		}
	}
}
</style>

<style lang="less">
.shop_cell .weui-cell{
	padding: 0.3rem 0.15rem !important;
}
.shop_cell .weui-cells:before{
	border-top: 0.01rem solid #F5F6FA !important;
}
.shop_cell  .weui-cell:before{
	border-top: 0.01rem solid #F5F6FA !important;
}
.shop_cell .vux-label{
	color: #90A2C7 !important;
	font-size: 0.28rem !important;
}
.shop_cell .weui-cell__ft{
	font-size: 0.3rem !important;
	color: #1A2642 !important;
}
.shop_cell .weui-cell_access .weui-cell__ft{
	padding-right: 0.79rem !important;
}
.shop_cell .weui-cell_access .weui-cell__ft:after{
	right: 0.45rem !important;
	border-color: #90A2C7 !important;
}
.shop_cell .weui-cells:after{
	border-bottom: 0.01rem solid #F5F6FA !important;
}
.shop_cell .vux-no-group-title{
	margin-top: 0.22rem;
}
</style>