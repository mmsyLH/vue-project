<template>
  <div class="dongtai">
    <header class="mui-bar mui-bar-nav">
      <!-- <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a> -->
      <h1 class="mui-title">动态</h1>
    </header>
    <div class="dongtai_content">
      <div class="mui-card" v-for="(item,index) in this.$store.state.dongtaiInfo" :key="index">
        <!--页眉，放置标题-->
        <div class="mui-card-header card_header">
          <div>
            <img :src="item.img" alt>
            <span>{{item.name}}</span>
            <p>{{item.time}}</p>
          </div>
          <button @click="addGuanzu(item.id)">＋ 关注</button>
        </div>
        <!--内容区-->
        <article class="mui-card-content card_content">
          <div v-if="item.content">
            <div class="contentBox">{{item.content}}</div>
            <div>
              <img
                :src="items"
                v-for="(items,i) in item.contentImg"
                :key="i"
                alt
                @click="preview(index)"
              >
            </div>
          </div>
          <div v-else>
            <div class="contentBox">{{item.zhuanpin}}</div>
            <div class="card_fw">
              <div class="card-wrap_fw">
                <div class="m-img-box_fw">
                  <img :src="item.fw.img" alt>
                </div>
                <div class="m-box-col_fw">
                  <h3>@{{item.fw.name}}</h3>
                  <h4>{{item.fw.content}}</h4>
                </div>
              </div>
            </div>
          </div>
        </article>

        <!--页脚，放置补充信息或支持的操作-->
        <div class="mui-card-footer card_footer">
          <span class="mui-icon mui-icon-redo" @click="addZhuanFa(item.id)">转发</span>
          <span class="mui-icon mui-icon-chatbubble" @click="addPinLun(item.id)">{{item.pinlun}}</span>
          <span class="mui-icon mui-icon-star" @click="addShouCang(item.id)">{{item.shoucang}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import mui from "../assets/mui/js/mui";
import { ImagePreview } from "vant";
export default {
  data() {
    return {
      dongtai: [
        {
          id: "0001",
          miaoshu:
            "一个努力的LOLup！收藏夹里有视频分类！充电50或者投币20即可领取凉薯徽章！",
          img: "../assets/img/touxiangImg2.jpg",
          name: "大魔王",
          time: "两小时前",
          content:
            "【已做出决定?名记:杜兰特的态度像极去年詹姆斯】杜兰特已决定跳出合同并成为自由球员。据著名NBA记者查拉尼亚报道，杜兰特在今年自由球员市场上采取的态度和去年的詹姆斯很像，他和他的团队没有向任何对他感兴趣的球队透露任何信息。杜兰特也曾表示他不会被任何球队招募，他会和自己圈子里的人决定下 ...",
          contentImg: [
            "../assets/img/goods1.jpeg",
            "../assets/img/goods1.jpeg"
          ],
          pinlun: 111,
          shoucang: 777
        },
        {
          id: "0002",
          miaoshu: "bilibili 2018百大UP主、 知名UP主",
          img: "../assets/img/touxiangImg3.png",
          name: "小魔王",
          time: "两秒前",
          content: "大魔王发动态啦，现在心情贼复杂，贼激动...",
          contentImg: [
            "../assets/img/goods3.jpeg",
            "../assets/img/goods3.jpeg"
          ],
          pinlun: 666,
          shoucang: 121
        },
        {
          id: "0003",
          miaoshu: "每天分享创意家常菜的做法，做一个有温度的美食家。",
          img: "../assets/img/touxiangImg5.jpeg",
          name: "faker魔王",
          time: "两个月前",
          content:
            "高考报志愿不要只看985/211了，也不要忘了“双一流”的存在，需要的同学参考一下～ ",
          contentImg: [
            "../assets/img/goods3.jpeg",
            "../assets/img/goods3.jpeg"
          ],
          pinlun: 666,
          shoucang: 121
        }
      ],
      guanzu: [],
      shou: [],
      nowZhuanFa: {}
    };
  },
  methods: {
    preview(index) {
      // console.log(index);
      ImagePreview(this.dongtai[index].contentImg);
    },
    addGuanzu(id) {
      // console.log(id);
      for (let i = 0; i < this.dongtai.length; i++) {
        if (this.dongtai[i].id == id) {
          this.guanzu.push(this.dongtai[i]);
        }
      }
      for (let j = 0; j < this.guanzu.length; j++) {
        for (let k = j + 1; k < this.guanzu.length; k++) {
          if (this.guanzu[j].id == this.guanzu[k].id) {
            this.guanzu.splice(j, 1);
          }
        }
      }
      console.log(localStorage.getItem("username"));
      localStorage.setItem(localStorage.getItem("username")+"Guanzu", JSON.stringify(this.guanzu));
      this.$store.state.dongtaiGuanzu = this.guanzu;
      console.log(this.$store.state.dongtaiGuanzu);
    },
    addShouCang(tempId) {
      for (let i = 0; i < this.dongtai.length; i++) {
        if (this.dongtai[i].id == tempId) {
          this.shou.push(this.dongtai[i]);
        }
      }
      for (let j = 0; j < this.shou.length; j++) {
        for (let k = j + 1; k < this.shou.length; k++) {
          if (this.shou[j].id == this.shou[k].id) {
            this.shou.splice(j, 1);
          }
        }
      }
      localStorage.setItem("shou", JSON.stringify(this.shou));
      this.$store.state.dongtaishou = this.shou;
      console.log(this.$store.state.dongtaishou);
    },
    addZhuanFa(id) {
      for (let i = 0; i < this.dongtai.length; i++) {
        if (this.dongtai[i].id == id) {
          this.$store.state.zhuanfa = this.dongtai[i];
        }
      }
      console.log(this.$store.state.zhuanfa);
      this.$router.push("/zhuanfa");
    },
    addPinLun(id) {
      console.log(id);
      var temp = {};
      for (let i = 0; i < this.dongtai.length; i++) {
        if (this.dongtai[i].id == id) {
          temp = this.dongtai[i];
        }
      }
      this.$router.push({
        path: "/pinlun",
        query: {
          pinlunShowData: temp
        }
      });
    }
  },
  created() {
    if (this.$store.state.dongtaiInfo.length == 0) {
      this.$store.state.dongtaiInfo = this.dongtai;
    }
    if (this.$route.query.zhuanData) {
      this.$store.state.dongtaiInfo.unshift(this.$route.query.zhuanData);
      this.$store.state.myDongTai.unshift(this.$route.query.zhuanData);
    }
    console.log(this.$store.state.dongtaiInfo);
  }
};
</script>
<style lang="scss">
.dongtai_content {
  margin-top: 44px;
  margin-bottom: 55px;
}
.mui_card {
  box-shadow: 0;
  border: 0;
}
.card_header {
  position: static;
  img {
    width: 50px;
    vertical-align: middle;
    border-radius: 50%;
    margin-right: 10px;
  }
  p {
    display: inline-block;
    font-size: 12px;
  }
  button {
    width: 70px;
    height: 30px;
    font-size: 14px;
  }
}
.card_content {
  padding: 0 10px;
  .contentBox {
    line-height: 20px;
    margin: 10px 0;
  }
  img {
    width: 30%;
    margin-left: 5px;
  }
}
.card_footer {
  position: static;
  span {
    font-size: 16px;
  }
  .mui-icon-chatbubble:before,
  .mui-icon-star:before {
    font-size: 26px;
  }
  .mui-icon-redo:before {
    font-size: 30px;
  }
}

// 新添加的转发信息
.card_fw {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent !important;
  .card-wrap_fw {
    margin: 0 10px;
    height: 100%;
    display: flex;
    background-color: #f7f7f7;
    border-radius: 5px;
    .m-img-box_fw {
      width: 84px;
      height: 84px;
      margin: 0 0 0 0;
      img {
        width: 100%;
        height: 100%;
        vertical-align: top;
        object-fit: cover;
      }
    }
    .m-box-col_fw {
      flex: 1;
      width: 100%;
      margin: 8px;
      overflow: hidden;

      flex-direction: column;
      display: flex;
      justify-content: center;
      h3 {
        margin: 0;
        line-height: 25px;
        //   font-size: 16px;

        font-size: 16px;
        color: #333;
      }
      h4 {
        margin: 0;
        font-size: 14px;
        color: #939393;
        line-height: 20px;
        // 限制显示两行
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; // 控制多行的行数
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>
