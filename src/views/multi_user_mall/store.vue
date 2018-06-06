<template>
	<section class='store'>
		<div class="shop">
			<img :src="logo" alt="">
			<div>
				<p class='shop-name'>{{pinfo.name}}</p>
				<p class='shop-size' v-if="pinfo.isAlliance == 1">{{pinfo.allianceConcern}}关注</p>
				<p class='shop-size' v-if="pinfo.isChains == 1">{{pinfo.chainsConcern}}关注</p>
			</div>
		</div>
		<div class="select">
			<group>
				<cell title="店铺号" :value="pinfo.number" :border-intent="false"></cell>
				<cell title="开店时间" :value="pinfo.joinTime" :border-intent="false"></cell>
				<cell title="图册" :border-intent="false" is-link @click.native="isLook"></cell>
			</group>
			<group class="center">
				<cell title="店铺二维码" :border-intent="false" is-link class="code" @click.native="toStoreQc(pinfo)" @click.stop="">
					<img src="../../assets/images/multi_user_mall/qrcode.png" alt="">
				</cell>
				<cell title="店铺名" :value="pinfo.name" :border-intent="false"></cell>
				<cell title="服务电话" :value="pinfo.tel" :border-intent="false"></cell>
			</group>
			<!-- <group>
		      <cell title="退款说明" value="选填" :border-intent="false"></cell>
		    </group> -->
			<group style="margin:0.2rem 0">
				<div @click="navigation(pinfo.lat,pinfo.lng,pinfo.address)">
					<cell title="店铺地址" :value="address" :border-intent="false" is-link></cell>
				</div>
			</group>
		</div>
	</section>
</template>

<script>
	import { PopupHeader } from 'vux'
	import { Radio } from 'vux'
	export default {
		data() {
			return {
				title: "店铺信息",
				show1: false,
				// timer: '',
				address: '',
				pinfo: {},
				logo: ''
			}
		},
		components: {
			PopupHeader,
			Radio
		},
		created() {
			this.pinfo = JSON.parse(localStorage['storeInfo'])
			if(this.pinfo.area) {
				this.address = this.pinfo.area.province + this.pinfo.area.city
			}
			if(this.pinfo.logo) {
				this.logo = this.pinfo.logo.original
			}
		},
		methods: {
			toStoreQc(pinfo) {
				var _this = this
				if(pinfo.isAlliance == 1) {
					var type = '联盟企业'
				} else if(pinfo.isChains == 1) {
					var type = '联营企业'
				} else {
					var type = '其他'
				}
				_this.$router.push({
					path: '/multi_user_mall/store_qrcode',
					query: {
						enterpriseId: _this.$route.query.id,
						title: pinfo.enterpriseName,
						type: type
					}
				})
				return false
			},
			isLook() {
				this.$router.push({
					path: '/member/setting/preview'
				})
			},
			time() {
				// var nowreduce = new Date();
				// var endreduce = new Date(Date.parse("2018/4/24 18:00:00"));
				// var leftTimereduce = parseInt((endreduce-nowreduce)/1000);
				// var day = Math.floor((leftTimereduce)/3600/24);
				// var hour = Math.floor((leftTimereduce-day*3600*24)/3600);
				// var minute = Math.floor((leftTimereduce-day*3600*24-hour*60*60)/60);
				// this.timer = day + '天' + hour + '时' + minute + '分';
				// console.log(this.timer);
				// if(day==0&&hour==0&&minute==0){
				// 	window.clearInterval(int1);
				// }
			},
			navigation(lat, lng, address) {
				var marker = new AMap.Marker({
					position: [lng, lat]
				})

				marker.markOnAMAP({
					position: marker.getPosition(),
					name: address //name属性在移动端有效
				})
			},
		}
	}
</script>

<style lang="less" scoped>
	.store {
		background-color: #F5F8F9;
		.shop {
			box-sizing: border-box;
			background-color: #fff;
			margin-bottom: 0.2rem;
			padding: 15px 15px;
			display: flex;
			align-items: center;
			img {
				width: 1rem;
				height: 1rem;
				margin-right: 0.12rem;
			}
			.shop-name {
				height: 0.4rem;
				font-size: 0.28rem;
				font-family: PingFangSC-Medium;
				color: rgba(26, 38, 66, 1);
				line-height: 0.4rem;
				font-weight: 700;
			}
			.shop-size {
				height: 0.33rem;
				font-size: 0.24rem;
				font-family: PingFangSC-Regular;
				color: rgba(144, 162, 199, 1);
				line-height: 0.33rem;
			}
		}
	}
</style>
<style lang="less">
	.store {
		.vux-label {
			height: 0.4rem;
			font-size: 0.28rem;
			font-family: PingFangSC-Regular;
			color: rgba(26, 38, 66, 1);
			line-height: 0.4rem;
		}
		.weui-cell__ft {
			height: 0.4rem;
			font-size: 0.28rem;
			font-family: PingFangSC-Regular;
			color: #1A2642;
			line-height: 0.4rem;
		}
		.weui-cell_access .weui-cell__ft:after {
			border-color: #1A2642;
		}
		.weui-cells {
			margin-top: 0;
		}
		.weui-cell {
			padding: 15px 15px;
		}
		.center {
			margin-top: 0.2rem;
			position: relative;
			.weui-cell__ft {
				color: #1A2642;
			}
			.code {
				.weui-cell__ft {
					padding-right: 30px;
				}
			}
			img {
				width: 0.36rem;
				height: 0.36rem;
			}
		}
	}
</style>