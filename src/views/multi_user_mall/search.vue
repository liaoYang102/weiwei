<template>
	<section>
		<settingHeader :title="title"></settingHeader>
	</section>
</template>


<script>
	import settingHeader from '../../components/setting_header'
	export default{
		data(){
			return{
				title:"店铺内搜索"
			}
		},
		components:{
			settingHeader
		}
	}
</script>