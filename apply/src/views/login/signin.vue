<template>
    <div>
        <el-input label='学生姓名' class='el-input-apply'   v-model="usrName" ></el-input> 
        <el-select label='学校' class='el-input-apply'></el-select>
        <el-select label='学校' class='el-input-apply' :optionList="optionList" v-model="school"></el-select>
    </div>
</template>

<script>
import elInput from '@/components/input/el-input.vue';
import elButton from '@/components/button/el-button.vue';
import elSelect from '@/components/input/el-select.vue';
    export default {
       name:'signin' ,
        components: {
            elInput,
            elButton,
            elSelect
        },
        data(){
            return {
                usrName:'朱晓明',
                school:'',
                optionList:[{
                    id:'1',
                    name:'qq'
                },{
                    id:'2',
                    name:'trngxun'
                }]
            }
        }
    }
</script>

<style >
.el-input-apply {
    background:#f6f6f6;
    border-radius:3px;
    width:326px;
    height:40px; 
    margin: 0 auto;
    display: flex;  
    border: 0 solid #f6f6f6;
}
.el-input-apply label {
    padding-left: 10px ;
    padding-right:21px; 
    line-height: 40px;
    width: 56px;
}
.el-input-apply input,.el-input-apply select{
    line-height: 40px;
    flex-grow: 1;
}
</style>