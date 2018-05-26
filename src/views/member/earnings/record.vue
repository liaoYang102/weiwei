<template>
	<div class="record-box">
		<settingHeader :title="title"></settingHeader>
		<div class="h">
			<div class="top">
				<p>405.45</p>
				<p>累计记录</p>
			</div>
			<div class="screen-box">
				<div>
					查看全部
				</div>
				<div @click="showDate">
					<span>筛选</span><img src="../../../assets/images/index/shaixuan.png" alt="" />
				</div>
			</div>
			<div class="title-box">
				<div>{{date?date:'日期'}}</div>
				<div>收益</div>
			</div>
			<div class="wrapper" ref="wrapper">
				<div class="content">
					<div v-if="list.length>0">
						<div class="list-box">
							<ul>
								<li v-for="item in list" @click="toDetail">
									<p>{{item.date}}</p>
									<p>+{{item.money}}</p>
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
				title: '信用积分累计记录',
				show: false,
				showNo: false,
				isWx: true,
				date: '',
				list: [{
						date: '2018.05.28',
						money: '130.00'
					},
					{
						date: '2018.05.27',
						money: '130.00'
					},
					{
						date: '2018.05.26',
						money: '130.00'
					},
					{
						date: '2018.05.25',
						money: '130.00'
					},
					{
						date: '2018.05.24',
						money: '130.00'
					},
					{
						date: '2018.05.23',
						money: '130.00'
					},
					{
						date: '2018.05.22',
						money: '130.00'
					},
					{
						date: '2018.05.21',
						money: '130.00'
					},
					{
						date: '2018.05.20',
						money: '130.00'
					},
					{
						date: '2018.05.19',
						money: '130.00'
					},
					{
						date: '2018.05.18',
						money: '130.00'
					},
					{
						date: '2018.05.17',
						money: '130.00'
					},
					{
						date: '2018.05.16',
						money: '130.00'
					},
					{
						date: '2018.05.15',
						money: '130.00'
					},
					{
						date: '2018.05.14',
						money: '130.00'
					}
				]
			}
		},
		created() {
			if(this.$route.params.title){
				document.title = this.$route.params.title
			}
		},
		mounted() {
			this.InitScroll()
		},
		methods: {
			toDetail(){
				this.$router.push({
					name: 'scoreDetail',
					params:{
						title:'信用积分'
					}
				})
			},
			showDate() {
				var _this = this
				_this.$vux.datetime.show({
					cancelText: '取消',
					confirmText: '确定',
					clearText: '请选择时间',
					format: 'YYYY-MM-DD',
					value: '',
					onConfirm(val) {
						_this.date = val
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
								threshold: -50, // 负值是当上拉到超过低部 70px；正值是距离底部距离 时，                    
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
				console.log(this.list.length)
				var _this = this
				if(_this.list.length <= 25) {
					_this.show = true
					_this.showNo = false
					_this.list = _this.list.concat({
						date: '2018.05.15',
						money: '130.00'
					}, {
						date: '2018.05.14',
						money: '130.00'
					})
					setTimeout(function() {
						_this.show = false
					}, 1500)
				} else {
					_this.show = false
					_this.showNo = true
				}
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
	.record-box {
		height: 100%;
		font-family: PingFangSC-Medium;
		background-color: white;
		.h {
			height: 100%;
			position: relative;
			.wrapper {
				position: absolute;
				top: 3.44rem;
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
			.title-box {
				display: flex;
				align-items: center;
				justify-content: space-between;
				height: 0.57rem;
				color: rgba(144, 162, 199, 1);
				position: relative;
				padding: 0 0.33rem;
				box-sizing: border-box;
				z-index: 15;
				font-size: 0.24rem;
			}
			.title-box:after {
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
					height: 0.86rem;
					display: flex;
					align-items: center;
					justify-content: space-between;
					position: relative;
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