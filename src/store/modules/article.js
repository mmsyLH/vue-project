import {defineStore} from 'pinia';
import {all, getArticlesByCateId, getArticlesByUserId, articleCatAll, addByArticle} from '@/js/article';
import {useUserStore} from "@/store/modules/user";

export const useArticleStore = defineStore('article', {
    state: () => ({
        article: {
            "articleCatId": 0,
            "content": "",
            "createTime": "",
            "deleted": 0,
            "id": 0,
            "open": 0,
            "title": "",
            "updateTime": "",
            "userinfoId": 0
        }, articleCatIds: [], articleCount: 0,
    }),

    getters: {
        // 定义需要的 getters
        GET_ARTICLE_COUNT() {
            return this.articleCount;
        }
    },

    mutations: {},

    actions: {
        //查询全部
        all() {
            return new Promise((resolve, reject) => {
                all()
                    .then(res => {
                        const articleCatIds = res.data.articles.map(article => article.articleCatId);
                        this.articleCatIds = [...new Set(articleCatIds)];
                        // console.log("article.js中all()的res", res.data);
                        // console.log("article.js中all()的articleCatIds", this.articleCatIds);
                        resolve(res);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },

        //查询全部文章标题
        articleCatAll() {
            return new Promise((resolve, reject) => {
                articleCatAll()
                    .then(res => {
                        resolve(res);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },

        //查询个人
        findArticleByUserId(id) {
            return new Promise((resolve, reject) => {
                getArticlesByUserId(id)
                    .then(res => {
                        this.articleCount = res.data.articles.length
                        resolve(res);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },

        //根据文章分类id查询
        getArticlesByCateId(id) {
            return new Promise((resolve, reject) => {
                getArticlesByCateId(id)
                    .then(res => {
                        resolve(res);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },

        //添加文章
        addByArticle(form) {
            const data = {
                articleCatId: form.articleCatId,
                content: form.content,
                title: form.title,
                userinfoId: useUserStore().user.id,
            };
            console.log("data:", data)
            return new Promise((resolve, reject) => {
                addByArticle(data)
                    .then(res => {
                        console.log("测试addByArticle的res:", res)
                        resolve(res);
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        }
    },

}, {
    //持久化插件
    persist: true
});
