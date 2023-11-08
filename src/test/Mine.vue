<template>
  <div>
    <div class="myInfoBox">
      <div class="myInfo">
        <div class="touxiang">
          <img
            :src="touxiang ?'../assets/img/nulltouxiang.png':'../assets/img/touxiangImg4.jpeg'"
            alt
            ref="tou"
          >
        </div>
        <div class="name">
          <p>
            {{username}}
            <span class="xinyong">正式会员</span>
          </p>
          <p>用户名：16516161</p>
          <p>
            B币：
            <span class="bb">0.0</span>
            
            <span class="yingbi">硬币：{{coinNum}}</span>
          </p>
        </div>
      </div>
      <span class="mui-icon mui-icon-gear">账号管理</span>
    </div>
    <!--动态， 关注 ，粉丝 -->
    <ul class="fensi">
      <li @click="goMyDongtaiPage">动态</li>
      <li @click="goGuanPage">关注</li>
      <!-- <li  @click="goFansPage">粉丝</li> -->
    </ul>
    <ul class="myblock">
      <li v-for="(item, index) in myList" :key="index">
        <router-link :to="item.page">
          <span :class="item.icon"></span>
          <span class="wenzi">{{item.wenzi}}</span>
          <span class="mui-icon mui-icon-arrowright"></span>
        </router-link>
      </li>
    </ul>

    <div class="out">
      <van-button type="warning" @click="quit">退出登录</van-button>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  data() {
    return {
      coinNum: 500,
      username:"",
      myList: [
        {
          page: "/record",
          icon: "van-icon van-icon-clock-o",
          wenzi: "历史记录"
        },
        {
          page: "/shoucang",
          icon: "van-icon van-icon-star-o",
          wenzi: "我的收藏"
        },
        {
          page: "/shaohou",
          icon: "van-icon van-icon-eye-o",
          wenzi: "稍后再看"
        },
        {
          page: "/pay",
          icon: "van-icon van-icon-after-sale",
          wenzi: "会员购中心"
        }
      ],
      touxiang: false
    };
  },
  created() {
    this.coinNum = this.coinNum - this.$store.state.coin.length * 2;
    // console.log("localStorage=>", localStorage.getItem("Authorization"));
    if (localStorage.getItem("Authorization") == null) {
      this.touxiang = true;
    }
    this.username = localStorage.getItem("username");
  },
  methods:{
    quit(){
      localStorage.removeItem("Authorization");
      this.$router.push("/home");
    },
    goGuanPage(){
      this.$router.push("/guanzu");
    },
    goMyDongtaiPage(){
      this.$router.push("/myDongtai");
    },
    goFansPage(){
      this.$router.push("/fans");
    }
  }
};
</script>

<style lang="scss">
.myInfoBox {
  height: 100px;
  width: 100%;
  background-color: #54b3af;
  padding: 25px 15px 10px;
  position: relative;
  .myInfo {
    .touxiang {
      display: inline-block;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      img {
        display: block;
        border-radius: 50%;
        width: 100%;
        height: 100%;
      }
    }
    .name {
      display: inline-block;
      min-width: 150px;
      margin-left: 15px;
      p {
        color: #fff;
        margin: 0;
        span.xinyong {
          background-color: #2273a8;
          border-radius: 10px;
          line-height: 15px;
          font-size: 12px;
          padding: 0 6px;
          margin-left: 20px;
          .mui-icon-arrowright {
            font-size: 12px;
          }
        }
      }
    }
    .bb {
      margin-right: 30px;
    }
    .yingbi {
      line-height: 15px;
      font-size: 12px;
      padding: 0 6px;
      background-color: #2273a8;
      border-radius: 10px;
    }
  }
  .mui-icon-gear {
    color: #fff;
    font-size: 12px;
    padding-left: 15px;
    height: 40px;
    position: absolute;
    right: 5%;
    top: 10%;
  }
}

.myblock {
  width: 100%;
  line-height: 50px;
  background-color: #efeff4;
  margin-top: 10px;
  > li {
    background-color: #fff;
    > a {
      display: block;
      margin: 0 15px;
      color: #000;
      .mui-icon-arrowright {
        float: right;
        line-height: 50px;
        color: #ccc;
      }
      .van-icon {
        font-size: 20px;
        vertical-align: middle;
        margin-right: 15px;
      }
      .wenzi {
        vertical-align: middle;
      }
    }
  }
}
// 动态，关注
.fensi {
  width: 100%;
  background-color: #fff;
  margin: 10px 0;
  text-align: center;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  > li {
    display: inline-block;
    width: 33.3333%;
    height: 50px;
    line-height: 50px;
  }
}

// 退出登录
.out{
  text-align: center;
  padding:30px 0;
  button{
    width:60%;
  }
}
</style>
