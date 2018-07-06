<template>
    <div class='e'>
         <el-input label='旧密码' class='el-input-apply' type="password"></el-input>
         <el-input label='新密码' class='el-input-apply' type="password"></el-input>
         <el-button class="el-submit" text="提交" ></el-button>
    </div>
</template>

<script>
import Vue from "vue";
import elInput from "@/components/input/el-input.vue";
import elButton from "@/components/button/el-button.vue";
import axios from "axios";

export default {
  name: "resetpassword",
  components: {
    elInput,
    elButton
  }
};
</script>

<style scoped>
.el-submit{
    margin-top:calc(80% - 60px)
}
</style>