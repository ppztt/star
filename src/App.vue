<template>
  <div id="app">
    <Star/>
  </div>
</template>

<script>
import Star from './components/Main.vue'
export default {
  name: 'App',
  components: {
   Star
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
html,
body{
  overflow: hidden;
  width: 100vw;
  height: 100vh;
}
#app {
 width: 100%;
 height: 100%;
}
</style>
