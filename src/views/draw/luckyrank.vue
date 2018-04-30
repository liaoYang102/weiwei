<template>
	<section>
		<drawHeader :title="title" ></drawHeader>

		<div class="top">
            <div class="btn-large">
               	<button-tab>
	               	<button-tab-item selected @on-item-click="showNumber">中奖次数</button-tab-item>
	               	<button-tab-item @on-item-click="showMoney">中奖累计金额</button-tab-item>
               	</button-tab>
            </div>
        </div>

        <!-- 排行前3名 -->
        <div class="former-three">
            <div class="rank-left">
                <div class="rank-pic">
                    <img src="../../assets/images/draw/crown2.png" alt="">
                    <div class="pic-move">
                        <img src="../../assets/images/draw/photo1.png" alt="">
                    </div>
                </div>
            </div>

            <div class="rank-center">
                <div class="rank-pic">
                    <img src="../../assets/images/draw/crown1.png" alt="">
                    <div class="pic-move" style="top: 0.82rem;left: 0.3rem">
                        <img src="../../assets/images/draw/photo2.png" alt="" style="width:88%" >
                    </div>
                </div>
            </div>

            <div class="rank-right">
                <div class="rank-pic">
                    <img src="../../assets/images/draw/crown3.png" alt="">
                    <div class="pic-move" style="top: 0.68rem">
                        <img src="../../assets/images/draw/photo3.png" alt="" style="width:84%" >
                    </div>
                </div>
            </div>

            <div class="rank-content">
                <div class="content-float" v-for="(item,index) in rankList" v-if="index<3">
                    <div class="rank-phone">{{ item.phone}}</div>
                    <div class="rank-money" v-if="tab2 == true">{{ item.money}}</div>
                    <div class="rank-money" v-else>{{ item.num}}</div>
                </div>
            </div>
        </div>

        <div class="wrapper" ref="wrapper">
			<div class="content">
				<div class="luckyrank">
				<!--数据列表 -->
			        <ul  v-if="tab2 == true">
		            	<group v-for="(item,index) in rankList" v-if="index>2">
							<cell>
							    <div class="rankList">
							        <div class="rankList-left">{{ index+1 }}</div>
							        <div class="rankList-center">
							            <img src="../../assets/images/draw/photo1.png" alt="">
							            <div>{{item.phone}}</div>
							        </div>
							        <div class="rankList-right">{{ item.money}}</div>
							    </div>
							</cell>
						</group>
			        </ul>
			        <ul v-else>
			            <group v-for="(item,index) in rankList" v-if="index>2">
							<cell>
				                <div class="rankList">
				                    <div class="rankList-left">{{ index+1 }}</div>
				                    <div class="rankList-center">
				                        <img src="../../assets/images/draw/photo1.png" alt="">
				                        <div>{{item.phone}}</div>
				                    </div>
				                    <div class="rankList-right" >{{ item.num}}</div>
				                </div>
			            	</cell>
						</group>
			        </ul>
			        <loading v-if="show"></loading>
			    	<noMore v-if="showNomore"></noMore>
			    </div>

			</div>
		</div>

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
                    { phone : '132****0224', money: '￥73,325', num: '29次'},
                    { phone : '137****3256', money: '￥80,031', num: '50次'},
                    { phone : '138****0124', money: '￥75,654', num: '50次'},
                    { phone : '151****6545', money: '￥69,654', num: '45次'},
                    { phone : '159****3256', money: '￥60,887', num: '40次'},
                    { phone : '138****6009', money: '￥50,987', num: '30次'},
                    { phone : '151****6230', money: '￥49,658', num: '20次'},
                    { phone : '135****3256', money: '￥45,325', num: '10次'},
                    { phone : '132****0224', money: '￥73,325', num: '29次'},
                    { phone : '137****3256', money: '￥80,031', num: '50次'},
                    { phone : '138****0124', money: '￥75,654', num: '50次'},
                    { phone : '151****6545', money: '￥69,654', num: '45次'},
                    { phone : '159****3256', money: '￥60,887', num: '40次'},
                    { phone : '138****6009', money: '￥50,987', num: '30次'},
                    { phone : '151****6230', money: '￥49,658', num: '20次'},
                    { phone : '135****3256', money: '￥45,325', num: '10次'}
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
					_this.showNomore = true;
				},3000)
			}
		}
	}
