<template>
	<div class="qrcode-box">
		<settingHeader :title="title"></settingHeader>
		<!--有赚钱码-->
		<div v-if="grade>=1">
			<div class="bg">
				<p class="title">我的赚钱码</p>
				<div class="b-w">
					<!--<img class="code" src="../../../assets/images/lock/qcode.png" />-->
					<qrcode :value="qrcodeVal" :size="width" type="img" class="qrcode"></qrcode>
					<div class="bottom">
						<img :src="images" alt="" />
						<div>
							<p>{{userInfo.nickname}}</p>
							<p>{{userInfo.mobile}}</p>
						</div>
					</div>
				</div>
			</div>
			<div class="b-y">
				<div class="tip-box">
					<div class="title">如何赚钱?</div>
					<div class="text-box">
						<div class="item">
							<div>第一步：</div>
							<div>转发商品链接或商品图片给微信好友；</div>
						</div>
						<div class="item">
							<div>第二步：</div>
							<div>从您转发的链接或图片进入商城的好友，系统将自动锁定成为您的客户，他们在微信商城中购买任何商品，您都可以获得CGC通用积分；</div>
						</div>
						<div class="item">
							<div>第三步：</div>
							<div>您可以在创业管理中心查看【我的团队】和【CGC通用积分明细】，CGC通用积分抵现金在CGC智慧产业联盟任何实体企业或彩融商城通用。</div>
						</div>
					</div>
					<div class="text-box1">
						<div class="item">
							<div>说明：</div>
							<div>分享后会带有独有的推荐码，您的好友访问之后买系统会自动检测并记录客户关系。如果您的好友已被其他人抢先发展成了客户，他就不能成为您的客户，以最早发展成为客户为准</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--未获得赚钱码-->
		<div class="bg-w" v-else>
			<div class="img-box">
				<img src="../../../assets/images/member/IMG_3708@2x.png" />
			</div>
			<div class="middle">
				<p>暂未满足条件</p>
				<p>专享3大权益 每月预计可赚2000+</p>
				<div @click="$router.push({path:'/member/purse/hasqrcode'})">
					查看条件 <i class="icon iconfont icon-arrow-right"></i>
				</div>
			</div>
			<div class="bottom">
				<div class="title">
					权益一 · 每月优惠券
				</div>
				<div class="bg-y">
					<div class="one">
						<span>120</span><span>元</span>
					</div>
					<div class="two">
						<p>威伐光体验卷</p>
						<p>全国通用</p>
					</div>
					<div class="three">
						<i></i>
						<div>领取礼卷</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { Qrcode } from 'vux'
	import settingHeader from '../../../components/setting_header'
	export default {
		data() {
			return {
				title: '我的二维码',
				grade: 1,
				width: '',
				userInfo: {},
				images:''
			}
		},
		created() {
			this.getUserInfo()
			this.qrcodeVal = 'http://192.168.3.145:8080/#/user/reg?parentId=' + localStorage.getItem('userId')
			this.width = Number(document.body.clientWidth * 0.6773333333333333)
		},
		mounted() {},
		methods: {
			getUserInfo() {
				var _this = this
				//获取用户信息
				_this.$http.get(_this.url.user.getBasicInfo, {
					params: {
						userId: localStorage['userId']
					}
				}).then((res) => {
					if(res.data.status == "00000000") {
						_this.userInfo = res.data.data
						if(_this.userInfo.avatar.original) {
							_this.images = _this.userInfo.avatar.original
						}
					}
				})
			},
		},
		components: {
			settingHeader,
			Qrcode
		}
	}
</script>

