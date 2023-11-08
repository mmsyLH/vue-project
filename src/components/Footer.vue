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
        :style="{'left': activeIndex * 25 + 'vw'}"
    ></div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import router from "@/router";


const items = ref([
  {icon: 'icon-shouye', label: '首页', router: ""},
  {icon: 'icon-guanzhu', label: '关注', router: ""},
  {icon: 'icon-faxian', label: '个人页', router: ""},
  {icon: 'icon-xiaoxizhongxin', label: '登录页面'},]
)
const activeIndex = ref(0)

const handleNavigation = (index) => {
  activeIndex.value = index;
  router.push(items.value[index].path);
};


</script>

<style scoped>
@import url('https://at.alicdn.com/t/font_1471409_g6hvg6yqo15.css');

* {
  margin: 0;
  padding: 0;
}

body {
  height: 100vh;
  background-color: #7dbfff;

  /* 居中 */
  display: flex;
  justify-content: center;
  align-items: center;
}

#nav-tab {
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  width: 100vw;
  height: 8vh;
  background-color: #fff;

  border-radius: 20px 20px 90px 90px;

  overflow: hidden;

  border: 1px solid rgba(255, 255, 255, 0.6);
}

.nav-tab-item {
//width: 130px; flex: 1; height: 100%;

  z-index: 2;
  transition: .3s;
  cursor: pointer;


  /* 居中 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.nav-tab-item.active {
  width: 210px;
}

.nav-tab-item_icon {
  font-size: 32px;
  color: #4298e7;
  transition: .3s;
  transform: translate(0, 0px);
}

.active .nav-tab-item_icon {
  transform: translate(0, -10px);

}

.nav-tab-item_label {
  font-size: 20px;
  color: #4298e7;
  opacity: 0;
  transition: .3s;
  user-select: none;
}

.active .nav-tab-item_label {
  opacity: 1;
}

.nav-tab-overlay {
  position: absolute;
  left: 0;
  top: 0;

  height: 100%;
  width: 210px;

  background-color: #e4f2ff;
  border-radius: 20px;

  transition: .3s;
}
</style>
