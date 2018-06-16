<template>
    <div class="el-select" :class="{elSelectFocus:focusStatus,errorMessage:Showerror}">
        <label v-if="label">{{label}} </label>
         
        <input class="el-input" 
                @click="focusInput($event)"    
                @blur="blurInput()"   
                :class="classStyle" 
                :type="type"  
                v-bind:value="selectValue"
                :placeholder="placeholder" 
                :rows="rows" 
                :required="required"
                autocomplete="off" 
                readonly="readonly">   
        
       
        <span class="triangle triangle-up" :class="{rotateTO:!fristClicks?showDropdown:false,rotateFrom:!fristClicks?!showDropdown:false}" >
            <i></i>
        </span>
           
       
            
        <transition name="bounce">
            <div class="el-select-dropdown" :style="{top:dropdownTop}" v-if="showDropdown">
                <ul class="el-select-option">
                    <slot></slot>
                    <!-- <li v-for="(option,index) in optionList" :key="index"   @click="chooseResult(option)"> {{option.name}}</li> -->
                </ul>
            </div>
        </transition >
    </div>
</template>

<script>
import elOption from "@/components/input/el-option.vue";
import store from "../../store";

export default {
  name: "el-select",
  props: {
    type: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: ""
    },
    rows: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    classStyle: {
      type: String,
      default: ""
    },
    messageError: {
      type: String,
      default: ""
    },
    optionList: {
      type: Array,
      default: null
    },
    value: {
      type: String,
      default: ""
    },
    required:{
        type:Boolean,
        default:false,
    },
  },
  data() {
    return {
      showDropdown: false,
      dropdownTop: 0,
      focusStatus: false,
      selectValueId: "",
      selectValue: "",
      showAnimated: false,
      fristClick:true,
      fristClicks:false,
      hasErrorShow:false
    };
  },
  creatd() {},
  mount() {},
  methods: {
    inputValue($event) {
      this.$emit("input", this.selectValueId);
    },
    focusInput($event) {
        this.showDropdown = !this.showDropdown;
        this.dropdownTop = $event.target.offsetHeight + 10;
        this.focusStatus = true;
        this.showAnimated = !this.showAnimated;
        this.fristClicks=false
    },
    blurInput() {
       this.fristClick=false
      this.showDropdown = false;
      this.focusStatus = false;
      this.showAnimated = false;
    }
  },

  components: {
    elOption
  },
  computed: {
    Showerror(){
        return this.required?this.fristClick?false:this.value==''?true:false :false;
    }
  },
  watch: {
    selectValue() {
      this.inputValue();
    }
  }
};
</script>

<style scoped>
.el-select {
  margin-top: 8px;
  font-size: 14px;
  position: relative;
}
.el-input {
  border: 0;
  background: rgba(203, 203, 203, 0);
  font-size: 14px;
}
.el-input:after {
  content: "\E605";
}

.el-input:focus {
  outline: none;
}
input::-webkit-input-placeholder {
  color: #cbcbcb;
}
input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #cbcbcb;
}
input::-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #cbcbcb;
}
input::-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #cbcbcb;
}
.triangle {
  width: 30px;
  height: 40px;
  line-height: 40px;
}
.triangle-up i:after {
  content: "\25B2";
}
.triangle-down i:after {
  content: "\25BC";
}
.el-select-dropdown {
  position: absolute;
  top: 40px;
  z-index: 2009;
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  margin: 5px 0;
  width: 100%;
  max-height: 250px;
  overflow-y: scroll;
}

.el-select-option {
  list-style: none;
  padding: 0;
  text-align: left;
  margin: 0;
}
.elSelectFocus {
  outline: 1px solid #409eff;
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: translateY(-40px);
    opacity: 0;
  }

  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}

.rotateTO {
  animation: rotateTo  0.5s  forwards ;
}
.rotateFrom{
   animation: rotateFrom  0.5s  forwards ;
}
@keyframes rotateTo {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(180deg);
  }
}
@keyframes rotateFrom{
  0% {
    transform: rotate(180deg);
  }

  100% {
    transform: rotate(0deg);
  }
}
.errorMessage{
  outline: 1px solid red;

}
</style>