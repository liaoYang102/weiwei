<template>
    <div class="nomore">
        <load-more :show-loading="false" :tip="content" background-color="#90A2C7"></load-more>
    </div>
</template>

<script>
  export default {
    data(){
      return {
          content: '没有更多了'
      }
    }
  }
</script>

<style lang="less">
  .nomore{
    .weui-loadmore_line .weui-loadmore__tips{
      color: #90A2C7 !important;
    }
    .weui-loadmore_line{
      margin-top: 0.5rem !important;
    }
    .weui-loadmore{
      width: 35% !important;
    }
    .vux-loadmore.weui-loadmore_line:before, .vux-loadmore.weui-loadmore_line:after{
      border-top: 1px solid #90A2C7;
    }
  } 
</style>