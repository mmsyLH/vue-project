<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <div class="aside-menu-hr">
        <el-affix :offset="0">
          <el-button @click="openCatDrawer">
            <font-awesome-icon icon="fa-solid fa-bars" />
          </el-button>
          <el-drawer class="cat-list" v-model="catDrawer" title="文章分类" size="40%">
            <cjb-cats :catList="catList" @curCat="changeCat"></cjb-cats>
          </el-drawer>
        </el-affix>
      </div>
      <el-main>Main</el-main>
      <el-footer>

      </el-footer>
    </el-container>
    <Footer>
    </Footer>
  </div>
</template>
<style scoped>
.common-layout {
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  //justify-content:space-between
}
</style>
<script setup>
import Footer from "@/components/Footer.vue";
</script>