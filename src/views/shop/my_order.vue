<template>
	<section class='myOrder' style="height: 100%">
		<settingHeader :title="title"></settingHeader>
		<tab :line-width="1" :scroll-threshold="5" custom-bar-width="30px">
	      <tab-item selected @on-item-click="onLookAll">全部</tab-item>
	      <tab-item @on-item-click="onItemClick">待付款</tab-item>
	      <tab-item @on-item-click="onItemClick">待完成</tab-item>
	      <tab-item @on-item-click="onItemClick">已完成</tab-item>
	      <tab-item @on-item-click="onItemClick">已取消</tab-item>
	    </tab>
		<div class="wrapper" ref="wrapper" >
			<div class="content">
			    <div class="box" v-if=" test == true">
			        <div class="box2">
			            <div class="shop-box" v-for="(order,index) in orderList">
			    			<div class="box-head">
			    				<div class="fl">
			    					<img src="../../assets/images/shop/UNIQLO.png" alt="" class='shop-logo'>
			    					<span class="box-name">{{order.store}}</span>
			    					<img src="../../assets/images/shop/turn_right.png" alt="" class='turn-right'>
			    				</div>
			    				<div class="fr">{{order.statusContent}}</div>
			    				<div class="clear"></div>
			    			</div>
			    			<div class="box-detail" @click="goOrderdetails">
			    				<div class="shop-detail" v-for="(item,sIndex) in order.shopList">
			    					<img src="../../assets/images/shop/order_detail1.png" alt="" class='fl'>
			    					<div class="fl shop-details">
			    						<p class="shop-name">{{item.shopname}}</p>
			    						<p class="shop-size">{{item.size}}</p>
			    					</div>
			    					<div class="clear"></div>
			    				</div>
			    				<div class="viewAll" v-if="order.shopList.length >= 10" @click.stop="viewAll(index)">
			    					{{viewText}} <img src="../../assets/images/shop/dropdown.png">
			    				</div>
			    				<div class="shop-total">
			    					<p class="fr">
			    						共 {{order.shopList.length}} 件 合计：<span class="shop-price">{{order.score}}积分+{{order.money}}元</span>
			    					</p>
			    					<div class="clear"></div>
			    				</div>
			    			</div>
			    			<div class="box-bottom">
			    				<div class="shop-btn btn-status1 fr" @click="goRouter(order.btnStatus[0])">{{order.btnStatus[0]}}</div>
			    				<div class="shop-btn fr" @click="showAlert(btn)" v-for="(btn,cIndex) in order.btnStatus" v-if="cIndex>0">
			    					<span>{{btn}}</span>
			    				</div>
			    			</div>
			            </div>
			           <div class="clear"></div>
			        </div>
			        <loading v-if="show"></loading>
			        <noMore v-if="showNomore"></noMore>
			    </div>

			    <div class="wrap no_orders" v-else>
		        	<div class="none-data">
		        		<img v-lazy="imgSrc" alt=""> 
		    			<p>{{ status}}</p>
		        	</div>
		    		
		    		<recommended></recommended>
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
	import recommended from './components/recommended'
	export default {
		data(){
			return {
				title:'我的订单',
				test: true,
				show9: false,
				show: false,
				showNomore: false,
				imgSrc: './static/shop/noOrder.png', //./static/shop/404.png 页面丢失  //./static/shop/network.png  网络异常
				status:'暂无订单',//./static/shop/noShop.png 暂无商品
				orderList: [
					{	store:'优衣库冒牌店',status: 0,statusContent: '等待买家付款',
						shopList:[
							{shopname: '1女装U宽腿牛仔裤(水洗产品)',size:'颜色:蓝色；尺码:L/170修身',num: '1'},
							{shopname: '2女装U宽腿牛仔裤(水洗产品)',size:'颜色:蓝色；尺码:L/170修身',num: '1'},
							{shopname: '3女装U宽腿牛仔裤(水洗产品)',size:'颜色:蓝色；尺码:L/170修身',num: '1'},
							{shopname: '4女装U宽腿牛仔裤(水洗产品)',size:'颜色:蓝色；尺码:L/170修身',num: '1'},
							{shopname: '5女装U宽腿牛仔裤(水洗产品)',size:'颜色:蓝色；尺码:L/170修身',num: '1'},
							{shopname: '6女装U宽腿牛仔裤(水洗产品)',size:'颜色:蓝色；尺码:L/170修身',num: '1'},
							{shopname: '7女装U宽腿牛仔裤(水洗产品)',size:'颜色:蓝色；尺码:L/170修身',num: '1'},
							{shopname: '8女装U宽腿牛仔裤(水洗产品)',size:'颜色:蓝色；尺码:L/170修身',num: '1'},
							{shopname: '9女装U宽腿牛仔裤(水洗产品)',size:'颜色:蓝色；尺码:L/170修身',num: '1'},
							{shopname: '10女装U宽腿牛仔裤(水洗产品)',size:'颜色:蓝色；尺码:L/170修身',num: '1'}
						],
						score: '100',money: '30',btnStatus: ["付款","取消订单"]
					},
					{	store:'优衣库专卖店',status: 1,statusContent: '买家已付款',
						shopList:[{shopname: '女装U宽腿牛仔裤(水洗产品)',size:'颜色:蓝色；尺码:L/170修身',num: '1'}],score: '100',money: '30',btnStatus: ["提醒发货"]
					},
					{	store:'优衣库专卖店',status: 2,statusContent: '卖家已发货',shopList:[{shopname: '女装U宽腿牛仔裤(水洗产品)',size:'颜色:蓝色；尺码:L/170修身',num: '1'}],score: '100',money: '30',btnStatus: ["确认收货","查看物流"]
					},
					{	store:'优衣库专卖店',status: 3,statusContent: '交易成功',shopList:[{shopname: '女装U宽腿牛仔裤(水洗产品)',size:'颜色:蓝色；尺码:L/170修身',num: '1'}],score: '100',money: '30',btnStatus: ["确认收货","退货","查看物流"]
					},
					{	store:'优衣库冒牌店',status: 4,statusContent: '交易关闭',shopList:[{shopname: '女装U宽腿牛仔裤(水洗产品)',size:'颜色:蓝色；尺码:L/170修身',num: '1'}],score: '100',money: '30',btnStatus: ["删除订单"]
					}
				],
				allList: [
					{	store:'优衣库冒牌店',status: 0,statusContent: '等待买家付款',
						shopList:[{shopname: '女装U宽腿牛仔裤(水洗产品)',size:'颜色:蓝色；尺码:L/170修身',num: '1'}],
						score: '100',money: '30',btnStatus: ["付款","取消订单"]
					},
					{	store:'优衣库专卖店',status: 1,statusContent: '买家已付款',
						shopList:[{shopname: '女装U宽腿牛仔裤(水洗产品)',size:'颜色:蓝色；尺码:L/170修身',num: '1'}],score: '100',money: '30',btnStatus: ["提醒发货"]
					},
					{	store:'优衣库专卖店',status: 2,statusContent: '卖家已发货',shopList:[{shopname: '女装U宽腿牛仔裤(水洗产品)',size:'颜色:蓝色；尺码:L/170修身',num: '1'}],score: '100',money: '30',btnStatus: ["确认收货","查看物流"]
					},
					{	store:'优衣库专卖店',status: 3,statusContent: '交易成功',shopList:[{shopname: '女装U宽腿牛仔裤(水洗产品)',size:'颜色:蓝色；尺码:L/170修身',num: '1'}],score: '100',money: '30',btnStatus: ["确认收货","退货","查看物流"]
					},
					{	store:'优衣库冒牌店',status: 4,statusContent: '交易关闭',shopList:[{shopname: '女装U宽腿牛仔裤(水洗产品)',size:'颜色:蓝色；尺码:L/170修身',num: '1'}],score: '100',money: '30',btnStatus: ["删除订单"]
					}
				],
				viewText: '查看全部'
			}
		},
		components: {
	        settingHeader,Loading,noMore,recommended
	    },
	    mounted() {
			this.InitScroll()
		},
		methods:{
		  	onItemClick (index) {
		  		this.test = true;
		        console.log('on item click:', index);
		        this.filterData(index);
		    },
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
    						this.LoadData()
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
    		LoadData() {
    			var _this = this
    			setTimeout(function(){
    				_this.show = false;
    				// let obj = [{ shopname: 'VANS Old Skool lite黑白超轻鞋款 黑色38.5', money: '3598', score: '266'},
    				// { shopname: 'VANS Old Skool lite黑白超轻鞋款 黑色38.5', money: '3598', score: '266'}];
    				// _this.shopList = _this.shopList.concat(obj);
    				// console.log(_this.shopList);
    			},3000)
    		},
		    goRouter(status){
		    	console.log('--', status)
		    	if(status == '付款'){
		    		this.$router.push({ path: '/shop/confirm'})
		    	} else if(status == '提醒发货'){
		    		this.onRemind()
		    	} else if(status == '确认收货'){
		    		this.onConfirm()
		    	} else if(status == '删除订单'){
		    		this.orderDelete()
		    	}
		    },
		    goTsuccess(){
		    	this.$router.push({ path: '/shop/t_success'})
		    },
		    goOrderdetails(){
		    	this.$router.push({ path: '/shop/order_details'})
		    },
		    // 取消订单
		    showAlert(b){
		    	console.log('...',b)
		    	if(b == '取消订单'){
		    		let _this = this;
			    	_this.$dialog.show({
			    		type: 'warning',
			    		headMessage: '确认取消订单？',
			    		message: '亲,您是否确定要取消订单？',
			    		buttons: ['确定', '取消'],
			    		canel() {
			    			_this.$dialog.hide()
			    		},
			    		confirm() {
			    			_this.$dialog.hide()
			    		}
			    	})
			    	console.log(_this.$dialog)
		    	}else if(b == '查看物流'){
		    		this.$router.push({ path: '/shop/logistics'})
		    	} else if(b == '退货'){
		    		this.$router.push({ path: '/shop/refund'})
		    	}
		    	
		    	// this.alert = true;
		    },
		    // 提醒发货
		    onRemind(){
		    	let _this = this;
		    	_this.$dialog.show({
		    		type: 'success',
		    		headMessage: '温馨提示',
		    		message: '亲,您的请求卖家已收到,请勿着急!',
		    		buttons: ['我知道了'],
		    		delay: 2000,
		    		canel() {
		    			_this.$dialog.hide()
		    		},
		    		confirm() {
		    			_this.$dialog.hide()
		    		}
		    	})
		    	console.log(_this.$dialog)
		    },
		    // 确认收货
		    onConfirm(){
		    	let _this = this;
		    	_this.$dialog.show({
		    		type: 'warning',
		    		headMessage: '确认收货',
		    		message: '亲,您的快件状态是已到达,是否确定收到货?',
		    		buttons: ['确定', '取消'],
		    		canel() {
		    			_this.$dialog.hide()
		    		},
		    		confirm() {
		    			_this.goTsuccess()
		    			_this.$dialog.hide()
		    		}
		    	})
		    	console.log(_this.$dialog)
		    },
		    // 删除订单
		    orderDelete(){
				let _this = this;
		    	_this.$dialog.show({
		    		type: 'warning',
		    		headMessage: '删除订单',
		    		message: '删除之后可以从电脑端订单回收站恢复。',
		    		buttons: ['确定', '取消'],
		    		canel() {
		    			_this.$dialog.hide()
		    		},
		    		confirm() {
		    			_this.$dialog.hide()
		    		}
		    	})
		    	console.log(_this.$dialog)
			},
		    onLookAll(){
		    	this.test = true;
		    	this.orderList = this.allList;
		    },
		    filterData(index){
		    	console.log('data---', index)
		    	if(index>2){
		    		var a = index;
		    	}else if(index==1){
		    		a = index-1;
		    	} else {
		    		a = index;
		    		var b = index-1;
		    	}
		    	let arr =[];
		    	for(let i=0;i<this.allList.length;i++){
		    		if(a == this.allList[i].status || b == this.allList[i].status){
		    			arr.push(this.allList[i])
		    			console.log('000', arr)
		    		}
		    	}
		    	this.orderList = arr;
		    	this.$nextTick();
		    },
		    // 查看全部
		    viewAll(o){
		    	let a = {shopname: '11女装U宽腿牛仔裤(水洗产品)',size:'颜色:蓝色；尺码:L/170修身',num: '1'}
		    	if(this.orderList[o].shopList.length == 10){
		    		this.orderList[o].shopList.push(a)
		    		this.viewText = '收起'
		    	}else if(this.orderList[o].shopList.length > 10){
		    		this.orderList[o].shopList.pop()
		    		this.viewText = '查看全部'
		    	}
		    	console.log('this.orderList[o].shopList',this.orderList[o].shopList)
		    	let imgs = document.getElementsByClassName('viewAll')[0].children[0];
    			if (imgs.className.indexOf("rotate") == -1) {
    	            imgs.className = "rotate";

    	        } else {
    	            imgs.className = "";
    	        }
		    }
		}
	}
