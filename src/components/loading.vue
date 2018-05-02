<template>
    <div class="loading">
        <load-more :tip="content"></load-more>
    </div>
</template>
<script>
  export default {
    data(){
      return {
          content: '加载中...'
      }
    }
  }
</script>

<style lang="less">
.loading{
  .weui-loadmore{
    margin-top: 0.15rem;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 0.5rem;
  }
  .weui-loading{
    width:0.5rem; 
    height:0.5rem;
    background: url('../assets/images/shop/loading.png') no-repeat;
    background-size: 100%;
  }
  .weui-loadmore__tips{
    display: block;
    font-size: 0.2rem;
    color: #90A2C7;
  }
} 
</style>