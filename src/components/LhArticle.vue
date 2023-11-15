<template>
  <el-card class="custom-card">
    <div class="card-content">
      <span class="title">{{ truncateTitle(title) }}</span>

      <div class="content" v-html="truncateContent(content, 3)"></div>
      <div class="bottom">
        <time class="time" style="flex: 1">{{ formattedUpdateTime }}</time>
        <div style="flex:2;font-size: 20px"> 作者：{{ getAuthorName(userinfoId) }}</div>
        <div>
          <el-button type="default" class="button" style="flex: 1" @click="viewDetails(articleId)">
            <el-space>查看详情</el-space>
          </el-button>
        </div>

      </div>
    </div>
  </el-card>
</template>

<script>
import { useUserStore } from '@/store/modules/user';
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    articleId: {
      type: String,
      required: true,
    },
    userinfoId: {
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
  data() {
    return {
    };
  },
  computed: {
    formattedUpdateTime() {
      return this.formatDate(this.updateTime);
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
    formatDate(dateString) {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      return `${year}-${month}-${day} ${hours}:${minutes}`;
    },
    getAuthorName(id) {
      const numericId = parseInt(id, 10); // 将传入的 id 转换为数字
      const name = useUserStore().getUserNameById(numericId);
      return name ? name : "未知";
    },
    viewDetails(articleId) {
      console.log("LhArticle.vue接收到的articleId：", articleId);
      console.log("articleId的类型：", typeof articleId);
      this.$router.push({ name: 'lhArticleDetails', query: { articleId: articleId } });
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
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* 限制显示的行数 */
  -webkit-box-orient: vertical;
}

.time {
  font-size: 20px;
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
