<template>
	<div class="reg">
		<div class="header">
			<div class="logo">
				<img src="../../assets/images/user/logo.png" />
			</div>
			<p class="tit">用户注册</p>
			<div class="xian">
				<img src="../../assets/images/user/xian.png" alt="" />
			</div>
		</div>
		<div class="content">
			<div class="inputItem">
				<i class="iconfont icon-shouji"></i>
				<input class="phone" type="text" placeholder="输入手机号" />
			</div>
			<div class="inputItem">
				<i class="iconfont icon-buchongiconsvg02"></i>
				<input class="code" type="" name="" id="" value="" placeholder="输入验证码" />
				<p class="code-btn">获取验证码</p>
			</div>
			<div class="inputItem">
				<i class="iconfont icon-suo"></i>
				<input class="phone" type="text" placeholder="输入密码" />
			</div>
			<div class="inputItem">
				<i class="iconfont icon-suo"></i>
				<input class="phone" type="text" placeholder="确认密码" />
			</div>
			<div class="inputItem">
				<button class="reg-btn">立即注册</button>
			</div>
			<div class="inputItem">
				<p class="text">已有账号？
					<a href="./index.php?i=7&amp;c=entry&amp;m=mx_shop&amp;do=mobile&amp;r=user.login"><span>立即登录</span></a>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'reg',
		methods: {

		}
	}
</script>

<style lang='less'>
	img {
		width: 100%;
		height: auto;
	}
	
	.header {
		width: 100%;
		height: 4.12rem;
		color: #f00;
		background: url(../../assets/images/user/h_bg.png);
		background-size: 100% 100%;
		overflow: hidden;
		position: relative;
	}
	
	.logo {
		width: 1.54rem;
		margin: 0.48rem auto 0;
	}
	
	.tit {
		font-size: 0.3rem;
		color: #fff;
		text-align: center;
		margin-top: .1rem;
	}
	
	.xian {
		width: 100%;
		height: 2.4rem;
		position: absolute;
		bottom: -23%;
	}
	
	.content {
		width: 76%;
		margin: .2rem auto;
		.inputItem {
			position: relative;
			margin-bottom: 15px;
			i {
				position: absolute;
				top: 0.1rem;
				left: 12px;
				color: #497be5;
				font-size: 0.35rem;
			}
			.phone {
				border: 1px solid #82b1ff;
				border-radius: 20px;
				color: #9cb7f2;
				font-size: 0.28rem;
				height: 0.66rem;
				width: 100%;
				padding-left: 0.8rem;
				box-sizing: border-box;
			}
			.code {
				width: 60%;
				border: 1px solid #82b1ff;
				border-radius: 20px;
				padding-left: 0.8rem;
				color: #9cb7f2;
				font-size: 0.28rem;
				height: 0.66rem;
				box-sizing: border-box;
			}
			.code-btn {
				width: 37%;
				height: 0.66rem;
				line-height: 0.66rem;
				border: 1px solid #82b1ff;
				border-radius: 20px;
				text-align: center;
				color: #9cb7f2;
				background: #eaf5ff;
				font-size: 0.28rem;
				float: right;
			}
			.reg-btn {
				width: 100%;
				background-image: linear-gradient(30deg, #246bfe, #5b90fe);
				height: 0.66rem;
				line-height: 0.66rem;
				text-align: center;
				box-shadow: 2px 3px 5px #c3d5fd;
				color: #fff;
				font-size: 16px;
				border-radius: 20px;
				margin-top: .2rem;
				border: none;
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
	}
</style>