<template>
  <div id="app">
    count:{{counter}}
    <br>
    <counter-operation @add="add"  @sub="sub" @addN="addN"></counter-operation>
  </div>
</template>

<script>
import CounterOperation from './CounterOperation.vue'

  export default {
    name:'app',
    components:{
        CounterOperation

    },
    data() {
      return {
        counter:0,
      }
    },
    methods: {
      add(num=1) {
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