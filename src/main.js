import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')


// 创建实例
import router from './router'
const app = createApp(App);//确保 _use_ 路由实例使整个应用支持路由。
app.use(router);// 挂载router,完成
app.mount('#app');
