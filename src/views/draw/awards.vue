<template>
	<section>
		<drawHeader :title="title"></drawHeader>
		<div class="head">
			<div class="receive">
				<p class="receiveText">中奖信息</p>
				<p class="receiveMoney">张三先生恭喜您获得一等奖五千元。</p>
			</div>
		</div>

		<div class="awards-main">
			<div class="photos">
				<h4>上传生活照</h4>
			    
		    	<div class="life"  v-for="(item,index) in imgList">
		    		<img @click="imgDelete(index)" class="gbx" src="../../assets/images/member/gbx.png"/>
		    		<!-- <p class='quxiao' @click="imgDelete(index)">
                        <i class='iconfont icon-quxiao1'></i>
                    </p> -->
		    		<div class="bigPic" v-show="[imgList.length ? imgList.length >0 : imgList.length =0]">
						<img :src="item">
					</div>
					<input type="file" accept="image/*" multiple="multiple" @change="cone($event,index)">
		    	</div>

		    	<div class="life" v-if="imgList.length!=5">
		    		<i class="iconfont icon-zhaoxiangji icon"></i>
		    		<p class="length">{{ imgList.length}}/5</p>
		    		<input type="file" accept="image/*" multiple="multiple" @change="test($event)">
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
			    	<input type="radio" name="">
			    	<span class="read">
			    		阅读<span class="preposition">《易消费中奖协议》</span>
			    	</span>
			    </div>
			</div>
		</div>
		<div class="foot" @click="showToast">立即提交</div>

        <!-- 弹出框 -->
        <div v-transfer-dom class="dialog">
          	<x-dialog v-model="showDialog" :hide-on-blur="true">
          		<div class="dia_top">
					<p class="title">{{ toast}}</p>
				</div>
          	</x-dialog>
        </div>
	</section>
</template>

