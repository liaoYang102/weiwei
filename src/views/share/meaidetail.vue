<template>
	<div class="meai_detail">
		<settingHeader :title="title"></settingHeader>
		<div class="wrapper" ref="wrapper">
			<div class="content">
				
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
				<div class="more" @click="searchDetail">查看详情</div>

				<div class="tab-title">商品评价</div>
				
		        <div class="commentsList">
		            <div class="list">
		            	<li class="li-comments" v-for="item in 8">
		            		<div class="comments_author">
		            			<img src="../../assets/images/shop/photo.png">
		            			<span class="name">陈独秀</span>
		            		</div>
		            		
		            		<div>很好很好,裤子正好,还要弹性。</div>
		            		<div class="comments_date">2018.03.30 颜色:蓝色; 尺码:170/92A/M</div>

		            		<div class="imgList">
		            			<swiper :options="swiperOption" class="box1">
	            			       	<swiper-slide v-for="(item,index) in list" :key="index">
	            			       		<div class="box1-item">
    			                        	<img  class="previewer-demo-img" :src="item.src" width="100" @click="show(index)">
	            			       		</div>
	            			       	</swiper-slide>
	            			    </swiper>
	            			    
		            		</div>
		            	</li>
		            	<div class="clear"></div>
		            </div>
		            <loading v-if="showLoading"></loading>
		            <noMore v-if="showNomore"></noMore>
		        </div>

				<!-- <Comments style=""></Comments> -->
			</div>
			<div class="footer">
				<div class="btn" @click="saoma">
					<span>购买套餐</span>
				</div>
			</div>
		</div>

		<div v-transfer-dom>
	        <previewer :list="list" ref="previewer" :options="options" @on-index-change="logIndexChange"></previewer>
	    </div>

	</div>
</template>

<script>
	import settingHeader from '../../components/setting_header'
	import BScroll from 'better-scroll'
	// import wx from 'weixin-js-sdk'
	import Loading from '../../components/loading'
	import {swiper,swiperSlide } from 'vue-awesome-swiper'
	import 'swiper/dist/css/swiper.css'
	import noMore from '../../components/noMore'


	export default {
		data() {
			return {
				title:"套餐详情",
				test: true,
				showLoading: false,
				swiperOption: {
					autoHeight: true,
		          	slidesPerView: 'auto',
	              	spaceBetween: 10
		        },
				list: [{
				        msrc: 'http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwu9ze86j20m80b40t2.jpg',
				        src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwu9ze86j20m80b40t2.jpg',
				        w: 800,
				        h: 400
				      },
				      {
				        msrc: 'http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg',
				        src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg',
				        w: 1200,
				        h: 900
				      }, {
				        msrc: 'http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwwcynw2j20p00b4js9.jpg',
				        src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwwcynw2j20p00b4js9.jpg'
				      },
				      {
	  			        msrc: 'http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwu9ze86j20m80b40t2.jpg',
	  			        src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwu9ze86j20m80b40t2.jpg',
	  			        w: 800,
	  			        h: 400
	  			      },
	  			      {
	  			        msrc: 'http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg',
	  			        src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg',
	  			        w: 1200,
	  			        h: 900
	  			      }, {
	  			        msrc: 'http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwwcynw2j20p00b4js9.jpg',
	  			        src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwwcynw2j20p00b4js9.jpg'
	  			      }],
		      	options: {
			        getThumbBoundsFn (index) {
			          let thumbnail = document.querySelectorAll('.previewer-demo-img')[index]
			          let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
			          let rect = thumbnail.getBoundingClientRect()
			          return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
			        }
		      	},  
		      	showNomore: false
			}
				
		},
		components:{
			settingHeader,
			Loading,
			swiper,
			swiperSlide,
			noMore
		},
		/*created(){

		},*/
		mounted(){
			this.InitScroll();
		},
		computed:{
			
		},
		methods:{
			 logIndexChange (arg) {
	          	console.log(arg)
	        },
	        show(index) {
	        	console.log('-=-=', index)
	        	console.log(this.$refs.previewer);
	          	this.$refs.previewer.show(index)
	        },
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
							// this.showLoading = true;
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
			LoadData() {
				var _this = this
				if(_this.showNomore){
					_this.showLoading = false;
					return 
				}
				_this.showLoading = true;
				setTimeout(function(){
					_this.showLoading = false;
					_this.showNomore = true;
					// _this.scroll.destroy()
				},3000)
			},
			saoma(){//扫码
				this.$router.push('/share/comfirmOrder');
			},
			searchDetail(){
				this.$router.push('/share/pintroduce')
			},
			/*erweima(){
				alert(9)
			}*/
			
		}
	}
</script>

<style lang="less">
	@import url('../../../static/css/global');
	#app{
		background: #f5f6fa;
	}
	.wrapper {
		height: 93%;
		overflow: hidden;
	}
	.commentsList li{
		list-style: none;
		margin-top: 0.01rem;
		background: #FFF;
	}
	.imgList .swiper-slide {
	    width: 1.52rem;
	}
	.meai_detail{
		width: 100%;
		height: 100%;
		background: #f5f6fa;
		.head{
			/*width: 100%;*/
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
				right: 0.4rem;
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
			background: #fff;
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
			background: #fff;
			margin-bottom: 0.22rem;
		}
		.footer{
			position: fixed;
			bottom: 0;
			width: 100%;
			z-index: 3;
			background: #f5f6fa;
			.btn{
				width: 6rem;
				height: 0.94rem;
				background-color: #3889FF;
				box-shadow:0 0.02rem 0.2rem 0 rgba(41,120,235,0.4);
				margin:0.44rem auto;
				color: #fff;
				text-align: center;
				line-height: 0.94rem;
			}
		}
	}
	.tab-title{
		padding-left: 0.19rem;
		height: 0.99rem;
		border-bottom: 0.01rem solid #D8DFF0;
		line-height: 0.99rem;
		font-size: 0.28rem;
		color: #1A2642;
		background-color: #fff;
	}
	.commentsList{
		padding-bottom: 1.6rem;
		.list{
			.li-comments{
				padding-left: 0.19rem;
				padding-top: 0.29rem;
				padding-bottom: 0.25rem;
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
				}
				.imgList{
					margin-top: 0.13rem;
					.box1 {
					  height: 1.52rem;
					  /*position: relative;*/
					  /*width: 100rem;*/
					}
					.box1-item {
					  width: 1.52rem;
					  height: 1.52rem;
					  display:inline-block;
					  margin-left: 0.06rem;
					  float: left;
					  img{
					  	width: 100%;
					  }
					}
					.box1-item:first-child {
					  margin-left: 0;
					}
				}
			}
			
		}
	}
</style>