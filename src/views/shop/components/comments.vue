<template>
	<section>
		<div class="tab-title">商品评价</div>

		<div>
		    <scroller lock-x @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" style="background-color:#F5F6FA" v-if='test'>
		        <div class="commentsList">
		            <div class="list">
		            	<li class="li-comments">
		            		<div class="comments_author">
		            			<img src="../../../assets/images/shop/photo.png">
		            			<span class="name">陈独秀</span>
		            		</div>
		            		
		            		<div>很好很好,裤子正好,还要弹性。</div>
		            		<div class="comments_date">2018.03.30 颜色:蓝色; 尺码:170/92A/M</div>

		            		<div class="imgList">
			            		<scroller lock-y scrollbar-x>
		            		      	<div class="box1">
		            		        	<div class="box1-item" v-for="i in 7">
		            		        		<img src="../../../assets/images/shop/comments1.png">
		            		        	</div>
		            		      	</div>
		            		    </scroller>
		            		</div>
		            		
		            	</li>
		            </div>
		            
		            <load-more tip="loading" id='loading'></load-more>
		        </div>

		    </scroller>
		    
		</div>
	</section>
</template>

<script>
export default {
	data(){
		return {
			test: true,
		}
	},
	methods:{
        onScrollBottom(){
	    	var load = document.getElementById("loading");
	    	load.style.display = 'block'
	    	if (this.onFetching) {
		        // do nothing
		      } else {
		        this.onFetching = true
		        setTimeout(() => {
		        	load.style.display = 'none'
		        	console.log(123);
		          	this.$nextTick(() => {
		            this.$refs.scrollerBottom.reset()
		          })
		          this.onFetching = false
		        }, 2000)
		      }
	    },
	}
}
</script>

<style lang="less" scoped>
li{
	list-style: none;
	margin-top: 0.01rem;
	background: #FFF;
}
.vux-loadmore{
    display: none;
}
.tab-title{
	padding-left: 0.19rem;
	height: 0.99rem;
	border-bottom: 0.01rem solid #D8DFF0;
	line-height: 0.99rem;
	font-size: 0.28rem;
	color: #1A2642;
}
.commentsList{
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
				  position: relative;
				  width: 100rem;
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