<script>
	import { XInput, XDialog} from 'vux'
	import drawHeader from './components/header'
	export default {
	  components: {
	    XInput,drawHeader,XDialog
	  },
	  data(){
	  	return {
	  		title: '获奖感言',
	  		demo2: true,
	  		imgList: [],
	  		showDialog: false,
	  		toast: '请您耐心等待审核'
	  	}
	  },
	  methods:{
		test:function (e) {
  			var _this = this
  			var file = e.target.files;
  			for(var i = 0; i < file.length; i++) {
  				if(file.length > 5) {
  					this.$vux.toast.show({
  						text: '最多只能上传五张照片',
  						type: 'text'
  					})
  					return
  				} else {
  					if(file.length != 1){
  						_this.imgList = []
  					}
  					
  					var reader = new FileReader();
  					reader.readAsDataURL(file[i]); // 读出 base64
  					reader.onloadend = function(e) {
  						// 图片的 base64 格式, 可以直接当成 img 的 src 属性值        
  						var dataURL = reader.result;
  						if(_this.imgList.length<5){
  							_this.imgList.push(e.target.result)
  						}
  					};
  				}
  			}
       	},
	  	imgDelete(index){
	  		this.imgList.splice(index, 1);
	  	},
	  	showToast(){
			var that = this;
			this.showDialog = true;
			setTimeout(function(){
				that.showDialog = false
			},3000)
		},
		cone(e,i) {
			var _this = this
			var reader = new FileReader();
			var file = e.target.files[0];
			reader.readAsDataURL(file);
			reader.onloadend = function(e) {
				var dataURL = reader.result;
				_this.imgList.splice(i, 1, e.target.result)
			};
		},
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
	    height: 2.54rem;
	    background-image: url(../../assets/images/draw/lottery_awards2.png);
	    background-size: 100% 100%;
	    padding-top: 0.9rem;
	    .receiveText {
    	  font-size: 0.32rem;
    	  margin-bottom: 0.35rem;
    	}
    	.receiveMoney {
		  /*text-indent: -0.23rem;*/
		  width: 60%;
		  margin:0 auto;
		  font-size: 0.26rem;
		  word-wrap:break-word;
		}
	    p {
		  color: #fff;
		}
	  }
	}

	.awards-main{
		background-color: #fff;
		.photos {
		   border-top: 0.01rem solid #D8DFF0;
		   padding: 0.2rem 0.25rem;
		   color: #1A2642;
		   h4 {
		     font-size: 0.28rem;
		     font-weight: normal;
		     margin-bottom: 0.2rem;
		   }
	   		.life{
	   			background: #F5F6FA;
	   			width: 1.6rem;
	   			height: 1.6rem;
	   			text-align: center;
	   			position: relative;
	   			float: left;
	   			margin-right: 0.2rem;
	   			margin-bottom: 0.15rem;
	   			.gbx{
	   				position: absolute;
	   				right: -0.1rem;
	   				top: -0.12rem;
	   				width: 0.38rem;
	   				height: 0.38rem;
	   				z-index: 18;
	   			}
	   			.length{
	   				font-size: .3rem;
	   				color: #bcbbc0;
	   				margin-top: -0.22rem;
	   			}
	           	.bigPic{
	           		position: absolute;
        			width: 95%;
        			height: 95%;
        			left: 50%;
        			top: 50%;
        			transform: translate(-50%,-50%);
        			overflow: hidden;
	   	     		img{
	   	     			width: 100%;
	   	     			height: auto;
	   	     			position: absolute;
	   	     			left: 50%;
	   	     			top: 50%;
	   	     			transform: translate(-50%,-50%);
	   	     		}
	   	     	}
	   			.icon{
	   				font-size: 0.73rem;
	   				color: #90A2C7;
	   				line-height: 1.3rem;
	   			}
	   			input{
	   			    position: absolute;
	   			    top:0;
	   			    left:0;
	   			    width:100%;
	   			    height: 100%;
	   			    opacity: 0;
	   			    z-index: 111;
	   			}
	   		}
	   		.clear{
	   		    clear:both;
	   		}
		   	


		   .preposition {
		     color: #1a5ae2;
		   }
		   .radio{
		   		margin-top: 0.15rem;
		   		input{
		   			vertical-align: middle;
		   		}
		   }
		}
		
	}

	.foot {
	  width: 100%;
	  height: 0.78rem;
	  background-color: #FF5365;
	  color: #fff;
	  font-size: 0.3rem;
	  text-align: center;
	  line-height: 0.78rem;
	}

	.dia_top {
		width: 90%;
		height: 1.78rem;
		margin: auto;
	  	border-radius: 0.1rem;
	  	background-color: #fff;
	  	color: #000;
	  	.title {
	  	  font-size: 0.32rem;
	  	  margin-top: 1rem;
	  	  line-height: 0.48rem;
	  	  text-align: center;
	  	}
	}
</style>

<style lang="less">
	.awards-input{
		.vux-no-group-title{
			margin-top: 0;
		}
		.weui-cells{
			margin-top: 0;
		}
		.weui-cell:before{
			border-top: none;
		}
		.weui-cell{
			border-bottom: 0.01rem solid #D8DFF0;
		}
		.weui-label{
			width: 1.4rem;
			font-size: 0.3rem;
		}
		.weui-input::-webkit-input-placeholder {
		    color: #d9d9d9; // WebKit browsers 
		    font-size: 0.32rem;
		}
		.weui-input:-moz-placeholder {
		    color: #d9d9d9; // Mozilla Firefox 4 to 18 
		    font-size: 0.32rem;
		}
		.weui-input::-moz-placeholder {
		    color: #d9d9d9; //Mozilla Firefox 19+ /
		    font-size: 0.32rem;
		}
		.weui-input:-ms-input-placeholder {
		    color: #d9d9d9; //Internet Explorer 10+ */
		    font-size: 0.32rem;
		}
	}
	.photos{
		.weui-cells{
			margin-top: 0;
		}
		.weui-textarea{
			color: #1A2642;
			font-size: 0.28rem;
		}
		.vux-x-textarea.weui-cell {
			border-radius: 0.1rem;
			border: 0.01rem solid #D8DFF0;
		}
	} 
	.dialog{
		.weui-dialog{
			width: 60%;
		}
	}
</style>