<template>
	<section>
		<settingHeader :title="title"></settingHeader>
		<tab>
	      <tab-item selected @on-item-click="onItemClick">全部</tab-item>
	      <tab-item class='vux-center' @on-item-click="onItemClick">待付款</tab-item>
	      <tab-item @on-item-click="onItemClick">进行中</tab-item>
	      <tab-item @on-item-click="onItemClick">已完成</tab-item>
	      <tab-item @on-item-click="onItemClick"><span class="iconfont icon-caidan" style="color: rgb(50, 119, 255);"></span></tab-item>
	    </tab>
	    <div v-transfer-dom>
	      <popup v-model="show9" position="right">
	        <div style="width:200px;">
	        </div>
	      </popup>
	    </div>
	    <scroller lock-x height="600px" @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="600" style="background-color:#efeff4" v-if='test'>
	      <div class="box2">
	        <div class="shop-box">
				<div class="orders_wrap">
					<p><i class="iconfont icon-mendian"></i>&nbsp;广东成高成大健康管理有限公司</p>
					<span class="finish-state"><img src="../../assets/images/sorder/new_success_04.png" alt=""></span>
					<div class="shop-content clearfix">
						<div class="left"><img src="http://www.cgc999.com/attachment/images/2/2018/01/uYa1S11FuU3fu5USsY21FyUQBWuyZU.png" alt=""></div> 
						<div class="right"><p class="price"><i>¥</i>0.01</p> <span class="num">X1</span></div> 
						<div class="center"><p style='text-indent: 0;'>威伐光-09698</p> <span class="ellipsis ordernum">订单号：EQP2018032012164726747459</span></div>
					</div>
					<div class="devise">
						<span>共 <i>1</i> 个设备</span>
                        共计：<span class="price"><i>¥</i>0.01</span>
                    </div>
                    <ul class="btn">
                    	<li class="normal">删除订单</li> 
                    	<li>
                    		<i class="iconfont icon-pinglun"></i> 评价
                    	</li>
                    </ul>
				</div>
	        </div>
	        <div class="shop-box">
				<div class="orders_wrap">
					<p><i class="iconfont icon-mendian"></i>&nbsp;广东成高成大健康管理有限公司</p>
					<span class="finish-state"><img src="../../assets/images/sorder/new_success_04.png" alt=""></span>
					<div class="shop-content clearfix">
						<div class="left"><img src="http://www.cgc999.com/attachment/images/2/2018/01/uYa1S11FuU3fu5USsY21FyUQBWuyZU.png" alt=""></div> 
						<div class="right"><p class="price"><i>¥</i>0.01</p> <span class="num">X1</span></div> 
						<div class="center"><p style='text-indent: 0;'>威伐光-09698</p> <span class="ellipsis ordernum">订单号：EQP2018032012164726747459</span></div>
					</div>
					<div class="devise">
						<span>共 <i>1</i> 个设备</span>
                        共计：<span class="price"><i>¥</i>0.01</span>
                    </div>
                    <ul class="btn">
                    	<li class="normal">删除订单</li> 
                    	<li>
                    		<i class="iconfont icon-pinglun"></i> 评价
                    	</li>
                    </ul>
				</div>
	        </div>
	        <load-more tip="loading" id='loading'></load-more>
	      </div>
	    </scroller>
	    <div class="wrap no_orders none-data" v-else>
			<img src="../../assets/images/sorder/none_03.png" alt=""> 
			<p>啊噢！什么订单也没有</p> 
			<span class="guang">到处逛逛</span>
	    </div>
	</section>
</template>
<script>
	import settingHeader from '../../components/setting_header'
	export default {
	  data(){
	  	return{
	  		title: '我的订单',
	  		test: true,
	  		show9: true
	  	}
	  },
	  components: {
	        settingHeader
	  },
	  methods:{
	  	onItemClick (index) {
	  		this.test = false;
	        console.log('on item click:', index);
	    },
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
	    }
	  }
	}
