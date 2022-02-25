<template>
  <div id="app">
    <h2>count:{{counter}}</h2>
    <Child @add="add"  @sub="sub" @addN="addN"></Child>
  </div>
</template>

<script>
  import Child from './Child.vue'
  export default {
    name:'app',
    components:{
        Child
    },
    data() {
      return {
        counter:0,
      }
    },
    methods: {
      add() {
        this.counter++;
      },
      sub() {
        this.counter--;
      },
      addN(num) {
        this.counter+=num;
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>