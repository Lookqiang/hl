<template>
    <div class="el-input-gruop">
        <label v-if="label">{{label}}</label>
        <input class="el-input" :class="classStyle" :type="type"  :value="value" v-on:input="inputValue($event)" :placeholder="placeholder" :rows="rows">   
       
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
                type:String,
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
            }
        },
        methods:{
            inputValue($event){
               this.$emit('input', $event.target.value)
            }
        }
    }
</script>

<style scoped>
.el-input-gruop{
    margin-top: 8px;
}
.el-input{
    width: 275px;
    border: 0;
    background: rgba(203, 203, 203, 0);

}
.el-input-bottom input{
    border-bottom: 1PX solid #cbcbcb;
    padding: 12px 0;
    text-align: center;
    font-size:14px;
    
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
</style>