</script>
<style lang='less' scoped>
	.scrollable .vux-tab-item{
		flex:inherit;
	}
	.vux-loadmore{
		display: none;
	}
	.none-data {
	    /* display: none; */
	    position: absolute;
	    height: 8.8rem;
	    background: #fff;
	    width: 100%;
	    height: 100%;
	    max-width: 480px;
	    text-align: center;
	    z-index: 10;
	    img{
    	    width: 40%;
    		margin-top: 26%;
	    }
	    p{
	    	font-size: 14px;
    		color: #8f8f94;
	    }
	    .guang{
	    	display: inline-block;
		    border-radius: 0.3rem;
		    border: 1px solid #3eabff;
		    color: #3eabff;
		    font-size: 0.24rem;
		    padding: 0.1rem 0.3rem;
		    margin-top: 0.3rem;
	    }
	}
	.shop-box{
		width: 100%;
	    background-color: #fff;
	    margin-top: 0.2rem;
	    position: relative;
	    .orders_wrap{
			overflow: hidden;
			p{
				text-indent: 0.25rem;
			    font-size: 0.24rem;
			    line-height: 0.6rem;
			    color: #3c3c3c;
			    i{
			    	font-size: 0.2rem;
   					color: #8ec0fe;
			    }
			}
			.finish-state{
				position: absolute;
			    top: 0;
			    width: 1.2rem;
			    right: 0.6rem;
			    img{
			    	width: 100%;
			    }
			}
			.shop-content{
			    width: 92%;
			    margin: 0 auto;
			    height: 1.15rem;
			    .left{
			    	float: left;
			    	height: 1rem;
				    width: 1rem;
				    margin-top: 0.14rem;
				    img{
				    	width: 100%;
					    height: 100%;
					    border-radius: .1rem;
				    }
			    }
			    .right{
			    	float: right;
			    	margin-top: 0.15rem;
			    	p{
		    		    color: #fd715e;
					    font-size: 0.22rem;
					    line-height: 0.45rem;
					    i{
				    	    font-style: normal;
    						font-size: 0.15rem;
					    }
			    	}
			    	span{
			    		font-size: 0.2rem;
					    color: #979797;
					    float: right;
					    margin-top: 0.06rem;
			    	}
			    }
			    .center{
			    	width: 88%;
    				padding-top: 0.15rem;
    				p{
    					font-size: 0.22rem;
					    margin-left: 1.2rem;
					    line-height: 0.45rem;
					    overflow: hidden;
					    text-overflow: ellipsis;
					    display: -webkit-box;
					    color: #000;
					    -webkit-box-orient: vertical;
					    -webkit-line-clamp: 2;
    				}
    				.ordernum{
					    line-height: 0.45rem;
    					font-size: 0.22rem;
    					color: #979797;
					    margin-left: 0.18rem;
					    width: 3.5rem;
					    display: inline-block;
    				}
			    }
			}
			.devise{
			    float: right;
			    font-size: 0.22rem;
			    width: 100%;
			    height: 0.48rem;
			    border-bottom: 1px solid #e4e4e4;
			    text-align: right;
			    color: #3c3c3c;
			    line-height: 0.48rem;
			    span{
			    	color: #a1a1a1;
    				margin-right: 0.28rem;
    				i{
					    font-style: normal;
    					color: #3c3c3c;
    				}
			    }
			    .price{
			    	color: #fd715e;
  					font-size: 0.22rem;
  					i{
  						color: #fd715e;
    					font-size: 0.15rem;
  					}
			    }
			}
			.clearfix{
				zoom: 1;
			}
	    }
	    .btn{
	    	float: right;
		    width: 93%;
		    margin-top: 0.16rem;
		    text-align: right;
		    margin-right: 0.25rem;
		    margin-bottom: 0.16rem;
		    li{
		    	display: inline-block;
			    height: 0.45rem;
			    line-height: 0.45rem;
			    font-size: 0.2rem;
			    color: #ffffff;
			    width: 1.5rem;
			    text-align: center;
			    /* padding: 0 0.2rem; */
			    border-radius: 0.3rem;
			    background-image: linear-gradient(30deg,#246bfe,#5b90fe);
			    border: 1px solid transparent;
		    }
		    .normal{
		    	background-image: none;
			    background-color: #fff;
			    color: #246bfe;
			    border: 1px solid #246bfe;
		    }
	    }
	}
</style>