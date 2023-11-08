<template>
  <div class="category category-container">
    <!-- 左侧栏 -->
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li
          class="menu-item"
          id="leftPindao"
          :class="{current: index === actLeft}"
          v-for="(item,index) in pindaoMemu"
          :key="index"
          @click="selectLeft(index)"
          ref="lItem"
        >
          <span>{{item.title}}</span>
        </li>
      </ul>
    </div>
    <!-- 右侧栏 -->
    <div class="goods-wrapper" ref="goodsWrapper">
      <ul class="category-box">
        <li class="recommend" v-for="(items, index) in pindaoList" :key="index" ref="rItem">
          <p class="title">{{ items.name}}</p>
          <div v-if="items.data">
            <div class="item" v-for="(item, key) in items.data" :key="key">
              <a class="link-box" @click="goXiangqing(item._id)">
                <img :src="item.thumbnailImg">
                <div class="biaotiInfo">
                  <p class="title" :title="item.biaoti">{{item.biaoti}}</p>
                  <p class="miaoshu" :title="item.biaoqian">{{item.biaoqian}}</p>
                </div>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BScroll from "better-scroll";
export default {
  data() {
    return {
      classNum: 0,
      // 左侧栏目标题
      pindaoMemu: [
        { title: "番剧" },
        { title: "国创" },
        { title: "放映厅" },
        { title: "纪录片" },
        { title: "漫画" },
        { title: "专栏" },
        { title: "直播" },
        { title: "音频" },
        { title: "动画" },
        { title: "音乐" },
        { title: "舞蹈" },
        { title: "游戏" },
        { title: "科技" },
        { title: "数码" },
        { title: "生活" },
        { title: "鬼畜" },
        { title: "时尚" },
        { title: "广告" },
        { title: "娱乐" },
        { title: "影视" },
        { title: "电影" },
        { title: "电视剧" },
        { title: "小电视" },
        { title: "相簿" },
        { title: "会员购" },
        { title: "话题中心" },
        { title: "全区排行榜" },
        { title: "活动中心" },
        { title: "小黑屋" },
        { title: "游戏赛事" },
        { name: "综合"}
      ],
      // 右侧列表定义空数组，放入数据
      pindaoList: [
        { name: "番剧", data: ["1.1"] },
        { name: "国创", data: ["1.1"] },
        { name: "放映厅", data: ["1.1"] },
        { name: "纪录片", data: ["1.1"] },
        { name: "漫画", data: ["1.1"] },
        { name: "专栏", data: ["1.1"] },
        { name: "直播", data: ["1.1"] },
        { name: "音频", data: ["1.1"] },
        { name: "动画", data: ["1.1"] },
        { name: "音乐", data: ["1.1"] },
        { name: "舞蹈", data: ["1.1"] },
        { name: "游戏", data: ["1.1"] },
        { name: "科技", data: ["1.1"] },
        { name: "数码", data: ["1.1"] },
        { name: "生活", data: ["1.1"] },
        { name: "鬼畜", data: ["1.1"] },
        { name: "时尚", data: ["1.1"] },
        { name: "广告", data: ["1.1"] },
        { name: "娱乐", data: ["1.1"] },
        { name: "影视", data: ["1.1"] },
        { name: "电影", data: ["1.1"] },
        { name: "电视剧", data: ["1.1"] },
        { name: "小电视", data: ["1.1"] },
        { name: "相簿", data: ["1.1"] },
        { name: "会员购", data: ["1.1"] },
        { name: "话题中心", data: ["1.1"] },
        { name: "全区排行榜", data: ["1.1"] },
        { name: "活动中心", data: ["1.1"] },
        { name: "小黑屋", data: ["1.1"] },
        { name: "游戏赛事", data: ["1.1"] },
        { name: "综合", data: ["1.1"] }
      ],
      manyData: [],
      scrollY: 0, //获取实时滚动位置
      actLeft: 0,
      heightList: [] //获取每一个li的高度
    };
  },
  methods: {
    goXiangqing(id) {
      // console.log(id);
      this.$router.push({
        path: "/xiangqing",
        query: {
          id: id
        }
      });
    },
    // 实例化滚动对象
    _initScroll() {
      this.meunScroll = new BScroll(this.$refs.menuWrapper, {
        scrollY: true,
        click: true
      });

      this.listScroll = new BScroll(this.$refs.goodsWrapper, {
        scrollY: true,
        click: true,   //better-scroll  默认阻止点击事件
        probeType: 3 //当probeType =3时，不仅在屏幕滑动的过程中，而且在 momentum 滚动动画运行过程中实时派发 scroll 事件。
      });
      this.listScroll.on("scroll", pos => {
        //获取实时滚动的距离 使用scrollY接收
        // console.log("pos====>", pos);
        this.scrollY = Math.abs(Math.round(pos.y));
        for (let i = 0; i < this.heightList.length; i++) {
          if (
            this.scrollY > this.heightList[i] &&
            this.scrollY < this.heightList[i + 1]
          ) {
            this.actLeft = i;
          }
        }
      });
    },
    //获取每一个li的高度
    getHeight() {
      const lis = this.$refs.rItem;
      //heightList的第一个元素为0
      let height = 0;
      this.heightList.push(height);
      //之后的高度即为当前li的高度加上之前面li的高度和
      lis.forEach(item => {
        height += item.clientHeight;
        this.heightList.push(height);
      });
      // console.log("this.heightList=>", this.heightList);
    },
    // 左列表点击事件，左联右效果
    selectLeft(index) {
      if (!event._constructed) {
        return;
      }
      let rItem = this.$refs.rItem;
      this.listScroll.scrollToElement(rItem[index], 100);
    },
    // 实现总数据数组的分割
    group(array, subGroupLength) {
      let index = 0;
      let newArray = [];
      while (index < array.length) {
        newArray.push(array.slice(index, (index += subGroupLength)));
      }
      // console.log("this.newArray=>", newArray);
      for (let i = 0; i < newArray.length; i++) {
        // console.log("pindaoList["+i+"]=>",this.pindaoList[i]);
        this.pindaoList[i].data = newArray[i];
      }
      return newArray;
    }
  },
  created() {
    // 总数据数组切割
    this.group(this.$store.state.shipinList1, 8);
    // console.log("this.manyData=>", this.manyData);
    //因为 _scrollInit函数需要操作DOM，因此必须在DOM元素存在文档中才能获取DOM节点
    this.$nextTick(() => {
      this._initScroll();
      this.getHeight();
    });
  },
  computed: {
    // currentIndex() {
    //   const index = this.heightList.findIndex((item, index) => {
    //     return (
    //       this.scrollY >= this.heightList[index] &&
    //       this.scrollY < this.heightList[index + 1]
    //     );
    //   });
    //   return index > 0 ? index : 0;
    // }
  }
};
</script>
<style lang="scss">
.category-container {
  bottom: 55px;
  display: flex;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
}
.menu-wrapper {
  flex: 0 0 70px;
  background: #f3f5f7;
  position: relative;
  .menu-item {
    display: block;
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    color: #222;
    text-align: center;
  }
  .current {
    position: absolute;
    z-index: 10;
    margin-top: -1px;
    background: #fff;
    font-weight: 500;
    border-left: 2px solid #f7624f;
  }
}
.goods-wrapper {
  // flex: 1;
  width: calc(100% - 70px);
  background-color: #fff;
  padding-bottom: 55px;
  ul {
    overflow: hidden;
  }
  .category-box {
    padding: 15px 4px;
    .recommend {
      // width:95%;
      overflow: hidden;
      >.title {
        font-size: 14px;
        padding-left: 6px;
        color: #333;
        font-weight: 600;
      }
      .item {
        float: left;
        overflow: hidden;
        width: 33.3333%;
        img {
          display: block;
          overflow: hidden;
          padding: 10px;
          height:67px;
        }
        p {
          width: 100%;
          font-size: 12px;
          text-align: center;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .title{
          padding:0 6px ;
          color:#333;
        }
      }
    }
  }
}



</style>
