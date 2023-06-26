<template>
  <OrderList />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OrderList from './components/OrderList.vue';

export default defineComponent({
  name: 'App',
  components: {
    OrderList,
  },
});
</script>

<style>
body {
  color: #000;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 14px;
  line-height: 20px;
}
h3 {
  margin: 2px;
  color: #067f5e;
  font-size: 18px;
}
li {
  list-style: none;
}
button {
  border-style: hidden;
  border-radius: 4px;
  
  font-weight: 600;
  color: #067f5e;
  background: #d2fff5;
}
input:hover, button:hover{
  cursor: pointer;
  filter: invert(15%);
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
