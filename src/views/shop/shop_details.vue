<template>
	<section class="shop_details">
		<x-header :left-options="{backText: '',preventGoBack: true}" title="slot:overwrite-title" style="background:#fff;" @on-click-back="changeBack" class="tab_shop">
		    <div class="overwrite-title-demo" slot="overwrite-title">
		        <tab bar-position="bottom" custom-bar-width="40px">	
			      <tab-item :selected="tabTitle == '商品'" @on-item-click="onShop">商品</tab-item>
			      <tab-item :selected="tabTitle == '详情'" @on-item-click="scrollTo">详情</tab-item>
			      <tab-item :selected="tabTitle == '评价'" @on-item-click="onItemClick">评价</tab-item>
			    </tab>
		    </div>
	    </x-header>

		<div v-if="tabTitle == '评价'" style="background: #fff;height: 100%;">
			<comments></comments>
		</div>

		<div v-else>
    		<div class="shopImg">
    			<swiper :options="swiperOption" class="imgBox">
			       	<swiper-slide v-for="(item,index) in shopImg" :key="index">
			       		<div class="imgBox-item">
                        	<img class="previewer-demo-img" v-lazy="item.src" @click="show(index)">
			       		</div>
			       	</swiper-slide>
			    </swiper> 
    		</div>

			<div class="shop_content">
				<div class="shop">
					<div class="shop_title"><span>女装U宽腿牛仔裤(水洗产品)宽腿牛仔裤宽腿宽腿牛仔裤</span></div>
					<div class="shop_f">
						<div class="shop_left">
							<p class="shopPrice">
								<span class="priceNum">￥3598</span> 
								<span class="shopAcount">+266积分</span>
							</p>
							<span>运费:10.00</span>
						</div>
						<div class="shop_right">
							<div class="shop_collection" @click="collection">
								<img v-lazy="collectImg"><br>
								<span>{{ collectText}}</span>
							</div>
							<div class="shop_share" @click="showShareDialog">
								<img src="../../assets/images/shop/share.png"><br>
								<span>分享</span>
							</div>
						</div>
					</div>
					
				</div>

				<div class="shop_cell">
					<group>
					    <cell title="店铺名" :border-intent="false">
					    	<div class="cell_item">
					    		<img src="../../assets/images/shop/UNIQLO.png">
					    		<span>优衣库旗舰店</span>
					    	</div>
					    </cell>
					    <cell title="支付方式" :border-intent="false">
					    	<div class="pr">积分加现金</div>
					    </cell>
					</group>

					<group>
						<div @click="showMask">
							<cell title="规格">
								<div class="pr">
									<span>
										{{content}}
									</span>
								</div>
							</cell>
						</div>
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
						
						<div class="comments_btn" @click="view">查看全部评价</div>
					</div>
				</div>
			</div>
 
			<div class="details" id="details">
				<div class="title">图文详情</div>
				<div class="img"><img src="../../assets/images/shop/shop_details.png"></div>
				<div class="details_text">
					<div class="text">
						<p>缤纷绽放 尽享喜悦</p>
						<span>—— 芬兰经典品牌Marimekko合作系列</span>
						<p class="text_many">
							芬兰经典设计品牌Marimekko创立于1951年，以原始版画和色彩闻名于世。其理念是为人们带来快乐的每一天。优衣库携手Marimekko，推出新的服装合作系列。本次的特别合作系列，采用简约、富有创造力、功能性的设计，为您带来大胆不失活力的单品。
						</p>
					</div>
				</div>
			</div>
		</div>

		<specifications ref='sp' :confirm="confirm" :router="router"></specifications>

		<div class="footer">
			<div class="footer_icon" @click="showToast">
				<img src="../../assets/images/shop/customer.png"><br>
				<span>客服</span>
			</div>
			<router-link to="/shop/shop_cart">
				<div class="footer_icon">
					<img src="../../assets/images/shop/cart.png">
					<badge text="12"></badge><br>
					<span>购物车</span>
				</div>
			</router-link>
			
			<div class="footer-btn btn_green" @click="goShopcart">加入购物车</div>
			<div class="footer-btn btn_blue" @click="goConfirm">立即购买</div>
		</div>

        <div v-transfer-dom class="shareDialog">
          	<x-dialog v-model="showDialog" :hide-on-blur="true">
          		<div class="dialogs">
					<img src="../../assets/images/shop/rightShare.png" class="right">
					<div class="clear"></div>
					<div class="btn" @click="hideDialog">我知道了</div>
					<!-- <img src="../../assets/images/shop/Rectangle.png" class="mt10" @click="hideDialog"> -->
				</div>
          	</x-dialog>
        </div>

        <div v-transfer-dom>
	        <previewer :list="shopImg" ref="previewer" :options="options" @on-index-change="logIndexChange"></previewer>
	    </div>
		
	</section>
