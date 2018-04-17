<template>
<<<<<<< HEAD
    <div>
        <x-header :left-options="{backText: ''}" style="background:#fff;border-bottom: 1px solid #D8DFF0;" class="header">{{ title }}</x-header>
    </div>
=======
	<div>
		<x-header :left-options="{backText: '',preventGoBack:'true'}" style="background:#fff;" class="header" @on-click-back="goBack">{{ title }}</x-header>
	</div>
>>>>>>> 490f95ef7ab7b38f6c95f1ab0b661dac0c7043e6
</template>

<script>
	export default {
		props: {
			title: String //定义传值的类型<br>    }
		},
		methods: {
			goBack() {
				this.$store.state.page.show = true
				window.history.go(-1)
				this.$store.state.page.show = ''
			}
		}
	}
</script>
<style lang='less'>
	#app .vux-header .vux-header-left .left-arrow:before {
		border: 1px solid #222;
		border-width: 1px 0 0 1px;
	}
	
	#app .vux-header .vux-header-title {
		color: #333;
	}
	.header{
		position: fixed!important;
		top: 0;
		width: 100%;
		z-index: 1111;
	}
</style>