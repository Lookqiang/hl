<template>
    <div class="login-body">
        <img class="bg" src="./img/login-bg.jpg" alt="">
        <img class="logo" src="./img/logo.png" alt="">
        <el-input  class="el-input-bottom"  v-model="usrName" placeholder="学生姓名"></el-input>
        <el-input  class="el-input-bottom"  v-model="phone" placeholder="手机号码"></el-input>
        <el-input  class="el-input-bottom"  v-model="password" placeholder="密码"></el-input>
        <div class="message-error-default" :class="messageErrorActive">{{messageError}}</div>
        <div class="other-handle flex">
            <a href="./resetpassword">忘记密码</a>
            <a href="./signin">注册</a>
        </div>
        <el-button type="button" class="button-position" text="登录" @click.native="login"></el-button>
    </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import elInput from "@/components/input/el-input.vue";
import elButton from "@/components/button/el-button.vue";

import axios from "axios";
import { login } from "@/requst-url.js";
export default {
  name: "Login",
  data() {
    return {
      usrName: "",
      password: "",
      phone: "",
      messageError: "chngg",
      messageErrorActive: ""
    };
  },
  methods: {
    login() {
      var that = this;
      this.messageErrorActive = "";
      if (this.phone!="" && this.password!="") {
        axios
          .post(login, {
            account: this.phone,
            password: this.password
          })
          .then(function(response) {
            console.log(response.data);
            if (response.data.error_code != 0) {
              that.messageErrorActive = "message-error-active";
              that.messageError = response.data.message;
            } else {
              localStorage.token = response.data.data.token;
              localStorage.account = response.data.data.account;
              localStorage.student_id = response.data.data.school_id;
              that.$router.push("apply");
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      }else{
          //表单验证
          
          if(this.phone==''){
             this.messageError='请输入电话';
             this.messageErrorActive = "message-error-active";
             return
          }
          if(this.password==''){
             this.messageError='请输入密码';
             this.messageErrorActive = "message-error-active";
             return
          }
          
      }
    }
  },
  components: {
    elInput,
    elButton
  }
};
</script>

<style scoped>
.bg {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: -1;
}
.logo {
  width: 34.66%;
  height: 34.66%;
  display: block;
  margin: 54px auto;
}
.el-input-bottom:first {
  margin-top: 44px;
}
.button-position {
  margin-top: 48px;
}
.message-error-default {
  padding: 8px 64px 3px;
  opacity: 0;
}
.message-error-active {
  color: red;
  opacity: 1;
  text-align: left;
  padding: 7px 64px 3px;
  font-size: 14px;
}
.flex {
  display: flex;
  justify-content: space-around;
}
.other-handle {
  margin-top: 10px;
  font-size: 14px;
}
.other-handle a {
  text-decoration: none;
  color: #2090da;
}
</style>