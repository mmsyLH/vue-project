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
    <!-- 页面组件的占位 iframe -->
    <RouterView></RouterView>
</template>
<style>
*{
  font-size: 35px;
  font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
}
</style>