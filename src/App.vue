<script>
import Header from '@/components/Header.vue';
import Footer from "@/components/Footer.vue";

export default {
  name: "Layout",
  components: {
    Footer,
    Header,
  }
}
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header/>
      </el-header>
      <el-main class="main">
      <RouterView></RouterView>
      </el-main>
      <Footer></Footer>
    </el-container>
  </div>
</template>
<style>
* {
  font-size: 35px;
  font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
}
</style>
<style scoped>
.main{
  max-height:clac(100vh -8vh)
}
</style>