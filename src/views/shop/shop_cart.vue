<template>
	<section class='cart'>
		<div class="wrapper" ref="wrapper">
			<div class="content">
				<settingHeader :title="title"></settingHeader>
				<div class="box2">
			      	<div class="list">
						<div class="storeName">
							<check-icon :value.sync='demo' style="width:0.88rem;height:0.88rem;text-align:center;line-height:0.88rem;" class='fl'></check-icon>
							<div class="fr" style="width:6.62rem;line-height: 0.88rem;border-bottom:1px solid #D8DFF0">
								<div class="fl">
									<img src="../../assets/images/shop/UNIQLO.png" alt="">
									<span>优衣库旗舰店</span>
								</div>
								<div class="fr edit" @click='edit($event)'>编辑</div>
							</div>
						</div>
						<div class="store-shop">
							<check-icon :value.sync="demo" style="width:0.88rem;height:2.24rem;text-align:center;line-height:2.24rem;" class='fl'></check-icon>
							<div class="fr" style="width:6.62rem;padding-bottom:0.2rem;border-bottom:1px solid #D8DFF0;padding-top:0.2rem;">
								<div class="fl">
									<img src="../../assets/images/shop/order_detail1.png" alt="">
								</div>
								<div class="fl shop-content" v-if='item'>
									<p class="shop-name">女装U宽腿牛仔裤(水洗产品)女装U宽腿牛仔裤(水洗产品)</p>
									<p class="shop-size">颜色:蓝色；尺码:L/170修身 <span class="fr">X4</span></p>
									<p class="shop-price"><span class="priceNum">￥3598</span> <span class="shopAcount">+266积分</span></p>
								</div>
								<div class="fr shopEdit" v-else>
									<div class="fl">
										<inline-x-number width="1.8rem" :min='0'></inline-x-number>
										<div class="editSize">
											<div class="fl">蓝色；165/S</div>
											<div class="fr"><img src="../../assets/images/shop/modify.png" alt=""></div>
										</div>
									</div>
									<div class="fr delete">
										删除
									</div>
								</div>
							</div>
							<div class="clear"></div>
						</div>
						<div class="store-shop">
							<check-icon :value.sync="demo" style="width:0.88rem;height:2.24rem;text-align:center;line-height:2.24rem;" class='fl'></check-icon>
							<div class="fr" style="width:6.62rem;padding-bottom:0.2rem;border-bottom:1px solid #D8DFF0;padding-top:0.2rem;">
								<div class="fl">
									<img src="../../assets/images/shop/order_detail1.png" alt="">
								</div>
								<div class="fl shop-content" v-if='item'>
									<p class="shop-name">女装U宽腿牛仔裤(水洗产品)女装U宽腿牛仔裤(水洗产品)</p>
									<p class="shop-size">颜色:蓝色；尺码:L/170修身 <span class="fr">X4</span></p>
									<p class="shop-price"><span class="priceNum">￥3598</span> <span class="shopAcount">+266积分</span></p>
								</div>
								<div class="fr shopEdit"  v-else>
									<div class="fl">
										<inline-x-number width="1.8rem" :min='0'></inline-x-number>
										<div class="editSize">
											<div class="fl">蓝色；165/S</div>
											<div class="fr"><img src="../../assets/images/shop/modify.png" alt=""></div>
										</div>
									</div>
									<div class="fr delete">
										删除
									</div>
								</div>
							</div>
							<div class="clear"></div>
						</div>
					</div>
					<div class="list" v-for="item in 2">
						<div class="storeName">
							<check-icon :value.sync="demo" style="width:0.88rem;height:0.88rem;text-align:center;line-height:0.88rem;" class='fl'></check-icon>
							<div class="fr" style="width:6.62rem;line-height: 0.88rem;border-bottom:1px solid #D8DFF0">
								<div class="fl">
									<img src="../../assets/images/shop/UNIQLO.png" alt="">
									<span>优衣库旗舰店</span>
								</div>
								<div class="fr edit" @click='edit($event)'>编辑</div>
							</div>
						</div>
						<div class="store-shop">
							<check-icon :value.sync="demo" style="width:0.88rem;height:2.24rem;text-align:center;line-height:2.24rem;" class='fl'></check-icon>
							<div class="fr" style="width:6.62rem;padding-bottom:0.2rem;border-bottom:1px solid #D8DFF0;padding-top:0.2rem;">
								<div class="fl">
									<img src="../../assets/images/shop/order_detail1.png" alt="">
								</div>
								<div class="fl shop-content" v-if='item'>
									<p class="shop-name">女装U宽腿牛仔裤(水洗产品)女装U宽腿牛仔裤(水洗产品)</p>
									<p class="shop-size">颜色:蓝色；尺码:L/170修身 <span class="fr">X4</span></p>
									<p class="shop-price"><span class="priceNum">￥3598</span> <span class="shopAcount">+266积分</span></p>
								</div>
								<div class="fr shopEdit" v-else>
									<div class="fl">
										<inline-x-number width="1.8rem" :min='0'></inline-x-number>
										<div class="editSize">
											<div class="fl">蓝色；165/S</div>
											<div class="fr"><img src="../../assets/images/shop/modify.png" alt=""></div>
										</div>
									</div>
									<div class="fr delete">
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
				</div>
			</div>
			<div class="position">
				<div class="fl total">
					<check-icon :value.sync="demo" style='width:0.88rem;text-align:center;line-height:0.9rem;' class='fl'></check-icon>
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
	export default{
		data(){
			return{
				title:'兑换详情',
				demo1: false,
				item:true,
				shopList:[],
				storeList:[],
				all:false,
				demo:false,
				show: false,
				showNomore: false
			}
		},
		components:{
			settingHeader,Loading,noMore
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
								threshold: -30, // 负值是当上拉到超过低部 70px；正值是距离底部距离 时，                    
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
		    edit(e){
		    	if(this.item){
		    		e.target.innerHTML = '完成';
		    		this.item = false;
		    	}else{
		    		e.target.innerHTML = '编辑';
		    		this.item = true;
		    	}
		    },
		    goConfirm(){
		    	this.$router.push({ path:'/shop/confirm'})
		    }
		}
	}

</script>

<style lang="less" scoped>
	.wrapper {
		height: 100%;
		overflow: hidden;
	}
	section{
		background-color: #F5F6FA;
		height: 100%;
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
				width: 1.2rem;
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
	}
</style>