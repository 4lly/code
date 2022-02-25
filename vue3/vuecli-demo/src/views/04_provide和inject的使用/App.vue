<template>
  <div>
    <Child></Child>
    <button @click="add">add</button>
  </div>
</template>

<script>
  import Child from './Child.vue';
  import {computed} from 'vue';
  export default {
    components: { Child },
    // provide:{
    //   name:'jack',
    //   age:18
    // }
    // 如果需要提供data里面的数据 需要写成函数返回的方式
    provide() {
      return {
        name:'jack',
        age:18,
        length:computed(() => this.names.length),//用computed 使其变成响应式
      }
    },
    data() {
      return {
        names: ['jack','king']
      }
    },
    methods: {
      add() {
        this.names.push('rose');
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>