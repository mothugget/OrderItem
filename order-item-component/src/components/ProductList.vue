<template>
  <div>
    <li v-for="productLine in productList" :key="productLine.product.sku">
      <ProductContainer :productLine="productLine"  :orderRef="orderRef" />
      <ProductModalVue/>
    </li>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import ProductLine from '../types/ProductLine';
import ProductContainer from './ProductContainer.vue';
import ProductModalVue from './ProductModal.vue';


export default defineComponent({
  name: 'ProductList',
  components: {
    ProductContainer,
    ProductModalVue
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
    const OrderProducts = computed()
  }
});
</script>
