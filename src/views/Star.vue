<template>
  <img src="https://lhwaimai.oss-cn-beijing.aliyuncs.com/a073ca99-6574-4d2b-beb3-a1d6a817cbaf.jpg" style="width: 100px">
  <div>点个赞吧！当前点赞数：{{ count }}</div>
  <button @click="star">点赞</button>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  mounted() {
    // 在页面加载时从本地存储中读取点赞数
    this.count = parseInt(localStorage.getItem('count')) || 0;
  },
  methods: {
    star() {
      this.count++;
      // 每次点赞时将点赞数保存到本地存储中
      localStorage.setItem('count', this.count.toString());
    }
  }
}
</script>
