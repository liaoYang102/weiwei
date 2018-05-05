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
    margin:0.1rem auto 0.15rem;
  }
  .weui-loading{
    width:0.5rem; 
    height:0.5rem;
    background: url('../assets/images/shop/loading.png') no-repeat;
    background-size: 100%;
    animation: weuiLoading 0.7s steps(12, end) infinite;
  }
  .weui-loadmore__tips{
    display: block;
    font-size: 0.2rem;
    color: #90A2C7;
  }
} 
</style>