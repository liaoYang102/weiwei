<template>
	<div class="preview-box">
		<scoreheader :title="title"></scoreheader>
		<div class="img-box" v-for="(img,index) in imgs">
			<img v-preview="img.url" v-lazy="img.url" :alt="img.title" :key="index" preview-title-enable="true" preview-nav-enable="true">
			<div class="bottom">
				<span>{{img.title}}</span>
				<span @click="give(index)"><i :class="{'dz':img.like}" class="icon iconfont icon-zan"></i></span>
			</div>
		</div>
	</div>
</template>

<script>
	import scoreheader from '../../../components/setting_header'
	export default {
		components: {
			scoreheader
		},
		created() {

		},
		beforeRouteEnter(to, from, next) {
			next(vm => {
				vm.$store.state.page.ispreview = true
			})
		},
		beforeRouteLeave(to, from, next) {
			this.$store.state.page.ispreview = false
			next()
		},
		data() {
			return {
				title: '图册',
				imgs: [{
						url: 'http://covteam.u.qiniudn.com/ka2.jpg',
						title: 'pic1',
						like: false
					},
					{
						url: 'http://covteam.u.qiniudn.com/poster.png',
						title: 'pic2',
						like: false
					}, {
						url: 'http://covteam.u.qiniudn.com/ka2.jpg',
						title: 'pic1',
						like: false
					},
					{
						url: 'http://covteam.u.qiniudn.com/poster.png',
						title: 'pic2',
						like: false
					},
					{
						url: 'http://covteam.u.qiniudn.com/ka2.jpg',
						title: 'pic1',
						like: false
					},
					{
						url: 'http://covteam.u.qiniudn.com/poster.png',
						title: 'pic2',
						like: false
					},
					{
						url: 'http://covteam.u.qiniudn.com/ka2.jpg',
						title: 'pic1',
						like: false
					},
					{
						url: 'http://covteam.u.qiniudn.com/poster.png',
						title: 'pic2',
						like: false
					}
				]
			}
		},
		methods: {
			give(index) {
				this.imgs[index].like = !this.imgs[index].like
			}
		}
	}
</script>

<style lang="less">
	.preview-box {
		height: 100%;
		text-align: center;
		.img-box {
			position: relative;
			margin-bottom: 0.2rem;
			.bottom {
				position: absolute;
				left: 0;
				bottom: 0;
				width: 100%;
				height: 0.66rem;
				background-color: rgba(53, 53, 53, 0.6);
				color: white;
				padding: 0 11px;
				display: flex;
				align-items: center;
				justify-content: space-between;
				box-sizing: border-box;
				.dz {
					color: #ffef10;
				}
			}
		}
		img {
			width: 100%;
			height: auto;
			display: block;
		}
	}
</style>