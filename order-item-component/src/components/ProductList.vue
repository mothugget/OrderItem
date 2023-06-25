<template>
  <div>
    <li v-for="productLine in productList" :key="productLine.product.sku">
      <ProductContainer :productLine="productLine" />
    </li>
    <button>+</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import ProductLine from '../types/ProductLine';
import ProductContainer from './ProductContainer.vue';

export default defineComponent({
  name: 'ProductList',
  components: {
    ProductContainer,
  },
  props: {
    productList: {
      required: true,
      type: Object as PropType<ProductLine[]>,
    },
  },
});
</script>
