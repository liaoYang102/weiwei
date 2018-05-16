<template>
	<section style="background-color: #E32921;height: 100%;">
        <div class="luckyrank">
        	<tab active-color="#E32921" custom-bar-width="80px" default-color="#333">
		      	<tab-item selected @on-item-click="showNumber">中奖次数</tab-item>
		      	<tab-item @on-item-click="showMoney">中奖累计金额</tab-item>
		    </tab>
		     <!-- 排行前3名 -->
		    <div class="former-three">
		    	<li v-for="(item,index) in rankList" v-if="index<3">
	    		    <div class="rank-pic">
	    		        <img src="../../assets/images/draw/2.png" alt="" v-if="index==0">
	    		        <img src="../../assets/images/draw/1.png" alt="" v-else-if="index==1">
	    		        <img src="../../assets/images/draw/3.png" alt="" v-else>
	    		        <div class="pic-move">
	    		            <img src="../../assets/images/draw/photo1.png" alt="">
	    		        </div>
	    		        <div class="ranking">
	    		        	<img src="../../assets/images/draw/two.png">
	    		        </div>
	    		    </div>
		    		
		    		<div class="rank-content">
	    		        <div class="rank-phone">{{ item.phone}}</div>
	    		        <div class="rank-money" v-if="tab2 == true">{{ item.money}}</div>
	    		        <div class="rank-money" v-else>{{ item.num}}</div>
		    		</div>
		    	</li>
		    </div>

            <div class="wrapper" ref="wrapper">
    			<div class="content">
    				<div class="rankData">
    				<!--数据列表 -->
    			        <ul  v-if="tab2 == true">
    		            	<group>
    							<cell v-for="(item,index) in rankList" v-if="index>2" class="item">
    							    <div class="rankList">
    							        <div class="rankList-left">{{ index+1 }}</div>
    							        <div class="rankList-center">
    							            <img src="../../assets/images/draw/photo1.png" alt="">
    							            <div>{{item.phone}}</div>
    							        </div>
    							        <div class="pr">{{ item.money}}</div>
    							    </div>
    							</cell>
    						</group>
    			        </ul>
    			        <ul v-else>
    			            <group>
    							<cell v-for="(item,index) in rankList" v-if="index>2" class="item">
    				                <div class="rankList">
    				                    <div class="rankList-left">{{ index+1 }}</div>
    				                    <div class="rankList-center">
    				                        <img src="../../assets/images/draw/photo1.png" alt="">
    				                        <div>{{item.phone}}</div>
    				                    </div>
    				                    <div class="rankList-right">{{ item.num}}</div>
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
	import drawHeader from './components/header'
	export default {
		data(){
			return {
				title: '幸运排行',
				rankData: [0],
                tab1: true,
                tab2: false,
                rankList:[
                    { phone : '132****0224', money: '￥73,325', num: '29'},
                    { phone : '137****3256', money: '￥80,031', num: '50'},
                    { phone : '138****0124', money: '￥75,654', num: '50'},
                    { phone : '151****6545', money: '￥69,654', num: '45'},
                    { phone : '159****3256', money: '￥60,887', num: '40'},
                    { phone : '138****6009', money: '￥50,987', num: '30'},
                    { phone : '151****6230', money: '￥49,658', num: '20'},
                    { phone : '135****3256', money: '￥45,325', num: '10'},
                    { phone : '132****0224', money: '￥73,325', num: '29'},
                    { phone : '137****3256', money: '￥80,031', num: '50'},
                    { phone : '138****0124', money: '￥75,654', num: '50'},
                    { phone : '151****6545', money: '￥69,654', num: '45'},
                    { phone : '159****3256', money: '￥60,887', num: '40'},
                    { phone : '138****6009', money: '￥50,987', num: '30'},
                    { phone : '151****6230', money: '￥49,658', num: '20'},
                    { phone : '135****3256', money: '￥45,325', num: '10'}
                ],
                show:false,
				showNomore: false,
			}
		},
		components:{
			ButtonTab,ButtonTabItem,Loading,noMore,drawHeader
		},
		mounted() {
			this.InitScroll()
			console.log('--',this.scroll)
		},
		methods:{
			showNumber(){
                this.tab1 = true;
                this.tab2 = false;
			},
			showMoney(){
				this.tab1 = false;
				this.tab2 = true;
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
					} else {
						this.scroll.refresh()
					}
				})

			},
			LoadData() {
				var _this = this
				if(_this.showNomore){
					_this.show = false;
					return 
				}
				_this.showLoading = true;
				setTimeout(function(){
					_this.show = false;
					_this.showNomore = true;
				},3000)
			}
		}
	}
</script>

<style lang="less" scoped>
	.wrapper{
		height: 59.5%;
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
	    display: flex;
	    overflow: hidden;
	    background-color: #FFF;
	    padding-top: 0.5rem;
	    margin: 0 0.4rem;
	    padding-bottom: 0.4rem;
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
	    .rank-pic{
	    	width: 100%;
	        position: relative;
	        img{
    	        width: 100%;
    	        z-index: 3;
    	    }
    	    .pic-move {
		        position: absolute;
		        top: 0;
		        left: 0;
		        img{
        	        width: 96%;
        	        vertical-align: middle;
        	    }
		    }
		    .ranking{
	    		position: absolute;
	    		top: 75%;
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
        	.rank-phone{
        		font-size: 0.24rem;
        		margin-bottom: 0.2rem; 
    		}
    		.rank-money{
    			font-size: 0.32rem;
    		    color: #E32921;
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
	            width: 19%;
	            float: left;
	            margin-top: 0.2rem;
	            margin-right: 0.4rem;
	            vertical-align: middle;
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
	}
	.rankData{
		.weui-cells{
			margin-top: 0;
		}
		.vux-no-group-title{
			margin-top: 0;
		}
		.weui-cells:before{
			border-top: none;
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
			border: none;
		}
		
	}	
</style>