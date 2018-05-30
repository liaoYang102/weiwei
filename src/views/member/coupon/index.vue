<template>
	<div class="couponindex-box">

		<x-header class="b-w" :left-options="{backText:''}">
			<div class="tar-box">
				<tab class="tab" :line-width="2" active-color="#397df8" custom-bar-width="0.56rem">
					<tab-item v-for="(item,index) in couponType" :key="index" :selected="typeActive == index" @on-item-click="onItemClick(index)">{{item}}</tab-item>
				</tab>
			</div>
			<div class="edit-btn" @click="showDrawer" slot="right">
				<img src="../../../assets/images/index/shaixuan.png" alt="" />
			</div>
		</x-header>

		<div class="couponList">
			<div class="wrapper" :class="{'top46':hShow}" ref="wrapper">
				<div class="content">
					<div v-if="couponList.length>0">
						<div v-for="(item,index) in couponList" :style="[!item.show?mb:'']" class="roll"><!-- -->
							<div class="rollOne">
								<div class="right">
									<div class="top" :class="{'textColor': item.status != 1}">
										<span>{{item.name}}</span>
										<span>仅可购买服饰类/护肤类/彩妆类的部分商品</span>
									</div>
									<div class="middle">
										<div>
										 	<span>满{{item.condition}}元减{{item.denomination}}元</span><br>
										 	<span>{{item.startTime}} - {{item.endTime}}</span>
										</div>
										<div class="bottom" @click="view(index)">查看详情 <img :src="iconImg"></div>
									</div>
									
								</div>
								<div class="left">
									<div class="img" :class="[{'red':item.status == 1 && item.type !=10 && item.type !=40},{'blue':item.status == 1 && item.type !=20 && item.type !=30 && item.type !=50},{'gq':item.status != 1}]"></div>

									<div v-if="item.type !=10 && item.type !=40">
										<p v-if="item.type != 2"><i>￥</i>{{item.denomination}}</p>
										<p v-else>{{item.discount}}<i>折</i></p>
									</div>
									<div v-if="item.type !=20 && item.type !=30 && item.type !=50" class="typeImg">
										<img src="../../../../static/member/type3.png" style="width:100%;" v-if="item.type == 3">
										<img src="../../../../static/member/type4.png" style="width:100%;" v-else>
									</div>
									
									<div class="useBtn" v-if="item.status == 1">去使用</div>

									<div v-if="item.status != 1" class="statusImg">
										<img src="../../../../static/member/expired.png" width="100%" v-if="item.status == 3">
										<img src="../../../../static/member/used.png" width="100%" v-else>
									</div>
								</div>
							</div>
							<div class="detail" v-if="item.show">
								{{item.content}}2222
							</div>
						</div>
						<Loading v-if="show"> </Loading>
						<Nomore v-if="showNo"></Nomore>
					</div>
					<noData v-if="couponList.length == 0" :status="2" stateText="暂无数据"></noData>
				</div>
			</div>
		</div>
		<!--筛选菜单栏-->
		<div v-transfer-dom>
			<popup v-model="show9" position="top">
				<div class="position-vertical-demo">
					<div class="twoClass">
						<div class="type-item" v-for="(item,index) in twoClass">
							<span :class="{'twoActive':twoIndex == index}" @click="twoChange(index,item)">{{item}}</span>
						</div>
					</div>
				</div>
			</popup>
		</div>

	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import { Tab, TabItem, Masker, Drawer, Spinner, XHeader } from 'vux'
	import settingHeader from '../../../components/setting_header'
	import Loading from '../../../components/loading'
	import Nomore from '../../../components/noMore'
	import noData from '../../../components/noData'
	export default {
		data() {
			return {
				typeActive: 0,
				twoIndex: 0,
				drawerShow: false,
				show: false,
				couponType: ['全部', '未使用', '已使用', '已过期'],
				twoClass: ['所有优惠券', '体验券', '满减券', '折扣券'],
				title: '我的优惠券',
				hShow: '',
				show9: false,
				showNo: false,
				showIndex:'',
				mb:{
					marginBottom:'0.2rem'
				},
				couponList: [
					{
						condition:100,//满多少元
						content:'仅限威伐光门店使用',//详情描述
						denomination:5,//优惠金额
						discount:0,//折扣
						endTime:0,
						name:"满减券",
						startTime:0,
						status:1,
						type:1,
						show: false
					},
					{
						condition:100,//满多少元
						content:'仅限威伐光门店使用',//详情描述
						denomination:5,//优惠金额
						discount:0,//折扣
						endTime:0,
						name:"满减券",
						startTime:0,
						status:2,
						type:1,
						show: false
					},
					{
						condition:100,//满多少元
						content:'仅限威伐光门店使用',//详情描述
						denomination:5,//优惠金额
						discount:0,//折扣
						endTime:0,
						name:"满减券",
						startTime:0,
						status:3,
						type:1,
						show: false
					},
					{
						condition:0,//满多少元
						content:'仅限威伐光门店使用',//详情描述
						denomination:0,//优惠金额
						discount:9,//折扣
						endTime:0,
						name:"折扣券",
						startTime:0,
						status:1,
						type:2,
						show: false
					},
					{
						condition:0,//满多少元
						content:'仅限威伐光门店使用',//详情描述
						denomination:0,//优惠金额
						discount:9,//折扣
						endTime:0,
						name:"体验券",
						startTime:0,
						status:1,
						type:3,
						show: false
					},
					{
						condition:0,//满多少元
						content:'仅限威伐光门店使用',//详情描述
						denomination:0,//优惠金额
						discount:9,//折扣
						endTime:0,
						name:"运费券",
						startTime:0,
						status:1,
						type:4,
						show: false
					},
					{
						condition:0,//满多少元
						content:'仅限威伐光门店使用',//详情描述
						denomination:0,//优惠金额
						discount:9,//折扣
						endTime:0,
						name:"现金券",
						startTime:0,
						status:1,
						type:5,
						show: false
					}
				],
				iconImg: './static/member/yhq-down.png',
				all: null,
				unused: null,
				used: null,
				expired: null,
				type1: null,//满减券
				discount: null,//折扣券
				experience: null,//体验券
				par: {
					type: 0,status: 0
				}

			}
		},
		created() {
			//判断是否微信端
			var ua = navigator.userAgent.toLowerCase();
			var isWeixin = ua.indexOf('micromessenger') != -1;
			if(isWeixin) {
				this.hShow = true;
			} else {
				this.hShow = false;
			}
		},
		mounted: function() {
			this.InitScroll() //初始化下拉组件
			this.getData()
		},
		methods: {
			onItemClick(index) {
				this.typeActive = index
				this.show = false
				this.par.status = index
				this.getCouponList(this.par)
				console.log('--tab', this.par)
			},
			showDrawer() {
				this.show9 = true
			},
			type(index) {
				this.typeItemActive = index
			},
			twoChange(index, item) {
				this.twoIndex = index
				this.show9 = false
				this.par.status = 0
				this.par.type = index * 10;
				this.getCouponList(this.par)
				console.log('--shaixuan', this.par)
			},
			InitScroll() {
				this.$nextTick(() => {
					if(!this.scroll) {
						this.scroll = new BScroll(this.$refs.wrapper, {
							click: true,
							scrollY: true,
							pullUpLoad: {
								threshold: -30
							}
						})
						this.scroll.on('pullingUp', (pos) => {

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
				let _this = this
				console.log(_this.couponList.length)
				if(_this.couponList.length <= 11) {
					_this.show = true
					_this.showNo = false
					_this.couponList = _this.couponList.concat({
						condition:0,//满多少元
						content:'仅限威伐光门店使用',//详情描述
						denomination:0,//优惠金额
						discount:9,//折扣
						endTime:0,
						name:"现金券",
						startTime:0,
						status:1,
						type:5
					})
					setTimeout(function() {
						_this.show = false
					}, 1500)
				} else {
					_this.show = false
					_this.showNo = true
				}
			},
			// 获取数据
			getData(){
				this.getCouponList(this.par)//全部
			},
			//获取优惠券
			getCouponList(obj) {
				var _this = this
				_this.$http.get(_this.url.user.getUserCouponList, {
					params: {
						userId: 'appUser796345684600000001',
						type: obj.type,
						status: obj.status,
						curPage: 1,
						pageSize: 20
					}
				}).then((res) => {
					if(res.data.status == "00000000") {
						_this.couponList = res.data.data.list
						_this.addShow()
						console.log('---get',_this.couponList)
						// _this.setData(obj,res.data.data)
					}
				})
			},
			// 数据加个属性 show
			addShow(){
				for(let i = 0;i<this.couponList.length;i++){
					this.couponList[i].show = false;
				}
				console.log('--couponList', this.couponList)
			},
			// 查看详情
			view(i){
				let obj = this.couponList[i];
				obj.show = !this.couponList[i].show;
				this.$set(this.couponList,i,obj);
				// this.couponList[i].show = !this.couponList[i].show;
			}
		},
		components: {
			Tab,
			TabItem,
			settingHeader,
			Drawer,
			Masker,
			Spinner,
			Loading,
			XHeader,
			Nomore,
			noData
		}
	}
</script>

<style lang="less">
	.twoClass {
		display: flex;
		flex-wrap: wrap;
		padding: 0.2rem 0;
		.type-item {
			width: 25%;
			padding: 0.08rem 0.25rem;
			text-align: center;
			box-sizing: border-box;
			span {
				display: inline-block;
				width: 100%;
				height: 0.5rem;
				line-height: 0.5rem;
				background: #eaeaea;
				border-radius: 2px;
				font-size: 0.20rem;
			}
			.twoActive {
				background-color: #336fff;
				color: white;
			}
		}
	}
	
	.couponindex-box {
		height: 100%;
		.vux-header .vux-header-title {
			margin: 0 40px;
		}
		.b-w {
			background-color: white;
			position: relative;
			.vux-tab-ink-bar {
				bottom: 4px!important;
			}
			.edit-btn {
				color: rgba(144, 162, 199, 1);
				img {
					width: 0.3rem;
					height: 0.3rem;
					vertical-align: middle;
				}
			}
		}
		.vux-header-left .left-arrow:before {
			border: 1px solid #222!important;
			border-width: 1px 0 0 1px!important;
		}
		.b-w:after {
			content: " ";
			position: absolute;
			left: 0;
			bottom: 0;
			right: 0;
			height: 1px;
			border-top: 1px solid #D9D9D9;
			color: #D9D9D9;
			-webkit-transform-origin: 0 0;
			transform-origin: 0 0;
			-webkit-transform: scaleY(0.5);
			transform: scaleY(0.5);
			left: 0;
		}
		.couponList {
			.wrapper {
				position: absolute;
				top: 46px;
				bottom: 0px;
				overflow: hidden;
				width: 100%;
				padding: 0.23rem 0.21rem;
				box-sizing: border-box;
			}
			.bgImgThree {
				/*background: url(../../../assets/images/user/rollBg4.png) no-repeat;*/
				background-size: 100% 100%;
			}
			
			.detail{
				margin-left: 0.2rem;
				padding: 0.27rem;
				box-sizing: border-box;
				background-color: white;
				color:rgba(66,88,132,1);
				font-size: 0.24rem;
				margin-bottom: 0.2rem;
			}
			.rollOne {
				height: 2.16rem;
				background-size: 100% 100%;
				display: flex;
				background: url(../../../assets/images/member/yhq-bg.png) no-repeat;
				.left {
					width: 2.12rem;
					position: relative;
					display: flex;
					align-items: center;
					justify-content: center;
					flex-direction: column;
					font-family: MicrosoftYaHei;
					color: #fff;
					.img{
						position: absolute;
						width: 99%;
						top: 0.22rem;
						right: 0;
						background: url(../../../../static/member/yhq-redBg.png) no-repeat;
						background-size: 100% 90%;
						height: -webkit-fill-available;
					}
					.red {
						background: url(../../../../static/member/yhq-redBg.png) no-repeat;
						background-size: 100% 90%;
					}
					.blue {
						background: url(../../../../static/member/yhq-blueBg.png) no-repeat;
						background-size: 100% 90%;
					}
					.gq {
						background: url(../../../../static/member/yhq-grayBg.png) no-repeat;
						background-size: 100% 90%;
					}
					div{
						position: relative;
						z-index: 12;
					}
					p{
						
						font-size: 0.68rem;
						margin-bottom: 0.2rem;
						i {
							font-size: 0.39rem;
						}
					}
					.useBtn{
						position: relative;
						z-index: 12;
						width: 1.54rem;
						text-align: center;
						background: rgba(255,255,255,0);
						border: 1px solid #fff;
						padding: 0.09rem 0;
						border-radius: 0.3rem;
					}
					.typeImg{
						width:60%;
						margin: 0.2rem auto;
						text-align: center;
						margin-bottom: 0.25rem;
					}
					.statusImg{
						position: absolute;
						bottom: -22%;
						right: -2%;
						width: 60%;
						height: auto;
					}
				}
				.right {
					flex: 1;
					padding: 0.15rem 0.15rem 0 0.4rem;
					box-sizing: border-box;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.top {
						height: auto;
						line-height: 0.35rem;
						margin-top: 0.29rem;
						word-wrap : break-word ;
						font-size: 0.28rem;
						color: #425884;
					}
					.middle {
						width: 100%;
						position: relative;
						display: flex;
						font-size: 0.28rem;
						color: #90a2c7;
						.bottom {
							position: absolute;
							bottom: 0.05rem;
							right: 0;
							width: auto;
							flex: 1;
							font-size: 0.24rem;
							color: #425884;
							img{
								width: 15%;
								vertical-align: middle;

							}
						}
					}
					.textColor{
						color: #90a2c7;
					}
				}
			}
		}
	}
</style>