<template>
  <div id="app">
    <!-- 3引入组件 -->
    <Message>HEllo</Message>
    <Message>hi~</Message>
  </div>
</template>

<script>
// 1定义组件
import Message from './components/message.vue'

export default {
  name: 'App',
  //2引用组件
  components: {
    Message
  },
  data() {
    return {
    }
  },
}
</script>

<style>

</style>
