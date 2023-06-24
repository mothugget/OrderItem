<template>
  <OrderItem orderRef='GNV0F'/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import OrderItem from './components/OrderItem.vue'

export default defineComponent({
  name: 'App',
  components: {
    OrderItem
  }
})
</script>
