<template>
	<section class="search">
		<settingHeader :title="title"></settingHeader>
		<div class="searchBox">
			<div class="searchInput">
				<img src="../../assets/images/shop/search.png">
				<input type="text" placeholder="搜索商品" @click="showCanel" ref="search" @focus="showCanel">
			</div>
			<p class="canel" v-if="canel == true" @click="back">取消</p>
			<div class="clear"></div>
		</div>
		<div class="recommended-search">
			<div class="searchList">
				<li v-for="(item, index) in searchList" @click="goProduct">{{ item}}</li>
			</div>
			<div class="clear"></div>
		</div>
	</section>
</template>


<script>
	import settingHeader from '../../components/setting_header'
	export default{
		data(){
			return{
				title:"店铺内搜索",
				canel: false,
				searchList:[
					'短裤','时尚大牌','热卖推荐','男士衬衫'
				]
			}
		},
		components:{
			settingHeader
		},
		mounted() {
			this.$refs.search.focus()
			console.log('---',this.$refs.search)
		},
		methods:{
			goProduct(){
				this.$router.push({path: '/shop/product'})
			},
			showCanel(){
				this.canel = true
			},
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>

	
</script>

<style lang="less" scoped>
.search{
	height: 100%;
	background: #fff;
	.recommended-search{
		color: #1A2642;
		font-size: 0.28rem;
		.searchList{
			margin: 0;
			background: #fff;
			height: 0.83rem;
			margin-left: 0.26rem;
			li{
				width: 100%;
				list-style: none;
				line-height: 0.83rem;
				border-bottom: 1px solid #DEDCDC;
			}
		}
	}
}

.searchBox{
	width: 100%;
	background: #fff;
	padding-bottom: 0.14rem;
	border-top: 0.01rem solid #D8DFF0;
	border-bottom: 0.01rem solid #D8DFF0;
	.searchInput{
		position: relative;
		width: 80%;
		margin: 0;
		margin-left: 0.29rem;
		padding-top: 0.14rem;
		float: left;
		img{
			position: absolute;
			width: 5%;
			top: 0.28rem;
			left: 0.26rem;
		}
		input{
			width: 100%;
			background: #E4EBFB;
			border-radius: 2px;
			color: #1A2642;
			padding: 0.14rem 0.1rem 0.12rem 0.78rem;
			box-sizing: border-box;
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
	.canel{
		float: left;
		color: #1A2642;
		font-size: 0.24rem;
		text-align: center;
		margin-left: 0.33rem;
		margin-top: 0.3rem;
	}
}
</style>

