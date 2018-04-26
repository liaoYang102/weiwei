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

		<div class="pro" v-show="nowIndex==0">
			<img src="../../assets/images/share/producted.png" alt="">
		</div>
		<div class="zhiliao" v-show="nowIndex==1">
			<img src="../../assets/images/share/treatment.png" alt="">
		</div>

	</div>
</template>

<script>
	import settingHeader from '../../components/setting_header'


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
		},
		/*created(){

		},*/
		mounted(){
			
		},
		computed:{
			
		},
		methods:{
			toggleTabs(index){
				// alert(index)
				this.nowIndex=index;
			}
		}
	}
</script>

<style lang="less" scoped>
	@import url('../../../static/css/global');
	.producte{
		width: 100%;
		.tab{
			height: .88rem;
			box-sizing: border-box;
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
			}
		}
	}
</style>