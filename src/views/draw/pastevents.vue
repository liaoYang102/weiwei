<template>
	<section style="background: #E32921;color: #1A2642;height: 100%;" class="pastwrap">
		<div class="wrapper" ref="wrapper">
    		<div class="content">
				<settingHeader :title="title"></settingHeader>

				<div class="item">
					<div class="periodVideo">{{ periodVideo}}</div>
			        <div class="player">
			          	<video-player  class="video-player vjs-custom-skin"
		                     ref="videoPlayer"
		                     :playsinline="true"
		                     :options="playerOptions"
		                     @pause="onPlayerPause($event)">
		      			</video-player>
			        </div>
			    </div>

			    <div class="container">
		 			<div class="show-down">
		 				<group>
		 					<cell>
		 						<div class="title">
		 							<div class="wz1">
		 								<div class="left">国美白云店第1期(已揭晓)</div>
		 		                    	<div class="period left">1564期</div>
		 							</div>
		 		                    <div class="money">奖金池共￥800,000</div>
		 		                </div>
		 					</cell>
		 				</group>
		 			</div>
		 			<div class="award-set">
		 				<div class="set-title">奖品设置</div>
		 				<ul class="ul-set">
		 					<li v-for="i in 4" :key="i">
		 						<div class="flex">
		 							<div style="flex: 1">一等奖</div>
		 							<div>5000<span class="small">元</span></div>
		 						</div>
		 						<div class="left num">30名</div>
		 					</li>
		 				</ul>
		 			</div>

		 			<div class="wz-periods">
						<div class="wz-period">抽奖期数</div>

						<div class="period">
							<swiper :options="swiperOption1">
						       	<swiper-slide v-for="(item,index) in data3" :key="index">
						       		<div class="btn0" :class="{'btn-active':act3==index}" @click="periodActive(index)">
				                       {{item}}
				                    </div>
						       	</swiper-slide>
						    </swiper>
						</div>
		 			</div>
			    </div>
			    <div class="clear"></div>

	    		<div class="winList">
	    			<!-- 中奖人员 -->
	    	        <div class="win-person">
	    	            <div class="wz-period">中奖名单</div>
	    				<swiper :options="swiperOption2">
	    			       	<swiper-slide v-for="(item,index) in data1" :key="index">
	    			       		<div class="wz-award" :class="{'wz-award-active':act1==index}" @click="actice(index)">{{item}}</div>
	    			       	</swiper-slide>
	    			    </swiper>
	    	        </div>

	    			<!-- 一等奖数据列表 -->
	    			<div class="web">
	    			    <!--数据列表-->
	    			    <ul>
	                    	<group v-for="(item,index) in personList" :key="index">
	    						<cell>
	    							<li>
	    								<div class="personlist">
	    					                <div class="img-left">
	    					                    <img src="../../assets/images/draw/photo0.png" alt="">
	    					                </div>

	    					                <div class="user-right">
	    					                	<div class="wz-red2 fr">{{item.bonus}}<span class="yuan">元</span></div>
	    					                    <div>手机用户</div>
	    					                    <span class="wz-red">{{item.phoneNum}}</span>
	    					                    <div class="wz-gray2">{{item.speech}}</div>
	    					                </div>
	    					            </div>
	    					            <div class="clear"></div>
	    		                    </li>
	    						</cell>
	    					</group>
	    			    </ul>
	    			    <loading v-if="show"></loading>
	                    <noMore v-if="showNomore"></noMore>    
	    			</div>
	    		</div>
    		</div>
    	</div>
	</section>
</template>

