<template>
	<div class="reward-box">
		<settingHeader :title="title"></settingHeader>
		<div class="h">
			<div class="top">
				<p>{{balanceInfo.totalBalance}}</p>
				<p>{{typeTitle}}</p>
			</div>
			<div class="screen-box">
				<div @click="lookAll" style="color: #336fff;">
					查看全部
				</div>
				<div @click="show8 = true">
					<span>筛选</span><img src="../../../assets/images/index/shaixuan.png" alt="" />
				</div>
			</div>
			<div class="wrapper" ref="wrapper">
				<div class="content">
					<div v-if="list.length >0">
						<div class="list-box">
							<ul>
								<li v-for="item in list" @click="toDetail(item.pointId)">
									<div>
										<p>{{item.remark}}</p>
										<p>{{item.createTime}}</p>
									</div>
									<p class="red">{{item.directType == 1?'+':'-'}} {{item.point}}</p>
								</li>
							</ul>
						</div>
						<Loading v-if="show"></Loading>
						<Nomore v-if="showNo"></Nomore>
					</div>
					<noData v-if="list.length == 0" :status="2" stateText="暂无数据"></noData>
				</div>
			</div>
		</div>

		<!--筛选菜单栏-->
		<div v-transfer-dom>
			<popup v-model="show8" position="top">
				<div class="position-vertical-demo">
					<div class="twoClass">
						<div class="type-item" v-for="(item,index) in xyClass">
							<span :class="{'twoActive':twoIndex == index}" @click="twoChange(index,item)">{{item.title}}</span>
						</div>
					</div>
				</div>
			</popup>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import settingHeader from '../../../components/setting_header'
	import Loading from '../../../components/loading'
	import Nomore from '../../../components/noMore'
	import noData from '../../../components/noData'
	export default {
		data() {
			return {
				title: '信用积分奖励',
				show: false,
				showNo: false,
				show8: false,
				twoIndex: 0,
				xyClass: [{
					title: '全部列表',
					type: 1
				}, {
					title: '消费',
					type: 2
				}, {
					title: '充值奖励',
					type: 3
				}, {
					title: '中奖奖励',
					type: 6
				}, {
					title: '推荐用户',
					type: 5
				}, {
					title: '任务奖励',
					type: 7
				}],
				list: [],
				curPage: 1,
				pageSize: 20,
				balanceInfo: {},
				type: '',
				isload: false,
				typeTitle: ''
			}
		},
		created() {
			this.type = this.$route.query.type
			if(this.$route.query.type == 3) {
				this.twoIndex = 2
				this.typeTitle = '充值奖励'
			} else if(this.$route.query.type == 2) {
				this.twoIndex = 1
				this.typeTitle = '消费'
			} else if(this.$route.query.type == 6) {
				this.twoIndex = 3
				this.typeTitle = '中奖奖励'
			} else if(this.$route.query.type == 5) {
				this.twoIndex = 4
				this.typeTitle = '推荐用户奖励'
			} else if(this.$route.query.type == 7) {
				this.twoIndex = 5
				this.typeTitle = '任务奖励'
			} else if(this.$route.query.type == 1) {
				this.typeTitle = '全部列表'
			}

			this.getMyPointsList()
		},
		mounted() {
			this.InitScroll()
		},
		methods: {
			getMyPointsList(type) {

				var _this = this;
				_this.$http.get(_this.url.user.getMyPointsList, {
					params: {
						userId: localStorage.getItem('userId'),
						type: _this.type,
						curPage: _this.curPage,
						pageSize: _this.pageSize
					}
				}).then((res) => {
					if(res.data.status == '00000000') {
						_this.balanceInfo = res.data.data
						if(res.data.data.pageBean.list.length > 0) {
							_this.list = _this.list.concat(res.data.data.pageBean.list)
							if(_this.isload) {
								_this.show = true;
								_this.showNo = false;
							}
						} else {
							if(_this.isload) {
								_this.show = false;
								_this.showNo = true;
							}
						}
					}
				})
			},
			toDetail(id) {
				this.$router.push({
					name: 'creditrewarddetail',
					query: {
						id: id
					}
				})
			},
			twoChange(index, item) {
				var _this = this
				_this.twoIndex = index
				_this.type = item.type
				_this.typeTitle = item.title
				_this.$router.replace({
					query: _this.merge(_this.$route.query, {
						'type': item.type
					})
				})
				_this.show8 = false;
				_this.list = [];

				_this.getMyPointsList()
			},
			lookAll() {
				this.type = 1
				this.twoIndex = 0
				this.typeTitle = '全部列表'
				this.$router.replace({
					query: this.merge(this.$route.query, {
						'type': 1
					})
				})
				this.list = []
				this.getMyPointsList()
			},
			InitScroll() {
				this.$nextTick(() => {
					if(!this.scroll) {
						this.scroll = new BScroll(this.$refs.wrapper, {
							click: true,
							scrollY: true,
							pullUpLoad: {
								threshold: -50
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
				_this.curPage++
					_this.isload = true
			}
		},
		components: {
			settingHeader,
			Loading,
			Nomore,
			noData
		}
	}
</script>

<style lang="less">
	.position-vertical-demo {
		background: white;
		.card-demo-flex {
			display: flex;
			align-items: center;
		}
		.twoClass {
			display: flex;
			flex-wrap: wrap;
			padding: 0.2rem 0;
			.type-item {
				width: 25%;
				padding: 0.08rem 0.25rem;
				text-align: center;
				box-sizing: border-box;
				span {
					display: inline-block;
					width: 100%;
					height: 0.66rem;
					line-height: 0.66rem;
					background: rgba(245, 246, 250, 1);
					border-radius: 2px;
					font-size: 0.24rem;
					color: #1A2642;
				}
				.twoActive {
					background: #336FFF;
					color: white;
				}
			}
		}
	}
	
	.reward-box {
		height: 100%;
		font-family: PingFangSC-Medium;
		background-color: white;
		.h {
			height: 100%;
			position: relative;
			.wrapper {
				position: absolute;
				top: 2.87rem;
				bottom: 0;
				width: 100%;
				overflow: hidden;
			}
			.top {
				height: 2rem;
				background: url(../../../../static/member/record-bg.png) no-repeat;
				background-size: 100% 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				color: rgba(255, 255, 255, 1);
				p:nth-child(1) {
					font-size: 0.70rem;
				}
				p:nth-child(2) {
					font-size: 0.24rem;
				}
			}
			.screen-box {
				height: 0.87rem;
				line-height: 0.87rem;
				padding: 0 0.30rem;
				box-sizing: border-box;
				position: relative;
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 0.28rem;
				div {
					img {
						width: 0.20rem;
						height: 0.20rem;
						color: rgba(26, 38, 66, 1);
						margin-left: 0.13rem;
					}
				}
			}
			.screen-box:after {
				content: " ";
				position: absolute;
				left: 0;
				bottom: 0;
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
			.list-box {
				padding: 0 0.30rem;
				ul>li {
					height: 1.46rem;
					display: flex;
					align-items: center;
					justify-content: space-between;
					position: relative;
					div {
						p:nth-child(1) {
							font-size: 0.28rem;
							color: rgba(26, 38, 66, 1);
							margin-bottom: 0.15rem;
						}
						p:nth-child(2) {
							font-size: 0.24rem;
							color: rgba(144, 162, 199, 1);
						}
					}
					.red {
						font-size: 0.32rem;
						color: rgba(242, 48, 48, 1);
					}
				}
				ul>li:after {
					content: " ";
					position: absolute;
					left: 0;
					bottom: 0;
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
		}
	}
</style>