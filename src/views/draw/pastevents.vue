<template>
	<section style="background: #fff;">

		<settingHeader :title="title"></settingHeader>

		<div class="item">
			<div class="periodVideo">{{ periodVideo}}</div>
	        <div class="player">
	          	<video-player  class="video-player vjs-custom-skin"
                     ref="videoPlayer"
                     :playsinline="true"
                     :options="playerOptions"
                     @play="onPlayerPlay($event)"
                     @pause="onPlayerPause($event)">
      			</video-player>
	        </div>
	     </div>
		<div class="show-down">
			<group>
				<cell is-link :border-intent="false" :arrow-direction="showContent ? 'up' : 'down'" @click.native="showContent = !showContent">
					<div>
	                    <span class="wz1">国美白云店第1期(已揭晓)</span>
	                    <span style="letter-spacing:0.02rem;">奖金池共￥800,000</span>
	                </div>
				</cell>
				<div v-if="showContent">
			    </div>
			</group>
		</div>

		<div class="imgList">
			<swiper :options="swiperOption" class="box1">
		       	<swiper-slide v-for="(item,index) in list">
		       		<div class="award0">
                        <img src="../../assets/images/draw/medals.png" alt="">
                        <div class="wz-red">{{ item.bonus}}</div>
                        <div class="wz-black">{{item.award}}</div>
                        <div class="wz-gray">{{item.number}}</div>
                    </div>
		       	</swiper-slide>
		    </swiper>
		</div>

		<div class="wz-period">抽奖期数</div>

		<div class="period">
			<swiper :options="swiperOption1">
		       	<swiper-slide v-for="(item,index) in data3" >
		       		<div class="btn0" :class="{'btn-active':act3==index}" @click="periodActive(index)">
                       {{item}}
                    </div>
		       	</swiper-slide>
		    </swiper>
		</div>

		<!-- 中奖人员 -->
        <div class="win-person">
            <div class="wz-period">中奖人员</div>
			<swiper :options="swiperOption2">
		       	<swiper-slide v-for="(item,index) in data1">
		       		<div class="wz-award" :class="{'wz-award-active':act1==index}" @click="actice(index)">{{item}}</div>
		       	</swiper-slide>
		    </swiper>
        </div>

        <div class="wrapper" ref="wrapper">
			<div class="content">
				<!-- 一等奖数据列表 -->
				<div class="web">
				    <!--数据列表-->
				    <ul>
                    	<group v-for="(item,index) in personList">
							<cell>
								<li>
									<div class="personlist">
						                <div class="img-left">
						                    <img src="../../assets/images/draw/photo0.png" alt="">
						                </div>

						                <div class="user-right">
						                    <div>手机用户</div>
						                    <div class="wz-red fr">{{item.bonus}}</div>
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
		            src: "./static/video/movie.ogg",
		          }],
		          poster: "./static/images/video.jpg",
		          notSupportedMessage: '此视频暂无法播放，请稍后再试',
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
                data3: [ 1,2,3,4,5,6,7,8,9,10],
                act3:0,
                personList:[
                    { bonus : '5000元', phoneNum: '130****0124',speech: '第一次抽奖就中了一等奖，好高兴啊！'},
                    { bonus : '5000元', phoneNum: '130****0124',speech: '第一次抽奖就中了一等奖，好高兴啊！'},
                    { bonus : '5000元', phoneNum: '130****0124',speech: '第一次抽奖就中了一等奖，好高兴啊！'},
                    { bonus : '5000元', phoneNum: '130****0124',speech: '第一次抽奖就中了一等奖，好高兴啊！'},
                    { bonus : '5000元', phoneNum: '130****0124',speech: '第一次抽奖就中了一等奖，好高兴啊！'},
                    { bonus : '5000元', phoneNum: '130****0124',speech: '第一次抽奖就中了一等奖，好高兴啊！'},
                    { bonus : '5000元', phoneNum: '130****0124',speech: '第一次抽奖就中了一等奖，好高兴啊！'}
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
    		},
		}
	}
</script>

