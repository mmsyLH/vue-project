<template>
  <el-page-header @back="() => { this.$router.go(-1); }" class="go_back">
    <template #content>
      <span class="text-large font-600 mr-3" style="height: 100%;min-height: 20px">登录注册页面</span>
    </template>
  </el-page-header>
  <div class="container">
    <div class="forms-container">
      <div class="signin-signup">
        <el-form :model="loginForm" class="sign-in-form"><h2 class="title">登录</h2>
          <el-form-item prop="username">
            <el-input prefix-icon="el-icon-user" placeholder="用户名" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input prefix-icon="el-icon-lock" placeholder="密码" v-model="loginForm.password"
                      show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button round style="height: 35px" class="btn solid" @click.prevent="login">登 录</el-button>
          </el-form-item>
        </el-form>
        <el-form :model="registerForm" class="sign-up-form"><h2 class="title">注册</h2>
          <el-form-item prop="username"
                        :rules="[{ required: true, message: '请输入用户名' }, { pattern: /^[a-zA-Z0-9_-]{4,16}$/, message: '用户名必须是4-16位字母、数字、下划线或减号' }]">
            <el-input clearable type="text" placeholder="用户名" v-model="registerForm.username">
              <template slot="prepend"><i class="el-icon-user"></i></template>
            </el-input>
          </el-form-item>
          <el-form-item prop="email">
            <el-input type="email" placeholder="邮箱" v-model="registerForm.email"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" placeholder="密码" v-model="registerForm.password"></el-input>
          </el-form-item>
          <el-form-item prop="confirmPassword">
            <el-input type="password" placeholder="确认密码" v-model="registerForm.confirmPassword"></el-input>
          </el-form-item>
          <el-form-item prop="userType">
            <el-select v-model="registerForm.userType" placeholder="请选择用户类型">
              <el-option label="普通用户" value="normal"></el-option>
              <el-option label="VIP用户" value="vip"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="userGender">
            <div>用户性别</div>
            <el-radio-group v-model="registerForm.userGender">
              <el-radio label="male">男</el-radio>
              <el-radio label="female">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item prop="birthday">
            <el-date-picker type="date" placeholder="出生日期" v-model="registerForm.birthday"></el-date-picker>
          </el-form-item>
          <el-form-item prop="interest">
            <div>兴趣爱好</div>
            <el-checkbox-group v-model="registerForm.interest">
              <el-checkbox label="reading">阅读</el-checkbox>
              <el-checkbox label="music">音乐</el-checkbox>
              <el-checkbox label="sports">运动</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item prop="emailAddress">
            <el-input type="text" placeholder="电子邮件" v-model="registerForm.emailAddress"></el-input>
          </el-form-item>
          <el-form-item prop="introduction">
            <el-input type="textarea" placeholder="自我介绍" v-model="registerForm.introduction"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button round style="height: 35px" class="btn" @click.prevent="register">注 册</el-button>
            <el-button round style="height: 35px" class="btn" @click.prevent="resetForm">重 置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>

    <div class="panels-container">
      <div class="panel left-panel">
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
import "../assets/css/log-res.css"
import SocialMedia from '../components/social-media.vue'

export default {
  components: {
    SocialMedia,
  },
  data() {
    return {
      showLogin: true,
      showRegister: false,
      loginForm: {
        username: "",
        password: "",
      },

      registerForm: {
        username: "",
        email: "",
        password: "",
        confirmPassword:"",
        userType:"",
        userGender:"",
        birthday:"",
        interest:[],
        emailAddress:"",
        introduction:"",
      },

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
      // 处理登录逻辑
    },
    register() {
      // 处理注册逻辑
    },
    resetForm() {//重置
      this.loginForm.username = "";
      this.loginForm.password = "";
      this.registerForm.username = "";
      this.registerForm.email = "";
      this.registerForm.password = "";
      this.registerForm.confirmPassword = "";
      this.registerForm.userType = "";
      this.registerForm.userGender = "";
      this.registerForm.birthday = "";
      this.registerForm.interest = [];
      this.registerForm.emailAddress = "";
      this.registerForm.introduction = "";
    },
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

<style>
</style>
