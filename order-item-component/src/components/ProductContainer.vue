<template>
  <div> Title {{ productLine.product.title }} Article no. {{ productLine.product.sku }} Quantity {{ productLine.quantity }}</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import ProductLine from '../types/ProductLine'

export default defineComponent({
    name: 'ProductContainer',
  props: {
    productLine: {
      required: true,
      type: Object as PropType<ProductLine>,
    },
  },
})
</script>