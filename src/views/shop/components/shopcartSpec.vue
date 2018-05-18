<template>
	<div v-model="router">
		<div v-transfer-dom class="popup">
		  	<popup v-model='show1' position="bottom" style="background: #fff">
		    	<div class="specifications">
		    		<div class="sp-content">
		    			<div class="sp-panel">
		    				<div class="ab-img"><img src="../../../assets/images/shop/close.png" @click="close"></div>
		    				<img v-lazy="shopList.shopImg">
		    				<div class="sp-text">
		    					<p class="shopPrice">
									<span class="priceNum">￥{{shopList.shopPrice}}</span> 
									<span class="shopAcount">+{{shopList.shopAccount}}积分</span>
								</p>
		    					<div class="sp-gray">库存{{shopList.shopStock}}件</div>
		    					<div>已选
		    						<span v-for="item in list3">“{{item}}” </span>
		    					</div>
		    				</div>
		    			</div>

		    			<div class="sp-color">
		    				<div>颜色分类</div>
		    				<div class="sp-color-li">
		    					<li class="sp-li-btn" v-for="(item,index) in shopList.list1" :class="{'sp-li-selected':act1==index}" @click="active(index)">{{ item.name}}</li>
		    				</div>
		    			</div>

		    			<div class="sp-color">
		    				<div>颜色分类</div>
		    				<div class="sp-color-li">
		    					<li class="sp-li-num" v-for="(item,index) in shopList.list2" :class="{'sp-li-selected':act2==index}" @click="active2(index)">{{ item.num}}</li>
		    				</div>
		    			</div>

		    			<div class="sp-buynum" v-if="router != 'shop_cart'">
		    				<div class="sp-buyname">购买数量</div>
		    				<div class="sp-number">
		    					<div class="minus" @click="minus">-</div>
		    					<div class="num">{{num}}</div>
		    					<div class="add" @click="add">+</div>
		    				</div>
		    			</div>
		    		</div>
		    		<div class="sp-btn" @click="confirm">确定</div>
		    	</div>
		  	</popup>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		router: String,
		confirm: Function,

	},
	data(){
		return {
			shopList: {
		        type: Object,
		        default: function(){
		        	return{
		        		shopImg:"./static/shop/shop4.png",
						shopPrice:"3598",
						shopAccount:"266",
						shopStock:"7282",
						list1:[
							{ name: '粉色尊贵版0'},
							{ name: '粉色尊贵版1'},
							{ name: '粉色尊贵版2'},
							{ name: '粉色尊贵版3'}
						],
						list2:[
							{ num: '1'},
							{ num: '2'},
							{ num: '3'}
						]
		        	}
				}
		    },
			show1: false,
			act1: -1,
			act2: -1,
			num: 1,
			list3: []
		}
	},
	mounted() {
	},
	methods: {
		active:function (index) {
	        this.act1 = index;
	        let option = this.shopList.list1[index].name;
	        this.list3[0] = option;
	    },
	    active2:function (index) {
	        this.act2 = index;
	        let option = this.shopList.list2[index].num;
	        this.list3[1] = option;
	    },
	    add:function(){
	    	this.num++;
	    },
	    minus: function(){
	    	this.num--;
	    	if(this.num <= 1){
	    		this.num = 1;
	    	}
	    },
	    close: function(){
	    	this.show1 = false
	    },
	}
}	
</script>

<style lang="less" scoped>
li{
	list-style: none;
	background: #F5F6FA;
	border-radius: 0.04rem;
	text-align: center;
}
.popup{
	width: 100%;
	.specifications{
		.sp-content{
			margin-left: 0.21rem;
			margin-right: 0.03rem;
			padding-bottom: 2.56rem;
			.sp-panel{
				position: relative;
				border-bottom: 0.01rem solid #D8DFF0;
				padding-top: 0.3rem;
				padding-bottom: 0.2rem;
				overflow: hidden;
				img{
					width: 26.7%;
					float: left;
					margin-right: 0.3rem;
				}
				.ab-img{
					position: absolute;
					left: 92.5%;
					top: 5.3%;
					width: 8%;
					img{
						width: 75%;
					}
				}
				.sp-text{
					margin-top: 0.23rem;
					font-size: 0.28rem;
					color: #1A2642;
					.shopPrice{
						.priceNum{
							display: inline-block;
							font-size: 0.32rem;
							color: #F23030;
							font-weight: 700;
							vertical-align: middle;
						}
						.shopAcount{
							font-weight: normal;
							display: inline-block;
							padding-left: 0.06rem;
							padding-right: 0.08rem;
							height: 0.4rem;
							text-align: center;
							font-size: 0.24rem;
							line-height: 0.4rem;
							background-image: linear-gradient(238deg, #5EC3FF 0%, #106FE3 100%);
							border-radius: 0.04rem;
							color:#fff;
						}
					}
					.sp-gray{
						font-size: 0.28rem;
						color: #90A2C7;
						margin-top: 0.06rem;
						margin-bottom: 0.04rem;
					}
				}
			}

			.sp-color{
				padding-top: 0.19rem;
				border-bottom: 0.01rem solid #D8DFF0;
				font-size: 0.28rem;
				color: #1A2642;
				overflow: hidden;
				.sp-color-li{
					margin-top: 0.19rem;
					.sp-li-btn{
						width: 1.79rem;
						float: left;
						margin-right: 0.24rem;
						margin-bottom: 0.2rem;
						padding: 0.08rem 0;
					}
					.sp-li-selected{
						background: #336FFF;
						color: #fff;
					}
					.sp-li-num{
						float: left;
						padding: 0.08rem 0.2rem;
						margin-right: 0.24rem;
						margin-bottom: 0.2rem;
					}
				}
			}

			.sp-buynum{
				height: 1.16rem;
				border-bottom: 0.01rem solid #D8DFF0;
				.sp-buyname{
					width: 65%;
					float: left;
					line-height: 1.16rem;
				}
				.sp-number{
					margin-top: 0.29rem;
					width: 35%;
					float: left;
					font-size: 0.28rem;
					color: #222222;;
					.minus{
						text-align: center;
						width: 30%;
						float: left;
						color: #9B9B9B;
						background: #F5F5F5;
						padding: 0.16rem 0;
					}
					.num{
						text-align: center;
						width: 30%;
						float: left;
						padding: 0.2rem 0;
					}
					.add{
						text-align: center;
						width: 30%;
						float: left;
						background: #F5F5F5;
						padding: 0.16rem 0;
					}
				}
			}
		}

		.sp-btn{
			position: fixed;
			bottom: 0;
			width: 100%;
			background: #336FFF;
			height: 0.95rem;
			text-align: center;
			color: #FFF;
			line-height: 0.95rem;
			font-size: 0.28rem;
		}
	}
}
</style>