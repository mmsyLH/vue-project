//route 访问路径，路由
//router 路由管理者
import {createRouter, createWebHashHistory} from 'vue-router';// 创建路由实例并传递 `routes` 配置const router = createRouter({// 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
//创建路由 route
//组件 @/components/xx.vue
//页面 @/views/XXX.vue

//测试开始
import Footer from "@/components/Footer.vue"
import Borrow from "@/views/user/Borrow.vue"
import Layout from "@/views/Layout.vue"
import ArticleIndex from "@/views/article/ArticleIndex.vue"

//测试结束
import Home from "@/views/Home.vue"
import About from "@/views/About.vue";
import Star from "@/views/Star.vue"
import LoginRegister from "@/views/LoginRegister.vue"
import My from "@/views/user/my.vue"
import Header from "@/components/Header.vue"
import Article from "@/components/Article.vue"
// import DetailedAddress from "@/components/detailedAddress.vue"
import {getToken} from "@/utils/auth";
import {ElMessage} from "element-plus";

const routes = [

    //测试开始
    {path: '/footer', component: Footer},
    {path: '/borrow', component: Borrow},
    {path: '/layout', component: Layout},
    {path: '/articleIndex', component: ArticleIndex},
    //测试结束
    {path: '/', component: ArticleIndex},
    {path: '/home', component: Home},
    {path: '/about', component: About},
    {path: '/star', component: Star},
    {path: '/loginRegister', component: LoginRegister},
    {path: '/my', component: My},
    {path: '/header', component: Header},
    {path: '/article', component: Article},
    // {path: '/detailedAddress', component: DetailedAddress},


]
//创建路由管理 router
const router = createRouter({// 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
        history: createWebHashHistory(),
        routes,
    }
);

//路由全局守卫
router.beforeEach((to, from, next) => {

    //  1重点获取token pinia
    //  2判断token是否存在
    //  3跳转到相应页面
    const token = getToken();
    // console.log('..............................token................');
    //
    // console.log(token);
    // console.log('..............................to...............');
    //
    // console.log(to);
    // console.log('..............................from...............');
    //
    // console.log(from);
    if (token) {
        next();
    } else {
        // 用户未登录判断
        if (to.path === '/loginRegister' || to.path === '/index' || to.name === "index" || to.path === '/register' || to.name === "forgot") {
            ElMessage.warning("请先登录~");
            next();
        } else {
            next({path: '/loginRegister'});
        }
    }

})

//导出路由
export default router