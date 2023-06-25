<template>
  <div>
    <li v-for="productLine in productList" :key="productLine.product.sku">
      <ProductContainer :productLine="productLine"  :orderRef="orderRef" />
    </li>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
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
    orderRef: {
      required: true,
      type: String,
    },
  },
  setup(props){
    console.log(props.productList[0].product.sku)
    
  }
});
</script>
