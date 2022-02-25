<template>
  <div>
    <!-- 默认插槽 -->
    <SlotComp>
      <button>我是按钮</button>
    </SlotComp>
    <!-- 具名插槽 -->
    <NameSlotComp>
      <template v-slot:left>左边</template>
      <template v-slot:center>中间</template>
      <template v-slot:right>右边</template>
    </NameSlotComp>
  </div>
</template>

<script>
  import SlotComp from './SlotComp.vue'
  import NameSlotComp from './NameSlotComp.vue'
  export default {
    components:{ SlotComp,NameSlotComp }
  }
</script>

<style lang="scss" scoped>

</style>