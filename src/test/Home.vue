<template>
    <div class="home">
        <mt-header fixed title="哔不哩视频">
            <router-link to="/category" slot="left">
                <span class="iconfont icon-bars"></span>
            </router-link>
            <router-link to="/login" slot="right">
                <span>登录</span>
            </router-link>
        </mt-header>
        <!-- 轮播图 -->
        <mt-swipe :auto="2000">
            <mt-swipe-item v-for="(item,index) in lunboList" :key="index">
                <img :src="item" alt>
            </mt-swipe-item>
        </mt-swipe>
        <!-- 广告 -->
        <img class="widthFix" src="../assets/img/adv2.png" alt>

        <!-- <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad"> -->
        <van-pull-refresh
            v-model="isLoading"
            @refresh="onRefresh"
            pulling-text="下拉即可加载数据..."
            loosing-text="释放即可加载数据..."
            success-text="加载成功"
            :disabled="finished"
        >
            <!-- 小推荐视频 -->
            <div class="mui-content">
                <div class="mui-row">
                    <div
                        class="mui-col-sm-6 mui-col-xs-6"
                        v-for="(item,index) in this.$store.state.someShiPin"
                        :key="index"
                    >
                        <div v-if="item">
                            <li class="mui-table-view-cell shipin" @click="goXiangqing(item._id)">
                                <img :src="item.thumbnailImg" alt>
                                <div>
                                    <p class="title">{{item.biaoti}}</p>
                                    <p class="miaoshu">{{item.biaoqian}}</p>
                                </div>
                            </li>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 广告 -->
            <img class="widthFix" src="../assets/img/adv1.jpg" alt>
            <!-- 大推荐视频 -->
            <div class="mui-content">
                <div class="mui-row">
                    <div
                        class="mui-col-sm-6 mui-col-xs-6"
                        v-for="(item,index) in this.$store.state.someShiPin2"
                        :key="index"
                    >
                        <div v-if="item">
                            <li class="mui-table-view-cell shipin" @click="goXiangqing(item._id)">
                                <img :src="item.thumbnailImg" alt>
                                <div>
                                    <p class="title">{{item.biaoti}}</p>
                                    <p class="miaoshu">{{item.biaoqian}}</p>
                                </div>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </van-pull-refresh>
        <!-- </van-list> -->
    </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
    data() {
        return {
            lunboList: [
                "../assets/img/lunbo1.webp",
                "../assets/img/lunbo2.webp",
                "../assets/img/lunbo3.webp"
            ],
            // 上拉刷新
            isLoading: false,
            //下拉加载
            loading: false,
            finished: false
        };
    },
    methods: {
        // 带参数跳转至详情页
        goXiangqing(id) {
            console.log(id);
            this.$router.push({
                path: "/xiangqing",
                query: {
                    id: id
                }
            });
        },
        //刷新
        onRefresh() {
            var _this = this;
            // 异步更新数据
            setTimeout(() => {
                // this.$toast("加载完成");
                var arrTem = [];
                // var allData = JSON.parse(localStorage.getItem("allData"));
                var allData = this.$store.state.shipinList1;
                for (let i = 0; i < 4; i++) {
                    var random = Math.floor(Math.random() * allData.length);
                    arrTem.push(allData[random]);
                }
                this.$store.state.someShiPin = arrTem.concat(
                    this.$store.state.someShiPin
                );
                // 加载状态结束
                this.isLoading = false;
                // console.log("onLoad方法====>", this.$store.state.someShiPin);
                // 数据全部加载完成
                if (this.$store.state.someShiPin.length >= 20) {
                    this.$toast("没有更多了");
                    this.finished = true; //完成加载，显示"没有更多了"
                }
            }, 1500);
        }
    },
    // 初始化方法
    created() {},
    mounted() {}
};
</script>

<style lang="scss" scoped>
// 添加的样式会被覆盖,解决添加：scoped
.home {
    padding-top: 40px;
    padding-bottom: 55px;
    overflow: hidden;
    width: 100%;
}
.mint-header {
    // opacity: 0.2;
    color: #000;
    // background: transparent;
    background-color: #54b3af;
    color: #fff;
}
//默认标签添加的类名 .mint-swipe
.mint-swipe {
    height: 100px;
    img {
        width: 100%;
    }
}
// 导航列表栏
.daohang {
    text-align: center;
    padding: 11px 1px;
    img {
        width: 40px;
    }
}
.mui-content {
    background-color: #fff;
    .shipin {
        img {
            margin: 0 auto;
            display: block;
            height: 82px;
        }
        p {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-top: 5px;
        }
        p.miaoshu {
            color: #ccc;
            font-size: 12px;
        }
    }
}
.mui-col-xs-2 {
    width: 20%;
}
// 广告栏
.widthFix {
    display: block;
    width: 100%;
}

.mui-card-content img {
    width: 100px;
}

// 进入首页网站的动画效果
.v-enter,
.v-leave-to {
    opacity: 0;
    transform: translateX(100%);
}
.v-enter-active {
    transition: all 0.5s ease;
}
</style>
  


