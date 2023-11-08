<script>
import Header from '@/components/LhHeader.vue';
import Footer from "@/components/LhFooter.vue";

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
      <el-header  style="height: 50px;padding-left:0">
        <Header/>
      </el-header>
      <el-main class="main" style="border: #F2F2F2 3px solid;--el-main-padding:0px">
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