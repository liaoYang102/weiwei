<template>
	<section class="write-comments">
		<settingHeader :title="title"></settingHeader>

		<div class="writing">
			<div class="content">
				<div class="img">
					<img src="../../assets/images/shop/shop4.png">
					<div class="img-text">商品评价</div>
				</div>
				<div class="star">
					<rater v-model="data" :max="5" active-color="#336FFF" class="center" :margin="5" star='<i class="iconfont icon-xingxing"></i>'></rater>
				</div>
				<div class="summary">{{ describe}}</div>
			</div>

			<div class="textarea">
				<group>
			      	<x-textarea :max="200" name="detail" placeholder="分享你的购买心得" :height="137" :show-counter="true"></x-textarea>
			    </group>
			    <div class="upload">
			    	<div class="imgUpload"  v-for="(item,index) in imgList" @click="cindex(index)">
			    		<img @click="imgDelete(index)" class="gbx" src="../../assets/images/member/gbx.png"/>
			    		<input class="upinput" type="file" @change="cone" />
			    		<div class="bigPic" v-show="[imgList.length ? imgList.length >0 : imgList.length =0]">
							<img v-lazy="item">
						</div>
			    	</div>

			    	<div class="imgUpload" v-if="imgList.length!=5">
    		    		<i class="iconfont icon-zhaoxiangji icon"></i>
    		    		<p class="length">{{ imgList.length}}/5</p>
    		    		<input type="file" accept="image/*" multiple="multiple" @change="test($event)">
			    	</div>
			    	<div class="clear"></div>
			    </div>
			</div>
		</div>

		<div class="store">
			<div class="storename">
				<img src="../../assets/images/shop/UNIQLO.png">
				<span>优衣库旗舰店</span>
			</div>
			<div class="store-star">
				<div class="s-text">商品打分</div>
				<rater v-model="data2" :max="5" active-color="#336FFF" class="s-star" :margin="5" star='<i class="iconfont icon-xingxing"></i>'></rater>
				<div class="summary">{{ storeDesc}}</div>
			</div>
			<div class="store-star">
				<div class="s-text">物流服务</div>
				<rater v-model="data3" :max="5" active-color="#336FFF" class="s-star" :margin="5" star='<i class="iconfont icon-xingxing"></i>'></rater>
				<div class="summary">{{ logisticsDesc}}</div>
			</div>
			<div class="clear"></div>
		</div>

		<div class="footer">
			<div class="left">
				<check-icon :value.sync="demo1">匿名</check-icon>
			</div>
			<div class="right" @click="goComents">
				提交评价
			</div>
		</div>
	</section>
</template>

