<template>
  <div>
    <div class="frame">
      <div class="stage"></div>
    </div>
  </div>
</template>

<script>
import "./css/ball.css";
export default {
  name: "",
  data() {
    return {};
  },
  methods: {
    getStar() {
      let stage = document.querySelector(".stage");
      let strStar = "";
      // 创建 300 个 div，用作星星
      for (let i = 0; i < 400; i++) {
        strStar += '<div class="star star-' + (i + 1) + '"></div>';
      }
      for (let i = 0; i < 200; i++) {
        strStar +=
          '<div class="shooting-star shooting-star-' + (i + 1) + '"></div>';
      }
      stage.innerHTML = strStar;
      var shootStar = document.querySelectorAll(".shooting-star");
      for (let i = 0; i < shootStar.length; i++) {
        shootStar[i].style.left = Math.random() * 600 + "px";
      }
    },
  },
  mounted() {
    this.$nextTick(()=>{
        this.getStar()
    })
  },
};
</script>
<style lang="less" scoped>
</style>