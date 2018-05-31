<template>
	<div class="wrap">
		<settingHeader :title="title"></settingHeader>
		<div class="alerts-tob">
			<swiper :options="swiperOption" class="swiper">
		        <swiper-slide v-for="(item, index) in tabData" :key="index">
		        	<div class="tab-item" :class="{'tab-item-active':actTab == index}" @click="actTab = index">
	                    {{item}}
	                </div>
		        </swiper-slide>
		    </swiper>
	        <div class="white"></div>
       </div>
       <div class="wrapper" ref="wrapper">
			<div class="content">
		       <div class="news">
			        <!-- <div id="pullrefresh" class="mui-content mui-scroll-wrapper"> -->
			            <!-- <div class="mui-scroll"> -->
			                <!--<div class="flag" v-if="showNull">-->
			                <!--<img src="../addons/mx_shop/resources/cgc/images/my_care3.png">-->
			                <!--<p>您还没有任何关注哦</p>-->
			                <!--<a href="{php echo mobileUrl('stores')}">去逛逛</a>-->
			                <!--</div>-->
			                <div class="new">
			                    <p class="newTitle">CGC区块链共享经济云服务平台为企业增效可持续发展保驾护航!</p>
			                    <p class="newBottom">共享经济 &nbsp;<span>2018.5.7 &nbsp;12：00</span></p>
			                    <div class="clear"></div>
			                </div>
			                <div class="new oneImage">
			                    <p class="newTitle">CGC区块链共享经济引领传统产业规模化转型升级</p>
			                    <div class="right"><img src="../../../assets/images/member/index01.jpg" alt=""></div>
			                    <p class="newBottom">共享经济 &nbsp;<span>2018.5.7 &nbsp;12：00</span></p>
			                    <div class="clear"></div>
			                </div>
			                <div class="new">
			                    <p class="newTitle">CGC区块链共享经济云服务平台为企业增效可持续发展保驾护航!</p>
			                    <p class="newBottom">共享经济 &nbsp;<span>2018.5.7 &nbsp;12：00</span></p>
			                    <div class="clear"></div>
			                </div>
			                <div class="new oneImage">
			                    <p class="newTitle">CGC区块链共享经济引领传统产业规模化转型升级</p>
			                    <div class="right"><img src="../../../assets/images/member/index01.jpg" alt=""></div>
			                    <p class="newBottom">共享经济 &nbsp;<span>2018.5.7 &nbsp;12：00</span></p>
			                    <div class="clear"></div>
			                </div>
			                <div class="new">
			                    <p class="newTitle">CGC区块链共享经济云服务平台为企业增效可持续发展保驾护航!</p>
			                    <p class="newBottom">共享经济 &nbsp;<span>2018.5.7 &nbsp;12：00</span></p>
			                    <div class="clear"></div>
			                </div>
			                <div class="new oneImage">
			                    <p class="newTitle">CGC区块链共享经济引领传统产业规模化转型升级</p>
			                    <div class="right"><img src="../../../assets/images/member/index01.jpg" alt=""></div>
			                    <p class="newBottom">共享经济 &nbsp;<span>2018.5.7 &nbsp;12：00</span></p>
			                    <div class="clear"></div>
			                </div>
			                <div class="new">
			                    <p class="newTitle">CGC区块链共享经济云服务平台为企业增效可持续发展保驾护航!</p>
			                    <p class="newBottom">共享经济 &nbsp;<span>2018.5.7 &nbsp;12：00</span></p>
			                    <div class="clear"></div>
			                </div>
			                <div class="new oneImage">
			                    <p class="newTitle">CGC区块链共享经济引领传统产业规模化转型升级</p>
			                    <div class="right"><img src="../../../assets/images/member/index01.jpg" alt=""></div>
			                    <p class="newBottom">共享经济 &nbsp;<span>2018.5.7 &nbsp;12：00</span></p>
			                    <div class="clear"></div>
			                </div>
			                <div class="new">
			                    <p class="newTitle">CGC区块链共享经济云服务平台为企业增效可持续发展保驾护航!</p>
			                    <p class="newBottom">共享经济 &nbsp;<span>2018.5.7 &nbsp;12：00</span></p>
			                    <div class="clear"></div>
			                </div>
			                <div class="new oneImage">
			                    <p class="newTitle">CGC区块链共享经济引领传统产业规模化转型升级</p>
			                    <div class="right"><img src="../../../assets/images/member/index01.jpg" alt=""></div>
			                    <p class="newBottom">共享经济 &nbsp;<span>2018.5.7 &nbsp;12：00</span></p>
			                    <div class="clear"></div>
			                </div>
			                <!-- <div class="new" :class="item.imgNumber==1?'oneImage':''" v-for="item in items">
			                    <a :href="item.url">
			                        <p class="newTitle">{{item.name}}!</p>
			                        <div class="right" v-show="item.imgNumber==1"><img :src="item.imgs[0]" alt=""></div>
			                        <div class="imgList" v-show="item.imgNumber>1">
			                            <img :src="img" alt="" v-for="(img,index) in item.imgs" v-if='index<=2'> -->
			                            <!--<img src="../addons/mx_shop/resources/cgc/images/index/index01.jpg" alt="">-->
			                            <!--<img src="../addons/mx_shop/resources/cgc/images/index/index01.jpg" alt="">-->
			                        <!-- </div>
			                        <p class="newBottom">{{item.cateName}} &nbsp;<span>{{item.addTime}}</span></p>
			                        <div class="clear"></div>
			                    </a>
			                </div>
			                <input type="hidden" value="{$token}" id="token"> -->
			            <!-- </div> -->
			        <!-- </div> -->
			    </div>
			    <loading v-if="show"></loading>
		    	<noMore v-if="showNomore"></noMore>
			</div>
		</div>
	</div>