</template>

<script>
import specifications from './components/specifications' 
import comments from './components/comments'
import {XDialog} from 'vux'
import {swiper,swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
	components: {
		specifications, comments,XDialog,swiper,swiperSlide
	},
	data(){
		return {
			tabTitle: '商品',
			obj:null,
			collectImg:'./static/shop/collection.png',
			collectText: '收藏',
			showDialog: false,
			content:'"请选择尺码"',
			router: '',
			swiperOption: {
				autoHeight: true,
	        },
	        shopImg:[
	        	{	msrc: 'https://m.360buyimg.com/mobilecms/s750x366_jfs/t18775/221/1737433669/102730/f366197/5ad58a68N264b153b.jpg!cr_1125x549_0_72!q70.jpg.dpg',src: 'https://m.360buyimg.com/mobilecms/s750x366_jfs/t18775/221/1737433669/102730/f366197/5ad58a68N264b153b.jpg!cr_1125x549_0_72!q70.jpg.dpg'
			    },
			    {	msrc: 'https://img20.360buyimg.com/da/jfs/t18169/49/1676902787/199684/abf88174/5ad405d6N903b6152.jpg.webp',src: 'https://img20.360buyimg.com/da/jfs/t18169/49/1676902787/199684/abf88174/5ad405d6N903b6152.jpg.webp'
			    },
			    {	msrc: 'https://m.360buyimg.com/mobilecms/s750x366_jfs/t17776/57/1707882480/210974/217399d5/5ad6b797N78d99799.jpg!cr_1125x549_0_72!q70.jpg.dpg',src: 'https://m.360buyimg.com/mobilecms/s750x366_jfs/t17776/57/1707882480/210974/217399d5/5ad6b797N78d99799.jpg!cr_1125x549_0_72!q70.jpg.dpg'
			    }
	        ],
	        options: {
		        getThumbBoundsFn (index) {
		          let thumbnail = document.querySelectorAll('.previewer-demo-img')[index]
		          let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
		          let rect = thumbnail.getBoundingClientRect()
		          return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
		        }
	      	}
		}
	},
	create: function(){
		
	},
	mounted(){
		this.onRouter();
		let top = parseInt(document.getElementById('details').offsetTop);
		this.obj = top -47;
	},
	methods: {
		showMask: function() {
		    this.$refs.sp.show1 = true;
		},
		onRouter(){
			if(this.$route.params.title != null&& this.$route.params !=null){
				this.tabTitle = this.$route.params.title;
				window.scrollTo(0, 0);
			}
		},
		onShop(){
			this.tabTitle = '商品'
			window.scrollTo(0, 0);
			console.log('---11',this.tabTitle)
		},
		scrollTo(){
			this.tabTitle = '详情';
			var that = this;
			window.setTimeout(function(){
				let top = parseInt(document.getElementById('details').offsetTop);
				that.obj = top - 47;
				window.scrollTo(0,that.obj);
				console.log('---', that.obj)
			},200)
		},
		onItemClick () {
			this.tabTitle = '评价';
			window.scrollTo(0, 0);
	    },
	    view(){
	    	this.tabTitle = '评价';
	    	window.scrollTo(0, 0);
	    },
	    goShopcart(){
	    	if(this.content == '"请选择尺码"'){
	    		this.$refs.sp.show1 = true;
	    		this.router = 'goShopcart'
	    	}else{
	    		this.$router.push({ path: '/shop/shop_cart'})
	    	}
	    },
	    goConfirm(){
	    	if(this.content == '"请选择尺码"'){
	    		this.$refs.sp.show1 = true;
	    		this.router = 'goConfirm'
	    	}else{
	    		this.$router.push({ path: '/shop/confirm'})
	    	}
	    	
	    },
	    changeBack(){
			this.$store.state.vux.back= false;
			console.log('111',this.$store.state.vux.back)
			this.$router.go(-1)
		},
		collection(){
			if(this.collectImg == './static/shop/collection.png'){
				this.collectImg = './static/shop/collectAction.png'
				this.collectText = '已收藏'
			}else{
				this.collectImg = './static/shop/collection.png'
				this.collectText = '收藏'
			}
		},
		showShareDialog(){
			this.showDialog = true;
		},
		hideDialog(){
			this.showDialog = false;
		},
		confirm(){
			this.$refs.sp.show1 = false;
			let list3 = this.$refs.sp.list3 
    		if(list3 == [] || list3.length==0 || list3.length != this.$refs.sp.shopList.list.length){
    			this.showSpToast()
    		}
    		else{
    			for(var i =0;i<list3.length;i++){
    				if(list3[i] == null){
		    			this.showSpToast()
		    			return
    				}
    			}
    			if(this.$refs.sp.router == 'goShopcart'){
    				this.$router.push({ path: '/shop/shop_cart'})
    			}
    			if(this.$refs.sp.router == 'goConfirm'){
    				this.$router.push({ path: '/shop/confirm'})
    			}
    			if (this.$refs.sp.router != 'shop_cart') {
					this.content = this.$refs.sp.list3;
					this.content ='"' + this.content.join('" "') +'"';
	    		}
    		}
		},
		showToast(){
			this.$vux.toast.show({
				text: '暂无客服功能',
				type: 'text',
				width: '10em',
				position: 'middle'
			})
		},
		show(index) {
        	console.log('-=-=', index)
        	console.log(this.$refs.previewer);
          	this.$refs.previewer.show(index)
        },
        logIndexChange (arg) {
          	console.log(arg)
        },
        showSpToast(){
        	this.$refs.sp.show1 = true;
        	this.$vux.toast.show({
        		text: '请选择该商品的规格',
        		type: 'text',
        		width: '12em',
        		position: 'middle'
        	})
        }
	}
}	
</script>

