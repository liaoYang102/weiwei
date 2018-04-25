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

</style>