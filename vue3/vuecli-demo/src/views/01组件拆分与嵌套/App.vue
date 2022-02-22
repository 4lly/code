<template>
  <div id="app">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './Header.vue';
  import Main from './Main';
  import Footer from './Footer.vue';

  export default {
    name:'app',
    components:{
      Header,
      Main,
      Footer

    }

  }
</script>

<style lang="scss" scoped>

</style>