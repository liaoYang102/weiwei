<template>
	<section class="shopLog">
		<settingHeader :title="title"></settingHeader>
		<div class="searchBox">
			<div class="search">
				<img src="../../assets/images/shop/search.png">
				<input type="search" placeholder="搜索商品">
			</div>
			<div class="icon">
				<img v-lazy="dateImg" @click="showDate">
				<img v-lazy="delImg" @click="del">
			</div>
		</div>

		<div class="wrapper" ref="wrapper">
			<div class="content">
				<div class="log-list" v-for="(log,index) in logList">
					<div class="date">{{log.date}}</div>
					<router-link to="">
						<div class="list-item" v-for="(item,sIndex) in log.shopList" @click="changeLog()">
							<check-icon v-if="delShow" class="check-btn" :value.sync="item.ischeck"></check-icon>
							<div class="img-box"><img v-lazy="item.img" /></div>
							<div class="pro-box">
								<p>{{item.name}}</p>
								<p class="shop-price"><span class="priceNum">￥{{item.money}}</span> <span class="shopAcount">+{{item.score}}积分</span></p>
							</div>
						</div>
					</router-link>
				</div>

				<div class="load-more">
					<load-more :show-loading="false" tip="我是有底线的" background-color="#D8DFF0"></load-more>
				</div>
			</div>
		</div>

		<!-- 时间选择器 -->
		<group v-if="visibility">
			<datetime :show.sync="visibility" v-model="showDatetime" @on-change="change" clear-text="今天" @on-clear="setToday" @on-cancel="canel"  @on-confirm="onConfirm"></datetime>
		</group>
		<!--删除-->
		<div v-transfer-dom class="delBox">
			<popup v-model="footerShow" position="bottom" height="0.94rem" :show-mask="false">
				<div class="del-box">
					<div style="flex: 1;">
						<check-icon class="check-btn" :value.sync="allprCheck" @click.native="isallcheck">全部商品 <span v-if="!allprCheck">已选<i>{{shopId.length}}</i>个商品</span></check-icon>
					</div>
					<div class="qx-box">
						<div class="add-btn" @click="delData">删除</div>
					</div>
				</div>
			</popup>
		</div>

		<div class="backTop" @click="backTop">
			<img src="../../assets/images/shop/backTop.png">
		</div>
	</section>
</template>

