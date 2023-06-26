<template>
  <OrderList/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import OrderList from './components/OrderList.vue'

export default defineComponent({
  name: 'App',
  components: {
    OrderList
  }
})
</script>

<style>
body{
    color: #000;
    font-family: Arial,Helvetica Neue,Helvetica,sans-serif;
    font-size: 14px;
    line-height: 20px;
}
h3{
  margin:2px;
  color: #067f5e;
  font-size: 18px;
}
li{
  list-style: none;
}
#app{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
