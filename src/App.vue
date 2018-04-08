<template>
  <div id="app">
    <img src="./assets/logo.png">
    <mt-button @click.native="handleClick">按钮</mt-button>
    <span class="test">123</span>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    handleClick: function() {
      this.$toast('Hello world!')
    }
  }
}
</script>

<style lang='less'>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .test{
    font-size:30px;
    color:red;
  }
}
</style>
