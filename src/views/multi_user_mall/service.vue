<template>
	<section class="service">
		<!-- <settingHeader :title="title"></settingHeader> -->
		<div class="fujin">

			<!-- <h2>套餐类型</h2> -->
			<div class="list">
				<div class="wrapper" ref="wrapper">
					<div class="content"  v-if="4>3">
						<ul>
							<li class="clearfix" @click="goDetail(1)">
								<div class="left">
									<img src="../../assets/images/share/md_logo.png" alt="">
								</div>
								<div class="right">
									<p class="title ellipise">30分钟 威伐光-750w单人套餐 </p>
									<p class="content ellipise">金牌双人套餐，提供眼罩、免费WiFi</p>
									<p class="nr"><span class="momey">￥120</span><span class="ms_price">门市价:￥150</span><span class="num">已售：2414</span></p>
									<!-- <p class="zhekou">8折</p> -->
								</div>
							</li>
							<li class="clearfix" @click="goDetail(1)">
								<div class="left">
									<img src="../../assets/images/share/md_logo.png" alt="">
								</div>
								<div class="right">
									<p class="title ellipise">60分钟 威伐光-750w单人套餐 </p>
									<p class="content ellipise">金牌双人套餐，提供眼罩、免费WiFi</p>
									<p class="nr"><span class="momey">￥120</span><span class="ms_price">门市价:￥150</span><span class="num">已售：2414</span></p>
									<!-- <p class="zhekou">8折</p> -->
								</div>
							</li>
							<li class="clearfix" @click="goDetail(1)">
								<div class="left">
									<img src="../../assets/images/share/md_logo.png" alt="">
								</div>
								<div class="right">
									<p class="title ellipise">60分钟 威伐光-750w双人套餐 </p>
									<p class="content ellipise">金牌双人套餐，提供眼罩、免费WiFi</p>
									<p class="nr"><span class="momey">￥120</span><span class="ms_price">门市价:￥150</span><span class="num">已售：2414</span></p>
									<!-- <p class="zhekou">8折</p> -->
								</div>
							</li>
							<li class="clearfix" @click="goDetail(1)">
								<div class="left">
									<img src="../../assets/images/share/md_logo.png" alt="">
								</div>
								<div class="right">
									<p class="title ellipise">60分钟 威伐光-750w双人套餐 </p>
									<p class="content ellipise">金牌双人套餐，提供眼罩、免费WiFi</p>
									<p class="nr"><span class="momey">￥120</span><span class="ms_price">门市价:￥150</span><span class="num">已售：2414</span></p>
									<!-- <p class="zhekou">8折</p> -->
								</div>
							</li>
							<li class="clearfix" @click="goDetail(1)">
								<div class="left">
									<img src="../../assets/images/share/md_logo.png" alt="">
								</div>
								<div class="right">
									<p class="title ellipise">60分钟 威伐光-750w双人套餐 </p>
									<p class="content ellipise">金牌双人套餐，提供眼罩、免费WiFi</p>
									<p class="nr"><span class="momey">￥120</span><span class="ms_price">门市价:￥150</span><span class="num">已售：2414</span></p>
									<!-- <p class="zhekou">8折</p> -->
								</div>
							</li>
						</ul>
						<loading v-if="show"></loading>
						<noMore v-if="showNomore"></noMore>
					</div>
					<noData v-else :status="noDataStatus" :stateText="noDataText"></noData>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import BScroll from 'better-scroll'
	import Loading from '../../components/loading'
	import noMore from '../../components/noMore'
	import noData from '../../components/noData'
	import settingHeader from '../../components/setting_header'
	export default {
		data() {
			return {
				title: "服务",
				show:false,
				showNomore:false
			}
		},
		components: {
			settingHeader,
			noData,
			noMore,
			Loading
		},
		created() {
			this.InitScroll()
		},
		methods: {
			goDetail(id) {
				this.$router.push({
					path: '/share/meaidetail',
					params: id
				});
			},
			InitScroll() {
				var _this = this
				_this.$nextTick(() => {
					if(!_this.scroll) {
						_this.scroll = new BScroll(_this.$refs.wrapper, {
							click: true,
							scrollY: true,
							pullUpLoad: {
								// threshold: -30, // 负值是当上拉到超过低部 70px；正值是距离底部距离 时，                    
							}
						})
						_this.scroll.on('pullingUp', (pos) => {
							_this.show = true;
							_this.LoadData()
							_this.$nextTick(function() {
								_this.scroll.finishPullUp();
								_this.scroll.refresh();
							});
						})
					} else {
						_this.scroll.refresh()
					}
				})

			},
			LoadData() {

			},
		}
	}
</script>

<style lang="less" scoped>
	.fujin {
		width: 100%;
		margin: 0 auto;
		.list {
			/*border-top: 1px solid #D8DFF0;*/
			/*border-bottom: 1px solid #D8DFF0;*/
			/*margin-top: .22rem;
			margin-bottom: 2rem;*/
			background-color: #fff;
			.wrapper {
				height: 6.85rem;
				overflow: hidden;
			}
			li {
				padding: .2rem .1rem;
				border-bottom: 1px solid #D8DFF0;
				.left {
					float: left;
					width: 2.04rem;
					height: 1.6rem;
					margin-right: .2rem;
					img {
						width: 100%;
						height: 100%;
					}
				}
				.right {
					float: left;
					/*border:1px solid #333;*/
					width: 4.75rem;
					.title {
						font-size: .32rem;
						color: #1A2642;
						/*font-weight: bold;*/
						.juli {
							font-size: .24rem;
							float: right;
						}
					}
					.content {
						color: #7386AD;
						font-size: .28rem;
						margin-top: .1rem;
					}
					.nr {
						margin-top: .1rem;
						.momey {
							font-size: .32rem;
							color: #F23030;
							font-weight: bold;
						}
						.ms_price,
						.num {
							font-size: .24rem;
							color: #7386AD;
							padding-left: .1rem;
						}
						.num {
							float: right;
							margin-top: .1rem;
						}
					}
					.zhekou {
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
</style>