<script>
	import videojs from 'video.js'
	import BScroll from 'better-scroll'
	import {swiper,swiperSlide } from 'vue-awesome-swiper'
	import settingHeader from '../../components/setting_header'
	import Loading from '../../components/loading'
	import noMore from '../../components/noMore'
	export default {
		components: {
			swiper,swiperSlide,settingHeader,Loading,noMore
		},
		data(){
			return {
				periodVideo: '第1235期 抽奖视频',
				playerOptions: {
		          height: '200',
		          controlBar: {
				    volumePanel: {
				      inline: false
				    }
				  },
		          width: document.documentElement.clientWidth,
		          muted: true,
		          language: 'zh-CN',
		          controls: true,
		          loop: true,
		          fluid: true, 
		          sources: [{
		            type: "video/mp4",
		            src: "./static/video/movie.mp4",
		          }],
		          poster: "./static/images/video.jpg",
		          notSupportedMessage: '此视频暂无法播放，请稍后再试',
		          controlBar:{
		          	fullscreenToggle: true
		          }
		        },
				show:false,
				showNomore: false,
				swiperOption: {
					autoHeight: true,
		          slidesPerView: 'auto',
	              spaceBetween: 10
		        },
		        title: '往期回顾',
		        showContent: false,
		        list:[
		        	{ bonus : '5000元', award: '一等奖',number: '共40名'},
                    { bonus : '1000元', award: '二等奖',number: '共800名'},
                    { bonus : '200元', award: '三等奖',number: '共4000名'},
                    { bonus : '200元', award: '三等奖',number: '共4000名'}
		        ],
		        swiperOption1: {
					autoHeight: true,
		          	slidesPerView: 'auto',
	              	spaceBetween: 10
		        },
		        act1:0,
                data1:['一等奖','二等奖','三等奖','四等奖','特等奖','幸运奖'],
                data3: [ 1234,1235,1236,1237,1238,1239,1240,1241,1242,1243],
                act3:0,
                personList:[
                    { bonus : '5000', phoneNum: '130****0124',speech: '第一次抽奖就中了一等奖，好高兴啊！'},
                    { bonus : '5000', phoneNum: '130****0124',speech: '第一次抽奖就中了一等奖，好高兴啊！'},
                    { bonus : '5000', phoneNum: '130****0124',speech: '第一次抽奖就中了一等奖，好高兴啊！'},
                    { bonus : '5000', phoneNum: '130****0124',speech: '第一次抽奖就中了一等奖，好高兴啊！'},
                    { bonus : '5000', phoneNum: '130****0124',speech: '第一次抽奖就中了一等奖，好高兴啊！'},
                    { bonus : '5000', phoneNum: '130****0124',speech: '第一次抽奖就中了一等奖，好高兴啊！'},
                    { bonus : '5000', phoneNum: '130****0124',speech: '第一次抽奖就中了一等奖，好高兴啊！'}
                ],
    	        swiperOption2: {
    				autoHeight: true,
    	          	slidesPerView: 'auto',
                  	spaceBetween: 10
    	        },
			}
		},
	    computed: {
	      player() {
	        return this.$refs.videoPlayer.player
	      }
	    },
		mounted() {
			setTimeout(() => {
				// let videoId= ;
				document.getElementById('vjs_video_3').className = 'video-js vjs_video_3-dimensions vjs-controls-enabled vjs-v6 vjs-has-started vjs-paused vjs-user-active';
			  console.log('dynamic change options', this.player)
			}, 0)
			this.InitScroll()
		},
		methods:{
			periodActive(index) {
				console.log('[][', index)
                this.act3 = index
            },
            //中奖人员 一等奖
            actice(index) {
                this.act1 = index
            },
            playerReadied(player) {
		        const track = new videojs.AudioTrack({
		          id: 'my-spanish-audio-track',
		          kind: 'translation',
		          label: 'Spanish',
		          language: 'zh-CN'
		        })
		        player.audioTracks().addTrack(track)
		        const audioTrackList = player.audioTracks()
		        audioTrackList.addEventListener('change', function() {
		          for (let i = 0; i < audioTrackList.length; i++) {
		            const track = audioTrackList[i]
		            if (track.enabled) {
		              videojs.log(track.label)
		              return
		            }
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
    			_this.show = true;
    			setTimeout(function(){
    				_this.show = false;
    				_this.showNomore = true;
    			},3000)
    		}
		}
	}
</script>

<style lang="less" scoped>

	.wrapper {
		height: 100%;
		overflow: hidden;
		.content{
			padding-bottom: 0.2rem;
		}
	}
	.left{
		float: left;
	}
	.container{
		width: 94.7%;
		background-color: #fff;
		margin: 0.2rem;
		border-radius: 0.08rem;
		padding-bottom: 0.3rem;
		.title{
			padding: 0.4rem 0 0.2rem 0.3rem;
			.wz1{
				width: 100%;
			    color: #333333;
			    font-size: 0.36rem;
			    .period{
			    	color: #fff;
			    	font-size: 0.26rem;
			    	background:linear-gradient(-121.4deg,#AF51FF,#9013FE);
			    	border-radius: 0.04rem;
			    	text-align: center;
			    	padding:0.05rem 0.07rem; 
			    	margin-left: 0.12rem;
			    }
			}
			.money{
				clear: both;
				letter-spacing:0.02rem;
				color: #666666;
				font-size: 0.26rem;
				margin-top: 0.22rem;
			}
		}
		.award-set{
			padding-top:0.39rem;
			margin: 0 0.1rem;
			border-bottom: 1px solid #E6E6E6;
			overflow: hidden;
			padding-bottom: 0.3rem;
			border-top: 1px solid #E6E6E6;
			.set-title{
				color: #333333;
				font-size: 0.36rem;
				padding-left: 0.19rem;
			}
			.ul-set{
				margin-top: 0.3rem;
				padding-left: 0.19rem;
				li{
					list-style: none;
			    	background:linear-gradient(-121.4deg,#FF5C34,#FF2A4B);
			    	padding: 0.1rem 0.09rem;
			    	margin-right: 0.2rem;
			    	margin-bottom: 0.1rem;
			    	float: left;
			    	color: #fff;
			    	font-size: 0.26rem;
			    	border-radius: 0.04rem; 
			    	text-align: center;
			    	display: flex;
			    	.flex{
			    		display: flex;
			    		flex: 1;
			    		div:nth-child(1){
			    			line-height: 0.64rem;
			    			margin-right: 0.1rem;
			    		}
			    		div:nth-child(2){
			    			color: #FFEEB3;
			    			font-size: 0.42rem;
			    			.small{
			    				font-size: 0.2rem;
			    			}
			    		}
			    	}
			    	
			    	.num{
			    		padding-left: 0.15rem;
			    		margin: auto ;
			    		margin-left: 0.2rem;
			    		border-left: 1px solid #fff;
			    	}
				}
			}
		}

		.wz-periods{
			padding-top:0.4rem;
			.period{
				color: #fff;
				padding-bottom: 0.19rem;
				.swiper-slide {
				    width: 1.1rem;
				    padding-right: 0.3rem;
				}
				.swiper-slide:nth-child(1){
					margin-left: 0.33rem;
				}
				/* 抽奖期数*/
				.btn0{
				    text-align: center;
				    font-size: 0.3rem;
				    padding: 0.2rem 0.18rem;
				    background-color: #E1E1E1;
				    border-radius: 6px;
				}
				.btn-active{
				    background-color: #E32921;
				}
			}
			.wz-period{
			    padding: 0 0 0.4rem 0.2rem;
			    font-size: 0.32rem;
			}
		}
		
	}
	.winList{
		width: 94.7%;
		background-color: #fff;
		margin: 0.2rem;
		border-radius: 0.06rem;
		.win-person{
			border-bottom: 1px solid #E6E6E6;
			.wz-period{
				color: #333333;
				font-size: 0.36rem;
				text-align: center;
				padding-top: 0.33rem;
				padding-bottom: 0.3rem;
			}
			.swiper-slide {
			   	width: 1.3rem;
			    height: auto;
			    padding-right: 0.2rem;
			}
			.swiper-slide:nth-child(1){
				margin-left: 0.4rem;
			}
			.wz-award{
			    width: 1.1rem;
			    color: #1A2642;
			    font-size: 0.3rem;
			    text-align: center;
			    padding-bottom: 0.3rem;
			    box-sizing:border-box; 
			    border-bottom: solid 3px #fff;
			}
			.wz-award-active{
			    color: #E32921;
			    border-bottom: solid 3px #E32921;
			}
		} 

	}
	.wz-red{
	    color:#E32921;
	    font-size: 0.32rem;
	}
	.wz-black{
	    color: #1A2642;
	    font-size: 0.25rem;
	    line-height: 0.6rem;
	}
	
	.yuan{
		font-size: 0.18rem;
	}
	.wz-red2{
	    color:#E32921;
	    font-size: 0.36rem;
	}
	.personlist{
	   width: 100%;
	   .img-left {
	       width: 20%;
	       float: left;
	       margin: 0.1rem 0.21rem 0.1rem 0;
	       img{
	       	    width: 100%;
	       	}
	   }
	   .user-right{
	       margin: 0.3rem 0 0 0;
	       color: #1A2642;
	       font-size: 0.26rem;
	       .wz-gray2{
	           color:#666666;
	           margin-top: 0.1rem;
	       }
	   }
	}
	
	.fr{
	    float: right;
	    margin-right: 0.15rem;
	}
</style>

<style lang="less">
	.show-down{
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
		}
		.weui-cell__ft{
			text-align: left;
			width: 100%;
		}
		.weui-cell_access .weui-cell__ft{
			/*padding-right: 2.7rem;*/
		}
		.weui-cells:after{
			border-bottom: none;
		}
	}
	.pastwrap{
		.item{
	    width: 100%;
	    position: relative;
	    .periodVideo{
	    	background-color: rgba(0,0,0,0);
	    	height: 0.5rem;
	    	color: #bdbdbd;
	    	position: absolute;
	    	top: 0;
	    	left: 0.1rem;
	    	z-index: 11;
	    	font-size: 0.3rem;
	    	line-height: 0.5rem;
	    }
	    .player{
	    	width: 100%;
	    	.vjs_video_2786-dimensions{
	    		width: 7.5rem;
	    	}
	    	.vjs-paused .vjs-big-play-button,.vjs-paused.vjs-has-started .vjs-big-play-button {
	    		display: block;
	    	}
	    	.video-js .vjs-big-play-button, .vjs-playing.vjs-has-started .vjs-big-play-button {
	    		display: none;
	    		border-radius: 50%;
	    		border-radius: 50%;
	    		-moz-border-radius: 50%;
	    		-webkit-border-radius: 50%;
	    	}
	    	.video-js .vjs-big-play-button {
	    		height: 1rem;
	    		width: 1rem;
	    		top: 35%;
	    		left: 43%;
	    	}
	    }
	}
	}
	
	.web{
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
		}
		.weui-cell__ft{
			text-align: left;
			width: 96%;
			margin-left: 0.3rem;
			border-bottom: solid 1px #E6E6E6;
		}
		.weui-cells:after{
			border-bottom: none;
		}
		.weui-cell_access .weui-cell__ft:after{
			width: 0.2rem;
			height: 0.2rem;
			right: 0.2rem;
			border-width: 0.04rem 0.04rem 0 0;
			border-color: #E6E6E6;
		}
	}	
</style>