<template>
	<div class="address-box">
		<settingHeader :title="title"></settingHeader>
		<div class="wrapper" ref="wrapper">
			<div class="content">
				<div class="list" v-for="(item,index) in list">
					<div class="top">
						<div class="pro">
							<span>{{item.name}}</span>
							<span>{{item.phone}}</span>
						</div>
						<p>{{item.address}}</p>
					</div>
					<div class="bottom">
						<check-icon :value.sync="item.isdefault">设置为默认地址</check-icon>
						<div>
							<router-link to="/member/address/edit"><span>编辑</span></router-link>
							<span>删除</span>
						</div>
					</div>
				</div>
				<load-more v-if="show" tip="正在加载"></load-more>
			</div>
		</div>
		<!--<scroller lock-x height="-46">
			<div class="box2">
				<div class="list" v-for="(item,index) in list">
					<div class="top">
						<div class="pro">
							<span>{{item.name}}</span>
							<span>{{item.phone}}</span>
						</div>
						<p>{{item.address}}</p>
					</div>
					<div class="bottom">
						<check-icon :value.sync="item.isdefault">设置为默认地址</check-icon>
						<div>
							<router-link to="/member/address/edit"><span>编辑</span></router-link>
							<span>删除</span>
						</div>
					</div>
				</div>
			</div>
		</scroller>-->
		<div class="add-btn-box">
			<router-link to="/member/address/edit">
				<div class="add-btn">添加地址</div>
			</router-link>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import { Scroller, CheckIcon, XButton } from 'vux'
	import settingHeader from '../../../components/setting_header'
	export default {
		data() {
			return {
				title: '管理收货地址',
				demo1: false,
				show: false,
				list: [{
					name: '张广',
					phone: '18520496787',
					address: '广州市番禺区橘树北街43号',
					isdefault: true
				}, {
					name: '张广',
					phone: '18520496787',
					address: '广州市番禺区橘树北街43号',
					isdefault: false
				}, {
					name: '张广',
					phone: '18520496787',
					address: '广州市番禺区橘树北街43号',
					isdefault: false
				}, {
					name: '张广',
					phone: '18520496787',
					address: '广州市番禺区橘树北街43号',
					isdefault: false
				}, {
					name: '张广',
					phone: '18520496787',
					address: '广州市番禺区橘树北街43号',
					isdefault: false
				}, {
					name: '张广',
					phone: '18520496787',
					address: '广州市番禺区橘树北街43号',
					isdefault: false
				}, {
					name: '张广',
					phone: '18520496787',
					address: '广州市番禺区橘树北街43号',
					isdefault: false
				}]
			}
		},
		created() {
		},
		mounted: function() {
			this.InitScroll() //初始化下拉组件
		},
		methods: {
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
				this.list = this.list.concat(this.list)
				setTimeout(function() {
					this.show = false;
				}, 3000)
			}
		},
		components: {
			settingHeader,
			CheckIcon,
			XButton,
			Scroller
		}
	}
</script>

<style lang="less" scoped>
	.address-box {
		background: #F5F6FA;
		padding-bottom: 1rem;
		.box2 {
			padding-top: 0.21rem;
		}
		.wrapper {
			height: 10.5rem;
			overflow: hidden;
			padding-bottom: 1rem;
			.content{
				padding-top: 0.2rem;
			}
		}
		.list {
			box-sizing: border-box;
			margin-bottom: 0.21rem;
			background: white;
			.top {
				padding: 0.27rem 0.25rem;
				.pro {
					display: flex;
					justify-content: space-between;
					font-family: PingFangSC-Regular;
					font-size: 0.28rem;
					color: #1A2642;
					letter-spacing: 0;
					margin-bottom: 0.11rem;
				}
				p {
					font-family: PingFangSC-Regular;
					font-size: 0.28rem;
					color: #1A2642;
					letter-spacing: 0;
				}
			}
			.bottom {
				height: 0.88rem;
				padding: 0.06rem 0.25rem;
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 0.24rem;
				position: relative;
				.weui-icon-success {
					color: dodgerblue!important;
				}
				span {
					display: inline-block;
					width: 1rem;
					height: 0.5rem;
					line-height: 0.5rem;
					border: 1px solid #D8DFF0;
					border-radius: 4px;
					margin-left: 0.18rem;
					text-align: center;
					box-sizing: border-box;
				}
			}
			.bottom:before {
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
		.add-btn-box {
			width: 100%;
			background: white;
			position: fixed;
			bottom: 0%;
			box-sizing: border-box;
			.add-btn {
				height: 0.88rem;
				line-height: 0.88rem;
				background: rgba(51, 111, 255, 1);
				font-size: 0.28rem;
				text-align: center;
				font-family: MicrosoftYaHei;
				color: rgba(255, 255, 255, 1);
			}
		}
	}
</style>