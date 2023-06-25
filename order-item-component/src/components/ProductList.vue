<template>
        <li v-for="product in productList" :key="product.sku">
      <ProductContainer :product="product"/>
    </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Product from '../types/Product';
import ProductContainer from './ProductContainer.vue';

export default defineComponent({
  name: 'ProductList',
  components:{
    ProductContainer
  },
  props: {
    productList: {
      required: true,
      type: Object as PropType<Product[]>,
    },
  },
});
</script>
