<script setup>
</script>
<template>
  <RouterLink to="/">首页</RouterLink>
  <RouterLink to="/about">About</RouterLink>
  <RouterLink to="/drop">drop</RouterLink>
  <RouterLink to="/star">点赞</RouterLink>
  <div>
    <!-- 页面组件的占位 iframe -->
    <RouterView></RouterView>
  </div>
</template>

<style scoped>

</style>