<style lang="less" scoped>
.shop_details{
	height: 100%;
	width: 100%;
	background: #F5F6FA;
	.shopImg{
		margin-top: 0.92rem;
		width: 100%;
		height: 3.66rem;
		line-height: 3.66rem;
		img{
			width: 100%;
			display: inline-block; 
			vertical-align: middle;
		}
	}

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
			.shop_f{
				display: flex;
				align-items: center;
				.shop_left {
					width: 50%;
					margin: 0.31rem 0;
					font-size: 0.24rem;
					color: #90A2C7;
					.shopPrice{
						margin-bottom: 0.09rem;
						.priceNum{
							display: inline-block;
							font-size: 0.32rem;
							color: #F23030;
							font-weight: 700;
							vertical-align: middle;
						}
						.shopAcount{
							font-weight: normal;
							display: inline-block;
							padding-left: 0.06rem;
							padding-right: 0.08rem;
							height: 0.4rem;
							text-align: center;
							font-size: 0.24rem;
							line-height: 0.4rem;
							background-image: linear-gradient(238deg, #5EC3FF 0%, #106FE3 100%);
							border-radius: 0.04rem;
							color:#fff;
						}
					}
					
				}
				.shop_right {
					width: 50%;
					margin: 0.31rem 0;
					font-size: 0.2rem;
					color: #90A2C7;
					img {
						width: 47%;
					}
					.shop_share {
						float: right;
						border-right: 1px solid #90A2C7;
					}
					.shop_collection {
						float: right;
						text-align: center;
						padding-left: 0.22rem;
						span {
							text-align: center;
						}
					}
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
				padding-right: 0.1rem;
			}
			.comments{
				background: #FFF;
				margin-top: 0.2rem;
				border-bottom: 0.2rem solid #F5F8F9;
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
					padding: 0.05rem 0 0 0;

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
			padding-bottom: 1.2rem;
			.text{
				width: 77%;
				margin: 0 auto;
				font-size: 0.32rem;
				color: #222222;
				p{
					padding-top: 0.41rem;
				}
				.text_many{
					font-size: 0.24rem;
				}
			}
		}
	}

	.footer{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 1rem;
		background: #FFF;
		border-top: 0.01rem solid #eeeeee;
		.footer_icon{
			box-sizing: border-box;
			width: 18%;
			float: left;
			font-size: 0.2rem;
			color: #7386AD;
			text-align: center;
			border-right: 0.01rem solid #eeeeee;
			margin: auto;
			padding-top: 0.16rem;
			padding-bottom: 0.09rem;
			img{
				width: 30%;
			}
		}
		.footer-btn{
			width: 32%;
			height: 100%;
			line-height: 1rem;
			text-align: center;
			font-size: 0.32rem;
			color: #FFFFFF;
			float: left;
		}
		.btn_green{
			background: #00DB83;
		}
		.btn_blue{
			background: #336FFF;
		}
	}
}
.dialogs{
	width: 100%;
	padding-top: 1.28rem;
	img{
		width: 3.33rem;
	}
	.right{
		float: right;
		margin-right: 0.41rem;
	}
	.btn{
		width: 3.32rem;
		height: 1.15rem;
		border-radius: 0.32rem;
		background-color: rgba(255,255,255,0);
		color: #fff;
		border: 1px solid #fff;
		font-size: 0.32rem;
		margin: auto;
		text-align: center;
		line-height: 1.15rem;
		letter-spacing: 0.08rem;
		margin-top: 85%;
	}
}
</style>

<style lang="less">
.shareDialog{
	.weui-mask{
		z-index: 100;
	}
	.weui-dialog{
		background-color: rgba(255,255,255,0);
		width: 100%;
		height: 100%;
		max-width: 100%;
	}
}
.shop_cell{
	.weui-cells:before{
		border-top: 1px solid #D8DFF0;
	}
	.weui-cell:before{
		border-top: 1px solid #D8DFF0;
	}
	.vux-label{
		color: #90A2C7;
		font-size: 0.28rem;
	}
	.weui-cell__ft{
		font-size: 0.28rem;
		color: #1A2642;
	}
	.weui-cell_access .weui-cell__ft:after{
		border-color: #90A2C7;
	}
	.weui-cells:after{
		border-bottom: 0.01rem solid #F5F6FA;
	}
	.vux-no-group-title{
		margin-top: 0.22rem;
	}
} 
.shop_details{
	.vux-header .vux-header-left .left-arrow:before {
		border: 1px solid #222;
		border-width: 1px 0 0 1px;
	}
	.vux-header .vux-header-title {
		color: #333;
	}
	.vux-header{
		position: fixed!important;
		top: 0;
		width: 100%;
		z-index: 111;
	}
} 
.tab_shop .vux-tab-ink-bar{
	bottom:4px;
}
.footer .vux-badge{
	position: absolute;
	border-radius: 0.3rem;
	left: 28%;
	top: 6%;
}
</style>