//src/stores/counter.js
import { defineStore } from "pinia";
export const useCounterStore = defineStore('counter', {
    state: () => ({ count: 0, name: 'Eduardo' }),//用来存储全局的状态的
    getters: {// 使用箭头函数  用来监视或者说是计算状态的变化的，有缓存的功能。
        doubleCount: (state) => state.count * 2,// 如果使用普通函数,不接收state也可以使用this
        doubleCount1(){return this.count * 2},
    },
    actions: {// 不能使用箭头函数定义，因为使用箭头函数会导致 this 指向错误
        increment() {
            this.count++
            // this.$patch({}) // 批量更新
            // this.$patch((state) => {});
        },
    },
})