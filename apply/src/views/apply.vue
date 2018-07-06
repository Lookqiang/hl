<template>
    <div>
       
    
        <el-select label='地区' class='el-input-apply'  v-model="formData.exam_id" >
            <el-option v-for='(exam,index) in examList' :key="index" :value='exam.exam_id' :label='exam.exam_name' ></el-option>
        </el-select>

        <el-button type="button" class="button-position" text="报名" @click.native="singInUser" ></el-button>

         
    </div>
</template>

<script>
import Vue from "vue";
import elInput from "@/components/input/el-input.vue";
import elButton from "@/components/button/el-button.vue";
import elSelect from "@/components/input/el-select.vue";
import elOption from "@/components/input/el-option.vue";
import axios from "axios";
import { getExamList, addApplyExam } from "@/requst-url.js";

export default {
  name: "apply",
  components: {
    elInput,
    elButton,
    elSelect,
    elOption
  },
  data() {
    return {
      examList: "",
      formData: {
        exam_id: "",
        student_id: localStorage.student_id
      }
    };
  },
  created() {
    let that = this;
    axios
      .post(getExamList, {
        student_id: that.formData.student_id
      })
      .then(function(response) {
        console.log(response.data.data);
        that.examList = response.data.data;
      })
      .catch(function(error) {
        console.log(error);
      });
    // const getJSON = function(url) {
    //   const promise = new Promise(function(resolve, reject) {
    //     const handler = function() {
    //       if (this.readyState !== 4) {
    //         return;
    //       }
    //       if (this.status === 200) {
    //         resolve(this.response);
    //       } else {
    //         reject(new Error(this.statusText));
    //       }
    //     };
    //     const client = new XMLHttpRequest();
    //     client.open("GET", url);
    //     client.onreadystatechange = handler;
    //     client.responseType = "json";
    //     client.setRequestHeader("Accept", "application/json");
    //     client.send();
    //   });

    //   return promise;
    // };
    // getJSON(getExamList).then(
    //   function(json) {
    //     console.log(json);
    //   },
    //   function(error) {
    //     console.error("出错了", error);
    //   }
    // );
    
  },
  methods: {
    singInUser() {
      let that = this;
      axios
        .post(addApplyExam, this.formData)
        .then(function(response) {
          console.log(response.data.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  watch: {},
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    console.log(to);
    console.log(from);
    next(vm => {
      console.log(vm);
    });
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    console.log(to);
    console.log(from);
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    console.log(to);
    console.log(from);
    next();
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
.button-position {
  margin-top: 123px;
}
</style>