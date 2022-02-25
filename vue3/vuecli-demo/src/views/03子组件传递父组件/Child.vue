<template>
  <div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <input type="text" v-model.number="num"/>
    <button @click="addN">+{{num}}</button>
  </div>
</template>

<script>
  export default {
    // emits:['add','sub'], //接收方式一：数组写法
    // 接收方式一：对象写法(可以对参数进行验证)
    emits:{
      add:null,
      sub:null,
      addN:(num) => {
        console.log(num,name,age);
        if (num > 0) {
          return true
        } else {
          return false
        }
      }
    },
    data() {
      return {
        num: 1
      }
    },
    methods: {
      increment() {
        this.$emit('add');
      },
      decrement() {
        this.$emit('sub');
      },
      addN(){
         this.$emit('addN',this.num);
      }
    },
  }
</script>

<style scoped>

</style>