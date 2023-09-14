//route 访问路径，路由
//router 路由管理者
import { createRouter, createWebHashHistory } from 'vue-router';// 创建路由实例并传递 `routes` 配置const router = createRouter({// 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
//创建路由 route
//组件 @/components/xx.vue
//页面 @/views/XXX.vue


import Home from "@/views/Home.vue"
import About from "@/views/About.vue";


const routes = [
   { path: '/', component: Home },
   { path: '/about', component: About },
]
//创建路由管理 router
const router = createRouter({// 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes,}
  );
 //导出路由
export default router