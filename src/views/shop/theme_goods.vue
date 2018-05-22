<template>
	<div style="height: 100%;">
    	<div class="wrapper" ref="wrapper">
			<div class="content">
				<settingHeader :title="title"></settingHeader>
				<img v-lazy="imgSrc" style="width: 100%;">
				<div class="theme" id="theme">
					
				    <div class="themeTab">
            			<swiper :options="swiperOption">
        			       	<swiper-slide v-for="(item,index) in tablist" :key="index">
        			       		<div class="tab-item" :class="{'tab-active':act0==index}" @click="tabActive(index)">
		                        	<span :class="{'tab-change': title == '海外购' && act0==index}">{{ item}}</span>
        			       		</div>
        			       	</swiper-slide>
        			    </swiper>
				    </div>

				    <SwiperImg :imgList="imgList" class="swiper"></SwiperImg>

				    <div class="themeList">
				    	<div class="themeTitle">精选</div>
	    	    		<div class="theme-list">
	    			    	<div class="list">
	    			    		<li class="li" v-for="(item,index) in themeList" :key="index" @click="goShopdetails">
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
	    		    			<div class="clear"></div>
	    			    	</div>
	    		    	</div>
		    		    <loading v-if="show"></loading>
		    		    <noMore v-if="showNomore"></noMore>
		        	</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import settingHeader from '../../components/setting_header'
import SwiperImg from './components/swiper'
import BScroll from 'better-scroll'
import Loading from '../../components/loading'
import noMore from '../../components/noMore'
import {swiper,swiperSlide } from 'vue-awesome-swiper'
	export default {
		data() {
			return {
				title: '海外购',
				swiperOption: {
					autoHeight: true,
		          	slidesPerView: 'auto',
	              	spaceBetween: 0
		        },
				imgSrc: 'https://m.360buyimg.com/mobilecms/s750x366_jfs/t18199/89/1740907398/275155/d8efc7b3/5ad47af2N47fb76cd.jpg!cr_1125x549_0_72!q70.jpg.dpg',
				imgList:[
					'https://m.360buyimg.com/mobilecms/s750x366_jfs/t18775/221/1737433669/102730/f366197/5ad58a68N264b153b.jpg!cr_1125x549_0_72!q70.jpg.dpg',
					'https://m.360buyimg.com/mobilecms/s750x366_jfs/t17776/57/1707882480/210974/217399d5/5ad6b797N78d99799.jpg!cr_1125x549_0_72!q70.jpg.dpg',
					'https://m.360buyimg.com/mobilecms/s750x366_jfs/t17776/57/1707882480/210974/217399d5/5ad6b797N78d99799.jpg!cr_1125x549_0_72!q70.jpg.dpg'
				],
				test: true,
				show: false,
				themeList: [
					{ goodsname: 'Vivo X21 屏幕指纹版全面', price: '3598', oldprice: '4355'},
					{ goodsname: 'Vivo X21 屏幕指纹版全面', price: '3598', oldprice: '4355'},
					{ goodsname: 'Vivo X21 屏幕指纹版全面', price: '3598', oldprice: '4355'},
					{ goodsname: 'Vivo X21 屏幕指纹版全面', price: '3598', oldprice: '4355'},
					{ goodsname: 'Vivo X21 屏幕指纹版全面', price: '3598', oldprice: '4355'},
					{ goodsname: 'Vivo X21 屏幕指纹版全面', price: '3598', oldprice: '4355'}
				],
				showNomore: false,
				tablist:[ '精选','食品酒水','经典腕表','炫酷墨镜','母婴玩','母婴','母婴'],
				act0: 0,
				
			}
		},
		components:{
			settingHeader,SwiperImg,Loading,noMore,swiper,swiperSlide
		},
		mounted:function(){
		    this.modifyTheme()
		    this.InitScroll()
		},
		methods: {
			tabActive(index){
				this.act0 = index
			},
	        InitScroll() {
    			this.$nextTick(() => {
    				if(!this.scroll) {
    					this.scroll = new BScroll(this.$refs.wrapper, {
    						click: true,
    						scrollY: true,
    						pullUpLoad: {
    							threshold: -30, // 负值是当上拉到超过低部 70px；正值是距离底部距离 时，                    
    						}
    					})
    					this.scroll.on('pullingUp', (pos) => {
    						this.show = true;
    						this.LoadData()
    						this.$nextTick(function() {
    							this.scroll.finishPullUp();
    							this.scroll.refresh();
    						});
    					})
    				} else {
    					this.scroll.refresh()
    				}
    			})

    		},
    		LoadData() {
    			var _this = this
    			setTimeout(function(){
    				_this.show = false;
    				let obj = [{ goodsname: 'Vivo X21 屏幕指纹版全面', price: '3598', oldprice: '4355'},
    				{ goodsname: 'Vivo X21 屏幕指纹版全面', price: '3598', oldprice: '4355'}];
    				_this.themeList = _this.themeList.concat(obj);
    				console.log(_this.themeList);
    			},3000)
    		},
		    modifyTheme(){
		    	let themeId = document.getElementById('theme');
		    	let vm =this;
		    	console.log('--', vm.title)
		    	console.log('000', vm.$route.params.themeTitle)
		    	
		    	if(vm.$route.params != {} && vm.$route.params.themeTitle != null){
		    		vm.title = vm.$route.params.themeTitle
		    	}

		    	if (vm.title == '中国臻品') {
		    		themeId.style.background = '#f72d61';
		    		vm.imgSrc = 'https://img1.360buyimg.com/da/s750x366_jfs/t19528/85/1729807378/779243/da0497ec/5ad57144N2ba1f62d.jpg!cr_1125x549_0_72.dpg'
		    	}else{
		    		themeId.style.background = '#7688d9';
		    		vm.imgSrc = 'https://m.360buyimg.com/mobilecms/s750x366_jfs/t18199/89/1740907398/275155/d8efc7b3/5ad47af2N47fb76cd.jpg!cr_1125x549_0_72!q70.jpg.dpg'
		    	}
		    	
		    },
		    goShopdetails(){
		    	this.$router.push({ path: '/shop/shop_details'})
		    }

		}
	}
</script>

<style lang="less" scoped>
li{
	list-style: none;
	width: 49.5%;
	background: #fff;
	margin-bottom: 0.04rem;
}
li:nth-child(odd){
	margin-right: 0.04rem;
}
.wrapper {
	height: 100%;
	overflow: hidden;
}
.theme{
	background-color: #f72d61;
	height: auto;
	padding-top: 0.21rem;
	margin-top: -0.12rem;
	.themeTab{
		height: 1rem;
		background-color: #fff;
		line-height: 1rem;
		.swiper-slide {
		    width: 1.32rem;
		    padding-right: 0.18rem;
		    padding-left: 0.2rem;
		}
		.tab-item{
			height: 100%;
			color: #1A2642;
			font-size: 0.32rem;
			text-align: center;
		}
		.tab-active{
			color: #f72d61;
		}
		.tab-change{
			color: #7687D9;
		}
	}
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
			/*background-color: #f72d61;*/
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

	.theme .vux-tab .vux-tab-item{
		color:#222;
	}

	.themeTab{
		.swiper{
			height: 1rem;
		}
	}

</style>