<template>
    <div class="el-input-gruop" :class="{elSelectFocus:focusStatus}">
        <label v-if="label">{{label}}</label>
        <input class="el-input" :class="classStyle" 
        :type="type"
        :placeholder="placeholder" 
        :rows="rows"  
        :readonly='readonly' 
        :value="value"
        @blur="blurInput()" 
        @click="focusInput($event)"   
        @input="inputValue($event)" >
         
    </div>
</template>

<script>
    export default {
        name:'el-input',
        props:{
            type:{
                type:String,
                default:'text',
            },
            placeholder:{
                type:String,
                default:'',
            },
            value:{
                default:'',
            },
            rows:{
                type:String,
                default:'',
            },
            label:{
                type:String,
                default:''    
            },
            classStyle:{
                type:String,
                default:''
            },
            messageError:{
                type:String,
                default:''
            },
            readonly:{
                type:Boolean,
                default:false,
            },
        },
        data(){
            return {
                focusStatus:false
            }
        },
        methods:{
            inputValue($event){
               this.$emit('input', $event.target.value)
            },
            focusInput(){
               this.$emit('focussinput', true)
               if(this.readonly!=''){
                    this.focusStatus = true;
               }
            },
            blurInput(){
                this.focusStatus = false;
            }
        }
    }
</script>

<style scoped>
.el-input-gruop{
    margin-top: 8px;
    font-size: 14px;
}
.el-input{
    border: 0;
    background: rgba(203, 203, 203, 0);
    font-size: 14px;
    height: 40px;
    line-height: 40px;
}

.el-input-bottom input{
    width: 275px;
    border-bottom: 1PX solid #cbcbcb;
    text-align: center;
    
}
.el-input:focus{
    outline: none;  
}
input::-webkit-input-placeholder{
            color:#cbcbcb;
}
input::-moz-placeholder{   /* Mozilla Firefox 19+ */
            color:#cbcbcb;
}
input::-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
    color:#cbcbcb;
}
input::-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
    color:#cbcbcb;
}
.elSelectFocus {
  outline: 1px solid #409eff;
}
</style>