</script>

<style lang="less" scoped>
	.wrapper{
		height: 7rem;
		overflow: hidden;
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
	    margin: auto;
	    padding: 0.2rem;
	    overflow: hidden;
	    background-color: #FF5365;
	    .rank-left {
	        width: 33%;
	        margin: 0.25rem auto 0.1rem auto;
	        float: left;
	    }
	    .rank-center {
	        width: 37%;
	        margin: 0.1rem auto;
	        float: left;
	    }
	    .rank-right{
	        width: 30%;
	        margin: 0.4rem auto 0.1rem auto;
	        float: left;
	    }
	    .rank-pic{
	        position: relative;
	        padding: 0 0.2rem;
	        img{
    	        width: 100%;
    	        z-index: 3;
    	    }
    	    .pic-move {
		        position: absolute;
		        top: 0.72rem;
		        left: 0.28rem;
		        img{
        	        width: 86%;
        	    }
		    }
	    }
    	.rank-content{
    	    width: 100%;
    	    color: white;
    	    font-weight: bold;
    	    text-align: center;
    	    overflow: hidden;
    	    .content-float{
        	    width: 33%;
        	    float: left;
        	}
        	.rank-phone{
    		    font-size: 0.36rem;
    		}
    		.rank-money{
    		    font-size: 0.26rem;
    		}
    	}
	}

	.rankList{
	    width: 7.5rem;
	    line-height: 1rem;
	    font-size: 0.32rem;
	    font-weight: bold;
	    color: #1A2642;
	    .rankList-left{
	        width: 12%;
	        float: left;
	        text-align: center;
	        font-size: 0.3rem;
	    }
	    .rankList-center{
	        width: 60%;
	        float: left;
	        margin: auto;
	        img{
	            width: 18%;
	            float: left;
	            margin-top: 0.15rem;
	            margin-right: 0.15rem;
	            vertical-align: middle;
	        }
	    }
	    .rankList-right{
	    	padding-right: 0.2rem;
	        text-align: right;
	        color: #FF5365;
	    }
	}
	
</style>

<style lang="less">
@button-tab-border-radius: 0.6rem;
	.top{
		.vux-button-group > a.vux-button-group-current{
			color: #FF5365;
			background: #fff;
		}
		.vux-button-group{
			height: 0.8rem;
		}
		.vux-button-group > a{
			height: 0.8rem;
			line-height: 0.8rem;
			font-size: 0.36rem;
			color: #fff;
			background: #FF5365;
		}
		.vux-button-group > a.vux-button-tab-item-first:after, .vux-button-group > a.vux-button-tab-item-last:after{
			border: 0.02rem solid #fff;
		}
		.vux-button-group > a.vux-button-tab-item-first{
			border-top-left-radius: @button-tab-border-radius;
			border-bottom-left-radius: @button-tab-border-radius;
		}
		.vux-button-group > a.vux-button-tab-item-last{
			border-top-right-radius: @button-tab-border-radius;
			border-bottom-right-radius: @button-tab-border-radius;
		}
		.vux-button-group > a.vux-button-tab-item-first:after{
			border-top-left-radius: 0.7rem;
			border-bottom-left-radius: 0.7rem;
		}
		.vux-button-group > a.vux-button-tab-item-last:after{
			border-top-right-radius: 0.7rem;
			border-bottom-right-radius: 0.7rem;
		}
	}
</style>

<style lang="less">
.luckyrank{
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
		text-align: left;
	}
	.weui-cells:after{
		border-color: #D8DFF0;
	}
}	
</style>