<style lang="less">
	.qrcode-box {
		height: 100%;
		font-family: PingFangSC-Medium;
		.qrcode {
			text-align: center;
		}
		/*2*/
		.bg-w {
			height: 100%;
			background: white;
			position: relative;
			.img-box {
				height: 3.75rem;
				position: relative;
				img {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					width: -webkit-fill-available;
					height: auto;
				}
			}
			.middle {
				font-family: PingFangSC-Medium;
				color: rgba(26, 38, 66, 1);
				text-align: center;
				padding: 0.23rem;
				p:nth-child(1) {
					font-size: 0.36rem;
					margin-bottom: 0.11rem;
				}
				p:nth-child(2) {
					font-size: 0.28rem;
				}
				div {
					width: 6rem;
					height: 0.9rem;
					line-height: 0.9rem;
					text-align: center;
					margin: 0.67rem auto;
					background: linear-gradient(90deg, rgba(94, 195, 255, 1), rgba(16, 111, 227, 1));
					border-radius: 45px;
					color: white;
				}
			}
			.bottom {
				font-family: PingFangSC-Regular;
				padding: 0 0.46rem;
				.title {
					font-size: 0.32rem;
					color: rgba(26, 38, 66, 1);
				}
				.bg-y {
					width: 100%;
					height: 1rem;
					margin-top: 0.31rem;
					background: rgba(216, 223, 240, 1);
					border-radius: 6px;
					padding: 0 0.24rem;
					display: flex;
					align-items: center;
					font-family: PingFangSC-Regular;
					color: rgba(26, 38, 66, 1);
					box-sizing: border-box;
					.one {
						padding-right: 0.24rem;
						border-right: 1px dashed #1A2642;
						span:nth-child(1) {
							font-size: 0.48rem;
						}
						span:nth-child(2) {
							font-size: 0.20rem;
						}
					}
					.two {
						padding: 0 0.24rem;
						color: rgba(26, 38, 66, 1);
						p:nth-child(1) {
							font-size: 0.28rem;
							font-family: PingFangSC-Medium;
						}
						p:nth-child(2) {
							font-size: 0.24rem;
							font-family: PingFangSC-Regular;
						}
					}
					.three {
						flex: 1;
						div {
							width: 1.34rem;
							height: 0.46rem;
							line-height: 0.46rem;
							text-align: center;
							color: white;
							background: rgba(26, 38, 66, 1);
							border-radius: 23px;
							float: right;
							padding: 0.05rem 0.19rem;
						}
					}
				}
			}
		}
		.bg-w:before {
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
		/*1*/
		.b-y {
			padding: 0 0.44rem 2.56rem 0.44rem;
			background: #ff7e09;
			.tip-box {
				.title {
					height: 0.75rem;
					font-size: 0.30rem;
					font-family: PingFangSC-Medium;
					color: rgba(255, 255, 255, 1);
					position: relative;
				}
				.text-box,
				.text-box1 {
					padding: 0.18rem 0.18rem 0.34rem 0.18rem;
					font-size: 0.28rem;
					font-family: PingFangSC-Regular;
					color: rgba(255, 255, 255, 1);
					position: relative;
					.item {
						display: flex;
						div:nth-child(1) {
							width: 1.2rem;
						}
						div:nth-child(2) {
							flex: 1;
						}
					}
					.item:nth-child(2) {
						margin: 0.25rem 0;
					}
				}
				.title:after,
				.text-box:after {
					content: " ";
					position: absolute;
					left: 0;
					bottom: 0;
					right: 0;
					height: 1px;
					border-top: 1px solid white;
					color: #D9D9D9;
					-webkit-transform-origin: 0 0;
					transform-origin: 0 0;
					-webkit-transform: scaleY(0.5);
					transform: scaleY(0.5);
					left: 0px;
				}
			}
		}
		.bg {
			padding: 60px 0.44rem 1rem 0.44rem;
			box-sizing: border-box;
			background: url(../../../assets/images/member/qconde-bg.png) no-repeat;
			background-size: 100%;
			.title {
				font-size: 0.36rem;
				color: rgba(26, 38, 66, 1);
				margin: 1rem 0;
			}
			.b-w {
				width: 5.78rem;
				border-radius: 5px;
				background-color: white;
				margin: 0 auto;
				padding: 0.29rem;
				.code {
					width: 100%;
					height: auto;
				}
				.bottom {
					display: flex;
					align-items: center;
					margin-top: 0.29rem;
					position: relative;
					padding: 0.32rem 0;
					img {
						width: 1rem;
						height: 1rem;
						margin-right: 0.22rem;
						border-radius: 50%;
					}
					div {
						font-family: PingFangSC-Regular;
						p:nth-child(1) {
							font-size: 0.32rem;
							color: rgba(26, 38, 66, 1);
						}
						p:nth-child(2) {
							font-size: 0.28rem;
							color: rgba(115, 134, 173, 1);
						}
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
		}
	}
</style>