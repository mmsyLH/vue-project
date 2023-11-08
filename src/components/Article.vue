<template>
  <el-row>
    <el-col :span="24">
      <el-card v-for="article in articles" :key="article.id" class="custom-card">
        <div class="card-content">
          <span class="title">{{ truncateTitle(article.title) }}</span>
          <div class="content" v-html="truncateContent(article.content, 3)"></div>
          <div class="bottom">
            <time class="time">{{ article.updateTime }}</time>
            <el-button type="default" class="button">查看详情</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import {useArticleStore} from '@/store/modules/article';

export default {
  props: {
    categoryId: {
      type: [String, Number],
      default: 0
    },
  },
  data() {
    return {
      articles: [],
    };
  },
  created() {
    this.fetchArticles();
  },
  watch: {
    categoryId: 'fetchArticles'
  },
  methods: {
    async fetchArticles() {
      const articleStore = useArticleStore();
      if (this.categoryId === 0) {
        const response = await articleStore.all();
        this.articles = response.data.articles;
      } else {
        const response = await articleStore.getArticlesByCateId(this.categoryId);
        this.articles = response.data.articles;
      }
    },
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
    }
  }
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