</script>

<style lang="less" scoped>
	.wrapper {
		height: 93.2%;
		background-color: #F5F6FA;
		overflow: hidden;
	}
	.no_orders{
		padding-bottom: 0.2rem;
		background-color: #F5F6FA;
		.none-data {
		    /* display: none; */
		    /*position: absolute;*/
		    background: #fff;
		    width: 100%;
		    padding-bottom: 0.66rem;
		    margin-bottom: 0.2rem;
		    text-align: center;
		    z-index: 10;
		    img{
	    	    width: 100%;
		    }
		    p{
		    	font-size: 0.32rem;
	    		color: #1A2642;
		    }
		}
	}
	.box{
		padding-bottom: 0.5rem;
	}
	.box2{
		background-color: #F5F6FA;
		.box-head{
			margin-top: 0.25rem;
			height: 0.8rem;
			line-height: 0.8rem;
			background-color: #Fff;
			.fr{
				font-size: 0.28rem;
				color: #336FFF;
				margin-right: 0.2rem;
			}
			.fl{
				.shop-logo{
					margin-left: 0.32rem;
					vertical-align: middle;
					width: 0.36rem;
					height: 0.36rem;
				}
				.box-name{
					font-size: 0.3rem;
					color: #1A2642;
					margin-left: 0.15rem;
				}
				.turn-right{
					width: 0.24rem;
					height: 0.24rem;
				}
			}
		}
		.box-detail{
			.shop-detail{
				height: 1.7rem;
				padding-right: 0.2rem;
				img{
					margin:0.05rem 0.2rem 0.05rem 6px;
					width: 1.6rem;
					height: 1.6rem;
				}
				.shop-details{
					margin-top: 0.18rem;
					.shop-name{
						font-size: 0.28rem;
						color: #1A2642;
					}
					.shop-size{
						font-size: 0.24rem;
						color: #90A2C7;
					}
				}
			}

			.viewAll{
				width: 82.4%;
				margin: 0.15rem auto;
				border-radius:4px;
				border:1px solid #90A2C7;
				text-align: center;
				color: #7386AD;
				font-size: 0.24rem;
				padding: 0.11rem 0;
				img{
					width: 5%;
					vertical-align: middle;
				}
				.rotate{
					transform: rotate(180deg);
				}
			}
			.shop-total{
				height: 0.8rem;
				line-height: 0.8rem;
				padding-right: 0.32rem;
				background-color: #fff;
				.fr{
					font-size: 0.24rem;
					color: #1A2642;
					.shop-price{
						font-size: 0.28rem;
						color: #141C33;
					}
				}
			}	
		}
		.box-bottom{
			border-top: 1px solid #D8DFF0;
			height: 0.8rem;
			line-height: 1rem;
			padding-right: 0.22rem;
			background-color: #fff;
			padding-top: 0.2rem;
			.shop-btn{
				box-sizing: border-box;
				display: inline-block;
				width: 1.5rem;
				height: 0.56rem;
				line-height: 0.56rem;
				text-align: center;
				font-size: 0.28rem;
				color: #90A2C7;
				border: 1px solid #90A2C7;
				border-radius: 4px;
				margin-left:0.2rem;
			}
			.btn-status1{
				color:#336FFF;
				border: 1px solid #336FFF;
			}
		}
	}
</style>
<style lang="less">
	.myOrder .vux-tab-item-badge{
		font-size: 0.16rem;
		margin:auto 0 auto 0.04rem;
	}
	.myOrder .vux-tab-item{
		font-size: 0.28rem;
	}
	.myOrder .vux-tab .vux-tab-item.vux-tab-selected{
		border-bottom: 4px solid #256fff ;
	}
</style>
