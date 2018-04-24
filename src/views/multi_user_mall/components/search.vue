<template>
	<div>
		<div class="searchBox">
			<div class="search">
				<img src="../../../assets/images/shop/search.png">
				<input type="search" placeholder="搜索商品" @click="goSearch">
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				themeTitle: '女子休闲',
				themeTitle1: '男子休闲'
			}
		},
		mounted() {
			
		},
		methods:{
			goSearch(){
				this.$router.push({ path: '/'})
			},
		}
	}
</script>

<style lang="less" scoped>
.searchBox{
	width: 100%;
	background: #fff;
	padding-bottom: 0.14rem;
	border-bottom: 0.01rem solid #D8DFF0;
	.search{
		position: relative;
		width: 92%;
		margin: 0 auto;
		padding-top: 0.14rem;
		img{
			position: absolute;
			width: 5%;
			top: 0.25rem;
			left: 0.26rem;
		}
		input{
			width: 100%;
			background: #F5F6FA;
			border-radius: 0.06rem;
			color: #fff;
			padding: 0.14rem 0.1rem 0.12rem 0.78rem;
		}
		input::-webkit-input-placeholder {
		    color: #90A2C7 !important; // WebKit browsers 
		}
		input:-moz-placeholder {
		    color: #90A2C7 !important; // Mozilla Firefox 4 to 18 
		}
		input::-moz-placeholder {
		    color: #90A2C7 !important; //Mozilla Firefox 19+ /
		}
		input:-ms-input-placeholder {
		    color: #90A2C7 !important; //Internet Explorer 10+ */
		}
	}
}
</style>