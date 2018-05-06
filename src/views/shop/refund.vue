<template>
	<section class='refund'>
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
		      <cell title="货物状态" :value="cargoText" :border-intent="false" @click.native='cargo' is-link></cell>
		      <cell title="退款原因" :value="refundText" :border-intent="false" @click.native='refund' is-link></cell>
		    </group>
		    <group class="center">
		    	<div @click="showMoneyInput" v-show="!showInputMoney" class="red">
		    		<cell title="退款金额" :value="'￥'+money" :border-intent="false"></cell>
		    	</div>
		      
			    <div class="money-input" v-show="showInputMoney">
			    	<div class="symbol">￥</div>
			    	<x-input title="退款金额" placeholder="请填写(只能输入数字)" :should-toast-error="false" type="number" :max="9" :show-clear="false" v-model="inputMoney" @on-blur="changeMoney(inputMoney)">
			    	</x-input>
			    </div>

		      	<cell title="退款积分" value="2400" :border-intent="false"></cell>
		    </group>

		    <toast v-model="showToast" type="text" width="70%" :time="3000" position="middle">{{toast}}</toast>

		    <span class="prompt">最多¥624.00，含发货邮费¥0.00</span>

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
      		    		<p class="most">最多{{3-imgList.length}}张</p>
      		    		<input type="file" accept="image/*" multiple="multiple" @change="upload($event)">
  			    	</div>
  			    	<div class="clear"></div>
  			    </div>
		    </group>
		</div>
		<div class="confirm" @click="goRefunddetails">
			确定
		</div>
		<div v-transfer-dom>
		  <popup v-model="show">
	        <popup-header title="货物状态" :show-bottom-border="false"></popup-header>
	        <group gutter="0">
	        	<scroller lock-x height="96px" ref="scrollerEvent">
			      <div class="box2">
			        <radio :options="['未收到货', '已收到货']" @click.native="cargoSelect($event)"></radio>
			      </div>
			    </scroller>
	          <div class="pay-box">
				<x-button class="add-btn" :gradients="['#1D62F0', '#19D5FD']" @click.native="cargoCancel">取消</x-button>
			  </div>
	        </group>
	      </popup>
	      <popup v-model="show1">
	        <popup-header title="退款原因" :show-bottom-border="false"></popup-header>
	        <group gutter="0">
	        	<scroller lock-x height="200px" ref="scrollerEvent">
			      <div class="box2">
			        <radio :options="['不喜欢/不想要', '空包裹', '未按约定时间发货', '快递/物流一直未送到','快递/物流无跟踪记录','货物破损已拒签']" @click.native="refundSelect($event)"></radio>
			      </div>
			    </scroller>
	          <div class="pay-box">
				<x-button class="add-btn" :gradients="['#1D62F0', '#19D5FD']" @click.native="refundCancel">取消</x-button>
			  </div>
	        </group>
	      </popup>
	    </div>

	    <vuedialog ref='vDialog' :dialogConfig="dialogConfig" :confirm="confirm" :canel="canel"></vuedialog>
	</section>
</template>

