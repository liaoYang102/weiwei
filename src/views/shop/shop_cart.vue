<template>
	<section class='cart'>
		<settingHeader :title="title"></settingHeader>
		<div class="wrapper" ref="wrapper">
			<div class="content">
				<div class="box2">
			      	<div class="list" v-for="(item,index) in proList">
						<div class="storeName">
							<check-icon :value.sync='item.ischeck' @click.native="storecheck(index)" style="width:0.88rem;height:0.88rem;text-align:center;line-height:0.88rem;" class='fl'></check-icon>
							<div class="fr" style="width:6.62rem;line-height: 0.88rem;border-bottom:1px solid #D8DFF0">
								<div class="fl">
									<img :src="item.storeImg" alt="">
									<span>{{item.storeName}}</span>
								</div>
								<div class="fr edit" @click='edit($event,index)'>编辑</div>
							</div>
						</div>
						<div class="store-shop" v-for="(i,chIndex) in item.children">
							<check-icon :value.sync="i.ischeck" @click.native="shopcheck(index)" style="width:0.88rem;height:2.24rem;text-align:center;line-height:2.24rem;" class='fl'></check-icon>
							<div class="fr" style="width:6.62rem;padding-bottom:0.2rem;border-bottom:1px solid #D8DFF0;padding-top:0.2rem;">
								<div class="fl">
									<img :src="i.childrenImg" alt="">
								</div>
								<div class="fl shop-content" v-if='item.shopEdit'  @click="goShopDetails">
									<p class="shop-name">{{i.childrenName}}</p>
									<p class="shop-size">{{i.childrenSize}}<span class="fr">X{{i.childrenNum}}</span></p>
									<p class="shop-price"><span class="priceNum">￥{{i.childrenPrice}}</span> <span class="shopAcount">+{{i.childrenAccount}}积分</span></p>
								</div>
								<div class="fr shopEdit" v-else>
									<div class="fl">
										<group>
											<x-number width="1.8rem" v-model="children.childrenNum" :min="1"></x-number>
										</group>
										<div class="editSize" @click="showMask(index,chIndex)">
											<div class="fl">
												<!-- <span v-for="(item,index) in children.childrenContent"> -->
													<!-- <span v-if="index== children.childrenContent.length-1">{{item}}</span>
													<span v-else>{{item}};</span> -->
												<!-- </span> -->
												<span>{{i.childrenContent}}</span>
											</div>
											<div class="fr"><img src="../../assets/images/shop/modify.png" alt=""></div>
										</div>
									</div>
									<div class="fr delete" @click="del(index,chIndex,$event)">
										删除
									</div>
								</div>
							</div>
							<div class="clear"></div>
						</div>
					</div>
					<div class="clear"></div>
					<loading v-if="show"></loading>
					<noMore v-if="showNomore"></noMore>
					<specifications ref='sp' :router="router" :confirm="confirm" :shopList="shopList"></specifications>
				</div>
			</div>
			<div class="position">
				<div class="fl total">
					<check-icon :value.sync="allcheck" style='width:0.88rem;text-align:center;line-height:0.9rem;' class='fl' @click.native="isallcheck"></check-icon>
					<span class="selectAll">全选</span>
					<p class="shop-price fr">总计：<span class="priceNum">￥3598</span> <span class="shopAcount">+266积分</span></p>
				</div>
				<div class="fr clearing" @click="goConfirm">
					结算(1)
				</div>
		    </div>
		</div>
	</section>
</template>