</template>
<script>
	import settingHeader from '../../../components/setting_header'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import BScroll from 'better-scroll'
	import Loading from '../../../components/loading'
	import noMore from '../../../components/noMore'
	export default {
		data(){
			return {
				title:'推广助手',
				tabData:['新闻类','活动类','品牌类','视频推广','领导关怀'],
				swiperOption:{
					slidesPerView : 'auto',
					spaceBetween : 20,
				},
				actTab:0,
				show:false,
				showNomore: false,
			}
		},
		components:{
			settingHeader,
			swiper,
			swiperSlide,
			Loading,
			noMore
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
								threshold: 0, // 负值是当上拉到超过低部 70px；正值是距离底部距离 时，                    
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
				// var _this = this
				// setTimeout(function(){
				// 	_this.show = false;
				// 	let obj = [{ shopname: 'VANS Old Skool lite黑白超轻鞋款 黑色38.5', money: '3598', score: '266'},
				// 	{ shopname: 'VANS Old Skool lite黑白超轻鞋款 黑色38.5', money: '3598', score: '266'}];
				// 	_this.shopList = _this.shopList.concat(obj);
				// 	console.log(_this.shopList);
				// 	// _this.showNomore = true;
				// },3000)
			},
		}
	}
</script>

<style lang='less' scoped>
	.wrap{
		height: 100%;
		padding: 0 0.1rem;
		background: #fff;
		.wrapper {
			height: 91.8%;
			overflow: hidden;
			/*padding-bottom: 1rem;*/
		}
		.alerts-tob{
		    position: relative;
		    width: 100%;
		    text-align: center;
		    background: white;
		    color: #1B2642;
		    font-size: 0.28rem;
		    height: auto;
		    border-bottom: 1px solid #D8DFF0;
		    box-shadow:0.03rem 0.13rem 0.08rem rgba(216,223,240,0.2);
		    .white{
			    position: absolute;
			    background: white;
			    width: 0.4rem;
			    height: 0.4rem;
			    content: '';
			    top: 0.28rem;
			    right: 0;
			    z-index: 2;
			    box-shadow:-0.15rem 0 0.2rem rgba(255,255,255,0.8);
			    border-bottom-left-radius: 20%;
			}
			/* 横向滚动*/
			.swiper-container{
				height: 1rem;
				line-height: 1rem;
				font-size: 0.3rem;
				color: #1A2642;
				.tab-item{
				    width:auto;
				}
				.swiper-slide {
				    -webkit-flex-shrink: 0;
				    -ms-flex: 0 0 auto;
				    flex-shrink: 0;
				    width: auto;
				    border: 0;
				    position: relative;
				    margin-left: 0.25rem;
				    padding-right: 0.2rem;
				}
				.swiper-slide:last-child{
				    margin-right: 0.4rem;
				}

				.tab-item-active{
				    color: #7386AD;
				}
			}
		}
		.news{
		    height: 100%;
		    padding-top: 0;
		    position: relative;
		    .new{
			    border-bottom: 1px solid #D8DFF0;
			    padding-bottom: 0.2rem;
			    padding-left:0.24rem;
			    padding-right: 0.16rem;
			    .newTitle{
				    float: left;
				    margin: 0.24rem 0.5rem 0.18rem 0;
				    font-size: 0.34rem;
				    color: #1A2642;
				    line-height: 0.45rem;
				    width: 100%;
				}
				.newBottom{
				    color: #7386AD;
				    font-size: 0.26rem;
				    float:left;
				    span{
					    color: #7386AD;
					}
				}
				.right{
					img{
						width:2.2rem;
					    height:1.2rem;
					    margin-top: 0.35rem;
					}
				    
				}
				
				.imgList{
				    width: 100%;
				    display: flex;
				    flex-wrap: nowrap;
				    margin-bottom: 0.18rem;
				    img{
					    width: 33%;
					    height: 1.1rem;
					    margin-right: 0.8%;
					}
				}
			}
			.oneImage {
				.newTitle{
				    width: 3.9rem;
				    margin: 0.24rem 0.72rem 0.36rem 0;
				}
			}
		}
	}
</style>