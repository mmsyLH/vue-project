<template>
  <el-page-header @back="() => { this.$router.go(-1); }" class="go_back">
    <template #content>
      <span class="text-large font-600 mr-3" style="height: 100%;min-height: 20px">登录注册页面</span>
    </template>
  </el-page-header>
  <div class="container">
    <div class="forms-container">
      <div class="signin-signup">
        <el-form :model="loginForm" class="sign-in-form" ref="loginForm"><h2 class="title">登录</h2>
          <el-form-item prop="username">
            <el-input prefix-icon="el-icon-user" placeholder="邮箱" v-model="loginForm.email"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input prefix-icon="el-icon-lock" placeholder="密码" v-model="loginForm.password"
                      show-password></el-input>
          </el-form-item>
          <el-checkbox v-model="loginForm.rememberMe">记住密码</el-checkbox>
          <el-form-item>
            <el-button round style="height: 35px" class="btn solid" @click.native.prevent="login">登 录</el-button>
          </el-form-item>
        </el-form>

        <el-form :model="registerForm" class="sign-up-form" ref="registerForm"><h2 class="title">注册</h2>
          <el-form-item prop="username">
            <el-input clearable type="text" placeholder="用户名" v-model="registerForm.userName">
              <template slot="prepend"><i class="el-icon-user"></i></template>
            </el-input>
          </el-form-item>
          <el-form-item prop="email">
            <el-input type="email" placeholder="邮箱" v-model="registerForm.email"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" placeholder="密码" v-model="registerForm.password"></el-input>
          </el-form-item>
          <!--          <el-form-item prop="confirmPassword">-->
          <!--            <el-input type="password" placeholder="确认密码" v-model="registerForm.confirmPassword"></el-input>-->
          <!--          </el-form-item>-->
          <el-form-item>
            <el-button round style="height: 35px" class="btn" @click.prevent="register">注 册</el-button>
            <el-button round style="height: 35px" class="btn" @click.prevent="resetForm">重 置</el-button>
          </el-form-item>
        </el-form>

      </div>
    </div>

    <div class="panels-container">
      <div class="panel left-panel" style="max-height: 1200px;margin-top: 30px">
        <div class="content">
          <h3>新用户?</h3>
          <p>好兄弟,你来了,我们的网站就差你的加入了,点击下方注册按钮加入我们吧!!</p>
          <button class="btn transparent" id="sign-up-btn" @click="showRegisterForm">注册</button>
        </div>
        <img src="../assets/img/log.svg" class="image" alt=""/>
      </div>
      <div class="panel right-panel">
        <div class="content">
          <h3>已经是我们自己人了吗?</h3>
          <p>那好兄弟,你直接点击登录按钮,登录到我们这优秀的系统里!!</p>
          <button class="btn transparent" id="sign-in-btn" @click="showLoginForm">登 录</button>
        </div>
        <img src="../assets/img/register.svg" class="image" alt=""/>
      </div>
    </div>
  </div>
</template>

<script>
import SocialMedia from '@/components/social-media.vue'
import {useUserStore} from '@/store/modules/user';
import {ElMessage} from "element-plus";
import router from "@/router";


export default {
  components: {
    SocialMedia,
  },
  computed: {
    userStore() {
      return useUserStore();
    },
  },

  data() {
    return {
      showLogin: true,
      showRegister: false,
      loginForm: {
        email: "1220440602@163.com",
        password: "123456789",
        rememberMe: "false",
      },

      registerForm: {
        userName: "",
        email: "",
        password: "",
      },
      loading: false,
    };
  },
  methods: {

    showLoginForm() {
      this.showLogin = true;
      this.showRegister = false;
    },
    showRegisterForm() {
      this.showLogin = false;
      this.showRegister = true;
    },
    login() {
      this.userStore.login(this.loginForm).then((res) => {
            if (res.code===1){
              // ElMessage.success(res.msg||"登录成功");
              ElMessage.success("登录成功");
              this.showLogin = true;
              this.showRegister = false;
              router.push("/my");
              this.userStore.all();
            }
          });
    },


    register() {
      this.userStore.register(this.registerForm)
          .then(res=> {
            if (res.code===1){
              ElMessage.success(res.message?res.message:"注册成功");
              this.showLogin = true;
              this.showRegister = false;
            }
          }).catch(error => {

          });
    },
    resetForm() {//重置表单
      this.$refs.loginForm.resetFields()
      this.$refs.registerForm.resetFields()
    }

  },
  mounted() {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });
  },
};
</script>

<style scoped>
@import "../assets/css/log-res.css";
</style>
