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
          <el-text class="mx-1" type="primary">{{ toBePaid }}</el-text>
          待支付
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
        <el-collapse-item name="2" @click="showOrder">
          <template #title>
            <el-icon :size="20" style="margin-right: 20px">
              <Operation/>
            </el-icon>
            <el-text>  我的订单</el-text>
          </template>
        </el-collapse-item>
        <el-collapse-item title="收货地址" name="3" @click="showAddress">
          <template #title>
            <el-icon :size="20" style="margin-right: 20px">
              <Operation/>
            </el-icon>
            <el-text>  收货地址</el-text>

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

    </el-main>

  </el-container>
</template>

<script>
import {InfoFilled, Operation, UserFilled} from "@element-plus/icons-vue";
import {ElAvatar, ElHeader, ElMain, ElCollapse, ElCollapseItem} from 'element-plus';

export default {
  components: {
    Operation,
    InfoFilled,
    ElAvatar,
    ElHeader,
    ElMain,
    ElCollapse,
    ElCollapseItem,
  },
  computed: {
    UserFilled() {
      return UserFilled;
    },
    toBePaid() {
      // 从后端获取待支付数
      return 5;
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
      //从后端获取用户名
      return "Super User";
    },
    toUserLever() {
      //从后端获取用户级别
      return "普通会员";
    }
  },
  data() {
    return {
      activeNames: ['1'],
    };
  },
  mounted() {
  },
  methods: {
    goBack() {
      // 返回上一页
      this.$router.go(-1);
    },
    showOrder() {
      // 展示我的订单
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
  },
};
</script>

<style scoped>
.go_back {
//height: 2vh; background-color: #62a8ea;
}

* {
  font-size: 30px;
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