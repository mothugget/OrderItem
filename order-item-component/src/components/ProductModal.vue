<template>
  <div>
    <h2>Order: {{ orderProducts.orderRef }}</h2>
    <li v-for="productLine in productsWithQuantities" :key="productLine.product.sku">
      <ProductContainer :productLine="productLine" :orderRef="orderProducts.orderRef" />
    </li>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, inject, computed } from 'vue';
import ProductContainer from './ProductContainer.vue';
import ProductProp from '../types/ProductProp';
import ProductLine from '../types/ProductLine';
import Product from '../types/Product';

export default defineComponent({
  name: 'ProductModal',
  props: {
    orderProducts: {
      required: true,
      type: Object as PropType<ProductProp>,
    },
  },
    components: {
    ProductContainer,
  },
  setup(props) {
    const productList = inject<Product[]>('PRODUCT_LIST');

    const productsWithQuantities = computed(() => {
      return productList?.map((product) => {
        let quantity = 0;
        for (let knownProduct of props.orderProducts.products) {
          if (product.sku === knownProduct.sku)
            quantity = knownProduct.quantity;
        }
        return { quantity: quantity, product: product } as ProductLine;
      });
    });
    return { productsWithQuantities };
  },
});
</script>
