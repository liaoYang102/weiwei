<template>
	<div class="about-box">
		<scoreheader :title="title"></scoreheader>
		<div class="about-tip">
			<div class="title" style="margin-top: 0;">法律声明</div>
			<p>1、JJR家具招聘网(中国家具招聘网)拥有www.jjrw.com所有内容及资源的版权，受国家知识产权保护，未经JJR家具招聘网(中国家具招聘网)的许可，任何单位或个人不得以任何方式，将网站内容复制、转载、引用。否则本公司将追究其法律责任。申请使用JJR家具招聘网(中国家具招聘网)内容的许可必须得到特别书面批准；2、JJR家具招聘网(中国家具招聘网)并无随时监视会员动态，但保留对其实施实时监视的权利。网站上会员或他们的信息均由会员自行提供，会员依法应对其提供的任何信息承担全部责任。JJR家具招聘网(中国家具招聘网)对此相关信息的准确性、完整性、合法性或真实性均不承担任何责任。此外，JJR家具招聘网(中国家具招聘网)对任何使用或提供本网站信息的商业活动及其风险不承担任何责任。</p>
			<div class="title">用户协议</div>
			<div class="twoTitle">一、用户服务基本条款</div>
			<p>1、JJR家具招聘网(中国家具招聘网)拥有www.jjrw.com所有内容及资源的版权，受国家知识产权保护，未经JJR家具招聘网(中国家具招聘网)的许可，</p>
		</div>
	</div>
</template>

<script>
	import scoreheader from '../../../components/setting_header'
	export default {
		components: {
			scoreheader
		},
		data() {
			return {
				title: '关于我们'
			}
		},
		methods: {

		}
	}
</script>

<style lang="less" scoped>
	.about-box {
		height: 100%;
		background: white;
		.about-tip {
			/*background: #F5F6FA;*/
			padding: 0.27rem;
			font-family: PingFangSC-Medium;
			position: relative;
			.title {
				font-size: 0.32rem;
				margin: 0.27rem 0;
				color: rgba(26, 38, 66, 1);
				text-align: center;
			}
			p {
				font-size: 0.28rem;
				color: rgba(26, 38, 66, 1);
			}
			.twoTitle {
				font-size: 0.28rem;
				color: rgba(51, 111, 255, 1);
				margin-bottom: 0.1rem;
			}
		}
		.about-tip:before {
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
</style>