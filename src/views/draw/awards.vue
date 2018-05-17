<template>
	<section style="background-color: #F4F4F4;height: 100%;">
		<!-- <drawHeader :title="title"></drawHeader> -->
		<div class="wrapper" ref="wrapper">
			<div class="content">
				<div class="head">
					<span class="receiveText">中奖信息</span>
					<span class="receiveMoney">张三先生恭喜您获得一等奖五千元</span>
				</div>

				<div class="awards-main">
					<div class="photos">
						<div class="awards-title clear">
							<div class="border left"></div>
							<h4 class="left">上传生活照</h4>
						</div>
									    
				    	<div class="life"  v-for="(item,index) in imgList" @click="cindex(index)">
				    		<img @click="imgDelete(index)" class="gbx" src="../../assets/images/member/gbx.png"/>
				    		
				    		<div class="bigPic" v-show="[imgList.length ? imgList.length >0 : imgList.length =0]">
								<img :src="item">
							</div>
							<input type="file" accept="image/*" multiple="multiple" @change="cone">
				    	</div>

				    	<div class="life" v-if="imgList.length!=5">
				    		<!-- <i class="iconfont icon-zhaoxiangji icon"></i> -->
				    		<img src="../../assets/images/draw/addIcon.png" class="add">
				    		<p class="length">生活照</p>
				    		<input type="file" accept="image/*" multiple="multiple" @change="test($event)">
				    	</div>
				    	<div class="clear"></div>
					</div>
					<div class="photos" style="text-align:center">
						<div class="awards-title clear">
							<div class="border left"></div>
							<h4 class="left">中奖感言</h4>
						</div>
						<group style="margin-top: 0.3rem;">
					      	<x-textarea :max="200" name="detail" placeholder="文字不得少于20字" :height="137" :show-counter="false"></x-textarea>
					    </group>
					</div>
				</div>
				<div class="radio">
			    	<input type="radio" name="">
			    	<span class="read">
			    		阅读<span class="preposition">《易消费中奖协议》</span>
			    	</span>
			    </div>
			</div>
			<div class="foot" @click="showToast">立即提交</div>
		</div>
		
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
	import BScroll from 'better-scroll'
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
	  		toast: '请您耐心等待审核',
	  		pindex:0
	  	}
	  },
	  mounted:function(){
	    this.InitScroll()
	  },
	  methods:{
		test:function (e) {
  			var _this = this
  			var file = e.target.files;
  			for(var i = 0; i < file.length; i++) {
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
				_this.imgList.splice(_this.pindex, 1, e.target.result)
			};
		},
       	cindex(index) {
			this.pindex = index
			console.log(this.pindex)
	   	},
        InitScroll() {
			this.$nextTick(() => {
				this.scroll = new BScroll(this.$refs.wrapper, {
					click: true,
					scrollY: true,
					pullUpLoad: {
						threshold: -30, // 负值是当上拉到超过低部 70px；正值是距离底部距离 时，                    
					}
				})
			})
		},
	  }
	}
</script>

<style lang="less" scoped>
	.wrapper{
		height: 100%;
		overflow: hidden;
		.content{
			padding-bottom: 0.78rem;
		}
	}
	.left{
		float: left;
	}
	.head {
	  	padding: 0.36rem 0.3rem;
	  	background-color: #fff;
	  	display: flex;
	    .receiveText {
		  font-size: 0.3rem;
		  color: #333333;
		}
		.receiveMoney {
			flex: 1;
		 	font-size: 0.3rem;
		  	color: #A0A0A0;
		  	text-align: right;
		}
	}

	.awards-main{
		margin-top: 0.3rem;
		background-color: #fff;
		margin-bottom: 0.5rem;
		.photos {
		   /*border-top: 0.01rem solid #D8DFF0;*/
		   padding: 0.2rem 0 0.2rem 0.3rem;
		   color: #1A2642;
		   .awards-title{
		   		padding-bottom: 0.23rem;
		   		border-bottom: 1px solid #F3F3F3;
		   		.border{
		   				width: 0.06rem;
		   				height: 0.3rem;
		   				background-color: #E32921;
		   				border-radius: 0.03rem;
		   				margin-right: 0.16rem;
		   		}
		   		h4 {
		   		  	font-size: 0.3rem;
		   		  	line-height: 0.3rem;
		   		}
		   }
		   
	   		.life{
	   			margin-top: 0.3rem;
	   			background: #fff;
	   			width: 46%;
	   			height: 2.1rem;
	   			text-align: center;
	   			position: relative;
	   			float: left;
	   			margin-right: 0.16rem;
	   			margin-bottom: 0.15rem;
	   			border-radius: 0.06rem;
	   			border: 1px solid #E1E1E1;
	   			.add{
	   				width: 20%;
	   				margin: 0.4rem auto;
	   			}
	   			.gbx{
	   				position: absolute;
	   				right: -0.1rem;
	   				top: -0.12rem;
	   				width: 0.38rem;
	   				height: 0.38rem;
	   				z-index: 222;
	   			}
	   			.length{
	   				font-size: .3rem;
	   				color: #bcbbc0;
	   				margin-top: -0.22rem;
	   			}
	           	.bigPic{
	           		position: absolute;
        			width: 100%;
        			height: 100%;
        			left: 50%;
        			top: 50%;
        			transform: translate(-50%,-50%);
        			overflow: hidden;
        			border-radius: 0.06rem;
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
		   
		}
	}

	.radio{
		text-align: center;
		margin-top: 0.5rem;
		padding-bottom: 0.35rem;
		font-size: 0.26rem;
		input{
			vertical-align: middle;
		}
		.preposition {
	     	color: #004FE1;
	    }
	}

	.foot {
		position: fixed;
		width: 100%;
		height: 0.78rem;
		background-color: #E32921;
		color: #fff;
		font-size: 0.3rem;
		text-align: center;
		line-height: 0.78rem;
		bottom: 0;
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
			/*border-bottom: 0.01rem solid #F5F5F5;*/
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
			margin-right: 0.24rem;
		}
		.weui-textarea{
			color: #1A2642;
			font-size: 0.28rem;
		}
		.vux-x-textarea.weui-cell {
			border-radius: 0.06rem;
			border: 1px solid #F5F5F5;
		}
	} 
	.dialog{
		.weui-dialog{
			width: 60%;
		}
	}
</style>