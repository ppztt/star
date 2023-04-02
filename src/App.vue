<template>
  <div id="app">
    <ball/>
    <Star />
  </div>
</template>

<script>
import Star from "./components/newBall.vue";
import ball from "./components/ball.vue";
export default {
  name: "App",
  components: {
    Star,
    ball,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
html,
body {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
