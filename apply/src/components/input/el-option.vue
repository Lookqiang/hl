<template>

   <li :value=value @click="chooseOption(label)">{{label}}</li>
</template>

<script>
 import store from '../../store'; 

    export default {
        name:"elOption",
        store,
        props:['value','label'],
        methods:{
            chooseOption(value){
                this.$emit('chooseSlecetValue', value)                      
            }
        }
    }
</script>

<style scoped>

</style>