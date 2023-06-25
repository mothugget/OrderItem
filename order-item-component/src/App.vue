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
