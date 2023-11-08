<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside>
          <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
            <el-radio-button :label="false">
              <el-text>展开分类</el-text>
            </el-radio-button>
            <el-radio-button :label="true">
              <el-text>关闭分类</el-text>
            </el-radio-button>
          </el-radio-group>
          <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              :collapse="isCollapse"
              @open="handleOpen"
              @close="handleClose"
          >
            <el-sub-menu :index="catId.toString()" v-for="catId in articleCatIds" :key="catId">
              <template #title>
                <el-icon style="width: 50px;">
                  <location style="width: 50px;height: auto;margin-right: 10px"/>
                </el-icon>
                <span>总分类{{ catId }}</span>
              </template>
              <!-- 在这里添加子菜单项 -->
            </el-sub-menu>
          </el-menu>
          Aside
        </el-aside>
      <!--显示分类查询的组件-->
        <el-main>
          <component :is="currentComponent" :articles="articles" v-if="currentComponent === 'Article'"/>
          <!-- 其他内容 -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useArticleStore } from '@/store/modules/article';
import Article from '@/components/Article.vue';
import {Location} from "@element-plus/icons-vue"; // 导入名为 "Article.vue" 的组件

export default {
  components: {
    Location,
    Article,
  },
  setup() {
    const articleStore = useArticleStore();
    const isCollapse = ref(true);
    const articles = ref([]);
    const currentComponent = ref(null); // 用于存储当前展示的组件名称

    const handleOpen = async (key, keyPath) => {
      if (key === "0") {
        const res = await articleStore.all();
        articles.value = res.data.articles;
        currentComponent.value = 'Article'; // 设置当前展示的组件为 "Article"
      }else {
        const res = await articleStore.getArticlesByCateId(key);
        articles.value = res.data.articles;
        currentComponent.value = 'Article'; // 设置当前展示的组件为 "Article"
      }
    };

    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };

    const articleCatIds = articleStore.articleCatIds;
    
    return {
      isCollapse,
      handleOpen,
      handleClose,
      articleCatIds,
      articles,
      currentComponent,
    };
  },
};
</script>

<style scoped>
/* 样式内容 */
</style>
