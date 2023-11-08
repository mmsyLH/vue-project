import {createRouter, createWebHashHistory} from 'vue-router';// 创建路由实例并传递 `routes` 配置const router = createRouter({// 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。

//测试布局代码开始
import Footer from "@/components/LhFooter.vue"



//测试结束
import Home from "@/views/Home.vue"
import LoginRegister from "@/views/LoginRegister.vue"
import My from "@/views/user/my.vue"
import Header from "@/components/LhHeader.vue"
// import DetailedAddress from "@/components/detailedAddress.vue"
import {getToken} from "@/utils/auth";
import {ElMessage} from "element-plus";

const routes = [

    //测试开始
    {path: '/footer', component: Footer},
    //测试结束
    {path: '/', component: Home},//首页
    {path: '/home', component: Home},
    {path: '/loginRegister', component: LoginRegister},//注册登录页
    {path: '/my', component: My},//个人页
    {path: '/header', component: Header},

]
//创建路由管理 router
const router = createRouter({// 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
        history: createWebHashHistory(),
        routes,
    }
);

//路由全局守卫
router.beforeEach((to, from, next) => {
    const token = getToken();
    // console.log('..............................token................');
    // console.log('..............................to...............');
    // console.log(to);
    // console.log('..............................from...............');
    // console.log(from);
    if (token) {
        if (to.path === '/loginRegister') {
            ElMessage.warning("您已登录了，请先退出~");
        }else{
            next();
        }
    } else {
        ElMessage.warning("请先登录~");
        // 用户未登录判断
        if (to.path === '/loginRegister' || to.path === '/index' || to.name === "index" || to.path === '/register' || to.name === "forgot") {
            next();
        } else {
            next({path: '/loginRegister'});
        }
    }
})

//导出路由
export default router