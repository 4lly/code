<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left">left</slot>
    </div>
    <div class="center">
      <slot name="center">center</slot>
    </div>
    <div class="right">
      <slot name="right">right</slot>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
.nav-bar{
  display: flex;
}
.left, .center,.right{
  height: 44px;
  background: pink;
  line-height: 44px;
  text-align: center;

}
.left,.right{
  width: 80px;
}
.center{
  flex: 1;
  background: #fff;
}
</style>