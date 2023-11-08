<template>
  <el-page-header @back="goBack" class="go_back">
    <template #content>
      <el-text class="text-large font-600 mr-3" style="height: 100%;min-height: 20px">个人页</el-text>
    </template>
  </el-page-header>
  <el-container class="my_center">
    <el-header class="my_info">
      <el-avatar :icon="UserFilled" :size="100" class="avatar"/>
      <div class="user_info">
        <el-text class="username">{{ toUserName }}</el-text>
        <el-text class="user-level">{{ toUserLever }}</el-text>
      </div>
    </el-header>
    <el-main class="my_container">
      <div class="box1">
        <div class="item1">
          <el-text class="mx-1" type="primary">{{ toBeCountMyArticle }}</el-text>
          我的文章数
        </div>
        <div class="item1">
          <el-text class="mx-1" type="primary">{{ toBeReceived }}</el-text>
          待收货
        </div>
        <div class="item1">
          <el-text class="mx-1" type="primary">{{ balance }}</el-text>
          账户余额
        </div>
      </div>

      <el-collapse v-model="activeNames" @change="handleChange" class="collapse">
        <el-collapse-item name="2" @click="showMyArticle">
          <template #title>
            <el-icon :size="20" style="margin-right: 20px">
              <Operation/>
            </el-icon>
            <el-text> 我的文章</el-text>
          </template>
          <div v-if="showMyArticleContent">
            <div class="articles-list">
              <el-card v-for="(article, index) in articles" :key="index" class="article-item">
                <div style="display: flex; justify-content: space-around;">
                  <h3>{{ truncateTitle(article.title) }}</h3>
                  <el-button type="default" class="button"  @click="detail">查看详情</el-button>
                  <el-button type="default" class="button"  @click="detail">修改文章</el-button>
                  <el-button type="danger" class="button"  @click="handleDel">删除</el-button>
                </div>

                <div>{{ truncateContent(article.content, 3) }}</div>
                <div>更新时间: {{ article.updateTime }}</div>
                <div>更新时间: {{ truncateContent(article.updateTime, 3) }}</div>

              </el-card>
            </div>
          </div>
        </el-collapse-item>

        <el-collapse-item title="收货地址" name="3" @click="showAddress">
          <template #title>
            <el-icon :size="20" style="margin-right: 20px">
              <Operation/>
            </el-icon>
            <el-text> 收货地址</el-text>
          </template>
        </el-collapse-item>
        <el-collapse-item title="个人信息" name="4" @click="showInformation">
          <template #title>
            <el-icon :size="20" style="margin-right: 20px">
              <Operation/>
            </el-icon>
            <el-text>个人信息</el-text>
          </template>
        </el-collapse-item>
      </el-collapse>
      <div class="新增/其他" style="margin: 10px 5px">
        <el-button type="primary" @click="addArticle">新增文章</el-button>
      </div>

      <div class="添加文章弹窗">
        <el-dialog title="添加文章" v-model="dialogVisible" width="90%">
          <el-form :model="form" style="padding:20px" ref="form">
            <div style="width: 100%">
              <el-form-item label="文章标题" prop="title">
                <el-input v-model="form.title" style="width:100%;" size="large"></el-input>
              </el-form-item>
            </div>
            <div style="width: 100%">
              <el-form-item label="文章类型" prop="articleCatId">
                <el-input v-model="form.articleCatId" style="width:100%;"></el-input>
              </el-form-item>
            </div>
            <div style="width: 100%;font-size: 300px">
              <el-form-item label="文章内容" prop="content">
                <el-input type="textarea" v-model="form.content" style="width:100%;"></el-input>
              </el-form-item>
            </div>
            <div style="width: 100%;">
              <el-form-item label="是否公开" prop="open">
                <el-switch
                    :active-value="1"
                    :inactive-value="0"
                    v-model="form.open"
                    active-text="公开"
                    inactive-text="私密"
                    style="width:100%;"
                ></el-switch>
              </el-form-item>
            </div>
          </el-form>
          <template #footer>
           <span class="dialog-footer">
              <el-button @click="dialogVisible = false">取消</el-button>
               <el-button type="primary" @click="saveArticle">确定</el-button>
            </span>
          </template>
        </el-dialog>
      </div>
    </el-main>
    <el-footer>Footer222</el-footer>
  </el-container>
</template>

<script>
import {InfoFilled, Operation, UserFilled} from "@element-plus/icons-vue";
import {ElAvatar, ElHeader, ElMain, ElCollapse, ElCollapseItem, ElMessage} from 'element-plus';
import {useArticleStore} from "@/store/modules/article";
import Aside from "@/App.vue";
import {useUserStore} from "@/store/modules/user";

