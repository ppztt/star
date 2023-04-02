<template>
  <div class="main">
    <!-- <div class="right"></div> -->
    <!-- <div class="center"></div> -->
    <div
      class="left"
      ref="fly"
      style="top: 50%; left: 50%"
      :class="{ an: an }"
      @click="clickStar"
    >
      <img src="../components/images/star.png" >
    </div>
    <!-- <ul class="r">
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
          left: item[2] + 'px',
        }"
      ></li>
    </ul> -->
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
          left: item[2] + 'px',
        }"
        :class="{ an: an }"
      ></li>
    </ul>

    <el-dialog title="" :visible.sync="dialogVisible" width="30%">
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
      // 添加可点击的星星，第一个数为宽高，第二个为top值，第三个为right值，最后一个是key值，不要跟前面的重复
      starInfo: [
        [3, 100, 356, 13],
        [3, 235, 220, 14],
        [3, 434, 789, 15],
        [3, 567, 890, 16],
        [3, 287, 1390, 17],
        [3, 198, 1200, 18],
        [3, 198, 120, 19],
        [3, 19, 1200, 20],
        [3, 1239, 1200, 21],
        [3, 419, 120, 22],
        [3, 619, 150, 23],
        [3, 519, 678, 24],
        [3, 519, 667, 25],
        [3, 519, 65, 26],
        [3, 519, 180, 27],
      ],
      dialogVisible: false,
      input: "",
      isLi: "",
      an: false,
      tail: false,
      startFly: true,
    };
  },
  methods: {
    clickStar(event) {
      this.dialogVisible = true;
    },
    // starAnimation() {
    //   this.$nextTick(() => {
    //     for (let i = 0; i < this.$refs.starList.childNodes.length; i++) {
    //       let x = Number(
    //         this.$refs.starList.childNodes[i].style.top.split("p")[0]
    //       );
    //       let y = Number(
    //         this.$refs.starList.childNodes[i].style.left.split("p")[0]
    //       );
    //       let m = -x;
    //       let n = -y;
    //       this.$refs.starList.childNodes[i].style.top = m + "px";
    //       this.$refs.starList.childNodes[i].style.left = n + "px";
    //       let that = this;
    //       this.$refs.starList.childNodes[i].style.display = "block";
    //       let timer = setInterval(() => {
    //         m += x / 160;
    //         n += y / 160;
    //         that.$refs.starList.childNodes[i].style.top = m + "px";
    //         that.$refs.starList.childNodes[i].style.left = n + "px";
    //         if (
    //           Number(
    //             that.$refs.starList.childNodes[i].style.top.split("p")[0]
    //           ) >= x &&
    //           Number(
    //             that.$refs.starList.childNodes[i].style.left.split("p")[0]
    //           ) >= y
    //         ) {
    //           this.an = true
    //           clearInterval(timer);
    //         }
    //       }, 10);
    //     }
    //   });
    // },
    hanlderClose() {
      this.dialogVisible = false;
      this.an = false;
      this.$refs.fly.style.display = "none";
    },
    // 多颗星星返回
    muchStar() {
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
          this.$refs.starList.childNodes[z].style.left.split("p")[0]
        );
        let m = x;
        let n = y;
        this.$refs.starList.childNodes[z].style.display = "block";
        let timer2 = setInterval(() => {
          m -= x / 160;
          n -= y / 160;
          this.$refs.starList.childNodes[z].style.top = m + "px";
          this.$refs.starList.childNodes[z].style.left = n + "px";
          if (
            Number(this.$refs.starList.childNodes[z].style.top.split("p")[0]) <=
              0 &&
            Number(
              this.$refs.starList.childNodes[z].style.left.split("p")[0]
            ) <= 0
          ) {
            clearInterval(timer2);
            this.$refs.starList.childNodes[z].style.display = "none";
          }
        }, 10);
      });
    },
    // 一颗星星返回
    onlyStar() {
      this.tail = true;
      this.input = "";
      this.an = false;
      let x = 50;
      let timer = setInterval(() => {
        x -= 50 / 160;
        this.$refs.fly.style.top = x + "%";
        this.$refs.fly.style.left = x + "%";
        if (Number(this.$refs.fly.style.top.split("%")[0]) <= -10) {
          clearInterval(timer);
          this.startFly = true;
        }
      }, 5);
    },
    // 只有一颗星星
    starFly() {
      let x = -10;
      this.$refs.fly.style.top = "-10%";
      this.$refs.fly.style.left = "-10%";
      let timer = setInterval(() => {
        x += 50 / 160;
        this.$refs.fly.style.top = x + "%";
        this.$refs.fly.style.left = x + "%";
        if (Number(this.$refs.fly.style.top.split("%")[0]) >= 50) {
          clearInterval(timer);
          this.an = true;
          this.startFly = false;
        }
      }, 5);
    },
  },
  mounted() {
    this.an = true;
  },
};
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  height: 100%;
  // background-color: #3c6690;

  background-color: transparent;
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
    background-color: #fff;
    border-radius: 100%;
    background-size: 100%;
    display: none;
    box-shadow: 0px 0px 10px #fff;
  }
  .an {
    animation: demo 1.6s;
    animation-iteration-count: infinite;
  }
  .left,
  .right,
  .center {
    position: absolute;
    width: 80%;
    height: 80%;
    border-radius: 100%;
  }
  .right {
    bottom: -58%;
    left: -47%;
    background-color: #272648;
    box-shadow: 0px 0px 50px #272648;
    z-index: 2;
  }
  .center {
    background-color: #f89424;
    bottom: -65%;
    left: 20%;
    box-shadow: 0px 0px 50px #f89424;
  }
  .left {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background: url(../components/images/star.png);
    // background: url(../components/images/图层1.png) no-repeat;
    background-size: 100%;
    transform: translate(-50%, -50%);
    img {
      position: absolute;
      width: 100%;
    }
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
      opacity: 0.1;
      animation: demo2 1.6s;
    }
    0% {
      opacity: 1;
    }
  }
}
</style>