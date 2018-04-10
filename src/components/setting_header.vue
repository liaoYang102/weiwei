<template>
    <div>
        <x-header :left-options="{backText: ''}" style="background:#1e6dfd;" class="header">{{ title }}</x-header>
    </div>
</template>

<script>
export default {
    props: {
        title: String  //定义传值的类型<br>    }
    }
}
</script>
<style lang='less'>
	#app .vux-header .vux-header-left .left-arrow:before{
	    border: 1px solid white;
	    border-width: 1px 0 0 1px;
	}
</style>




