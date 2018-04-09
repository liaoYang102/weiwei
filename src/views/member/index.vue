<template>
	<header>
		<div class="setting fl">
			<img src="../../assets/images/member/member_setting.png"> 
			<span>设置</span>
		</div>
	</header>
</template>

<script>
export default {
  data(){
  	return{

  	}
  }
}
</script>

<style	lang="less" scoped>
	header{
		padding-top: 0.561rem;
    	height: 100%;
    	width: 100%;
	    padding-left: 0.34rem;
	    padding-right: 0.34rem;
	    .setting{
	    	width: 1.19rem;
		    height: 0.544rem;
		    border: 1px solid #EFEFEF;
		    border-radius: 0.85rem;
		    line-height: 0.48rem;
		    img{
		    	width: 0.21rem;
			    height: 0.21rem;
			    margin-left: 0.19rem;
			    vertical-align: middle;
		    }
		    span{
		    	font-size: 0.2rem;
		    }
	    }
	}
</style>