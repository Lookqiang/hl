<template>
    <div>
        <el-input label='账号' class='el-input-apply'   v-model.trim="formData.account" required></el-input>
        <el-input label='学生姓名' class='el-input-apply'   v-model.trim="formData.student_name" required></el-input>
        <el-input label='密码' class='el-input-apply'   v-model="formData.password" required></el-input> 
        <el-input label='身高' class='el-input-apply'  type='number'  v-model.trim="formData.height" required></el-input> 
        <el-input label='家庭住址' class='el-input-apply'  type='number'  v-model.trim="formData.family_address" required>
        </el-input>
        <el-select label='地区' class='el-input-apply'  v-model="city_id" >
            <el-option v-for='(city,index) in cityList' :key="index" :value='city.city_id' :label='city.city_name' ></el-option>
        </el-select>

        <el-select label='学校' class='el-input-apply'  v-model="formData.school_id" required>
            <el-option v-for='(school,index) in school_list' :key="index" :value='school.school_id' :label='school.school_name' ></el-option>
        </el-select>
        <el-input label='生日' class='el-input-apply' :readonly='true'  v-model.trim="formData.birthday" @focussinput="demo2Click" required></el-input>
        <el-input label='年龄' class='el-input-apply'  type='number'  v-model.trim="formData.age" required ></el-input>
        <el-button type="button" class="button-position" text="注册" @click.native="singInUser" required></el-button>
        <van-popup v-model="calendarShow" position="bottom">
          <van-datetime-picker
            v-model="currentDate"
            loading='true'
            :type="van_datetime_picker.type"
            :minDate="van_datetime_picker.minDate"
            format="YYYY-MM-DD"
            @cancel="calendarShow=false"
            @confirm="calendarShow=false"
          />
        </van-popup>
         
    </div>
</template>

<script>
import Vue from 'vue';
import elInput from "@/components/input/el-input.vue";
import elButton from "@/components/button/el-button.vue";
import elSelect from "@/components/input/el-select.vue";
import elOption from "@/components/input/el-option.vue";
import axios from "axios";
import {getCityData,addStudentData,getSchoolData} from "@/requst-url.js";
import { DatetimePicker,Popup } from 'vant';
Vue.use(Popup);
Vue.use(DatetimePicker);
import 'vant/lib/vant-css/index.css';
export default {
  name: "signin",

  components: {
    elInput,
    elButton,
    elSelect,
    elOption
  },
  data() {
    return {
      usrName: "朱晓明",
      formData: {
        account: "",
        password: "",
        height: "",
        family_address: "",
        school_id: "",
        birthday: "",
        age: "",
        student_name:''
      },
      city_id: "",
      cityList: null,
      school_list: null,
      van_datetime_picker:{
        type:"date",
        minDate: new Date(1999,12,1),
      },
      currentDate:'',
      calendarShow:false,
      hasErrorMsgl:true
    };
  },
  created() {
    let that=this;
    axios.post(getCityData, {
    })
    .then(function (response) {
        console.log(response.data.data);
        that.cityList=response.data.data
    })
    .catch(function (error) {
        console.log(error);
    });
  },
  methods: {
    singInUser(){
      
      let that=this;
      console.log(getCityData)
    
      Object.entries(this.$children).map((item)=>{
            item[1].fristClick=false
      })
      axios.post(addStudentData, this.formData)
      .then(function (response) {
          console.log(response.data.data);
      })
      .catch(function (error) {
          console.log(error);
      });
    },
    demo2Click(val){
      this.calendarShow=!this.calendarShow
    },
     getZero(val){
      return val<10?('0'+val):val
    }
  },
  watch: {
    city_id() {
      let that = this;
      if (that.city_id != "") {
        axios
          .post(getSchoolData, {
            city_id: that.city_id,
            page_num: "1",
            page_size: "1000"
          })
          .then(function(response) {
            console.log(response.data.data);
            that.school_list = response.data.data;
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    currentDate(val){
      let currentDate,month,day;
      currentDate=new Date(this.currentDate);
      month=currentDate.getMonth()+1;
      
      this.formData.birthday=currentDate.getFullYear()+'-' + this.getZero(month) +'-'+this.getZero(currentDate.getDate())
    },
   
  }
};
</script>

<style >
.el-input-apply {
  background: #f6f6f6;
  border-radius: 3px;
  width: 326px;
  height: 40px;
  margin: 0 auto;
  display: flex;
  border: 0 solid #f6f6f6;
}
.el-input-apply label {
  padding-left: 10px;
  padding-right: 21px;
  line-height: 40px;
  width: 56px;
}
.el-input-apply input,
.el-input-apply select {
  line-height: 40px;
  flex-grow: 1;
}
.button-position{
  margin-top: 123px;
}
</style>