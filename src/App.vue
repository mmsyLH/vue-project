<script>
import Header from '@/components/Header.vue';
import Aside from "@/components/Aside.vue";

export default {
  name: "Layout",
  components: {
    Header,
    Aside
  }
}
</script>
<template>
<!--    <RouterLink to="/loginRegister">点赞</RouterLink>-->
  <!--
  1. App.vue页面可以用于布局界面
  2. <router-view/>就是路由指令
  3．会把路由到的页面内容，展示到<router-view/>
  4.比如 url地址 http://localhost:8080/I那么路由的 path就是/

  -->
<!--  <div>-->
<!--    &lt;!&ndash;引入header&ndash;&gt;-->
<!--    <Header/>-->
<!--    &lt;!&ndash;引入主题&ndash;&gt;-->
<!--    <div style="display: flex">-->
<!--      &lt;!&ndash;    侧边栏&ndash;&gt;-->
<!--      <Aside/>-->
<!--      &lt;!&ndash;引入内容区域 通过路由展示  默认路由到 /-->
<!--      比如http://localhost:10000/ =》HomeView.vue-->
<!--      &ndash;&gt;-->
<!--      <RouterView style="flex: 1"/>-->
<!--    </div>-->
<!--  </div>-->
<!--  <RouterLink to="/">首页</RouterLink>-->
<!--  <RouterLink to="/about">About</RouterLink>-->
<!--  <RouterLink to="/star">点赞</RouterLink>-->
  <div>
    <!-- 页面组件的占位 iframe -->
    <RouterView></RouterView>
  </div>
</template>