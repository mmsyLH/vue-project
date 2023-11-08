<template>
  <el-card class="custom-card">
    <div class="card-content">
      <span class="title">{{ truncateTitle(title) }}</span>
      <div class="content" v-html="truncateContent(content, 3)"></div>
      <div class="bottom">
        <time class="time">{{ updateTime }}</time>
        <el-button type="default" class="button">查看详情</el-button>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    updateTime: {
      type: String,
      required: true,
    },
  },
  methods: {
    truncateContent(content, lines) {
      // 根据行数截取内容并添加省略号
      const contentArray = content.split('\n');
      if (contentArray.length > lines) {
        return contentArray.slice(0, lines).join('\n') + '...';
      } else {
        return content;
      }
    },
    truncateTitle(title) {
      return title.length > 10 ? title.slice(0, 10) + '...' : title;
    },
  },
};
</script>

<style scoped>
.custom-card {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.card-content {
  padding: 14px;
}

.title {
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.content {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* 限制显示的行数 */
  -webkit-box-orient: vertical;
}

.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 8px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}
</style>