<script>
import settingHeader from '../../components/setting_header'
import { CheckIcon } from 'vux'
export default {
	components: {
		settingHeader,CheckIcon
	},
	data() {
		return {
			demo1: false,
			title: '订单评价',
			data: 0,
			data2: 0,
			data3: 0,
			imgList: [],
			pindex: 0,
			describe: '',
			storeDesc: '',
			logisticsDesc: ''
		}
	},
	created(){

	},
	methods:{
		test:function (e) {
  			var _this = this;
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
       goComents(){
       		this.$router.push({name:'shop_details', params:{title:'评价'}});
       },
       imgDelete(index){
       		this.imgList.splice(index, 1);
       },
       cindex(index) {
			this.pindex = index
			console.log(this.pindex)
	   },
       cone(e) {
			var _this = this
			var reader = new FileReader();
			var file = e.target.files[0];
			reader.readAsDataURL(file);
			reader.onloadend = function(e) {
				var dataURL = reader.result;
				_this.imgList.splice(_this.pindex, 1, e.target.result)
			};
	   },
	   changeDescribe(val,index){
	   		let text;
	   		if(val == 1){
	   			text = '非常差'
	   		}else if(val == 2){
	   			text = '差'
	   		}else if(val == 3){
	   			text = '一般'
	   		}else if (val == 4) {
	   			text = '好'
	   		}else if(val == 5){
	   			text = '非常好'
	   		}else {
	   			text = ''
	   		}
	   		if(index == 0){
	   			this.describe = text;
	   		}else if(index == 1){
	   			this.storeDesc = text
	   		}else {
	   			this.logisticsDesc = text
	   		}
	   }
	},
	watch:{
		data(val, oldVal){
            console.log("data: "+val, oldVal);
            this.changeDescribe(val,0)
        },
        data2(val, oldVal){
            console.log("data2: "+val, oldVal);
            this.changeDescribe(val,1)
        },
        data3(val, oldVal){
            console.log("data3: "+val, oldVal);
            this.changeDescribe(val,2)
        }
	}
}
</script>

<style lang="less" scoped>
.write-comments{
	width: 100%;
	background: #F5F6FA;
	overflow: auto;
	padding-bottom: 1.2rem;
	.writing{
		background: #fff;
		margin-top: 0.01rem;
		.content{
			overflow: hidden;
			margin-left: 0.21rem;
			margin-right: 0.17rem;
			border-bottom: 0.01rem solid #D8DFF0;
			font-size:0.28rem;
			color: #1A2642;
			padding-top: 0.19rem;
			padding-bottom: 0.26rem;
			.img{
				float: left;
				width: 38%;
				/*line-height: 1.1rem;*/
				img{
					width: 36%;
					float: left;
					margin-left: 0.09rem;
					margin-right: 0.18rem;
				}
				.img-text{
					margin-top: 0.34rem;
				}
			}
			.star{
				float: left;
				.center{
					margin: 0.22rem 0 0 0;
				}
			}
			.summary{
			    color:#90A2C7;
			    float:right;
			    text-align: center;
			    margin-top: 0.34rem;
			    margin-right: .35rem;
			}
		}
		.textarea{
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
					margin-top: 0.25rem;
					.gbx{
						position: absolute;
						right: -7px;
						top: -7px;
						width: 0.38rem;
						height: 0.38rem;
						z-index: 222;
					}
					.length{
						font-size: .3rem;
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
	}
	.store{
		margin-top: 0.2rem;
		background: #fff;
		padding-bottom: 0.2rem;
		.storename{
			margin-left: 0.21rem;
			border-bottom: 0.01rem solid #D8DFF0;
			margin-right: 0.17rem;
			padding: 0.25rem 0.09rem;
			font-size: 0.3rem;
			color: #222222;
			line-height: 0.42rem;
			img{
				width: 5%;
				vertical-align: middle;
			}
		}
		.store-star{
			overflow: hidden;
			margin-left: 0.21rem;
			font-size: 0.28rem;
			color: #1A2642;
			.s-text{
				float: left;
				text-align: center;
				margin-right: 0.2rem;
				margin-left: 0.09rem;
				line-height: 0.4rem;
				padding-top: 0.06rem;
				margin-top: 0.26rem;
			}
			.s-star{
				float: left;
				margin-top: 0.23rem;
			}
			.summary{
				float: right;
				margin-right: 1rem;
				color:#90A2C7;
				padding-top: 0.1rem;
				text-align: center;
				margin-top: 0.24rem;
			}
		}
	}
	.footer{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 0.94rem;
		background: #fff;
		.left{
			float: left;
			width: 64.5%;
			padding: 0.24rem 0 0.24rem 0.16rem;
		}
		.right{
			float: right;
			width: 32%;
			background: #336FFF;
			text-align: center;
			font-size:0.28rem;
			color: #fff;
			padding: 0.27rem 0;
			line-height: 0.4rem;

		}
	}
}

</style>

<style lang="less">
.write-comments .iconfont{
	font-size: 0.36rem;
}
.textarea .weui-cells{
	margin-top: 0;
}
.textarea .weui-textarea{
	color: #1A2642;
	font-size: 0.28rem;
}
.textarea .vux-no-group-title{
	margin-top: 0;
}
.textarea .weui-cells:before{
	border-top: none;
}
.textarea .weui-cells:after{
	border-bottom: 1px solid #D8DFF0;
}
textarea::-webkit-input-placeholder{color:#90A2C7 !important;}
.footer .left .weui-icon-circle{
	color: #90A2C7;
	font-size: 0.4rem;
}
.footer .vux-check-icon > span{
	font-size: 0.3rem;
	line-height: 0.4rem;
}
.footer .weui-icon-success{
	font-size: 0.4rem;
}
</style>