<script>
	import settingHeader from '../../components/setting_header'
	import BScroll from 'better-scroll'
	import Loading from '../../components/loading'
	import noMore from '../../components/noMore'
	import specifications from './components/specifications' 
	export default{
		data(){
			return{
				proList:[{
					storeImg:"./static/shop/UNIQLO.png",
					storeName:"优衣库旗舰店",
					ischeck:false,
					shopEdit:true,
					allcheck:false,
					children:[{
						childrenImg:"./static/shop/order_detail1.png",
						childrenName:"女装U宽腿牛仔裤(水洗产品)女装U宽腿牛仔裤(水洗产品)",
						childrenSize:"颜色:蓝色；尺码:L/170修身",
						childrenNum:4,
						childrenPrice:"3598",
						childrenAccount:"266",
						childrenContent: "165/S;蓝色",
						ischeck:false,
					},{
						childrenImg:"./static/shop/order_detail1.png",
						childrenName:"女装U宽腿牛仔裤(水洗产品)女装U宽腿牛仔裤(水洗产品)",
						childrenSize:"颜色:蓝色；尺码:L/170修身",
						childrenNum:1,
						childrenPrice:"3598",
						childrenAccount:"266",
						childrenContent: "165/S;蓝色",
						ischeck:false,
					}]
				},{
					storeImg:"./static/shop/UNIQLO.png",
					storeName:"优衣库旗舰店",
					ischeck:false,
					shopEdit:true,
					allcheck:false,
					children:[{
						childrenImg:"./static/shop/order_detail1.png",
						childrenName:"女装U宽腿牛仔裤(水洗产品)女装U宽腿牛仔裤(水洗产品)",
						childrenSize:"颜色:蓝色；尺码:L/170修身",
						childrenNum:1,
						childrenPrice:"3598",
						childrenAccount:"266",
						childrenContent: "165/S;蓝色",
						ischeck:false
					}]
				},{
					storeImg:"./static/shop/UNIQLO.png",
					storeName:"优衣库旗舰店",
					ischeck:false,
					shopEdit:true,
					allcheck:false,
					children:[{
						childrenImg:"./static/shop/order_detail1.png",
						childrenName:"女装U宽腿牛仔裤(水洗产品)女装U宽腿牛仔裤(水洗产品)",
						childrenSize:"颜色:蓝色；尺码:L/170修身",
						childrenNum:3,
						childrenPrice:"3598",
						childrenAccount:"266",
						childrenContent: "165/S;蓝色",
						ischeck:false
					}]
				},{
					storeImg:"./static/shop/UNIQLO.png",
					storeName:"优衣库旗舰店",
					ischeck:false,
					shopEdit:true,
					allcheck:false,
					children:[{
						childrenImg:"./static/shop/order_detail1.png",
						childrenName:"女装U宽腿牛仔裤(水洗产品)女装U宽腿牛仔裤(水洗产品)",
						childrenSize:"颜色:蓝色；尺码:L/170修身",
						childrenNum:7,
						childrenPrice:"3598",
						childrenAccount:"266",
						childrenContent: "165/S;蓝色",
						ischeck:false
					}]
				}],
				title:'购物车',
				allcheck:false,
				show: false,
				showNomore: false,
				router: 'shop_cart',
				shopList:{
					shopImg:"./static/shop/order_detail1.png",
					shopPrice:"3598",
					shopAccount:"266",
					shopStock:"7282",
					list1:[
						{ name: 'S/165修身'},
						{ name: 'M/170修身'},
						{ name: 'L/175修身'},
						{ name: 'XL/180修身'}
					],
					list2:[
						{ num: '蓝色'},
						{ num: '白色'},
						{ num: '黑色'}
					]
				},
				arr:[]
			}
		},
		components:{
			settingHeader,Loading,noMore,specifications
		},
		mounted() {
			this.InitScroll()
		},
		methods:{
			InitScroll() {
				this.$nextTick(() => {
					if(!this.scroll) {
						this.scroll = new BScroll(this.$refs.wrapper, {
							click: true,
							scrollY: true,
							pullUpLoad: {
								threshold: -50, // 负值是当上拉到超过低部 70px；正值是距离底部距离 时，                    
							}
						})
						this.scroll.on('pullingUp', (pos) => {
							this.show = true;
							// this.LoadData()
							this.$nextTick(function() {
								this.scroll.finishPullUp();
								this.scroll.refresh();
							});
						})
					} else {
						this.scroll.refresh()
					}
				})

			},
		    edit(e,index){
		    	if(this.proList[index].shopEdit){
		    		e.target.innerHTML = '完成';
		    		this.proList[index].shopEdit = false;
		    		console.log(123)
		    	}else{
		    		e.target.innerHTML = '编辑';
		    		this.proList[index].shopEdit = true;
		    		if(a,b){
		    			var a = this.arr[0];
			    		var b = this.arr[1];
			    		this.proList[a].children[b].childrenSize = this.proList[a].children[b].childrenContent;
			    		this.$nextTick();
		    		}
		    	}
		    },
		    del(a,b,e){
		    	this.proList[a].children.splice(b,1);
		    	if(this.proList[a].children.length==0){
		    		this.proList.splice(a,1);
		    		if(this.proList.length!=0){
		    			a = (a+1) > this.proList.length ? this.proList.length-1 : a;
		    			var element = document.getElementsByClassName("list")[a].getElementsByClassName("edit")[0];
		    			console.log(this.proList)
			    		if(this.proList[a].shopEdit){
			    			element.innerHTML = '编辑';
			    		}else{
			    			element.innerHTML = '完成';
			    		}
		    		}
	    			
		    	}
		    },
		    goConfirm(){
		    	this.$router.push({ path:'/shop/confirm'})
		    },
		    showMask(a,b){
				this.arr[0] = a;
				this.arr[1] = b;
		    	this.$refs.sp.show1 = true;
		    },
		    goShopDetails(){
		    	this.$router.push({ path: '/shop/shop_details'})
		    },
		    confirm(){
		    	var a = this.arr[0];
		    	var b = this.arr[1];
		    	if (this.$refs.sp.router == 'shop_cart') {
		    		this.proList[a].children[b].childrenContent = this.$refs.sp.list3.join();
		    		this.$refs.sp.show1 = false;
		    		this.$refs.sp.shopList = this.shopList;
		    	}
		    },
		    isallcheck(){				//全选
		    	if(this.allcheck){
		    		for(var i in this.proList){
			    		this.proList[i].ischeck = true;
			    		for(var key in this.proList[i].children){
			    			this.proList[i].children[key].ischeck = true;
			    		}
			    	}
		    	}else{
		    		for(var i in this.proList){
			    		this.proList[i].ischeck = false;
			    		for(var key in this.proList[i].children){
			    			this.proList[i].children[key].ischeck = false;
			    		}
			    	}
		    	}
		    },
		    storecheck(index){		           //店铺商品全选
		    	var flag = true;
		    	for(var i in this.proList){
		    		if(!this.proList[i].ischeck){
		    			flag = false;
		    		}
		    	}
		    	if(flag){
		    		this.allcheck = true;
		    	}else{
		    		this.allcheck = false;
		    	}

		    	if(this.proList[index].ischeck){
		    		for(var i in this.proList[index].children){
		    			this.proList[index].children[i].ischeck = true;
		    		}
		    	}else{
		    		for(var i in this.proList[index].children){
		    			this.proList[index].children[i].ischeck = false;
		    		}
		    	}
		    },
		    shopcheck(index){					//商品选择
		    	var storeFlag = true;
		    	var allFlag = true;
		    	for(var i in this.proList[index].children){
	    			if(!this.proList[index].children[i].ischeck){
	    				storeFlag = false;
	    			}
	    		}
	    		if(storeFlag){
	    			this.proList[index].ischeck = true;
	    			for(var i in this.proList){
		    			for(var key in this.proList[i].children){
		    				if(!this.proList[i].children[key].ischeck){
		    					allFlag = false;
		    				}
		    				if(!this.proList[i].ischeck){
			    				allFlag = false;
			    			}
		    			}
		    		}
	    			if(allFlag){
	    				this.allcheck = true;
	    			}else{
	    				this.allcheck = false;
	    			}
	    		}else{
	    			this.proList[index].ischeck = false;
	    			this.allcheck = false;
	    		}
		    }
		}
	}

