<template>

   <li :value=value @click="chooseOption(label)">{{label}}</li>
</template>

<script>
export default {
  name: "elOption",
  props: ["value", "label"],
  methods: {
    chooseOption(value) {
      this.$parent.selectValue=value
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