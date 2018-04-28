<template>
	<div class="storelist">
		<settingHeader :title="title"></settingHeader>
		<div class="nav">
			<div class="area" @click="onArea()">
				<p>{{region}}<i class="iconfont" :class="areaShang ? 'icon-shixinjiantou' : 'icon-shixinjiantou-copy'"></i></p>
			</div>
			<div class="type" @click="onType()">
				<p>{{indType}}<i class="iconfont" :class="typeShang ? 'icon-shixinjiantou' : 'icon-shixinjiantou-copy'"></i></p>
			</div>
			<div class="price" @click="onPrice()">
				<p>{{priceType}}<i class="iconfont" :class="priceShang ? 'icon-shixinjiantou' : 'icon-shixinjiantou-copy'"></i></p>
			</div>
			
		</div>

		<div class="wrapper" ref="wrapper">
			
			<div class="content">
				<!-- <h2>附近商家 <span class="fr">更多<i class="iconfont icon-arrow-right"></i></span></h2> -->
				<div class="list">
					<ul>
						<li class="clearfix" @click="goDetail(1)">
							<div class="left">
								<img src="../../assets/images/share/md_logo.png" alt="">
							</div>
							<div class="right">
								<p class="title">章光101（番禺店）<span class="juli">5.5km</span></p>
								<p class="content ellipise">[番禺]金牌双人套餐，提供免费WiFi</p>
								<p class="nr"><span class="momey">￥120</span><span class="ms_price">门市价:￥150</span><span class="num">已售：2414</span></p>
								<p class="zhekou">8折</p>
							</div>
						</li>
						<li class="clearfix" @click="goDetail(1)">
							<div class="left">
								<img src="../../assets/images/share/md_logo.png" alt="">
							</div>
							<div class="right">
								<p class="title">章光101（番禺店）<span class="juli">5.5km</span></p>
								<p class="content ellipise">[番禺]金牌双人套餐，提供免费WiFi</p>
								<p class="nr"><span class="momey">￥120</span><span class="ms_price">门市价:￥150</span><span class="num">已售：2414</span></p>
								<p class="zhekou">8折</p>
							</div>
						</li>
						<li class="clearfix" @click="goDetail(1)">
							<div class="left">
								<img src="../../assets/images/share/md_logo.png" alt="">
							</div>
							<div class="right">
								<p class="title">章光101（番禺店）<span class="juli">5.5km</span></p>
								<p class="content ellipise">[番禺]金牌双人套餐，提供免费WiFi</p>
								<p class="nr"><span class="momey">￥120</span><span class="ms_price">门市价:￥150</span><span class="num">已售：2414</span></p>
								<p class="zhekou">8折</p>
							</div>
						</li>
						<li class="clearfix" @click="goDetail(1)">
							<div class="left">
								<img src="../../assets/images/share/md_logo.png" alt="">
							</div>
							<div class="right">
								<p class="title">章光101（番禺店）<span class="juli">5.5km</span></p>
								<p class="content ellipise">[番禺]金牌双人套餐，提供免费WiFi</p>
								<p class="nr"><span class="momey">￥120</span><span class="ms_price">门市价:￥150</span><span class="num">已售：2414</span></p>
								<p class="zhekou">8折</p>
							</div>
						</li>
						<li class="clearfix" @click="goDetail(1)">
							<div class="left">
								<img src="../../assets/images/share/md_logo.png" alt="">
							</div>
							<div class="right">
								<p class="title">章光101（番禺店）<span class="juli">5.5km</span></p>
								<p class="content ellipise">[番禺]金牌双人套餐，提供免费WiFi</p>
								<p class="nr"><span class="momey">￥120</span><span class="ms_price">门市价:￥150</span><span class="num">已售：2414</span></p>
								<p class="zhekou">8折</p>
							</div>
						</li>
						<li class="clearfix" @click="goDetail(1)">
							<div class="left">
								<img src="../../assets/images/share/md_logo.png" alt="">
							</div>
							<div class="right">
								<p class="title">章光101（番禺店）<span class="juli">5.5km</span></p>
								<p class="content ellipise">[番禺]金牌双人套餐，提供免费WiFi</p>
								<p class="nr"><span class="momey">￥120</span><span class="ms_price">门市价:￥150</span><span class="num">已售：2414</span></p>
								<p class="zhekou">8折</p>
							</div>
						</li>
						


					</ul>
				</div>
			</div>

		</div>

		
		<!-- //区域框 -->
		<div v-transfer-dom>
	      <popup v-model="areaShang" position="top">
	        <div class="change_area">
	        	<div class="title">
	        		<i class="iconfont icon-dizhi1"></i>
	        		<span class="adre">广州</span>
	        		<span class="again">重新定位</span>
	        	</div>
	        	<div class="list">
	        		<ul class="clearfix">
	        			<!-- <li class="first">不限</li> -->
	        			<li v-for="(item,index) in adList" @click="toggle(index,$event)" :class="{current:index==active}">{{item}}</li>
	        		</ul>
	        	</div>
	        </div>
	      </popup>
	    </div>

	    <!-- 类型框 -->
    	<div v-transfer-dom class="aa">
	      <popup v-model="typeShang" position="top">
	        	<group>
			    	<radio title="title" :options="options" value="002" @on-change="changeType"></radio>
			  	</group>
	      </popup>
	    </div>

	    <!-- 价格/距离框 -->
	    <div v-transfer-dom class="aa">
	      <popup v-model="priceShang" position="top">
	        	<group>
			    	<radio title="title" :options="opPrice" value="01" @on-change="changePrice"></radio>
			  	</group>
	      </popup>
	    </div>
		

	</div>
