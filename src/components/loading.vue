<template>
    <div class="loading">
        <load-more :tip="content"></load-more>
    </div>
</template>
<script>
  export default {
    data(){
      return {
          content: '正在加载'
      }
    }
  }
</script>

<style lang="less">
.loading .weui-loadmore{
  margin-top: 0.1rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0.5rem;
}
</style>