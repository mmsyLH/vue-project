
<script lang="ts" setup>
import { ref } from 'vue'

const currentDate = ref(new Date())

const articles = [
  {id: 1, title: '标题1', content: '这是文章1的内容', likes: 0},
  {id: 2, title: '标题2', content: '这是文章2的内容', likes: 0},
  {id: 3, title: '标题3', content: '这是文章3的内容', likes: 0},
  {id: 4, title: '标题4', content: '这是文章4的内容', likes: 0},
]

function star(article) {
  article.likes++;
  localStorage.setItem('likes_' + article.id, article.likes.toString());
}

// 在页面加载时从本地存储中读取点赞数
for (let i = 0; i < articles.length; i++) {
  let likes = parseInt(localStorage.getItem('likes_' + articles[i].id)) || 0;
  articles[i].likes = likes;
}
</script>

<style>
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>

<template>
  <div style="padding: 10px 30px">
    <el-row>
      <el-col
          v-for="article in articles"
          :key="article.id"
          :span="8"
          :offset="article.id % 2 === 0 ? 2 : 0"
      style="margin: 15px">
        <el-card :body-style="{ padding: '0px' }" style=" width: 80%;margin-top: 20px;margin-right: -90px">
          <img
              src="https://lhwaimai.oss-cn-beijing.aliyuncs.com/c3f96b08-bbe9-44a0-807a-f201ef909641.png"
              class="image"
          />
          <div style="padding: 14px">
            <span>{{ article.title }}</span>
            <p>{{ article.content }}</p>
            <div class="bottom">
              <time class="time">{{ currentDate }}</time>
              <el-button text class="button" @click="star(article)">点赞</el-button>
              <span>{{ article.likes }}</span>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
