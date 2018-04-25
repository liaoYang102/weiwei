<template>
	<section class="search">
		<settingHeader :title="title"></settingHeader>
		<search style="border-top: 0.01rem solid #D8DFF0;"></search>
		<div class="recommended-search">
			<div class="title">推荐搜索</div>
			<div class="searchList">
				<li v-for="(item, index) in searchList">{{ item}}</li>
			</div>
			<div class="clear"></div>
		</div>
	</section>
</template>


<script>
	import settingHeader from '../../components/setting_header'
	import search from './components/search'
	export default{
		data(){
			return{
				title:"店铺内搜索",
				searchList:[
					'短裤','时尚大牌','热卖推荐','男士衬衫'
				]
			}
		},
		components:{
			settingHeader, search
		}
	}
</script>

<style lang="less" scoped>
.search{
	height: 100%;
	background: #fff;
	.recommended-search{
		padding-top: 0.18rem;
		color: #90A2C7;
		font-size: 0.28rem;
		.title{
			color: #1A2642;
			font-size: 0.32rem;
			margin-bottom: 0.34rem;
			margin-left: 0.24rem;
		}
		.searchList{
			width: 93.6%;
			margin: 0 auto;
			background: #fff;
			li{
				list-style: none;
				float: left;
				width: 48.2%;
				height: 0.7rem;
				line-height: 0.7rem;
				background: #F5F6FA;
				text-align: center;
				margin-bottom: 0.2rem;
				border-radius: 0.06rem;
			}
			li:nth-child(odd){
			    margin-right: 0.24rem;
			}
		}
	}
}
	
</style>

