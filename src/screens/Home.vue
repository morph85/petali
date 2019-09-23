<template>
  <div class="home">
    <h1 class="title">Home: Petals for Your Needs</h1>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped lang="scss">
@import "../styles/app.scss";
.home {
  .title {
    font-family: $font-family-title;
    font-weight: 400;
    letter-spacing: 0.023em;
    line-height: 1.2;
    font-size: 18px;
    background-color: lightblue;
    color: blue;
  }
}
</style>
