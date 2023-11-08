<template>
  <el-row>
    <el-col :span="24">
      <lh-article
          v-for="article in articles"
          :key="article.id"
          :articleId="article.id.toString()"
          :userinfoId="article.userinfoId.toString()"
          :title="article.title"
          :content="article.content"
          :update-time="article.updateTime"
          class="custom-card"
      ></lh-article>
    </el-col>
  </el-row>
</template>

<script>
import { useArticleStore } from '@/store/modules/article';
import LhArticle from "@/components/LhArticle.vue";

export default {
  data() {
    return {
      articles: [],
    };
  },
  props: {
    categoryId: {
      type: [String, Number],
      default: 0
    },
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
      console.log("父组件传递的id为：",this.categoryId)
      if (this.categoryId === 0) {
        const response = await articleStore.all();
        this.articles = response.data.articles;
      } else {
        const response = await articleStore.getArticlesByCateId(this.categoryId);
        this.articles = response.data.articles;
      }
    },
  },
  components: {
    LhArticle,
  },
};
</script>

<style scoped>
.custom-card {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}
</style>
