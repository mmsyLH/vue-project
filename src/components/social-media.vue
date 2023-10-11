<template>
  <div class="social-media">
    <a href="#" class="social-icon">
      <i class="wechat"></i>
    </a>
    <a href="#" class="social-icon">
      <i class="qq"></i>
    </a>
    <a href="#" class="social-icon">
      <i class="alipay"></i>
    </a>
    <a href="#" class="social-icon">
      <i class="github"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'SocialMedia',
};
</script>

<style scoped>
.social-media {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.social-icon {
  display: inline-block;
  width: 50px;
  height: 50px;
  margin: 0 10px;
  text-align: center;
  line-height: 50px;
  border-radius: 50%;
  color: #333;
  transition: all 0.3s ease;
}

.social-icon:hover {
  transform: translateY(-5px);
}

.social-icon i {
  font-size: 24px;

}

.social-icon .wechat {
  background-image: url("../assets/img/vx_log.svg");
}

.social-icon .qq {
  background-color: #2a5caa;
  color: #fff;
  background-image: url("../assets/img/vx-log.png");
}

.social-icon .alipay {
  background-color: #00a0e9;
  color: #fff;
}

.social-icon .github {
  background-color: #333;
  color: #fff;
}
</style>
