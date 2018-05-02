<template>
	<section class='write_logistics'>
		<settingHeader :title='title'></settingHeader>
		<div class="shop">
			<div class="fl">
				<img src="../../assets/images/shop/order_detail1.png" alt="">
			</div>
			<div class="fl" style="padding-top:0.13rem;">
				<p class='shop-name'>女装U宽腿牛仔裤(水洗产品)</p>
				<p class='shop-size'>颜色:蓝色；尺码:L/170修身</p>
			</div>
			<div class="clear"></div>
		</div>
		<div class="select">
			<group>
		      	<cell title="物流公司" value="请选择物流公司" @click.native='test' is-link></cell>
		      	<div>
		      		<x-input title="物流单号" v-model="inputnum" placeholder="请填写物流单号" :show-clear="false"></x-input>
		      	</div>
		      
		    </group>
		    <group class="center">
    	    	<x-input title="手机号码" name="mobile" v-model="inputMobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile" :show-clear="false"></x-input>
		    </group>

		    <group>
		    	<div @click="optional" v-show="!showInputOption" class="widthOption">
		    		<cell title="退款说明" :value="option" :border-intent="false"></cell>
		    	</div>
		     	<div class="option-input" v-show="showInputOption">
		     		<x-input title="退款说明" v-model="inputOption" placeholder="选填" @on-blur="changeOption(inputOption)"></x-input>
		     	</div>
		    </group>

		    <group style="margin-top:0.2rem">
		      <cell title="上传凭证" :border-intent="false"></cell>
  			    <div class="upload">
  			    	<div class="imgUpload"  v-for="(item,index) in imgList">
  			    		<p class='delete' @click="imgDelete(index)">
                              <i class='iconfont icon-quxiao1'></i>
                          </p>
  			    		<div class="bigPic" v-show="[imgList.length ? imgList.length >0 : imgList.length =0]">
  							<img :src="item">
  						</div>
  			    	</div>

  			    	<div class="imgUpload" v-if="imgList.length!=3">
      		    		<i class="iconfont icon-zhaoxiangji icon"></i>
      		    		<p class="most">最多3张</p>
      		    		<input type="file" accept="image/*" multiple="multiple" @change="upload($event)">
  			    	</div>
  			    	<div class="clear"></div>
  			    </div>
		    </group>
		</div>
		<div class="confirm" @click="goLogistics">
			确定
		</div>
		<div v-transfer-dom>
	      <popup v-model="show1">
	        <popup-header title="物流公司" :show-bottom-border="false"></popup-header>
	        <group gutter="0">
	        	<scroller lock-x height="200px" ref="scrollerEvent">
			      <div class="box2">
			        <radio :options="['顺丰', '圆通', '申通', '中通','韵达','天天','百世','优速']"></radio>
			      </div>
			    </scroller>
	          <div class="pay-box">
				<x-button class="add-btn" :gradients="['#1D62F0', '#19D5FD']" >确定</x-button>
			  </div>
	        </group>
	      </popup>
	    </div>

	</section>
</template>

<script>
	import settingHeader from '../../components/setting_header'
	import { PopupHeader } from 'vux'
	import { Radio } from 'vux'
	import { XButton, XInput } from 'vux'
	export default{
		data(){
			return{
				title:"填写退货物流",
				show1: false,
				imgList: [],
				showInputOption: false,
				option: '选填',
				inputOption: '',
				inputnum: null,
				inputMobile: null
			}
		},
		components:{
			settingHeader,PopupHeader,Radio,XButton,XInput
		},
		created(){
			document.title = '填写退货物流';
		},
		methods:{
			test(){
				this.show1 = true;
			},
			goLogistics(){
				this.$router.push({ path: '/shop/logistics'})
			},
			upload:function (e) {
				var _this = this
	  			var reader = new FileReader();
	  			var file = e.target.files[0];
	  			reader.readAsDataURL(file); // 读出 base64
	  			reader.onloadend = function(e) {
	  				// 图片的 base64 格式, 可以直接当成 img 的 src 属性值        
	  				var dataURL = reader.result;
	  				if(_this.imgList.length<3){
	  					_this.imgList.push(e.target.result) 
	  				}
	  			};
	        },
	        imgDelete(index){
	       		this.imgList.splice(index, 1);
	        },
	        optional(){
	        	this.showInputOption = true;
	        },
	        changeOption(option){
	        	console.log('--', option)
	        	if(option && option.length!=0){
	        		this.option = option;
	        	}else{
	        		this.option = '选填'
	        	}
	        	
	        	this.showInputOption = false;
	        },
	        
		}
	}