<script>
	import BScroll from 'better-scroll'
	import settingHeader from '../../components/setting_header'
	import { Datetime } from 'vux'
	import { LoadMore } from 'vux'
	export default {
		components: {
			settingHeader,Datetime,LoadMore
		},
		data(){
			return {
				title: '浏览记录',
				dateImg: './static/shop/date.png',
				delImg: './static/shop/del.png',
				logList: [
					{
						date: '5月7日',
						shopList: [
							{
								img: 'https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/299c55e31d7f50ae4dc85faa90d6f445_121_121.jpg',
								name: '热风2018年小清新女士星星休闲双肩包拉链方形背包B52W8201',
								money: '50.0',
								score: 266,
								ischeck: false,
								id: 1
							},
							{
								img: 'https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/299c55e31d7f50ae4dc85faa90d6f445_121_121.jpg',
								name: '热风2018年小清新女士星星休闲双肩包拉链方形背包B52W8201',
								money: '50.0',
								score: 266,
								ischeck: false,
								id: 2
							}
						]
					},
					{
						date: '5月6日',
						shopList: [
							{
								img: 'https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/299c55e31d7f50ae4dc85faa90d6f445_121_121.jpg',
								name: '热风2018年小清新女士星星休闲双肩包拉链方形背包B52W8201',
								money: '50.0',
								score: 266,
								ischeck: false,
								id: 1
							}, {
								img: './static/member/login-img.png',
								name: '热风2018年小清新女士星星休闲双肩包拉链方形背包B52W8201',
								money: '50.0',
								score: 266,
								ischeck: false,
								id: 2
							}, {
								img: './static/member/login-img.png',
								name: '热风2018年小清新女士星星休闲双肩包拉链方形背包B52W8201',
								money: '50.0',
								score: 266,
								ischeck: false,
								id: 3
							},
						]
					},
					{
						date: '5月5日',
						shopList: [
							{
								img: './static/member/login-img.png',
								name: '热风2018年小清新女士星星休闲双肩包拉链方形背包B52W8201',
								money: '50.0',
								score: 266,
								ischeck: false,
								id: 1
							}
						]
					},
					{
						date: '5月4日',
						shopList: [
							{
								img: './static/member/login-img.png',
								name: '热风2018年小清新女士星星休闲双肩包拉链方形背包B52W8201',
								money: '50.0',
								score: 266,
								ischeck: false,
								id: 1
							}
						]
					},
					{
						date: '5月3日',
						shopList: [
							{
								img: './static/member/login-img.png',
								name: '热风2018年小清新女士星星休闲双肩包拉链方形背包B52W8201',
								money: '50.0',
								score: 266,
								ischeck: false,
								id: 1
							},
							{
								img: './static/member/login-img.png',
								name: '热风2018年小清新女士星星休闲双肩包拉链方形背包B52W8201',
								money: '50.0',
								score: 266,
								ischeck: false,
								id: 2
							}
						]
					}
				],
				delShow: false,
				shopId: [],
				footerShow: false,
				allprCheck: false,
				showDatetime: '',
				visibility: false
			}
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
					} else {
						this.scroll.refresh()
					}
				})
			},
			// 显示日期选择器
			showDate(){
				this.delShow = false;
				this.footerShow = false;
				this.visibility = true;
				this.delImg = './static/shop/del.png'
				if(this.dateImg == './static/shop/date.png'){
					this.dateImg = './static/shop/dateActive.png'
				}
				var content = document.getElementsByClassName('content')[0];
				content.style.paddingBottom = '0';
			},
			// 点击删除图标
			del(){
				this.delShow = true;
				this.footerShow = true;
				this.visibility = false;
				this.dateImg = './static/shop/date.png'
				if(this.delImg == './static/shop/del.png'){
					this.delImg = './static/shop/delActive.png'
				}
				this.shopId = [] //重置商品id列表
				this.allprCheck = false //重置全选
				//重置原始数据
				for(var i = 0; i < this.logList.length; i++) {
					for(var j = 0; j< this.logList[i].shopList.length; j++){
						this.logList[i].shopList[j].ischeck = false
					}
				}
				var content = document.getElementsByClassName('content')[0];
				content.style.paddingBottom = '0.94rem';
			},
			// 单选
			changeLog(){
				//商品选择
				var idList = []
				for(var i = 0; i < this.logList.length; i++) {
					for(var j = 0; j< this.logList[i].shopList.length; j++){
						if(this.logList[i].shopList[j].ischeck == true) {
							idList.push(this.logList[i].shopList[j].id)
						}
					}
				}
				this.shopId = idList
				console.log(this.shopId, 'shopId')
			},
			//点击全选
			isallcheck() {
				this.shopId = [] //重置商品id数组
				// this.allprCheck = false //重置全选
				if(this.allprCheck == true) {
					for(var i = 0; i < this.logList.length; i++) {
						for(var j = 0; j< this.logList[i].shopList.length; j++){
							this.logList[i].shopList[j].ischeck = true
							this.shopId.push(this.logList[i].shopList[j].id)
						}
					}
					console.log(this.shopId, 'shopId000')
				} else {
					for(var i = 0; i < this.logList.length; i++) {
						for(var j = 0; j< this.logList[i].shopList.length; j++){
							this.logList[i].shopList[j].ischeck = false
							this.shopId = []
						}
					}
				}
				console.log(this.shopId, 'shopId')
			},
			setToday (value) {
		      let now = new Date()
		      let cmonth = now.getMonth() + 1
		      let day = now.getDate()
		      if (cmonth < 10) cmonth = '0' + cmonth
		      if (day < 10) day = '0' + day
		      this.showDatetime = now.getFullYear() + '-' + cmonth + '-' + day
		      console.log('set today ok')
		    },
		    change (value) {
	          console.log('change', value)
	        },
	        canel(){
	        	this.dateImg = './static/shop/date.png'
	        },
	        onConfirm(){
	        	this.dateImg = './static/shop/date.png'
	        	console.log('date', this.showDatetime)
	        },
	        // 点击删除按钮
	        delData(){
	        	this.footerShow = false;
	        	this.delShow = false;
	        	this.visibility = false;
	        	this.dateImg = './static/shop/date.png'
	        	if(this.delImg == './static/shop/delActive.png'){
	        		this.delImg = './static/shop/del.png'
	        	}
	        	console.log('--=-=-=',this.footerShow)
	        	var content = document.getElementsByClassName('content')[0];
				content.style.paddingBottom = '0';
	        },
	        // 回到顶部
	        backTop(){
	    	    var transform = document.getElementsByClassName('content')[0];
	    	    transform.style.transform = 'translate(0px, 0px) translateZ(0px)';
	    	    console.log(transform);
	        }
		},
		watch: {
			
		},
	}
</script>

