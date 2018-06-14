<template>
    <div class="el-select" :class="{elSelectFocus:focusStatus}">
        <label v-if="label">{{label}}</label>
         
        <input class="el-input" @click="focusInput($event)"    @blur="blurInput()"  :dataId="dataId" :class="classStyle" :type="type"  v-model="value" v-on:input="inputValue($event)" :placeholder="placeholder" :rows="rows" autocomplete="off" readonly="readonly">   
        <span class="triangle"></span>
        <div class="el-select-dropdown" :style="{top:dropdownTop}" v-if="showDropdown">
               <ul class="el-select-option">
                  <!-- <li v-for="(option,index) in optionList" :key="index"   @click="chooseResult(option)"> {{option.name}}</li> -->
                  <slot></slot>
               </ul>
        </div>
    </div>
</template>

<script>
    import elOption from '@/components/input/el-option.vue'
    import store from '../../store';

    export default {
        name:'el-select',
        props:{
            type:{
                type:String,
                default:null,
            },
            placeholder:{
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
            optionList:{
                type:Array,
                default:null
            }
        },
        data(){
            return {
                showDropdown:false,
                dropdownTop:0,
                focusStatus:false,
                dataId:'',
                
            }
        },
        creatd(){
           
        },
        mount(){
            
        },
        methods:{
            inputValue($event){
               this.$emit('input', $event.target.value)
            },
            focusInput($event){
                console.log(this)
                this.showDropdown=!this.showDropdown;
                this.dropdownTop =$event.target.offsetTop+$event.target.offsetHeight+10;
                this.focusStatus=true
            },
            blurInput(){
                this.showDropdown=false;
                this.focusStatus=false
            },
            chooseResult(currentOption){
                this.value=currentOption.name
                this.$emit('input',currentOption.id)
            },
             getOptionValue(value){
                console.log(value)
            }
        },
        components: {
            elOption
        },
        computed:{
            value(){
               return store.state.slecetValue    
            },
        },
       
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
    border: 1px solid #e4e7ed;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    box-sizing: border-box;
    margin: 5px 0;
    width: 100%;
    max-height: 250px;
    overflow-y: scroll;
}

.el-select-option {
    list-style: none;
    padding:0;
    text-align: left;
    margin: 0;
}
.el-select-option  li{
     padding: 12px;
}
.el-select-option  li:hover,.el-select-option  li:focus{
    background-color: #f5f7fa;
}
.elSelectFocus{
    outline: 1px solid #409eff;      
}
</style>