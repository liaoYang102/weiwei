<template>
	<div id="shops">

		<tab :line-width='0' id="showPanel">
			<tab-item selected @on-item-click="showPanel">
				{{ tabItem}}
				<!-- <img :src="downImg" alt="" width="13%"> -->
			</tab-item>
			<tab-item class='vux-center' @on-item-click="onItemClick">销量<img :src="numImg" alt="" width="12%"></tab-item>
			<tab-item @on-item-click="sort">
				<span>价格</span>
				<img :src="priceImg" alt="" width="12%">
			</tab-item>
			<tab-item @on-item-click="onMenuClick">
				筛选 <img src="../../assets/images/shop/screen.png" alt="" width="12%">
			</tab-item>
		</tab>

		<!-- 综合弹出框 -->
		<!-- <div v-transfer-dom class="dialogTop">
            <x-dialog v-model="showDialog" :hide-on-blur="true">
                <div class="panel" id="panel">
                    <li v-for="(item, index) in panel"  @click="select(item,index)">
                        <div :class="{'selected':act1==index}">
                            <span>{{ item.title}}</span> 
                            <img src="../../assets/images/shop/selected.png" alt="" v-if="act1 == index">
                        </div>
                    </li>
                </div>
            </x-dialog>
        </div> -->
		<div class="wrapper2" ref="wrapper2">
			<div class="content">
				<maskRight ref='xioaqiang'></maskRight>

				<Swiper :imgList="imgList"></Swiper>

				<div class="shopList" v-if="scorelist.length!=0&&moneylist.length!=0">
					<div class="all-shop">
						<ul>
							<li v-for="(item,index) in moneylist" @click="goShopdetails">
								<div class="list">
									<div class="score-box">
										<img src="../../assets/images/shop/shop1.png" alt="">
										<div class="text-box">
											<span>{{ item.name }}</span>
											<div class='money-box'>
												<span class="money-red">{{item.presentprice}}</span>
												<!-- <div class="score-num" style="display:inline-block;">+{{ item.score}}</div> -->
											</div>
											<span class="remaining">
                                            <span class="delete">{{ item.orprice}}</span>
											<div class="right">{{ item.pin}}</div>
											</span>
										</div>
									</div>
								</div>
							</li>

							<div class="clear"></div>
						</ul>
					</div>
					<loading v-if="show"></loading>
					<noMore v-if="showNomore"></noMore>
				</div>
				<noData v-else :status="noDataStatus" :stateText="noDataText"></noData>
			</div>
		</div>
		<!-- <div class="maskTop" v-if="showDialog"></div> -->
	</div>
</template>

