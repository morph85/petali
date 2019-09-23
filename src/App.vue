<template>
  <div id="app">
    <div class="logo-container">
      <img alt="logo" src="./assets/logo.png" class="logo" />
      <img alt="leaf" src="./assets/leaf.png" class="leaf" />
    </div>
    <router-view class="page-wrapper"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // background-color: lightpink;
  background: #fff url('./assets/bg.png') top center repeat-x;
  vertical-align: middle;

  .logo-container {
    padding: 30px;

    .leaf {
      max-width: 30px;
      // background-color: gray;
      vertical-align: middle;
      margin-left: 8px;
    }

    .logo {
      max-width: 120px;
      // background-color: gray;
      vertical-align: middle;
    }
  }
}
</style>
