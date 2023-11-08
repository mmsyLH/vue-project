<template>
  <div style="height: 50px; line-height: 50px; border-bottom: 1px solid #ccc;
display: flex">
    <div style="width: 200px; padding-left: 30px; font-weight: bold; color:dodgerblue">
      首页
      </div>
    <div style="flex: 1"></div>
    <div style="width: 100px;margin-top: 10px;margin-right: 30px;font-size: 30px">
      <el-dropdown>
    <span class="el-dropdown-link">
      罗汉
    </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import {useUserStore} from '@/store/modules/user';
import {computed, onMounted} from 'vue';
import {getToken, removeToken, removeUser} from '@/utils/auth';
import {Message} from "@element-plus/icons-vue";

export default {
  computed: {
    Message() {
      return Message
    }
  },
  setup() {
    const userStore = useUserStore();
    const userName = computed(() => userStore.user.userName);

    const logout = () => {
      removeUser();
      removeToken(); // 调用 removeToken 函数
      location.reload()
      // 这里可以添加其他退出登录的逻辑，比如清除用户信息等

    };

    return {
      userName,
      logout,
    };
  },

};
</script>
<style>

</style>