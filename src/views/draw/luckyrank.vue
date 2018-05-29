<template>
	<section style="background-color: #E32921;height: 100%;">
        <div class="luckyrank">
        	<settingHeader :title="title"></settingHeader>
        	<tab active-color="#E32921" custom-bar-width="80px" default-color="#333">
		      	<tab-item selected @on-item-click="showNumber">中奖次数</tab-item>
		      	<tab-item @on-item-click="showMoney">中奖累计金额</tab-item>
		    </tab>
		     <!-- 排行前3名 -->
		    <div class="former-three">
		    	<div class="rank-top">
			    	<li>
		    		    <div class="rank-pic" v-if="rankList.lists.length>1">
		    		        <img src="../../assets/images/draw/2.png" alt="">
		    		        <div class="pic-move">
		    		            <img :src="rankList.lists[1].thumb" alt="">
		    		        </div>
		    		        <div class="ranking">
		    		        	<img src="../../assets/images/draw/two.png">
		    		        </div>
		    		    </div>
			    	</li>

			    	<li>
		    		    <div class="rank-pic"  v-if="rankList.lists.length>0">
		    		        <img src="../../assets/images/draw/1.png" alt="">
		    		        <div class="pic-move">
		    		            <img :src="rankList.lists[0].thumb" alt="">
		    		        </div>
		    		        <div class="ranking">
		    		        	<img src="../../assets/images/draw/one.png">
		    		        </div>
		    		    </div>
			    	</li>

			    	<li>
		    		    <div class="rank-pic"  v-if="rankList.lists.length>2">
		    		        <img src="../../assets/images/draw/3.png" alt="">
		    		        <div class="pic-move">
		    		            <img :src="rankList.lists[2].thumb" alt="">
		    		        </div>
		    		        <div class="ranking">
		    		        	<img src="../../assets/images/draw/three.png">
		    		        </div>
		    		    </div>
			    	</li>
		    	</div>
		    	
    		    <div class="rank-content">
    		    	<div class="content-float" v-for="(item,index) in rankList.lists" :key="index" v-if="index<3">
    		    		<div class="rank-phone">{{ item.mobile}}</div>
    		    		<div class="rank-money" v-if="tab2 == true">{{ item.money}}</div>
    		    		<div class="rank-money" v-else>{{ item.number}}</div>
    		    	</div>
    		        
	    		</div>
		    </div>
		    
            <div class="wrapper" ref="wrapper">
    			<div class="content">
    				<div class="rankData">
    				<!--数据列表 -->
    			        <ul  v-if="tab2 == true">
    		            	<group>
    							<cell v-for="(item,index) in rankList.lists" :key="index" v-if="index>2" class="item">
    							    <div class="rankList">
    							        <div class="rankList-left">{{ index+1 }}</div>
    							        <div class="rankList-center">
    							            <img :src="item.thumb" alt="">
    							            <div>{{item.mobile}}</div>
    							        </div>
    							        <div class="pr">{{ item.money}}</div>
    							    </div>
    							</cell>
    						</group>
    			        </ul>
    			        <ul v-else>
    			            <group>
    							<cell v-for="(item,index) in rankList.lists" :key="index" v-if="index>2" class="item">
    				                <div class="rankList">
    				                    <div class="rankList-left">{{ index+1 }}</div>
    				                    <div class="rankList-center">
    				                        <img :src="item.thumb" alt="">
    				                        <div>{{item.mobile}}</div>
    				                    </div>
    				                    <div class="rankList-right">{{ item.number}}</div>
    				                </div>
    			            	</cell>
    						</group>
    			        </ul>
    			        <loading v-if="show"></loading>
    			    	<noMore v-if="showNomore"></noMore>
    			    </div>

    			</div>
    		</div>
        </div>
        
	    <!-- #FF273A -->
       
        

        

	</section>
</template>

