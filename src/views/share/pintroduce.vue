<template>
	<div class="producte">
		<settingHeader :title="title"></settingHeader>
		<!-- <img src="../../assets/images/share/producted.png" alt=""> -->
		<div class="tab">
			<ul class="clearfix">
				<li v-for="(item,index) in tabsParam" @click="toggleTabs(index)" :class="{current:index == nowIndex}"><span>{{item}}</span></li>
				<!-- <li><span>治疗指导</span></li> -->
			</ul>
		</div>

		<!-- <scroll class="scroll">
			<div class="content">
				<div class="pro" v-show="nowIndex==0">
					<img src="../../assets/images/share/producted.png" alt="">
				</div>
				<div class="zhiliao" v-show="nowIndex==1">
					<img src="../../assets/images/share/treatment.png" alt="">
				</div>
			</div>
		</scroll> -->
		<div ref="wrapper" class="wrapper">
			<div class="content">
				<div class="pro" v-show="nowIndex==0">
					<img src="../../assets/images/share/producted.png" alt="">
				</div>
				<div class="zhiliao" v-show="nowIndex==1">
					<img src="../../assets/images/share/treatment.png" alt="">
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import settingHeader from '../../components/setting_header'
	import scroll from '../../components/scroll.vue'
	import BScroll from 'better-scroll'
	export default {
		data() {
			return {
				title:"产品指引",
				tabsParam:['产品介绍','治疗指导'],
				nowIndex:0,//默认第一个tab为选中状态
			}
				
		},
		components:{
			settingHeader,
			scroll
		},
		/*created(){

		},*/
		mounted(){
			this.InitScroll()
		},
		computed:{
			
		},
		methods:{
			toggleTabs(index){
				// alert(index)
				this.nowIndex=index;
			},
			InitScroll() {
				this.$nextTick(() => {
					if(!this.scroll) {
						this.scroll = new BScroll(this.$refs.wrapper, {
							click: true,
							scrollY: true,
							pullUpLoad: {
								threshold: -50, // 负值是当上拉到超过低部 70px；正值是距离底部距离 时，                    
							}
						})
						this.scroll.on('pullingUp', (pos) => {
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
		}
	}
</script>

<style lang="less" scoped>
	@import url('../../../static/css/global');
	.producte{
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		.tab{
			height: .88rem;
			box-sizing: border-box;
			position: relative;
			background: #f5f6fa !important;
			z-index: 5;
			li{
				float: left;
				height: .88rem;
				line-height: .7rem;
				width: 45%;
				text-align: center;
				span{
					display: inline-block;
					color: #90A2C7;
					font-size: .32rem;
				}
			}
			li:first-child{
				text-align: right;
				padding-right: .3rem;
			}
			li:last-child{
				text-align: left;
				padding-left: .3rem;
			}
			li.current span{
				color: #336FFF;
				display: inline-block;
				border-bottom: 1px solid #336FFF;
			}
		}
		.pro,.zhiliao{
			width: 100%;
			img{
				width: 100%;
				display: block;
				margin: 0;
				padding: 0;
			}
		}
		.scroll{
			width: 100%;
			height: 75%;
		}
		.wrapper{
			height: 93.5%;
			overflow: hidden;
		}
	}
</style>