export default {
  components: {
    Aside,
    Operation,
    InfoFilled,
    ElAvatar,
    ElHeader,
    ElMain,
    ElCollapse,
    ElCollapseItem,
  },
  computed: {
    useArticleStore() {
      return useArticleStore();
    },
    useUserStore() {
      return useUserStore();
    },
    UserFilled() {
      return UserFilled;
    },
    toBeCountMyArticle() {
      // 从后端获取待支付数
      return this.useArticleStore.GET_ARTICLE_COUNT;
    },
    toBeReceived() {
      // 从后端获取待收货数
      return 3;
    },
    balance() {
      // 从后端获取账户余额
      return 1000;
    },
    toUserName() {
      return useUserStore().user.userName;
    },
    toUserLever() {
      const userType = useUserStore().user.userType;
      if (userType === 1) {
        return "管理员";
      } else {
        return "普通用户";
      }

    }
  },
  data() {
    return {
      //添加弹窗
      dialogVisible: false,
      form: {
        articleCatId: 0,
        content: "",
        deleted: 0,
        id: 0,
        open: 0,
        title: "",
        updateTime: "",
        userinfoId: 0
      },

      articles: [], // 保存从 showMyArticle 方法中获取的文章数组
      selectedArticle: '', // 保存用户选择的文章
      activeNames: ['1'],

      showMyArticleContent: false, // 控制展示我的文章内容的标志
    };
  },
  created() {
    this.test();
  },
  mounted() {
  },
  methods: {

    truncateContent(content, lines) {
      // 根据行数截取内容并添加省略号
      const contentArray = content.split('\n');
      if (contentArray.length > lines) {
        return contentArray.slice(0, lines).join('\n') + '...';
      } else {
        return content;
      }
    },
    truncateTitle(title) {
      return title.length > 10 ? title.slice(0, 10) + '...' : title;
    },
    //删除文章
    handleDel(id) {//回显的方法
      // console.log("要删除的id:", id);
      request.delete("/api/del/" + id).then(res => {
        if (res.code === 200) {
          //提示一个成功的消息框
          this.$message({
            type: "success",
            message: "删除成功"
          })
        } else {
          //提示一个错误的消息框
          this.$message({
            type: "error",
            message: "删除失败"
          })
        }
        //关闭对话框 更新数据
        this.dialogVisible = false;
        this.list();
      })
    },
    //添加弹窗
    addArticle() {
      this.dialogVisible = true;
      this.form = {
        articleCatId: 0,
        content: "",
        createTime: "",
        deleted: 0,
        id: 0,
        open: 0,
        title: "",
        updateTime: "",
        userinfoId: 0
      };
    },

    saveArticle() {
      //填写的表单数据发送给后端
      //确定是修改还是添加
      if (this.form.id) {//表示update
      } else {//添加
        this.$refs['form'].validate((valid) => {
          console.log("valid:", valid)
          if (valid) {
            console.log("myvue的form:", this.form)
            const res = this.useArticleStore.addByArticle(this.form);
            if (res.data.code === 1) {
              ElMessage.success(res.msg || "添加成功");
            }
          } else {
            this.$message({//弹出更新失败信息
              type: "error", message: "验证失败，不提交"
            })
            return false
          }
        })
      }
      this.dialogVisible = false;
    },

    goBack() {
      // 返回上一页
      this.$router.go(-1);
    },
    showMyArticle() {
      this.useArticleStore.findArticleByUserId(this.useUserStore.user.id).then(res => {
        this.articles = res.data.articles; // 将获取的文章数组保存到组件的数据中
        // 切换展开/关闭状态
        this.showMyArticleContent = !this.showMyArticleContent;
      });
    },
    detail(){//查看详情
      // 切换展开/关闭状态
      this.showMyArticleContent = !this.showMyArticleContent;
    },
    showAddress() {
      // 展示收货地址
    },
    showInformation() {
      // 展示个人信息
    },
    handleChange(val) {
      console.log(val);
    },

    test() {
      this.useArticleStore.all().then((res) => {
        useUserStore()
        console.log(" useUserStore()", useUserStore().user)
      });
    },
  },
};
</script>
<style scoped>
.el-form-item label {
  font-size: 30px;
}
</style>
<style scoped>
.el-main{
  --el-main-padding:0px;
}
.go_back {
//height: 2vh; background-color: #62a8ea;
}

.my_center {
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;

}

el-header {
  height: 200px;
}

.my_info {
  background-color: #62a8ea;
  display: flex;
  height: 15vh;
  min-height: 170px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.user_info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
}

.item1 {
  display: flex;
  flex-direction: column;
}

.avatar, .username {
  margin: 10px;
  font-size: 30px;
}

.user-level {
  margin: 10px;
  padding: 0 0 0 20px;
}

.el-text {
  font-size: 30px;
}

.my_container {
  padding: 20px;
}

.box1 {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

.collapse {
  height: 40vh;
  margin-top: 20px;
}

.el-collapse-item__header {
  display: flex;
  align-items: center;
}

.el-collapse-item__arrow {
  margin-left: auto;
}

.el-collapse-item__content {
  display: flex;
  flex-direction: column;
  align-items: center;
}


.el-collapse-item__content i {
  font-size: 40px;
  margin-bottom: 10px;
}

.el-collapse-item__content el-text {
  font-size: 16px;
}
</style>