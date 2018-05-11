<template>
	<section v-model="theme">
		<div class="content">
			<div class="theme-goods">
				<div class="theme-goods-top">
					<div class="goods-left" @click="goThemegoods" :class="{'changeTheme' : theme == '中国臻品'}">
						<div class="text-img"><img :src="imgSrc"></div>
						<div class="goods-border"></div>
						<div>{{ list.title}}</div>
						<div class="img"><img src="../../../assets/images/shop/12.png"></div>
					</div>
					<div class="goods-right">
						<li class="goods-details" v-for="( item,index) in list.dataList" @click="goShopdetails">
							<span>{{ item.goodsname}}</span><br>
							<div class="gray" v-for="(tag) in item.tag">{{ tag.name}}</div>
							<div class="right-img">
								<img src="../../../assets/images/shop/4.png">
							</div>
						</li>
					</div>
				</div>

				<div class="goods" v-if="theme == '海外购'">
					<li class="li-goods" @click="goProduct" v-for="(item, index) in 2" >
						<div class="li-left">
							<span>韩国护肤品</span>
							<div class="li-gray">满100减30</div>
						</div>
						<div class="li-right">
							<img src="../../../assets/images/shop/6.png">
						</div>
					</li>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		props:{
			theme: String
		},
		data(){
			return {
				list: {
					title: '全球好货云集', 
					dataList:[
						{ goodsname:'COACH女士贝壳包', tag: [ { name:'时尚大牌'}, { name: '方便百搭'}]},
						{ goodsname:'COACH女士贝壳包', tag: [ { name:'时尚大牌'}, { name: '方便百搭'}]}
					],
				},
				imgSrc: './static/shop/purchase.png'
			}
		},
		mounted:function(){
        	this.onList()
    	},	
		methods:{
			onList(){
				let vm = this;
				if(vm.theme == "海外购"){
					vm.list = {
						title: '全球好货云集', 
						dataList:[
							{ goodsname:'COACH女士贝壳包', tag: [ { name:'时尚大牌'}, { name: '方便百搭'}]},
							{ goodsname:'COACH女士贝壳包', tag: [ { name:'时尚大牌'}, { name: '方便百搭'}]}
						]
					}
					vm.imgSrc = './static/shop/purchase.png'
				} else {
					vm.list = {
						title: '好东西,中国造', 
						dataList:[
							{ goodsname:'COACH女士贝壳包', tag: [ { name:'时尚大牌'}, { name: '方便百搭'}]},
							{ goodsname:'COACH女士贝壳包', tag: [ { name:'时尚大牌'}, { name: '方便百搭'}]}
						]
					}
					vm.imgSrc = './static/shop/best.png'
				}
				console.log('---', vm.theme)
			},
			goThemegoods(){
				this.$router.push({ path: '/shop/theme_goods'})
			},
			goShopdetails(){
				this.$router.push({ path: '/shop/shop_details'})
			},
			goProduct(){
				this.$router.push({ path: '/shop/product'})
			}
		}
	}
</script>

<style lang="less" scoped>
li{
	list-style: none;
	background: #fff;
	color: #1A2642;
	font-size: 0.28rem;
}
.li-goods:nth-child(1){
	border-right: 1px solid #D8DFF0;
}
.goods-details:nth-child(1){
	border-bottom: 0.01rem solid #D8DFF0;
}
.content{
	padding: 0 0.19rem 0.01rem 0.21rem;
	background: #f5f6fa;
	margin-bottom: 0.2rem;
	.theme-goods{
		font-size: 0.22rem;
		color: #FFFFFF;
		background: #FFFFFF;
		box-shadow: 0 0.02rem 0.08rem 0 rgba(56,137,255,0.10);
		.theme-goods-top{
			display: flex;
			border-bottom: 0.02rem solid #D8DFF0;
			.goods-left{
				width: 2.51rem;
				padding-left: 0.33rem;
				padding-top: 0.27rem;
				background: url('../../../assets/images/shop/Group6.png') no-repeat;
				.text-img{
					/*width: 25%;*/
					img{
						width: auto;
						height: 0.31rem;
					}
				}
				.goods-border{
					width: 0.26rem;
					height: 0.03rem;
					background: #FFFFFF;
					margin-top: 0.18rem;
					margin-bottom: 0.15rem;
				}
				.img{
					width: 87%;
					margin-top: 0.15rem;
					margin-bottom: 0.22rem;
					img{
						width: 100%;
						vertical-align:middle;
					}
				}
			}
			.changeTheme{
				background: url('../../../assets/images/shop/Group7.png') no-repeat;
			}
			.goods-right{
				flex: 1;
				.goods-details{
					position: relative;
				    padding: 0.22rem 0.27rem 0.72rem 0rem;
				    margin-left: 0.23rem;
					.gray{
						font-size: 0.22rem;
						color: #90A2C7;
					}
					.right-img{
						position: absolute;
						top: 0.3rem;
						left: 2.23rem;
						width: 37.5%;
						img{
							width: 100%;
						}
					}
				}
			}
		}
		.goods{
			margin-top: 0.01rem;
			overflow: hidden;
			.li-goods{
				width: 49.5%;
				float: left;
				.li-left{
					float: left;
					margin-top: 0.36rem;
					margin-left: 0.3rem;
					margin-right: 0.1rem;
					.li-gray{
						font-size: 0.24rem;
						color: #90A2C7;
					}
				}
				.li-right{
					width: 42.5%;
					float: left;
					img{
						width: 100%;
					}
				}
			}
		}
	}
}
</style>