</template>

<script>
	import settingHeader from '../../components/setting_header'
	import BScroll from 'better-scroll'
	import scroll from '../../components/scroll.vue'

	export default {
		data() {
			return {
				title: '门店列表',
				data:[],
				region:'区域',//区域
				indType:'类型',//类型
				priceType:'价格',//价格
				areaShang:false,//区域箭头
				typeShang:false,//类型箭头
				priceShang:false,//价格箭头
				active:1,//列表选中样式（地址）
				// options:['美容院','老人院','月子中心'],//类型筛选
				// value3:true,
				options:[
					{
						// icon: 'http://dn-placeholder.qbox.me/110x110/FF2D55/000',
  						key: '001', //input的value值
  						value: '美容院'
					},
					{
						// icon: 'http://dn-placeholder.qbox.me/110x110/FF2D55/000',
  						key: '002',
  						value: '老人院'
					},
					{
						// icon: 'http://dn-placeholder.qbox.me/110x110/FF2D55/000',
  						key: '003',
  						value: '月子中心'
					}
				],
				opPrice:[
					/*'离我最近',
					'价格最低'*/
					{
						key:'01',
						value:'离我最近'
					},
					{
						key:'02',
						value:'价格最低'
					}
				],

				adList:[
					"不限", 
					"白云区",
					"番禺区",
					"天河区",
					"越秀区"
				],
				zhekou:[
					{
						zhe:'8折'
					}
				]
			}
		},
		components:{
			settingHeader,
			scroll
		},
		/*created(){

		},*/
		mounted(){
			this.InitScroll();
		},
		computed:{
			
		},
		methods:{
			InitScroll(){
				this.$nextTick(() => {
			        this.scroll = new BScroll(this.$refs.wrapper, {
			        	scrollY:true,
			        	click:true,
			        	tap :true
			        });
			      })
			      /*this.$nextTick(() => {
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
			})*/
			},
			onLoadData(){

			},
			onArea(){
				//点击区域
				if(this.areaShang){
					this.areaShang=false;
				}else{
					this.areaShang=true;

				}
			},
			onType(){
				//点击类型
				if(this.typeShang){
					this.typeShang=false;
				}else{
					this.typeShang=true
				}
			},
			onPrice(){
				//点击价格
				if(this.priceShang){
					this.priceShang=false;
				}else{
					this.priceShang=true
				}
			},
			toggle(index,e){
				this.active=index;
				console.log(e.target.innerText)
				var _this=this;
				setTimeout(function(){
					_this.region = e.target.innerText;
					_this.areaShang=false;
				},50);
			},
			changePrice(value,label){//改变价格，距离
				var _this=this;
				console.log(value,label);
				setTimeout(function(){
					_this.priceType=label;
					_this.priceShang=false;
				},50);
			},
			changeType(value,label){//改变类型

				var _this=this;
				setTimeout(function(){
					_this.indType=label;
					_this.typeShang=false;

				},50);
			},
			goDetail(id){//门店详情
				this.$router.push({path:'/share/sdetail'});
				// this.$router.push({ path: '/shop/product' });
				// consloe.log(9)
			}
		}
	}