</script>

<style lang="less" scoped>
	.wrapper {
		height: 92%;
		overflow: hidden;
	}
	section{
		background-color: #F5F6FA;
		height: 100%;
	}
	.box2{
		padding-bottom: 0.3rem;
	}
	.storeName{
		width: 100%;
		height: 0.88rem;
		img{
			width: 0.36rem;
			height: 0.36rem;
			margin-right:0.07rem;
			vertical-align: middle;
		}
		span{
			font-size: 0.3rem;
			color: #222222;
		}
		.edit{
		    margin-top: 0.14rem;
    		margin-right: 0.19rem;
			width: 1.35rem;
			height: 0.58rem;
			border: 0.02rem solid #90A2C7;
			border-radius: 0.1rem;
			font-size: 0.24rem;
			color: #7386AD;
			line-height: 0.6rem;
			text-align: center;
		}
	}
	.list{
		background-color: #fff;
		border-bottom:  0.21rem solid #F5F6FA;
	}
	.store-shop{
		width: 100%;
		img{
			width: 1.84rem;
			height: 1.84rem;
			margin-right: 0.16rem;
		}
		.shop-content{
			width: 4.44rem;
			.shop-name{
				font-size: 0.28rem;
				color: #1A2642;
				line-height: 0.32rem;
				font-weight: 700;
			}
			.shop-size{
				margin-top: 0.07rem;
				font-size: 0.24rem;
				color: #90A2C7;
				margin-bottom: 0.13rem;
			}
			.priceNum{
				font-size: 0.32rem;
				font-weight: 700;
				color: #F23030;
				vertical-align: middle;
			}
			.shopAcount{
				display: inline-block;
				padding-left: 6px;
				padding-right: 8px;
				height: 0.4rem;
				line-height: 0.4rem;
				font-size: 0.24rem;
				color: #FFFFFF;
				background-image: linear-gradient(238deg, #5EC3FF 0%, #106FE3 100%);
				border-radius: 4px;
			}
		}
		.shopEdit{
			width: 4.6rem;
			.editSize{
				width: 3.1rem;
				height: 0.62rem;
				line-height: 0.62rem;
				margin-top: 0.31rem;
				border: 1px solid #90A2C7;
				border-radius: 4px;
				.fl{
					margin-left: 0.2rem;
					font-size: 0.28rem;
					color: #90A2C7;
				}
				.fr{
					margin-top: 0.08rem;
					img{
						width: 0.34rem;
						height: 0.34rem;
					}
				}
				
			}
			.delete{
				width: 1.1rem;
				background: #F23030;
				text-align: center;
				line-height: 1.94rem;
				color:#fff;
				height: 1.94rem;
			}
		}
	}
	.position{
		position: fixed;
		bottom:0;
		width: 100%;
		height: 0.94rem;
		background-color: #fff;
		.total{
			width: 5.1rem;
			height: 100%;
			line-height: 0.94rem;
			.selectAll{
				font-size: 0.24rem;
				color: #222222;
			}
			.shop-price{
				font-size: 0.24rem;
				color: #7386AD;
				margin-right: 0.24rem;
				.priceNum{
					font-size: 0.32rem;
					font-weight: 700;
					color: #F23030;
					vertical-align: middle;
				}
				.shopAcount{
					display: inline-block;
					padding-left: 6px;
					padding-right: 8px;
					height: 0.4rem;
					line-height: 0.4rem;
					font-size: 0.24rem;
					color: #FFFFFF;
					background-image: linear-gradient(238deg, #5EC3FF 0%, #106FE3 100%);
					border-radius: 4px;
				}
			}
		}
		.clearing{
			height: 100%;
			width: 2.4rem;
			background: #336FFF;
			font-size: 0.28rem;
			text-align: center;
			line-height: 0.94rem;
			color: #FFFFFF;
		}
	}
</style>
<style lang='less'>
	.cart{
		height: 100%;
		.vux-number-input{
			border:none;
			border-right: 1px solid #ececec;
			border-left: 1px solid #ececec;
			padding:4px 0;
		}
		.vux-number-selector{
			background: #F5F5F5;
		}
		.vux-number-selector svg{
			fill: #1A2642;
		}
		.weui-cell{
			padding:0;
		}
		.weui-cells:after{
			border-bottom:none;
		}
		.weui-cells{
			margin-top:0;
		}
	}
</style>