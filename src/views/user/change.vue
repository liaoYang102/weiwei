<template>
	<div>
		<div class="header">
			<div class="logo">
				<img src="../../assets/images/user/change.png" alt="">
			</div>
			<p class="tit">重置密码</p>
		</div>

		<div class="content">
			<div class="inputwrap">
				<div class="input-row">
					<i class="iconfont icon-shouji"></i>
					<input class="inputItem" type="text" placeholder="输入手机号" id="phonum">
				</div>
				<div class="input-row">
					<i class="iconfont icon-buchongiconsvg02"></i>
					<input type="password" placeholder="输入验证码" id="pass">
					<p class="send_yzm">获取验证码</p>
				</div>
				<div class="input-row">
					<i class="iconfont icon-suo"></i>
					<input class="inputItem" type="text" placeholder="输入密码">
				</div>
				<div class="input-row">
					<i class="iconfont icon-suo"></i>
					<input class="inputItem" type="text" placeholder="确认密码">
				</div>
			</div>
			<p class="sm">登录密码由6-20位数字和字母组成</p>
			<div class="reg-btn">提交</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style lang="less" scoped>
	.header {
		width: 100%;
		height: 4.8rem;
		color: #f00;
		background-size: 100% 100%;
		overflow: hidden;
		.logo {
			width: 1.75rem;
			margin: 0.6rem auto 0;
			img {
				width: 100%;
			}
		}
		.tit {
			font-size: 0.4rem;
			color: rgb(135, 186, 255);
			text-align: center;
			margin-top: .1rem;
		}
		.xian {
			width: 100%;
			height: 2.8rem;
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
	
	.content {
		width: 76%;
		margin: .5rem auto;
		.sm {
			color: rgb(119, 158, 248);
			margin-top: -10px;
			margin-bottom: 0.3rem;
			font-size: 14px;
		}
		.inputwrap {
			position: relative;
			.input-row {
				position: relative;
				margin-bottom: .3rem;
				i {
					position: absolute;
					top: 0.13rem;
					left: 0.2rem;
					color: #497be5;
					font-size: 0.35rem;
				}
				.icon-yanjing {
					position: absolute;
					top: 0.12rem;
					right: 0.25rem;
					color: #497be5;
					font-size: 0.4rem;
				}
				.inputItem {
					width: 85%;
					border: 1px solid #82b1ff;
					border-radius: 20px;
					padding: 0.05rem 0 0.05rem 0.8rem;
					color: #9cb7f2;
					font-size: 0.28rem;
					height: 0.66rem;
					background: #faffbd;
				}
				#pass {
					width: 44%;
					border: 1px solid #82b1ff;
					border-radius: 20px;
					padding: 0.05rem 0 0.05rem 0.8rem;
					color: #9cb7f2;
					font-size: 0.28rem;
					height: 0.66rem;
				}
				.send_yzm {
					width: 37%;
					height: 0.66rem;
					line-height: 0.66rem;
					border: 1px solid #82b1ff;
					padding: 0.05rem 0 0.05rem 0;
					border-radius: 20px;
					text-align: center;
					color: #9cb7f2;
					background: #eaf5ff;
					font-size: 0.28rem;
					float: right;
				}
			}
			.fogotpass {
				color: #6a96f3;
				font-size: 0.28rem;
				text-align: right;
				position: relative;
				top: -0.2rem;
			}
		}
		.reg-btn {
			width: 100%;
			background-image: linear-gradient(30deg, #246bfe, #5b90fe);
			height: 0.76rem;
			line-height: 0.76rem;
			text-align: center;
			box-shadow: 2px 3px 5px #c3d5fd;
			color: #fff;
			font-size: 16px;
			border-radius: 20px;
			margin-top: .2rem;
		}
		.text {
			font-size: 0.24rem;
			color: #9cb7f2;
			text-align: center;
			margin-top: .3rem;
			span {
				color: #f6573d;
				font-size: 0.24rem;
			}
		}
	}
</style>