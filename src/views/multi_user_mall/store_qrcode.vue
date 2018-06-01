<template>
	<section class="qrcode">
		<settingHeader :title="title"></settingHeader>
		<div class="blue">
			<div class="content">
				<div class="store">
					<div class="name">{{title}}</div>
					<div>{{type}}</div>
					<div class="mt">
						<qrcode :value="storeUrl" :size="250" type="img"></qrcode>
					</div>
					<div class="btn">扫码二维码进入店铺</div>
				</div>
			</div>
		</div>
		<div class="clear"></div>
	</section>
</template>

<script>
	import settingHeader from '../../components/setting_header'
	import { Qrcode } from 'vux'
	export default {
		components: {
			settingHeader,Qrcode
		},
		data(){
			return {
				title:'',
				type:''
			}
		},
		created(){
			this.title = this.mainApp.getCs('title')
			this.type = this.mainApp.getCs('type')
			this.storeUrl = 'http://192.168.3.145:8080/#/multi_user_mall?id=' + this.mainApp.getCs('allianceId')
		},
		data(){
			return {
				title: '我的店铺'
			}
		}
	}
</script>

<style lang="less" scoped>
	.qrcode{
		background: #336FFF;
		height: 100%;
		.blue{
			padding-top: 1.19rem;
			.content{
				width: 88.8%;
				background: #fff;
				margin: 0 auto;
				padding-top: 0.72rem;
				border-radius: 0.08rem;
				.store{
					width: 5.06rem;
					margin: auto;
					color: #1A2642;
					font-size: 0.28rem;
					padding-bottom: 0.91rem;
					text-align: center;
					.name{
						font-size: 0.44rem;
						margin-bottom: 0.02rem;
					}
					.mt{
						margin-top: 0.35rem;
					}
					.btn{
						margin-top: 0.72rem;
						font-size: 0.24rem;
						color: #90A2C7;
						text-align: center;
					}
				}
			}
		}
	}
</style>