<style lang="less" scoped>

	.wrapper {
		height: 8rem;
		overflow: hidden;
	}
	.imgList{
		background: #fff;
		padding-top: 0.1rem;
		padding-bottom: 0.2rem;
		.swiper-slide {
		    width: 2rem;
		    margin-left: 0.3rem;
		}
		.award0{
		    width: 1.92rem;
		    height: 2.5rem;
		    background: url('../../assets/images/draw/pink.jpg') no-repeat;
		    background-size: contain;
		    text-align: center;
		    img {
    		    width: 35%;
    		    margin-top: 0.1rem;
    		    margin-bottom: 0.05rem;
    		}
    		
		}
	}
	.wz-red{
	    color: #dd2c40;
	    font-size: 0.3rem;
	    line-height: 0.2rem;
	}
	.wz-black{
	    color: black;
	    font-size: 0.25rem;
	    line-height: 0.6rem;
	}
	.wz-gray{
	    color:#a9a3a4;
	    font-size: 0.2rem;
	    line-height: 0.1rem;
	}
	.period{
		border-bottom: 0.01rem solid #ccc;
		padding-bottom: 0.2rem;
		.swiper-slide {
		    width: 0.9rem;
		    margin-left: 0.2rem;
		}
		/* 抽奖期数*/
		.btn0{
		    width: 0.8rem;
		    height: 0.8rem;
		    border-radius: 50%;
		    border: solid 1px #e7e7e7;
		    text-align: center;
		    color: #e7e7e7;
		    font-size: 0.3rem;
		    line-height: 0.8rem;
		}
		.btn-active{
		    border: solid 1px #dd2c40;
		    color: #dd2c40;
		}
	}
	.wz-period{
	    margin: 0.3rem 0 0.2rem 0.2rem;
	    font-size: 0.32rem;
	}
	.win-person{
		border-bottom: 0.01rem solid #ccc;
		
		.swiper-slide {
		    width: 1.3rem;
		    height: 0.75rem;
		}
		.wz-award{
		    width: 1.1rem;
		    height: 0.7rem;
		    color: black;
		    font-size: 0.3rem;
		    line-height: 0.7rem;
		    margin-left: 0.3rem;
		    text-align: center;
		}
		.wz-award-active{
		    color: #dd2c40;
		    border-bottom: solid 0.05rem #dd2c40;
		}
	} 
	.wz1{
	    color: #dd2c40;
	    font-size: 0.4rem;
	    display: block;
	    margin: 0.1rem 0 0.2rem 0;
	}

	.personlist{
	   width: 100%;
	   .img-left {
	       width: 23%;
	       float: left;
	       margin: 0.1rem 0.1rem 0.1rem 0;
	       img{
	       	    width: 100%;
	       	}
	   }
	   .user-right{
	       margin: 0.3rem 0 0 0;
	       color: #000;
	       .wz-gray2{
	           color:#a9a3a4;
	           font-size: 0.3rem;
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
			margin-top: 0 !important;
		}
		.vux-no-group-title{
			margin-top: 0 !important;
		}
		.weui-cells:before{
			border-top: none !important;
		}
		.weui-cell{
			padding: 0 !important;
		}
		.weui-cell__ft{
			text-align: left !important;
		}
		.weui-cell_access .weui-cell__ft{
			padding-right: 2.7rem !important;
		}
		.weui-cell_access .weui-cell__ft:after{
			width: 0.2rem !important;
			height: 0.2rem !important;
			right: 0.2rem !important;
			border-width: 0.04rem 0.04rem 0 0 !important;
		}
		.weui-cells:after{
			border-bottom: none !important;
		}
	}
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
	    	z-index: 222;
	    	font-size: 0.3rem;
	    	line-height: 0.5rem;
	    }
	    .player{
	    	width: 100%;
	    	.vjs_video_2786-dimensions{
	    		width: 7.5rem !important;
	    	}
	    	.vjs-paused .vjs-big-play-button,.vjs-paused.vjs-has-started .vjs-big-play-button {
	    		display: block !important;
	    	}
	    	.video-js .vjs-big-play-button, .vjs-playing.vjs-has-started .vjs-big-play-button {
	    		display: none !important;
	    		border-radius: 50% !important;
	    		border-radius: 50% !important;
	    		-moz-border-radius: 50% !important;
	    		-webkit-border-radius: 50% !important;
	    	}
	    	.video-js .vjs-big-play-button {
	    		height: 1rem !important;
	    		width: 1rem !important;
	    		top: 35% !important;
	    		left: 43% !important;
	    	}
	    }
	}
	.web{
		.weui-cells{
			margin-top: 0 !important;
		}
		.vux-no-group-title{
			margin-top: 0 !important;
		}
		.weui-cells:before{
			border-top: none !important;
		}
		.weui-cell{
			padding: 0 !important;
		}
		.weui-cell__ft{
			text-align: left !important;
			width: 93% !important;
			margin-right: 0.3rem !important;
			border-bottom: solid 0.01rem #ccc !important;
		}
		.weui-cells:after{
			border-bottom: none !important;
		}
		.weui-cell_access .weui-cell__ft:after{
			width: 0.2rem !important;
			height: 0.2rem !important;
			right: 0.2rem !important;
			border-width: 0.04rem 0.04rem 0 0 !important;
		}
	}	
</style>	