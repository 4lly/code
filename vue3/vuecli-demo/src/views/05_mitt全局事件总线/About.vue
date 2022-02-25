<template>
  <div>
    <button @click="btnClick">click</button>
  </div>
</template>

<script>
  import emitter from './utils/eventbus.js'
  import {EAT_EVENT} from './utils/constant.js'
  export default {
    methods: {
      btnClick() {
        // 派发事件
        emitter.emit(EAT_EVENT,{food:'苹果'})
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>