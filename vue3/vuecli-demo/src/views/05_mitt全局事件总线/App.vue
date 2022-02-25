<template>
  <div>
    <Child></Child>
    <About></About>
    <!-- <button @click="add">add</button> -->
  </div>
</template>

<script>
  import Child from './Child.vue';
  import About from './About.vue'
  import {computed} from 'vue';
  export default {
    components: { Child, About },
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