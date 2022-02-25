<template>
  <div id="app">
    <Child :text="text" name="tom"></Child>
    <Child :text="text" :name="name"></Child>
    <!-- 将对象结构给组件 -->
    <Child v-bind="message" name="jack"></Child>
    <Child name="jack"></Child>
    <Child style="color:red" name="jack"></Child>
  </div>
</template>

<script>
  import Child from './Child.vue';
  export default {
    name:'app',
    components:{
      Child
    },
    data() {
      return {
        text: '你好',
        name:'jack',
        message:{
          text:'早上好',
          name:'rose'
        }
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>