</script>

<style lang="less" scoped>
 .write_logistics{
 	background-color: #F5F8F9;
 	.select{
 		padding-bottom: 1.5rem;
 	}
 	.shop{
 		border-top: 1px solid #90A2C7;
 		background-color: #fff;
		margin-bottom: 0.1rem;
		padding: 5px 0 5px 6px;
		img{
			width: 1.6rem;
			height: 1.6rem;
			margin-right: 0.2rem;
		}
		.shop-name{
			height:0.4rem; 
			font-size:0.28rem;
			font-family:PingFangSC-Medium;
			color:rgba(26,38,66,1);
			line-height:0.4rem;
			font-weight: 700;
		}
		.shop-size{
			height:0.33rem; 
			font-size:0.24rem;
			font-family:PingFangSC-Regular;
			color:rgba(144,162,199,1);
			line-height:0.33rem;
		}
 	}
 	.confirm{
 		width: 100%;
 		position: fixed;
 		bottom:0;
 		height:0.95rem;
 		text-align: center; 
		background:rgba(51,111,255,1);
		font-size:0.28rem;
		font-family:PingFangSC-Regular;
		color:rgba(255,255,255,1);
		line-height:0.95rem;
 	}
	.upload{
		margin-left: 0.3rem;
		padding-bottom: 0.28rem;
		.imgUpload{
			background: #F5F6FA;
			width: 1.6rem;
			height: 1.6rem;
			text-align: center;
			position: relative;
			float: left;
			margin-right: 0.3rem;
			margin-bottom: 0.15rem;
			.delete{
				position: absolute;
			    top: -0.2rem;
			    right: -0.2rem;
			    background-color: #000;
			    border-radius: 50%;
			    opacity: .5;
			    width: 0.35rem;
			    height: 0.35rem;
			    text-align: center;
			    z-index: 222;
				i{
					display: block;
					font-size: 0.25rem;
					color: #fff;
				}
			}
			.most{
				font-size: .2rem;
				color: #90A2C7;
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
				font-size: 0.95rem;
				color: #90A2C7;
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
</style>
<style lang="less">
	.write_logistics{
		.weui-input::-webkit-input-placeholder {
		    color: #90A2C7 !important; // WebKit browsers 
		}
		.weui-input:-moz-placeholder {
		    color: #90A2C7 !important; // Mozilla Firefox 4 to 18 
		}
		.weui-input::-moz-placeholder {
		    color: #90A2C7 !important; //Mozilla Firefox 19+ /
		}
		.weui-input:-ms-input-placeholder {
		    color: #90A2C7 !important; //Internet Explorer 10+ */
		}
		.vux-label{
			height:auto;  
			font-size:0.28rem;
			font-family:PingFangSC-Regular;
			color:rgba(26,38,66,1);
			line-height:0.4rem;
		}
		.weui-cell__ft{
			height:auto;
			/*width: 80%;*/
			font-size:0.28rem;
			font-family:PingFangSC-Regular;
			color:rgba(144,162,199,1);
			line-height:0.4rem;
		}
		.weui-cells{
			margin-top: 0;
		}
		.weui-cell{
			padding:15px 15px;
		}
		.weui-input{
			text-align: right;
			font-size: 0.28rem;
			color: #90A2C7;
		}
		.weui-label{
			font-size: 0.28rem;
			color: #1A2642;
		}
		.center{
			margin-top: 0.2rem;
			position: relative;
			margin-bottom: 0.2rem;
			.weui-label{
				font-size: 0.28rem;
				color: #1A2642;
			}

			.weui-cell__ft{
				text-align: left;
			}
		}
		.widthOption{
			.weui-cell__ft{
				width: 80%;
				word-wrap: break-word; 
			}
		}
		.option-input{
			font-size: 0.28rem;
			.weui-input{
				text-align: left;
				font-size: 0.28rem;
				color: #90A2C7;
			}
		}
	}
</style>