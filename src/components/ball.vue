<template>
  <div>
    <div class="frame">
      <div class="stage">
        <div></div>
        <div></div>
        <div></div>
      </div>
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
      for (let i = 0; i < 300; i++) {
        strStar += '<div class="star star-' + (i + 1) + '"></div>';
      }
      for(let i = 0; i<50;i++){
        strStar += '<div class="star" style="bottom:'+Math.random() * 300 + 'px; left: '+Math.random() * 1200+'px"></div>';
      }
      for(let i = 0; i<50;i++){
        strStar += '<div class="star star-animation" style="bottom:'+Math.random() * 300 + 'px; right: '+Math.random() * 1200+'px"></div>';
      }
      for(let i = 0; i<50;i++){
        strStar += '<div class="star" style="top:'+Math.random() * 50 + '%; right: '+Math.random() * 50+'%"></div>';
      }
      for(let i = 0; i<50;i++){
        strStar += '<div class="star star-animation" style="top:'+Math.random() * 50 + '%; left: '+Math.random() * 50+'%"></div>';
      }
      // for (let i = 0; i < 200; i++) {
      //   strStar +=
      //     '<div class="shooting-star shooting-star-' + (i + 1) + '"></div>';
      // }
      stage.innerHTML = strStar;
      var shootStar = document.querySelectorAll(".shooting-star");
      for (let i = 0; i < shootStar.length; i++) {
        shootStar[i].style.left = Math.random() * 500 + "px";
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