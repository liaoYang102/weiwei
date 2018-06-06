<template>
	<div class="storelist">
		<settingHeader :title="title"></settingHeader>

		<div class="searchBox">
			<div class="search">
				<img src="../../assets/images/shop/search.png">
				<input type="search" placeholder="搜索心仪的门店" @click="goSearch">
			</div>
		</div>

		<div class="nav">
			<div class="area" @click="onArea()">
				<p class="areaDetail">{{region}}<i class="iconfont" :class="areaShang ? 'icon-shixinjiantou' : 'icon-shixinjiantou-copy'"></i></p>
			</div>
			<div class="price" @click="onPrice()">
				<p>{{priceType}}<i class="iconfont" :class="priceShang ? 'icon-shixinjiantou' : 'icon-shixinjiantou-copy'"></i></p>
			</div>
			<div class="type" @click="onScreening()">
				<p>{{screening}}<img src="../../assets/images/shop/screen.png" alt=""></p>
			</div>
			<ul class="address animated" :class="isActive? 'maskTive' : ''">
				<li class="category">
					<i class="iconfont">&#xe60b;</i>
                    <span class="province" :class="addressKey==1? 'active':'' " @click="provice">省份</span>
                    <span class="city" :class="addressKey==2? 'active':'' " @click="city">城市</span>
                    <span class="district" :class="addressKey==3? 'active':'' " @click="district">区县</span>
				</li>
				<li v-for="item in items" @click="next(item.areaId,item.name)">
                    <span>{{item.name}}</span>
                    <i class="fr">></i>
                </li>
			</ul>
			<popup v-model="priceShang" id="distanceType" :show-mask="false">
	        	<group>
			    	<radio title="title" :options="opPrice" value="01" @on-change="changePrice"></radio>
			  	</group>
	     	 </popup>
		</div>

		<div class="wrapper" ref="wrapper">
			
			<div class="content">
				<!-- <h2>附近商家 <span class="fr">更多<i class="iconfont icon-arrow-right"></i></span></h2> -->
				<div class="list">
					<ul>
						<li class="clearfix" @click="goStoreDetail(1)" v-for="item in 20">
							<div class="left">
								<img src="../../assets/images/share/md_logo.png" alt="">
							</div>
							<div class="right">
								<p class="title">章光101（番禺店）</p>
								<p class="content ellipise">
									<span class="free">免单</span>
									<span class="return">返积分</span>
								</p>
								<p class="nr"><span class="ms_price">美容美发</span><span class="num">番禺区 2.6km</span></p>
							</div>
						</li>
					</ul>
					<Loading v-if="showLoading"></Loading>
					<noMore v-else="showNoMore"></noMore>
				</div>
			</div>
			
		</div>
		
		<div class="mask animated" :class="maskActive? 'maskTive' : ''" @click="hide"></div>
		
		<!-- //区域框 -->
		<!-- <div v-transfer-dom> -->
	      <!-- <popup v-model="areaShang" position="top"> -->
	        <!-- <div class="change_area">
	        	<div class="title">
	        		<i class="iconfont icon-dizhi1"></i>
	        		<span class="adre">广州</span>
	        		<span class="again">重新定位</span>
	        	</div>
	        	<div class="list">
	        		<ul class="clearfix"> -->
	        			<!-- <li class="first">不限</li> -->
	        			<!-- <li v-for="(item,index) in adList" @click="toggle(index,$event)" :class="{current:index==active}">{{item}}</li>
	        		</ul>
	        	</div>
	        </div> -->
	      <!-- </popup> -->
	    <!-- </div> -->

	    <!-- 筛选 -->
    	<div style="height: 100%;" v-if="show1">
			<div v-transfer-dom class="screen">
				<popup v-model='show1' position="right">
					<div class="wrapper2" ref="wrapper2">
						<div class="content">
						    <div class="screening">
						    	<div class="logo">
				    				<group>
				    					<!-- <cell islink :title="logoTitle" :border-intent="false" :arrow-direction="showContent ? 'up' : 'down'" @click.native="down()"> -->
				    					<cell :title="logoTitle" :border-intent="false">
				    					</cell>
				    					<div>
				    						<div class="logolist">
				    							<li class="item" v-for="(item, index) in logolist" @click="changeCss($event)">{{ item.name}}</li>
				    							<input type="number" placeholder="请输入距离" class="distance" />
				    						</div>
				    				    </div>
				    				</group>
						    	</div>

						    	<div class="screenlist" v-for="(screen) in screeningContent">
							    	<div class="category">{{ screen.title}}</div>
							    	
					    			<li class="item" v-for="(item, index) in screen.options" @click="selectCss($event)">
					    				{{ item.name}}
					    			</li>
						    	</div>
						    </div>
						</div>
						<div class="bottom">
				    		<div class="reset" @click="reset()">重置</div>
				    		<div class="complete" @click="complete">完成</div>
				    	</div>
					</div>
				</popup>
			</div>
		</div>

	    <!-- 价格/距离框 -->
	    <!-- <div v-transfer-dom class="aa">
	      <popup v-model="priceShang" position="top">
	        	<group>
			    	<radio title="title" :options="opPrice" value="01" @on-change="changePrice"></radio>
			  	</group>
	      </popup>
	    </div> -->
		

	</div>