</script>
<style>

	.aa .weui-cells_radio .weui-check:checked + .weui-icon-checked:before{
		color: #336FFF !important;
	}
	.aa .vux-radio-label{
		color: #336FFF !important;
	}

</style>
<style lang="less" scoped>
	@import url('../../../static/css/global'); 

	.storelist{}

	.wrapper{
		 height:11.15rem;
		overflow:hidden;  
	}
	.storelist{
		background: #fff;
	}
	.header{
		/*position:relative !important;*/
	}
	.nav{
		border-top:1px solid #eee;
		width:100%;
		height:.9rem;
		display:flex;
		align-items: center;
		/*position: fixed;*/
		/*border-bottom:1px solid #333;*/
		div{
			flex: 1;
			display: flex;
			justify-content: center;
			p{
				font-size: .28rem;
				color: #1A2642;
				font-weight: bold;
				i{
					color: #90A2C7;
				}
			}
		}
	}
	.content{
		width: 95%;
		margin:0 auto;
		/*background: #fff;*/
		/*margin:1rem auto 0;*/
		/*border-top:1px solid #D8DFF0;*/
		/*padding-bottom: .4rem;*/
		h2{
			padding-left: 3%;
			font-size: .36rem;
			color: #141C33;
			font-weight: 600;
			margin-top: .4rem;
			span{
				font-weight: normal;
				color: #60719D;
				font-size: .28rem;
				display: block;
				vertical-align: bottom;
				padding-right: .2rem;
			}
		}
		.list{
			border-top: 1px solid #D8DFF0;
			/*border-bottom: 1px solid #D8DFF0;*/
			/*margin-top: .22rem;*/
			margin-bottom: 2rem;
			li{
				padding: .3rem .05rem .3rem 0;
				border-bottom: 1px solid #D8DFF0;
				/*background: #fff;*/
				.left{
					float: left;
					width: 2.04rem;
					height: 1.6rem;
					margin-right: .2rem;
					img{
						width: 100%;
						height: 100%;
					}
				}
				.right{
					float: left;
					/*border:1px solid #333;*/
					width: 4.75rem;
					.title{
						font-size: .32rem;
						color: #1A2642;
						font-weight: bold;
						.juli{
							font-size: .24rem;
							float: right;
						}
					}
					.content{
						color: #7386AD;
						font-size: .28rem;
						margin-top: .1rem;
					}
					.nr{
						margin-top: .1rem;
						.momey{
							font-size: .32rem;
							color: #F23030;
							font-weight: bold;
						}
						.ms_price,.num{
							font-size: .24rem;
							color: #7386AD;
							padding-left: .1rem;
						}
						.num{
							float: right;
							margin-top: .1rem;
						}
					}
					.zhekou{
						width: .8rem;
						height: .4rem;
						line-height: .4rem;
						text-align: center;
						border-radius: 5px;
						background: #e0e9fd;
						color: #336FFF;
						font-size: .22rem;
						margin-top: .1rem;
					}
				}
			}
		}
	}


	/*地址遮罩*/
	.vux-popup-dialog{
		background: #fff;
	}
	.change_area{
		padding-top: .28rem;
		.title{
			padding-left: .2rem;
			i{
				font-size: .5rem;
				color: #333;
			}
			.adre{
				font-size: .24rem;
				color: #1A2642;
				position: relative;
				top: -.1rem;
				left: -.1rem;
			}
			.again{
				color: #336FFF;
				font-size: .28rem;
				position: relative;
				top: -.1rem;
			}
		}
		.list{
			width: 7.08rem;
			margin: 0 auto;
			/*border:1px solid #333;*/
			padding-left: .12rem;
			li{
				width: 2.16rem;
				height: .66rem;
				line-height: .66rem;
				background: #F5F6FA;
				color: #333;
				float: left;
				margin-right: .2rem;
				margin-bottom: .2rem;
				border-radius: 4px;
				text-align: center;
			}
			li.current{
				background: #336FFF;
				color: #fff;
			}
		}
	}

	.weui-cells_radio .weui-check:checked + .weui-icon-checked:before{
		color: #336FFF !important;
	}

</style>