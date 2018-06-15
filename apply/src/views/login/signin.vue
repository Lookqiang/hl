<template>
    <div>
        <el-input label='账号' class='el-input-apply'   v-model.trim="formData.account" ></el-input>
        <el-input label='密码' class='el-input-apply'   v-model="formData.password" ></el-input> 
        <el-input label='身高' class='el-input-apply'  type='number'  v-model.trim="formData.height" ></el-input> 
        <el-input label='家庭住址' class='el-input-apply'  type='number'  v-model.trim="formData.family_address" >
        </el-input>
        <el-select label='地区' class='el-input-apply' :optionList="cityList" v-model="city_id">
            <el-option v-for='(city,index) in options' :key="index" :value='city.value' :label='city.label' ></el-option>
        </el-select>

        <el-select label='学校' class='el-input-apply' :optionList="school_list" v-model="formData.school_id" >
        </el-select>
         <el-input label='生日' class='el-input-apply'   v-model.trim="formData.birthday" ></el-input>
         <el-input label='年龄' class='el-input-apply'  type='number'  v-model.trim="formData.age" ></el-input>
    </div>
</template>

<script>
import elInput from "@/components/input/el-input.vue";
import elButton from "@/components/button/el-button.vue";
import elSelect from "@/components/input/el-select.vue";
import elOption from "@/components/input/el-option.vue";
import axios from "axios";
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
        age: ""
      },
      city_id: "",
      cityList: null,
      school_list: null,
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ]
    };
  },
  created() {
    // let that=this;
    // axios.post('applyapi/index/getCityData', {
    // })
    // .then(function (response) {
    //     console.log(response.data.data);
    //     let cityData;
    //     cityData = response.data.data.map(item => {
    //         return {
    //             id:item.city_id,
    //             name:item.city_name,
    //         }
    //     })
    //    // that.cityList=cityData
    // })
    // .catch(function (error) {
    //     console.log(error);
    // });
  },
  methods: {

  },
  watch: {
    city_id() {
      let that = this;
      if (that.city_id != "") {
        axios
          .post("applyapi/index/getSchoolData", {
            city_id: that.city_id,
            page_num: "1",
            page_size: "1000"
          })
          .then(function(response) {
            console.log(response);
            let cityData;
            cityData = response.data.data.map(item => {
              return {
                id: item.school_id,
                name: item.school_name
              };
            });
            that.school_list = cityData;
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    }
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
</style>