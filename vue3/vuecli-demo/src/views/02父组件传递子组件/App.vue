<template>
  <div id="app">
    <ShowMessage :text="text" name="tom"></ShowMessage>
    <ShowMessage :text="text" :name="name"></ShowMessage>
    <!-- 此操作会结构赋值 -->
    <ShowMessage v-bind="message" name="jack"></ShowMessage>
    <ShowMessage name="jack"></ShowMessage>
     <ShowMessage style="color:red" name="jack"></ShowMessage>
  </div>
</template>

<script>
  import ShowMessage from './ShowMessage.vue';
  export default {
    name:'app',
    components:{
      ShowMessage
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