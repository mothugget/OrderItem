<template>
  <div>{{ productLine }}</div>
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