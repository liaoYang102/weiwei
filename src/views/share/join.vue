<template>
	<div class="producte">
		<settingHeader :title="title"></settingHeader>
		<img src="../../assets/images/share/zhashang.png" alt="">
	</div>
</template>

<script>
	import settingHeader from '../../components/setting_header'


	export default {
		data() {
			return {
				title:"招商加盟",
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
			 
			
		}
	}
</script>

<style lang="less" scoped>
	@import url('../../../static/css/global');
	.producte{
		width: 100%;
		img{
			width: 100%;
			display: block;
			margin: 0;
			padding: 0;
		}
	}
</style>