<style lang="less" scoped>
.shopLog{
	height: 100%;
	.searchBox {
		background: #fff;
		padding-bottom: 0.23rem;
		border-top: 0.01rem solid #D8DFF0;
		padding-left: 0.24rem;
		padding-top: 0.23rem;
		display: flex;
		.search {
			position: relative;
			width: 73%;
			img {
				position: absolute;
				width: 6%;
				top: 0.12rem;
				left: 0.26rem;
			}
			input {
				width: 100%;
				background: #F5F6FA;
				border-radius: 0.06rem;
				color: #1A2642;
				padding: 0.14rem 0.1rem 0.12rem 0.78rem;
			}
			input::-webkit-input-placeholder {
				color: #90A2C7 !important; // WebKit browsers 
			}
			input:-moz-placeholder {
				color: #90A2C7 !important; // Mozilla Firefox 4 to 18 
			}
			input::-moz-placeholder {
				color: #90A2C7 !important; //Mozilla Firefox 19+ /
			}
			input:-ms-input-placeholder {
				color: #90A2C7 !important; //Internet Explorer 10+ */
			}
		}
		.icon{
			flex: 1;
			/*margin-left: 0.38rem;*/
			img{
				height: 0.37rem;
				margin-left: 0.38rem;
				margin-top: 0.06rem;
			}
		}
	}
	.wrapper{
		height: 92.1%;
		overflow: hidden;
		.content{
			
		}
	}

	.log-list{
		color: #1A2642;
		.date{
			font-size: 0.2rem;
			padding: 0.11rem 0 0.11rem 0.25rem;
			background: #f5f6fa;
		}
		
		.list-item {
			background-color: white;
			height: 2.22rem;
			position: relative;
			padding: 0.26rem 0.25rem;
			display: flex;
			align-items: center;
			box-sizing: border-box;
			border-bottom: 1px solid #D8DFF0;
			.check-btn {
				margin-right: 0.24rem;
			}
			.img-box {
				width: 22.5%;
				height: 1.7rem;
				display: flex;
				align-items: center;
				justify-content: center;
				img {
					height: 100%;
					vertical-align: middle;
				}
			}
			.pro-box {
				box-sizing: border-box;
				padding-left: 0.35rem;
				p:nth-child(1) {
					font-size: 0.24rem;
					color: #1A2642;
					line-height: 0.35rem;
				}
				.shop-price{
					font-size: 0.24rem;
					color: #7386AD;
					margin-right: 0.8rem;
					margin-top: 0.4rem;
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
			
		}
		/*.list-item :after {
			content: " ";
			position: absolute;
			left: 0;
			bottom: 0;
			right: 0;
			height: 1px;
			border-top: 1px solid #D8DFF0;
			color: #D9D9D9;
			-webkit-transform-origin: 0 0;
			transform-origin: 0 0;
			-webkit-transform: scaleY(0.5);
			transform: scaleY(0.5);
			left: 0.21rem;
		}*/
		.list-item:last-child{
			border-bottom: none;
		}
	}

	.backTop{
		position: absolute;
		bottom: 0.68rem;
		right: 0.24rem;
		width: 11.5%;
		img{
			width: 100%;
		}
	}
	
}
</style>

<style lang="less">
	.delBox{
		.vux-popup-dialog{
			background: #fff;
			overflow-y: hidden;
		}
		.del-box {
			position: fixed;
			bottom: 0;
			display: flex;
			align-items: center;
			width: 100%;
			height: 0.94rem;
			padding-left: 0.24rem;
			box-sizing: border-box;
			background-color: white;
			.check-btn {
				margin-right: 0.24rem;
				span {
					margin-left: 0.25rem;
					font-size: 0.24rem;
					color: rgba(115, 134, 173, 1);
					i {
						color: red;
					}
				}
			}
			.qx-box {
				.add-btn {
					width: 2.4rem;
					height: 0.94rem;
					line-height: 0.94rem;
					background: #FF292E;
					font-size: 0.28rem;
					text-align: center;
					font-family: MicrosoftYaHei;
					color: rgba(255, 255, 255, 1);
					text-align: center;
				}
			}
		}
		
		.del-box:before {
			content: " ";
			position: absolute;
			left: 0;
			top: 0;
			right: 0;
			height: 1px;
			border-top: 1px solid #D9D9D9;
			color: #D9D9D9;
			-webkit-transform-origin: 0 0;
			transform-origin: 0 0;
			-webkit-transform: scaleY(0.5);
			transform: scaleY(0.5);
			left: 0px;
		}
	}

	.load-more{
		.weui-loadmore_line .weui-loadmore__tips{
			color: #D8DFF0;
		}
		.vux-loadmore.weui-loadmore_line:before, .vux-loadmore.weui-loadmore_line:after{
			border-top: 1px solid #D8DFF0;
		}
	}
</style>