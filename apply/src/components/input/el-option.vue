<template>

   <li :value=value @click="chooseOption(value,label)">{{label}}</li>
</template>

<script>
export default {
  name: "elOption",
  props: ["value", "label"],
  methods: {
    chooseOption(id,value) {
      this.$parent.selectValue=value;
      this.$parent.selectValueId=id
      //this.$emit("chooseSlecetValue", value);
    }
  }
};
</script>

<style scoped>
 li {
  padding:10px 12px;
}
 li:hover,
 li:focus {
  background-color: #f5f7fa;
}
</style>