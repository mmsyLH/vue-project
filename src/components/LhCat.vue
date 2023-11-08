<template>
  <el-tag :class="{'cat': true,'cat-clicked': showInNav}" size="large" @click="$emit('changeCat',id)">
    <el-text>{{ title }}</el-text>
  </el-tag>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    showInNav: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  methods: {}
}
</script>

<style scoped>
.el-text {
    font-size: 30px;
}

.cat {
  margin-bottom: 8px;
}

.cat-clicked {
  background-color: var(--el-color-primary);
}
</style>