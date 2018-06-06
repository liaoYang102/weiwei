<template>
	<button @click="aa">测试接口</button>
</template>

<script>
	

	export default {
		
		data(){
			return {

			}
		},
		methods:{
			aa(){
				var _this=this;
				_this.$http.get('http://www.cgc999.com/app/index.php?i=2&c=entry&m=mx_shop&do=mobile&r=art',{

				}).then(function(res){
					
						alert(res)
					
				}).catch(function(err){
					alert(err)
				});
			}
		}
	}
</script>

<style lang="less" scoped>
	button{
		width: 100px;
		height: 100px;
	}
</style>