<script>
	import settingHeader from '../../components/setting_header'
	import { PopupHeader } from 'vux'
	import { Radio } from 'vux'
	import { XButton,XInput } from 'vux'
	import vuedialog from '../../components/dialog'
	export default{
		data(){
			return{
				title:"申请退款",
				show: false,
				cargoText:"请选择",
				show1: false,
				refundText:"请选择",
				dialogConfig:{
					buttons:['确定','取消'],
					type:"warning",
					delay:null,
					message:'输入错误请重新输入',
					headMessage:'提示',
				},
				showInputMoney: false,
				imgList: [],
				money: '624.00',
				inputMoney: '624.00',
				showInputOption: false,
				inputOption: '',
				option: '选填',
				showToast: false,
				toast:'退款金额必须为数字'
				// timer: '',
			}
		},
		components:{
			settingHeader,PopupHeader,Radio,XButton,vuedialog,XInput
		},
		created(){
			document.title = '申请退款';
			// var int1 = window.setInterval(this.time,1000);
		},
		methods:{
			cargo(){
				this.show = true;
			},
			cargoCancel(){
				this.show = false;
			},
			cargoSelect(e){
				this.cargoText = e.target.value;
				this.show = false;
			},
			refund(){
				if(this.cargoText !== "请选择"){
					this.show1 = true;
				}
			},
			refundSelect(e){
				this.refundText = e.target.value;
				this.show1 = false;
			},
			refundCancel(){
				this.show1 = false;
			},
			goRefunddetails(){
				this.$router.push({ path: '/shop/refund_details'})
			},
			showMoneyInput(){
				// this.$refs.vDialog.showDialog = true;
				// this.autoclose()
				this.showInputMoney = true
				this.inputMoney = this.money
			},
			confirm(){
				alert(1);
			},
			canel(){
				this.$refs.vDialog.showDialog = false;
			},
			upload:function (e) {
				var _this = this;
	  			var file = e.target.files;
	  			for(var i in file){
	  				var reader = new FileReader();
	  				reader.readAsDataURL(file[i]); // 读出 base64
		  			reader.onloadend = function(e) {
		  				// 图片的 base64 格式, 可以直接当成 img 的 src 属性值   
		  				var dataURL = reader.result;
		  				if(_this.imgList.length<3){
		  					_this.imgList.push(e.target.result) 
		  				}
		  			};	
	  			}
	  			  			
	        },
	        imgDelete(index){
	       		this.imgList.splice(index, 1);
	        },
	        autoclose(){
				let _this = this
	       		let delay = _this.dialogConfig.delay;
	       		if(delay && delay!=0 && _this.$refs.vDialog.showDialog){
       				setTimeout(function(){
       					_this.$refs.vDialog.showDialog = false
       				},delay);
	       		}
	        },
	        optional(){
	        	this.showInputOption = true;
	        },
	        changeMoney(money){
	        	var reg = /^\d+(?=\.{0,1}\d+$|$)/;
	        	if(reg.test(money)){
		        	let m = parseFloat(money);
		        	if(m.toString().length<=9){
    		        	this.money = this.returnFloat(m);
		        	}else{
		        		this.showToast = true
		        		this.toast = '最多可输入9个字符'
		        	}
		        	
	        	}else{
	        		this.showToast = true
	        	}
	        	
	        	this.showInputMoney = false;
	        },
	        changeOption(option){
	        	if(option && option.length!=0){
	        		this.option = option;
	        	}else{
	        		this.option = '选填'
	        	}
	        	
	        	this.showInputOption = false;
	        },
	        returnFloat(val){ 				//强制保留两位小数
				var value=Math.round(parseFloat(val)*100)/100;
				var xsd=value.toString().split(".");
				if(xsd.length==1){
					value=value.toString()+".00";
					return value;
				}
				if(xsd.length>1){
					if(xsd[1].length<2){
						value=value.toString()+"0";
					}
					return value;
				}
	        }
		}
	}
</script>

<style lang="less" scoped>
 .refund{
 	/*height: 100%;*/
 	background-color: #F5F8F9;
 	.select{
 		padding-bottom: 1.4rem;
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
			    top: -0.1rem;
			    right: -0.1rem;
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
	.refund{
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
		.center{
			margin-top: 0.2rem;
			position: relative;

			.weui-label{
				font-size: 0.28rem;
				color: #1A2642;
			}
			
			.weui-input{
				font-size: 0.28rem;
				color: #F23030;
				padding-left: 0.43rem;
			}
			.red{
				.weui-cell__ft{
					color:#F23030;
				}
			}
			
			.money-input{
				position: relative;
				font-size: 0.28rem;
				.symbol{
					position: absolute;
					color:#F23030;
					top: 32%;
					left: 25%;
				}
			}
		}
		.widthOption{
			.weui-cell__ft{
				width: 80%;
				word-wrap: break-word; 
			}
		}
		.prompt{
			padding-left: 15px;
			display: inline-block;
			height:0.53rem; 
			font-size:0.24rem;
			font-family:PingFangSC-Regular;
			color:rgba(144,162,199,1);
			line-height:0.53rem;
		}
		.option-input{
			font-size: 0.28rem;
		}
		.weui-toast{
			width: 80%;
		}
	}
</style>