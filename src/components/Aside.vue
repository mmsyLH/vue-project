<script>
export default {
  name: "Aside.vue"
}
</script>

<template>
<div>
<!--  引入一个导航菜单-->
  <el-menu
      style="width:200px"
      default-active="2"
      class="el-menu-vertical-demo"
  >
    <el-menu-item index="1">
      <el-icon></el-icon>
      <span><RouterLink to="star">作业1-点赞</RouterLink></span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon></el-icon>
      <span>作业2</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon></el-icon>
      <span>作业3</span>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon></el-icon>
      <span>作业4</span>
    </el-menu-item>
  </el-menu>
</div>
</template>

<style scoped>

</style>