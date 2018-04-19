<template>
	<div>
		<settingHeader :title="title"></settingHeader>
	
		<img src="../../assets/images/shop/theme_banner0.png" style="width: 100%; border-top: 0.01rem solid #E1E1E1">
		<div class="theme"  id="theme">
			<tab :line-width="0" custom-bar-width="30px">
		      <tab-item selected @on-item-click="onItemClick">精选</tab-item>
		      <tab-item @on-item-click="onItemClick">食品酒水</tab-item>
		      <tab-item @on-item-click="onItemClick">经典腕表</tab-item>
		      <tab-item @on-item-click="onItemClick">炫酷墨镜</tab-item>
		      <tab-item @on-item-click="onItemClick">母婴玩</tab-item>
		      <tab-item @on-item-click="onItemClick">母婴</tab-item>
		      <tab-item @on-item-click="onItemClick">母婴</tab-item>
		      <tab-item @on-item-click="onItemClick">母婴</tab-item>
		    </tab>
		    <Swiper :imgList="imgList" class="swiper"></Swiper>

		    <div class="themeList">
		    	<div class="themeTitle">精选</div>

		    	<scroller lock-x @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" v-if='test'>
		    		<div class="theme-list">
				    	<div class="list">
				    		<li class="li" v-for="(item,index) in themeList" @click="goShopdetails">
				    			<div class="img"><img src="../../assets/images/shop/goods01.png"></div>
				    			<div class="li-text">
				    				<span>{{ item.goodsname}}...</span>
				    				<div class="gray">
				    					<span>售价: </span>
				    					<span class="red"> ￥{{ item.price}}</span>
				    					<span class="delete"> ￥{{ item.oldprice}}</span>
				    				</div>

				    				<div class="btn">
				    					<div class="package-mail">包邮</div>
				    					<div v-if="index%2 != 0" class="return">返积分</div>
				    				</div>
				    			</div>
				    		</li>
				    	</div>

		    	        <load-more tip="loading" id='loading'></load-more>
		    	    </div>
		    	</scroller>
		    </div>
		</div>
		
	</div>
</template>

<script>
import settingHeader from '../../components/setting_header'
import Swiper from './components/swiper'
	export default {
		data() {
			return {
				title: '海外购',
				imgList: [
				  'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff',
				  'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
				  'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'
				],
				test: true,
				themeList: [
					{ goodsname: 'Vivo X21 屏幕指纹版全面', price: '3598', oldprice: '4355'},
					{ goodsname: 'Vivo X21 屏幕指纹版全面', price: '3598', oldprice: '4355'},
					{ goodsname: 'Vivo X21 屏幕指纹版全面', price: '3598', oldprice: '4355'},
					{ goodsname: 'Vivo X21 屏幕指纹版全面', price: '3598', oldprice: '4355'},
					{ goodsname: 'Vivo X21 屏幕指纹版全面', price: '3598', oldprice: '4355'}
				],
				imgUrl: '../../assets/images/shop/theme_banner0.png'
			}
		},
		components:{
			settingHeader,Swiper
		},
		mounted:function(){
		    this.modifyTheme()
		},
		methods: {
			onItemClick(){

			},
	        onScrollBottom(){
		    	var load = document.getElementById("loading");
		    	load.style.display = 'block'
		    	if (this.onFetching) {
			        // do nothing
			      } else {
			        this.onFetching = true
			        setTimeout(() => {
			        	load.style.display = 'none'
			        	console.log(123);
			          	this.$nextTick(() => {
			            this.$refs.scrollerBottom.reset()
			          })
			          this.onFetching = false
			        }, 2000)
			      }
		    },
		    modifyTheme(){
		    	let themeId = document.getElementById('theme');
		    	let vm =this;
		    	if (vm.title == '中国臻品') {
		    		themeId.style.background = '#f72d61';
		    	}else{
		    		themeId.style.background = '#7688d9';
		    	}
		    },
		    goShopdetails(){
		    	this.$router.push({ path: '/shop/shop_details'})
		    }

		}
	}
</script>

<style lang="less" scoped>
.vux-loadmore{
    display: none;
}
li{
	list-style: none;
	width: 49.5%;
	background: #fff;
	margin-bottom: 0.04rem;
}
li:nth-child(odd){
	margin-right: 0.04rem;
}
.theme{
	background-color: #f72d61;
	height: auto;
	padding-top: 0.21rem;
	margin-top: -0.09rem;
	.swiper{
		margin-top: 0.12rem;
	}
	.themeList{
		.themeTitle{
			text-align: center;
			font-size: 0.32rem;
			color: #FFFFFF;
			padding: 0.17rem 0;
		}
		.list{
			width: 96.5%;
			margin: 0 auto;
			background-color: #f72d61;
			.li{
				float: left;
				.img{
					vertical-align: middle;
					text-align: center;
					img{
						width: 80%;
					}
				}
				.li-text{
					margin-left: 0.3rem;
					font-size: 0.24rem;
					color: #1A2642;
					.gray{
						font-size: 0.28rem;
						color: #A0A0A0;
						margin: 0.13rem 0 0.16rem 0;
						.red{
							color: #F23030;
						}
						.delete{
							text-decoration: line-through;
						}
					}
					.btn{
						border-radius: 0.02rem;
						color: #FFFFFF;
						width: 100%;
						.package-mail{
							margin-bottom: 0.26rem;
							padding: 0 0.08rem;
							float: left;
							background-image: linear-gradient(238deg, #5EC3FF 0%, #106FE3 100%);
							margin-right: 0.18rem;
							text-align: center;
						}
						.return{
							margin-bottom: 0.26rem;
							padding: 0 0.08rem;
							background-image: linear-gradient(269deg, #FF7A80 0%, #FF5365 100%);
							float: left;
							text-align: center;
						}
					}

				}
			}
			
		}
	}
}

</style>

<style lang="less">
	.theme .vux-tab .vux-tab-item{
		font-size: 0.32rem;

	}
	.theme .vux-tab .vux-tab-item.vux-tab-selected{
		color: #7687D9;
	}
</style>