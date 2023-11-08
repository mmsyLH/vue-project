<template>
  <div id="nav-tab">
    <div
        class="nav-tab-item"
        :class="{'active': activeIndex === index}"
        v-for="(item, index) in items"
        @click="activeIndex = index"
        :key="index"
    >
      <i :class="['nav-tab-item_icon', 'iconfont', item.icon]"></i>
      <p class="nav-tab-item_label">{{ item.label }}</p>
    </div>
    <div
        class="nav-tab-overlay"
        :style="{'left': activeIndex * 130 + 'px'}"
    ></div>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const items = reactive([
      { icon: 'icon-shouye', label: '首页' },
      { icon: 'icon-guanzhu', label: '关注' },
      { icon: 'icon-faxian', label: '发现' },
      { icon: 'icon-xiaoxizhongxin', label: '消息中心' },
    ]);

    let activeIndex = 0;

    return {
      items,
      activeIndex,
    };
  },
};
</script>

<style scoped>
@import url('https://at.alicdn.com/t/font_1471409_g6hvg6yqo15.css');
/* 配色方案:
背景:7dbfff,
图标&标签:4298e7,
遮罩:e4f2ff */
*{
  margin: 0;
  padding: 0;
}

body{
  height: 100vh;
  background-color: #7dbfff;

  /* 居中 */
  display: flex;
  justify-content: center;
  align-items: center;
}

#nav-tab{
  position: relative;

  width: 100vw;
  height: 150px;
  background-color: #fff;
  display: flex;

  border-radius: 20px 20px 90px 90px;

  overflow: hidden;

  border: 20px solid white;
}

.nav-tab-item{
  width: 130px;
  height: 100%;

  z-index: 2;
  transition: .3s;
  cursor: pointer;


  /* 居中 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.nav-tab-item.active{
  width: 210px;
}

.nav-tab-item_icon{
  font-size: 32px;
  color:#4298e7;
  transition: .3s;
  transform: translate(0,0px);
}

.active .nav-tab-item_icon{
  transform: translate(0,-10px);

}

.nav-tab-item_label{
  font-size: 20px;
  color:#4298e7;
  opacity: 0;
  transition: .3s;
  user-select: none;
}

.active .nav-tab-item_label{
  opacity: 1;
}

.nav-tab-overlay{
  position: absolute;
  left: 0;
  top: 0;

  height: 100%;
  width: 210px;

  background-color: #e4f2ff;
  border-radius: 20px;

  transition:.3s;
}
</style>
