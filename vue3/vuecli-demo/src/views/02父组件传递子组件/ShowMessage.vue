<template>
  <div id="app">
    <span :style="$attrs.style">{{name}} {{text}}</span>
  </div>
</template>

<script>
  export default {
    // 不希望组建的根元素继承attribute 可在组件中设置inheritAttrs:false
    // 禁用attribute继承的常见情况是需要将attribute应用于根元素之外的其他元素
    // 我们可以通过$attrs来访问所有非props的attribute
    inheritAttrs:false,
    name:'message',
    // props:['name','text'],//数组传递 不能做限制
    props: {
      // 基础类型检查（null和undefind 会通过任何类型验证）
      message:String,
      // 多个可能的类型
      title: [String,Number],
      // 必填字符串 且带有默认值
      name:{
        type:String,
        required:true,
        default:'tom'
      },
      text:{
        type:String,
        default:'晚上好'
      },
      // 带有默认值的对象
      user:{
        type:Object,
        // 对象或数组默认值必须从一个工厂函数返回
        default() {
          return {name:'king'}
        }
      },
      // 自定义验证函数
      age: {
        validator(value) {
          // 这个值必须匹配下面数值中的一个
          return [18,19,20].includes(value);
        }
      },
      // 具有默认值的函数
      func: {
        type:Function,
        // 与对象或数组默认值不同 这不是一个工厂函数 这是一个用作默认值的函数
        default() {
          return 'default function'
        }
      }

    }


  }
</script>

<style lang="scss" scoped>

</style>