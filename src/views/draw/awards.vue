<template>
	<section>
		<drawHeader :title="title"></drawHeader>
		<div class="head">
			<div class="receive">
				<p class="receiveText">待领取金额</p>
				<p class="receiveMoney">￥2000.00</p>
			</div>
		</div>
		<div class="awards-input">
			<group>
		      	<x-input title="姓名" name="username" placeholder="请输入您的真实姓名" is-type="china-name"></x-input>
		      	<x-input title="手机" name="mobile" placeholder="请输入您的手机号码" keyboard="number" is-type="china-mobile"></x-input>
		      	<x-input title="身份证" name="mobile" placeholder="请输入您的身份证号码" keyboard="number" is-type="china-mobile"></x-input>
		    </group>
		</div>

		<div class="awards-main">
			<div class="photos">
				<h4>上传身份证</h4>
				<div class="positive left">
					<img src="../../assets/images/draw/lottery_awards3.png" alt="">
					<input id="file1" name="file" type="file" class="file" accept="image/*" />
					<p class="text_positive">身份证正面</p>
				</div>
				<div class="negative left">
					<img src="../../assets/images/draw/lottery_awards3.png" alt="">
					<input id="file2" name="file" type="file" class="file" accept="image/*" />
					<p class="text_negative">身份证反面</p>
				</div>
				<div class="clear"></div>
			</div>
			<div class="photos">
				<h4>上传生活照</h4>
				<div class="life left">
					<img src="../../assets/images/draw/lottery_awards3.png" alt="">
					<input id="file3" name="file" type="file" class="file" accept="image/*" />
					<p class="text_positive">生活照</p>
				</div>
				<div class="clear"></div>
			</div>
			<div class="photos" style="text-align:center">
				<h4 class="left">中奖感言</h4>
				<div class="clear"></div>
				<group>
			      	<x-textarea :max="200" name="detail" placeholder="不超过200字" :height="137" :show-counter="false"></x-textarea>
			    </group>

			    <div class="radio">
			    	<input type="radio" name="field_name" value="'value">
			    	
			    	<span class="read">
			    		阅读<span class="preposition">《易消费中奖协议》</span>
			    	</span>
			    </div>
				
			</div>
		</div>

		<div class="foot">立即提交</div>
		
	</section>
</template>

<script>
	import { XInput } from 'vux'
	import drawHeader from './components/header'
	export default {
	  components: {
	    XInput,drawHeader
	  },
	  data(){
	  	return {
	  		title: '我要领奖',
	  		demo2: true
	  	}
	  }
	}
</script>

<style lang="less" scoped>
	.left{
		float: left;
	}
	.head {
	  padding-top: 1.05rem;
	  background-image: url(../../assets/images/draw/lottery_awards1.png);
	  background-size: 100% 100%;
	  width: 100%;
	  height: 4.1rem;
	  .receive {
	    margin: 0 auto;
	    text-align: center;
	    width: 4rem;
	    height: 2.14rem;
	    background-image: url(../../assets/images/draw/lottery_awards2.png);
	    background-size: 100% 100%;
	    padding-top: 1.3rem;
	    .receiveText {
    	  font-size: 0.36rem;
    	  margin-bottom: 0.12rem;
    	}
    	.receiveMoney {
		  text-indent: -0.23rem;
		  font-size: 0.45rem;
		}
	    p {
		  color: #fff;
		}
	  }
	}

	.awards-main{
		background-color: #fff;
		margin-top: 0.2rem;
		.photos {
		   border-top: 0.01rem solid #ccc;
		   padding: 0.2rem 0.25rem;
		   h4 {
		     font-size: 0.28rem;
		     font-weight: normal;
		     margin-bottom: 0.2rem;
		   }
		   .positive {
		     width: 45%;
		     height: 1.5rem;
		     border: 0.01rem solid #d2d2d2;
		     border-radius: 0.05rem;
		     background: #fafafa;
		     padding-top: 0.6rem;
		     text-align: center;
		     margin-right: 0.16rem;
		     position: relative;
		     img {
		       width: 0.5rem;
		       height: 0.5rem;
		     }
		     input {
		       width: 100%;
		       height: 100%;
		       position: absolute;
		       left:0;
		       top:0;
		       opacity: 0;
		     }
		   }
		   .negative {
		    width: 45%;
		    height: 1.5rem;
		    border: 0.01rem solid #d2d2d2;
		    border-radius: 0.05rem;
		    background: #fafafa;
		    padding-top: 0.6rem;
		    text-align: center;
		    position: relative;
		     img {
		       width: 0.5rem;
		       height: 0.5rem;
		     }
		     input {
		       width: 100%;
		       height: 100%;
		       position: absolute;
		       left:0;
		       top:0;
		       opacity: 0;
		     }
		   }
		   .life {
		     width: 45%;
		     height: 1.5rem;
		     border: 0.01rem solid #d2d2d2;
		     border-radius: 0.05rem;
		     background: #fafafa;
		     padding-top: 0.6rem;
		     text-align: center;
		     margin-right: 0.16rem;
		     position: relative;
		     img {
		       width: 0.5rem;
		       height: 0.5rem;
		     }
		     input {
		       width: 100%;
		       height: 100%;
		       position: absolute;
		       left:0;
		       top:0;
		       opacity: 0;
		     }
		   }
		   .preposition {
		     color: #1a5ae2;
		   }
		   .radio{
		   	margin-top: 0.15rem;
		   }
		}
	}

	.foot {
	  width: 100%;
	  height: 0.78rem;
	  background-color: #e42d48;
	  color: #fff;
	  font-size: 0.3rem;
	  text-align: center;
	  line-height: 0.78rem;
	}
</style>

<style lang="less">
	.awards-input{
		.vux-no-group-title{
			margin-top: 0 !important;
		}
		.weui-cells{
			margin-top: 0 !important;
		}
		.weui-cell:before{
			border-top: none !important;
		}
		.weui-cell{
			border-bottom: 0.01rem solid #ccc !important;
		}
		.weui-label{
			width: 1.4rem !important;
			font-size: 0.3rem !important;
		}
		.weui-input::-webkit-input-placeholder {
		    color: #d9d9d9 !important; // WebKit browsers 
		    font-size: 0.32rem !important;
		}
		.weui-input:-moz-placeholder {
		    color: #d9d9d9 !important; // Mozilla Firefox 4 to 18 
		    font-size: 0.32rem !important;
		}
		.weui-input::-moz-placeholder {
		    color: #d9d9d9 !important; //Mozilla Firefox 19+ /
		    font-size: 0.32rem !important;
		}
		.weui-input:-ms-input-placeholder {
		    color: #d9d9d9 !important; //Internet Explorer 10+ */
		    font-size: 0.32rem !important;
		}
	}
	.photos{
		.weui-cells{
			margin-top: 0 !important;
		}
		.weui-textarea{
			color: #1A2642 !important;
			font-size: 0.28rem !important;
		}
		.vux-x-textarea.weui-cell {
			border-radius: 0.1rem;
			border: 0.01rem solid #ccc;
		}
	} 
	
</style>