<script>
	import { ButtonTab, ButtonTabItem } from 'vux'
	import BScroll from 'better-scroll'
	import Loading from '../../components/loading'
	import noMore from '../../components/noMore'
	import settingHeader from '../../components/setting_header'
	import url from '../../config/url'
	import Qs from 'qs'
	export default {
		data(){
			return {
				title: '幸运排行',
				rankData: [0],
                tab1: true,
                tab2: false,
                rankList:{
                	lists:[]
                },
                show:false,
				showNomore: false,
				moneyList:{},
				numberList: {},
				page: 1,
			}
		},
		components:{
			ButtonTab,ButtonTabItem,Loading,noMore,settingHeader
		},
		beforeCreate:function(){
			// this.getLuckRankData()
		},
		created:function(){
			this.getLuckRankData()
		},
		mounted() {
			this.InitScroll()
		},
		methods:{
			showNumber(){
                this.tab1 = true;
                this.tab2 = false;
                this.rankList = this.numberList;
                this.show = false;
                this.showNomore = false;
			},
			showMoney(){
				this.tab1 = false;
				this.tab2 = true;
				this.rankList = this.moneyList;
				this.show = false;
				this.showNomore = false;
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
							this.LoadData()
							this.$nextTick(function() {
								this.scroll.finishPullUp();
								this.scroll.refresh();
							});
						})
						console.log('----22222222',this.scroll)
					} else {
						this.scroll.refresh()
					}
				})

			},
			LoadData() {
				this.page ++;
				var _this = this
				_this.show = true
				let len = _this.rankList.lists.length;
				let parJson = {
					pagesize:10
				}
				let a;
				if(_this.showNomore){
					_this.show = false;
					return 
				}
				if(this.tab1){
					a = Qs.stringify(parJson)
				}else{
					parJson.sort = 1;
					a = Qs.stringify(parJson)
				}
				setTimeout(function(){
					_this.show = false;
					
					_this.$http.post(url.draw.getLuckRankLists,a).then(function (response) {
						if( response.status == 200 && response.data != null&&response.data.result.page == _this.page){
							_this.rankList.lists = _this.rankList.lists.concat(response.data.result.lists)
						}
						console.log(_this.rankList);
						if(len == _this.rankList.lists.length){
							_this.showNomore = true;
						}
					}).catch(function (error) {
						console.log(error);
					});
				},1000)
			},
			getLuckRankData(){
				let _this = this;
				let parJson = {
					pagesize:10
				}
				let a = Qs.stringify(parJson)
				// let baseUrl = 'http://www.cgc999.com'
				this.$http.post(url.draw.getLuckRankLists,a).then(function (response) {
					if( response.status == 200 && response.data != null){
						_this.numberList = response.data.result
						_this.rankList = _this.numberList;
					}
					console.log('幸运排行接口数据',response);
				}).catch(function (error) {
					console.log(error);
				});

				parJson.sort = 1;
				let b = Qs.stringify(parJson);

				this.$http.post(url.draw.getLuckRankLists,b).then(function (response) {
					if( response.status == 200 && response.data != null){
						_this.moneyList = response.data.result
					}
					console.log('幸运排行累计金额数据',response);
				}).catch(function (error) {
					console.log(error);
				});
				
			},
		}
	}
</script>

