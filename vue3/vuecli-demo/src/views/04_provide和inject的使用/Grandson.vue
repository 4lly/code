<template>
  <div>
    {{name}}-{{age}}-{{length}}
  </div>
</template>

<script>
  export default {
    inject:['name','age','length']
  }
</script>

<style lang="scss" scoped>

</style>