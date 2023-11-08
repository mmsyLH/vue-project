<template>
  <div class="header-container" style="position: fixed; top: 0; width: 100%; z-index: 1000; background-color: #fff; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); height: 50px; line-height: 50px; border-bottom: 1px solid #ccc; display: flex;">
    <div style="width: 200px; padding-left: 0; font-weight: bold; color: dodgerblue;">
      首页
    </div>
    <div style="flex: 2"></div>
    <div style="width: 100px; margin-top: 10px; margin-right: 30px; font-size: 30px;flex: 1">
      <el-dropdown>
        <el-space>
          {{userName}}
        </el-space>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item><p style="font-size: large">个人信息</p></el-dropdown-item>
            <el-dropdown-item @click="logout"><p style="font-size: large">退出登录</p></el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '@/store/modules/user';
import { removeToken } from '@/utils/auth';

export default {
  methods: {useUserStore},
  setup() {
    const userStore = useUserStore();
    const userId =userStore.getId;
    const userName =userStore.getUserNameById(userId);
    console.log(userName)
    const logout = () => {
      removeToken(); // 调用 removeToken 函数
      location.reload();
      // 这里可以添加其他退出登录的逻辑，比如清除用户信息等
    };

    return {
      userName,
      logout,
    };
  },
};
</script>
<style scoped>
.el-dropdown-menu{
  font-size: 30px;
}
li.el-dropdown-menu__item{
  font-size: 30px;
}
</style>