</template>

<script>
	import settingHeader from '../../components/setting_header'
	import BScroll from 'better-scroll'
	import scroll from '../../components/scroll.vue'
	import Loading from '../../components/loading'
	import noMore from '../../components/noMore'
	export default {
		data() {
			return {
				title: '门店列表',
				data:[],
				addressDetail:null,//选中的市
				addressKey:1,//省 市 区的状态切换
				isActive:false,//地址框的显隐
				maskActive:false,//遮罩层的显隐
				proviceItem:null,//省级数据暂存
				cityItem:null,//城市数据暂存
				districtItem:null,//市区数据暂存
				region:'区域',//区域
				screening:'筛选',//类型
				priceType:'类型',//价格
				areaShang:false,//区域箭头
				typeShang:false,//类型箭头
				priceShang:false,//价格箭头
				active:1,//列表选中样式（地址）
				items:null,//三级联动地址
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
						value:'智能推荐'
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
				],
				show1:false,
				logoTitle: '门店',
				logolist: [
					{ name:'全部'},
					{ name:'5公里'},
					{ name:'10公里'},
					{ name:'20公里'},
					{ name:'50公里'},
					{ name:'100公里'},
				],
				screeningContent: [
					{ title: '美食', options: [ {name: '全部'},{name: '甜点饮品'},{name: '自助餐'}]},
					{ title: '电影', options: [ {name: '全部'},{name: '热映电影'},{name: '电影周边'}]},
					{ title: '酒店住宿', options: [ {name: '全部'},{name: '主题公园'},{name: '温泉'},{ name: '情侣酒店'}]},
					{ title: '生活服务', options: [ {name: '全部'},{name: '家政服务'},{name: '鲜花'},{name: '酒水'}]}
				],
				showContent: true,
				showLoading: false,
				showNoMore: false
			}
		},
		components:{
			settingHeader,
			scroll,
			Loading,
			noMore
		},
		created(){
			this.InitScroll();
			this.itemsInit();
			this.getEnterpriseListInfo();
		},
		mounted(){
		},
		computed:{
			
		},
		methods:{
			getEnterpriseListInfo(){
				var _this = this
				_this.$http.get(_this.url.qy.getEnterpriseListInfo, {
					params: {
						listType:1,
						type:1
					}
				}).then((res) => {
					if(res.data.status == "00000000") {
						console.log(res.data.data)
						
					}
				})
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
							this.onLoadData()
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
			onLoadData(){
				this.showLoading = true;
				let _this = this
				setTimeout(function(){
					_this.showLoading = false;
					_this.showNoMore = true
				},4000);
			},
			onArea(){
				//点击区域
				if(this.areaShang){
					// this.areaShang=false;
					// this.isActive = false;
					// this.maskActive = false;
					this.hide();
				}else{
					this.hide();
					this.areaShang=true;
					this.isActive = true;
					this.maskActive = true;
				}
			},
			onScreening(){
				//点击筛选
				if(this.show1){
					this.show1=false;
				}else{
					this.show1=true
				}
				this.$nextTick(() => {
					this.scroll2 = new BScroll(this.$refs.wrapper2, {
						click: true,
						scrollY: true,
						pullUpLoad: {
							threshold: -30, // 负值是当上拉到超过低部 70px；正值是距离底部距离 时，                    
						}
					})
				})
				
				//地址选择框消失
				this.hide();
			},
			onPrice(){
				// this.hide();
				//点击价格
				if(this.priceShang){
					this.hide();
				}else{
					this.hide();
					this.priceShang=true;
					this.maskActive = true;
				}
			},
			toggle(index,e){
				// this.active=index;
				// console.log(e.target.innerText)
				// var _this=this;
				// setTimeout(function(){
				// 	_this.region = e.target.innerText;
				// 	_this.areaShang=false;
				// },50);
			},
			changePrice(value,label){//改变价格，距离
				var _this=this;
				console.log(value,label);
				setTimeout(function(){
					_this.priceType=label;
					_this.priceShang=false;
				},50);
				this.hide();
			},
			changeType(value,label){//改变类型
				var _this=this;
				setTimeout(function(){
					_this.indType=label;
					_this.typeShang=false;

				},50);
			},
			goDetail(id){//门店详情
				this.$router.push({path:'/multi_user_mall'});
				// this.$router.push({ path: '/shop/product' });
				// consloe.log(9)
			},
			goSearch(){
				this.$router.push({ path: '/multi_user_mall/search'})
			},
	    	// 下拉
	   //  	down: function() {
	   //  		let list = this.logolist;
	   //  		let length= list.length;
	   //  		let obj = { name: 'logo'};

				// if(length == 9) {
				// 	for(let i =0; i<6;i++){
				// 		list.push(obj)
				// 		this.showContent = false;
				// 	}
				// }else{
				// 	list.splice(9,6)
				// 	this.showContent = true;
				// }
				// console.log(this.scroll2);
	   //  	},
	    	// 切换样式
	    	changeCss: function(e){
				if (e.target.className.indexOf("li-selected") == -1) {
		            e.target.className = "item li-selected"; //切换按钮样式

		        } else {
		            e.target.className = "item";//切换按钮样式
		        }
	    	},
	    	// 重置
	    	reset: function(){
	    		var classList = document.getElementsByClassName('li-selected');
	    		let listLength = classList.length
	    		for(let i=0;i<listLength;i++){
	    			classList[0].className = 'item';
	    		}
	    	},
	    	// 完成
	    	complete(){
	    		this.show1 = false
	    	},
	    	selectCss: function(e){
				if (e.target.className.indexOf("li-selected") == -1) {
		            e.target.className = "item li-selected"; //切换按钮样式
		            var obox=e.target.parentNode;
		            var lis=obox.children;
		            for(var i=1;i<lis.length;i++){
		                if(lis[i]!=e.target){
		                  lis[i].className = "item"
		                }
		              }
		        } else {
		            e.target.className = "item";//切换按钮样式
		        }
	    	},
	    	goStoreDetail(id){
	    		this.$router.push({path:'/multi_user_mall',params:{
					id:id
				}});
	    	}, 
	    	/*
	    	 *     三级联动地址框选择
	    	 */
	    	itemsInit(){
				let param = {
					'parentId': 1
				}
				this.$http.get(this.url.zone.address, {
					params: param
				}).then(resp => {
					this.items = resp.data.data;
					this.proviceItem = this.items;
				})
	    	},
	    	next(id,name){
	    		if(this.addressKey==3){
	    			this.areaShang=false;
					this.isActive = false;
					this.maskActive = false;
					this.region=this.addressDetail+' '+name;
					return
	    		}
				let param = {
					'parentId': id
				}
				this.$http.get(this.url.zone.address, {
					params: param
				}).then(resp => {
					console.log(resp.data.data);
					this.items = resp.data.data;
					this.addressKey++;
					if(this.addressKey==2){
						this.cityItem = this.items;
					}else if(this.addressKey ==3){
						this.districtItem = this.items;
						this.addressDetail = name;
					}
				})
			},
			provice(){
				this.items = this.proviceItem;
				this.addressKey = 1;
			},
			city(){
				if(this.cityItem){
					this.items = this.cityItem;
					this.addressKey = 2;
				}
			},
			district(){
				if(this.districtItem){
					this.items = this.districtItem;
					this.addressKey = 3;
				}
			},
			hide(){
				this.areaShang=false;
				this.priceShang=false;
				this.isActive = false;
				this.maskActive = false;
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

	.aa .vux-no-group-title{
		margin-top: 0;
	}
	/*
	 *   类型推荐
	*/
	#distanceType{
	    position: absolute;
        top: 0.9rem;
        bottom:inherit;
        max-height: 500%;
	}
	.vux-no-group-title{
    	margin-top: 0!important;
    }
</style>
<style lang="less" scoped>
	/*@import url('../../../static/css/global'); */
	
	.storelistMask{
		top: 3rem!important;
	}
	.wrapper{
		height:80%;
		overflow:hidden; 
	}
	.storelist{
		background: #fff;
		height: 100%;
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
		position: relative;
		/*position: fixed;*/
		border-bottom:1px solid #D8DFF0;
		.areaDetail{
		    width: 2rem;
		    text-align: center;
		    overflow: hidden;
		    white-space: nowrap;
		    text-overflow: ellipsis;
		}
		.address{
			display: none;
			transition: opacity 800ms;
			opacity: 0;
			position: absolute;
			top: 0.9rem;
			left:0;
			height: 6rem;
			width: 100%;
			background:#fff;
			z-index: 501;
			overflow: auto;
			li{
				position: relative;
    			overflow: hidden;
    			text-align: left;
			    font-size: 0.24rem;
			    line-height: 0.72rem;
			    border-top: 1px solid #D8DFF0;
			    /*border-bottom: 1px solid #c8c7cc;*/
			    padding: 0 0.22rem;
				list-style: none;
			}
			.category{
				i{
				    font-size: 0.16rem;
   					color: #5497ff;
				}
				span{
					display: inline-block;
				    color: #999;
				    padding: 0 10px;
				    font-size: 0.28rem;
				}
				span.active{
					color: #000;
    				border-bottom: 0.04rem solid #256fff;
				}
			}
		}
		.area,.price,.type{
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
				img{
					width: 23%;
					margin-left: 0.05rem;
					vertical-align: middle;
				}
			}
		}
	}
	.wrapper .content{
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
			padding-bottom: 0.1rem;
			.more{
				font-weight: normal;
				color: #60719D;
				font-size: .32rem;
				display: block;
				vertical-align: bottom;
				text-align: center;
				margin: 0.1rem 0;
			}
			li{
				padding: .3rem .05rem .3rem 0;
				border-bottom: 1px solid #D8DFF0;
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
						margin-bottom: 0.05rem;
						.juli{
							font-size: .24rem;
							float: right;
						}
					}
					.content{
						/*color: #7386AD;*/
						/*font-size: .28rem;*/
						/*margin-top: .1rem;*/
						.free{
							display: inline-block;
							background:linear-gradient(121.4deg,rgba(94,195,255,1),rgba(16,111,227,1));
							border-radius: 2px ; 
							text-align: center;
							color: #fff;
							font-size: 0.24rem;
							padding:2px 5px;
						}
						.return{
							display: inline-block;
							background:linear-gradient(90deg,rgba(255,122,128,1),rgba(255,83,101,1));
							border-radius: 2px ; 
							text-align: center;
							color: #fff;
							font-size: 0.24rem;
							padding:2px 5px;
						}
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
							/*padding-left: .1rem;*/
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

	.mask{
	    display: none;
	    position: fixed;
	    top: 2.65rem;
	    left: 0;
	    width: 100%;
	    height: 100%;
	    background: rgba(0, 0, 0, 0.5);
	    opacity: 0;
	    z-index: 500;
	    transition: opacity 800ms;
	}
	.maskTive{
		display: block!important;
		opacity: 1!important;
	}
	/*地址遮罩*/
	.storelist .vux-popup-dialog{
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

	.storelist .weui-cells_radio .weui-check:checked + .weui-icon-checked:before{
		color: #336FFF !important;
	}

	.searchBox{
		width: 100%;
		background: #fff;
		padding-bottom: 0.14rem;
		border-top: 0.01rem solid #D8DFF0;
		.search{
			position: relative;
			width: 92%;
			margin: 0 auto;
			padding-top: 0.14rem;
			img{
				position: absolute;
				width: 5%;
				top: 0.25rem;
				left: 0.26rem;
			}
			input{
				width: 100%;
				background: #F5F6FA;
				border-radius: 0.29rem;
				color: #1A2642;
				font-size: 0.24rem;
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
	}
</style>

<style lang="less" scoped>
.wrapper2 {
	height: 90%;
	overflow: hidden;
	.content{
		padding-top: 0.4rem;
		padding-bottom: 0.7rem;
	}
}
.screen{
	height: 100%;
}
.screen .vux-popup-dialog{
	background: #fff;
}
.screening{
	width: 6.6rem;
	font-family: PingFangSC-Regular;
	font-size: 0.28rem;
	color: #90A2C7;
	letter-spacing: 0;
	list-style: none;
	li{
		float: left;
		background: #F5F6FA;
		font-size: 0.24rem;
		text-align: center;
		list-style: none;
	}
	.logo{
		overflow: hidden;
		margin-left: 0.25rem;
		margin-bottom: 0.45rem;
		img{
			float: right;
			width: 5%;
			margin-right: 0.255rem;
		}
		.logolist{
			margin: 0.24rem 0 0 0;
			color: #1A2642;
			.item{
				width: 1.92rem;
				margin: 0 0.18rem 0.1rem 0;
				padding: 0.26rem 0;
			}
			.distance{
			    width: 96%;
			    text-align: center;
			    background: #F5F6FA;
			    padding: 0.22rem 0;
			}
		}
	}
	.li-selected{
		color: #336FFF;
		background: #E4EBFB;
	}
	.screenlist{
		overflow: hidden;
		margin-bottom: 0.35rem;
		margin-left: 0.18rem;
		color: #1A2642;
		.category{
			margin-left: 0.07rem;
			margin-bottom: 0.24rem;
			color: #90A2C7;
		}
		.item{
			width: 1.96rem;
			padding: 0.2rem 0;
			border-radius: 0.04rem;
			margin-right: 0.18rem;
			margin-bottom: 0.18rem;
		}
	}
}
.screen .bottom{
	position: fixed;
	bottom: 1rem;
	font-size: 0.28rem;
	text-align: center;
	.reset{
		float: left;
		width: 2.64rem;
		padding: 0.3rem 0;
		background: #F5F6FA;
		color: #336FFF;
	}
	.complete{
		float: left;
		width: 3.96rem;
		padding: 0.3rem 0;
		background: #336FFF;
		color: #fff;
	}
}
	

</style>

<style lang="less">
.logo{
	.weui-cells{
		margin-top: 0;
	}
	.weui-cell{
		padding: 0 0.24rem 0 0;
	}
	.vux-no-group-title{
		margin-top: 0;
	}
	.weui-cells:before{
		border-top: none;
	}
	.weui-cells:after{
		border-bottom: none;
	}
	.vux-label{
		font-size: 0.28rem;
		color: #90A2C7;
	}
} 

.screen .vux-popup-dialog{
	min-height: 100%;
	height: 100%;
}
.screen .vux-popup-dialog.vux-popup-right{
	height: 100%;
}
</style>