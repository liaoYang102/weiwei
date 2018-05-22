<template>
	<section style="height: 100%;">
		<div class="wrapper" ref="wrapper">
			<div class="content" style="padding-top:46px;">
				<div class="tab-title">商品评价</div>

		        <div class="commentsList">
		            <div class="list">
		            	<li class="li-comments" v-for="item in 8">
		            		<div class="comments_author">
		            			<img src="../../../assets/images/shop/photo.png">
		            			<span class="name">陈独秀</span>
		            		</div>
		            		
		            		<div>很好很好,裤子正好,还要弹性。</div>
		            		<div class="comments_date">2018.03.30 颜色:蓝色; 尺码:170/92A/M</div>

		            		<div class="imgList">
		            			<swiper :options="swiperOption" class="box1">
	            			       	<swiper-slide v-for="(item,index) in list" :key="index">
	            			       		<div class="box1-item">
    			                        	<img  class="previewer-demo-img" v-lazy="item.src" width="100" @click="show(index)">
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
			</div>
		</div>
		<div v-transfer-dom>
	        <previewer :list="list" ref="previewer" :options="options" @on-index-change="logIndexChange"></previewer>
	    </div>
	</section>
</template>

<script>
import BScroll from 'better-scroll'
import Loading from '../../../components/loading'
import noMore from '../../../components/noMore'
import {swiper,swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
	components: {
		Loading,swiper,swiperSlide,noMore
	},

	data(){
		return {
			test: true,
			showLoading: false,
			showNomore: false,
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
	      	}
		}
	},
	mounted:function(){
		this.InitScroll()
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
		}
	}
}
</script>

<style lang="less" scoped>
.imgList .swiper-slide {
    width: 1.52rem;
}
li{
	list-style: none;
	margin-top: 0.01rem;
	background: #FFF;
}
.wrapper {
	height:100%;
	overflow: hidden;
}
.tab-title{
	background: #FFF;
	padding-left: 0.19rem;
	height: 0.99rem;
	border-bottom: 0.01rem solid #D8DFF0;
	line-height: 0.99rem;
	font-size: 0.28rem;
	color: #1A2642;
}
.commentsList{
	padding-bottom: 0.95rem;
	.list{
		.li-comments{
			padding-left: 0.19rem;
			padding-top: 0.29rem;
			padding-bottom: 0.25rem;
			border-bottom: 0.01rem solid #D8DFF0;
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
				  	height: 100%;
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