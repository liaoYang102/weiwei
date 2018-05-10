<template>
	<section class="write-comments">
		<settingHeader :title="title"></settingHeader>

		<div class="writing">
			<div class="content">
				<div class="img">
					<img src="../../assets/images/shop/shop4.png">
					<span>商品评价</span>
				</div>
				<div class="star">
					<rater v-model="data" :max="5" active-color="#336FFF" class="center" :margin="5"></rater>
				</div>
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
							<img :src="item">
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
				<rater v-model="data2" :max="5" active-color="#336FFF" class="s-star" :margin="5"></rater>
			</div>
			<div class="store-star">
				<div class="s-text">物流服务</div>
				<rater v-model="data3" :max="5" active-color="#336FFF" class="s-star" :margin="5"></rater>
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
			pindex: 0
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
       		this.$router.push({name:'meaidetail',params:2});
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
				width: 40%;
				line-height: 1rem;
				img{
					width: 34%;
					float: left;
					margin-left: 0.09rem;
					margin-right: 0.18rem;
				}
			}
			.star{
				float: left;
				.center{
					margin: 0.26rem 0 0 0;
				}
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
			margin-top: 0.26rem;
			.s-text{
				float: left;
				text-align: center;
				margin-right: 0.2rem;
				margin-left: 0.09rem;
				line-height: 0.4rem;
				padding-top: 0.06rem;
			}
			.s-star{
				float: left;
			}
		}
	}
	.footer{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 0.94rem;
		line-height: 0.94rem;
		background: #fff;
		.left{
			float: left;
			width: 64.5%;
			padding-left: 0.16rem;
		}
		.right{
			float: right;
			width: 32%;
			height: 0.94rem; 
			background: #336FFF;
			text-align: center;
			font-size:0.28rem;
			color: #fff;

		}
	}
}

</style>

<style lang="less">
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
	border-bottom: none;
}
</style>