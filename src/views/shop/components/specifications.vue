<template>
	<div>
		<div v-transfer-dom class="popup">
		  	<popup v-model='show1' position="bottom" style="background: #fff">
		    	<div class="specifications">
		    		<div class="sp-content">
		    			<div class="sp-panel">
		    				<div class="ab-img"><img src="../../../assets/images/shop/close.png" @click="close"></div>
		    				<img src="../../../assets/images/shop/shop4.png">
		    				<div class="sp-text">
		    					<span class="sp-red">￥3598</span>
		    					<div class="sp-score">+266积分</div>
		    					<div class="sp-gray">库存7282件</div>
		    					<div>已选
		    						<span v-for="(item,index) in list3">“{{ item.options}}” </span>
		    					</div>
		    				</div>
		    			</div>

		    			<div class="sp-color">
		    				<div>颜色分类</div>
		    				<div class="sp-color-li">
		    					<li class="sp-li-btn" v-for="(item,index) in list1" :class="{'sp-li-selected':act1==index}" @click="active(index)">{{ item.name}}</li>
		    				</div>
		    			</div>

		    			<div class="sp-color">
		    				<div>颜色分类</div>
		    				<div class="sp-color-li">
		    					<li class="sp-li-num" v-for="(item,index) in list2" :class="{'sp-li-selected':act2==index}" @click="active2(index)">{{ item.num}}</li>
		    				</div>
		    			</div>

		    			<div class="sp-buynum">
		    				<div class="sp-buyname">购买数量</div>
		    				<div class="sp-number">
		    					<div class="minus" @click="minus">-</div>
		    					<div class="num">{{ num}}</div>
		    					<div class="add" @click="add">+</div>
		    				</div>
		    			</div>
		    		</div>
		    		<div class="sp-btn">确定</div>
		    	</div>
		  	</popup>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			show1: false,
			act1: 0,
			act2: 0,
			list1:[
				{ name: '粉色尊贵版'},
				{ name: '粉色尊贵版'},
				{ name: '粉色尊贵版'},
				{ name: '粉色尊贵版'}
			],
			list2:[
				{ num: '1'},
				{ num: '2'},
				{ num: '3'}
			],
			num: 1,
			list3: [
				{ options: '粉色尊贵版'},
				{ options: '1'}
			]
		}
	},
	methods: {
		active:function (index) {
	        this.act1 = index
	        let vm = this;
	        let option = vm.list1[index].name
	        let obj = { options: option}
	        console.log('-=-=', vm.list3)
	        vm.list3.push(obj)
	        
	    },
	    active2:function (index) {
	        this.act2 = index
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
	    }

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
					.sp-red{
						font-size: 0.32rem;
						color: #F23030;
					}
					.sp-score{
						width: 1.2rem;
						background-image: linear-gradient(241deg, #5EC3FF 1%, #106FE3 100%);
						text-align: center;
						color:#fff;
						font-size: 0.22rem;
						height: 0.36rem;
						line-height: 0.36rem;
						border-radius: 0.05rem;
						padding: 0.02rem 0;
						display: inline-block;
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