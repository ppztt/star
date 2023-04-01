<template>
  <div class="main">
    <div class="left"></div>
    <div class="center"></div>
    <div class="right"></div>
    <div
      class="liuxing"
      v-for="item in lxInfo"
      :key="item[3]"
      :style="{
        width: item[0] + 'px',
        top: item[1] + 'px',
        left: item[2] + 'px',
      }"
    ></div>
    <ul class="r">
      <li
        v-for="item in listInfo"
        :key="item[3]"
        :style="{
          width: item[0] + 'px',
          height: item[0] + 'px',
          top: item[1] + 'px',
          left: item[2] + 'px',
        }"
      ></li>
      <li
        v-for="item in Info"
        :key="item[3]"
        :style="{
          width: item[0] + 'px',
          height: item[0] + 'px',
          top: item[1] + 'px',
          right: item[2] + 'px',
        }"
      ></li>
    </ul>
    <ul class="l" ref="starList">
      <li
        ref="list"
        @click="clickStar"
        v-for="item in starInfo"
        :key="item[3]"
        :style="{
          width: item[0] + 'px',
          height: item[0] + 'px',
          top: item[1] + 'px',
          right: item[2] + 'px',
        }"
      ></li>
    </ul>

    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="hanlderClose">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listInfo: [
        [10, 23, 454, 1],
        [15, 82, 89, 2],
        [20, 102, 673, 3],
        [5, 378, 430, 4],
        [5, 38, 320, 5],
      ],
      Info: [
        [5, 678, 40, 6],
        [3, 68, 40, 7],
        [5, 687, 10, 8],
        [5, 378, 430, 9],
        [5, 68, 100, 10],
      ],
      lxInfo: [
        [80, 478, 90, 11],
        [200, 80, 600, 12],
      ],
      // 添加可点击的星星，第一个数为宽高，第二个为top值，第三个为right值，最后一个是key值，不要跟前面的重复
      starInfo: [
        [50, 100, 356, 13],
        [30, 235, 220, 14],
        [20, 434, 789, 15],
        [36, 567, 890, 16],
        [28, 287, 1390, 17],
        [19, 198, 1200, 18],
      ],
      dialogVisible: false,
      input: "",
      isLi: "",
    };
  },
  methods: {
    clickStar(event) {
      this.dialogVisible = true;
      this.isLi = event.target;
      console.log(this.isLi);
    },
    starAnimation() {
      this.$nextTick(() => {
        for (let i = 0; i < this.$refs.starList.childNodes.length; i++) {
          let x = Number(
            this.$refs.starList.childNodes[i].style.top.split("p")[0]
          );
          let y = Number(
            this.$refs.starList.childNodes[i].style.right.split("p")[0]
          );
          let m = -x;
          let n = -y;
          this.$refs.starList.childNodes[i].style.top = m + "px";
          this.$refs.starList.childNodes[i].style.right = n + "px";
          let that = this;
          this.$refs.starList.childNodes[i].style.display = "block";
          let timer = setInterval(() => {
            m += x / 160;
            n += y / 160;
            that.$refs.starList.childNodes[i].style.top = m + "px";
            that.$refs.starList.childNodes[i].style.right = n + "px";
            if (
              Number(
                that.$refs.starList.childNodes[i].style.top.split("p")[0]
              ) >= x &&
              Number(
                that.$refs.starList.childNodes[i].style.right.split("p")[0]
              ) >= y
            ) {
              clearInterval(timer);
            }
          }, 10);
        }
      });
    },
    hanlderClose() {
      this.dialogVisible = false;
      this.input = ""
      this.$nextTick(() => {
        let z;
        for (let i = 0; i < this.$refs.list.length; i++) {
          if (this.$refs.starList.childNodes[i] == this.isLi) {
            z = i;
          }
        }
        let x = Number(
          this.$refs.starList.childNodes[z].style.top.split("p")[0]
        );
        let y = Number(
          this.$refs.starList.childNodes[z].style.right.split("p")[0]
        );
        let m = x;
        let n = y;
        this.$refs.starList.childNodes[z].style.display = "block";
        let timer2 = setInterval(() => {
          m -= x/160;
          n -= y/160;
          this.$refs.starList.childNodes[z].style.top = m + "px";
          this.$refs.starList.childNodes[z].style.right = n + "px";
          if (
            Number(this.$refs.starList.childNodes[z].style.top.split("p")[0]) <=
              0 &&
            Number(
              this.$refs.starList.childNodes[z].style.right.split("p")[0]
            ) <= 0
          ) {
            clearInterval(timer2);
            this.$refs.starList.childNodes[z].style.display = "none";
          }
        }, 10);
      });
    },
  },
  mounted() {
    this.starAnimation();
  },
};
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  height: 100%;
  background-color: #3c6690;
  overflow: hidden;
  .r li {
    list-style: none;
    position: absolute;
    background-color: #ffd763;
    border-radius: 100%;
    box-shadow: 0px 0px 10px #ffd763;
  }
  .l li {
    list-style: none;
    position: absolute;
    background: url(../assets/图层2.png) no-repeat;
    background-size: 100%;
    display: none;
  }
  .left,
  .right,
  .center {
    position: absolute;
    width: 80%;
    height: 80%;
    border-radius: 100%;
  }
  .left {
    bottom: -58%;
    left: -47%;
    background-color: #272648;
    z-index: 2;
  }
  .center {
    background-color: #f89424;
    bottom: -65%;
    left: 20%;
    box-shadow: 0px 0px 50px #f89424;
  }
  .right {
    width: 200px;
    height: 200px;
    border-radius: 100%;
    background: linear-gradient(-45deg, #df9d25 0%, #ed9420 20%, #f64318 100%);
    box-shadow: 0px 0px 50px #f89424;
    top: 25%;
    right: 35%;
  }
  .liuxing {
    position: absolute;
    height: 2px;
    transform: rotate(-30deg);
    background-color: #f2c357;
    box-shadow: 30px 0px 10px #f2c357;
    border-radius: 10px;
    opacity: 0.7;
  }
  @keyframes demo {
    100% {
      top: 50%;
      left: 50%;
    }

    0% {
      top: 0%;
      left: 100%;
    }
  }
}
</style>