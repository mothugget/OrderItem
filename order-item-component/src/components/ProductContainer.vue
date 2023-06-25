<template>
  {{ product }}
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Product from '../types/Product'

export default defineComponent({
    name: 'ProductContainer',
  props: {
    product: {
      required: true,
      type: Object as PropType<Product>,
    },
  },
})
</script>