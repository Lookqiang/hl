<template>
    <div class="login-form">
        <el-input class="input-gruop" placeholder="请输入账号" v-model="account"></el-input>
        <el-input class="input-gruop" placeholder="请输入密码" v-model="password"></el-input>
        <el-button class="input-gruop" type="primary" @click="login">登录</el-button>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Button, Input } from 'element-ui';
   
    
    Vue.use(Button)
    Vue.use(Input)

    export default {
        name:'login',
        data(){
            return {
                account:'',
                password:'',
            }
        },
        methods:{
            login(){
                this.$router.push('home');
            }
        }  
    }
</script>

<style scoped>
    .login-form{
        width: 300px;
        
        margin: 100px auto;
        background: #fff;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid #eee;
        box-shadow: 1px 1px 1px 1px #eee;
        
    }
    .input-gruop{
        margin: 10px 0;
    }
</style>