<script>
	import { XDialog } from 'vux'
	import settingHeader from '../../components/setting_header'
	import Swiper from '../shop/components/swiper'
	import BScroll from 'better-scroll'
	import maskRight from '../shop/components/maskRight'
	import Loading from '../../components/loading'
	import noMore from '../../components/noMore'
	import noData from '../../components/noData'

	export default {
		components: {
			settingHeader,
			Swiper,
			XDialog,
			maskRight,
			Loading,
			noMore,
			noData
		},
		data() {
			return {
				title: '商品',
				tabItem: '综合',
				imgList: [
					'https://img1.360buyimg.com/da/s750x366_jfs/t15823/359/2502172528/255972/995371c1/5ab39a3aNc707d11c.jpg!cr_1125x549_0_72.dpg',
					'https://m.360buyimg.com/mobilecms/s750x366_jfs/t17263/59/1819098790/59845/c0b2555d/5ad7ef6eN9e686113.jpg!cr_1125x549_0_72!q70.jpg.dpg',
					'https://img1.360buyimg.com/da/s750x366_jfs/t18433/254/1405186807/201565/eed65ff3/5ac9d6caNcebaeb82.jpg!cr_1125x549_0_72.dpg'
				],
				panel: [{
						title: '综合',
						status: 0
					},
					{
						title: '积分兑',
						status: 1
					},
					{
						title: '积分购',
						status: 2
					}
				],
				// showDialog: false,
				sMaskRight: false,
				act1: 0,
				shopTitle: '',
				test: true,
				list: [{
						name: 'Vivo X21 屏幕指纹版全面...',
						score: '26554积分',
						remaining: '剩余24件',
						status: 1
					},
					{
						name: 'Vivo X21 屏幕指纹版全面...',
						score: '26554积分',
						remaining: '剩余24件',
						status: 1
					},
					{
						name: 'Vivo X21 屏幕指纹版全面...',
						presentprice: '￥3598',
						orprice: '￥4355',
						pin: '月销4714',
						status: 2
					},
					{
						name: 'Vivo X21 屏幕指纹版全面...',
						presentprice: '￥3598',
						orprice: '￥4355',
						pin: '月销4714',
						status: 2
					},
					{
						name: 'Vivo X21 屏幕指纹版全面...',
						presentprice: '￥3598',
						orprice: '￥4355',
						pin: '月销4714',
						status: 2
					},
					{
						name: 'Vivo X21 屏幕指纹版全面...',
						presentprice: '￥3598',
						orprice: '￥4355',
						pin: '月销4714',
						status: 2
					},
					{
						name: 'Vivo X21 屏幕指纹版全面...',
						presentprice: '￥3598',
						orprice: '￥4355',
						pin: '月销4714',
						status: 2
					},
					{
						name: 'Vivo X21 屏幕指纹版全面...',
						presentprice: '￥3598',
						orprice: '￥4355',
						pin: '月销4714',
						status: 2
					},
					{
						name: 'Vivo X21 屏幕指纹版全面...',
						presentprice: '￥3598',
						orprice: '￥4355',
						pin: '月销4714',
						status: 2
					},
					{
						name: 'Vivo X21 屏幕指纹版全面...',
						presentprice: '￥3598',
						orprice: '￥4355',
						pin: '月销4714',
						status: 2
					},
				],
				status: 0,
				score: true,
				scorelist: [],
				moneylist: [],
				show: false,
				showNomore: false,
				downImg: './static/shop/down1.png',
				topImg: './static/shop/topicon.png',
				priceImg: './static/shop/default.png',
				priceSort: 0,
				obj: null,
				numImg: './static/shop/default.png',
				numSort: 0,
				noDataStatus: 0,
				noDataText: '暂无商品',
			}
		},
		mounted: function() {
			this.init()
			this.InitScroll()
		},
		created: function() {
			this.filterData();
		},
		methods: {
			init() {
				if(this.$route.params != {} && this.$route.params.title != null) {
					this.tabItem = this.$route.params.title
				}
			},
			// 综合
			showPanel: function() {
				this.priceImg = './static/shop/default.png'
				this.numImg = './static/shop/default.png'
				this.numSort = 0;
				this.priceSort = 0;
				// if(this.downImg == './static/shop/down.png'){
				//     this.downImg = './static/shop/down1.png'
				// }
				// if(this.showDialog == false){
				//     this.showDialog = true;
				// }
				// let top = parseInt(document.getElementById('showPanel').offsetTop);
				// var transform = document.getElementsByClassName('content')[0].style.transform;
				// console.log(transform);
				// var regRule =/\s(\d|-?\d+)/;
				// var reg = Math.abs(transform.match(regRule)[0]);
				// console.log(reg,top);
				// let distance = parseInt(top+90-reg);
				// let mask = document.getElementById('panel').parentNode.parentNode;
				// let children = mask.children;
				// for(var i=0;i<children.length;i++){
				//     children[i].style.top = distance+"px";
				// }
				// let maskTop = document.getElementsByClassName('maskTop')[0];
				// console.log(maskTop);
				// maskTop.style.height = distance+"px";

			},
			// select: function(obj,i){
			//     this.act1 = i;
			//     this.showDialog = false;
			//     this.tabItem = obj.title;
			// },
			// 筛选
			onMenuClick: function() {
				// this.showDialog = false;
				this.$refs.xioaqiang.show1 = true;
				this.$refs.xioaqiang.InitScroll()
			},
			// 销量
			onItemClick: function() {
				this.downImg = './static/shop/down.png'
				this.priceImg = './static/shop/default.png'
				this.priceSort = 0;
				let a = this.numSort;
				if(a < 2) {
					a++;
				} else {
					a--;
				}
				this.numSort = a;
				if(a == 0) {
					this.numImg = './static/shop/default.png'
				} else {
					this.numImg = './static/shop/ascending.png'
					if(a == 2) {
						this.numImg = './static/shop/descending.png'
					}
				}
				console.log('--', this.numSort)
			},
			// 价格
			sort() {
				// this.showDialog = false;
				// this.downImg = './static/shop/down.png'
				this.numImg = './static/shop/default.png'
				this.numSort = 0;
				let a = this.priceSort;
				if(a < 2) {
					a++;
				} else {
					a--;
				}
				this.priceSort = a;
				if(a == 0) {
					this.priceImg = './static/shop/default.png'
				} else {
					this.priceImg = './static/shop/ascending.png'
					if(a == 2) {
						this.priceImg = './static/shop/descending.png'
					}
				}
				console.log('--', this.priceSort)
			},
			filterData() {
				let vm = this
				for(var i = 0; i < vm.list.length; i++) {
					if(vm.list[i].status == 1) {
						vm.scorelist.push(vm.list[i])
					} else {
						vm.moneylist.push(vm.list[i])
					}
				}
			},
			goShopdetails() {
				this.$router.push({
					path: '/shop/shop_details'
				})
			},
			InitScroll() {
				this.$nextTick(() => {
					if(!this.scroll) {
						this.scroll = new BScroll(this.$refs.wrapper2, {
							click: true,
							scrollY: true,
							pullUpLoad: {
								// threshold: -30, // 负值是当上拉到超过低部 70px；正值是距离底部距离 时，                    
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
				setTimeout(function() {
					_this.show = false;
					let obj = [{
							name: 'Vivo X21 屏幕指纹版全面...',
							presentprice: '￥3598',
							orprice: '￥4355',
							pin: '月销4714',
							score: '265积分',
							status: 2
						},
						{
							name: 'Vivo X21 屏幕指纹版全面...',
							presentprice: '￥3598',
							orprice: '￥4355',
							pin: '月销4714',
							score: '265积分',
							status: 2
						}
					];
					_this.moneylist = _this.moneylist.concat(obj);
					console.log(_this.moneylist);
				}, 3000)
			},

		}
	}
</script>

<style lang="less" scoped>
	.panel {
		width: 100%;
		height: 1.74rem;
		background: #fff;
		li {
			list-style: none;
			margin: 0.18rem 0.29rem 0.06rem 0.46rem;
			font-size: 0.28rem;
			text-align: left;
			.selected {
				color: #336FFF;
				img {
					float: right;
					width: 5%;
				}
			}
		}
	}
	
	.wrapper2 {
		height:6.4rem;
		overflow: hidden;
		.content {
			padding-bottom: 0.1rem;
		}
	}
	/*li:nth-child(odd) .list{
    margin-right: 0.04rem;
}*/
	
	.shopList {
		width: 100%;
		background-color: #F5F6FA;
		.all-shop {
			li {
				list-style: none;
				float: left;
				width: 50%;
				height: 4.28rem;
				font-size: 0.24rem;
				color: #1A2642;
				margin-bottom: 0.04rem;
				.list {
					background: #fff;
					padding-bottom: 0.1rem;
					border-right: 1px solid #F5F8F9;
					.score-exchange {
						position: absolute;
						left: -0.05rem;
						top: -0.05rem;
						width: 1.23rem;
						background-image: linear-gradient(241deg, #5EC3FF 1%, #106FE3 100%);
						text-align: center;
						color: #fff;
						font-size: 0.22rem;
						height: 0.36rem;
						line-height: 0.36rem;
						border-radius: 0 0.05rem 0.05rem 0;
					}
					.score-box {
						img {
							display: block;
							margin: 0 auto;
							width: 78%;
						}
						.text-box {
							margin-left: 0.3rem;
							.money-box {
								padding: 0.1rem 0;
								margin-left: -0.04rem;
							}
							.money-red {
								font-size: 0.32rem;
								color: #F23030;
							}
							.score-num {
								width: 1.2rem;
								background-image: linear-gradient(241deg, #5EC3FF 1%, #106FE3 100%);
								text-align: center;
								color: #fff;
								font-size: 0.22rem;
								height: 0.36rem;
								line-height: 0.36rem;
								border-radius: 0.05rem;
								margin: 0.1rem 0 0.19rem 0;
								padding: 0.02rem 0.08rem;
							}
							.remaining {
								color: #90A2C7;
								.delete {
									text-decoration: line-through;
								}
								.right {
									float: right;
									margin-right: 0.28rem;
								}
							}
						}
					}
				}
				.score {
					height: 4.2rem;
					position: relative;
					border: 0.05rem solid;
					border-image: linear-gradient(#5EC3FF, #106FE3) 30 30;
				}
			}
		}
	}
	
	.maskTop {
		position: fixed;
		top: 0;
		z-index: 10;
		background: rgba(255, 255, 255, 0);
		width: 100%;
		height: 1%;
	}
</style>

<style lang="less">
	.dialogTop {
		.weui-mask {
			top: 50%;
			z-index: 10;
		}
		.weui-dialog {
			position: absolute;
			/*top: 54.1%;*/
			width: 101%;
			/*left: 49.5%;*/
			background: #fff;
			max-width: 101%;
			z-index: 11;
			border-radius: 0;
		}
	}
	
	#shops .vux-tab .vux-tab-item {
		color: #1A2642;
	}
	
	#shops .vux-tab .vux-tab-item.vux-tab-selected {
		color: #256fff;
		border-bottom: 3px solid #256fff;
	}
</style>