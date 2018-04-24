<template>
	<div class="order_eval">
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
			    	<div class="imgUpload">
			    		<i class="iconfont icon-zhaoxiangji"></i>
			    		<input type="file" accept="image/*" multiple="multiple" @change="test($event)">
			    	</div>
			    	<div class="clear"></div>
			    </div>
			</div>
		</div>

		<div class="store">
			<div class="storename">
				<img src="../../assets/images/shop/UNIQLO.png">
				<span>威伐光番禺店</span>
			</div>
			<div class="store-star">
				<div class="s-text">治疗效果</div>
				<rater v-model="data2" :max="5" active-color="#336FFF" class="s-star" :margin="5"></rater>
			</div>
			<div class="store-star">
				<div class="s-text">服务态度</div>
				<rater v-model="data3" :max="5" active-color="#336FFF" class="s-star" :margin="5"></rater>
			</div>
		</div>

		<div class="footer">
			<div class="left">
				<check-icon :value.sync="demo1">匿名</check-icon>
			</div>
			<div class="right" @click="goComents">
				提交评价
			</div>
		</div>


	</div>
</template>

<script>
	import settingHeader from '../../components/setting_header'
	import { CheckIcon } from 'vux'

	export default {
		data() {
			return {
				title:"订单评价",
				demo1: false,
				data: 0,
				data2: 0,
				data3: 0
			}
				
		},
		components:{
			settingHeader,
			CheckIcon
		},
		/*created(){

		},*/
		mounted(){
			
		},
		computed:{
			
		},
		methods:{
			test:function (e) {
				let input = e.currentTarget;
				console.log('--', input.files)
	           // var fileObj = input.files[0];
	           var windowURL = window.URL || window.webkitURL;
	           var formdata = new FormData();
	           console.log('-')
	       },
			goComents(){
				this.$router.push({name:'meaidetail',params:2});
			}
		}
	}
</script>

<style lang="less" scoped>
	@import url('../../../static/css/global');
	.order_eval{
		.writing{
			background: #fff;
			margin-top: 0.01rem;
			.content{
				overflow: hidden;
				margin-left: 0.21rem;
				margin-right: 0.17rem;
				/*border-bottom: 0.01rem solid #D8DFF0;*/
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
					margin-top: 5px;
					.imgUpload{
						background: #F5F6FA;
						width: 1.5rem;
						height: 1.5rem;
						text-align: center;
						position: relative;
						i{
							font-size: 1rem;
							color: #90A2C7;
						}
						input{
						    position: absolute;
						    top:0;
						    left:0;
						    width:100%;
						    height: 100%;
						    opacity: 0;
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
			overflow: hidden;
			padding-bottom: 0.29rem;
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
.weui-textarea-counter{
	color: #90A2C7 !important;
}
textarea::-webkit-input-placeholder{color:#90A2C7 !important;}
/* .textarea .weui-cells{
	margin-top: 0 !important;
}
.textarea .weui-textarea{
	color: #1A2642 !important;
	font-size: 0.28rem !important;
}
.textarea .vux-no-group-title{
	margin-top: 0 !important;
}
.textarea .weui-cells:before{
	border-top: none !important;
}
.textarea .weui-cells:after{
	border-bottom: none !important;
}
.footer .weui-icon-circle{
	float: left;
	margin: auto 0;
} */
</style>