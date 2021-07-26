<template>
  <div id="app">
    <!-- 3引入组件 -->
    <message>HEllo</message>
    <message>hi~</message>
    <counter></counter>
  </div>
</template>

<script>
// 1定义组件
import message from './components/message.vue'
import counter from './components/counter.vue'

export default {
  name: 'App',
  //2引用组件
  components: {
    message,
    counter,
  },
  data() {
    return {
    }
  },
}
</script>

<style>

</style>
