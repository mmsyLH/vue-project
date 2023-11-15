<template>
  <el-button size="large" type="default" @click="goBack">返回</el-button>
  <el-card :body-style="{ padding: '0px' }">
    <div style="padding: 14px">
      <h1 v-if="article">标题：{{ article.data.article.title }}</h1>
      <p v-if="article">内容：{{ article.data.article.content }}</p>
      <p v-if="article && article.data.article.open === 1">公开</p>
      <p v-if="article && article.data.article.open !== 1">不公开</p>
      <p v-if="article">作者：{{ authorName }}</p>
      <p v-if="article">创作时间: {{ formatDate(article.data.article.createTime) }}</p>
      <p v-if="article">更新时间: {{ formatDate(article.data.article.updateTime) }}</p>
    </div>

  </el-card>
</template>
<script>
import {useUserStore} from '@/store/modules/user';
import {useArticleStore} from "@/store/modules/article";
import {formatDate} from "@/utils/auth";

export default {
  data() {
    return {
      id: 0,
      article: null,
      authorName: "未知",

    };
  },
  async created() {
    const articleId = this.$route.query.articleId;
    console.log("接收到的id:", articleId);
    this.id = articleId
    this.article = await this.fetchArticleById(this.id);
    console.log("this.article:", this.article)
    this.authorName = this.getAuthorName(this.article.data.article.userinfoId);

  },
  methods: {
    formatDate,
    async fetchArticleById(articleId) {
      return await useArticleStore().findArticleById(articleId);
    },
    getAuthorName(id) {
      console.log("id", id)
      const numericId = parseInt(id, 10);
      const name = useUserStore().getUserNameById(numericId);
      return name ? name : "未知";
    },

    goBack() {
      // 返回上一页
      this.$router.go(-1);
    },
  }
};
</script>