<style lang="less" scoped>
	.wrapper{
		height: 56.5%;
		overflow: hidden;
	}
	.luckyrank{
		width: 94.7%;
		background-color: #fff;
		margin: 0 auto;
		height: 100%;
	}
	.top{
	    background-color: #FF5365;
	    padding-top: 0.8rem;
	    padding-bottom: 0.2rem;
	    .btn-large {
	        width: 90%;
	        height: 0.8rem;
	        margin: auto;
	    }
	}
	/* 排行前3名 */
	.former-three {
	    overflow: hidden;
	    background-color: #FFF;
	    padding-top: 0.5rem;
	    margin: 0 0.4rem;
	    padding-bottom: 0.4rem;
	    .rank-top{
	    	display: flex;
	    	width: 100%;
	    }
	    li{
	    	list-style: none;
	    	margin-right: 0.53rem;
	    	width: 25.4%;
	    	padding-top: 0.45rem;
	    }
	    li:last-child{
	    	margin-right: 0;
	    }
	    li:nth-child(2){
	    	flex: 1;
	    	padding-top: 0;
	    }
	    li:nth-child(2) .pic-move {
	        position: absolute;
	        top: 4.2%;
	        left: 4.5%;
	        img{
    	        width: 1.88rem;
    	        height: 1.88rem;
    	        vertical-align: middle;
    	    }
	    }
	    .rank-pic{
	    	width: 100%;
	        position: relative;
	        img{
    	        width: 100%;
    	        z-index: 3;
    	    }
    	    .pic-move {
		        position: absolute;
		        top: 4.8%;
		        left: 4.3%;
		        img{
        	        width: 1.47rem;
        	        height: 1.47rem;
        	        vertical-align: middle;
        	        border-radius: 50%;
        	    }
		    }
		    .ranking{
	    		position: absolute;
	    		top: 77%;
		        left: 35%;
	    		img{
	    			width: 55%;
	    		}
	    	}
	    }

    	.rank-content{
    		margin-top: 0.37rem;
    	    width: 100%;
    	    color: #333333;
    	    text-align: center;
    	    /*display: flex;*/
    	    .content-float{
		    	width: 25.4%;
		    	padding-top: 0.45rem;
		    	float: left;
		    	display: inline-block;
    	    }
    	    .content-float:nth-child(1){
    	    	float: none;
    	    }
    	    .content-float:nth-child(3){
    	    	float: right;
    	    }
        	.rank-phone{
        		font-size: 0.24rem;
        		margin-bottom: 0.2rem; 
    		}
    		.rank-money{
    			font-size: 0.32rem;
    		    color: #E32921;
    		    font-weight: bold;
    		}
    	}
	}

	.rankList{
	    width: 100%;
	    line-height: 1.2rem;
	    font-size: 0.32rem;
	    font-weight: bold;
	    color: #1A2642;
	    .rankList-left{
	        width: 20%;
	        float: left;
	        text-align: center;
	        font-size: 0.34rem;
	    }
	    .rankList-center{
	        width: 50%;
	        float: left;
	        margin: auto;
	        img{
	            width: 0.8rem;
	            height: 0.8rem;
	            float: left;
	            margin-top: 0.2rem;
	            margin-right: 0.4rem;
	            vertical-align: middle;
	            border-radius: 50%;

	        }
	        div{
	        	line-height: 1.2rem;
	        	color: #333333;
	        	font-size: 0.26rem;
	        }

	    }
	    .rankList-right{
	    	padding-right: 0.9rem;
	        text-align: right;
	        color: #E32921;
	        font-size: 0.32rem;
	    }
	    .pr{
	    	padding-right: 0.28rem;
	        text-align: right;
	        color: #E32921;
	        font-size: 0.32rem;
	    }
	}
	

	.item:nth-child(odd){
		background: #FFF5F5;
	}
	.item:nth-child(even){
		background: #fff;
	}
</style>

<style lang="less">
	.luckyrank{
		.vux-tab{
			height: 0.98rem;
		}
		.vux-tab-warp{
			padding-top: 0.98rem;
		}
		.vux-tab .vux-tab-item{
			font-size: 0.36rem;
		}
		.vux-tab-container{
			height: 0.98rem;
		}
		.weui-cells:before{
			border-top: none;
		}
	}
	.rankData{
		.weui-cells{
			margin-top: 0;
		}
		.vux-no-group-title{
			margin-top: 0;
		}
		.weui-cells:before{
			border-top: none !important;
		}
		.weui-cell{
			padding: 0;
			padding-top: 0.15rem;
			padding-bottom: 0.15rem;
		}
		.weui-cell__ft{
			width: 100%;
			text-align: left;
		}
		.weui-cells:after{
			border-bottom: none;
		}
		
	}	
</style>