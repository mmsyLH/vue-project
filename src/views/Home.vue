<template>

  <div class="aside-menu-hr">
    <el-affix :offset="0">
      <el-button @click="openCatDrawer">
        <el-button :icon="UserFilled">按钮</el-button>
      </el-button>
      <el-drawer class="cat-list" v-model="catDrawer" title="文章分类" size="40%" direction="ltr">
        <LhCats :catList="catList" @curCat="changeCat"></LhCats>
      </el-drawer>
    </el-affix>
  </div>
  <el-container>
    <el-container>
      <el-main class="content">
        <LhArticles :categoryId="curCat" ref="articlesComponent"></LhArticles>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import LhCats from "@/components/LhCats.vue";
import LhArticles from "@/components/LhArticles.vue";
import {UserFilled} from "@element-plus/icons-vue";
import {useArticleStore} from "@/store/modules/article";

export default {
  computed: {
    useArticleStore() {
      return useArticleStore();
    },
    UserFilled() {
      return UserFilled
    }
  },
  components: {LhCats, LhArticles},
  created() {
    this.currenIndex = 0;
    let article = this.articles[this.currenIndex];
    this.content = article.content;
    this.like = article.like;
    this.isLike = article.isLike;
  },
  mounted() {
    this.initArticle();
  },
  data() {
    return {
      content: "",
      like: 0,
      isLike: false,
      currenIndex: 0,
      catDrawer: false,
      catList: [],
      curCat: 1,
      articles: [
        {
          shortTitle: "Button 按钮",
          title: "Button 按钮",
          content: "使用 type、plain、round 和 circle 来定义按钮的样式。",
          like: 0,
          isLike: false
        },
        {
          shortTitle: "Border 边框",
          title: "Border 边框",
          content: "我们对边框进行统一规范，可用于按钮、卡片、弹窗等组件里。",
          like: 0,
          isLike: false
        },
        {
          shortTitle: "Color 色彩",
          title: "Color 色彩",
          content: "Element Plus 为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。",
          like: 0,
          isLike: false
        }
      ]
    }
  },
  methods: {
    changeContent(item, index) {
      //更改当前所在文章索引
      this.currenIndex = index;
      //切换页面文章数据
      this.content = item.content;
      this.like = item.like;
      this.isLike = item.isLike;

      // 获取当前文章的分类 ID
      const categoryId = item.categoryId; // 假设文章对象中有 categoryId 字段表示分类 ID
      console.log("当前文章的分类 ID为：", categoryId)
      // 传递分类 ID 给 LhArticles 子组件
      this.$refs.articlesComponent.changeCategory(categoryId);

    },
    doLike() {
      let article = this.articles[this.currenIndex];
      //更新点赞数
      if (article.isLike) {
        article.like--;
        article.isLike = false;
      } else {
        article.like++;
        article.isLike = true;
      }
      //切换页面文章数据
      this.like = article.like;
      this.isLike = article.isLike;
    },
    openCatDrawer() {
      this.catDrawer = true;
    },
    initArticle() {//初始化文章列表
      this.useArticleStore.articleCatAll().then(res => {
        this.catList = res.data.articleCats;
        this.changeArticles();
      })
    },
    changeCat(curCat) {
      this.curCat = curCat;
      this.changeArticles();
      console.log(this.articles);
    },
    changeArticles() {//文章发生改变的时候
      this.useArticleStore.getArticlesByCateId(this.curCat).then(res => {
        this.articles = res.data.articles;

      });
    }
  }
}
</script>


<style scoped>
.el-aside {
  padding: 48px 32px 0 0;
}

.el-aside,
.el-menu {
  border: 0;
}
</style>
