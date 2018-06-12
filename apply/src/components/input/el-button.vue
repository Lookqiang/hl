<template>
    <div class="el-button-gruop">
       <button class="el-button" :class='buttonType' :type='type'  >{{text}}</button>
    </div>
</template>

<script>
    export default {
        name:'el-button',
        props:{
            type:{
                type:String,
                default:'text',
            },
            text:{
                type:String,
                default:'',
            },
            buttonType:{
                type:String,
                default:'primary',
            }
           
        },
        methods:{
           
        }
    }
</script>

<style scoped>
    .primary{
          color:#fff;
        background: #2090da;
    }
    .el-button{
        width: 271px;
        height: 40px;
        border: 0;
        border-radius:3px;
    }
   
</style>