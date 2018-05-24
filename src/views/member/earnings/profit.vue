<template>
	<div class="profit-box">
		<settingHeader :title="title"></settingHeader>
		<div class="top">
			<div>日期</div>
			<div>收入</div>
		</div>
		<div class="wrapper" ref="wrapper" :class="{'h':isWx == false}">
			<div class="content">
				<div class="log-list">
					<ul>
						<li v-for="item in list">
							<p>{{item.date}}</p>
							<p>+ {{item.money}}</p>
						</li>
					</ul>
				</div>
				<Loading v-if="show"></Loading>
				<Nomore v-if="showNo"></Nomore>
			</div>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import { Datetime } from 'vux'
	import settingHeader from '../../../components/setting_header'
	import Loading from '../../../components/loading'
	import Nomore from '../../../components/noMore'
	export default {
		data() {
			return {
				title: '累计收益',
				show: false,
				showNo: false,
				isWx: true,
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
					},
				]
			}
		},
		created() {
			//判断是否微信端
			var ua = navigator.userAgent.toLowerCase()
			var isWeixin = ua.indexOf('micromessenger') != -1
			if(isWeixin) {
				this.isWx = true
			} else {
				this.isWx = false
			}
		},
		mounted() {
			this.InitScroll()
		},
		methods: {
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
			Nomore
		},
	}
</script>
<style lang="less">
	.profit-box {
		font-size: 0.24rem;
		.top {
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 37.5px;
			color: rgba(144, 162, 199, 1);
			position: relative;
			padding: 0 0.33rem;
			box-sizing: border-box;
			z-index: 15;
			background-color: white;
		}
		.top:before {
			content: " ";
			position: absolute;
			left: 0;
			top: 0;
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
		.wrapper {
			position: fixed;
			top: 37.5px;
			bottom: 0;
			width: 100%;
			z-index: 11;
			background-color: white;
		}
		.h {
			top: 83.5px!important;
		}
		.log-list {
			ul>li {
				height: 0.98rem;
				padding: 0 0.33rem;
				box-sizing: border-box;
				display: flex;
				align-items: center;
				justify-content: space-between;
				position: relative;
				font-size: 0.28rem;
			}
			ul>li:before {
				content: " ";
				position: absolute;
				left: 0;
				top: 0;
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
</style>