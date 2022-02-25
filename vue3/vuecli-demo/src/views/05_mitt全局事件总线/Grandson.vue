<template>
  <div>
    {{food}}
  </div>
</template>

<script>
  import emitter from './utils/eventbus.js'
  import {EAT_EVENT} from './utils/constant.js'
  export default {
    data() {
      return {
        food: ''
      }
    },
    created() {
      // 监听
      emitter.on(EAT_EVENT, this.onEat);
      // 监听所有事件
      emitter.on("*", (type,data) => {
        console.log(type, data)
      });
    },
    destroyed() {
      // 取消emitter的所有监听
      emitter.all.clear();
      emitter.off(EAT_EVENT,this.onEat);
    },
    methods: {
      onEat(data) {
        this.food = data.food;
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>