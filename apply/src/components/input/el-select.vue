<template>
    <div class="el-select">
        <label v-if="label">{{label}}</label>
        <input class="el-input" @click="focusInput($event)"  @blur="blurInput()"  :class="classStyle" :type="type"  :value="value" v-on:input="inputValue($event)" :placeholder="placeholder" :rows="rows" autocomplete="off" readonly="readonly">   
        <span class="triangle"></span>
        <div class="el-select-dropdown" :style="{top:dropdownTop}" v-if="showDropdown">
                'triangle'
        </div>
    </div>
</template>

<script>
    export default {
        name:'el-select',
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
            },
        },
        data(){
            return {
                showDropdown:false,
                dropdownTop:0
            }
        },
        methods:{
            inputValue($event){
               this.$emit('input', $event.target.value)
            },
            focusInput($event){
                this.showDropdown=!this.showDropdown;
                this.dropdownTop =$event.target.offsetTop+$event.target.offsetHeight+10;
            },
            blurInput(){
                this.showDropdown=false;
            },
        }
    }
</script>

<style scoped>
.el-select{
    margin-top: 8px;
    font-size: 14px;
    position: relative;
}
.el-input{
    border: 0;
    background: rgba(203, 203, 203, 0);
    font-size: 14px;
}
.el-input:after{
    content: "\E605";
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
.triangle{
    background: #000;
    border: 4px solid #000000;
    height: 0px;
    border-top-color: inherit;
    border-right-color: inherit;
    border-left-color: inherit;
    border-bottom-color: #000;
    position: relative;
    top: 50%;
    margin-top: -6px;
    right: 20px;
}
.el-select-dropdown{
    position: absolute;
    top: 40px;
    z-index:2009; 
}


</style>