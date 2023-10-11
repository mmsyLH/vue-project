
<!--页面分成三个部分
这是页面的头部
分成三个部分
-->
<template>
  <div style="height: 50px; line-height: 50px; border-bottom: 1px solid #ccc;
display: flex">
    <div style="width: 200px; padding-left: 30px; font-weight: bold; color:dodgerblue">泉信web前端作业</div>
    <div style="flex: 1"></div>
    <div style="width: 100px;margin-top: 10px">
      <el-dropdown>
    <span class="el-dropdown-link">
      luohan
    </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item><RouterLink to="/">首页</RouterLink></el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Headers',
};
</script>
<style >

</style>